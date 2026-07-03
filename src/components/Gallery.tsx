import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image, Camera, ZoomIn } from 'lucide-react';
import { galleryImages } from '../data';

type ImageCategory = 'all' | 'dishes' | 'setup' | 'decor';

export default function Gallery() {
  const [filter, setFilter] = useState<ImageCategory>('all');

  const filteredImages = galleryImages.filter(img => {
    if (filter === 'all') return true;
    return img.category === filter;
  });

  const filterTabs = [
    { label: 'Show All', value: 'all' as ImageCategory },
    { label: 'Exquisite Dishes', value: 'dishes' as ImageCategory },
    { label: 'Buffet & Setup', value: 'setup' as ImageCategory },
    { label: 'Event Decor', value: 'decor' as ImageCategory },
  ];

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-brand-gold font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
            VISUAL SPLENDOR
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 mt-4 leading-tight">
            Our Culinary Canvas
          </h2>
          <p className="font-sans text-gray-500 text-sm sm:text-base mt-3 leading-relaxed">
            A visual glimpse into our curated buffet counters, vibrant live kitchen stages, and beautifully styled event decor. Real client photos from Ahmedabad.
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-12" id="gallery-filter-tabs">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`font-sans text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full border transition-all duration-250 ${
                filter === tab.value
                  ? 'bg-brand-red text-white border-brand-red shadow-md shadow-brand-red/10'
                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-brand-red/30 hover:bg-white'
              }`}
              id={`gallery-filter-btn-${tab.value}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Images Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" 
          id="gallery-images-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={image.id}
                className="group relative aspect-4/3 rounded-2xl overflow-hidden shadow-md hover:shadow-xl bg-gray-50 border border-gray-100"
                id={`gallery-card-${image.id}`}
              >
                {/* Main Food Photo */}
                <img 
                  src={image.imageUrl} 
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Hover overlay detail block */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="space-y-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-brand-gold uppercase">
                      {image.category === 'dishes' ? 'Royal Dish' : image.category === 'setup' ? 'Premium Setup' : 'Luxe Decor'}
                    </span>
                    <h4 className="font-display font-bold text-lg text-white tracking-wide">{image.title}</h4>
                    <div className="flex items-center space-x-1 text-xs text-brand-sage font-medium pt-1.5">
                      <Camera className="w-3.5 h-3.5" />
                      <span>Ahmedabad event photo</span>
                    </div>
                  </div>
                </div>

                {/* Floating zoom indicator icon for desktop visual feedback */}
                <div className="absolute top-4 right-4 bg-white/95 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-4 h-4 text-brand-red" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Informative placeholder note */}
        <div className="mt-12 text-center" id="gallery-footnote">
          <p className="font-sans text-xs text-gray-500 flex items-center justify-center gap-1.5 max-w-md mx-auto leading-relaxed">
            <Image className="w-4 h-4 text-brand-gold shrink-0" />
            <span>Real photos of wedding buffets and corporate layouts. Custom themed layouts can be organized to match your function color palette.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
