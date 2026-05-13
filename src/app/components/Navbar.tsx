import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import logo from "../../imports/WM_Logo_Horizontal_Green_Gold.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Programs", path: "#programs" },
    { name: "News", path: "#news" },
    { name: "Events", path: "#events" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-gradient-to-b from-black/70 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src={logo}
              alt="William & Mary"
              className="h-5 w-auto"
            />
            <div className="h-5 w-px bg-slate-300" />
            <span
              className={`font-bold text-base tracking-tight transition-colors duration-300 ${
                isScrolled ? "text-[#115740]" : "text-white"
              }`}
            >
              Innovation Lab
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={`/${link.path}`}
                className={`text-sm font-medium transition-colors hover:text-[#F0B323] ${
                  isScrolled ? "text-slate-600" : "text-slate-200"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/#join"
              className={`px-4 py-2 rounded-sm text-sm font-bold transition-transform hover:scale-105 ${
                isScrolled
                  ? "bg-[#115740] text-white hover:bg-[#115740]/90"
                  : "bg-[#F0B323] text-[#115740] hover:bg-yellow-400"
              }`}
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-sm ${
                isScrolled ? "text-slate-800" : "text-white"
              }`}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={`/${link.path}`}
                className="block px-3 py-3 rounded-sm text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-[#115740]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/#join"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-5 py-3 rounded-sm text-base font-bold bg-[#115740] text-white hover:bg-[#115740]/90"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}