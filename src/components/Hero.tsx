import { motion } from 'motion/react';
import { MessageSquare, CalendarRange, Sparkles, ArrowRight } from 'lucide-react';
import { contactDetails } from '../data';
import { PureVegBadge } from './Navbar';

export default function Hero() {
  const primaryContact = contactDetails[0]; // Sandip Raval

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-24 sm:pt-28 flex items-center bg-radial from-amber-50/50 via-white to-orange-50/30 overflow-hidden"
    >
      {/* Decorative Traditional Indian Mandala Motif SVG in the background */}
      <div className="absolute right-[-10%] top-[10%] opacity-10 pointer-events-none w-[50%] max-w-[600px] aspect-square text-brand-gold">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
          {Array.from({ length: 12 }).map((_, i) => (
            <line 
              key={i} 
              x1="50" 
              y1="50" 
              x2={50 + 40 * Math.cos((i * 30 * Math.PI) / 180)} 
              y2={50 + 40 * Math.sin((i * 30 * Math.PI) / 180)} 
              stroke="currentColor" 
              strokeWidth="0.2" 
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text and details */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Pure Veg Indicator & Small Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center lg:justify-start space-x-2.5 self-center lg:self-start bg-green-50/90 border border-green-200 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-green-800 shadow-xs"
              id="hero-veg-indicator"
            >
              <PureVegBadge className="w-4.5 h-4.5" />
              <span className="tracking-wide">100% PURE VEGETARIAN CATERING</span>
              <Sparkles className="w-4 h-4 text-brand-gold animate-pulse" />
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-3">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight"
                id="hero-heading"
              >
                The Art of Unmatched Catering. <br />
                <span className="text-brand-red relative inline-block">
                  Mastered!!
                  <span className="absolute left-0 bottom-1 h-1.5 w-full bg-brand-gold/45 rounded-xs"></span>
                </span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              id="hero-description"
            >
              Crafting premium culinary memories in Ahmedabad since decades. From majestic weddings 
              and traditional family events to modern corporate banquets, we blend rich Gujarati legacy 
              with global gourmet trends—expertly curated, 100% pure vegetarian.
            </motion.p>

            {/* Primary Calls to Action */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-once"
              id="hero-ctas"
            >
              <a 
                href="#contact" 
                className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-200 flex items-center justify-center space-x-2.5 text-base"
                id="hero-cta-enquire"
              >
                <CalendarRange className="w-5 h-5 text-white/90" />
                <span>Enquire Now</span>
              </a>

              <a 
                href={`https://wa.me/91${primaryContact.phone}?text=Hi,%20I'd%20like%20a%20catering%20quote`}
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-200 flex items-center justify-center space-x-2.5 text-base"
                id="hero-cta-whatsapp"
              >
                <MessageSquare className="w-5 h-5 fill-white text-transparent" />
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>

            {/* Explore Menu Button - Full width on mobile with a premium red gradient, rounded corners, subtle shadow, and a right-arrow icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full flex justify-center lg:justify-start mt-1"
              id="hero-explore-menu-wrapper"
            >
              <a 
                href="#menu" 
                className="w-full sm:w-auto bg-gradient-to-r from-brand-red to-rose-500 hover:from-brand-red-dark hover:to-rose-600 text-white font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-xl hover:translate-y-[-2px] transition-all duration-200 flex items-center justify-center space-x-2 group text-base"
                id="hero-cta-explore-menu"
              >
                <span>🍽️ Explore Full Menu</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200" />
              </a>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="pt-6 sm:pt-8 grid grid-cols-3 gap-4 border-t border-gray-100 max-w-md mx-auto lg:mx-0"
              id="hero-stats"
            >
              <div className="text-center lg:text-left">
                <p className="text-xl sm:text-2xl font-bold font-display text-brand-red">100%</p>
                <p className="text-xs text-gray-500 font-medium">Pure Veg Guaranteed</p>
              </div>
              <div className="text-center lg:text-left border-x border-gray-100 px-4">
                <p className="text-xl sm:text-2xl font-bold font-display text-brand-red">Ahmedabad</p>
                <p className="text-xs text-gray-500 font-medium">Outstation Serviced</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-xl sm:text-2xl font-bold font-display text-brand-red">Any Size</p>
                <p className="text-xs text-gray-500 font-medium">Intimate to Grand</p>
              </div>
            </motion.div>

          </div>

          {/* Hero images / visual block */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square max-w-[420px] sm:max-w-[460px] lg:max-w-none"
              id="hero-visual-frame"
            >
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border border-brand-gold/30 animate-spin-slow pointer-events-none"></div>
              
              {/* Main Circular Food Image */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop" 
                  alt="Luxurious catering table spread" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  referrerPolicy="no-referrer"
                  id="hero-main-img"
                />
              </div>

              {/* Smaller overlapping floating card with vegetarian chef details */}
              <div className="absolute bottom-4 left-[-10px] bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center space-x-3 max-w-[200px] sm:max-w-[240px] animate-bounce-slow">
                <div className="p-2 bg-brand-sage-light rounded-xl">
                  <svg className="w-6 h-6 text-brand-sage" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Customized Menus</p>
                  <p className="text-[10px] text-gray-500 font-medium leading-normal">Tailored food planners for every custom budget</p>
                </div>
              </div>

              {/* Floating green badge indicator */}
              <div className="absolute top-6 right-2 bg-white/95 px-3 py-2 rounded-xl shadow-lg border border-green-100 flex items-center space-x-2">
                <PureVegBadge className="w-5 h-5" />
                <span className="text-[11px] font-bold text-green-800 tracking-wider">PURE VEG ONLY</span>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Wave Divider SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] fill-white rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] md:h-[45px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.41,70.3,10.3,111.43,11.87c64.22,2.44,129.56-4.31,193.36-11.87C310.6,1.4,316,3.4,321.39,56.44Z" />
        </svg>
      </div>

    </section>
  );
}
