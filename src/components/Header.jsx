import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Common classes for both desktop and mobile link
  const linkClass =
    "text-blue-900 hover:text-orange-400 transition-colors duration-300";

  // Common classes for the mobile menu links (block + extra padding)
  const mobileLinkClass =
    "block px-3 py-2 rounded-md text-blue-900 hover:bg-orange-400 hover:text-white transition-colors duration-300";

  return (
    <header className="bg-white shadow fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Nav Container */}
        <div className="flex justify-between items-center py-4">
          {/* Logo + Brand Name */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            {/* Logo Image */}
            <img
              src="/images/cotolore_logo.jpg"
              alt="Cotolore Logo"
              className="w-8 h-8"
            />
            {/* Brand Name */}
            <Link
              to="/"
              className="text-2xl font-bold text-blue-900 hover:text-orange-400 transition-colors duration-300"
            >
              Cotolore
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8 items-center text-lg font-semibold">
            <HashLink smooth to="/#home" className={linkClass}>
              Home
            </HashLink>
            <HashLink smooth to="/#about" className={linkClass}>
              About
            </HashLink>
            <HashLink smooth to="/#solutions" className={linkClass}>
              Solutions
            </HashLink>
            <HashLink smooth to="/#contact" className={linkClass}>
              Contact
            </HashLink>
            <HashLink smooth to="/#careers" className={linkClass}>
              Careers
            </HashLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className="text-blue-900 hover:text-orange-400 focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Only visible when isMobileMenuOpen is true */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <HashLink
              smooth
              to="/#home"
              className={mobileLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </HashLink>
            <HashLink
              smooth
              to="/#about"
              className={mobileLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </HashLink>
            <HashLink
              smooth
              to="/#solutions"
              className={mobileLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solutions
            </HashLink>
            <HashLink
              smooth
              to="/#contact"
              className={mobileLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </HashLink>
            <HashLink
              smooth
              to="/#careers"
              className={mobileLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Careers
            </HashLink>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
