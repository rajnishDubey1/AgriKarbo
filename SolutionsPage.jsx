import React, { useState } from 'react';
import { 
  Sprout, 
  Factory, 
  Users, 
  Leaf, 
  Shield, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Target,
  Award,
  Globe,
  Zap
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const SolutionsPage = () => {
  const { openSignIn } = useAuth();
  const [activeSolution, setActiveSolution] = useState('agriculture');

  const solutions = {
    agriculture: {
      title: "Agricultural Solutions",
      subtitle: "Empowering farmers with carbon-positive practices",
      icon: <Sprout className="w-12 h-12" />,
      color: "green",
      features: [
        {
          title: "Precision Carbon Farming",
          description: "AI-powered recommendations for carbon sequestration through soil management, crop rotation, and agroforestry",
          benefits: ["Increase soil carbon by 25%", "Boost crop yields by 15%", "Reduce input costs by 20%"]
        },
        {
          title: "Smart Irrigation & Monitoring",
          description: "IoT sensors for optimal water usage and carbon footprint reduction in irrigation systems",
          benefits: ["Save 30% water usage", "Reduce energy consumption", "Real-time soil monitoring"]
        },
        {
          title: "Organic Certification Support",
          description: "Automated documentation and verification for organic farming certifications and carbon credits",
          benefits: ["Streamlined certification", "Higher premium prices", "Verified carbon credits"]
        }
      ],
      caseStudy: {
        title: "Success Story: Punjab Wheat Farm",
        stats: [
          { label: "Carbon Sequestered", value: "120 tCO₂/year" },
          { label: "Additional Income", value: "₹1.5L/year" },
          { label: "Yield Increase", value: "18%" }
        ]
      }
    },
    industry: {
      title: "Industrial Solutions",
      subtitle: "Helping industries achieve carbon neutrality",
      icon: <Factory className="w-12 h-12" />,
      color: "blue",
      features: [
        {
          title: "Emission Monitoring & Control",
          description: "Real-time tracking of industrial emissions with automated compliance reporting and reduction strategies",
          benefits: ["99.9% accuracy monitoring", "Automated compliance reports", "Reduce penalties by 100%"]
        },
        {
          title: "Carbon Offset Marketplace",
          description: "Direct access to verified carbon credits from local farmers and renewable energy projects",
          benefits: ["Local sourcing priority", "Transparent pricing", "Instant transactions"]
        },
        {
          title: "Sustainability Reporting",
          description: "Comprehensive ESG reporting with real-time data integration for stakeholder transparency",
          benefits: ["Automated ESG reports", "Stakeholder dashboards", "Compliance tracking"]
        }
      ],
      caseStudy: {
        title: "Success Story: Maharashtra Steel Plant",
        stats: [
          { label: "Emission Reduction", value: "35%" },
          { label: "Compliance Score", value: "100%" },
          { label: "Cost Savings", value: "₹2.5Cr/year" }
        ]
      }
    },
    buyers: {
      title: "Carbon Credit Solutions",
      subtitle: "Transparent carbon offset marketplace",
      icon: <Users className="w-12 h-12" />,
      color: "purple",
      features: [
        {
          title: "Verified Credit Marketplace",
          description: "Access to authenticated, traceable carbon credits from Indian agriculture and renewable projects",
          benefits: ["100% verified credits", "Full traceability", "Competitive pricing"]
        },
        {
          title: "Impact Measurement",
          description: "Real-time tracking of environmental and social impact from purchased carbon credits",
          benefits: ["Live impact tracking", "Community benefits", "Health co-benefits"]
        },
        {
          title: "Corporate Sustainability",
          description: "Complete carbon neutrality solutions with reporting and stakeholder communication tools",
          benefits: ["Net-zero pathways", "Brand enhancement", "Investor reporting"]
        }
      ],
      caseStudy: {
        title: "Success Story: Tech Company Mumbai",
        stats: [
          { label: "Credits Purchased", value: "500 tCO₂" },
          { label: "Farms Supported", value: "25 farmers" },
          { label: "Carbon Neutral", value: "Achieved" }
        ]
      }
    }
  };

  const industries = [
    { name: "Agriculture", icon: <Sprout className="w-8 h-8" />, projects: "250+" },
    { name: "Manufacturing", icon: <Factory className="w-8 h-8" />, projects: "85+" },
    { name: "Energy", icon: <Zap className="w-8 h-8" />, projects: "40+" },
    { name: "Technology", icon: <Globe className="w-8 h-8" />, projects: "120+" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Carbon Solutions for Every Industry
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Tailored carbon management solutions for agriculture, industry, and organizations across India
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => openSignIn('register')}
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all"
              >
                Get Custom Solution
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Solution
            </h2>
            <p className="text-xl text-gray-600">
              Specialized tools and services for different sectors
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-2xl p-2 flex space-x-2">
              {Object.entries(solutions).map(([key, solution]) => (
                <button
                  key={key}
                  onClick={() => setActiveSolution(key)}
                  className={`flex items-center px-6 py-4 rounded-xl font-medium transition-all ${
                    activeSolution === key
                      ? `bg-${solution.color}-600 text-white shadow-lg`
                      : 'text-gray-600 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <div className={activeSolution === key ? 'text-white' : `text-${solution.color}-600`}>
                    {solution.icon}
                  </div>
                  <span className="ml-3">{solution.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Solution Details */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-12">
              <div className={`w-20 h-20 bg-${solutions[activeSolution].color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <div className={`text-${solutions[activeSolution].color}-600`}>
                  {solutions[activeSolution].icon}
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {solutions[activeSolution].title}
              </h3>
              <p className="text-xl text-gray-600">
                {solutions[activeSolution].subtitle}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {solutions[activeSolution].features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className={`w-4 h-4 text-${solutions[activeSolution].color}-600 mr-2`} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Case Study */}
            <div className={`bg-gradient-to-r from-${solutions[activeSolution].color}-50 to-${solutions[activeSolution].color}-100 rounded-xl p-8`}>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                {solutions[activeSolution].caseStudy.title}
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                {solutions[activeSolution].caseStudy.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-bold text-${solutions[activeSolution].color}-600 mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-700 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by leading companies across various sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-green-600 group-hover:text-blue-600 transition-colors">
                    {industry.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 font-medium">{industry.projects} Projects</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple 4-step process to get started
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", description: "Evaluate your current carbon footprint and requirements" },
              { step: "02", title: "Setup", description: "Deploy IoT sensors and integrate with existing systems" },
              { step: "03", title: "Monitor", description: "Real-time tracking and data collection begins" },
              { step: "04", title: "Trade", description: "Start earning from carbon credits and offsets" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
                {index < 3 && (
                  <ArrowRight className="w-6 h-6 text-gray-400 mx-auto mt-6 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;