import { Restaurant } from '../types';

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Spice Garden",
    cuisine: "North Indian",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
    rating: 4.5,
    deliveryTime: "30-45 mins",
    priceRange: "₹₹",
    description: "Authentic North Indian delicacies with traditional flavors",
    menu: [
      { id: 1, name: "Butter Chicken", description: "Creamy tomato-based chicken curry", price: 320, image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg", category: "main", isVeg: false, spiceLevel: "medium" },
      { id: 2, name: "Dal Makhani", description: "Rich and creamy black lentil curry", price: 280, image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg", category: "main", isVeg: true, spiceLevel: "mild" },
      { id: 3, name: "Paneer Tikka", description: "Grilled cottage cheese with spices", price: 250, image: "https://images.pexels.com/photos/4099236/pexels-photo-4099236.jpeg", category: "starter", isVeg: true, spiceLevel: "medium" }
    ]
  },
  {
    id: 2,
    name: "Chennai Express",
    cuisine: "South Indian",
    image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg",
    rating: 4.3,
    deliveryTime: "25-35 mins",
    priceRange: "₹",
    description: "Traditional South Indian breakfast and meals",
    menu: [
      { id: 4, name: "Masala Dosa", description: "Crispy crepe with spiced potato filling", price: 120, image: "https://images.pexels.com/photos/5560048/pexels-photo-5560048.jpeg", category: "main", isVeg: true, spiceLevel: "medium" },
      { id: 5, name: "Idli Sambar", description: "Steamed rice cakes with lentil curry", price: 80, image: "https://images.pexels.com/photos/5560048/pexels-photo-5560048.jpeg", category: "main", isVeg: true, spiceLevel: "mild" },
      { id: 6, name: "Filter Coffee", description: "Traditional South Indian coffee", price: 40, image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg", category: "beverage", isVeg: true }
    ]
  },
  {
    id: 3,
    name: "Rajasthani Rasoi",
    cuisine: "Rajasthani",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    rating: 4.6,
    deliveryTime: "35-50 mins",
    priceRange: "₹₹₹",
    description: "Royal Rajasthani cuisine with authentic flavors",
    menu: [
      { id: 7, name: "Dal Baati Churma", description: "Traditional Rajasthani wheat balls with dal", price: 350, image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg", category: "main", isVeg: true, spiceLevel: "medium" },
      { id: 8, name: "Laal Maas", description: "Spicy Rajasthani mutton curry", price: 450, image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg", category: "main", isVeg: false, spiceLevel: "spicy" }
    ]
  },
  {
    id: 4,
    name: "Mumbai Street Food",
    cuisine: "Street Food",
    image: "https://images.pexels.com/photos/4099236/pexels-photo-4099236.jpeg",
    rating: 4.4,
    deliveryTime: "20-30 mins",
    priceRange: "₹",
    description: "Authentic Mumbai street food experience",
    menu: [
      { id: 9, name: "Pav Bhaji", description: "Spiced vegetable curry with bread rolls", price: 150, image: "https://images.pexels.com/photos/4099236/pexels-photo-4099236.jpeg", category: "main", isVeg: true, spiceLevel: "medium" },
      { id: 10, name: "Vada Pav", description: "Mumbai's favorite potato fritter burger", price: 30, image: "https://images.pexels.com/photos/4099236/pexels-photo-4099236.jpeg", category: "starter", isVeg: true, spiceLevel: "medium" }
    ]
  },
  {
    id: 5,
    name: "Bengali Bhoj",
    cuisine: "Bengali",
    image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg",
    rating: 4.2,
    deliveryTime: "40-55 mins",
    priceRange: "₹₹",
    description: "Traditional Bengali cuisine with fish and sweets",
    menu: [
      { id: 11, name: "Fish Curry", description: "Traditional Bengali fish curry with rice", price: 300, image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg", category: "main", isVeg: false, spiceLevel: "medium" },
      { id: 12, name: "Rasgulla", description: "Soft spongy cottage cheese balls in syrup", price: 120, image: "https://images.pexels.com/photos/1546988/pexels-photo-1546988.jpeg", category: "dessert", isVeg: true }
    ]
  },
  {
    id: 6,
    name: "Punjabi Tadka",
    cuisine: "Punjabi",
    image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
    rating: 4.7,
    deliveryTime: "30-40 mins",
    priceRange: "₹₹",
    description: "Rich and hearty Punjabi food",
    menu: [
      { id: 13, name: "Chole Bhature", description: "Spiced chickpeas with fried bread", price: 180, image: "https://images.pexels.com/photos/5560048/pexels-photo-5560048.jpeg", category: "main", isVeg: true, spiceLevel: "medium" },
      { id: 14, name: "Sarson ka Saag", description: "Mustard greens curry with makki roti", price: 220, image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg", category: "main", isVeg: true, spiceLevel: "mild" }
    ]
  },
  {
    id: 7,
    name: "Hyderabadi Biryani House",
    cuisine: "Hyderabadi",
    image: "https://images.pexels.com/photos/4087394/pexels-photo-4087394.jpeg",
    rating: 4.8,
    deliveryTime: "45-60 mins",
    priceRange: "₹₹₹",
    description: "Authentic Hyderabadi biryani and kebabs",
    menu: [
      { id: 15, name: "Chicken Biryani", description: "Fragrant basmati rice with spiced chicken", price: 380, image: "https://images.pexels.com/photos/4087394/pexels-photo-4087394.jpeg", category: "main", isVeg: false, spiceLevel: "medium" },
      { id: 16, name: "Mutton Biryani", description: "Aromatic biryani with tender mutton", price: 450, image: "https://images.pexels.com/photos/4087394/pexels-photo-4087394.jpeg", category: "main", isVeg: false, spiceLevel: "medium" }
    ]
  },
  {
    id: 8,
    name: "Gujarati Thali",
    cuisine: "Gujarati",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    rating: 4.3,
    deliveryTime: "35-45 mins",
    priceRange: "₹₹",
    description: "Complete Gujarati thali with variety",
    menu: [
      { id: 17, name: "Gujarati Thali", description: "Complete meal with dal, vegetables, roti, rice", price: 280, image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg", category: "main", isVeg: true, spiceLevel: "mild" },
      { id: 18, name: "Dhokla", description: "Steamed chickpea flour snack", price: 80, image: "https://images.pexels.com/photos/4099236/pexels-photo-4099236.jpeg", category: "starter", isVeg: true, spiceLevel: "mild" }
    ]
  },
  {
    id: 9,
    name: "Kashmiri Kitchen",
    cuisine: "Kashmiri",
    image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
    rating: 4.5,
    deliveryTime: "40-50 mins",
    priceRange: "₹₹₹",
    description: "Authentic Kashmiri cuisine with exotic flavors",
    menu: [
      { id: 19, name: "Rogan Josh", description: "Aromatic lamb curry with Kashmiri spices", price: 420, image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg", category: "main", isVeg: false, spiceLevel: "medium" },
      { id: 20, name: "Kahwa", description: "Traditional Kashmiri green tea", price: 60, image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg", category: "beverage", isVeg: true }
    ]
  },
  {
    id: 10,
    name: "Kerala Spice Route",
    cuisine: "Kerala",
    image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg",
    rating: 4.4,
    deliveryTime: "35-45 mins",
    priceRange: "₹₹",
    description: "Coastal Kerala flavors with coconut and spices",
    menu: [
      { id: 21, name: "Fish Moilee", description: "Kerala style fish curry in coconut milk", price: 320, image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg", category: "main", isVeg: false, spiceLevel: "mild" },
      { id: 22, name: "Appam", description: "Fermented rice pancake", price: 80, image: "https://images.pexels.com/photos/5560048/pexels-photo-5560048.jpeg", category: "main", isVeg: true }
    ]
  },
  {
    id: 11,
    name: "Marathi Manoos",
    cuisine: "Maharashtrian",
    image: "https://images.pexels.com/photos/4099236/pexels-photo-4099236.jpeg",
    rating: 4.2,
    deliveryTime: "30-40 mins",
    priceRange: "₹",
    description: "Traditional Maharashtrian home-style food",
    menu: [
      { id: 23, name: "Misal Pav", description: "Spicy sprouts curry with bread", price: 120, image: "https://images.pexels.com/photos/4099236/pexels-photo-4099236.jpeg", category: "main", isVeg: true, spiceLevel: "spicy" },
      { id: 24, name: "Puran Poli", description: "Sweet lentil stuffed flatbread", price: 100, image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg", category: "dessert", isVeg: true }
    ]
  },
  {
    id: 12,
    name: "Goan Delights",
    cuisine: "Goan",
    image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg",
    rating: 4.6,
    deliveryTime: "40-55 mins",
    priceRange: "₹₹",
    description: "Coastal Goan cuisine with Portuguese influence",
    menu: [
      { id: 25, name: "Fish Curry Rice", description: "Goan style fish curry with rice", price: 280, image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg", category: "main", isVeg: false, spiceLevel: "medium" },
      { id: 26, name: "Bebinca", description: "Traditional Goan layered dessert", price: 150, image: "https://images.pexels.com/photos/1546988/pexels-photo-1546988.jpeg", category: "dessert", isVeg: true }
    ]
  },
  {
    id: 13,
    name: "Andhra Spice",
    cuisine: "Andhra",
    image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
    rating: 4.5,
    deliveryTime: "35-45 mins",
    priceRange: "₹₹",
    description: "Spicy Andhra cuisine that packs a punch",
    menu: [
      { id: 27, name: "Chicken 65", description: "Spicy fried chicken appetizer", price: 220, image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg", category: "starter", isVeg: false, spiceLevel: "spicy" },
      { id: 28, name: "Gongura Mutton", description: "Mutton curry with sorrel leaves", price: 380, image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg", category: "main", isVeg: false, spiceLevel: "spicy" }
    ]
  },
  {
    id: 14,
    name: "Tamil Taste",
    cuisine: "Tamil",
    image: "https://images.pexels.com/photos/5560048/pexels-photo-5560048.jpeg",
    rating: 4.3,
    deliveryTime: "30-40 mins",
    priceRange: "₹",
    description: "Authentic Tamil Nadu flavors",
    menu: [
      { id: 29, name: "Chettinad Chicken", description: "Spicy chicken curry with roasted spices", price: 300, image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg", category: "main", isVeg: false, spiceLevel: "spicy" },
      { id: 30, name: "Pongal", description: "Rice and lentil comfort food", price: 120, image: "https://images.pexels.com/photos/5560048/pexels-photo-5560048.jpeg", category: "main", isVeg: true, spiceLevel: "mild" }
    ]
  },
  {
    id: 15,
    name: "Bihari Bawarchi",
    cuisine: "Bihari",
    image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
    rating: 4.1,
    deliveryTime: "40-50 mins",
    priceRange: "₹",
    description: "Traditional Bihari cuisine",
    menu: [
      { id: 31, name: "Litti Chokha", description: "Roasted wheat balls with mashed vegetables", price: 150, image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg", category: "main", isVeg: true, spiceLevel: "medium" },
      { id: 32, name: "Sattu Drink", description: "Roasted gram flour drink", price: 50, image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg", category: "beverage", isVeg: true }
    ]
  },
  {
    id: 16,
    name: "Assamese Ahar",
    cuisine: "Assamese",
    image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg",
    rating: 4.0,
    deliveryTime: "45-55 mins",
    priceRange: "₹₹",
    description: "Northeastern Indian cuisine",
    menu: [
      { id: 33, name: "Fish Tenga", description: "Tangy Assamese fish curry", price: 280, image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg", category: "main", isVeg: false, spiceLevel: "mild" },
      { id: 34, name: "Pitha", description: "Traditional Assamese rice cake", price: 80, image: "https://images.pexels.com/photos/1546988/pexels-photo-1546988.jpeg", category: "dessert", isVeg: true }
    ]
  },
  {
    id: 17,
    name: "Odisha Kitchen",
    cuisine: "Odia",
    image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg",
    rating: 4.2,
    deliveryTime: "35-50 mins",
    priceRange: "₹",
    description: "Traditional Odia cuisine",
    menu: [
      { id: 35, name: "Dalma", description: "Mixed lentil and vegetable curry", price: 180, image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg", category: "main", isVeg: true, spiceLevel: "mild" },
      { id: 36, name: "Rasmalai", description: "Cottage cheese balls in sweetened milk", price: 140, image: "https://images.pexels.com/photos/1546988/pexels-photo-1546988.jpeg", category: "dessert", isVeg: true }
    ]
  },
  {
    id: 18,
    name: "Uttarakhandi Rasoi",
    cuisine: "Uttarakhand",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    rating: 4.1,
    deliveryTime: "40-55 mins",
    priceRange: "₹₹",
    description: "Mountain cuisine from Uttarakhand",
    menu: [
      { id: 37, name: "Kafuli", description: "Green leafy vegetable curry", price: 200, image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg", category: "main", isVeg: true, spiceLevel: "mild" },
      { id: 38, name: "Bal Mithai", description: "Traditional Kumaoni sweet", price: 120, image: "https://images.pexels.com/photos/1546988/pexels-photo-1546988.jpeg", category: "dessert", isVeg: true }
    ]
  },
  {
    id: 19,
    name: "Himachali Dhaba",
    cuisine: "Himachali",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    rating: 4.3,
    deliveryTime: "45-60 mins",
    priceRange: "₹₹",
    description: "Himalayan cuisine from Himachal Pradesh",
    menu: [
      { id: 39, name: "Dham", description: "Traditional Himachali feast", price: 320, image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg", category: "main", isVeg: true, spiceLevel: "mild" },
      { id: 40, name: "Sidu", description: "Steamed bread with ghee", price: 100, image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg", category: "main", isVeg: true }
    ]
  },
  {
    id: 20,
    name: "Nagaland Spice",
    cuisine: "Naga",
    image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
    rating: 4.0,
    deliveryTime: "50-65 mins",
    priceRange: "₹₹",
    description: "Fiery Naga cuisine",
    menu: [
      { id: 41, name: "Naga Pork Curry", description: "Spicy pork curry with ghost peppers", price: 350, image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg", category: "main", isVeg: false, spiceLevel: "spicy" },
      { id: 42, name: "Bamboo Shoot Curry", description: "Fermented bamboo shoot curry", price: 220, image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg", category: "main", isVeg: true, spiceLevel: "spicy" }
    ]
  },
  {
    id: 21,
    name: "Manipuri Kitchen",
    cuisine: "Manipuri",
    image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg",
    rating: 3.9,
    deliveryTime: "45-55 mins",
    priceRange: "₹₹",
    description: "Authentic Manipuri cuisine",
    menu: [
      { id: 43, name: "Eromba", description: "Mashed vegetable curry", price: 180, image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg", category: "main", isVeg: true, spiceLevel: "medium" },
      { id: 44, name: "Ngari", description: "Fermented fish curry", price: 250, image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg", category: "main", isVeg: false, spiceLevel: "spicy" }
    ]
  },
  {
    id: 22,
    name: "Tripura Taste",
    cuisine: "Tripuri",
    image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg",
    rating: 3.8,
    deliveryTime: "40-50 mins",
    priceRange: "₹",
    description: "Traditional Tripuri food",
    menu: [
      { id: 45, name: "Mui Borok", description: "Traditional fish curry", price: 200, image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg", category: "main", isVeg: false, spiceLevel: "medium" },
      { id: 46, name: "Berma", description: "Fermented fish paste with vegetables", price: 150, image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg", category: "main", isVeg: false, spiceLevel: "spicy" }
    ]
  },
  {
    id: 23,
    name: "Mizoram Delights",
    cuisine: "Mizo",
    image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
    rating: 3.9,
    deliveryTime: "45-60 mins",
    priceRange: "₹₹",
    description: "Mizo tribal cuisine",
    menu: [
      { id: 47, name: "Bai", description: "Steamed pork with vegetables", price: 280, image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg", category: "main", isVeg: false, spiceLevel: "mild" },
      { id: 48, name: "Sawhchiar", description: "Rice cooked in bamboo", price: 120, image: "https://images.pexels.com/photos/5560048/pexels-photo-5560048.jpeg", category: "main", isVeg: true }
    ]
  },
  {
    id: 24,
    name: "Arunachali Kitchen",
    cuisine: "Arunachali",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    rating: 4.0,
    deliveryTime: "50-65 mins",
    priceRange: "₹₹",
    description: "Northeastern mountain cuisine",
    menu: [
      { id: 49, name: "Thukpa", description: "Tibetan noodle soup", price: 180, image: "https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg", category: "main", isVeg: true, spiceLevel: "mild" },
      { id: 50, name: "Momos", description: "Steamed dumplings", price: 150, image: "https://images.pexels.com/photos/4099236/pexels-photo-4099236.jpeg", category: "starter", isVeg: true, spiceLevel: "mild" }
    ]
  },
  {
    id: 25,
    name: "Sikkimese Flavors",
    cuisine: "Sikkimese",
    image: "https://images.pexels.com/photos/4099236/pexels-photo-4099236.jpeg",
    rating: 4.2,
    deliveryTime: "40-50 mins",
    priceRange: "₹₹",
    description: "Himalayan cuisine from Sikkim",
    menu: [
      { id: 51, name: "Gundruk", description: "Fermented leafy green soup", price: 160, image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg", category: "main", isVeg: true, spiceLevel: "mild" },
      { id: 52, name: "Phagshapa", description: "Pork with radish and chilies", price: 320, image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg", category: "main", isVeg: false, spiceLevel: "medium" }
    ]
  }
];