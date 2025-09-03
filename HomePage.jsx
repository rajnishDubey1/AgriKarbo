import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import PlatformTabs from '../components/PlatformTabs';
import Dashboard from '../components/Dashboard';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <PlatformTabs />
      <Dashboard />
      <Testimonials />
      <CTA />
    </>
  );
};

export default HomePage;