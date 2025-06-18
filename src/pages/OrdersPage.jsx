import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiPackage, FiTruck, FiCheck, FiX, FiEye, FiDownload } from 'react-icons/fi';
import { format } from 'date-fns';

const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Mock orders data
  const orders = [
    {
      id: 'ORD-2024-001',
      date: new Date('2024-01-15'),
      status: 'delivered',
      total: 299.99,
      items: [
        {
          id: 1,
          name: 'Premium Wireless Headphones',
          image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=200',
          price: 299.99,
          quantity: 1
        }
      ],
      tracking: 'TRK123456789',
      estimatedDelivery: new Date('2024-01-18')
    },
    {
      id: 'ORD-2024-002',
      date: new Date('2024-01-20'),
      status: 'shipped',
      total: 449.99,
      items: [
        {
          id: 3,
          name: 'Designer Leather Jacket',
          image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=200',
          price: 449.99,
          quantity: 1
        }
      ],
      tracking: 'TRK987654321',
      estimatedDelivery: new Date('2024-01-25')
    },
    {
      id: 'ORD-2024-003',
      date: new Date('2024-01-22'),
      status: 'processing',
      total: 129.99,
      items: [
        {
          id: 5,
          name: 'Professional Running Shoes',
          image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=200',
          price: 129.99,
          quantity: 1
        }
      ],
      estimatedDelivery: new Date('2024-01-28')
    },
    {
      id: 'ORD-2024-004',
      date: new Date('2024-01-10'),
      status: 'cancelled',
      total: 89.99,
      items: [
        {
          id: 6,
          name: 'Luxury Skincare Set',
          image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=200',
          price: 89.99,
          quantity: 1
        }
      ]
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'processing':
        return <FiPackage className="w-4 h-4" />;
      case 'shipped':
        return <FiTruck className="w-4 h-4" />;
      case 'delivered':
        return <FiCheck className="w-4 h-4" />;
      case 'cancelled':
        return <FiX className="w-4 h-4" />;
      default:
        return <FiPackage className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredOrders = orders.filter(order => {
    if (activeTab === 'all') return true;
    return order.status === activeTab;
  });

  const tabs = [
    { id: 'all', label: 'All Orders', count: orders.length },
    { id: 'processing', label: 'Processing', count: orders.filter(o => o.status === 'processing').length },
    { id: 'shipped', label: 'Shipped', count: orders.filter(o => o.status === 'shipped').length },
    { id: 'delivered', label: 'Delivered', count: orders.filter(o => o.status === 'delivered').length },
  ];

  return (
    <div className="min-h-screen pt-8 pb-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Orders</h1>
          <p className="text-gray-600">Track and manage your orders</p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow-sm mb-8"
        >
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                  {tab.count > 0 && (
                    <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                      activeTab === tab.id
                        ? 'bg-primary-100 text-primary-600'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </motion.div>

        {/* Orders List */}
        <div className="space-y-6">
          {filteredOrders.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12 bg-white rounded-lg shadow-sm"
            >
              <FiPackage className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
              <p className="text-gray-500 mb-6">
                {activeTab === 'all' 
                  ? "You haven't placed any orders yet." 
                  : `No ${activeTab} orders found.`
                }
              </p>
              <Link to="/products" className="btn-primary">
                Start Shopping
              </Link>
            </motion.div>
          ) : (
            filteredOrders.map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                {/* Order Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                      <div>
                        <h3 className="font-semibold text-gray-900">Order {order.id}</h3>
                        <p className="text-sm text-gray-500">
                          Placed on {format(order.date, 'MMM dd, yyyy')}
                        </p>
                      </div>
                      <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        <span className="capitalize">{order.status}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">${order.total.toFixed(2)}</p>
                        <p className="text-sm text-gray-500">
                          {order.items.length} item{order.items.length > 1 ? 's' : ''}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Link
                          to={`/order/${order.id}`}
                          className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                          title="View Details"
                        >
                          <FiEye className="w-4 h-4" />
                        </Link>
                        <button
                          className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                          title="Download Invoice"
                        >
                          <FiDownload className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-6">
                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 truncate">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Actions */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                      <div>
                        {order.status === 'shipped' && order.tracking && (
                          <p className="text-sm text-gray-600">
                            Tracking: <span className="font-medium">{order.tracking}</span>
                          </p>
                        )}
                        {order.estimatedDelivery && order.status !== 'delivered' && order.status !== 'cancelled' && (
                          <p className="text-sm text-gray-600">
                            Estimated delivery: {format(order.estimatedDelivery, 'MMM dd, yyyy')}
                          </p>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        {order.status === 'shipped' && (
                          <Link
                            to={`/track-order/${order.id}`}
                            className="btn-secondary text-sm"
                          >
                            Track Package
                          </Link>
                        )}
                        {order.status === 'delivered' && (
                          <button className="btn-secondary text-sm">
                            Write Review
                          </button>
                        )}
                        {order.status === 'processing' && (
                          <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                            Cancel Order
                          </button>
                        )}
                        <button className="btn-secondary text-sm">
                          Reorder
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;