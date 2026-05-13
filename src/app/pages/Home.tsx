import image_image__4_ from '@/imports/image__4_.jpg'
import { motion } from "motion/react";
import { ArrowRight, ChevronRight, Zap, Target, Users, Wrench, Lightbulb, Code, Calendar } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SuggestionWidget } from "../components/SuggestionWidget";
import { Link } from "react-router";

export function Home() {
  return (
    <div className="w-full flex flex-col">
      <SuggestionWidget />
      {/* 1. Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1670284768187-5cc68eada1b3?q=80&w=2000"
            alt="W&M Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#115740]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-6"
          >
            Bridging the Gap <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0B323] to-yellow-200">
              Between Learning & Execution.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed"
          >
            The Student Technology Innovation Lab is W&M's internal technology consulting team—where students solve real-world university challenges and turn campus into a living laboratory.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-sm text-[#115740] bg-[#F0B323] hover:bg-yellow-400 transition-all shadow-lg hover:shadow-yellow-400/20"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#join"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-sm text-white bg-transparent border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              Get Involved
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. About / Mission */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-sm overflow-hidden">
                <ImageWithFallback
                  src={image_image__4_}
                  alt="Students Collaborating"
                  className="w-11/12 h-11/12 object-c rounded-[4px]over m-auto rounded-[10px]"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-[#F0B323] font-bold tracking-wider uppercase text-sm mb-3">Our Mission</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-slate-900">
                A Catalyst for Experiential Learning.
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                The Innovation Lab functions as an internal technology consulting team where students tackle real operational challenges across William & Mary. This joint venture between W&M IT and the Entrepreneurship Hub creates a startup-like environment where students build practical solutions while earning academic credit.
              </p>

              <ul className="space-y-5 mb-10">
                {[
                  "Hands-on experience solving real university problems",
                  "Cross-functional teams (Developers, UX Designers, Business Analysts)",
                  "Mentorship from W&M IT professionals and faculty"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-sm bg-[#115740]/10 flex items-center justify-center mt-1 mr-4">
                      <ChevronRight className="w-4 h-4 text-[#115740]" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#join" className="inline-flex items-center font-bold text-[#115740] hover:text-[#0b3829] transition-colors group">
                Learn how to get involved
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              How the Lab Works
            </h2>
            <p className="text-lg text-slate-600">A semester-based, agile workflow that transforms real university challenges into portfolio-worthy projects.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Student Teams",
                desc: "2-5 students per project working ~10 hours/week in cross-functional roles: Developers, Project Leads, UX Designers, and Business Analysts.",
                color: "green"
              },
              {
                icon: Target,
                title: "Real Problems",
                desc: "University departments submit operational challenges—from automating workflows to building data dashboards—that become student projects.",
                color: "green"
              },
              {
                icon: Code,
                title: "Practical Solutions",
                desc: "Students build functional web apps, automation tools, and systems that solve actual W&M needs while earning academic credit.",
                color: "green"
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-white rounded-sm p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 rounded-sm bg-[#115740]/5 flex items-center justify-center mb-6">
                  <pillar.icon className="w-7 h-7 text-[#115740]" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Current Projects */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#115740] font-bold tracking-wider uppercase text-sm mb-3">Project Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Current Projects
            </h3>
            <p className="text-lg text-slate-600">Real solutions built by students to solve real university challenges.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "W&M BillTracker",
                category: "Legislative Intelligence",
                team: "Spring 2026 Team",
                desc: "Legislative intelligence dashboard syncing with Virginia LIS to track, classify, and prioritize bills impacting William & Mary—automating what used to be manual research.",
                image: "https://images.unsplash.com/photo-1624417963912-8532660d9de8?q=80&w=1000",
                link: "/projects/bill-tracker"
              },
              {
                title: "Presidential Office Automation Suite",
                category: "AI Workflow Tools",
                team: "Fall 2025 Team",
                desc: "AI-driven suite saving presidential staff hours of administrative work weekly.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
                link: "/projects/presidential-suite"
              },
              {
                title: "PDF Accessibility Reviewer",
                category: "Compliance & Accessibility",
                team: "Spring 2026 Team",
                desc: "Web-based tool scanning PDFs for WCAG 2.1 AA compliance, providing automated alt-text remediation and batch processing for university documents.",
                image: "https://images.unsplash.com/photo-1698047681432-006d2449c631?q=80&w=1000",
                link: "/projects/pdf-accessibility"
              },
              {
                title: "Campus Quest",
                category: "Proposed Project",
                team: "Seeking Team",
                desc: "Gamification app turning campus exploration into an interactive experience—helping new students discover W&M while earning rewards and building community.",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000",
                link: "/projects/campus-quest"
              },
              {
                title: "Sustainability Data Dashboard",
                category: "Proposed Project",
                team: "Seeking Team",
                desc: "Real-time dashboard integrating energy usage, waste metrics, and carbon footprint data across campus to support W&M's sustainability goals.",
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000",
                link: "/projects/sustainability-dashboard"
              },
              {
                title: "IT Helpdesk AI Chatbot",
                category: "Proposed Project",
                team: "Seeking Team",
                desc: "AI-powered chatbot to handle common IT support requests, reducing helpdesk ticket volume and providing 24/7 first-line support for students and staff.",
                image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000",
                link: "/projects/it-chatbot"
              }
            ].map((project, i) => (
              <Link key={i} to={project.link}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-sm overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all group cursor-pointer h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#115740]/80 to-transparent" />
                    <span className="absolute top-4 right-4 px-3 py-1 backdrop-blur-sm text-xs font-bold rounded-sm bg-[#F0B323]/90 text-[#115740]">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h4>
                    <p className="text-sm font-bold mb-3 text-[#115740]">{project.team}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{project.desc}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="#join" className="inline-flex items-center px-8 py-3 bg-[#F0B323] text-[#115740] font-bold rounded-sm hover:bg-yellow-400 transition-colors">
              Submit a Project Proposal
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* 6. Get Involved */}
      <section id="programs" className="py-24 bg-[#115740] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-[#F0B323] font-bold tracking-wider uppercase text-sm mb-3">Get Involved</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-4">Join the Lab.</h3>
              <p className="text-[#A5B8B0] text-lg">Multiple ways to participate—as a student, client, or supporter.</p>
            </div>
            <a href="#join" className="mt-6 md:mt-0 inline-flex items-center text-white hover:text-[#A5B8B0] transition-colors font-medium border-b border-white hover:border-[#A5B8B0] pb-1">
              Apply or submit a project <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/10 border border-white/20 rounded-sm overflow-hidden group hover:bg-white/15 transition-all">
              <div className="h-64 relative overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1599592187465-6dc742367282?q=80&w=1000"
                  alt="Student team working"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#115740]/90 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center space-x-2">
                  <Users className="w-6 h-6 text-white" />
                  <h4 className="text-2xl font-bold">Student Positions</h4>
                </div>
              </div>
              <div className="p-8">
                <p className="text-[#A5B8B0] mb-6">Join a semester-based project team working ~10 hours/week. Roles include Developer, Project Lead, UX Designer, and Business Analyst. Build your portfolio while earning academic credit.</p>
                <button className="px-6 py-2.5 bg-[#F0B323] text-[#115740] font-bold rounded-sm hover:bg-yellow-400 transition-colors">
                  Apply for Next Semester
                </button>
              </div>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Submit a Project",
                  icon: Target,
                  desc: "University departments: Have an operational challenge? Submit a project proposal and let student teams build a solution for you."
                },
                {
                  title: "Fund the Lab",
                  icon: Zap,
                  desc: "Support the lab through endowments, grants, or project sponsorships. Help sustain this experiential learning opportunity."
                },
                {
                  title: "Become a Mentor",
                  icon: Users,
                  desc: "Alumni and industry professionals: Share your expertise by mentoring student teams on real-world technology projects."
                }
              ].map((prog, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-sm border border-white/10 hover:border-white/30 transition-colors bg-white/5">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 text-white rounded-sm flex items-center justify-center">
                    <prog.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{prog.title}</h4>
                    <p className="text-[#A5B8B0] leading-relaxed text-sm md:text-base">{prog.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. News & Updates */}
      <section id="news" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#115740] font-bold tracking-wider uppercase text-sm mb-3">Latest Updates</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">
              News from the Lab
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Stay informed about the latest developments, achievements, and opportunities at the Innovation Lab.
            </p>
          </div>

          <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex gap-6 min-w-max">
              {[
              {
                date: "April 15, 2026",
                category: "Achievement",
                title: "W&M BillTracker Wins Regional Innovation Award",
                desc: "Our student team took home first place at the Virginia Tech Challenge, earning $5,000 in funding for the lab.",
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000"
              },
              {
                date: "April 10, 2026",
                category: "Announcement",
                title: "New 3D Printing Lab Opens in Jones Hall",
                desc: "State-of-the-art prototyping facility now available to all W&M students with expanded hours and advanced equipment.",
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000"
              },
              {
                date: "April 5, 2026",
                category: "Partnership",
                title: "Innovation Lab Partners with Local Startups",
                desc: "New mentorship program connects students with Williamsburg entrepreneurs for real-world project experience.",
                image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000"
              },
              {
                date: "March 28, 2026",
                category: "Event",
                title: "Spring Demo Day Attracts Record Attendance",
                desc: "Over 200 students, faculty, and investors attended our largest Demo Day showcase featuring 12 student ventures.",
                image: "https://images.unsplash.com/photo-1559223607-a43c990c923a?q=80&w=1000"
              },
              {
                date: "March 20, 2026",
                category: "Funding",
                title: "$50K Grant Awarded for AI Research",
                desc: "Innovation Lab receives funding from the Virginia Innovation Partnership to support student AI and machine learning projects.",
                image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=1000"
              },
              {
                date: "March 15, 2026",
                category: "Community",
                title: "Alumni Mentor Network Expands",
                desc: "50+ W&M alumni from leading tech companies join as mentors for current Innovation Lab participants.",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000"
              }
              ].map((news, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-sm overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex-shrink-0 w-80"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-sm bg-[#F0B323] text-[#115740]">
                      {news.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-slate-500 font-medium mb-2">{news.date}</p>
                    <h4 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{news.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{news.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="#news" className="inline-flex items-center px-8 py-3 bg-[#115740] text-white font-bold rounded-sm hover:bg-[#0b3829] transition-colors">
              View All News
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* 8. Upcoming Events */}
      <section id="events" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Upcoming Events
            </h2>
            <p className="text-lg text-slate-600">Join our vibrant community of builders and thinkers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                date: "Oct 15",
                type: "Hackathon",
                title: "Innovation Lab Showcase",
                desc: "Annual showcase of student projects. Open to all W&M students, faculty, and staff with demos and presentations.",
                time: "Friday 5:00 PM - Sunday 2:00 PM"
              },
              {
                date: "Oct 22",
                type: "Workshop",
                title: "Intro to 3D Modeling",
                desc: "Learn the basics of Fusion360 and prepare your first print on our Prusa machines.",
                time: "Wednesday 4:00 PM - 6:00 PM"
              },
              {
                date: "Nov 05",
                type: "Pitch Comp",
                title: "Fall Demo Day",
                desc: "Watch our current incubator cohort pitch their startups to a panel of alumni investors.",
                time: "Thursday 6:30 PM - 9:00 PM"
              }
            ].map((event, i) => (
              <div key={i} className="bg-white rounded-sm overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all group">
                <div className="h-3 w-full bg-[#115740]" />
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-center p-3 rounded-sm border min-w-[70px] bg-slate-50 border-slate-100">
                      <span className="block text-sm font-bold text-slate-500 uppercase">{event.date.split(' ')[0]}</span>
                      <span className="block text-2xl font-black text-[#115740]">{event.date.split(' ')[1]}</span>
                    </div>
                    <span className="inline-block px-3 py-1 text-xs font-bold rounded-sm uppercase tracking-wide bg-[#F0B323]/10 text-[#c28e10]">
                      {event.type}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#115740] transition-colors">{event.title}</h4>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">{event.desc}</p>
                  <div className="flex items-center text-xs font-medium text-slate-500 border-t border-slate-100 pt-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-white border-2 border-[#F0B323] text-[#115740] font-bold rounded-sm hover:bg-[#F0B323] hover:text-[#115740] transition-colors">
              View Full Calendar
            </button>
          </div>
        </div>
      </section>

      {/* 9. CTA / Join */}
      <section id="join" className="py-24 bg-[#F0B323] relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white opacity-10 rounded-sm blur-3xl mix-blend-overlay" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-[#115740] opacity-10 rounded-sm blur-3xl mix-blend-overlay" />
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="text-[#115740]">Get in</span>{" "}
              <span className="text-[#115740]">Touch</span>
            </h2>
            <p className="text-xl text-[#115740]/80 font-medium">
              Interested in joining the lab, supporting our mission, or learning more? We'd love to hear from you.
            </p>
          </div>

          <form className="bg-white rounded-sm p-8 shadow-lg space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:ring-2 focus:ring-[#115740]/20 focus:border-[#115740] text-slate-900 placeholder:text-slate-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@wm.edu"
                  className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:ring-2 focus:ring-[#115740]/20 focus:border-[#115740] text-slate-900 placeholder:text-slate-400"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-bold text-slate-700 mb-2">
                I'm interested in...
              </label>
              <select
                id="interest"
                className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:ring-2 focus:ring-[#115740]/20 focus:border-[#115740] text-slate-900"
                required
              >
                <option value="">Select an option</option>
                <option value="student">Applying as a student (Developer, PM, UX, BA)</option>
                <option value="project">Submitting a project proposal (W&M Dept.)</option>
                <option value="funding">Providing funding or endowment</option>
                <option value="mentorship">Becoming a mentor</option>
                <option value="partnership">Partnership opportunities</option>
                <option value="other">Other inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">
                Additional Comments
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us more about your interest or ask any questions..."
                className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:ring-2 focus:ring-[#115740]/20 focus:border-[#115740] text-slate-900 placeholder:text-slate-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#115740] text-white font-bold rounded-sm hover:bg-[#0b3829] transition-colors shadow-lg hover:shadow-xl"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}