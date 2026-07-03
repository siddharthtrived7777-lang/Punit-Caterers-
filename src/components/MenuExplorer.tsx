import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, BookOpen, UtensilsCrossed, AlertCircle, X, Plus, Check, Trash2, ClipboardList, Send, MessageSquare } from 'lucide-react';
import { menuCategories } from '../data';
import { MenuCategory, MenuItem } from '../types';
import { PureVegBadge } from './Navbar';

const categoryBackgrounds: Record<string, string> = {
  'welcome-drinks': 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop',
  'soups': 'https://images.unsplash.com/photo-1547592165-e1d17fed6006?q=80&w=1200&auto=format&fit=crop',
  'starters': 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=1200&auto=format&fit=crop',
  'salad': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
  'chat-south-indian': 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=1200&auto=format&fit=crop',
  'italian-mexican': 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1200&auto=format&fit=crop',
  'pan-asian': 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200&auto=format&fit=crop',
  'farsan': 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1200&auto=format&fit=crop',
  'main-course-punjabi': 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1200&auto=format&fit=crop',
  'main-course-gujarati': 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=1200&auto=format&fit=crop',
  'indian-bread-raita': 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?q=80&w=1200&auto=format&fit=crop',
  'dal-rice': 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=1200&auto=format&fit=crop',
  'rajasthani-kathiyawadi': 'https://images.unsplash.com/photo-1585938338392-50a59970d8ee?q=80&w=1200&auto=format&fit=crop',
  'dhaba-farali': 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1200&auto=format&fit=crop',
  'live-counters': 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop',
  'sweets': 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1200&auto=format&fit=crop',
  'dessert': 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200&auto=format&fit=crop',
  'morning-breakfast': 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1200&auto=format&fit=crop',
};

