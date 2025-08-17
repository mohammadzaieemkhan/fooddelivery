import React from 'react';
import { User, ShoppingBag, Search, MapPin, Star, TrendingUp, Clock, Award } from 'lucide-react';
import { restaurants } from '../data/restaurants';
import { Restaurant } from '../types';

interface DashboardProps {
  onRestaurantSelect: (restaurant: Restaurant) => void;
  onNavigate: (screen: 'dashboard' | 'profile' | 'orders') => void;
  user: { phone: string };
}

const Dashboard: React.FC<DashboardProps> = ({ onRestaurantSelect, onNavigate, user }) => {
  const featuredRestaurants = restaurants.slice(0, 6);
  const topRatedRestaurants = restaurants.filter(r => r.rating >= 4.5).slice(0, 4);
  const quickDeliveryRestaurants = restaurants.filter(r => parseInt(r.deliveryTime) <= 35).slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-red-500" />
              <div>
                <p className="text-sm font-medium text-gray-800">Deliver to</p>
                <p className="text-xs text-gray-600">Current Location</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-right mr-2">
                <p className="text-xs text-gray-600">Welcome back!</p>
                <p className="text-sm font-medium text-gray-800">{user.phone}</p>
              </div>
            <div className="flex space-x-3">
              <button
                onClick={() => onNavigate('profile')}
                className="p-2 bg-orange-100 rounded-full hover:bg-orange-200 transition duration-300"
              >
                <User className="w-6 h-6 text-orange-600" />
              </button>
              <button
                onClick={() => onNavigate('orders')}
                className="p-2 bg-orange-100 rounded-full hover:bg-orange-200 transition duration-300"
              >
                <ShoppingBag className="w-6 h-6 text-orange-600" />
              </button>
            </div>
            </div>
          </div>
        </div>
      </header>

      <div className="px-4 py-6">
        {/* Welcome Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Internship Project</h1>
          <p className="text-gray-600">Discover delicious Indian cuisines near you</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-xl p-4 text-white">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <div>
                <p className="text-xs opacity-90">Total Orders</p>
                <p className="text-lg font-bold">12</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl p-4 text-white">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <div>
                <p className="text-xs opacity-90">Saved</p>
                <p className="text-lg font-bold">₹240</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl p-4 text-white">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <div>
                <p className="text-xs opacity-90">Avg Time</p>
                <p className="text-lg font-bold">28m</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for restaurants, cuisines..."
            className="w-full pl-10 pr-4 py-3 bg-white rounded-xl shadow-sm border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Popular Cuisines</h2>
          <div className="flex space-x-3 overflow-x-auto pb-2">
            {['North Indian', 'South Indian', 'Street Food', 'Bengali', 'Punjabi'].map((cuisine) => (
              <div
                key={cuisine}
                className="flex-shrink-0 bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition duration-300"
              >
                {cuisine}
              </div>
            ))}
          </div>
        </div>

        {/* Featured Restaurants */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Featured Restaurants</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {featuredRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                onClick={() => onRestaurantSelect(restaurant)}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer transform hover:scale-[1.02] overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs font-medium">{restaurant.rating}</span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">{restaurant.name}</h3>
                  <p className="text-xs text-gray-600 mb-2">{restaurant.cuisine}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-600">{restaurant.deliveryTime}</span>
                    <span className="text-orange-600 font-medium">{restaurant.priceRange}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Rated */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Top Rated</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {topRatedRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                onClick={() => onRestaurantSelect(restaurant)}
                className="flex-shrink-0 w-64 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer transform hover:scale-[1.02] overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="text-xs font-medium">{restaurant.rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">{restaurant.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{restaurant.cuisine}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{restaurant.deliveryTime}</span>
                    <span className="text-orange-600 font-medium">{restaurant.priceRange}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Delivery */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Delivery</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {quickDeliveryRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                onClick={() => onRestaurantSelect(restaurant)}
                className="flex-shrink-0 w-64 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer transform hover:scale-[1.02] overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span className="text-xs font-medium">Fast</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">{restaurant.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{restaurant.cuisine}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-600 font-medium">{restaurant.deliveryTime}</span>
                    <span className="text-orange-600 font-medium">{restaurant.priceRange}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Restaurants Grid */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">All Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                onClick={() => onRestaurantSelect(restaurant)}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer transform hover:scale-[1.02] overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{restaurant.rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">{restaurant.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{restaurant.cuisine}</p>
                  <p className="text-xs text-gray-500 mb-3 line-clamp-2">{restaurant.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{restaurant.deliveryTime}</span>
                    <span className="text-orange-600 font-medium">{restaurant.priceRange}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;