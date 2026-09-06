"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const HERO_BANNERS = [
  {
    id: 'banner-1',
    url: '/banners/hero-banner-main.png',
    alt: 'Vivaan Farms - Pure A2 Gir Cow Bilona Ghee & Natural Farm Goods'
  },
  {
    id: 'banner-2',
    url: '/banners/hero-banner-ghee.jpg',
    alt: 'Vivaan Farms - Traditional Vedic Bilona Method A2 Ghee'
  },
  {
    id: 'banner-3',
    url: '/banners/hero-banner-farm.jpg',
    alt: 'Vivaan Farms - Authentic Organic Farm in Gujarat'
  }
];

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_BANNERS.length);
  }, []);

  // Auto-slide interval (5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="w-full bg-[#F9F6EF] px-0 relative overflow-hidden select-none">
      <div className="relative w-full aspect-[16/7] md:aspect-[2.8/1] overflow-hidden shadow-sm bg-[#100C06]">
        <AnimatePresence mode="wait">
          <motion.div
            key={HERO_BANNERS[currentIndex].id}
            initial={{ opacity: 0.8, scale: 1.01 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.8, scale: 0.99 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={HERO_BANNERS[currentIndex].url}
              alt={HERO_BANNERS[currentIndex].alt}
              fill
              priority
              loading="eager"
              sizes="100vw"
              className="object-cover object-center w-full h-full"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

