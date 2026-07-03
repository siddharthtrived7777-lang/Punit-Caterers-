import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { contactDetails } from '../data';

// Helper component for 100% Pure Veg badge
export const PureVegBadge = ({ className = "w-5 h-5" }: { className?: string }) => (
  <div 
    className={`border-2 border-[#388E3C] p-0.5 bg-white flex items-center justify-center rounded-sm shrink-0 ${className}`} 
    title="100% Pure Vegetarian Certified"
    id="veg-badge-indicator"
  >
    <div className="w-full h-full bg-[#388E3C] rounded-full" />
  </div>
);

export const ChefMascotLogo = ({ className = "h-10 w-10" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" id="chef-mascot-logo">
    <path d="M14 26C14 18.5 20 15 26 15C28 9 36 9 38 15C44 15 50 18.5 50 26C50 32 44 35 42 35H22C20 35 14 32 14 26Z" fill="#7B8E76" />
    <path d="M20 33H44V44C44 46.2 42.2 48 40 48H24C21.8 48 20 46.2 20 44V33Z" fill="#C5A059" />
    <path d="M18 35C18 35 25 37 32 37C39 37 46 35 46 35" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    <circle cx="28" cy="40" r="1.5" fill="#FFFFFF" />
    <circle cx="36" cy="40" r="1.5" fill="#FFFFFF" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const primaryContact = contactDetails[0]; // Sandip Raval

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Policies', href: '#policies' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-white/80 backdrop-blur-xs py-4'
      }`}
      id="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Brand section */}
          <a href="#home" className="flex items-center space-x-2 group focus:outline-none" id="nav-brand-logo">
            <ChefMascotLogo className="h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-gray-900 flex items-center gap-1.5 leading-none">
                PUNIT <span className="text-brand-red">CATERERS</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.2em] uppercase text-brand-gold font-semibold mt-0.5">
                Pure Veg Catering
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans font-medium text-sm text-gray-700 hover:text-brand-red transition-colors focus:outline-none focus:text-brand-red"
                id={`nav-link-${link.name.toLowerCase().replace(' ', '-')}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Badges & Quick Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <div className="flex items-center bg-green-50 px-2.5 py-1 rounded-full border border-green-200 text-xs text-green-800 font-medium space-x-1.5">
              <PureVegBadge className="w-4 h-4" />
              <span>100% Pure Veg</span>
            </div>
            
            {/* Smaller View Menu Button for Quick Access */}
            <a 
              href="#menu" 
              className="border border-brand-red text-brand-red hover:bg-brand-red hover:text-white text-xs font-semibold px-3.5 py-2 rounded-full shadow-xs transition-all duration-200 flex items-center space-x-1"
              id="nav-desktop-view-menu"
            >
              <span>🍽️ View Menu</span>
            </a>
            
            <a 
              href={`https://wa.me/91${primaryContact.phone}?text=Hi,%20I'd%20like%20a%20catering%20quote`}
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-2 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
              title="Chat with Darshna on WhatsApp"
              id="nav-quick-whatsapp"
            >
              <MessageSquare className="w-4 h-4 fill-white text-transparent" />
            </a>

            <a 
              href={`tel:+91${primaryContact.phone}`}
              className="bg-brand-red hover:bg-brand-red-dark text-white text-xs font-semibold px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-200 flex items-center space-x-1.5"
              id="nav-quick-call"
            >
              <Phone className="w-3 h-3 fill-white" />
              <span>Call Darshna</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Small View Menu Button for mobile quick access */}
            <a 
              href="#menu" 
              onClick={() => setIsOpen(false)}
              className="bg-brand-red text-white text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-full shadow-xs hover:bg-brand-red-dark transition-all duration-200 flex items-center space-x-1"
              id="nav-mobile-view-menu"
            >
              <span>🍽️ Menu</span>
            </a>

            {/* Pure Veg Badge also visible on smallest mobile screens */}
            <div className="flex items-center bg-green-50 px-2 py-0.5 rounded-full border border-green-200 text-[10px] text-green-800 font-semibold space-x-1 sm:hidden" id="nav-mobile-veg-badge-container">
              <PureVegBadge className="w-3.5 h-3.5" />
              <span>Veg</span>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-brand-red p-2 rounded-md focus:outline-none"
              aria-label="Toggle menu"
              id="mobile-menu-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-[60px] bg-white border-b border-gray-200 shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        id="mobile-navigation-drawer"
      >
        <div className="px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-brand-red transition-all"
              id={`mobile-nav-link-${link.name.toLowerCase().replace(' ', '-')}`}
            >
              {link.name}
            </a>
          ))}
          
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5 sm:hidden">
            <div className="flex items-center justify-center bg-green-50 py-2 rounded-lg border border-green-100 text-xs text-green-800 font-medium space-x-2">
              <PureVegBadge className="w-4 h-4" />
              <span>100% Pure Vegetarian Catering</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a 
                href={`https://wa.me/91${primaryContact.phone}?text=Hi,%20I'd%20like%20a%20catering%20quote`}
                target="_blank"
                referrerPolicy="no-referrer"
                className="bg-[#25D366] text-white py-2.5 rounded-lg font-medium text-xs flex items-center justify-center space-x-1.5 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white text-transparent" />
                <span>WhatsApp</span>
              </a>
              <a 
                href={`tel:+91${primaryContact.phone}`}
                className="bg-brand-red text-white py-2.5 rounded-lg font-medium text-xs flex items-center justify-center space-x-1.5 shadow-sm"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Quote</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
