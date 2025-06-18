import { useState } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { FiBell, FiMoon, FiSun, FiGlobe, FiShield, FiCreditCard, FiTrash2 } from 'react-icons/fi';
import useStore from '../store/useStore';
import toast from 'react-hot-toast';

const SettingsPage = () => {
  const { isDarkMode, toggleDarkMode, user } = useStore();
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
    marketing: true,
  });
  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    activityVisible: false,
    purchaseHistory: false,
  });

  const handleNotificationChange = (type) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
    toast.success('Notification preferences updated');
  };

  const handlePrivacyChange = (type) => {
    setPrivacy(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
    toast.success('Privacy settings updated');
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      toast.error('Account deletion is not available in demo mode');
    }
  };

  const sections = [
    {
      id: 'notifications',
      title: 'Notifications',
      icon: FiBell,
      description: 'Manage how you receive notifications'
    },
    {
      id: 'appearance',
      title: 'Appearance',
      icon: isDarkMode ? FiMoon : FiSun,
      description: 'Customize your visual experience'
    },
    {
      id: 'privacy',
      title: 'Privacy',
      icon: FiShield,
      description: 'Control your privacy and data settings'
    },
    {
      id: 'language',
      title: 'Language & Region',
      icon: FiGlobe,
      description: 'Set your language and regional preferences'
    },
    {
      id: 'payment',
      title: 'Payment Methods',
      icon: FiCreditCard,
      description: 'Manage your saved payment methods'
    },
    {
      id: 'account',
      title: 'Account Management',
      icon: FiTrash2,
      description: 'Account deletion and data export'
    }
  ];

  const [activeSection, setActiveSection] = useState('notifications');

  return (
    <div className="min-h-screen pt-8 pb-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account preferences and settings</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-lg shadow-sm p-4">
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <section.icon className="w-5 h-5" />
                    <span className="font-medium">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-lg shadow-sm">
              {/* Section Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  {sections.find(s => s.id === activeSection)?.icon && (
                    React.createElement(
                      sections.find(s => s.id === activeSection).icon,
                      { className: "w-6 h-6 text-primary-600" }
                    )
                  )}
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {sections.find(s => s.id === activeSection)?.title}
                    </h2>
                    <p className="text-gray-600 text-sm">
                      {sections.find(s => s.id === activeSection)?.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Section Content */}
              <div className="p-6">
                {activeSection === 'notifications' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-4">Email Notifications</h3>
                      <div className="space-y-3">
                        {[
                          { key: 'email', label: 'Order updates and confirmations', description: 'Get notified about your order status' },
                          { key: 'marketing', label: 'Marketing emails', description: 'Receive promotional offers and news' },
                        ].map((item) => (
                          <div key={item.key} className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-gray-900">{item.label}</p>
                              <p className="text-sm text-gray-500">{item.description}</p>
                            </div>
                            <button
                              onClick={() => handleNotificationChange(item.key)}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                notifications[item.key] ? 'bg-primary-600' : 'bg-gray-200'
                              }`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  notifications[item.key] ? 'translate-x-6' : 'translate-x-1'
                                }`}
                              />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-4">Push Notifications</h3>
                      <div className="space-y-3">
                        {[
                          { key: 'push', label: 'Browser notifications', description: 'Get notified in your browser' },
                          { key: 'sms', label: 'SMS notifications', description: 'Receive text messages for important updates' },
                        ].map((item) => (
                          <div key={item.key} className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-gray-900">{item.label}</p>
                              <p className="text-sm text-gray-500">{item.description}</p>
                            </div>
                            <button
                              onClick={() => handleNotificationChange(item.key)}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                notifications[item.key] ? 'bg-primary-600' : 'bg-gray-200'
                              }`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  notifications[item.key] ? 'translate-x-6' : 'translate-x-1'
                                }`}
                              />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'appearance' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">Dark Mode</p>
                        <p className="text-sm text-gray-500">Switch between light and dark themes</p>
                      </div>
                      <button
                        onClick={toggleDarkMode}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          isDarkMode ? 'bg-primary-600' : 'bg-gray-200'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            isDarkMode ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                )}

                {activeSection === 'privacy' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-4">Profile Visibility</h3>
                      <div className="space-y-3">
                        {[
                          { key: 'profileVisible', label: 'Public profile', description: 'Make your profile visible to other users' },
                          { key: 'activityVisible', label: 'Activity status', description: 'Show when you were last active' },
                          { key: 'purchaseHistory', label: 'Purchase history', description: 'Allow others to see your purchase history' },
                        ].map((item) => (
                          <div key={item.key} className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-gray-900">{item.label}</p>
                              <p className="text-sm text-gray-500">{item.description}</p>
                            </div>
                            <button
                              onClick={() => handlePrivacyChange(item.key)}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                privacy[item.key] ? 'bg-primary-600' : 'bg-gray-200'
                              }`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  privacy[item.key] ? 'translate-x-6' : 'translate-x-1'
                                }`}
                              />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'language' && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Language
                      </label>
                      <select className="input-field max-w-xs">
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                        <option value="de">Deutsch</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Currency
                      </label>
                      <select className="input-field max-w-xs">
                        <option value="usd">USD ($)</option>
                        <option value="eur">EUR (€)</option>
                        <option value="gbp">GBP (£)</option>
                        <option value="cad">CAD ($)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Time Zone
                      </label>
                      <select className="input-field max-w-xs">
                        <option value="est">Eastern Time (EST)</option>
                        <option value="cst">Central Time (CST)</option>
                        <option value="mst">Mountain Time (MST)</option>
                        <option value="pst">Pacific Time (PST)</option>
                      </select>
                    </div>
                  </div>
                )}

                {activeSection === 'payment' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-4">Saved Payment Methods</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                              VISA
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
                              <p className="text-sm text-gray-500">Expires 12/25</p>
                            </div>
                          </div>
                          <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                            Remove
                          </button>
                        </div>
                      </div>
                      <button className="btn-secondary mt-4">
                        Add Payment Method
                      </button>
                    </div>
                  </div>
                )}

                {activeSection === 'account' && (
                  <div className="space-y-6">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h3 className="font-medium text-yellow-800 mb-2">Export Your Data</h3>
                      <p className="text-sm text-yellow-700 mb-3">
                        Download a copy of your account data including orders, preferences, and profile information.
                      </p>
                      <button className="btn-secondary text-sm">
                        Request Data Export
                      </button>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h3 className="font-medium text-red-800 mb-2">Delete Account</h3>
                      <p className="text-sm text-red-700 mb-3">
                        Permanently delete your account and all associated data. This action cannot be undone.
                      </p>
                      <button
                        onClick={handleDeleteAccount}
                        className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors"
                      >
                        Delete Account
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;