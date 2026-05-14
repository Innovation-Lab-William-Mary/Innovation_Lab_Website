import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { projectId, publicAnonKey } from "../../../../utils/supabase/info";
import { Edit2, Trash2, Eye, EyeOff, Plus, Mail, LogOut } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  team: string;
  desc: string;
  image: string;
  link: string;
  is_public: boolean;
}

interface Contact {
  id: string;
  name: string;
  email: string;
  interest: string;
  message: string;
  submitted_at: string;
}

export function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"projects" | "contacts">("projects");
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("admin_token");

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
      return;
    }
    loadData();
  }, [token]);

  const loadData = async () => {
    try {
      // Load projects
      const projectsRes = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-e9910905/admin/projects`,
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
      );
      const projectsData = await projectsRes.json();
      setProjects(projectsData.projects || []);

      // Load contacts
      const contactsRes = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-e9910905/admin/contacts`,
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
      );
      const contactsData = await contactsRes.json();
      setContacts(contactsData.contacts || []);

      setLoading(false);
    } catch (error) {
      console.error("Error loading data:", error);
      setLoading(false);
    }
  };

  const togglePublic = async (project: Project) => {
    try {
      const updatedProject = { ...project, is_public: !project.is_public };
      await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-e9910905/admin/projects`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(updatedProject)
        }
      );
      loadData();
    } catch (error) {
      console.error("Error toggling project:", error);
    }
  };

  const deleteProject = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-e9910905/admin/projects/${id}`,
        {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
      );
      loadData();
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const saveProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;

    try {
      await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-e9910905/admin/projects`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(editingProject)
        }
      );
      setShowEditModal(false);
      setEditingProject(null);
      loadData();
    } catch (error) {
      console.error("Error saving project:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_user");
    navigate("/admin/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-slate-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-[#115740] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <button
              onClick={logout}
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-sm transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("projects")}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === "projects"
                  ? "border-[#115740] text-[#115740]"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveTab("contacts")}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === "contacts"
                  ? "border-[#115740] text-[#115740]"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              Contact Submissions ({contacts.length})
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "projects" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Manage Projects</h2>
              <button
                onClick={() => {
                  setEditingProject({
                    id: "",
                    title: "",
                    category: "",
                    team: "",
                    desc: "",
                    image: "",
                    link: "",
                    is_public: false
                  });
                  setShowEditModal(true);
                }}
                className="flex items-center space-x-2 px-4 py-2 bg-[#115740] text-white rounded-sm hover:bg-[#0b3829]"
              >
                <Plus className="w-4 h-4" />
                <span>Add Project</span>
              </button>
            </div>

            <div className="bg-white shadow-sm rounded-sm overflow-hidden">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-700 uppercase">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-700 uppercase">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-700 uppercase">Team</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-700 uppercase">Status</th>
                    <th className="px-6 py-3 text-right text-xs font-bold text-slate-700 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {projects.map((project) => (
                    <tr key={project.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                        {project.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                        {project.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                        {project.team}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-bold rounded-sm ${
                          project.is_public
                            ? "bg-green-100 text-green-800"
                            : "bg-slate-100 text-slate-800"
                        }`}>
                          {project.is_public ? "Public" : "Private"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => togglePublic(project)}
                            className="text-slate-600 hover:text-[#115740]"
                            title={project.is_public ? "Make Private" : "Make Public"}
                          >
                            {project.is_public ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                          </button>
                          <button
                            onClick={() => {
                              setEditingProject(project);
                              setShowEditModal(true);
                            }}
                            className="text-slate-600 hover:text-[#115740]"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteProject(project.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "contacts" && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Form Submissions</h2>
            <div className="space-y-4">
              {contacts.map((contact) => (
                <div key={contact.id} className="bg-white shadow-sm rounded-sm p-6 border border-slate-200">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-[#115740]" />
                      <div>
                        <h3 className="font-bold text-slate-900">{contact.name}</h3>
                        <p className="text-sm text-slate-600">{contact.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-slate-500">
                        {new Date(contact.submitted_at).toLocaleDateString()}
                      </span>
                      <button
                        onClick={async () => {
                          if (!confirm("Delete this contact submission?")) return;
                          try {
                            await fetch(
                              `https://${projectId}.supabase.co/functions/v1/make-server-e9910905/admin/contacts/${contact.id}`,
                              {
                                method: "DELETE",
                                headers: {
                                  "Authorization": `Bearer ${token}`
                                }
                              }
                            );
                            loadData();
                          } catch (error) {
                            console.error("Error deleting contact:", error);
                          }
                        }}
                        className="text-red-600 hover:text-red-800 p-1"
                        title="Delete submission"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-medium text-slate-700">Interest: {contact.interest}</p>
                    {contact.message && (
                      <p className="mt-2 text-sm text-slate-600">{contact.message}</p>
                    )}
                  </div>
                </div>
              ))}
              {contacts.length === 0 && (
                <p className="text-center text-slate-500 py-8">No contact submissions yet.</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {showEditModal && editingProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                {editingProject.id ? "Edit Project" : "Add New Project"}
              </h2>
              <form onSubmit={saveProject} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={editingProject.title}
                    onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-sm focus:ring-[#115740] focus:border-[#115740]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Category</label>
                  <input
                    type="text"
                    value={editingProject.category}
                    onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-sm focus:ring-[#115740] focus:border-[#115740]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Team</label>
                  <input
                    type="text"
                    value={editingProject.team}
                    onChange={(e) => setEditingProject({ ...editingProject, team: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-sm focus:ring-[#115740] focus:border-[#115740]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Description</label>
                  <textarea
                    value={editingProject.desc}
                    onChange={(e) => setEditingProject({ ...editingProject, desc: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-sm focus:ring-[#115740] focus:border-[#115740]"
                    rows={3}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Image URL</label>
                  <input
                    type="url"
                    value={editingProject.image}
                    onChange={(e) => setEditingProject({ ...editingProject, image: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-sm focus:ring-[#115740] focus:border-[#115740]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Link/Slug</label>
                  <input
                    type="text"
                    value={editingProject.link}
                    onChange={(e) => setEditingProject({ ...editingProject, link: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-sm focus:ring-[#115740] focus:border-[#115740]"
                    placeholder="/projects/project-name"
                    required
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="is_public"
                    checked={editingProject.is_public}
                    onChange={(e) => setEditingProject({ ...editingProject, is_public: e.target.checked })}
                    className="w-4 h-4 text-[#115740] border-slate-300 rounded focus:ring-[#115740]"
                  />
                  <label htmlFor="is_public" className="ml-2 text-sm font-medium text-slate-700">
                    Make this project public
                  </label>
                </div>
                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setShowEditModal(false);
                      setEditingProject(null);
                    }}
                    className="px-4 py-2 border border-slate-300 rounded-sm text-slate-700 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#115740] text-white rounded-sm hover:bg-[#0b3829]"
                  >
                    Save Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
