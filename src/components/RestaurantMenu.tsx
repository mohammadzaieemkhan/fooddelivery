import React, { useState } from 'react';
import { ArrowLeft, Star, Clock, Plus, Minus } from 'lucide-react';
import { Restaurant, MenuItem } from '../types';

interface RestaurantMenuProps {
  restaurant: Restaurant;
  onBack: () => void;
}

const RestaurantMenu: React.FC<RestaurantMenuProps> = ({ restaurant, onBack }) => {
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const addToCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0)
    }));
  };

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = restaurant.menu.find(item => item.id === parseInt(itemId));
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  const filteredMenu = selectedCategory === 'all' 
    ? restaurant.menu 
    : restaurant.menu.filter(item => item.category === selectedCategory);

  const categories = ['all', ...Array.from(new Set(restaurant.menu.map(item => item.category)))];

  const getSpiceLevelColor = (level?: string) => {
    switch (level) {
      case 'mild': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'spicy': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-full transition duration-300"
            >
              <ArrowLeft className="w-6 h-6 text-gray-800" />
            </button>
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-gray-800">{restaurant.name}</h1>
              <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Restaurant Info */}
      <div className="px-4 py-6">
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{restaurant.name}</h2>
                <p className="text-gray-600">{restaurant.description}</p>
              </div>
              <div className="flex items-center space-x-1 bg-green-100 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-green-600 fill-current" />
                <span className="text-green-700 font-medium">{restaurant.rating}</span>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{restaurant.deliveryTime}</span>
              </div>
              <span>{restaurant.priceRange}</span>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex space-x-3 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-orange-300'
                }`}
              >
                {category === 'all' ? 'All Items' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-4 mb-20">
          {filteredMenu.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300"
            >
              <div className="flex space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <div className={`w-3 h-3 rounded-full border-2 ${
                          item.isVeg ? 'border-green-500 bg-green-500' : 'border-red-500 bg-red-500'
                        }`} />
                      </div>
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                      <div className="flex items-center space-x-4">
                        <span className="text-lg font-bold text-gray-800">₹{item.price}</span>
                        {item.spiceLevel && (
                          <span className={`text-xs font-medium ${getSpiceLevelColor(item.spiceLevel)}`}>
                            🌶️ {item.spiceLevel}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {cart[item.id] > 0 ? (
                        <>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="w-8 h-8 bg-orange-100 hover:bg-orange-200 rounded-full flex items-center justify-center transition duration-300"
                          >
                            <Minus className="w-4 h-4 text-orange-600" />
                          </button>
                          <span className="w-8 text-center font-semibold text-gray-800">
                            {cart[item.id]}
                          </span>
                          <button
                            onClick={() => addToCart(item.id)}
                            className="w-8 h-8 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition duration-300"
                          >
                            <Plus className="w-4 h-4 text-white" />
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => addToCart(item.id)}
                          className="px-4 py-2 bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white rounded-lg font-medium transition duration-300 transform hover:scale-[1.02]"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Summary */}
      {getTotalItems() > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-bold text-gray-800">₹{getCartTotal()}</p>
              <p className="text-sm text-gray-600">{getTotalItems()} items</p>
            </div>
            <button className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white px-8 py-3 rounded-xl font-semibold transition duration-300 transform hover:scale-[1.02]">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;