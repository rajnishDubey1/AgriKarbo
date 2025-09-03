import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Organic Farmer, Punjab",
      text: "AgriKarbo transformed my farm into a carbon-positive operation. The IoT sensors help me track soil carbon while earning from credits."
    },
    {
      name: "Green Industries Ltd",
      role: "Manufacturing Company",
      text: "Real-time emission monitoring has helped us reduce our carbon footprint by 30% while meeting compliance requirements."
    },
    {
      name: "Dr. Priya Sharma",
      role: "Environmental Scientist",
      text: "The health co-benefit tracking feature provides valuable data for our air quality research initiatives."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Farmers & Industries
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from our community members
          </p>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                "{testimonials[currentSlide].text}"
              </div>
              <div className="font-semibold text-gray-900">{testimonials[currentSlide].name}</div>
              <div className="text-gray-600">{testimonials[currentSlide].role}</div>
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;