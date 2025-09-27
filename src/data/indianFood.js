// Comprehensive database of Indian dishes with nutritional information
// Calories are per standard serving size (mentioned in grams/ml)

export const indianFoodDatabase = [
  // North Indian Main Dishes
  {
    id: 1,
    name: "Butter Chicken",
    category: "North Indian",
    type: "Non-Veg",
    servingSize: "200g",
    calories: 438,
    protein: 30,
    carbs: 12,
    fat: 31,
    fiber: 2,
    region: "Punjab"
  },
  {
    id: 2,
    name: "Dal Makhani",
    category: "North Indian",
    type: "Veg",
    servingSize: "150g",
    calories: 285,
    protein: 12,
    carbs: 32,
    fat: 12,
    fiber: 8,
    region: "Punjab"
  },
  {
    id: 3,
    name: "Palak Paneer",
    category: "North Indian",
    type: "Veg",
    servingSize: "150g",
    calories: 265,
    protein: 15,
    carbs: 8,
    fat: 20,
    fiber: 4,
    region: "Punjab"
  },
  {
    id: 4,
    name: "Chicken Tikka Masala",
    category: "North Indian",
    type: "Non-Veg",
    servingSize: "200g",
    calories: 365,
    protein: 28,
    carbs: 15,
    fat: 22,
    fiber: 3,
    region: "Punjab"
  },
  {
    id: 5,
    name: "Rajma",
    category: "North Indian",
    type: "Veg",
    servingSize: "150g",
    calories: 225,
    protein: 14,
    carbs: 38,
    fat: 2,
    fiber: 12,
    region: "Punjab"
  },
  {
    id: 6,
    name: "Chole Bhature",
    category: "North Indian",
    type: "Veg",
    servingSize: "2 bhature + 150g chole",
    calories: 585,
    protein: 18,
    carbs: 75,
    fat: 22,
    fiber: 10,
    region: "Punjab"
  },
  {
    id: 7,
    name: "Aloo Gobi",
    category: "North Indian",
    type: "Veg",
    servingSize: "150g",
    calories: 145,
    protein: 4,
    carbs: 22,
    fat: 6,
    fiber: 5,
    region: "Punjab"
  },

  // South Indian Main Dishes
  {
    id: 8,
    name: "Sambar",
    category: "South Indian",
    type: "Veg",
    servingSize: "200ml",
    calories: 125,
    protein: 6,
    carbs: 18,
    fat: 3,
    fiber: 4,
    region: "Tamil Nadu"
  },
  {
    id: 9,
    name: "Rasam",
    category: "South Indian",
    type: "Veg",
    servingSize: "200ml",
    calories: 85,
    protein: 3,
    carbs: 12,
    fat: 2,
    fiber: 2,
    region: "Tamil Nadu"
  },
  {
    id: 10,
    name: "Chicken Curry (South Style)",
    category: "South Indian",
    type: "Non-Veg",
    servingSize: "200g",
    calories: 295,
    protein: 32,
    carbs: 8,
    fat: 15,
    fiber: 2,
    region: "Kerala"
  },
  {
    id: 11,
    name: "Fish Curry",
    category: "South Indian",
    type: "Non-Veg",
    servingSize: "200g",
    calories: 245,
    protein: 28,
    carbs: 6,
    fat: 12,
    fiber: 1,
    region: "Kerala"
  },
  {
    id: 12,
    name: "Avial",
    category: "South Indian",
    type: "Veg",
    servingSize: "150g",
    calories: 165,
    protein: 4,
    carbs: 18,
    fat: 9,
    fiber: 6,
    region: "Kerala"
  },
  {
    id: 13,
    name: "Bisi Bele Bath",
    category: "South Indian",
    type: "Veg",
    servingSize: "200g",
    calories: 285,
    protein: 8,
    carbs: 52,
    fat: 6,
    fiber: 4,
    region: "Karnataka"
  },

  // Rice Dishes
  {
    id: 14,
    name: "Basmati Rice (Plain)",
    category: "Rice",
    type: "Veg",
    servingSize: "150g cooked",
    calories: 205,
    protein: 4,
    carbs: 45,
    fat: 0.5,
    fiber: 1,
    region: "All India"
  },
  {
    id: 15,
    name: "Biryani (Chicken)",
    category: "Rice",
    type: "Non-Veg",
    servingSize: "300g",
    calories: 485,
    protein: 28,
    carbs: 58,
    fat: 16,
    fiber: 3,
    region: "Hyderabad"
  },
  {
    id: 16,
    name: "Biryani (Vegetable)",
    category: "Rice",
    type: "Veg",
    servingSize: "300g",
    calories: 365,
    protein: 8,
    carbs: 68,
    fat: 8,
    fiber: 4,
    region: "Hyderabad"
  },
  {
    id: 17,
    name: "Pulao",
    category: "Rice",
    type: "Veg",
    servingSize: "200g",
    calories: 285,
    protein: 6,
    carbs: 54,
    fat: 5,
    fiber: 2,
    region: "All India"
  },
  {
    id: 18,
    name: "Jeera Rice",
    category: "Rice",
    type: "Veg",
    servingSize: "150g",
    calories: 225,
    protein: 4,
    carbs: 46,
    fat: 3,
    fiber: 1,
    region: "All India"
  },
  {
    id: 19,
    name: "Curd Rice",
    category: "Rice",
    type: "Veg",
    servingSize: "200g",
    calories: 245,
    protein: 8,
    carbs: 42,
    fat: 5,
    fiber: 1,
    region: "South India"
  },

  // Bread
  {
    id: 20,
    name: "Roti (Chapati)",
    category: "Bread",
    type: "Veg",
    servingSize: "1 medium (30g)",
    calories: 85,
    protein: 3,
    carbs: 18,
    fat: 0.5,
    fiber: 3,
    region: "All India"
  },
  {
    id: 21,
    name: "Naan",
    category: "Bread",
    type: "Veg",
    servingSize: "1 medium (90g)",
    calories: 285,
    protein: 9,
    carbs: 45,
    fat: 9,
    fiber: 2,
    region: "North India"
  },
  {
    id: 22,
    name: "Paratha (Plain)",
    category: "Bread",
    type: "Veg",
    servingSize: "1 medium (60g)",
    calories: 185,
    protein: 5,
    carbs: 28,
    fat: 6,
    fiber: 3,
    region: "North India"
  },
  {
    id: 23,
    name: "Aloo Paratha",
    category: "Bread",
    type: "Veg",
    servingSize: "1 medium (90g)",
    calories: 265,
    protein: 6,
    carbs: 38,
    fat: 10,
    fiber: 4,
    region: "North India"
  },
  {
    id: 24,
    name: "Puri",
    category: "Bread",
    type: "Veg",
    servingSize: "2 medium (30g)",
    calories: 145,
    protein: 3,
    carbs: 18,
    fat: 7,
    fiber: 1,
    region: "All India"
  },

  // South Indian Breakfast
  {
    id: 25,
    name: "Idli",
    category: "Breakfast",
    type: "Veg",
    servingSize: "2 pieces (120g)",
    calories: 145,
    protein: 6,
    carbs: 28,
    fat: 1,
    fiber: 2,
    region: "South India"
  },
  {
    id: 26,
    name: "Dosa (Plain)",
    category: "Breakfast",
    type: "Veg",
    servingSize: "1 large (150g)",
    calories: 165,
    protein: 6,
    carbs: 32,
    fat: 2,
    fiber: 2,
    region: "South India"
  },
  {
    id: 27,
    name: "Masala Dosa",
    category: "Breakfast",
    type: "Veg",
    servingSize: "1 large (200g)",
    calories: 285,
    protein: 8,
    carbs: 48,
    fat: 8,
    fiber: 4,
    region: "South India"
  },
  {
    id: 28,
    name: "Uttapam",
    category: "Breakfast",
    type: "Veg",
    servingSize: "1 large (150g)",
    calories: 195,
    protein: 7,
    carbs: 35,
    fat: 3,
    fiber: 3,
    region: "South India"
  },
  {
    id: 29,
    name: "Vada",
    category: "Breakfast",
    type: "Veg",
    servingSize: "2 pieces (80g)",
    calories: 185,
    protein: 5,
    carbs: 22,
    fat: 9,
    fiber: 2,
    region: "South India"
  },
  {
    id: 30,
    name: "Upma",
    category: "Breakfast",
    type: "Veg",
    servingSize: "150g",
    calories: 205,
    protein: 5,
    carbs: 35,
    fat: 5,
    fiber: 3,
    region: "South India"
  },
  {
    id: 31,
    name: "Poha",
    category: "Breakfast",
    type: "Veg",
    servingSize: "150g",
    calories: 185,
    protein: 4,
    carbs: 38,
    fat: 2,
    fiber: 2,
    region: "Maharashtra"
  },

  // Gujarati Dishes
  {
    id: 32,
    name: "Dhokla",
    category: "Gujarati",
    type: "Veg",
    servingSize: "100g (4 pieces)",
    calories: 165,
    protein: 6,
    carbs: 28,
    fat: 3,
    fiber: 2,
    region: "Gujarat"
  },
  {
    id: 33,
    name: "Undhiyu",
    category: "Gujarati",
    type: "Veg",
    servingSize: "200g",
    calories: 245,
    protein: 8,
    carbs: 32,
    fat: 10,
    fiber: 8,
    region: "Gujarat"
  },
  {
    id: 34,
    name: "Gujarati Dal",
    category: "Gujarati",
    type: "Veg",
    servingSize: "150g",
    calories: 165,
    protein: 8,
    carbs: 28,
    fat: 2,
    fiber: 6,
    region: "Gujarat"
  },
  {
    id: 35,
    name: "Thepla",
    category: "Gujarati",
    type: "Veg",
    servingSize: "2 pieces (80g)",
    calories: 205,
    protein: 6,
    carbs: 32,
    fat: 6,
    fiber: 4,
    region: "Gujarat"
  },

  // Bengali Dishes
  {
    id: 36,
    name: "Fish Curry (Bengali Style)",
    category: "Bengali",
    type: "Non-Veg",
    servingSize: "200g",
    calories: 265,
    protein: 26,
    carbs: 8,
    fat: 15,
    fiber: 2,
    region: "West Bengal"
  },
  {
    id: 37,
    name: "Dal (Bengali Style)",
    category: "Bengali",
    type: "Veg",
    servingSize: "150g",
    calories: 145,
    protein: 8,
    carbs: 22,
    fat: 3,
    fiber: 5,
    region: "West Bengal"
  },
  {
    id: 38,
    name: "Aloo Posto",
    category: "Bengali",
    type: "Veg",
    servingSize: "150g",
    calories: 285,
    protein: 6,
    carbs: 25,
    fat: 18,
    fiber: 4,
    region: "West Bengal"
  },
  {
    id: 39,
    name: "Shorshe Ilish",
    category: "Bengali",
    type: "Non-Veg",
    servingSize: "200g",
    calories: 345,
    protein: 28,
    carbs: 4,
    fat: 24,
    fiber: 1,
    region: "West Bengal"
  },

  // Snacks and Street Food
  {
    id: 40,
    name: "Samosa",
    category: "Snacks",
    type: "Veg",
    servingSize: "2 pieces (100g)",
    calories: 285,
    protein: 6,
    carbs: 32,
    fat: 15,
    fiber: 3,
    region: "All India"
  },
  {
    id: 41,
    name: "Pakora",
    category: "Snacks",
    type: "Veg",
    servingSize: "100g (8-10 pieces)",
    calories: 245,
    protein: 5,
    carbs: 22,
    fat: 15,
    fiber: 3,
    region: "All India"
  },
  {
    id: 42,
    name: "Chaat",
    category: "Snacks",
    type: "Veg",
    servingSize: "100g",
    calories: 185,
    protein: 4,
    carbs: 28,
    fat: 6,
    fiber: 4,
    region: "North India"
  },
  {
    id: 43,
    name: "Pani Puri",
    category: "Snacks",
    type: "Veg",
    servingSize: "6 pieces",
    calories: 125,
    protein: 3,
    carbs: 22,
    fat: 3,
    fiber: 2,
    region: "All India"
  },
  {
    id: 44,
    name: "Vada Pav",
    category: "Snacks",
    type: "Veg",
    servingSize: "1 piece (150g)",
    calories: 285,
    protein: 7,
    carbs: 42,
    fat: 10,
    fiber: 4,
    region: "Maharashtra"
  },
  {
    id: 45,
    name: "Bhel Puri",
    category: "Snacks",
    type: "Veg",
    servingSize: "100g",
    calories: 165,
    protein: 4,
    carbs: 28,
    fat: 4,
    fiber: 3,
    region: "Maharashtra"
  },

  // Sweets and Desserts
  {
    id: 46,
    name: "Gulab Jamun",
    category: "Desserts",
    type: "Veg",
    servingSize: "2 pieces (80g)",
    calories: 385,
    protein: 6,
    carbs: 52,
    fat: 18,
    fiber: 1,
    region: "All India"
  },
  {
    id: 47,
    name: "Rasgulla",
    category: "Desserts",
    type: "Veg",
    servingSize: "2 pieces (100g)",
    calories: 245,
    protein: 8,
    carbs: 48,
    fat: 3,
    fiber: 0,
    region: "West Bengal"
  },
  {
    id: 48,
    name: "Kheer",
    category: "Desserts",
    type: "Veg",
    servingSize: "150g",
    calories: 285,
    protein: 8,
    carbs: 48,
    fat: 8,
    fiber: 1,
    region: "All India"
  },
  {
    id: 49,
    name: "Halwa (Carrot)",
    category: "Desserts",
    type: "Veg",
    servingSize: "100g",
    calories: 245,
    protein: 4,
    carbs: 38,
    fat: 9,
    fiber: 3,
    region: "North India"
  },
  {
    id: 50,
    name: "Laddu",
    category: "Desserts",
    type: "Veg",
    servingSize: "2 pieces (80g)",
    calories: 325,
    protein: 6,
    carbs: 45,
    fat: 14,
    fiber: 2,
    region: "All India"
  },

  // Beverages
  {
    id: 51,
    name: "Chai (Tea with Milk)",
    category: "Beverages",
    type: "Veg",
    servingSize: "200ml",
    calories: 85,
    protein: 3,
    carbs: 12,
    fat: 3,
    fiber: 0,
    region: "All India"
  },
  {
    id: 52,
    name: "Lassi (Sweet)",
    category: "Beverages",
    type: "Veg",
    servingSize: "250ml",
    calories: 245,
    protein: 8,
    carbs: 35,
    fat: 8,
    fiber: 0,
    region: "Punjab"
  },
  {
    id: 53,
    name: "Lassi (Salted)",
    category: "Beverages",
    type: "Veg",
    servingSize: "250ml",
    calories: 165,
    protein: 8,
    carbs: 12,
    fat: 8,
    fiber: 0,
    region: "Punjab"
  },
  {
    id: 54,
    name: "Fresh Lime Water",
    category: "Beverages",
    type: "Veg",
    servingSize: "250ml",
    calories: 45,
    protein: 0,
    carbs: 12,
    fat: 0,
    fiber: 0,
    region: "All India"
  },
  {
    id: 55,
    name: "Buttermilk",
    category: "Beverages",
    type: "Veg",
    servingSize: "250ml",
    calories: 85,
    protein: 4,
    carbs: 8,
    fat: 3,
    fiber: 0,
    region: "All India"
  },

  // Rajasthani Dishes
  {
    id: 56,
    name: "Dal Baati Churma",
    category: "Rajasthani",
    type: "Veg",
    servingSize: "2 baati + dal + churma (300g)",
    calories: 685,
    protein: 18,
    carbs: 85,
    fat: 28,
    fiber: 8,
    region: "Rajasthan"
  },
  {
    id: 57,
    name: "Gatte Ki Sabzi",
    category: "Rajasthani",
    type: "Veg",
    servingSize: "150g",
    calories: 245,
    protein: 8,
    carbs: 28,
    fat: 12,
    fiber: 4,
    region: "Rajasthan"
  },
  {
    id: 58,
    name: "Laal Maas",
    category: "Rajasthani",
    type: "Non-Veg",
    servingSize: "200g",
    calories: 385,
    protein: 32,
    carbs: 8,
    fat: 25,
    fiber: 2,
    region: "Rajasthan"
  },

  // Kashmiri Dishes
  {
    id: 59,
    name: "Rogan Josh",
    category: "Kashmiri",
    type: "Non-Veg",
    servingSize: "200g",
    calories: 365,
    protein: 28,
    carbs: 12,
    fat: 24,
    fiber: 2,
    region: "Kashmir"
  },
  {
    id: 60,
    name: "Dum Aloo (Kashmiri)",
    category: "Kashmiri",
    type: "Veg",
    servingSize: "200g",
    calories: 285,
    protein: 5,
    carbs: 38,
    fat: 12,
    fiber: 5,
    region: "Kashmir"
  }
];

// Helper functions
export const getUniqueCategories = () => {
  return [...new Set(indianFoodDatabase.map(item => item.category))];
};

export const getUniqueRegions = () => {
  return [...new Set(indianFoodDatabase.map(item => item.region))];
};

export const getFoodByCategory = (category) => {
  return indianFoodDatabase.filter(item => item.category === category);
};

export const getFoodByRegion = (region) => {
  return indianFoodDatabase.filter(item => item.region === region);
};

export const searchFood = (query) => {
  if (!query) return [];
  
  const lowerQuery = query.toLowerCase();
  return indianFoodDatabase.filter(item =>
    item.name.toLowerCase().includes(lowerQuery) ||
    item.category.toLowerCase().includes(lowerQuery) ||
    item.region.toLowerCase().includes(lowerQuery)
  );
};

export const getFoodById = (id) => {
  return indianFoodDatabase.find(item => item.id === id);
};