export default function MenuExplorer() {
  const [activeCategoryId, setActiveCategoryId] = useState(menuCategories[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState<Record<string, { name: string; category: string; subCategory: string }>>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({ name: '', date: '', guests: '' });

  const toggleItem = (item: MenuItem, categoryName: string, subCategoryName: string) => {
    setSelectedItems(prev => {
      const updated = { ...prev };
      if (updated[item.name]) {
        delete updated[item.name];
      } else {
        updated[item.name] = {
          name: item.name,
          category: categoryName,
          subCategory: subCategoryName
        };
      }
      return updated;
    });
  };

  const handleSendWhatsApp = () => {
    // Group selected items by category
    const grouped: Record<string, string[]> = {};
    (Object.values(selectedItems) as { name: string; category: string; subCategory: string }[]).forEach(item => {
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item.name);
    });

    let message = `Hello Maitrik Bhai,\n\nI have curated a menu selection for my upcoming event from Punit Caterers website. Here is my selection:\n\n`;

    if (customerInfo.name) {
      message += `👤 *Client Name:* ${customerInfo.name}\n`;
    }
    if (customerInfo.date) {
      message += `📅 *Event Date:* ${customerInfo.date}\n`;
    }
    if (customerInfo.guests) {
      message += `👥 *Estimated Guests:* ${customerInfo.guests}\n`;
    }
    if (customerInfo.name || customerInfo.date || customerInfo.guests) {
      message += `\n`;
    }

    Object.entries(grouped).forEach(([category, items]) => {
      message += `*${category.toUpperCase()}*\n`;
      items.forEach(item => {
        message += `• ${item}\n`;
      });
      message += `\n`;
    });

    message += `Please review this selection and share a tailored quote.\nThank you!`;

    const encoded = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=918866338535&text=${encoded}`;
    window.open(url, '_blank', 'noreferrer');
  };

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
                                {sub.items.map((item, iIdx) => {
                                  const isSelected = !!selectedItems[item.name];
                                  return (
                                    <div 
                                      key={iIdx} 
                                      onClick={() => toggleItem(item, catResult.categoryName, sub.name)}
                                      className={`p-4 rounded-xl border flex justify-between items-center space-x-4 cursor-pointer select-none transition-all duration-300 ${
                                        isSelected 
                                          ? 'border-brand-red/30 bg-brand-red/[0.01] shadow-xs ring-1 ring-brand-red/10' 
                                          : 'border-gray-50 bg-gray-50/40 hover:border-brand-gold/20 hover:bg-amber-50/10'
                                      }`}
                                    >
                                      <div className="space-y-1 flex-1">
                                        <div className="flex items-center space-x-1.5 flex-wrap gap-y-1">
                                          <div className="border border-green-600 p-0.5 rounded-xs w-3 h-3 flex items-center justify-center shrink-0">
                                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                                          </div>
                                          <h5 className="font-sans font-bold text-sm text-gray-900 leading-tight">{item.name}</h5>
                                          {item.isPopular && (
                                            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-sm text-[9px] font-extrabold bg-amber-50 border border-amber-200 text-amber-700 uppercase tracking-wider">
                                              <Sparkles className="w-2.5 h-2.5 text-brand-gold fill-brand-gold" /> Popular
                                            </span>
                                          )}
                                        </div>
                                        {item.description && (
                                          <p className="text-xs text-gray-500 leading-normal font-sans pr-4 mt-0.5">{item.description}</p>
                                        )}
                                      </div>
                                      <div className="shrink-0">
                                        {isSelected ? (
                                          <div className="w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center shadow-xs">
                                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                                          </div>
                                        ) : (
                                          <div className="w-6 h-6 rounded-full border border-gray-300 hover:border-brand-red text-gray-450 flex items-center justify-center">
                                            <Plus className="w-3.5 h-3.5" />
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
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
                  className="relative bg-white/95 backdrop-blur-md border border-gray-100 shadow-md rounded-2xl p-5 sm:p-8 md:p-10 space-y-10 overflow-hidden"
                  id={`menu-category-display-${activeCategory.id}`}
                >
                  {/* Elegant Category-Specific Ambient Background Image */}
                  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
                    <img 
                      src={categoryBackgrounds[activeCategory.id] || categoryBackgrounds['welcome-drinks']} 
                      alt=""
                      className="w-full h-full object-cover object-center opacity-10 scale-[1.03] transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    {/* Linear and radial gradients to ensure perfect text contrast and a polished frosted watermark effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/85 to-white/95" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,white_90%)]" />
                  </div>

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

                        {/* Items Two-Column Layout with central vertical line divider */}
                        {(() => {
                          const half = Math.ceil(sub.items.length / 2);
                          const leftColumn = sub.items.slice(0, half);
                          const rightColumn = sub.items.slice(half);

                          return (
                            <div className="grid grid-cols-2 gap-x-3 sm:gap-x-10 gap-y-3 relative">
                              {/* Left Column */}
                              <div className="space-y-3">
                                {leftColumn.map((item, idx) => {
                                  const isSelected = !!selectedItems[item.name];
                                  return (
                                    <div 
                                      key={`left-${idx}`} 
                                      onClick={() => toggleItem(item, activeCategory.name, sub.name)}
                                      className={`p-2.5 sm:p-3 rounded-xl border flex justify-between items-center space-x-1.5 sm:space-x-3 cursor-pointer select-none transition-all duration-300 ${
                                        isSelected 
                                          ? 'border-brand-red/30 bg-brand-red/[0.01] shadow-xs ring-1 ring-brand-red/10' 
                                          : 'border-gray-100 bg-white/65 backdrop-blur-xs hover:bg-white hover:border-brand-gold/20 hover:shadow-sm'
                                      }`}
                                    >
                                      <div className="space-y-0.5 flex-1 min-w-0 text-left">
                                        <div className="flex items-center space-x-1 sm:space-x-1.5 flex-wrap gap-y-1">
                                          {/* Authentic Indian Pure Vegetarian tiny square sign on each item */}
                                          <div className="border border-[#388E3C] p-0.5 rounded-xs w-2.5 h-2.5 sm:w-3 sm:h-3 flex items-center justify-center shrink-0">
                                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#388E3C] rounded-full" />
                                          </div>
                                          <h5 className="font-sans font-bold text-xs sm:text-base text-gray-900 leading-tight">{item.name}</h5>
                                          
                                          {item.isPopular && (
                                            <span className="inline-flex items-center gap-0.5 px-1 py-0.5 sm:px-1.5 sm:py-0.5 rounded-sm text-[8px] sm:text-[9px] font-extrabold bg-amber-50 border border-amber-200 text-amber-700 uppercase tracking-wider shrink-0">
                                              <Sparkles className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-brand-gold fill-brand-gold animate-pulse" /> Pop
                                            </span>
                                          )}
                                        </div>
                                        {item.description && (
                                          <p className="text-[10px] sm:text-xs text-gray-500 leading-normal font-sans pr-1 sm:pr-2 mt-0.5 line-clamp-2 sm:line-clamp-none">{item.description}</p>
                                        )}
                                      </div>
                                      <div className="shrink-0">
                                        {isSelected ? (
                                          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brand-red text-white flex items-center justify-center shadow-xs">
                                            <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5 stroke-[3]" />
                                          </div>
                                        ) : (
                                          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-gray-300 hover:border-brand-red text-gray-400 hover:text-brand-red flex items-center justify-center">
                                            <Plus className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>

                              {/* Vertical divider line between the two columns */}
                              {rightColumn.length > 0 && (
                                <div className="absolute left-1/2 top-1 bottom-1 w-[1px] bg-gray-200/80 -translate-x-1/2" />
                              )}

                              {/* Right Column */}
                              {rightColumn.length > 0 && (
                                <div className="space-y-3">
                                  {rightColumn.map((item, idx) => {
                                    const isSelected = !!selectedItems[item.name];
                                    return (
                                      <div 
                                        key={`right-${idx}`} 
                                        onClick={() => toggleItem(item, activeCategory.name, sub.name)}
                                        className={`p-2.5 sm:p-3 rounded-xl border flex justify-between items-center space-x-1.5 sm:space-x-3 cursor-pointer select-none transition-all duration-300 ${
                                          isSelected 
                                            ? 'border-brand-red/30 bg-brand-red/[0.01] shadow-xs ring-1 ring-brand-red/10' 
                                            : 'border-gray-100 bg-white/65 backdrop-blur-xs hover:bg-white hover:border-brand-gold/20 hover:shadow-sm'
                                        }`}
                                      >
                                        <div className="space-y-0.5 flex-1 min-w-0 text-left">
                                          <div className="flex items-center space-x-1 sm:space-x-1.5 flex-wrap gap-y-1">
                                            {/* Authentic Indian Pure Vegetarian tiny square sign on each item */}
                                            <div className="border border-[#388E3C] p-0.5 rounded-xs w-2.5 h-2.5 sm:w-3 sm:h-3 flex items-center justify-center shrink-0">
                                              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#388E3C] rounded-full" />
                                            </div>
                                            <h5 className="font-sans font-bold text-xs sm:text-base text-gray-900 leading-tight">{item.name}</h5>
                                            
                                            {item.isPopular && (
                                              <span className="inline-flex items-center gap-0.5 px-1 py-0.5 sm:px-1.5 sm:py-0.5 rounded-sm text-[8px] sm:text-[9px] font-extrabold bg-amber-50 border border-amber-200 text-amber-700 uppercase tracking-wider shrink-0">
                                                <Sparkles className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-brand-gold fill-brand-gold animate-pulse" /> Pop
                                              </span>
                                            )}
                                          </div>
                                          {item.description && (
                                            <p className="text-[10px] sm:text-xs text-gray-500 leading-normal font-sans pr-1 sm:pr-2 mt-0.5 line-clamp-2 sm:line-clamp-none">{item.description}</p>
                                          )}
                                        </div>
                                        <div className="shrink-0">
                                          {isSelected ? (
                                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brand-red text-white flex items-center justify-center shadow-xs">
                                              <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5 stroke-[3]" />
                                            </div>
                                          ) : (
                                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-gray-300 hover:border-brand-red text-gray-400 hover:text-brand-red flex items-center justify-center">
                                              <Plus className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })()}
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

      {/* Floating Menu Builder Cart Pill */}
      <AnimatePresence>
        {Object.keys(selectedItems).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-gray-950 text-white px-5 py-3.5 rounded-full shadow-2xl flex items-center justify-between space-x-6 border border-white/10 w-[92vw] sm:w-auto max-w-lg cursor-pointer hover:bg-gray-900 transition-colors"
            onClick={() => setIsCartOpen(true)}
            id="floating-menu-cart-pill"
          >
            <div className="flex items-center space-x-3">
              <div className="relative bg-brand-red p-2.5 rounded-full text-white shadow-md">
                <ClipboardList className="w-4 h-4" />
                <span className="absolute -top-1.5 -right-1.5 bg-white text-brand-red text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-gray-950">
                  {Object.keys(selectedItems).length}
                </span>
              </div>
              <div className="text-left">
                <p className="font-sans font-bold text-xs sm:text-sm tracking-wide text-white">Your Custom Menu</p>
                <p className="font-mono text-[10px] text-gray-400">Tap to review & send to Maitrik Bhai</p>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsCartOpen(true);
              }}
              className="bg-brand-gold hover:bg-amber-450 text-gray-950 px-4 py-2 rounded-full font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-sm shrink-0"
            >
              Review Menu
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detailed Selected Menu Cart Modal Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4" id="menu-cart-modal-container">
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-gray-950/60 backdrop-blur-xs"
              id="menu-cart-backdrop"
            />

            {/* Modal Body Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white border border-gray-100 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
              id="menu-cart-content-card"
            >
              {/* Modal Header */}
              <div className="bg-[#FAF9F5] border-b border-gray-100 p-5 md:p-6 flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center space-x-3">
                  <div className="bg-brand-red/10 p-2.5 rounded-xl text-brand-red">
                    <ClipboardList className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900">Your Curated Event Menu</h3>
                    <p className="font-sans text-xs text-gray-500">
                      You have selected <span className="font-semibold text-brand-red">{Object.keys(selectedItems).length}</span> dish{Object.keys(selectedItems).length === 1 ? '' : 'es'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-400 hover:text-gray-650 hover:bg-gray-100 p-2 rounded-full transition-colors focus:outline-none"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body / Scroll Area */}
              <div className="p-6 overflow-y-auto space-y-6 flex-1 custom-scrollbar text-left">
                
                {/* Customer Information Form Fields */}
                <div className="bg-amber-50/45 border border-amber-100 rounded-2xl p-4 space-y-4">
                  <h4 className="font-sans font-bold text-xs text-brand-gold uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                    <span>Enter Event Details (Optional)</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <label className="block text-[10px] font-semibold text-gray-600 font-sans uppercase tracking-wider">Your Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Siddharth Trivedi"
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full bg-white border border-gray-200 rounded-lg px-3 py-1.5 font-sans text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-gold/40"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-[10px] font-semibold text-gray-600 font-sans uppercase tracking-wider">Event Date</label>
                      <input
                        type="text"
                        placeholder="e.g. 15th Dec 2026"
                        value={customerInfo.date}
                        onChange={(e) => setCustomerInfo(prev => ({ ...prev, date: e.target.value }))}
                        className="w-full bg-white border border-gray-200 rounded-lg px-3 py-1.5 font-sans text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-gold/40"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-[10px] font-semibold text-gray-600 font-sans uppercase tracking-wider">Estimated Guests</label>
                      <input
                        type="text"
                        placeholder="e.g. 250 Guests"
                        value={customerInfo.guests}
                        onChange={(e) => setCustomerInfo(prev => ({ ...prev, guests: e.target.value }))}
                        className="w-full bg-white border border-gray-200 rounded-lg px-3 py-1.5 font-sans text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-gold/40"
                      />
                    </div>
                  </div>
                </div>

                {/* Selected Items List, Grouped by Category */}
                <div className="space-y-6">
                  {Object.keys(selectedItems).length === 0 ? (
                    <div className="text-center py-12">
                      <p className="font-sans text-sm text-gray-500">Your selection is empty.</p>
                      <button
                        onClick={() => setIsCartOpen(false)}
                        className="mt-4 text-xs font-bold text-brand-red hover:underline"
                      >
                        Explore our menu to add items!
                      </button>
                    </div>
                  ) : (
                    // Grouping logic inside JSX render
                    (() => {
                      const grouped: Record<string, { name: string; category: string; subCategory: string }[]> = {};
                      (Object.values(selectedItems) as { name: string; category: string; subCategory: string }[]).forEach(item => {
                        if (!grouped[item.category]) {
                          grouped[item.category] = [];
                        }
                        grouped[item.category].push(item);
                      });

                      return Object.entries(grouped).map(([category, items]) => (
                        <div key={category} className="space-y-2 border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                          <h4 className="font-display font-bold text-xs sm:text-sm text-brand-red uppercase tracking-wider flex items-center justify-between">
                            <span>{category}</span>
                            <span className="font-mono text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">{items.length} item{items.length === 1 ? '' : 's'}</span>
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {items.map(item => (
                              <div
                                key={item.name}
                                className="bg-gray-50/60 hover:bg-gray-50 border border-gray-100 rounded-xl p-2.5 flex items-center justify-between space-x-2 transition-colors group"
                              >
                                <div className="flex items-center space-x-2 min-w-0">
                                  <div className="border border-[#388E3C] p-0.5 rounded-xs w-2.5 h-2.5 flex items-center justify-center shrink-0">
                                    <div className="w-1 h-1 bg-[#388E3C] rounded-full" />
                                  </div>
                                  <span className="font-sans font-medium text-xs text-gray-800 truncate leading-tight">{item.name}</span>
                                </div>
                                <button
                                  onClick={() => setSelectedItems(prev => {
                                    const next = { ...prev };
                                    delete next[item.name];
                                    return next;
                                  })}
                                  className="text-gray-400 hover:text-brand-red p-1 rounded-md hover:bg-red-50 transition-colors shrink-0 opacity-85"
                                  title="Remove from selection"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      ));
                    })()
                  )}
                </div>

              </div>

              {/* Modal Footer */}
              <div className="bg-[#FAF9F5] border-t border-gray-100 p-5 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sticky bottom-0 z-10">
                <button
                  onClick={() => {
                    if (window.confirm("Are you sure you want to clear your selected menu?")) {
                      setSelectedItems({});
                      setIsCartOpen(false);
                    }
                  }}
                  disabled={Object.keys(selectedItems).length === 0}
                  className="text-gray-500 hover:text-brand-red disabled:text-gray-300 font-sans font-bold text-xs transition-colors py-2 px-1 focus:outline-none"
                >
                  Clear Selection
                </button>
                <button
                  onClick={handleSendWhatsApp}
                  disabled={Object.keys(selectedItems).length === 0}
                  className="bg-[#25D366] hover:bg-[#20ba59] disabled:bg-gray-200 text-white disabled:text-gray-400 font-sans font-bold text-sm tracking-wide px-6 py-3 rounded-full flex items-center justify-center space-x-2 shadow-md hover:shadow-lg disabled:shadow-none transition-all focus:outline-none w-full sm:w-auto"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>Send Menu to Maitrik Bhai on WhatsApp</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
