import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { createClient } from "jsr:@supabase/supabase-js@2.49.8";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Helper to create Supabase client
const getSupabaseClient = () => createClient(
  Deno.env.get("SUPABASE_URL"),
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY"),
);

// Health check endpoint
app.get("/make-server-e9910905/health", (c) => {
  return c.json({ status: "ok" });
});

// ============ ADMIN AUTH ============

// Admin signup (one-time setup)
app.post("/make-server-e9910905/admin/signup", async (c) => {
  try {
    const { email, password, name } = await c.req.json();
    const supabase = getSupabaseClient();

    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name, role: 'admin' },
      email_confirm: true // Auto-confirm since no email server configured
    });

    if (error) {
      console.log('Admin signup error:', error);
      return c.json({ error: error.message }, 400);
    }

    return c.json({ success: true, user: data.user });
  } catch (error) {
    console.log('Admin signup exception:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Admin login
app.post("/make-server-e9910905/admin/login", async (c) => {
  try {
    const { email, password } = await c.req.json();
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL"),
      Deno.env.get("SUPABASE_ANON_KEY"),
    );

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log('Admin login error:', error);
      return c.json({ error: error.message }, 401);
    }

    return c.json({
      success: true,
      access_token: data.session.access_token,
      user: data.user
    });
  } catch (error) {
    console.log('Admin login exception:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Verify admin middleware
const verifyAdmin = async (authHeader: string | null) => {
  if (!authHeader) return null;

  const token = authHeader.split(' ')[1];
  const supabase = getSupabaseClient();
  const { data, error } = await supabase.auth.getUser(token);

  if (error || !data.user) return null;
  return data.user;
};

// ============ PROJECTS ============

// Get all projects (public only) - no auth required
app.get("/make-server-e9910905/projects", async (c) => {
  try {
    const projects = await kv.getByPrefix("project:");
    console.log('All projects:', projects.map(p => ({ id: p.id, title: p.title, is_public: p.is_public })));
    const publicProjects = projects.filter(p => p.is_public);
    console.log('Public projects:', publicProjects.map(p => ({ id: p.id, title: p.title })));
    return c.json({ projects: publicProjects });
  } catch (error) {
    console.log('Get projects error:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Get all projects (including private) - admin only
app.get("/make-server-e9910905/admin/projects", async (c) => {
  try {
    const user = await verifyAdmin(c.req.header('Authorization'));
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const projects = await kv.getByPrefix("project:");
    return c.json({ projects });
  } catch (error) {
    console.log('Get admin projects error:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Create/Update project - admin only
app.post("/make-server-e9910905/admin/projects", async (c) => {
  try {
    const user = await verifyAdmin(c.req.header('Authorization'));
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const project = await c.req.json();
    const projectId = project.id || `project:${Date.now()}`;

    const projectData = {
      ...project,
      id: projectId,
      updated_at: new Date().toISOString()
    };

    console.log('Saving project:', { id: projectData.id, title: projectData.title, is_public: projectData.is_public });
    await kv.set(projectId, projectData);
    return c.json({ success: true, project: projectData });
  } catch (error) {
    console.log('Create/update project error:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Delete project - admin only
app.delete("/make-server-e9910905/admin/projects/:id", async (c) => {
  try {
    const user = await verifyAdmin(c.req.header('Authorization'));
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const projectId = c.req.param('id');
    await kv.del(projectId);
    return c.json({ success: true });
  } catch (error) {
    console.log('Delete project error:', error);
    return c.json({ error: error.message }, 500);
  }
});

// ============ CONTACT FORM ============

// Submit contact form - public
app.post("/make-server-e9910905/contact", async (c) => {
  try {
    const formData = await c.req.json();
    const submissionId = `contact:${Date.now()}`;

    const submission = {
      ...formData,
      id: submissionId,
      submitted_at: new Date().toISOString()
    };

    await kv.set(submissionId, submission);
    return c.json({ success: true });
  } catch (error) {
    console.log('Contact form submission error:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Get all contact form submissions - admin only
app.get("/make-server-e9910905/admin/contacts", async (c) => {
  try {
    const user = await verifyAdmin(c.req.header('Authorization'));
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const contacts = await kv.getByPrefix("contact:");
    return c.json({ contacts });
  } catch (error) {
    console.log('Get contacts error:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Delete contact submission - admin only
app.delete("/make-server-e9910905/admin/contacts/:id", async (c) => {
  try {
    const user = await verifyAdmin(c.req.header('Authorization'));
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const contactId = c.req.param('id');
    await kv.del(contactId);
    return c.json({ success: true });
  } catch (error) {
    console.log('Delete contact error:', error);
    return c.json({ error: error.message }, 500);
  }
});

Deno.serve(app.fetch);