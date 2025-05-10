
import React from 'react';
import Hero from '../components/home/Hero';
import ServiceOverview from '../components/home/ServiceOverview';
import ProfileSection from '../components/home/ProfileSection';
import ContactCTA from '../components/home/ContactCTA';
import WhatsAppButton from '../components/ui/WhatsAppButton';

const Index: React.FC = () => {
  return (
    <div>
      <Hero />
      <ServiceOverview />
      <ProfileSection />
      <ContactCTA />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
