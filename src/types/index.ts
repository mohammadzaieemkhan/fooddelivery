export interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  image: string;
  rating: number;
  deliveryTime: string;
  priceRange: string;
  description: string;
  menu: MenuItem[];
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'starter' | 'main' | 'dessert' | 'beverage';
  isVeg: boolean;
  spiceLevel?: 'mild' | 'medium' | 'spicy';
}

export interface Order {
  id: string;
  restaurantName: string;
  items: MenuItem[];
  total: number;
  status: 'preparing' | 'on-the-way' | 'delivered';
  orderTime: string;
}