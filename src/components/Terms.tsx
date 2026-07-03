import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, FileText, Landmark, Key, ShieldAlert, BadgeInfo } from 'lucide-react';
import { bookingTerms } from '../data';

type TermCategory = 'all' | 'payment' | 'setup' | 'policy' | 'quality';

export default function Terms() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<TermCategory>('all');

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Associate each of the 15 items with a category tag
  const categorizedTerms = bookingTerms.map((term, index) => {
    let category: TermCategory = 'policy';
    let icon = <FileText className="w-4.5 h-4.5 text-brand-gold" />;

    const titleLower = term.title.toLowerCase();
    if (titleLower.includes('payment') || titleLower.includes('date') || titleLower.includes('tax') || titleLower.includes('extra guest')) {
      category = 'payment';
      icon = <Landmark className="w-4.5 h-4.5 text-brand-red" />;
    } else if (titleLower.includes('provision') || titleLower.includes('setup') || titleLower.includes('utensil') || titleLower.includes('electri')) {
      category = 'setup';
      icon = <Key className="w-4.5 h-4.5 text-brand-sage" />;
    } else if (titleLower.includes('taste') || titleLower.includes('outstation') || titleLower.includes('staff')) {
      category = 'quality';
      icon = <BadgeInfo className="w-4.5 h-4.5 text-blue-500" />;
    } else {
      category = 'policy';
      icon = <ShieldAlert className="w-4.5 h-4.5 text-amber-500" />;
    }

    return {
      ...term,
      originalIndex: index,
      category,
      icon
    };
  });

  const filteredTerms = categorizedTerms.filter(t => {
    if (selectedCategory === 'all') return true;
    return t.category === selectedCategory;
  });

  const categories = [
    { label: 'All Policies', value: 'all' as TermCategory },
    { label: 'Payments & Rates', value: 'payment' as TermCategory },
    { label: 'Venue & Setup', value: 'setup' as TermCategory },
    { label: 'Rules & Liability', value: 'policy' as TermCategory },
    { label: 'Logistics & Freshness', value: 'quality' as TermCategory }
  ];

  return (
    <section id="policies" className="py-20 md:py-28 bg-[#FDFCF7] scroll-mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-brand-gold font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
            TRANSPARENT COLLABORATION
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mt-4 leading-tight">
            Booking Terms & Policies
          </h2>
          <p className="font-sans text-gray-500 text-sm sm:text-base mt-3 leading-relaxed">
            Please review our event policies. We maintain transparency to ensure your celebration executes flawlessly without any dynamic surprises.
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8" id="terms-category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setSelectedCategory(cat.value);
                setOpenIndex(null); // Reset open accordion
              }}
              className={`font-sans text-[11px] sm:text-xs font-bold px-3.5 py-2 rounded-lg border transition-all ${
                selectedCategory === cat.value
                  ? 'bg-brand-sage text-white border-brand-sage shadow-xs'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-brand-sage/40 hover:bg-gray-50'
              }`}
              id={`terms-filter-btn-${cat.value}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion Container */}
        <div className="bg-white border border-gray-100 shadow-md rounded-2xl p-4 sm:p-6 space-y-3" id="terms-accordion">
          {filteredTerms.map((term) => {
            const isExpanded = openIndex === term.originalIndex;
            return (
              <div 
                key={term.originalIndex}
                className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                  isExpanded 
                    ? 'border-brand-gold/45 bg-amber-50/5 shadow-xs' 
                    : 'border-gray-100 bg-white hover:border-gray-200'
                }`}
                id={`terms-item-${term.originalIndex}`}
              >
                {/* Header click bar */}
                <button
                  onClick={() => toggleAccordion(term.originalIndex)}
                  className="w-full flex items-center justify-between p-4 text-left font-display font-semibold text-gray-950 focus:outline-none focus:text-brand-red"
                  aria-expanded={isExpanded}
                  id={`terms-toggle-btn-${term.originalIndex}`}
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <div className="shrink-0 p-1.5 bg-gray-50 rounded-lg">
                      {term.icon}
                    </div>
                    <span className="text-sm sm:text-base leading-snug">{term.title}</span>
                  </div>
                  <div className="shrink-0 text-gray-400">
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-brand-gold" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Collapsible panel with height animation */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-4 pb-5 pt-1 text-xs sm:text-sm text-gray-600 border-t border-gray-100 leading-relaxed bg-white">
                        <p className="font-sans leading-relaxed">{term.details}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Important reminder notice */}
        <p className="text-center text-xs text-gray-500 font-sans mt-6 italic">
          * Terms are subject to final mutual sign-off on the formal written catering contract.
        </p>

      </div>
    </section>
  );
}
