import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/home/Hero';
import { CravingsGrid } from '../components/home/CravingsGrid';
import { NationalFavorites } from '../components/home/NationalFavorites';
import { PromoBanner } from '../components/home/PromoBanner';
import { AudiencePathways } from '../components/home/AudiencePathways';
import { OurClients } from '../components/home/OurClients';
import { FAQs } from '../components/home/FAQs';

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <CravingsGrid />
      <NationalFavorites />
      <PromoBanner />
      <AudiencePathways />
      <OurClients />
      <FAQs />
      <Footer />
    </>
  );
};
