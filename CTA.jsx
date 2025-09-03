import React from 'react';
import { useAuth } from '../context/AuthContext';

const CTA = () => {
  const { openSignIn } = useAuth();

  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Carbon Impact?
        </h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          Join thousands of farmers and industries already benefiting from our carbon trading platform
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => openSignIn('register')}
            className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            Start Free Trial
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;