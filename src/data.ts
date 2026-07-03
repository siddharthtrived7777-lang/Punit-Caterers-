import { MenuCategory, BookingTerm, ContactInfo, GalleryImage } from './types';

export const contactDetails: ContactInfo[] = [
  { name: 'Darshna Raval', phone: '9374043407', phoneDisplay: '937-404-3407' },
  { name: 'Sandip Raval', phone: '9687409615', phoneDisplay: '968-740-9615' },
  { name: 'Maitrik Raval', phone: '8866338535', phoneDisplay: '886-633-8535' },
];

export const businessAddress = {
  line1: '49/B, Saujanya Tenament',
  line2: 'Nr. Paras Nagar, Vatva Road, Isanpur',
  city: 'Ahmedabad',
  pincode: '382443',
  full: '49/B, Saujanya Tenament, Nr. Paras Nagar, Vatva Road, Isanpur, Ahmedabad - 382443'
};

export const menuCategories: MenuCategory[] = [
  {
    id: 'welcome-drinks',
    name: 'Welcome Drinks',
    description: 'Refreshing juices and custom mocktails to welcome your guests',
    subCategories: [
      {
        name: 'Fresh Juice',
        items: [
          { name: 'Pineapple Juice' },
          { name: 'Black Grapes Juice' },
          { name: 'Green Grapes Juice' },
          { name: 'Pomegranate Juice' },
          { name: 'Mix Cocktail Juice' },
          { name: 'Plum Juice' },
          { name: 'Red Jamfal Juice' },
          { name: 'Flasa Tadbuch Juice' },
          { name: 'Tulsi Sudha Juice' },
          { name: 'Green Mango Juice' },
          { name: 'Orange Juice' },
          { name: 'Pineapple with Apple Chhin' },
          { name: 'Kiwi Margarita Juice' },
          { name: 'Pina Orange Fresh Juice' },
          { name: 'Mix Fruit Punch' },
          { name: 'Guava Punch' },
          { name: 'Sugar Cane' },
          { name: 'Guava Pineapple Pulpy' },
          { name: 'Black Grapes Pineapple' },
          { name: 'Pineapple Coconut with Coconut Pieces' },
          { name: 'Orange Coconut with Apple Kiwi Classic' },
          { name: 'Black Grapes Pomegranate Juice' }
        ]
      },
      {
        name: 'Light Juice',
        items: [
          { name: 'Malai Coconut Water' },
          { name: 'Jal Jeera' },
          { name: 'Hajma Hajam' },
          { name: 'Ginger Lemon Mint Sharbat' },
          { name: 'Variyali Sharbat' }
        ]
      },
      {
        name: 'Coolers & Mocktails',
        items: [
          { name: 'Kiwi Blossom' },
          { name: 'Coconut Litchi Cooler' },
          { name: 'Strawberry Cooler' },
          { name: 'Pina Mango Cooler' },
          { name: 'Orange Lemon Cooler' },
          { name: 'Lemon Mint Cooler' },
          { name: 'Sunset Cooler' },
          { name: 'Blue Lagoon Cooler' },
          { name: 'Peach Cooler' },
          { name: 'Ginger Mint Cooler' },
          { name: 'Shalimar Cooler' },
          { name: 'Lemon Cooler' },
          { name: 'Orange Tarana Cooler' },
          { name: 'Peez Cooler' },
          { name: 'Pineapple Khus Cooler' },
          { name: 'Plum Cooler' },
          { name: 'Green Grape Cooler' },
          { name: 'Pink Lady' },
          { name: 'Hot Beauty' },
          { name: 'Black Beauty' },
          { name: 'Peach Fuzz' },
          { name: 'Lemon Shikanji' },
          { name: 'Litchi Limca Float' },
          { name: 'Pina Colada' },
          { name: 'Blue Lagoon' },
          { name: 'Mango Maiden' },
          { name: 'Virgin Mary' },
          { name: 'Minted Orange' },
          { name: 'Watermelon Salsa Shots' },
          { name: 'Cinnamon Frappe' },
          { name: 'Lemon Mint Fizz' },
          { name: 'Fruit Punch' },
          { name: 'Lemon Mint Hawaiian Punch' },
          { name: 'Blue Heaven' },
          { name: 'Apple Delight' },
          { name: 'Scorpion' }
        ]
      }
    ]
  },
  {
    id: 'soups',
    name: 'Soups',
    description: 'Warm and comforting starters prepared from fresh ingredients',
    subCategories: [
      {
        name: 'Tomato Soup',
        items: [
          { name: 'Tomato Soup' },
          { name: 'Cheese Corn Tomato Soup' },
          { name: 'Italian Soup' },
          { name: 'Maxican Tortilla Soup' },
          { name: 'Minestrone Soup' },
          { name: 'Chilli Bean Soup' },
          { name: 'Tomato Coriander Soup' },
          { name: 'Tomato Coconut Soup' },
          { name: 'Saleri Almon Soup' },
          { name: 'Tomato Orange Carrot Soup' },
          { name: 'Zed Soup' },
          { name: 'Asparagus Soup' },
          { name: 'Corn Cowder Soup' },
          { name: 'Brown Onion Soup' },
          { name: 'Tomato Soup' },
          { name: 'Cheese Corn Tomato Basil' }
        ]
      },
      {
        name: 'Thick & White Soup',
        items: [
          { name: 'Coconut Coriander Soup' },
          { name: 'Lemon Coriander Soup' },
          { name: 'Maxican Chilli Soup' },
          { name: 'Corn Tomato Cheese' },
          { name: 'Laksa' },
          { name: 'Hot & Sour Soup' },
          { name: 'Sweet Corn Soup' },
          { name: 'Veg. Manchow Soup' },
          { name: 'Thai Lemon Soup' },
          { name: 'Lemon & Tortilla' },
          { name: 'Carrot & Coriander' },
          { name: 'Sayur Lodeh' },
          { name: 'Italian Pasta' },
          { name: 'Spinach Corn Soup' },
          { name: 'Tomato Cilantro' },
          { name: 'Pumpkin & Orange Soup' },
          { name: 'Veg & Coriander Soup' },
          { name: 'Golden Corn Soup' },
          { name: 'Thai Veg Soup' },
          { name: 'Vegetable Bouillabaisse' }
        ]
      },
      {
        name: 'Green Soup',
        items: [
          { name: 'Broccoli Almond Soup' },
          { name: 'Lettuce Almon Soup' },
          { name: 'Spinach Cheese Corn Soup' },
          { name: 'Green Peas Soup' },
          { name: 'Sweet Corn Saleri Soup' },
          { name: 'Thai Soup' },
          { name: 'Winter Vegetable Soup' },
          { name: 'Spinach and Baby Corn Soup' }
        ]
      },
      {
        name: 'Cold Soup',
        items: [
          { name: 'Gazpacho Soup' },
          { name: 'Tomato Hill Soup' },
          { name: 'Cucumber Soup' }
        ]
      },
      {
        name: 'Special Soup',
        items: [
          { name: 'Tomato Parmesan Soup' },
          { name: 'Australian Garlic Bread Broth Soup' },
          { name: 'Mexican Chowder Soup' },
          { name: 'Real Tomato Soup with Chopped Tomato' },
          { name: 'Tomato Honey Mustard Soup' },
          { name: 'Hygiene Stock Cheese Corn' },
          { name: 'Choice of Veg. Soup' },
          { name: 'Lemon Celery Soup' },
          { name: 'Carrot Leak Soup' },
          { name: 'Khow Sye Soup' },
          { name: 'Purple Cappuccino' },
          { name: 'Red Cappuccino' },
          { name: 'Green Cappuccino' },
          { name: 'Yellow Cappuccino' },
          { name: 'Khows Soup' }
        ]
      },
      {
        name: 'Clear Soup',
        items: [
          { name: 'Vegetable Clear Soup' },
          { name: 'Tom Yum' },
          { name: 'Mix Veg. Chimney Soup' },
          { name: 'Tomato Dhaniya Shorba' },
          { name: 'Three Pepper Clear Soup' },
          { name: 'Dal Shorba' },
          { name: 'Fresh Onion Garlic Soup' },
          { name: 'Palak Shorba' },
          { name: 'Wonton Clear Soup' }
        ]
      },
      {
        name: 'Cream Soup',
        items: [
          { name: 'Cream of Tomato Soup' },
          { name: 'Cream of Mushroom Soup' },
          { name: 'Cream of Broccoli & Almond' },
          { name: 'Cream of Asparagus' },
          { name: 'Cream of Spinach' },
          { name: 'Cream of Corn Soup' },
          { name: 'Cream of Zucchini Soup' }
        ]
      }
    ]
  },
  {
    id: 'starters',
    name: 'Starters',
    description: 'Delectable bite-sized hors d\'oeuvres to set the culinary tone',
    subCategories: [
      {
        name: 'Fried Starter',
        items: [
          { name: 'Green Tikki' },
          { name: 'Vegetable Fiturs' },
          { name: 'Corn Capsicum Tikki' },
          { name: 'Corn Almond Tikki' },
          { name: 'Corn Kendy' },
          { name: 'Cheese Paneer Balls' },
          { name: 'Barbecue Kabab' },
          { name: 'Pok Tikki' },
          { name: 'Cheese Green Onion Bhakharwadi' },
          { name: 'Cheese Broccoli Tart' },
          { name: 'Chinese Stro' },
          { name: 'Cheese Paneer Garlic Stro' },
          { name: 'Vegetable Sesame Rolls' },
          { name: 'Cheese Corn Risotto' },
          { name: 'Veg. Lollipop' },
          { name: 'Kothmir Kali' },
          { name: 'Paneer Papad' },
          { name: 'Spanish Ball' },
          { name: 'Spring Ball' },
          { name: 'Cheese Spinach Ball' },
          { name: 'Paneer Cheese Kurkura' },
          { name: 'Stuff Mushroom' },
          { name: 'Italian Cazaniya' },
          { name: 'Paneer Lifafa' },
          { name: 'Yogurt Kabab' },
          { name: 'Risotto Ball' }
        ]
      },
      {
        name: 'Bread Starter',
        items: [
          { name: 'Mini Masala Bun' },
          { name: 'Mini Cocktail Bun' },
          { name: 'Grilled Sandwich' },
          { name: 'Mexican Tako Toast' },
          { name: 'Futlong Bite' },
          { name: 'Spinach Panini' },
          { name: 'Zucchini Panini' },
          { name: 'Mustard Bombay Panini' },
          { name: 'Bruschetta' }
        ]
      },
      {
        name: 'Baked Starter',
        items: [
          { name: 'Ruff Roti Roll' },
          { name: 'Afghan Basket' },
          { name: 'Chef Special Toasty' },
          { name: 'Zattar Open Toasty' },
          { name: 'Cotton Feel Garlic Bread Bite' },
          { name: 'Achari Alu' },
          { name: 'Mushroom Tikka' },
          { name: 'Arvi Tikka' },
          { name: 'Full Gobi Tikka' },
          { name: 'Kesari Panner Tikka' },
          { name: 'Shashlik Paneer Tikka' },
          { name: 'Hariyali Panner Tikka' },
          { name: 'Vegetable Barbeque' }
        ]
      }
    ]
  },
  {
    id: 'salad',
    name: 'Salad',
    description: 'Crisp, refreshing accompaniments to cleanse the palate',
    subCategories: [
      {
        name: 'Salad',
        items: [
          { name: 'Green Veg. Salad' },
          { name: 'Fresh Dressing Salad' },
          { name: 'Fruit Bolar Salad' },
          { name: 'Cheese Apricor Salad' },
          { name: 'Green Tray with Salad' },
          { name: 'Corn Bunt Salad' },
          { name: 'Smoky Aloo Salad' },
          { name: 'Ponk Capsicum Salad' },
          { name: 'Lenten Burger Salad' },
          { name: 'Carrot Date Salad' },
          { name: 'Florinda Salad' },
          { name: 'Spanish Salad' },
          { name: 'Cream Salad' },
          { name: 'Pina Apricot Salad' },
          { name: 'Orange Apricot Salad' },
          { name: 'Srilankan Salad' },
          { name: 'Green Grape Kiwimold Salad' },
          { name: 'Russian Salad' },
          { name: 'Waldrop Salad' },
          { name: 'Fresh Orange Dressing Salad' },
          { name: 'American Gerkins Salad' },
          { name: 'Russian and Peas Salad' }
        ]
      },
      {
        name: 'Dressing',
        items: [
          { name: 'Corn Pasta Salad' },
          { name: 'Jelly Sunshine Salad' },
          { name: 'Lemon Mayonnaise Salad' },
          { name: 'Mustard Mayonnaise Salad' },
          { name: 'Cheese Mayonnaise Salad' },
          { name: 'Thousand Island Salad' },
          { name: 'Gado Gado Salad' },
          { name: 'Garlic Mayonnaise Salad' },
          { name: 'Avocado Salad' },
          { name: 'Italian Dressing' },
          { name: 'Peanuts Dressing' },
          { name: 'Honey Dressing' }
        ]
      }
    ]
  },
  {
    id: 'chat-south-indian',
    name: 'Chat & South Indian',
    description: 'Sensational Indian street-side delicacies and coastal classics',
    subCategories: [
      {
        name: 'Delhi & Mumbai Chat (Live)',
        items: [
          { name: 'Royal Raj Kachori', description: 'Large crisp shell packed with sprouts, potatoes, sweet & spicy chutneys, and chilled yogurt', isPopular: true },
          { name: 'Classic Pani Puri Counter', description: 'Crisp puris with potato-chana stuffing and 3 signature herbal waters (Spicy, Tangy, Sweet)' },
          { name: 'Chilled Dahi Puri', description: 'Puris topped with boiled potatoes, dynamic sweet yogurt, and sev' },
          { name: 'Delhi Papdi Chaat', description: 'Flat crisp puris with sweet curd, dynamic chutneys, and pomegranate seeds' },
          { name: 'Live Khasta Kachori Chaat', description: 'Crushed hot kachoris served with warm yellow peas ragda and garnishes' }
        ]
      },
      {
        name: 'South Indian Specialties',
        items: [
          { name: 'Mini Steamed Ghee Idli', description: 'Bite-sized rice cakes smeared with pure ghee and gun powder spice' },
          { name: 'Live Dosa Station', description: 'Paper thin Dosas, Masala Dosas, and Mysore Masala Dosas made hot on order', isPopular: true },
          { name: 'Crispy Medu Vada', description: 'Deep-fried lentil donuts served with piping hot Sambhar and fresh coconut chutney' }
        ]
      }
    ]
  },
  {
    id: 'italian-mexican',
    name: 'Italian & Mexican',
    description: 'Exquisite global cuisines tailored for the gourmet vegetarian experience',
    subCategories: [
      {
        name: 'Italian Gourmet',
        items: [
          { name: 'Penne Alfredo in White Sauce', description: 'Penne pasta tossed in rich, creamy Parmesan cheese sauce with broccoli and mushrooms' },
          { name: 'Fusilli in Spicy Arrabbiata', description: 'Pasta tossed in fiery red tomato and garlic sauce with fresh herbs and olives' },
          { name: 'Exotic Basil Pesto Pasta', description: 'Creamy ground pine nut, garlic, basil, and olive oil sauce', isPopular: true },
          { name: 'Live Wood-fired Pizza Counter', description: 'Thin-crust Margherita, Garden Veggie, and Paneer Tikka pizzas baked fresh on-site', isPopular: true }
        ]
      },
      {
        name: 'Mexican Fiesta',
        items: [
          { name: 'Fully Loaded Cheese Nachos', description: 'Crisp tortilla chips topped with hot cheese sauce, refried beans, salsa, and sour cream' },
          { name: 'Veggie & Cheese Quesadillas', description: 'Grilled flour tortillas packed with bell peppers, corn, and melting Monterey Jack cheese' },
          { name: 'Soft Shell Tacos', description: 'Filled with spiced soy mince, shredded lettuce, pico de gallo, and fresh guacamole' },
          { name: 'Mexican Rice with Ranchero Sauce', description: 'Fragrant long-grain rice with corn and beans, served with spicy tomato gravy' }
        ]
      }
    ]
  },
  {
    id: 'pan-asian',
    name: 'Pan Asian',
    description: 'Stir-fried delicacies, steamed bites, and flavorful Asian curries',
    subCategories: [
      {
        name: 'Momos & Rolls',
        items: [
          { name: 'Steamed Crystal Veg Momos', description: 'Delicate transparent dumplings packed with finely minced exotic vegetables' },
          { name: 'Pan-fried Schezwan Momos', description: 'Tossed in a fiery, hot Schezwan chilli pepper glaze', isPopular: true },
          { name: 'Spring Rolls', description: 'Crispy rolled wrappers with seasoned cabbage, carrot, and noodle stuffing' }
        ]
      },
      {
        name: 'Pan Asian Starters & Curries',
        items: [
          { name: 'Veg Dumplings in Hot Garlic Sauce', description: 'Deep-fried vegetable dumplings simmered in sweet-spicy garlic sauce' },
          { name: 'Royal Thai Green Curry', description: 'Rich coconut milk curry infused with galangal, lemongrass, baby corn, and bamboo shoots', isPopular: true },
          { name: 'Paneer in Black Bean Sauce', description: 'Soft paneer blocks with capsicum and scallions in savory fermented black bean sauce' }
        ]
      },
      {
        name: 'Noodles & Rice',
        items: [
          { name: 'Classic Veg Hakka Noodles', description: 'Wok-tossed noodles with soy sauce and crisp julienne vegetables' },
          { name: 'Fiery Schezwan Fried Rice', description: 'Aromatic basmati rice tossed with finely chopped vegetables and spicy Schezwan sauce' },
          { name: 'Zesty Pad Thai Noodles', description: 'Flat rice noodles with bean sprouts, peanuts, tofu, and tangy tamarind seasoning' }
        ]
      }
    ]
  },
  {
    id: 'farsan',
    name: 'Farsan',
    description: 'Traditional Gujarati side snacks, a core component of any celebratory feast',
    subCategories: [
      {
        name: 'Fried Farsan',
        items: [
          { name: 'Gujarati Gathiya & Vanela', description: 'Freshly fried gram flour snacks served with raw papaya sambharo and fried chillies' },
          { name: 'Surati Lilva Kachori', description: 'Crisp pastry shells stuffed with seasoned fresh green pigeon peas', isPopular: true },
          { name: 'Nylon Khaman & Amiri Khaman', description: 'Super soft, airy, steamed gram flour cakes tempered with mustard, sesame, and fresh coconut' },
          { name: 'Methi Na Gota', description: 'Fluffy fenugreek leaf fritters served with sweet and spicy Gujarati chutneys' },
          { name: 'Traditional Batata Vada', description: 'Spiced potato mash balls coated in gram flour batter and golden fried' }
        ]
      },
      {
        name: 'Boiled & Steamed Farsan',
        items: [
          { name: 'Spiced Patra rolls', description: 'Colocasia leaves coated with spiced sweet-tangy gram flour paste, steamed, sliced, and tempered' },
          { name: 'Sandwich White Dhokla', description: 'Fermented rice and lentil flour cakes with a layer of fresh green mint chutney', isPopular: true },
          { name: 'Traditional Idada', description: 'Steamed black-pepper-crusted white dhokla slice' },
          { name: 'Gujarati Khandvi Roll', description: 'Delicate, melt-in-mouth rolls of seasoned gram flour paste tempered with mustard and coconut', isPopular: true }
        ]
      }
    ]
  },
  {
    id: 'main-course-punjabi',
    name: 'Main Course Punjabi',
    description: 'Rich, aromatic, and deeply satisfying North Indian gravies',
    subCategories: [
      {
        name: 'Paneer Specialties',
        items: [
          { name: 'Paneer Butter Masala', description: 'Cottage cheese chunks cooked in rich, velvety tomato-butter gravy with fresh cream', isPopular: true },
          { name: 'Paneer Tikka Masala', description: 'Clay-oven roasted paneer cubes simmered in a spiced onion-tomato gravy' },
          { name: 'Royal Kadhai Paneer', description: 'Paneer tossed with capsicum and freshly pounded kadhai spices in a semi-dry gravy' },
          { name: 'Palak Paneer', description: 'Soft paneer cubes in a silky, spiced spinach gravy finished with a touch of butter' }
        ]
      },
      {
        name: 'Indian Vegetable Specialties',
        items: [
          { name: 'Veg Diwani Handi', description: 'Assorted seasonal vegetables cooked in a rich, mildly sweet cashew-spinach gravy' },
          { name: 'Kaju Butter Masala', description: 'Whole roasted cashew nuts simmered in a thick, premium golden cashew and onion-tomato gravy', isPopular: true },
          { name: 'Veg Jalfrezi', description: 'Tangy, stir-fried colorful bell peppers, baby corn, and beans in dry spices' },
          { name: 'Dum Aloo Kashmiri', description: 'Baby potatoes slow-cooked in a yogurt-based gravy with dry ginger and fennel spices' },
          { name: 'Methi Chaman Masala', description: 'Grated paneer and fresh fenugreek leaves in a creamy, green spinach-based gravy' }
        ]
      }
    ]
  },
  {
    id: 'main-course-gujarati',
    name: 'Main Course Gujarati',
    description: 'Traditional, sweet-and-sour home-style Gujarati preparations',
    subCategories: [
      {
        name: 'Traditional Gujarati Sabjis',
        items: [
          { name: 'Sev Tameta Nu Shaak', description: 'Diced sweet tomatoes cooked with spices and topped with crisp sev', isPopular: true },
          { name: 'Ringan Nu Bharthu', description: 'Smoky roasted eggplant mash with spring onions, garlic, and green chillies' },
          { name: 'Stuffed Bhinda Sambhariya', description: 'Okra slit and stuffed with spiced roasted peanut, coconut, and coriander mixture' },
          { name: 'Kaju Karela Shaak', description: 'Crisp bitter-gourd slices cooked with cashews, jaggery, and spices—completely bitterness-free!' },
          { name: 'Royal Gujarati Undhiyu (Seasonal)', description: 'Traditional winter mix vegetable delicacy with purple yam, flat beans, and fried fenugreek dumplings', isPopular: true },
          { name: 'Bateta Sambhariya Shaak', description: 'Baby potatoes stuffed with spices and cooked on low steam' }
        ]
      }
    ]
  },
  {
    id: 'indian-bread-raita',
    name: 'Indian Bread & Raita',
    description: 'Freshly baked tandoori breads and refreshing yogurt balances',
    subCategories: [
      {
        name: 'Tandoor & Indian Breads',
        items: [
          { name: 'Butter Naan', description: 'Fluffy, yeast-leavened bread baked in the tandoor and brushed with butter' },
          { name: 'Garlic Naan', description: 'Topped with minced garlic and coriander before baking' },
          { name: 'Laccha Paratha', description: 'Multi-layered crispy wheat flour flatbread with dry mint or butter' },
          { name: 'Rumali Roti', description: 'Extremely thin, soft flatbread stretched and baked over a dome griddle', isPopular: true },
          { name: 'Missi Roti', description: 'Nutritious flatbread made of chickpea and whole wheat flour with green chillies' }
        ]
      },
      {
        name: 'Raita & Yogurt',
        items: [
          { name: 'Pineapple Raita', description: 'Chilled sweetened yogurt with juicy pineapple chunks', isPopular: true },
          { name: 'Boondi Raita', description: 'Yogurt mixed with tiny fried gram flour droplets and roasted cumin' },
          { name: 'Dahi Vada', description: 'Soft lentil dumplings soaked in sweet yogurt, topped with red & green chutneys and spices' }
        ]
      }
    ]
  },
  {
    id: 'dal-rice',
    name: 'Dal, Rice & Kadhi',
    description: 'Aromatic slow-cooked lentils, traditional kadhis, and premium basmati rice',
    subCategories: [
      {
        name: 'Dal & Kadhi',
        items: [
          { name: 'Royal Dal Makhani', description: 'Black lentils and kidney beans slow-cooked overnight with cream and butter', isPopular: true },
          { name: 'Yellow Dal Tadka', description: 'Arhar lentil tempered with ghee, cumin, dry red chillies, and garlic' },
          { name: 'Traditional Gujarati Kadhi', description: 'Sweet-and-sour yogurt soup tempered with cloves, cinnamon, and curry leaves' },
          { name: 'Rajasthani Panchmel Dal', description: 'A protein-rich blend of five lentils cooked with rustic spices' }
        ]
      },
      {
        name: 'Rice Varieties',
        items: [
          { name: 'Kashmiri Saffron Pulao', description: 'Premium basmati rice cooked with saffron, sweet green peas, and nuts' },
          { name: 'Veg Dum Biryani', description: 'Layered basmati rice and spiced vegetables slow-cooked in a sealed clay pot under steam', isPopular: true },
          { name: 'Jeera Rice', description: 'Fluffy basmati rice tossed with hot ghee and cumin seeds' }
        ]
      }
    ]
  },
  {
    id: 'rajasthani-kathiyawadi',
    name: 'Rajasthani & Kathiyawadi',
    description: 'Rustic, spicy, and robust culinary heritage of Rajasthan and Saurashtra',
    subCategories: [
      {
        name: 'Rajasthani Specialties',
        items: [
          { name: 'Dal Baati Churma', description: 'Traditional baked wheat flour balls (Baati) crushed with pure ghee, served with Panchmel Dal and Sweet Churma', isPopular: true },
          { name: 'Shahi Gatte Ki Sabji', description: 'Gram flour dumplings simmered in a rich, tangy yogurt-based gravy' },
          { name: 'Ker Sangri', description: 'Unique dry desert bean and berry dish cooked with mustard oil and spices' }
        ]
      },
      {
        name: 'Kathiyawadi Favorites',
        items: [
          { name: 'Lasaniya Batata', description: 'Fiery garlic-tempered baby potatoes', isPopular: true },
          { name: 'Ringna No Oro', description: 'Roasted eggplant mash cooked with green garlic, onions, tomatoes, and dry spices' },
          { name: 'Bajra No Rotlo', description: 'Thick, rustic pearl-millet flatbread baked over clay tawa, served with raw jaggery and white butter' },
          { name: 'Kathiyawadi Vagharshili Khichdi', description: 'Moist khichdi cooked with mixed vegetables and direct garlic seasoning' }
        ]
      }
    ]
  },
  {
    id: 'dhaba-farali',
    name: 'Punjabi Dhaba & Farali Menu',
    description: 'Highway-style rustic flavors and clean fasting-compliant dishes',
    subCategories: [
      {
        name: 'Punjabi Dhaba',
        items: [
          { name: 'Sarson Ka Saag & Makki Di Roti', description: 'Traditional winter mustard greens mash with flat cornbread, white butter, and jaggery', isPopular: true },
          { name: 'Paneer Bhurji Dhaba Style', description: 'Scrambled cottage cheese stir-fried on a flat iron tawa with onions, tomatoes, and green chillies' },
          { name: 'Dal Fry Dhaba Style', description: 'Double-tempered yellow lentils with onions, tomatoes, and extra ghee' }
        ]
      },
      {
        name: 'Farali Menu (Fasting)',
        items: [
          { name: 'Non-sticky Sabudana Khichdi', description: 'Sago pearls tossed with roasted peanuts, curry leaves, and green chillies' },
          { name: 'Crispy Farali Pattice', description: 'Potato balls stuffed with coconut, peanuts, raisins, and sweet-sour spices', isPopular: true },
          { name: 'Rajgira Puri with Sukhi Bhaji', description: 'Amaranth flour deep-fried puris served with seasoned dry potato sabji' },
          { name: 'Sweet Moraiya Khichdi', description: 'Barnyard millet cooked in sweetened milk or savory butter format' }
        ]
      }
    ]
  },
  {
    id: 'live-counters',
    name: 'Live Counters',
    description: 'Interactive culinary stages where master chefs prepare dishes fresh in front of your guests',
    subCategories: [
      {
        name: 'Continental & European Live',
        items: [
          { name: 'Swiss Raclette Station', description: 'A giant wheel of Swiss Raclette cheese heated and scraped hot over roasted baby potatoes, broccoli, and bread croutons', isPopular: true },
          { name: 'Mediterranean, Greek & Lebanese', description: 'Freshly fried hot Falafel wraps, customized pita pockets with creamy hummus, pickled turnip, and garlic tahini' },
          { name: 'Interactive Italian Pasta & Risotto', description: 'Choose your pasta (Penne, Fusilli, Spaghetti) and select sauces (Alfredo, Arrabbiata, Pesto, Pink sauce) with custom veggies' }
        ]
      },
      {
        name: 'Oriental & Latin Live',
        items: [
          { name: 'Mongolian Stir-fry Grid', description: 'Pick your noodles, select vegetables, and see our chefs toss them with your favorite wok-sauces on a massive iron circular hotplate', isPopular: true },
          { name: 'Mexican Live Quesadilla & Nacho Bar', description: 'Hot flat-top grilled quesas and a self-service nacho station with hot flowing cheese tap, salsa, and jalapeños' },
          { name: 'Oriental Dimsum & Steamed Bao Counter', description: 'Steaming bamboo baskets serving hot crystal veg momos, spinach dumplings, and fluffy stuffed bao buns' },
          { name: 'Thai Noodle Bar', description: 'Flat rice noodles tossed on high flame with pad-thai sauce, peanuts, and fresh chives' }
        ]
      }
    ]
  },
  {
    id: 'sweets',
    name: 'Sweets',
    description: 'Delectable, authentic Indian sweets made with premium ingredients like dry fruits, mava, and pure ghee',
    subCategories: [
      {
        name: 'Dry Fruit Sweet',
        items: [
          { name: 'Royal Kaju Katli', description: 'Classic diamond-shaped cashew sweet accented with silver leaf' },
          { name: 'Saffron Anjeer Roll', description: 'Dried figs roll packed with roasted chopped almonds and pistachios', isPopular: true },
          { name: 'Deluxe Dry Fruit Bite', description: 'Sugar-free bites made entirely of minced dates, figs, walnuts, and almonds' }
        ]
      },
      {
        name: 'Ghee & Mava Sweet',
        items: [
          { name: 'Pure Desi Ghee Mohanthal', description: 'Traditional Gujarati gram-flour fudge rich in cardamom, nutmeg, and pure ghee', isPopular: true },
          { name: 'Kesar Jalebi with Rabdi', description: 'Crisp spiral jalebis fried in desi ghee, served hot with chilled thick saffron rabdi', isPopular: true },
          { name: 'Hot Gulab Jamun', description: 'Deep-fried milk solids balls soaked in rose-flavored sugar syrup' }
        ]
      },
      {
        name: 'Hot Halva',
        items: [
          { name: 'Rich Moong Dal Halva', description: 'Classic winter sweet cooked with yellow split-lentils, pure ghee, and nuts' },
          { name: 'Gajar Halva (Seasonal)', description: 'Fresh red carrots grated and slow-simmered with milk, ghee, and mava' }
        ]
      },
      {
        name: 'Bengali Sweet & Liquid Sweet',
        items: [
          { name: 'Angoori Rasmalai', description: 'Soft, spongy mini cottage cheese discs soaked in sweetened, thickened saffron milk', isPopular: true },
          { name: 'Chilled Sponge Rasgulla', description: 'Soft, spongy chenna balls in light cardamom-infused sugar syrup' },
          { name: 'Elixir Basundi', description: 'Thickened sweet milk reduction loaded with charoli, almonds, and pistachios' },
          { name: 'Kesar Elaichi Shrikhand', description: 'Rich, strained thick yogurt sweet spiced with green cardamom and saffron' }
        ]
      }
    ]
  },
  {
    id: 'dessert',
    name: 'Dessert',
    description: 'Cold treats, continuous sweet stations, and global desserts',
    subCategories: [
      {
        name: 'Continental & Cold Desserts',
        items: [
          { name: 'Sizzling Brownie with Vanilla Ice Cream', description: 'Rich chocolate brownie on a hot iron skillet topped with vanilla scoop and sizzling hot chocolate fudge', isPopular: true },
          { name: 'Chocolate Mousse Cups', description: 'Light, airy eggless chocolate mousse topped with white chocolate curls' },
          { name: 'Red Velvet Pastry Bites', description: 'Moist red velvet sponge layers with light cream-cheese frosting' }
        ]
      },
      {
        name: 'Interactive & Beverage Desserts',
        items: [
          { name: 'Grand Chocolate Fountain', description: 'Four-tier cascading milk chocolate fountain served with strawberries, marshmallows, brownie bites, and butter cookies', isPopular: true },
          { name: 'Premium Soft Serve Station', description: 'Interactive soft-serve machine dispensing vanilla & chocolate swirls with custom sprinkles and syrups' }
        ]
      }
    ]
  },
  {
    id: 'morning-breakfast',
    name: 'Morning Breakfast',
    description: 'A perfect array of hot morning treats to energize early gatherings',
    subCategories: [
      {
        name: 'Traditional Breakfast',
        items: [
          { name: 'Indori Poha with Hot Jalebi', description: 'Steamed turmeric flattened rice garnished with sev and pomegranate, paired with hot jalebi', isPopular: true },
          { name: 'Puri Bhaji', description: 'Fluffy golden fried puris served with spiced potato gravy and pickle' },
          { name: 'Methi Thepla with Chutney', description: 'Thin fenugreek wheat flatbreads with fresh yogurt and sweet-sour pickle' },
          { name: 'Suji Upma', description: 'Roasted semolina cooked with ghee, mustard seeds, green peas, and toasted cashew nuts' }
        ]
      },
      {
        name: 'Continental Options',
        items: [
          { name: 'Toasted Veg Club Sandwiches', description: 'Three-layered sandwich with tomatoes, cucumbers, potatoes, and mint-cheese spread' },
          { name: 'Assorted Sweet Muffins', description: 'Soft baked vanilla, chocolate chip, and blueberry muffins' }
        ]
      }
    ]
  }
];

