import rajnishImage from "../images/rajnish.png";
import KrishnaImage from "../images/Krishna.png";
import himanshuImage from "../images/himanshu.png";
import sunilImage from "../images/sunil.png";
import React from 'react';
import {
  Target,
  Users,
  Award,
  Globe,
  Heart,
  Leaf,
  TrendingUp,
  Shield,
  MapPin,
  Mail,
  Phone,
  CheckCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AboutPage = () => {
  const { openSignIn } = useAuth();

  // ✅ Corrected teamMembers array
  const teamMembers = [
    {
      name: "Sunil Gour",
      role: "Founder & CEO",
      bio: "Environmental Scientist with 15+ years in carbon markets and sustainable agriculture",
      image: sunilImage // <-- Local image added here ✅
    },
    {
      name: "Rajnish Dubey",
      role: "Chief Technicale Officer",
      bio: "Tech leader specializing in IoT systems and agricultural technology solutions",
      image: rajnishImage
    },
    {
      name: "Himanshu Tiwari",
      role: "Head of Partnerships",
      bio: "Expert in farmer relations and agricultural community development programs",
      image: himanshuImage
    },
    {
      name: "Krishna Gour",
      role: "Chief Marketing Officer",
      bio: "Carbon scientist with expertise in emission monitoring and verification protocols",
      image: KrishnaImage
    }
  ];

  const milestones = [
    { year: "2023", event: "AgriKarbo founded with vision to bridge agriculture and carbon markets" },
    { year: "2024", event: "Pilot program launched with 50 farms across Punjab and Maharashtra" },
    { year: "2024", event: "First 1,000 tCO₂ carbon credits generated and traded successfully" },
    { year: "2024", event: "IoT sensor network deployed across 200+ agricultural sites" },
    { year: "2025", event: "Platform expansion to industrial monitoring and emergency alerts" }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Impact First",
      description: "Every decision prioritizes environmental and social impact over profits"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Transparency",
      description: "Open, verifiable data and honest communication with all stakeholders"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Focused",
      description: "Empowering farmers and local communities through technology and fair trade"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Sustainability",
      description: "Building solutions that benefit current and future generations"
    }
  ];

  const stats = [
    { number: "500+", label: "Farmers Registered" },
    { number: "15,000+", label: "Carbon Credits Generated" },
    { number: "25", label: "Industrial Partners" },
    { number: "₹2.5Cr", label: "Farmer Income Generated" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About AgriKarbo
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Bridging the gap between sustainable agriculture, industry compliance, and environmental health through innovative carbon intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To create a sustainable and profitable ecosystem where Indian farmers and industries can actively participate in global carbon markets while improving environmental and public health outcomes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that technology can bridge the gap between traditional agriculture, modern industry, and environmental stewardship, creating value for all stakeholders.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Leaf className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Environmental</h3>
                  <p className="text-sm text-gray-600">Carbon sequestration and emission reduction</p>
                </div>
                <div className="text-center">
                  <Heart className="w-12 h-12 text-red-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Health</h3>
                  <p className="text-sm text-gray-600">Air quality improvement and health co-benefits</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Economic</h3>
                  <p className="text-sm text-gray-600">Additional income for farmers and cost savings for industry</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Social</h3>
                  <p className="text-sm text-gray-600">Community empowerment and sustainable livelihoods</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in building AgriKarbo platform
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-600 to-blue-600 rounded-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-green-600 mb-2">{milestone.year}</div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Passionate experts dedicated to sustainable innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
                {/* ✅ Added dynamic images */}
                <div className="h-48 flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover shadow-md"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Ready to transform your carbon impact? Let's talk.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center">
              <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Headquarters</h3>
              <p className="text-gray-700">
                Tech Park, Sector 62<br />
                Noida, Uttar Pradesh 201309<br />
                India
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-700">
                <a href="mailto:info@agrikarbo.com" className="text-blue-600 hover:text-blue-700">
                  info@agrikarbo.com
                </a><br />
                <a href="mailto:support@agrikarbo.com" className="text-blue-600 hover:text-blue-700">
                  support@agrikarbo.com
                </a>
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center">
              <Phone className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-700">
                <a href="tel:+911234567890" className="text-purple-600 hover:text-purple-700">
                  +91 12345 67890
                </a><br />
                <span className="text-sm text-gray-600">Mon-Fri, 9 AM - 6 PM IST</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join the Carbon Revolution
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Be part of India's sustainable future with AgriKarbo
          </p>
          <button
            onClick={() => openSignIn('register')}
            className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
