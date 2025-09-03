import React, { useState, useEffect } from 'react';
import {
  Search,
  Filter,
  MapPin,
  TrendingUp,
  CheckCircle,
  ShoppingCart,
  Eye,
  Star,
  Leaf,
  Factory,
  Zap,
  BarChart3,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

// Main App component that contains all the page logic and UI
const App = () => {
  // Use a mock hook for authentication to keep the component self-contained
  const useAuth = () => ({
    openSignIn: (type) => {
      console.log(`Opening sign-in for: ${type}`);
    },
    isLoggedIn: false
  });
  const { openSignIn, isLoggedIn } = useAuth();
  
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [minPrice, setMinPrice] = useState('');
  const [minRating, setMinRating] = useState('');
  const [animatedStats, setAnimatedStats] = useState({
    credits: 0,
    price: 0,
    projects: 0,
    sellers: 0,
  });

  // Enhanced data with image URLs for better visual appeal
  const carbonCredits = [
    {
      id: 1,
      title: "Organic Rice Farm - Punjab",
      type: "agriculture",
      location: "Ludhiana, Punjab",
      credits: 45,
      price: 1250,
      verified: true,
      rating: 4.8,
      seller: "Rajesh Kumar",
      description: "Carbon credits from sustainable rice farming with methane reduction techniques",
      image: "https://images.unsplash.com/photo-1583043197630-8f20b8c8888c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    },
    {
      id: 2,
      title: "Solar Energy Project - Rajasthan",
      type: "renewable",
      location: "Jodhpur, Rajasthan",
      credits: 120,
      price: 1180,
      verified: true,
      rating: 4.9,
      seller: "Green Power Ltd",
      description: "Clean energy generation avoiding coal-based electricity",
      image: "https://images.unsplash.com/photo-1680355065203-43ad84bb6e69?q=80&w=1265&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "Biogas Plant - Karnataka",
      type: "waste",
      location: "Bangalore, Karnataka",
      credits: 75,
      price: 1320,
      verified: true,
      rating: 4.7,
      seller: "BioEnergy Solutions",
      description: "Methane capture from agricultural waste and organic matter",
      image: "https://images.unsplash.com/photo-1727412800488-4e56ee3e262e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      title: "Forestry Project - Kerala",
      type: "forestry",
      location: "Wayanad, Kerala",
      credits: 200,
      price: 1400,
      verified: true,
      rating: 4.9,
      seller: "Forest Conservation Trust",
      description: "Afforestation and reforestation with native species",
      image: "https://images.unsplash.com/photo-1672164416922-068856467d4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      title: "Industrial Efficiency - Gujarat",
      type: "industry",
      location: "Ahmedabad, Gujarat",
      credits: 90,
      price: 1150,
      verified: true,
      rating: 4.6,
      seller: "EcoTech Industries",
      description: "Energy efficiency improvements in textile manufacturing",
      image: "https://media.istockphoto.com/id/1265622184/photo/view-of-the-windmills-in-the-land-at-wankaner-gujarat-india.jpg?s=2048x2048&w=is&k=20&c=-nuY83JoIlyXJDAwJQeSHkJQZkBGL0sUIgYDHdlw6gg="
    },
    {
      id: 6,
      title: "Sustainable Agriculture - Maharashtra",
      type: "agriculture",
      location: "Pune, Maharashtra",
      credits: 65,
      price: 1280,
      verified: true,
      rating: 4.8,
      seller: "Organic Farmers Collective",
      description: "Organic farming practices with cover cropping and composting",
      image: "https://images.unsplash.com/photo-1549024449-d6968d2a435f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const marketStats = [
    { label: "Total Credits Available", value: "15,420 tCO₂", change: "+8.5%" },
    { label: "Average Price", value: "₹1,245/tCO₂", change: "+2.1%" },
    { label: "Active Projects", value: "485", change: "+12%" },
    { label: "Verified Sellers", value: "156", change: "+6%" }
  ];
  
  // Data for the graphical price trend chart
  const priceTrendData = [
    { name: 'Jan', price: 1100 },
    { name: 'Feb', price: 1150 },
    { name: 'Mar', price: 1200 },
    { name: 'Apr', price: 1250 },
    { name: 'May', price: 1245 },
    { name: 'Jun', price: 1260 },
  ];
  
  // Data for the graphical project type pie chart
  const projectTypeData = [
    { name: 'Agriculture', value: 245, color: '#4CAF50' },
    { name: 'Renewable Energy', value: 85, color: '#2196F3' },
    { name: 'Industrial', value: 65, color: '#9C27B0' },
    { name: 'Forestry', value: 115, color: '#009688' },
    { name: 'Waste Mgmt', value: 35, color: '#607D8B' },
  ];

  // Effect to animate numbers when component mounts
  useEffect(() => {
    const startAnimation = (targetValue, setter, duration = 1500) => {
      let start = null;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const count = Math.min(progress / duration, 1) * targetValue;
        setter(Math.round(count));
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    startAnimation(15420, (val) => setAnimatedStats(prev => ({ ...prev, credits: val })), 1500);
    startAnimation(1245, (val) => setAnimatedStats(prev => ({ ...prev, price: val })), 1500);
    startAnimation(485, (val) => setAnimatedStats(prev => ({ ...prev, projects: val })), 1500);
    startAnimation(156, (val) => setAnimatedStats(prev => ({ ...prev, sellers: val })), 1500);

  }, []);

  const getTypeIcon = (type) => {
    switch(type) {
      case 'agriculture': return <Leaf className="w-5 h-5 text-green-600" />;
      case 'industry': return <Factory className="w-5 h-5 text-blue-600" />;
      case 'renewable': return <Zap className="w-5 h-5 text-yellow-600" />;
      case 'forestry': return <Leaf className="w-5 h-5 text-emerald-600" />;
      case 'waste': return <Factory className="w-5 h-5 text-purple-600" />;
      default: return <CheckCircle className="w-5 h-5 text-gray-600" />;
    }
  };

  const getTypeBadge = (type) => {
    switch(type) {
      case 'agriculture': 
        return <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium capitalize">{type}</span>;
      case 'industry': 
        return <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium capitalize">{type}</span>;
      case 'renewable': 
        return <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium capitalize">Renewable</span>;
      case 'forestry': 
        return <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium capitalize">{type}</span>;
      case 'waste': 
        return <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium capitalize">Waste Mgmt</span>;
      default: 
        return <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium capitalize">{type}</span>;
    }
  };

  const filteredCredits = carbonCredits.filter(credit => {
    const matchesType = filterType === 'all' || credit.type === filterType;
    const matchesSearch = credit.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          credit.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = minPrice === '' || credit.price >= parseFloat(minPrice);
    const matchesRating = minRating === '' || credit.rating >= parseFloat(minRating);
    return matchesType && matchesSearch && matchesPrice && matchesRating;
  });

  return (
    <>
      <style>
        {`
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes zoomIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-fade-in-down {
            animation: fadeInDown 1s ease-out forwards;
          }
          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out forwards;
          }
          .animate-zoom-in {
            animation: zoomIn 0.8s ease-out forwards;
          }
          .animate-delay-100 { animation-delay: 0.1s; }
          .animate-delay-200 { animation-delay: 0.2s; }
          .animate-delay-300 { animation-delay: 0.3s; }
          .animate-delay-400 { animation-delay: 0.4s; }
          .animate-delay-500 { animation-delay: 0.5s; }
        `}
      </style>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-down">
                Carbon Credit Marketplace
              </h1>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
                Buy and sell verified carbon credits from Indian agriculture, renewable energy, and industrial projects
              </p>
            </div>

            {/* Market Stats */}
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <div className={`bg-white/10 backdrop-blur-md rounded-xl p-6 text-center animate-zoom-in animate-delay-300`}>
                <div className="text-2xl font-bold text-white mb-2">{animatedStats.credits.toLocaleString()} tCO₂</div>
                <div className="text-green-100 text-sm mb-1">Total Credits Available</div>
                <div className="text-green-300 text-xs">+8.5% this month</div>
              </div>
              <div className={`bg-white/10 backdrop-blur-md rounded-xl p-6 text-center animate-zoom-in animate-delay-400`}>
                <div className="text-2xl font-bold text-white mb-2">₹{animatedStats.price.toLocaleString()}/tCO₂</div>
                <div className="text-green-100 text-sm mb-1">Average Price</div>
                <div className="text-green-300 text-xs">+2.1% this month</div>
              </div>
              <div className={`bg-white/10 backdrop-blur-md rounded-xl p-6 text-center animate-zoom-in animate-delay-500`}>
                <div className="text-2xl font-bold text-white mb-2">{animatedStats.projects}</div>
                <div className="text-green-100 text-sm mb-1">Active Projects</div>
                <div className="text-green-300 text-xs">+12% this month</div>
              </div>
              <div className={`bg-white/10 backdrop-blur-md rounded-xl p-6 text-center animate-zoom-in animate-delay-600`}>
                <div className="text-2xl font-bold text-white mb-2">{animatedStats.sellers}</div>
                <div className="text-green-100 text-sm mb-1">Verified Sellers</div>
                <div className="text-green-300 text-xs">+6% this month</div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    placeholder="Search projects or locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <select 
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                >
                  <option value="all">All Types</option>
                  <option value="agriculture">Agriculture</option>
                  <option value="renewable">Renewable Energy</option>
                  <option value="forestry">Forestry</option>
                  <option value="industry">Industrial</option>
                  <option value="waste">Waste Management</option>
                </select>

                <button
                  onClick={() => setShowMoreFilters(!showMoreFilters)}
                  className="flex items-center px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Filter className="w-5 h-5 mr-2" />
                  More Filters
                  {showMoreFilters ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
                </button>
              </div>
            </div>

            {showMoreFilters && (
              <div className="mt-6 p-6 rounded-lg bg-gray-50 border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
                <div>
                  <label htmlFor="min-price" className="block text-sm font-medium text-gray-700 mb-2">Minimum Price (₹)</label>
                  <input
                    id="min-price"
                    type="number"
                    placeholder="e.g., 1000"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="min-rating" className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating (1-5)</label>
                  <input
                    id="min-rating"
                    type="number"
                    placeholder="e.g., 4.5"
                    value={minRating}
                    onChange={(e) => setMinRating(e.target.value)}
                    step="0.1"
                    min="0"
                    max="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Carbon Credits Grid */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCredits.map((credit) => (
                <div key={credit.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden group animate-fade-in-up">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={credit.image}
                      alt={credit.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      // Add an onerror handler for robust image loading
                      onError={(e) => e.target.src = "https://placehold.co/600x400/E5E7EB/A1A1AA?text=Image+Not+Found"}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-brightness-75 transition-all"></div>
                    <div className="absolute top-4 left-4">
                      {getTypeBadge(credit.type)}
                    </div>
                    {credit.verified && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Verified
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                        {credit.title}
                      </h3>
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm ml-1">{credit.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{credit.location}</span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {credit.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-green-600">₹{credit.price.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">per tCO₂</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-gray-900">{credit.credits} tCO₂</div>
                        <div className="text-sm text-gray-600">available</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-sm text-gray-600">by {credit.seller}</span>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-600 hover:text-green-600 transition-colors">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => !isLoggedIn && openSignIn('login')}
                          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredCredits.length === 0 && (
              <div className="text-center py-12 animate-fade-in-up">
                <Search className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No credits found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* Market Insights with Graphical Chart */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Market Insights
              </h2>
              <p className="text-xl text-gray-600">
                Real-time market data and trends at a glance
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 animate-zoom-in">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3 text-green-600" />
                  Carbon Credit Price Trends
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={priceTrendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="price" stroke="#16a34a" strokeWidth={3} dot={{ strokeWidth: 2 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 animate-zoom-in animate-delay-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3 text-blue-600" />
                  Featured Projects by Type
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={projectTypeData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      label
                    >
                      {projectTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How Trading Works
              </h2>
              <p className="text-xl text-gray-600">
                Simple, secure, and transparent carbon credit transactions
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  <Search className="w-8 h-8" />
                </div>
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Browse & Select</h3>
                <p className="text-gray-600">Search verified carbon credits by type, location, and price</p>
              </div>
              <div className="text-center animate-fade-in-up animate-delay-200">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  <ShoppingCart className="w-8 h-8" />
                </div>
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Verify & Purchase</h3>
                <p className="text-gray-600">Review project details, certifications, and complete secure payment</p>
              </div>
              <div className="text-center animate-fade-in-up animate-delay-300">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Track Impact</h3>
                <p className="text-gray-600">Monitor real-time impact and receive comprehensive reporting</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 animate-fade-in-up animate-delay-400">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Start Trading Carbon Credits Today
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join our marketplace and make a positive impact on the environment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => openSignIn('register')}
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all"
              >
                Join Marketplace
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
