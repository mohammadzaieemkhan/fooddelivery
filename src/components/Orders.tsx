import React from 'react';
import { ArrowLeft, Clock, CheckCircle, Truck } from 'lucide-react';
import { Order } from '../types';

interface OrdersProps {
  onBack: () => void;
}

const Orders: React.FC<OrdersProps> = ({ onBack }) => {
  const mockOrders: Order[] = [
    {
      id: 'ORD001',
      restaurantName: 'Spice Garden',
      items: [
        { id: 1, name: 'Butter Chicken', description: 'Creamy tomato-based chicken curry', price: 320, image: '', category: 'main', isVeg: false },
        { id: 2, name: 'Dal Makhani', description: 'Rich and creamy black lentil curry', price: 280, image: '', category: 'main', isVeg: true }
      ],
      total: 600,
      status: 'delivered',
      orderTime: '2024-01-15 19:30'
    },
    {
      id: 'ORD002',
      restaurantName: 'Chennai Express',
      items: [
        { id: 4, name: 'Masala Dosa', description: 'Crispy crepe with spiced potato filling', price: 120, image: '', category: 'main', isVeg: true },
        { id: 6, name: 'Filter Coffee', description: 'Traditional South Indian coffee', price: 40, image: '', category: 'beverage', isVeg: true }
      ],
      total: 160,
      status: 'on-the-way',
      orderTime: '2024-01-15 12:15'
    },
    {
      id: 'ORD003',
      restaurantName: 'Mumbai Street Food',
      items: [
        { id: 9, name: 'Pav Bhaji', description: 'Spiced vegetable curry with bread rolls', price: 150, image: '', category: 'main', isVeg: true }
      ],
      total: 150,
      status: 'preparing',
      orderTime: '2024-01-15 11:00'
    }
  ];

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'preparing':
        return <Clock className="w-5 h-5 text-orange-500" />;
      case 'on-the-way':
        return <Truck className="w-5 h-5 text-blue-500" />;
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
  };

  const getStatusText = (status: Order['status']) => {
    switch (status) {
      case 'preparing':
        return 'Being Prepared';
      case 'on-the-way':
        return 'On the Way';
      case 'delivered':
        return 'Delivered';
    }
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'preparing':
        return 'text-orange-600 bg-orange-100';
      case 'on-the-way':
        return 'text-blue-600 bg-blue-100';
      case 'delivered':
        return 'text-green-600 bg-green-100';
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
            <h1 className="text-lg font-semibold text-gray-800">Your Orders</h1>
          </div>
        </div>
      </header>

      <div className="px-4 py-6">
        {mockOrders.length > 0 ? (
          <div className="space-y-4">
            {mockOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
              >
                {/* Order Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{order.restaurantName}</h3>
                    <p className="text-sm text-gray-600">Order #{order.id}</p>
                    <p className="text-xs text-gray-500">{new Date(order.orderTime).toLocaleString()}</p>
                  </div>
                  <div className={`flex items-center space-x-2 px-3 py-1 rounded-full ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    <span className="text-sm font-medium">{getStatusText(order.status)}</span>
                  </div>
                </div>

                {/* Order Items */}
                <div className="space-y-2 mb-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full border-2 ${
                          item.isVeg ? 'border-green-500 bg-green-500' : 'border-red-500 bg-red-500'
                        }`} />
                        <span className="text-gray-800">{item.name}</span>
                      </div>
                      <span className="text-gray-600 font-medium">₹{item.price}</span>
                    </div>
                  ))}
                </div>

                {/* Order Total */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <span className="text-lg font-semibold text-gray-800">Total Paid</span>
                  <span className="text-lg font-bold text-green-600">₹{order.total}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 mt-4">
                  {order.status !== 'delivered' && (
                    <button className="flex-1 bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white py-2 px-4 rounded-lg font-medium transition duration-300">
                      Track Order
                    </button>
                  )}
                  <button className="flex-1 border border-gray-300 hover:border-orange-400 text-gray-700 py-2 px-4 rounded-lg font-medium transition duration-300">
                    {order.status === 'delivered' ? 'Reorder' : 'View Details'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">No Orders Yet</h3>
            <p className="text-gray-600 mb-6">When you place your first order, it will appear here</p>
            <button
              onClick={onBack}
              className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 transform hover:scale-[1.02]"
            >
              Start Ordering
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;