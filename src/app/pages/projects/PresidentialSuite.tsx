import { motion } from "motion/react";
import { ArrowLeft, Mail, Inbox, FileText, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function PresidentialSuite() {
  return (
    <div className="w-full flex flex-col pt-20">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <a href="/#projects" className="inline-flex items-center text-[#115740] hover:text-[#0b3829] font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </a>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#115740] to-[#0b3829] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-[#F0B323]/20 text-[#F0B323] text-sm font-bold mb-6">
              AI Workflow Tools
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Presidential Office Automation Suite</h1>
            <p className="text-2xl text-slate-200 mb-8 max-w-3xl">
              AI-driven tools saving presidential staff hours of administrative work weekly.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-[#F0B323]" />
                <span>Fall 2025 Team</span>
              </div>
              <div className="h-4 w-px bg-white/30" />
              <span>Fall 2025</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">About the Project</h2>
                <div className="prose prose-lg max-w-none text-slate-600">
                  <p>
                    The Presidential Office Automation Suite is a collection of AI-powered tools designed to
                    streamline repetitive administrative tasks in the President's office. The suite includes
                    three core applications that leverage large language models to draft correspondence,
                    prioritize communications, and assist with formal documentation.
                  </p>
                  <p>
                    By automating routine writing tasks, the suite frees up senior staff to focus on strategic
                    priorities and high-value interactions. The system maintains the President's voice and tone
                    while ensuring consistency and accuracy across all automated outputs.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
                  alt="AI automation dashboard"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 p-8 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-6">Project Details</h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-slate-500 mb-1">Status</dt>
                    <dd className="font-bold text-[#115740]">Deployed</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 mb-1">Client</dt>
                    <dd className="font-medium text-slate-900">Office of the President</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 mb-1">Timeline</dt>
                    <dd className="font-medium text-slate-900">Aug 2025 - Dec 2025</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 mb-1">Team</dt>
                    <dd className="font-medium text-slate-900">3 Developers, 1 UX Designer</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-[#115740] p-8 text-white">
                <h3 className="font-bold mb-4">Get Involved</h3>
                <p className="text-sm text-slate-200 mb-6">
                  Interested in building AI-powered tools for campus operations?
                </p>
                <a
                  href="#join"
                  className="block w-full text-center px-6 py-3 bg-[#F0B323] text-[#115740] font-bold hover:bg-yellow-400 transition-colors"
                >
                  Join the Lab
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
