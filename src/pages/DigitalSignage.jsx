import React, { useEffect } from 'react';
import SignageHero from '../components/signage/SignageHero';
import SignageGrowth from '../components/signage/SignageGrowth';
import SignageSaturation from '../components/signage/SignageSaturation';
import SignageDecision from '../components/signage/SignageDecision';
import SignageMediaLayer from '../components/signage/SignageMediaLayer';
import SignageReach from '../components/signage/SignageReach';
import SignageRevenue from '../components/signage/SignageRevenue';
import SignageContent from '../components/signage/SignageContent';
import SignageNetworks from '../components/signage/SignageNetworks';
import SignageCTA from '../components/signage/SignageCTA';
import Footer from '../components/Footer';

const DigitalSignage = () => {
  useEffect(() => {
    // Dispatch resize event to force GSAP and Lenis to re-calculate scroll layouts
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 150);
  }, []);

  return (
    <div className="w-full bg-[#080808] text-white">
      {/* 1. Standalone Hero */}
      <SignageHero />

      {/* 2. Growth Section */}
      <SignageGrowth />

      {/* 3. Saturation Section */}
      <SignageSaturation />

      {/* 4. Influence Section */}
      <SignageDecision />

      {/* 5. Physical Media Ecosystem */}
      <SignageMediaLayer />

      {/* 6. Precision Reach Section */}
      <SignageReach />

      {/* 7. Monetization / Partner Section */}
      <SignageRevenue />

      {/* 8. Creative Content Spotlight */}
      <SignageContent />

      {/* 9. Scalable Networks Infrastructure */}
      <SignageNetworks />

      {/* 10. Call-To-Action Banner */}
      <SignageCTA />

      {/* Shared Global Footer */}
      <Footer />
    </div>
  );
};

export default DigitalSignage;
