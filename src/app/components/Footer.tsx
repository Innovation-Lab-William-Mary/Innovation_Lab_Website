import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#115740] text-white pt-16 pb-8 border-t-[8px] border-[#F0B323]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">
              W&M Innovation Lab
            </h3>
            <p className="text-[#A5B8B0] text-sm leading-relaxed max-w-xs">
              W&M's internal technology consulting team where students solve real university challenges through experiential learning.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-[#A5B8B0] hover:text-[#F0B323] transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-[#A5B8B0] hover:text-[#F0B323] transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-[#A5B8B0] hover:text-[#F0B323] transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#F0B323] mb-6">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-[#A5B8B0] hover:text-white transition-colors text-sm">About the Lab</a></li>
              <li><a href="#projects" className="text-[#A5B8B0] hover:text-white transition-colors text-sm">Project Portfolio</a></li>
              <li><a href="#programs" className="text-[#A5B8B0] hover:text-white transition-colors text-sm">Get Involved</a></li>
              <li><a href="#news" className="text-[#A5B8B0] hover:text-white transition-colors text-sm">News & Updates</a></li>
              <li><a href="#events" className="text-[#A5B8B0] hover:text-white transition-colors text-sm">Events</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-[#F0B323] mb-6">For Students</h4>
            <ul className="space-y-3">
              <li><a href="#join" className="text-[#A5B8B0] hover:text-white transition-colors text-sm">Apply to Join</a></li>
              <li><a href="#projects" className="text-[#A5B8B0] hover:text-white transition-colors text-sm">View Open Projects</a></li>
              <li><a href="#" className="text-[#A5B8B0] hover:text-white transition-colors text-sm">Student Roles</a></li>
              <li><a href="#" className="text-[#A5B8B0] hover:text-white transition-colors text-sm">Collaboration Hub</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-[#F0B323] mb-6">Contact & Visit</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-sm text-[#A5B8B0]">
                <MapPin className="h-5 w-5 mr-3 text-[#F0B323] shrink-0" />
                <span>Jones Hall, 3rd Floor<br/>Williamsburg, VA 23185</span>
              </li>
              <li className="flex items-center text-sm text-[#A5B8B0]">
                <Mail className="h-5 w-5 mr-3 text-[#F0B323] shrink-0" />
                <a href="mailto:innovate@wm.edu" className="hover:text-white">innovate@wm.edu</a>
              </li>
              <li className="flex items-center text-sm text-[#A5B8B0]">
                <Phone className="h-5 w-5 mr-3 text-[#F0B323] shrink-0" />
                <span>(757) 221-1234</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1a6b4f] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#A5B8B0]">
          <p>&copy; {new Date().getFullYear()} William & Mary Innovation Lab. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}