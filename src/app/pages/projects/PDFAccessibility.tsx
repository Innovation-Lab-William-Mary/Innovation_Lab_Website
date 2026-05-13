import { motion } from "motion/react";
import { ArrowLeft, FileCheck, Scan, Image, List } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function PDFAccessibility() {
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
              Compliance & Accessibility
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">PDF Accessibility Reviewer</h1>
            <p className="text-2xl text-slate-200 mb-8 max-w-3xl">
              Automated WCAG compliance checking and remediation for university documents.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <FileCheck className="w-5 h-5 mr-2 text-[#F0B323]" />
                <span>Spring 2026 Team</span>
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
                    The PDF Accessibility Reviewer is a web-based tool that scans PDF documents for WCAG 2.1
                    AA compliance, identifies accessibility issues, and provides automated remediation options.
                    The system helps W&M meet legal requirements while making content accessible to all users.
                  </p>
                  <p>
                    With batch processing capabilities, the tool can review entire document repositories,
                    generate compliance reports, and suggest fixes—dramatically reducing the time required
                    for manual accessibility audits across thousands of university PDFs.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1698047681432-006d2449c631?q=80&w=1200"
                  alt="Accessibility testing interface"
                  className="w-full h-96 object-cover"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: Scan, title: "WCAG Compliance Scan", desc: "Automated detection of accessibility violations against WCAG 2.1 AA standards" },
                    { icon: Image, title: "Alt-Text Generation", desc: "AI-powered alt-text suggestions for images missing descriptions" },
                    { icon: List, title: "Batch Processing", desc: "Process hundreds of PDFs simultaneously for department-wide audits" },
                    { icon: FileCheck, title: "Remediation Reports", desc: "Detailed fix recommendations with priority rankings" }
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start space-x-4 p-6 bg-slate-50">
                      <div className="p-3 bg-[#115740]/10">
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
              <div className="bg-slate-50 p-8 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-6">Project Details</h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-slate-500 mb-1">Status</dt>
                    <dd className="font-bold text-[#115740]">In Development</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 mb-1">Client</dt>
                    <dd className="font-medium text-slate-900">Office of Accessibility</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 mb-1">Timeline</dt>
                    <dd className="font-medium text-slate-900">Jan 2026 - May 2026</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 mb-1">Team</dt>
                    <dd className="font-medium text-slate-900">2 Developers, 1 PM</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-[#115740] p-8 text-white">
                <h3 className="font-bold mb-4">Get Involved</h3>
                <p className="text-sm text-slate-200 mb-6">
                  Interested in accessibility and compliance projects?
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
