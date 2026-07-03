import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuExplorer from './components/MenuExplorer';
import Gallery from './components/Gallery';
import Terms from './components/Terms';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FCFBF9] selection:bg-brand-red/15 selection:text-brand-red text-gray-850" id="app-root">
      
      {/* Sticky Top Header Navigation */}
      <Navbar />

      {/* Main Single-page Section Sequences */}
      <main id="main-content-stream">
        
        {/* Hero Banner Section */}
        <Hero />

        {/* Live Searchable Food Menu Explorer */}
        <MenuExplorer />

        {/* Real Event Gallery Grid */}
        <Gallery />

        {/* Collapsible Booking Terms Accordion */}
        <Terms />

        {/* Dynamic Enquiry Planner Form & Map */}
        <ContactForm />

      </main>

      {/* Structured Site Footer */}
      <Footer />

      {/* Smooth Back to Top Arrow Speed Dial */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-brand-red hover:bg-brand-red-dark text-white p-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 z-50 hover:-translate-y-1 focus:outline-none"
          title="Back to Top"
          aria-label="Back to top"
          id="scroll-to-top-button"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}