export const liveCountersHighlightList = [
  'Swiss Raclette (Melted cheese scraped live)',
  'Mediterranean, Greek & Lebanese (Pita pockets & Hummus)',
  'Wood-fired Artisan Pizzas',
  'Mongolian Stir-fry Grid (Custom noodle tossing)',
  'Live Italian Pasta & Risotto Station',
  'Mexican Live Quesadilla & Nacho Bar',
  'Oriental Dimsum & Steamed Bao Counter',
  'Thai Noodle Bar'
];

export const bookingTerms: BookingTerm[] = [
  { title: 'Payment Schedule', details: '75% advance payment required to secure and lock the function date; the remaining 25% balance must be cleared within 2 days after the function concludes.' },
  { title: 'Taxes & Billing', details: 'GST charges are extra as applicable. Proper formal billing is compulsory for all events.' },
  { title: 'Loss/Theft Liability', details: 'Punit Caterers is not responsible for the loss, theft, or damage of any valuables, jewelry, or personal belongings at the venue.' },
  { title: 'Food Taste & Freshness Guarantee', details: 'We guarantee that the optimum taste, aroma, and freshness of our food is maintained for up to 4 hours from the agreed serving time.' },
  { title: 'Party Host Provisions', details: 'Standard layout provisions including buffet counters, partition lighting, kitchen space setup, utility water, hand wash basins, dining furniture, and clean linen must be provided entirely by the party/host.' },
  { title: 'Setup Time Requirement', details: 'To ensure a pristine and flawless setup, the venue space must be handed over to our setup team at least 24 hours before the function starts.' },
  { title: 'Utensil & Venue Monopoly Charges', details: 'Any third-party utensil rental fees, kitchen tax, venue monopoly charges, or local association fees must be borne directly by the party.' },
  { title: 'Electrical Requirements', details: 'Adequate electrical power points, including a stable 3-phase power connection in the main kitchen area, must be provided by the party.' },
  { title: 'Menu Modification Policy', details: 'Any menu adjustments or changes are accepted up to 1 week prior to the event only. No phone-only or last-minute verbal changes will be honored; changes must be confirmed in writing.' },
  { title: 'Cancellation Policy', details: 'Once booked and date-locked, we operate on a strict no-refund and no-cancellations policy.' },
  { title: 'Outstation Catering', details: 'Catering services requested outside of Ahmedabad city limits are subject to additional transport, logistics, and outstation surcharge fees.' },
  { title: 'Staffing & Service Hours', details: 'Executive PROs, hostesses, and premium service staff are charged extra if requested. Standard dinner service operates till 12:00 AM midnight only.' },
  { title: 'Gas Balloon Warning', details: 'No flammable gas balloons are allowed anywhere near the food counters or active kitchen zones due to fire safety protocols.' },
  { title: 'Extra Guests Beyond Guarantee', details: 'Any extra guests served beyond the officially guaranteed count will be logged and charged at the finalized per-person rate.' },
  { title: 'Date Confirmation Policy', details: 'The event date is considered officially confirmed and locked ONLY upon receipt of the advance payment. Oral conversations do not constitute a booking commitment.' },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 'img1',
    title: 'Exquisite Buffet Display',
    category: 'setup',
    imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'img2',
    title: 'Traditional Welcome Mocktails',
    category: 'dishes',
    imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'img3',
    title: 'Interactive Live Pasta Station',
    category: 'setup',
    imageUrl: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'img4',
    title: 'Artisanal Dessert Platters',
    category: 'dishes',
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'img5',
    title: 'Elegantly Styled Seating Setup',
    category: 'decor',
    imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'img6',
    title: 'Premium Indian Main Courses',
    category: 'dishes',
    imageUrl: 'https://images.unsplash.com/photo-1585938338392-50a59970d8ee?q=80&w=800&auto=format&fit=crop'
  }
];
