import React from 'react';
import { TrendingUp, BarChart3, Shield, MapPin, Activity } from 'lucide-react';

const Dashboard = () => {
  const carbonData = [
    { name: 'Jan', sequestered: 120, traded: 95 },
    { name: 'Feb', sequestered: 135, traded: 110 },
    { name: 'Mar', sequestered: 180, traded: 165 },
    { name: 'Apr', sequestered: 200, traded: 185 },
    { name: 'May', sequestered: 240, traded: 220 },
    { name: 'Jun', sequestered: 280, traded: 265 }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real-Time Carbon Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Monitor, track, and trade carbon credits with our comprehensive dashboard
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6">
            <div className="flex items-center justify-between text-white">
              <h3 className="text-xl font-semibold">Carbon Monitoring Dashboard</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-sm">Live</span>
                </div>
                <MapPin className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">Carbon Sequestered</h4>
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">280 tCO₂</div>
                <div className="text-sm text-gray-600">+12% from last month</div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">Credits Traded</h4>
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">265</div>
                <div className="text-sm text-gray-600">94% conversion rate</div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">Health Score</h4>
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">8.5/10</div>
                <div className="text-sm text-gray-600">Air quality improved</div>
              </div>
            </div>

            {/* Mini Chart */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Carbon Sequestration Trend</h4>
              <div className="h-32 flex items-end space-x-3">
                {carbonData.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg transition-all duration-500 hover:from-green-500 hover:to-green-300"
                      style={{ height: `${(data.sequestered / 300) * 100}%` }}
                    ></div>
                    <div className="text-xs text-gray-600 mt-2">{data.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;