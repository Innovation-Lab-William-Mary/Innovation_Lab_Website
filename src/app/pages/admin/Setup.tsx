import { useState } from "react";
import { useNavigate } from "react-router";
import { projectId, publicAnonKey } from "../../../../utils/supabase/info";

const INITIAL_PROJECTS = [
  {
    title: "W&M BillTracker",
    category: "Legislative Intelligence",
    team: "Spring 2026 Team",
    desc: "Legislative intelligence dashboard syncing with Virginia LIS to track, classify, and prioritize bills impacting William & Mary—automating what used to be manual research.",
    image: "https://images.unsplash.com/photo-1624417963912-8532660d9de8?q=80&w=1000",
    link: "/projects/bill-tracker",
    is_public: true
  },
  {
    title: "Presidential Office Automation Suite",
    category: "AI Workflow Tools",
    team: "Fall 2025 Team",
    desc: "AI-driven suite saving presidential staff hours of administrative work weekly.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
    link: "/projects/presidential-suite",
    is_public: true
  },
  {
    title: "PDF Accessibility Reviewer",
    category: "Compliance & Accessibility",
    team: "Spring 2026 Team",
    desc: "Web-based tool scanning PDFs for WCAG 2.1 AA compliance, providing automated alt-text remediation and batch processing for university documents.",
    image: "https://images.unsplash.com/photo-1698047681432-006d2449c631?q=80&w=1000",
    link: "/projects/pdf-accessibility",
    is_public: true
  },
  {
    title: "Campus Quest",
    category: "Proposed Project",
    team: "Seeking Team",
    desc: "Gamification app turning campus exploration into an interactive experience—helping new students discover W&M while earning rewards and building community.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000",
    link: "/projects/campus-quest",
    is_public: true
  },
  {
    title: "Sustainability Data Dashboard",
    category: "Proposed Project",
    team: "Seeking Team",
    desc: "Real-time dashboard integrating energy usage, waste metrics, and carbon footprint data across campus to support W&M's sustainability goals.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000",
    link: "/projects/sustainability-dashboard",
    is_public: true
  },
  {
    title: "IT Helpdesk AI Chatbot",
    category: "Proposed Project",
    team: "Seeking Team",
    desc: "AI-powered chatbot to handle common IT support requests, reducing helpdesk ticket volume and providing 24/7 first-line support for students and staff.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000",
    link: "/projects/it-chatbot",
    is_public: true
  }
];

export function AdminSetup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [step, setStep] = useState<"admin" | "projects" | "complete">("admin");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const createAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-e9910905/admin/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify({ email, password, name })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Signup failed");
        setLoading(false);
        return;
      }

      setStep("projects");
      setLoading(false);
    } catch (err) {
      console.error("Signup error:", err);
      setError("An error occurred during signup");
      setLoading(false);
    }
  };

  const seedProjects = async () => {
    setLoading(true);
    setError("");

    try {
      // First login to get token
      const loginResponse = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-e9910905/admin/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify({ email, password })
        }
      );

      const loginData = await loginResponse.json();
      const token = loginData.access_token;

      // Add all projects
      for (const project of INITIAL_PROJECTS) {
        await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-e9910905/admin/projects`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(project)
          }
        );
      }

      setStep("complete");
      setLoading(false);
    } catch (err) {
      console.error("Seed error:", err);
      setError("An error occurred seeding projects");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
            Admin Setup
          </h2>
          <p className="mt-2 text-center text-sm text-slate-600">
            {step === "admin" && "Create your admin account"}
            {step === "projects" && "Load initial projects"}
            {step === "complete" && "Setup complete!"}
          </p>
        </div>

        {step === "admin" && (
          <form className="mt-8 space-y-6" onSubmit={createAdmin}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm">
                {error}
              </div>
            )}
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none rounded-sm relative block w-full px-3 py-2 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-[#115740] focus:border-[#115740] sm:text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-sm relative block w-full px-3 py-2 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-[#115740] focus:border-[#115740] sm:text-sm"
                  placeholder="admin@wm.edu"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-bold text-slate-700 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-sm relative block w-full px-3 py-2 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-[#115740] focus:border-[#115740] sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-sm text-white bg-[#115740] hover:bg-[#0b3829] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#115740] disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Admin Account"}
            </button>
          </form>
        )}

        {step === "projects" && (
          <div className="mt-8 space-y-6">
            <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-sm">
              <p className="font-bold mb-2">Admin account created!</p>
              <p className="text-sm">Now let's load your initial projects into the database.</p>
            </div>
            <button
              onClick={seedProjects}
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-sm text-white bg-[#115740] hover:bg-[#0b3829] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#115740] disabled:opacity-50"
            >
              {loading ? "Loading projects..." : "Load Initial Projects"}
            </button>
          </div>
        )}

        {step === "complete" && (
          <div className="mt-8 space-y-6">
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-sm">
              <p className="font-bold mb-2">✓ Setup Complete!</p>
              <p className="text-sm">Your admin account and initial projects have been created.</p>
            </div>
            <button
              onClick={() => navigate("/admin/login")}
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-sm text-white bg-[#115740] hover:bg-[#0b3829]"
            >
              Go to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
