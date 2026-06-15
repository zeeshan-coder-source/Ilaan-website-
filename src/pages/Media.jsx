import React, { useEffect } from 'react';
import MediaHero from '../components/media/MediaHero';
import MediaShowcase from '../components/media/MediaShowcase';
import MediaVideo from '../components/media/MediaVideo';
import MediaPress from '../components/media/MediaPress';
import MediaCTA from '../components/media/MediaCTA';
import Footer from '../components/Footer';

const MediaPage = () => {
  useEffect(() => {
    // Dispatch resize event to force GSAP and Lenis to re-calculate scroll layouts
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 150);
  }, []);

  return (
    <div className="w-full bg-[#080808] text-white">
      {/* 1. Hero with menu overlay */}
      <MediaHero />

      {/* 2. Media Showcase/Hub Gallery */}
      {/* <MediaShowcase /> */}

      {/* 3. Featured Video/Showreel */}
      {/* <MediaVideo /> */}

      {/* 4. Press & News Insights */}
      {/* <MediaPress /> */}

      {/* 5. CTA Newsletter */}
      {/* <MediaCTA /> */}

      {/* Shared Global Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default MediaPage;
