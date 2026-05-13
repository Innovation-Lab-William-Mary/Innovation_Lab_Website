import { motion } from "motion/react";
import { Users, Handshake } from "lucide-react";

export function Partners() {
  const partners = [
    {
      name: "Tribe Careers",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=200&fit=crop",
      description: "Career development and job placement services"
    },
    {
      name: "W&M IT",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
      description: "Information Technology Services"
    },
    {
      name: "Entrepreneurship Hub",
      logo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=200&fit=crop",
      description: "Fostering innovation and entrepreneurial thinking"
    }
  ];

  const advisoryBoard = [
    {
      name: "Kathleen Powell",
      role: "Senior Advisor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      name: "Doug Schmidt",
      role: "Technical Advisor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Graham",
      role: "Strategic Advisor",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
    },
    {
      name: "Ed",
      role: "Industry Advisor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#115740] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Our Partners & Advisors
            </h1>
            <p className="text-xl text-[#A5B8B0] max-w-3xl mx-auto">
              Building the Innovation Lab through collaboration and expert guidance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Handshake className="w-8 h-8 text-[#F0B323]" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Our Partners
              </h2>
            </div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We collaborate with key organizations across William & Mary to deliver exceptional experiential learning opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-sm border-2 border-slate-100 p-8 hover:border-[#F0B323] hover:shadow-lg transition-all"
              >
                <div className="aspect-video bg-slate-100 rounded-sm overflow-hidden mb-6">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{partner.name}</h3>
                <p className="text-sm text-slate-600">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Users className="w-8 h-8 text-[#115740]" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Advisory Board
              </h2>
            </div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Distinguished leaders guiding the Innovation Lab's strategic direction and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisoryBoard.map((advisor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-sm shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{advisor.name}</h3>
                  <p className="text-sm text-[#115740] font-medium">{advisor.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#115740]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Interested in Partnering?
          </h2>
          <p className="text-[#A5B8B0] text-lg mb-8">
            We're always looking to expand our network of partners and advisors to support student innovation
          </p>
          <a
            href="/#join"
            className="inline-flex items-center px-8 py-3 bg-[#F0B323] text-[#115740] font-bold rounded-sm hover:bg-yellow-400 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
