import { motion } from "motion/react";
import { ArrowLeft, Leaf, Users, Trophy, TrendingUp } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function EcoTrack() {
  return (
    <div className="w-full flex flex-col pt-20">
      {/* Back Button */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <a href="/#projects" className="inline-flex items-center text-[#115740] hover:text-[#0b3829] font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#115740] to-[#0b3829] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-[#F0B323]/20 text-[#F0B323] rounded-full text-sm font-bold mb-6">
              Sustainability Tech
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">EcoTrack</h1>
            <p className="text-2xl text-slate-200 mb-8 max-w-3xl">
              Gamifying sustainability to reduce W&M's carbon footprint, one student at a time.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-[#F0B323]" />
                <span>Team Green</span>
              </div>
              <div className="h-4 w-px bg-white/30" />
              <span>Spring 2026</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">About the Project</h2>
                <div className="prose prose-lg max-w-none text-slate-600">
                  <p>
                    EcoTrack is a mobile-first platform designed to help William & Mary students measure,
                    track, and reduce their personal carbon footprint through daily actions and campus-wide
                    competitions.
                  </p>
                  <p>
                    By combining behavioral science with gamification mechanics, we're making sustainability
                    engaging and actionable. Students earn points for eco-friendly choices like biking to class,
                    using reusable containers, attending green events, and more.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200"
                  alt="EcoTrack App Interface"
                  className="w-full h-96 object-cover"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: Leaf, title: "Carbon Calculator", desc: "Track daily activities and see real-time carbon impact" },
                    { icon: Trophy, title: "Leaderboards", desc: "Compete with dorms, clubs, and individuals" },
                    { icon: TrendingUp, title: "Progress Insights", desc: "Visualize your impact over time with detailed analytics" },
                    { icon: Users, title: "Team Challenges", desc: "Join or create group sustainability challenges" }
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

            {/* Sidebar */}
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
                    <dd className="font-medium text-slate-900">React Native, Firebase, Node.js</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 mb-1">Timeline</dt>
                    <dd className="font-medium text-slate-900">Jan 2026 - May 2026</dd>
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
                  Interested in joining the team or beta testing the app?
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
