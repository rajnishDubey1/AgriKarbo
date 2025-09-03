import React from 'react';
import { Globe, ArrowRight, Activity, CheckCircle, Shield } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Hero = () => {
  const { openSignIn } = useAuth();

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-flex items-center bg-green-100 text-green-800 text-sm px-4 py-2 rounded-full mb-8">
            <Globe className="w-4 h-4 mr-2" />
            Empowering Indian Agriculture & Industry
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Bridging Agriculture,
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {" "}Industry & Health
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Real-time carbon monitoring with IoT sensors, emergency alerts, and seamless marketplace trading 
            for sustainable farming and industrial operations across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => openSignIn('register')}
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Start Monitoring
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:shadow-lg transition-all">
              View Marketplace
            </button>
          </div>
        </div>
      </div>

      {/* Floating Cards */}
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-white rounded-2xl shadow-xl p-6 w-64 hidden lg:block">
        <div className="flex items-center mb-3">
          <Activity className="w-6 h-6 text-green-600 mr-3" />
          <span className="font-semibold">Live Carbon Data</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Sequestered Today</span>
            <span className="font-bold text-green-600">+45.2 tCO₂</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Credits Available</span>
            <span className="font-bold text-blue-600">1,240</span>
          </div>
        </div>
      </div>

      <div className="absolute top-1/3 right-10 transform -translate-y-1/2 bg-white rounded-2xl shadow-xl p-6 w-64 hidden lg:block">
        <div className="flex items-center mb-3">
          <Shield className="w-6 h-6 text-blue-600 mr-3" />
          <span className="font-semibold">Alert Status</span>
        </div>
        <div className="flex items-center text-green-600">
          <CheckCircle className="w-5 h-5 mr-2" />
          <span>All Systems Normal</span>
        </div>
        <div className="mt-3 text-sm text-gray-600">
          Last checked: 2 minutes ago
        </div>
      </div>
    </section>
  );
};

export default Hero;