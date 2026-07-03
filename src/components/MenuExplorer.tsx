import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, BookOpen, UtensilsCrossed, AlertCircle, X } from 'lucide-react';
import { menuCategories } from '../data';
import { MenuCategory, MenuItem } from '../types';
import { PureVegBadge } from './Navbar';

export default function MenuExplorer() {
  const [activeCategoryId, setActiveCategoryId] = useState(menuCategories[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle active category selection with dynamic smooth scrolling
  const handleCategorySelect = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    
    setTimeout(() => {
      const el = document.getElementById('menu-display-area');
      if (el) {
        const rect = el.getBoundingClientRect();
        const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        
        // Dynamic offset calculation based on viewport and active elements
        let offset = 100;
        
        if (window.innerWidth < 1024) {
          // On mobile/tablet, account for navbar + dynamic height of multi-row sticky category grid
          const tabs = document.getElementById('menu-mobile-tabs');
          const navbarHeight = window.innerWidth < 640 ? 56 : 68;
          const tabsHeight = tabs ? tabs.getBoundingClientRect().height : 120;
          offset = navbarHeight + tabsHeight + 12;
        } else {
          // On desktop, account for the main sticky navbar
          offset = 110;
        }
        
        window.scrollTo({
          top: rect.top + scrollTop - offset,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  // Handle active category selection
  const activeCategory = useMemo(() => {
    return menuCategories.find(c => c.id === activeCategoryId) || menuCategories[0];
  }, [activeCategoryId]);

  // Handle search logic
  // Filters items dynamically based on query
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = searchQuery.toLowerCase();

    const matchedCategories: {
      categoryName: string;
      categoryId: string;
      subCategories: {
        name: string;
        items: MenuItem[];
      }[];
    }[] = [];

    menuCategories.forEach(category => {
      const matchedSubs: { name: string; items: MenuItem[] }[] = [];

      category.subCategories.forEach(sub => {
        const matchedItems = sub.items.filter(item => 
          item.name.toLowerCase().includes(query) || 
          (item.description && item.description.toLowerCase().includes(query))
        );

        if (matchedItems.length > 0) {
          matchedSubs.push({
            name: sub.name,
            items: matchedItems
          });
        }
      });

      // If category name matches but items didn't, or subcategories matched
      if (matchedSubs.length > 0 || category.name.toLowerCase().includes(query)) {
        matchedCategories.push({
          categoryName: category.name,
          categoryId: category.id,
          subCategories: matchedSubs.length > 0 ? matchedSubs : category.subCategories
        });
      }
    });

    return matchedCategories;
  }, [searchQuery]);

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#FDFCF7] relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-brand-gold font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
            THE ROYAL FLAVORS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 mt-4 leading-tight">
            Explore Our Grand Menu
          </h2>
          <p className="font-sans text-gray-500 text-sm sm:text-base mt-3 leading-relaxed">
            Delicately curated pure vegetarian collections. Select a category below or search live for your favorite delicacies.
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-4 rounded-full" />
        </div>

        {/* Live Search Box */}
        <div className="max-w-xl mx-auto mb-12" id="menu-search-container">
          <div className="relative shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl bg-white border border-gray-200">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <Search className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Search dishes (e.g. Paneer Butter Masala, Sizzling Brownie, Dosa)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-11 py-4 font-sans text-sm sm:text-base rounded-2xl bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
              id="menu-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-brand-red transition-colors"
                title="Clear search"
                id="menu-search-clear"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          
          {searchQuery && (
            <p className="text-xs text-center text-gray-500 mt-2.5 font-sans" id="search-active-hint">
              Showing search results matching "<span className="font-semibold text-brand-red">{searchQuery}</span>"
            </p>
          )}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Conditional Rendering: If NOT searching, show categories navigation on the left / top */}
          {!searchQuery && (
            <>
              {/* Desktop Sidebar: Grid of Categories (LG viewport and above) */}
              <div className="hidden lg:block lg:col-span-3 sticky top-28 bg-white border border-gray-100 shadow-sm rounded-2xl p-4 max-h-[80vh] overflow-y-auto custom-scrollbar" id="menu-desktop-sidebar">
                <div className="text-xs font-mono tracking-widest text-brand-gold font-bold mb-4 uppercase flex items-center gap-1">
                  <UtensilsCrossed className="w-3.5 h-3.5" />
                  <span>Categories ({menuCategories.length})</span>
                </div>
                <div className="space-y-1">
                  {menuCategories.map((category) => {
                    const isActive = category.id === activeCategoryId;
                    return (
                      <button
                        key={category.id}
                        onClick={() => handleCategorySelect(category.id)}
                        className={`w-full text-left font-sans text-sm font-medium px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-between ${
                          isActive 
                            ? 'bg-brand-red text-white shadow-md shadow-brand-red/15' 
                            : 'text-gray-700 hover:bg-brand-sage-light hover:text-brand-red'
                        }`}
                        id={`desktop-category-btn-${category.id}`}
                      >
                        <span className="truncate">{category.name}</span>
                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Multi-Row Category Navigation Grid */}
              <div className="block lg:hidden w-full sticky top-[56px] sm:top-[68px] bg-[#FDFCF7] z-20 py-3 border-b border-gray-100" id="menu-mobile-tabs">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 w-full">
                  {menuCategories.map((category) => {
                    const isActive = category.id === activeCategoryId;
                    return (
                      <button
                        key={category.id}
                        onClick={() => handleCategorySelect(category.id)}
                        className={`font-sans text-xs font-semibold px-3 h-10 rounded-full border transition-all flex items-center justify-center text-center leading-tight truncate ${
                          isActive
                            ? 'bg-brand-red text-white border-brand-red shadow-sm'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-brand-red/30'
                        }`}
                        id={`mobile-category-btn-${category.id}`}
                        title={category.name}
                      >
                        <span className="truncate">{category.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {/* Menu Items Area */}
          <div className={`col-span-1 ${searchQuery ? 'lg:col-span-12' : 'lg:col-span-9'}`} id="menu-display-area">
            
            <AnimatePresence mode="wait">
              {searchQuery ? (
                /* Search Results View */
                <motion.div
                  key="search-results"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-12"
                  id="menu-search-results-list"
                >
                  {searchResults && searchResults.length > 0 ? (
                    searchResults.map((catResult) => (
                      <div key={catResult.categoryId} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 md:p-8">
                        <div className="border-b border-gray-100 pb-3 mb-6 flex items-center justify-between">
                          <h3 className="font-display font-bold text-xl text-gray-900 flex items-center gap-2">
                            <span className="text-brand-red">{catResult.categoryName}</span>
                          </h3>
                          <div className="flex items-center space-x-1.5 bg-green-50 px-2 py-0.5 rounded-md text-[10px] text-green-800 font-semibold border border-green-100">
                            <PureVegBadge className="w-3 h-3" />
                            <span>Veg Only</span>
                          </div>
                        </div>

                        <div className="space-y-8">
                          {catResult.subCategories.map((sub, sIdx) => (
                            <div key={sIdx} className="space-y-4">
                              <h4 className="font-display font-semibold text-sm text-brand-gold uppercase tracking-wider">{sub.name}</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {sub.items.map((item, iIdx) => (
                                  <div 
                                    key={iIdx} 
                                    className="p-4 rounded-xl border border-gray-50 bg-gray-50/40 flex justify-between items-start space-x-4 hover:border-brand-gold/20 hover:bg-amber-50/10 transition-all"
                                  >
                                    <div className="space-y-1">
                                      <div className="flex items-center space-x-1.5">
                                        <div className="border border-green-600 p-0.5 rounded-xs w-3 h-3 flex items-center justify-center shrink-0">
                                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                                        </div>
                                        <h5 className="font-sans font-bold text-sm text-gray-900 leading-none">{item.name}</h5>
                                        {item.isPopular && (
                                          <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-sm text-[9px] font-extrabold bg-amber-50 border border-amber-200 text-amber-700 uppercase tracking-wider">
                                            <Sparkles className="w-2.5 h-2.5 text-brand-gold fill-brand-gold" /> Popular
                                          </span>
                                        )}
                                      </div>
                                      {item.description && (
                                        <p className="text-xs text-gray-500 leading-normal font-sans pr-4">{item.description}</p>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    /* Search Empty State */
                    <div className="text-center bg-white border border-gray-100 shadow-sm rounded-2xl py-16 px-4">
                      <div className="p-3 bg-red-50 rounded-full w-14 h-14 flex items-center justify-center mx-auto text-brand-red">
                        <AlertCircle className="w-7 h-7" />
                      </div>
                      <h4 className="font-display font-bold text-lg text-gray-900 mt-4">No delicious matches found</h4>
                      <p className="font-sans text-sm text-gray-500 max-w-sm mx-auto mt-2 leading-relaxed">
                        We couldn't find any dish named "<span className="font-medium text-brand-red">{searchQuery}</span>". Try searching other terms like 'Paneer', 'Sweets', 'Soup', or 'Dosa'.
                      </p>
                      <button
                        onClick={() => setSearchQuery('')}
                        className="mt-5 text-xs font-bold text-brand-red border border-brand-red px-4 py-2 rounded-lg hover:bg-brand-red hover:text-white transition-colors"
                      >
                        Show All Categories
                      </button>
                    </div>
                  )}
                </motion.div>
              ) : (
                /* Standard Category View */
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white border border-gray-100 shadow-md rounded-2xl p-5 sm:p-8 md:p-10 space-y-10"
                  id={`menu-category-display-${activeCategory.id}`}
                >
                  {/* Category Header */}
                  <div className="border-b border-gray-100 pb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="space-y-1.5">
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 flex items-center gap-2">
                        {activeCategory.name}
                      </h3>
                      {activeCategory.description && (
                        <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xl">{activeCategory.description}</p>
                      )}
                    </div>
                    {/* Strict 100% Pure Veg Certificate Indicator */}
                    <div className="self-start sm:self-center flex items-center space-x-2 bg-green-50/80 px-3 py-1.5 rounded-lg text-xs text-green-800 font-bold border border-green-100 shrink-0">
                      <PureVegBadge className="w-4 h-4" />
                      <span>100% Veg Certified</span>
                    </div>
                  </div>

                  {/* Nested Subcategories & Items */}
                  <div className="space-y-10">
                    {activeCategory.subCategories.map((sub, sIdx) => (
                      <div key={sIdx} className="space-y-4" id={`subcategory-${sub.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        {/* Subcategory Label */}
                        <div className="flex items-center space-x-3">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                          <h4 className="font-display font-semibold text-sm sm:text-base text-brand-gold uppercase tracking-widest">{sub.name}</h4>
                          <span className="flex-1 h-[1px] bg-gray-100" />
                        </div>

                        {/* Items Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {sub.items.map((item, iIdx) => (
                            <div 
                              key={iIdx} 
                              className="p-4 rounded-xl border border-gray-50 bg-gray-50/40 hover:bg-white hover:border-brand-gold/20 hover:shadow-sm transition-all duration-300 flex justify-between items-start space-x-3"
                            >
                              <div className="space-y-1">
                                <div className="flex items-center space-x-1.5 flex-wrap gap-y-1">
                                  {/* Authentic Indian Pure Vegetarian tiny square sign on each item */}
                                  <div className="border border-[#388E3C] p-0.5 rounded-xs w-3 h-3 flex items-center justify-center shrink-0">
                                    <div className="w-1.5 h-1.5 bg-[#388E3C] rounded-full" />
                                  </div>
                                  <h5 className="font-sans font-bold text-sm sm:text-base text-gray-900 leading-tight">{item.name}</h5>
                                  
                                  {item.isPopular && (
                                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-sm text-[9px] font-extrabold bg-amber-50 border border-amber-200 text-amber-700 uppercase tracking-wider">
                                      <Sparkles className="w-2.5 h-2.5 text-brand-gold fill-brand-gold animate-pulse" /> Popular
                                    </span>
                                  )}
                                </div>
                                {item.description && (
                                  <p className="text-xs text-gray-500 leading-normal font-sans pr-2 mt-0.5">{item.description}</p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Note block regarding complete customizable physical menus */}
            <div className="mt-8 bg-amber-50/60 border border-amber-100 rounded-2xl p-5 flex items-start space-x-3.5" id="menu-customization-note">
              <BookOpen className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-sans font-bold text-sm text-gray-900">Customized Menus & Full Catalog</p>
                <p className="font-sans text-xs text-gray-600 leading-relaxed">
                  Full item-level menu available on request / customizable per event — contact us for the complete list. We accommodate specific dietary requests including Swaminarayan and Jain catering options.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
