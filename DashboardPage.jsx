import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { BarChart3, Users, Leaf, TrendingUp, DollarSign, MapPin, Calendar, Bell, Settings, User, LogOut, Menu, X, Award, Activity, ShoppingCart, Factory, Sprout } from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [activeUser, setActiveUser] = useState(user?.userType || 'farmer');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifications] = useState([
    { id: 1, title: 'Carbon credits ready for sale', type: 'success', time: '2 hours ago' },
    { id: 2, title: 'New marketplace listing', type: 'info', time: '4 hours ago' },
    { id: 3, title: 'Payment received', type: 'success', time: '1 day ago' }
  ]);

  // Update activeUser when user data changes
  useEffect(() => {
    if (user?.userType) {
      setActiveUser(user.userType);
    }
  }, [user]);

  // Sample data for different user types
  const dashboardData = {
    farmer: {
      stats: [
        { title: 'Carbon Credits Earned', value: '2,847', icon: Leaf, color: 'text-green-600', bgColor: 'bg-green-50' },
        { title: 'Total Revenue', value: '$12,450', icon: DollarSign, color: 'text-blue-600', bgColor: 'bg-blue-50' },
        { title: 'Active Projects', value: '8', icon: Activity, color: 'text-purple-600', bgColor: 'bg-purple-50' },
        { title: 'Land Area (Acres)', value: '124', icon: MapPin, color: 'text-orange-600', bgColor: 'bg-orange-50' }
      ],
      projects: [
        { name: 'Sustainable Rice Farming', credits: 847, status: 'Active', progress: 75 },
        { name: 'Agroforestry Initiative', credits: 1200, status: 'Completed', progress: 100 },
        { name: 'Soil Carbon Enhancement', credits: 800, status: 'Active', progress: 60 }
      ]
    },
    industry: {
      stats: [
        { title: 'Carbon Footprint (tCO2)', value: '15,230', icon: Factory, color: 'text-red-600', bgColor: 'bg-red-50' },
        { title: 'Credits Purchased', value: '8,945', icon: ShoppingCart, color: 'text-green-600', bgColor: 'bg-green-50' },
        { title: 'Offset Percentage', value: '67%', icon: TrendingUp, color: 'text-blue-600', bgColor: 'bg-blue-50' },
        { title: 'Suppliers', value: '42', icon: Users, color: 'text-purple-600', bgColor: 'bg-purple-50' }
      ],
      projects: [
        { name: 'Manufacturing Offset Program', credits: 3200, status: 'Active', progress: 80 },
        { name: 'Supply Chain Neutrality', credits: 2800, status: 'Active', progress: 45 },
        { name: 'Renewable Energy Transition', credits: 2945, status: 'Completed', progress: 100 }
      ]
    },
    buyer: {
      stats: [
        { title: 'Credits Portfolio', value: '25,847', icon: Award, color: 'text-green-600', bgColor: 'bg-green-50' },
        { title: 'Investment Value', value: '$284,560', icon: DollarSign, color: 'text-blue-600', bgColor: 'bg-blue-50' },
        { title: 'Active Investments', value: '18', icon: BarChart3, color: 'text-purple-600', bgColor: 'bg-purple-50' },
        { title: 'ROI This Year', value: '23.4%', icon: TrendingUp, color: 'text-orange-600', bgColor: 'bg-orange-50' }
      ],
      projects: [
        { name: 'Premium Forest Credits', credits: 8500, status: 'Active', progress: 90 },
        { name: 'Agricultural Carbon Pool', credits: 12000, status: 'Active', progress: 70 },
        { name: 'Renewable Energy Credits', credits: 5347, status: 'Completed', progress: 100 }
      ]
    }
  };

  const userTypes = [
    { key: 'farmer', label: 'Farmer', icon: Sprout, color: 'bg-green-600' },
    { key: 'industry', label: 'Industry', icon: Factory, color: 'bg-blue-600' },
    { key: 'buyer', label: 'Credit Buyer', icon: Award, color: 'bg-purple-600' }
  ];

  const currentData = dashboardData[activeUser];

  const handleLogout = () => {
    logout();
  };

  const Sidebar = () => (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
      <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-agri-gradient rounded-lg flex items-center justify-center">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">AgriKarbo</span>
        </div>
        <button 
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="mt-8 px-4">
        <div className="space-y-2">
          <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Dashboard
          </div>
          <a href="#" className="flex items-center px-3 py-2 text-gray-700 bg-green-50 rounded-lg">
            <BarChart3 className="w-5 h-5 mr-3" />
            Overview
          </a>
          <a href="#" className="flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-50">
            <Activity className="w-5 h-5 mr-3" />
            Projects
          </a>
          <a href="#" className="flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-50">
            <ShoppingCart className="w-5 h-5 mr-3" />
            Marketplace
          </a>
          <a href="#" className="flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-50">
            <DollarSign className="w-5 h-5 mr-3" />
            Transactions
          </a>
        </div>

        <div className="mt-8 space-y-2">
          <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Account
          </div>
          <a href="#" className="flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-50">
            <User className="w-5 h-5 mr-3" />
            Profile
          </a>
          <a href="#" className="flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-50">
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </a>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </button>
        </div>
      </nav>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
                >
                  <Menu className="w-5 h-5" />
                </button>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                  <p className="text-sm text-gray-500">Welcome back, {user?.name || 'User'}! Here's your carbon impact overview.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {/* User Type Switcher */}
                <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                  {userTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.key}
                        onClick={() => setActiveUser(type.key)}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          activeUser === type.key
                            ? `${type.color} text-white`
                            : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="hidden sm:inline">{type.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Notifications */}
                <div className="relative">
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>
                </div>

                {/* Profile */}
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="hidden sm:block">
                    <div className="text-sm font-medium text-gray-900">{user?.name || 'User'}</div>
                    <div className="text-xs text-gray-500 capitalize">{activeUser}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {currentData.stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Projects Overview */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {activeUser === 'farmer' ? 'My Projects' : activeUser === 'industry' ? 'Offset Programs' : 'Investment Portfolio'}
                  </h3>
                  <button className="text-sm text-green-600 hover:text-green-700 font-medium">
                    View All
                  </button>
                </div>

                <div className="space-y-4">
                  {currentData.projects.map((project, index) => (
                    <div key={index} className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-900">{project.name}</h4>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          project.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">{project.credits.toLocaleString()} Credits</span>
                        <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Content */}
            <div className="space-y-6">
              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        notification.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{notification.title}</p>
                        <p className="text-xs text-gray-500">{notification.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  {activeUser === 'farmer' && (
                    <>
                      <button className="w-full text-left p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                        <div className="text-sm font-medium text-green-800">Start New Project</div>
                        <div className="text-xs text-green-600">Begin carbon sequestration</div>
                      </button>
                      <button className="w-full text-left p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                        <div className="text-sm font-medium text-blue-800">List Credits</div>
                        <div className="text-xs text-blue-600">Sell on marketplace</div>
                      </button>
                    </>
                  )}
                  {activeUser === 'industry' && (
                    <>
                      <button className="w-full text-left p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                        <div className="text-sm font-medium text-green-800">Buy Credits</div>
                        <div className="text-xs text-green-600">Offset emissions</div>
                      </button>
                      <button className="w-full text-left p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
                        <div className="text-sm font-medium text-purple-800">View Report</div>
                        <div className="text-xs text-purple-600">ESG compliance</div>
                      </button>
                    </>
                  )}
                  {activeUser === 'buyer' && (
                    <>
                      <button className="w-full text-left p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                        <div className="text-sm font-medium text-blue-800">Browse Marketplace</div>
                        <div className="text-xs text-blue-600">Find opportunities</div>
                      </button>
                      <button className="w-full text-left p-3 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors">
                        <div className="text-sm font-medium text-orange-800">Portfolio Analytics</div>
                        <div className="text-xs text-orange-600">Track performance</div>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;