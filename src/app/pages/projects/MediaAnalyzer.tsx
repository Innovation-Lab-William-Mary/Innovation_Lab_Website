import { motion } from "motion/react";
import { ArrowLeft, BarChart3, Target, LineChart, PieChart } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function MediaAnalyzer() {
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
              Data Analytics
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">W&M Media Analyzer</h1>
            <p className="text-2xl text-slate-200 mb-8 max-w-3xl">
              AI-powered insights into campus media trends and audience engagement.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-[#F0B323]" />
                <span>Tribe Trade</span>
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
                    W&M Media Analyzer helps student organizations, campus publications, and administrative
                    departments understand what content resonates with the W&M community through advanced
                    sentiment analysis and engagement metrics.
                  </p>
                  <p>
                    By aggregating data from social media, student publications, event attendance, and surveys,
                    we provide actionable insights that help organizations craft better messaging, optimize
                    posting schedules, and measure campaign effectiveness.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
                  alt="Analytics Dashboard"
                  className="w-full h-96 object-cover"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: BarChart3, title: "Sentiment Analysis", desc: "Track audience reactions and emotional responses to content" },
                    { icon: Target, title: "Audience Insights", desc: "Understand demographics and preferences of your followers" },
                    { icon: LineChart, title: "Trend Forecasting", desc: "Predict what topics will resonate in the coming weeks" },
                    { icon: PieChart, title: "Competitive Analysis", desc: "Compare your metrics with similar campus organizations" }
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
                    <dd className="font-bold text-[#115740]">Pilot Program</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 mb-1">Tech Stack</dt>
                    <dd className="font-medium text-slate-900">Python, Pandas, D3.js, FastAPI</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 mb-1">Timeline</dt>
                    <dd className="font-medium text-slate-900">Nov 2025 - May 2026</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 mb-1">Team Size</dt>
                    <dd className="font-medium text-slate-900">5 Students</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-[#115740] rounded-2xl p-8 text-white">
                <h3 className="font-bold mb-4">Get Involved</h3>
                <p className="text-sm text-slate-200 mb-6">
                  Partner with us to analyze your organization's media presence.
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
