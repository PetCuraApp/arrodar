'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AvailableCars from '@/components/AvailableCars';
import Clients from '@/components/Clients';
import SellYourCar from '@/components/SellYourCar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  
  
  return (
    <main className="min-h-screen">
      <Header />
      
      <Hero />
      
      <section className="py-16 bg-light">
        <AvailableCars />
      </section>
      
      <section className="py-16 bg-white">
        <Clients />
      </section>
      
      <section className="py-16 bg-primary text-white">
        <SellYourCar />
      </section>
      
      <section className="py-16 bg-light">
        <Contact />
      </section>
      
      <Footer />
    </main>
  );
}