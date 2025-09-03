import React from 'react';
import { Wifi, Bell, BarChart3, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "IoT Emission Monitoring",
      description: "Real-time carbon tracking with smart sensors across agricultural and industrial operations"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Emergency Alert System",
      description: "Instant notifications for emission spikes and environmental emergencies"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Health Co-Benefits",
      description: "Track air quality improvements and health impact metrics"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Carbon Marketplace",
      description: "Seamless trading platform connecting farmers with carbon credit buyers"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Carbon Ecosystem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From IoT monitoring to marketplace trading, everything you need for carbon management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="text-green-600 group-hover:text-blue-600 transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;