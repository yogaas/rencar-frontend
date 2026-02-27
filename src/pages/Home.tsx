import React from 'react';
import { MainLayout } from '../components/templates/MainLayout';
import { HeroSection } from '../components/organisms/HeroSection';
import { CarList } from '../components/organisms/CarList';
import { PromoSection } from '../components/organisms/PromoSection';
import { FeaturesSection } from '../components/organisms/FeaturesSection';
import { BookingModal } from '../components/organisms/BookingModal';

export const Home: React.FC = () => {
  return (
    <MainLayout>
      <HeroSection />
      <PromoSection />
      <CarList />
      <FeaturesSection />
      <BookingModal />
    </MainLayout>
  );
};
