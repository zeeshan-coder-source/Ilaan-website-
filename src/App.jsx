import React, { useState, useEffect, useLayoutEffect } from 'react';
import Hero from './components/Hero';
import ServiceSection from './components/Card';
import GlowSection from './components/GlowSection';
import Products from './components/Products';
import CommercialDisplays from './components/CommercialDisplays';
// import SmartDisplays from './components/figma';
// import SmartSignage from './components/SmartSignage';
import Socials from './components/Socials';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ContactSection from './components/ContactSection';
import Background3D from './components/Background3D';
import './App.css';

// Navigation and page views
import { Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/Products';
import DigitalSignage from './pages/DigitalSignage';
import MediaPage from './pages/Media';

import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useLayoutEffect(() => {
    if (!isLoading) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      // Synchronize Lenis with GSAP ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update);

      // Use GSAP's ticker for the RAF loop
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      // Prevent stuttering
      gsap.ticker.lagSmoothing(0);

      return () => {
        lenis.destroy();
        gsap.ticker.remove(ScrollTrigger.update);
      };
    }
  }, [isLoading]);


  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-emerald-500/30">
      <Background3D />
      <AnimatePresence>
        {isLoading ? (
          <LoadingScreen key="loader" />
        ) : (
          <div
            key="content"
            className="content-wrapper relative z-10"
          >
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <ServiceSection />
                  <GlowSection />
                  <Products />
                  <CommercialDisplays />
                  <Socials />
                  <ContactSection />
                  <Footer />
                </>
              } />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:productSlug" element={<ProductsPage />} />
              <Route path="/digital-signage" element={<DigitalSignage />} />
              <Route path="/media" element={<MediaPage />} />
            </Routes>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;


