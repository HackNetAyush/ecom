import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiPackage, FiTruck, FiCheck, FiMapPin, FiClock } from 'react-icons/fi';

const OrderTrackingPage = () => {
  const { orderId } = useParams();
  const [trackingData, setTrackingData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch tracking data
    const fetchTrackingData = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock tracking data
      setTrackingData({
        orderId: orderId || 'ORD-2024-002',
        trackingNumber: 'TRK987654321',
        status: 'in_transit',
        estimatedDelivery: new Date('2024-01-25'),
        carrier: 'FedEx',
        currentLocation: 'Chicago, IL',
        items: [
          {
            id: 3,
            name: 'Designer Leather Jacket',
            image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=200',
            quantity: 1
          }
        ],
        timeline: [
          {
            status: 'order_placed',
            title: 'Order Placed',
            description: 'Your order has been confirmed',
            timestamp: new Date('2024-01-20T10:00:00'),
            completed: true
          },
          {
            status: 'processing',
            title: 'Processing',
            description: 'Your order is being prepared',
            timestamp: new Date('2024-01-20T14:30:00'),
            completed: true
          },
          {
            status: 'shipped',
            title: 'Shipped',
            description: 'Your order has been shipped',
            timestamp: new Date('2024-01-21T09:15:00'),
            completed: true
          },
          {
            status: 'in_transit',
            title: 'In Transit',
            description: 'Your package is on its way',
            timestamp: new Date('2024-01-22T16:45:00'),
            completed: true,
            current: true
          },
          {
            status: 'out_for_delivery',
            title: 'Out for Delivery',
            description: 'Your package is out for delivery',
            timestamp: null,
            completed: false
          },
          {
            status: 'delivered',
            title: 'Delivered',
            description: 'Your package has been delivered',
            timestamp: null,
            completed: false
          }
        ]
      });
      setLoading(false);
    };

    fetchTrackingData();
  }, [orderId]);

  const getStatusIcon = (status, completed, current) => {
    if (completed) {
      return <FiCheck className="w-5 h-5 text-green-600" />;
    } else if (current) {
      return <FiClock className="w-5 h-5 text-blue-600" />;
    } else {
      switch (status) {
        case 'order_placed':
          return <FiPackage className="w-5 h-5 text-gray-400" />;
        case 'processing':
          return <FiPackage className="w-5 h-5 text-gray-400" />;
        case 'shipped':
          return <FiTruck className="w-5 h-5 text-gray-400" />;
        case 'in_transit':
          return <FiTruck className="w-5 h-5 text-gray-400" />;
        case 'out_for_delivery':
          return <FiTruck className="w-5 h-5 text-gray-400" />;
        case 'delivered':
          return <FiCheck className="w-5 h-5 text-gray-400" />;
        default:
          return <FiPackage className="w-5 h-5 text-gray-400" />;
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-8 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="space-y-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!trackingData) {
    return (
      <div className="min-h-screen pt-8 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Tracking Information Not Found</h1>
          <p className="text-gray-600 mb-6">
            We couldn't find tracking information for this order.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Track Your Order</h1>
          <p className="text-gray-600">
            Order #{trackingData.orderId} • Tracking #{trackingData.trackingNumber}
          </p>
        </motion.div>

        {/* Status Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow-sm p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                <FiTruck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Current Status</h3>
              <p className="text-blue-600 font-medium capitalize">
                {trackingData.status.replace('_', ' ')}
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                <FiMapPin className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Current Location</h3>
              <p className="text-gray-600">{trackingData.currentLocation}</p>
            </div>
            
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-3">
                <FiClock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Estimated Delivery</h3>
              <p className="text-gray-600">
                {trackingData.estimatedDelivery.toLocaleDateString()}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Order Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm p-6 mb-8"
        >
          <h3 className="font-semibold text-gray-900 mb-4">Order Items</h3>
          <div className="space-y-4">
            {trackingData.items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tracking Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <h3 className="font-semibold text-gray-900 mb-6">Tracking Timeline</h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-8">
              {trackingData.timeline.map((event, index) => (
                <motion.div
                  key={event.status}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative flex items-start space-x-4"
                >
                  {/* Timeline Dot */}
                  <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-4 ${
                    event.completed 
                      ? 'bg-green-100 border-green-200' 
                      : event.current
                      ? 'bg-blue-100 border-blue-200'
                      : 'bg-gray-100 border-gray-200'
                  }`}>
                    {getStatusIcon(event.status, event.completed, event.current)}
                  </div>
                  
                  {/* Event Details */}
                  <div className="flex-1 min-w-0 pb-8">
                    <div className="flex items-center justify-between">
                      <h4 className={`font-medium ${
                        event.completed || event.current ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {event.title}
                      </h4>
                      {event.timestamp && (
                        <span className="text-sm text-gray-500">
                          {event.timestamp.toLocaleDateString()} at {event.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      )}
                    </div>
                    <p className={`text-sm mt-1 ${
                      event.completed || event.current ? 'text-gray-600' : 'text-gray-400'
                    }`}>
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Carrier Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-gray-50 rounded-lg p-6"
        >
          <h3 className="font-semibold text-gray-900 mb-4">Carrier Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Carrier</p>
              <p className="font-medium text-gray-900">{trackingData.carrier}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Tracking Number</p>
              <p className="font-medium text-gray-900">{trackingData.trackingNumber}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderTrackingPage;