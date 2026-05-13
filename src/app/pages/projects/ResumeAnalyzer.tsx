import { motion } from "motion/react";
import { ArrowLeft, FileCheck, Sparkles, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function ResumeAnalyzer() {
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
            <span className="inline-block px-4 py-2 bg-[#F0B323]/20 text-[#F0B323] rounded-full text-sm font-bold mb-6">
              Career Tech
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Resume Analyzer</h1>
            <p className="text-2xl text-slate-200 mb-8 max-w-3xl">
              AI-driven resume optimization to help students land their dream internships and jobs.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <FileCheck className="w-5 h-5 mr-2 text-[#F0B323]" />
                <span>CycleSafe</span>
              </div>
              <div className="h-4 w-px bg-white/30" />
              <span>Spring 2026</span>
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
                    Resume Analyzer uses machine learning trained on thousands of successful resumes to provide
                    instant, personalized feedback on formatting, content, keywords, and ATS (Applicant Tracking
                    System) compatibility.
                  </p>
                  <p>
                    Whether you're applying to tech giants, consulting firms, or nonprofits, our tool
                    tailors suggestions to your target industry and provides concrete examples of how to
                    strengthen weak bullet points and quantify your impact.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1698047681432-006d2449c631?q=80&w=1200"
                  alt="Resume review process"
                  className="w-full h-96 object-cover"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: FileCheck, title: "ATS Compatibility", desc: "Ensure your resume passes automated screening systems" },
                    { icon: Sparkles, title: "Smart Suggestions", desc: "Get AI-powered recommendations for improving bullet points" },
                    { icon: CheckCircle, title: "Industry Benchmarking", desc: "Compare your resume against top performers in your field" },
                    { icon: AlertCircle, title: "Error Detection", desc: "Catch typos, formatting issues, and inconsistencies" }
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start space-x-4 p-6 bg-slate-50 rounded-xl">
                      <div className="p-3 bg-[#115740]/10 rounded-lg">
                        <feature.icon className="w-6 h-6 text-[#115740]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
                        <p className="text-sm text-slate-600">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-6">Project Details</h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-slate-500 mb-1">Status</dt>
                    <dd className="font-bold text-[#115740]">Live & Active</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 mb-1">Tech Stack</dt>
                    <dd className="font-medium text-slate-900">OpenAI GPT-4, React, Node.js</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 mb-1">Timeline</dt>
                    <dd className="font-medium text-slate-900">Jul 2025 - Feb 2026</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 mb-1">Team Size</dt>
                    <dd className="font-medium text-slate-900">3 Students</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-[#115740] rounded-2xl p-8 text-white">
                <h3 className="font-bold mb-4">Get Involved</h3>
                <p className="text-sm text-slate-200 mb-6">
                  Try the tool for free or contribute to our training dataset.
                </p>
                <a
                  href="#join"
                  className="block w-full text-center px-6 py-3 bg-[#F0B323] text-[#115740] font-bold rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  Contact Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
