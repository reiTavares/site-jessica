import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import TrustIndicators from '@/components/TrustIndicators';
import Benefits from '@/components/Benefits';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import SimulationForm from '@/components/SimulationForm';

const Index: React.FC = () => {
  return (
    <MainLayout>
      <Hero />
      <TrustIndicators />
      <Benefits />
      <Services />
      <Testimonials />
      <FAQ />
      <SimulationForm />
    </MainLayout>
  );
};

export default Index;
