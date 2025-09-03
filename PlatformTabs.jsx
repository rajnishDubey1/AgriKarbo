import React, { useState } from 'react';
import { CheckCircle, Sprout, Factory, Users } from 'lucide-react';

const PlatformTabs = () => {
  const [activeTab, setActiveTab] = useState('farmers');

  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Built for Every Stakeholder
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Tailored solutions for farmers, industries, and carbon credit buyers
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-2 flex space-x-2">
            {[
              { id: 'farmers', label: 'Farmers', icon: <Sprout className="w-5 h-5" /> },
              { id: 'industry', label: 'Industry', icon: <Factory className="w-5 h-5" /> },
              { id: 'buyers', label: 'Buyers', icon: <Users className="w-5 h-5" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-green-600 shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          {activeTab === 'farmers' && (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">For Farmers</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Soil Carbon Monitoring:</strong> Track carbon sequestration in real-time with IoT sensors
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Credit Generation:</strong> Automatically generate verified carbon credits from sustainable practices
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Health Tracking:</strong> Monitor air quality improvements and health co-benefits
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-blue-100 p-6 rounded-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">₹45,000</div>
                  <div className="text-gray-600 mb-4">Average monthly earnings</div>
                  <div className="text-sm text-gray-500">Based on 10-acre farm with sustainable practices</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'industry' && (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">For Industry</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Emission Compliance:</strong> Automated monitoring and reporting for regulatory compliance
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Emergency Alerts:</strong> Instant notifications for emission threshold breaches
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Offset Marketplace:</strong> Easy access to verified carbon credits for offsetting
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">30%</div>
                  <div className="text-gray-600 mb-4">Emission reduction achieved</div>
                  <div className="text-sm text-gray-500">Average across manufacturing partners</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'buyers' && (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">For Buyers</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Verified Credits:</strong> Access to authenticated carbon credits with full traceability
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Impact Tracking:</strong> Real-time monitoring of environmental and health impacts
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong>ESG Reporting:</strong> Comprehensive sustainability reporting for stakeholders
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">15,000+</div>
                  <div className="text-gray-600 mb-4">Verified credits available</div>
                  <div className="text-sm text-gray-500">From 500+ registered farmers</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PlatformTabs;