import { motion } from "motion/react";
import { ArrowLeft, Heart, Headphones, Users2, Moon } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function MindfulU() {
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
              Mental Health
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">MindfulU</h1>
            <p className="text-2xl text-slate-200 mb-8 max-w-3xl">
              Mental wellness platform designed specifically for the unique challenges of college life.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <Heart className="w-5 h-5 mr-2 text-[#F0B323]" />
                <span>Wellness Warriors</span>
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
                    MindfulU provides evidence-based mental wellness tools tailored to the stressors college
                    students face: exam anxiety, homesickness, social pressures, and academic overwhelm.
                  </p>
                  <p>
                    Our platform combines guided meditations, cognitive behavioral therapy exercises,
                    mood tracking, and anonymous peer support circles—all designed with input from W&M's
                    Counseling Center and validated by student feedback.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200"
                  alt="Meditation and mindfulness"
                  className="w-full h-96 object-cover"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: Headphones, title: "Guided Meditations", desc: "5-20 minute sessions for stress, focus, and sleep" },
                    { icon: Moon, title: "Sleep Tracker", desc: "Monitor patterns and improve sleep hygiene" },
                    { icon: Users2, title: "Peer Circles", desc: "Anonymous support groups moderated by trained students" },
                    { icon: Heart, title: "Mood Journal", desc: "Track emotional patterns and identify triggers" }
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
                    <dd className="font-bold text-[#115740]">Beta Testing</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 mb-1">Tech Stack</dt>
                    <dd className="font-medium text-slate-900">Flutter, Firebase, Swift</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 mb-1">Timeline</dt>
                    <dd className="font-medium text-slate-900">Aug 2025 - Apr 2026</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 mb-1">Team Size</dt>
                    <dd className="font-medium text-slate-900">7 Students</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-[#115740] rounded-2xl p-8 text-white">
                <h3 className="font-bold mb-4">Get Involved</h3>
                <p className="text-sm text-slate-200 mb-6">
                  Join our beta program or contribute to content creation.
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
