import { ChefMascotLogo, PureVegBadge } from './Navbar';
import { contactDetails, businessAddress } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const primaryContact = contactDetails[0]; // Sandip Raval

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Royal Menu', href: '#menu' },
    { label: 'Live Counters', href: '#live-counters' },
    { label: 'Gallery Canvas', href: '#gallery' },
    { label: 'Booking Policies', href: '#policies' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#121611] text-gray-400 font-sans border-t border-white/[0.05]" id="app-footer">
      
      {/* Top half: Structured Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          
          {/* Logo, title and Tagline block */}
          <div className="col-span-1 md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <ChefMascotLogo className="h-10 w-10" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1 leading-none">
                  PUNIT <span className="text-brand-red">CATERERS</span>
                </span>
                <span className="text-[9px] font-mono tracking-widest uppercase text-brand-gold font-semibold mt-0.5">
                  THE ART OF UNMATCHED CATERING
                </span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              "The Art of Unmatched Catering. Mastered!!" — Delivering high-end pure vegetarian events with precise hospitality and traditional Indian heritage in Ahmedabad and beyond.
            </p>

            <div className="flex items-center space-x-2 pt-2">
              <PureVegBadge className="w-4 h-4" />
              <span className="text-[11px] font-bold text-green-500 uppercase tracking-wider">100% Pure Vegetarian Certified</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">Quick Navigation</h4>
            <div className="grid grid-cols-1 gap-2.5">
              {footerLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  className="text-xs text-gray-400 hover:text-brand-gold transition-colors w-fit focus:outline-none"
                  id={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact coordinates summary */}
          <div className="col-span-1 md:col-span-5 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">Reach out for Quotes</h4>
            <div className="space-y-3.5 text-xs">
              
              {/* Phone lists */}
              <div className="space-y-1.5">
                <p className="text-gray-500 font-bold uppercase text-[9px] tracking-wider">Contact Coordinates</p>
                <div className="grid grid-cols-1 gap-1">
                  {contactDetails.map((contact, i) => (
                    <a 
                      key={i} 
                      href={`tel:+91${contact.phone}`} 
                      className="hover:text-white transition-colors flex items-center space-x-2"
                    >
                      <span className="font-semibold text-brand-gold">{contact.name}:</span>
                      <span>+91 {contact.phoneDisplay}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Physical Address details */}
              <div className="space-y-1.5 pt-1 border-t border-white/[0.04]">
                <p className="text-gray-500 font-bold uppercase text-[9px] tracking-wider">Ahmedabad Office Address</p>
                <p className="text-gray-400 leading-relaxed">
                  {businessAddress.full}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom half: Copyright & disclaimer banner */}
      <div className="bg-[#0b0e0a] border-t border-white/[0.03] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[11px] text-gray-500">
            &copy; {currentYear} Punit Caterers. All rights reserved. Managed with strict 100% pure vegetarian culinary guidelines.
          </p>
          <div className="text-[10px] text-gray-600 flex items-center gap-1.5">
            <span>Crafted for Darshna, Sandip & Maitrik Raval</span>
            <span>&bull;</span>
            <a href="#policies" className="hover:text-gray-400 transition-colors">Booking Policies Apply</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
