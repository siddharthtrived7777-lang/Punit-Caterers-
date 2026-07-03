export interface MenuItem {
  name: string;
  description?: string;
  isPopular?: boolean;
}

export interface SubCategory {
  name: string;
  items: MenuItem[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  subCategories: SubCategory[];
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'setup' | 'dishes' | 'decor';
  imageUrl: string;
}

export interface BookingTerm {
  title: string;
  details: string;
}

export interface ContactInfo {
  name: string;
  phone: string;
  phoneDisplay: string;
}
