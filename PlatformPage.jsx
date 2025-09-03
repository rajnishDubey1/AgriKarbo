import React, { useState } from 'react';
import { 
  Wifi, 
  Bell, 
  BarChart3, 
  TrendingUp, 
  Shield, 
  Smartphone, 
  Globe, 
  Zap,
  CheckCircle,
  ArrowRight,
  Play
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const PlatformPage = () => {
  const { openSignIn } = useAuth();
  const [activeDemo, setActiveDemo] = useState('monitoring');

  const platformFeatures = [
    {
      icon: <Wifi className="w-12 h-12" />,
      title: "IoT Sensor Network",
      description: "Deploy smart sensors across farms and industrial sites for continuous carbon monitoring",
      features: ["Soil carbon sensors", "Air quality monitors", "Emission detectors", "Weather stations"]
    },
    {
      icon: <Bell className="w-12 h-12" />,
      title: "Alert & Emergency System",
      description: "Real-time notifications and emergency response for environmental incidents",
      features: ["SMS/Email alerts", "Mobile push notifications", "Emergency protocols", "Compliance reporting"]
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Analytics Dashboard",
      description: "Comprehensive data visualization and insights for informed decision making",
      features: ["Real-time charts", "Predictive analytics", "Custom reports", "Export capabilities"]
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Trading Engine",
      description: "Seamless carbon credit marketplace with automated trading capabilities",
      features: ["Instant transactions", "Price optimization", "Smart contracts", "Automated settlements"]
    }
  ];

  const techSpecs = [
    {
      category: "Monitoring",
      specs: [
        "Real-time data collection (1-minute intervals)",
        "Multi-sensor integration (CO₂, CH₄, N₂O)",
        "GPS-enabled location tracking",
        "Weather correlation analysis"
      ]
    },
    {
      category: "Connectivity",
      specs: [
        "4G/5G cellular connectivity",
        "LoRaWAN for remote areas",
        "Edge computing capabilities",
        "Offline data storage & sync"
      ]
    },
    {
      category: "Security",
      specs: [
        "End-to-end encryption",
        "Blockchain verification",
        "Multi-factor authentication",
        "Compliance with data protection laws"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AgriKarbo Platform
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Complete IoT-enabled carbon monitoring and trading ecosystem designed for Indian agriculture and industry
            </p>
            <button 
              onClick={() => openSignIn('register')}
              className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Platform Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools for carbon monitoring, trading, and compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 text-green-600">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Demo */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See Platform in Action
            </h2>
            <p className="text-xl text-gray-600">
              Interactive demonstration of key platform features
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-xl p-2 shadow-lg flex space-x-2">
              {[
                { id: 'monitoring', label: 'Monitoring', icon: <Wifi className="w-5 h-5" /> },
                { id: 'alerts', label: 'Alerts', icon: <Bell className="w-5 h-5" /> },
                { id: 'trading', label: 'Trading', icon: <TrendingUp className="w-5 h-5" /> }
              ].map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setActiveDemo(demo.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                    activeDemo === demo.id
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {demo.icon}
                  <span className="ml-2">{demo.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {activeDemo === 'monitoring' && (
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Real-Time Carbon Monitoring</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-50 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-medium">Soil Carbon</span>
                      <Zap className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">45.2 tCO₂</div>
                    <div className="text-sm text-gray-600">Sequestered this month</div>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-medium">Air Quality</span>
                      <Globe className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">Good</div>
                    <div className="text-sm text-gray-600">AQI: 45 (Excellent)</div>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-medium">Sensors Active</span>
                      <Smartphone className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">24/24</div>
                    <div className="text-sm text-gray-600">100% operational</div>
                  </div>
                </div>
              </div>
            )}

            {activeDemo === 'alerts' && (
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Emergency Alert System</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-green-50 border-l-4 border-green-600 rounded-r-lg">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-4" />
                    <div>
                      <div className="font-medium text-green-800">All Systems Normal</div>
                      <div className="text-sm text-green-600">Last checked: 2 minutes ago</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                    <Bell className="w-6 h-6 text-yellow-500 mr-4" />
                    <div>
                      <div className="font-medium text-yellow-800">Maintenance Scheduled</div>
                      <div className="text-sm text-yellow-600">Sensor calibration at Farm #23 - Tomorrow 10:00 AM</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                    <TrendingUp className="w-6 h-6 text-blue-500 mr-4" />
                    <div>
                      <div className="font-medium text-blue-800">Carbon Credit Ready</div>
                      <div className="text-sm text-blue-600">15 new credits verified and ready for trading</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeDemo === 'trading' && (
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Carbon Credit Trading</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Available Credits</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium">Farm Carbon - Punjab</div>
                          <div className="text-sm text-gray-600">Verified • 25 tCO₂</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-600">₹1,250/tCO₂</div>
                          <button className="text-sm text-blue-600 hover:text-blue-700">Buy Now</button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium">Biogas Project - Gujarat</div>
                          <div className="text-sm text-gray-600">Verified • 50 tCO₂</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-600">₹1,180/tCO₂</div>
                          <button className="text-sm text-blue-600 hover:text-blue-700">Buy Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Market Statistics</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Volume Today</span>
                        <span className="font-bold">1,245 tCO₂</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Average Price</span>
                        <span className="font-bold text-green-600">₹1,215/tCO₂</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Active Traders</span>
                        <span className="font-bold">342</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Success Rate</span>
                        <span className="font-bold text-blue-600">98.5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600">
              Built with cutting-edge technology for reliability and scale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techSpecs.map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{spec.category}</h3>
                <ul className="space-y-3">
                  {spec.specs.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Easy Integration
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to connect with existing systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">REST API</h3>
              <p className="text-sm text-gray-600">Standard HTTP endpoints</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Webhooks</h3>
              <p className="text-sm text-gray-600">Real-time data push</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Mobile SDK</h3>
              <p className="text-sm text-gray-600">Native app integration</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">CSV Export</h3>
              <p className="text-sm text-gray-600">Bulk data download</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Deploy AgriKarbo?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get started with our platform today and transform your carbon management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => openSignIn('register')}
              className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all"
            >
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlatformPage;