import React, { useRef, useLayoutEffect, useCallback, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import p1 from '../assets/images1.jfif';
// import p2 from '../assets/images2.jfif';
// import p3 from '../assets/image3.jpeg';
// import p4 from '../assets/image4.jfif';

import p1 from '../assets/1.webp';
import p2 from '../assets/2.webp';
import p3 from '../assets/3.webp';
import p4 from '../assets/6.webp';
import p5 from '../assets/7.webp';
import p6 from '../assets/2.webp';
import p7 from '../assets/3.webp';

import headingImg from '../assets/what’s up On Socials.png';
import ilaanTextImg from '../assets/Ilaanl.png';
import logo1 from '../assets/Logos_1.webp';
import logo2 from '../assets/Logos_2.webp';
import logo3 from '../assets/Logos_3.webp';
import logo4 from '../assets/Logos_4.webp';
import logo5 from '../assets/Logos_5.webp';

// import logo1 from '../assets/1.webp';
// import logo2 from '../assets/2.webp';
// import logo3 from '../assets/3.webp';
// import logo4 from '../assets/4.webp';
// import logo5 from '../assets/5.webp';
import screenImg from '../assets/screen.png';

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────────────────────
// Fan card data — matches Figma design exactly
// Center card (index 3) is upright, outer cards fan out with increasing angle
// targetY increases outward so cards arc downward at the edges (bowl shape)
// ─────────────────────────────────────────────────────────────────────────────
const socialCardsData = [
  { img: p1, targetRotate: -24, targetX: -620, targetY: 160, zIndex: 10 },
  { img: p2, targetRotate: -16, targetX: -420, targetY: 80, zIndex: 20 },
  { img: p3, targetRotate: -8, targetX: -215, targetY: 25, zIndex: 30 },
  { img: p4, targetRotate: 0, targetX: 0, targetY: 0, zIndex: 40 },
  { img: p5, targetRotate: 8, targetX: 215, targetY: 25, zIndex: 30 },
  { img: p6, targetRotate: 16, targetX: 420, targetY: 80, zIndex: 20 },
  { img: p7, targetRotate: 24, targetX: 620, targetY: 160, zIndex: 10 },
];

// ─────────────────────────────────────────────────────────────────────────────
// Marquee — direction-aware (scroll down = left, scroll up = right)
// ─────────────────────────────────────────────────────────────────────────────
const Marquee = ({ logos }) => {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const lastYRef = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  useLayoutEffect(() => {
    const track = trackRef.current;

    const rafId = requestAnimationFrame(() => {
      gsap.set(track, { xPercent: 0 });
      animRef.current = gsap.to(track, {
        xPercent: -50,
        duration: 8,
        ease: 'none',
        repeat: -1,
        force3D: true,
      });
    });

    const onScroll = () => {
      const delta = window.scrollY - lastYRef.current;
      lastYRef.current = window.scrollY;
      if (!animRef.current) return;

      // Smoothly transition direction to fix "lagging/jerky" feel
      if (delta > 0 && animRef.current.timeScale() < 0) {
        gsap.to(animRef.current, { timeScale: 1, duration: 0.3, overwrite: true });
      } else if (delta < 0 && animRef.current.timeScale() > 0) {
        gsap.to(animRef.current, { timeScale: -1, duration: 0.3, overwrite: true });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      animRef.current?.kill();
      window.removeEventListener('scroll', onScroll);
    };
  }, [logos]);

  const repeated = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-2 md:py-24 mt-0 mb-2 md:mt-2 md:mb-6">
      <div
        ref={trackRef}
        className="flex items-center whitespace-nowrap w-max will-change-transform gap-[40px] md:gap-[100px]"
      >
        {repeated.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="Partner"
            className="h-[200px] md:h-[400px] lg:h-[600px] my-0 md:-my-[100px] lg:-my-[200px] mx-0 md:-mx-[30px] lg:-mx-[60px] w-auto max-w-none object-contain opacity-90 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// SocialLink — letter-by-letter bottom-to-top hover animation
// ─────────────────────────────────────────────────────────────────────────────
const SocialLink = ({ link }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#"
      className="font-bold uppercase inline-block relative overflow-hidden text-[10px] sm:text-[11px] md:text-[17px] whitespace-nowrap"
      style={{
        lineHeight: '149.7%',
        letterSpacing: '0%',
        fontFamily: "'Poppins', sans-serif",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Layer 1: green letters exit UPWARD on hover */}
      <div className="flex" style={{ color: '#97C92B' }}>
        {link.split('').map((char, i) => (
          <span
            key={`a-${i}`}
            className="inline-block"
            style={{
              transform: hovered ? 'translateY(-120%)' : 'translateY(0%)',
              opacity: hovered ? 0 : 1,
              transition: `transform 0.38s cubic-bezier(0.76,0,0.24,1), opacity 0.32s ease`,
              transitionDelay: `${i * 32}ms`,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
      {/* Layer 2: black letters enter from BOTTOM on hover */}
      <div className="flex absolute inset-0" style={{ color: '#000' }}>
        {link.split('').map((char, i) => (
          <span
            key={`b-${i}`}
            className="inline-block"
            style={{
              transform: hovered ? 'translateY(0%)' : 'translateY(110%)',
              opacity: hovered ? 1 : 0,
              transition: `transform 0.38s cubic-bezier(0.76,0,0.24,1), opacity 0.32s ease`,
              transitionDelay: `${i * 32}ms`,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </a>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Main Socials section
// ─────────────────────────────────────────────────────────────────────────────
const Socials = () => {
  const containerRef = useRef(null);
  const wrapperRefs = useRef([]);
  const innerRefs = useRef([]);
  const headingRef = useRef(null);
  const linksRef = useRef(null);

  // Which card is currently hovered (-1 = none)
  const hoveredRef = useRef(-1);

  const socialLinks = ['TIKTOK', 'INSTAGRAM', 'YOUTUBE', 'FACEBOOK', 'LINKEDIN', 'X'];
  const partnerLogos = [logo1, logo2, logo3, logo4, logo5];

  // ── Mouse Enter ────────────────────────────────────────────────────────────
  const handleMouseEnter = useCallback((idx) => {
    if (hoveredRef.current === idx) return;
    hoveredRef.current = idx;

    innerRefs.current.forEach((inner, i) => {
      if (!inner) return;
      const wrapper = wrapperRefs.current[i];

      if (i === idx) {
        gsap.to(wrapper, { zIndex: 50, duration: 0.35, overwrite: 'auto' });
        gsap.to(inner, {
          scale: 1.12,
          x: 0,
          y: -50,
          duration: 0.35,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      } else {
        const dir = i < idx ? -1 : 1;
        const dist = Math.abs(i - idx);
        const nudge = dir * (20 + dist * 14);

        gsap.to(wrapper, { zIndex: socialCardsData[i].zIndex, duration: 0.35, overwrite: 'auto' });
        gsap.to(inner, {
          scale: 0.94,
          x: nudge,
          y: 12,
          duration: 0.35,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      }
    });
  }, []);

  // ── Mouse Leave ────────────────────────────────────────────────────────────
  const handleMouseLeave = useCallback((idx) => {
    if (hoveredRef.current !== idx) return;
    hoveredRef.current = -1;

    innerRefs.current.forEach((inner, i) => {
      if (!inner) return;
      const wrapper = wrapperRefs.current[i];

      gsap.to(wrapper, { zIndex: socialCardsData[i].zIndex, duration: 0.45, overwrite: 'auto' });
      gsap.to(inner, {
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.45,
        ease: 'power3.inOut',
        overwrite: 'auto',
      });
    });
  }, []);

  // ── GSAP ScrollTrigger ──────────────────────────────────────────────────────
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // 1. Heading reveal — slides up as section enters
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 88%',
            end: 'top 55%',
            scrub: 0.5,
          },
        }
      );

      // 2. Social links reveal
      if (linksRef.current) {
        gsap.fromTo(linksRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: linksRef.current,
              start: 'top 90%',
              end: 'top 65%',
              scrub: 0.5,
            },
          }
        );
      }

      // 3. Fan-spread animation using matchMedia for responsiveness
      const mm = gsap.matchMedia();

      mm.add({
        isMobile: "(max-width: 767px)",
        isDesktop: "(min-width: 768px)"
      }, (context) => {
        let { isMobile, isDesktop } = context.conditions;

        wrapperRefs.current.forEach((wrapper, i) => {
          const data = socialCardsData[i];

          // Calculate responsive targets
          let targetX = data.targetX;
          let targetY = data.targetY;
          let targetRotate = data.targetRotate;

          if (isMobile) {
            // Tighter fan spread for mobile
            const mobileX = [-140, -75, -35, 0, 35, 75, 140];
            const mobileY = [60, 30, 10, 0, 10, 30, 60];
            const mobileRotate = [-18, -12, -6, 0, 6, 12, 18];

            targetX = mobileX[i];
            targetY = mobileY[i];
            targetRotate = mobileRotate[i];
          }

          gsap.fromTo(
            wrapper,
            {
              x: 0,
              y: 0,
              rotation: 0,
              opacity: i === 3 ? 1 : 0,
            },
            {
              x: targetX,
              y: targetY,
              rotation: targetRotate,
              opacity: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 35%',
                end: 'top -25%',
                scrub: 0.3,
              },
            }
          );
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    // <section
    //   ref={containerRef}
    //   className="relative w-full bg-white overflow-hidden flex flex-col items-center"
    //   style={{ paddingTop: '10rem' }}
    // >
    <section
      ref={containerRef}
      className="relative w-full bg-white overflow-hidden flex flex-col items-center pt-0 md:pt-40"
    >
      <div className="relative z-10 w-full flex flex-col items-center">

        {/* ── Heading ─────────────────────────────────────────────────────── */}
        <div
          ref={headingRef}
          className="flex flex-col items-center mb-8 md:mb-16 px-4"
        >
          <img
            src={screenImg}
            alt="Screen Icon"
            className="mb-4 md:mb-12 object-contain w-[40px] h-[40px] md:w-[55.37px] md:h-[55.37px]"
            draggable={false}
          />
          <img
            src={headingImg}
            alt="WHAT'S UP ON SOCIALS"
            className="w-[227px] h-[73px] md:w-full md:h-auto object-contain pointer-events-none select-none"
            style={{ maxWidth: '568px' }}
            draggable={false}
          />
        </div>

        {/* ── Fan Cards ───────────────────────────────────────────────────── */}
        {/*
          Container height is fixed so sticky scroll works nicely.
          On mobile cards are smaller; on desktop full size.
        */}
        <div
          className="relative w-full flex items-center justify-center"
          style={{ height: 'clamp(380px, 55vw, 680px)' }}
        >

        {/* <div
          className="relative w-full flex items-center justify-center"
          style={{ height: 'clamp(200px, 250px, 450px)' }}
        > */}

          {socialCardsData.map((card, index) => (
            <div
              key={index}
              ref={el => (wrapperRefs.current[index] = el)}
              className="absolute will-change-transform"
              style={{ zIndex: card.zIndex }}
            >
              <div
                ref={el => (innerRefs.current[index] = el)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-gray-200 will-change-transform cursor-pointer"
                style={{
                  width: 'clamp(140px, 18vw, 290px)',
                  height: 'clamp(240px, 32vw, 520px)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.10)',
                }}
              >
                <img
                  src={card.img}
                  alt={`Social post ${index + 1}`}
                  className="w-full h-full object-cover"
                  style={{ pointerEvents: 'none', userSelect: 'none' }}
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ── Follow Links ────────────────────────────────────────────────── */}
        <div
          ref={linksRef}
          className="mt-12 md:mt-24 w-full px-4 flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-3 mb-8 md:mb-10 w-[252.82px] md:w-auto h-[54.91px] md:h-auto mx-auto">
            <span
              className="text-[23px] md:text-[40px] leading-[43.5px] md:leading-none"
              style={{
                fontFamily: "'Falcon', sans-serif",
                color: '#000',
                textTransform: 'uppercase',
              }}
            >
              FOLLOW
            </span>
            <img
              src={ilaanTextImg}
              alt="ILAAN"
              className="w-[85px] md:w-[123px] h-auto object-contain"
              draggable={false}
            />
          </div>
          <div className="flex flex-nowrap items-center justify-center gap-[13px] sm:gap-[10px] md:gap-8 w-full px-1 md:px-0">
            {socialLinks.map((link, idx) => (
              <SocialLink key={idx} link={link} />
            ))}
          </div>
        </div>

      </div>

      {/* ── Partner Marquee ─────────────────────────────────────────────────── */}
      <Marquee logos={partnerLogos} />
    </section>
  );
};

export default Socials;


// import React, { useRef, useLayoutEffect, useCallback, useState } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // import p1 from '../assets/images1.jfif';
// // import p2 from '../assets/images2.jfif';
// // import p3 from '../assets/image3.jpeg';
// // import p4 from '../assets/image4.jfif';

// import p1 from '../assets/1.webp';
// import p2 from '../assets/2.webp';
// import p3 from '../assets/3.webp';
// import p4 from '../assets/6.webp';
// import p5 from '../assets/7.webp';
// import p6 from '../assets/2.webp';
// import p7 from '../assets/3.webp';

// import headingImg from '../assets/what’s up On Socials.png';
// import ilaanTextImg from '../assets/Ilaanl.png';
// import logo1 from '../assets/Logos_1.webp';
// import logo2 from '../assets/Logos_2.webp';
// import logo3 from '../assets/Logos_3.webp';
// import logo4 from '../assets/Logos_4.webp';
// import logo5 from '../assets/Logos_5.webp';

// // import logo1 from '../assets/1.webp';
// // import logo2 from '../assets/2.webp';
// // import logo3 from '../assets/3.webp';
// // import logo4 from '../assets/4.webp';
// // import logo5 from '../assets/5.webp';
// import screenImg from '../assets/screen.png';

// gsap.registerPlugin(ScrollTrigger);

// // ─────────────────────────────────────────────────────────────────────────────
// // Fan card data — matches Figma design exactly
// // Center card (index 3) is upright, outer cards fan out with increasing angle
// // targetY increases outward so cards arc downward at the edges (bowl shape)
// // ─────────────────────────────────────────────────────────────────────────────
// const socialCardsData = [
//   { img: p1, targetRotate: -24, targetX: -620, targetY: 160, zIndex: 10 },
//   { img: p2, targetRotate: -16, targetX: -420, targetY: 80, zIndex: 20 },
//   { img: p3, targetRotate: -8, targetX: -215, targetY: 25, zIndex: 30 },
//   { img: p4, targetRotate: 0, targetX: 0, targetY: 0, zIndex: 40 },
//   { img: p5, targetRotate: 8, targetX: 215, targetY: 25, zIndex: 30 },
//   { img: p6, targetRotate: 16, targetX: 420, targetY: 80, zIndex: 20 },
//   { img: p7, targetRotate: 24, targetX: 620, targetY: 160, zIndex: 10 },
// ];

// // ─────────────────────────────────────────────────────────────────────────────
// // Marquee — direction-aware (scroll down = left, scroll up = right)
// // ─────────────────────────────────────────────────────────────────────────────
// const Marquee = ({ logos }) => {
//   const trackRef = useRef(null);
//   const animRef = useRef(null);
//   const lastYRef = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

//   useLayoutEffect(() => {
//     const track = trackRef.current;

//     const rafId = requestAnimationFrame(() => {
//       gsap.set(track, { xPercent: 0 });
//       animRef.current = gsap.to(track, {
//         xPercent: -50,
//         duration: 8,
//         ease: 'none',
//         repeat: -1,
//         force3D: true,
//       });
//     });

//     const onScroll = () => {
//       const delta = window.scrollY - lastYRef.current;
//       lastYRef.current = window.scrollY;
//       if (!animRef.current) return;

//       // Smoothly transition direction to fix "lagging/jerky" feel
//       if (delta > 0 && animRef.current.timeScale() < 0) {
//         gsap.to(animRef.current, { timeScale: 1, duration: 0.3, overwrite: true });
//       } else if (delta < 0 && animRef.current.timeScale() > 0) {
//         gsap.to(animRef.current, { timeScale: -1, duration: 0.3, overwrite: true });
//       }
//     };

//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => {
//       cancelAnimationFrame(rafId);
//       animRef.current?.kill();
//       window.removeEventListener('scroll', onScroll);
//     };
//   }, [logos]);

//   const repeated = [...logos, ...logos, ...logos, ...logos];

//   return (
//     <div className="w-full overflow-hidden py-2 md:py-24 mt-0 mb-2 md:mt-2 md:mb-6">
//       <div
//         ref={trackRef}
//         className="flex items-center whitespace-nowrap w-max will-change-transform gap-[40px] md:gap-[100px]"
//       >
//         {repeated.map((logo, i) => (
//           <img
//             key={i}
//             src={logo}
//             alt="Partner"
//             className="h-[200px] md:h-[400px] lg:h-[600px] my-0 md:-my-[100px] lg:-my-[200px] mx-0 md:-mx-[30px] lg:-mx-[60px] w-auto max-w-none object-contain opacity-90 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// // ─────────────────────────────────────────────────────────────────────────────
// // SocialLink — letter-by-letter bottom-to-top hover animation
// // ─────────────────────────────────────────────────────────────────────────────
// const SocialLink = ({ link }) => {
//   const [hovered, setHovered] = useState(false);
//   return (
//     <a
//       href="#"
//       className="font-bold uppercase inline-block relative overflow-hidden text-[10px] sm:text-[11px] md:text-[17px] whitespace-nowrap"
//       style={{
//         lineHeight: '149.7%',
//         letterSpacing: '0%',
//         fontFamily: "'Poppins', sans-serif",
//       }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* Layer 1: green letters exit UPWARD on hover */}
//       <div className="flex" style={{ color: '#97C92B' }}>
//         {link.split('').map((char, i) => (
//           <span
//             key={`a-${i}`}
//             className="inline-block"
//             style={{
//               transform: hovered ? 'translateY(-120%)' : 'translateY(0%)',
//               opacity: hovered ? 0 : 1,
//               transition: `transform 0.38s cubic-bezier(0.76,0,0.24,1), opacity 0.32s ease`,
//               transitionDelay: `${i * 32}ms`,
//             }}
//           >
//             {char === ' ' ? '\u00A0' : char}
//           </span>
//         ))}
//       </div>
//       {/* Layer 2: black letters enter from BOTTOM on hover */}
//       <div className="flex absolute inset-0" style={{ color: '#000' }}>
//         {link.split('').map((char, i) => (
//           <span
//             key={`b-${i}`}
//             className="inline-block"
//             style={{
//               transform: hovered ? 'translateY(0%)' : 'translateY(110%)',
//               opacity: hovered ? 1 : 0,
//               transition: `transform 0.38s cubic-bezier(0.76,0,0.24,1), opacity 0.32s ease`,
//               transitionDelay: `${i * 32}ms`,
//             }}
//           >
//             {char === ' ' ? '\u00A0' : char}
//           </span>
//         ))}
//       </div>
//     </a>
//   );
// };

// // ─────────────────────────────────────────────────────────────────────────────
// // Main Socials section
// // ─────────────────────────────────────────────────────────────────────────────
// const Socials = () => {
//   const containerRef = useRef(null);
//   const wrapperRefs = useRef([]);
//   const innerRefs = useRef([]);
//   const headingRef = useRef(null);
//   const linksRef = useRef(null);

//   // Which card is currently hovered (-1 = none)
//   const hoveredRef = useRef(-1);

//   const socialLinks = ['TIKTOK', 'INSTAGRAM', 'YOUTUBE', 'FACEBOOK', 'LINKEDIN', 'X'];
//   const partnerLogos = [logo1, logo2, logo3, logo4, logo5];

//   // ── Mouse Enter ────────────────────────────────────────────────────────────
//   const handleMouseEnter = useCallback((idx) => {
//     if (hoveredRef.current === idx) return;
//     hoveredRef.current = idx;

//     innerRefs.current.forEach((inner, i) => {
//       if (!inner) return;
//       const wrapper = wrapperRefs.current[i];

//       if (i === idx) {
//         gsap.to(wrapper, { zIndex: 50, duration: 0.35, overwrite: 'auto' });
//         gsap.to(inner, {
//           scale: 1.12,
//           x: 0,
//           y: -50,
//           duration: 0.35,
//           ease: 'power3.out',
//           overwrite: 'auto',
//         });
//       } else {
//         const dir = i < idx ? -1 : 1;
//         const dist = Math.abs(i - idx);
//         const nudge = dir * (20 + dist * 14);

//         gsap.to(wrapper, { zIndex: socialCardsData[i].zIndex, duration: 0.35, overwrite: 'auto' });
//         gsap.to(inner, {
//           scale: 0.94,
//           x: nudge,
//           y: 12,
//           duration: 0.35,
//           ease: 'power3.out',
//           overwrite: 'auto',
//         });
//       }
//     });
//   }, []);

//   // ── Mouse Leave ────────────────────────────────────────────────────────────
//   const handleMouseLeave = useCallback((idx) => {
//     if (hoveredRef.current !== idx) return;
//     hoveredRef.current = -1;

//     innerRefs.current.forEach((inner, i) => {
//       if (!inner) return;
//       const wrapper = wrapperRefs.current[i];

//       gsap.to(wrapper, { zIndex: socialCardsData[i].zIndex, duration: 0.45, overwrite: 'auto' });
//       gsap.to(inner, {
//         scale: 1,
//         x: 0,
//         y: 0,
//         duration: 0.45,
//         ease: 'power3.inOut',
//         overwrite: 'auto',
//       });
//     });
//   }, []);

//   // ── GSAP ScrollTrigger ──────────────────────────────────────────────────────
//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {

//       // 1. Heading reveal — slides up as section enters
//       gsap.fromTo(headingRef.current,
//         { opacity: 0, y: 60 },
//         {
//           opacity: 1,
//           y: 0,
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: 'top 88%',
//             end: 'top 55%',
//             scrub: 0.5,
//           },
//         }
//       );

//       // 2. Social links reveal
//       if (linksRef.current) {
//         gsap.fromTo(linksRef.current,
//           { opacity: 0, y: 40 },
//           {
//             opacity: 1,
//             y: 0,
//             scrollTrigger: {
//               trigger: linksRef.current,
//               start: 'top 90%',
//               end: 'top 65%',
//               scrub: 0.5,
//             },
//           }
//         );
//       }

//       // 3. Fan-spread animation using matchMedia for responsiveness
//       const mm = gsap.matchMedia();

//       mm.add({
//         isMobile: "(max-width: 767px)",
//         isDesktop: "(min-width: 768px)"
//       }, (context) => {
//         let { isMobile, isDesktop } = context.conditions;

//         wrapperRefs.current.forEach((wrapper, i) => {
//           const data = socialCardsData[i];

//           // Calculate responsive targets
//           let targetX = data.targetX;
//           let targetY = data.targetY;
//           let targetRotate = data.targetRotate;

//           if (isMobile) {
//             // Tighter fan spread for mobile
//             const mobileX = [-140, -75, -35, 0, 35, 75, 140];
//             const mobileY = [60, 30, 10, 0, 10, 30, 60];
//             const mobileRotate = [-18, -12, -6, 0, 6, 12, 18];

//             targetX = mobileX[i];
//             targetY = mobileY[i];
//             targetRotate = mobileRotate[i];
//           }

//           gsap.fromTo(
//             wrapper,
//             {
//               x: 0,
//               y: 0,
//               rotation: 0,
//               opacity: i === 3 ? 1 : 0,
//             },
//             {
//               x: targetX,
//               y: targetY,
//               rotation: targetRotate,
//               opacity: 1,
//               ease: 'power2.out',
//               scrollTrigger: {
//                 trigger: containerRef.current,
//                 start: 'top 35%',
//                 end: 'top -25%',
//                 scrub: 0.3,
//               },
//             }
//           );
//         });
//       });

//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   // ── Render ────────────────────────────────────────────────────────────────
//   return (
//     // <section
//     //   ref={containerRef}
//     //   className="relative w-full bg-white overflow-hidden flex flex-col items-center"
//     //   style={{ paddingTop: '10rem' }}
//     // >
//     <section
//       ref={containerRef}
//       className="relative w-full bg-white overflow-hidden flex flex-col items-center pt-0 md:pt-40"
//     >
//       <div className="relative z-10 w-full flex flex-col items-center">

//         {/* ── Heading ─────────────────────────────────────────────────────── */}
//         <div
//           ref={headingRef}
//           className="flex flex-col items-center mb-8 md:mb-16 px-4"
//         >
//           <img
//             src={screenImg}
//             alt="Screen Icon"
//             className="mb-4 md:mb-12 object-contain w-[40px] h-[40px] md:w-[55.37px] md:h-[55.37px]"
//             draggable={false}
//           />
//           <img
//             src={headingImg}
//             alt="WHAT'S UP ON SOCIALS"
//             className="w-[227px] h-[73px] md:w-full md:h-auto object-contain pointer-events-none select-none"
//             style={{ maxWidth: '568px' }}
//             draggable={false}
//           />
//         </div>

//         {/* ── Fan Cards ───────────────────────────────────────────────────── */}
//         {/*
//           Container height is fixed so sticky scroll works nicely.
//           On mobile cards are smaller; on desktop full size.
//         */}
//         {/* <div
//           className="relative w-full flex items-center justify-center"
//           style={{ height: 'clamp(380px, 55vw, 680px)' }}
//         > */}

//         <div
//           className="relative w-full flex items-center justify-center"
//           style={{ height: 'clamp(200px, 250px, 450px)' }}
//         >

//           {socialCardsData.map((card, index) => (
//             <div
//               key={index}
//               ref={el => (wrapperRefs.current[index] = el)}
//               className="absolute will-change-transform"
//               style={{ zIndex: card.zIndex }}
//             >
//               <div
//                 ref={el => (innerRefs.current[index] = el)}
//                 onMouseEnter={() => handleMouseEnter(index)}
//                 onMouseLeave={() => handleMouseLeave(index)}
//                 className="rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-gray-200 will-change-transform cursor-pointer"
//                 style={{
//                   width: 'clamp(140px, 18vw, 290px)',
//                   height: 'clamp(240px, 32vw, 520px)',
//                   boxShadow: '0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.10)',
//                 }}
//               >
//                 <img
//                   src={card.img}
//                   alt={`Social post ${index + 1}`}
//                   className="w-full h-full object-cover"
//                   style={{ pointerEvents: 'none', userSelect: 'none' }}
//                   draggable={false}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ── Follow Links ────────────────────────────────────────────────── */}
//         <div
//           ref={linksRef}
//           className="mt-12 md:mt-24 w-full px-4 flex flex-col items-center"
//         >
//           <div className="flex items-center justify-center gap-3 mb-8 md:mb-10 w-[252.82px] md:w-auto h-[54.91px] md:h-auto mx-auto">
//             <span
//               className="text-[23px] md:text-[40px] leading-[43.5px] md:leading-none"
//               style={{
//                 fontFamily: "'Falcon', sans-serif",
//                 color: '#000',
//                 textTransform: 'uppercase',
//               }}
//             >
//               FOLLOW
//             </span>
//             <img
//               src={ilaanTextImg}
//               alt="ILAAN"
//               className="w-[85px] md:w-[123px] h-auto object-contain"
//               draggable={false}
//             />
//           </div>
//           <div className="flex flex-nowrap items-center justify-center gap-[13px] sm:gap-[10px] md:gap-8 w-full px-1 md:px-0">
//             {socialLinks.map((link, idx) => (
//               <SocialLink key={idx} link={link} />
//             ))}
//           </div>
//         </div>

//       </div>

//       {/* ── Partner Marquee ─────────────────────────────────────────────────── */}
//       <Marquee logos={partnerLogos} />
//     </section>
//   );
// };

// export default Socials;

///////////////////////////////////////////////////////////////END///////////////////////////////////////////////////////////////////////


// import React, { useRef, useLayoutEffect, useCallback } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import p1 from '../assets/images1.jfif';
// import p2 from '../assets/images2.jfif';
// import p3 from '../assets/image3.jpeg';
// import p4 from '../assets/image4.jfif';
// import logo1 from '../assets/Logos_1.webp';
// import logo2 from '../assets/Logos_2.webp';
// import logo3 from '../assets/Logos_3.webp';
// import logo4 from '../assets/Logos_4.webp';
// import logo5 from '../assets/Logos_5.webp';

// gsap.registerPlugin(ScrollTrigger);

// // ---------------------------------------------------------------------------
// // Card data — final fanned positions after scroll
// // ---------------------------------------------------------------------------
// const socialCardsData = [
//   { img: p1, targetRotate: -22, targetX: -650, targetY: 140, zIndex: 10 },
//   { img: p2, targetRotate: -15, targetX: -440, targetY: 80, zIndex: 20 },
//   { img: p3, targetRotate: -8, targetX: -220, targetY: 30, zIndex: 30 },
//   { img: p4, targetRotate: 0, targetX: 0, targetY: 0, zIndex: 40 },
//   { img: p1, targetRotate: 8, targetX: 220, targetY: 30, zIndex: 30 },
//   { img: p2, targetRotate: 15, targetX: 440, targetY: 80, zIndex: 20 },
//   { img: p3, targetRotate: 22, targetX: 650, targetY: 140, zIndex: 10 },
// ];

// // ---------------------------------------------------------------------------
// // Marquee — scroll-direction aware (down = left, up = right)
// // ---------------------------------------------------------------------------
// const Marquee = ({ logos }) => {
//   const trackRef = useRef(null);
//   const animRef = useRef(null);
//   const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
//   const speedRef = useRef(1);

//   useLayoutEffect(() => {
//     const track = trackRef.current;

//     const id = requestAnimationFrame(() => {
//       const totalWidth = track.scrollWidth / 2;
//       gsap.set(track, { x: 0 });

//       animRef.current = gsap.to(track, {
//         x: -totalWidth,
//         duration: 18,
//         ease: 'none',
//         repeat: -1,
//       });
//     });

//     const handleScroll = () => {
//       const currentY = window.scrollY;
//       const delta = currentY - lastScrollY.current;

//       if (delta > 0 && speedRef.current !== 1) {
//         speedRef.current = 1;
//         if (animRef.current) animRef.current.timeScale(1);
//       } else if (delta < 0 && speedRef.current !== -1) {
//         speedRef.current = -1;
//         if (animRef.current) animRef.current.timeScale(-1);
//       }

//       lastScrollY.current = currentY;
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });

//     return () => {
//       cancelAnimationFrame(id);
//       if (animRef.current) animRef.current.kill();
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [logos]);

//   const repeated = [...logos, ...logos, ...logos, ...logos];

//   return (
//     <div className="w-full overflow-hidden py-2 border-t border-gray-100 mt-10">
//       <div
//         ref={trackRef}
//         className="flex items-center whitespace-nowrap w-max will-change-transform"
//         style={{ gap: '0.5rem' }}
//       >
//         {repeated.map((logo, i) => (
//           <img
//             key={i}
//             src={logo}
//             alt="Partner"
//             className="h-38 md:h-90 w-auto object-contain opacity-100 grayscale hover:grayscale-0 transition-all duration-500 px-2"
//           />
//         ))}
//       </div>
//     </div>
//   );

// };

// // ---------------------------------------------------------------------------
// // Main Socials section
// // ---------------------------------------------------------------------------
// const Socials = () => {
//   const containerRef = useRef(null);
//   const cardRefs = useRef([]);
//   const headingRef = useRef(null);

//   // Track which card is hovered (-1 = none)
//   const hoveredRef = useRef(-1);

//   // Live fanned positions updated by ScrollTrigger onUpdate
//   const fannedState = useRef(
//     socialCardsData.map(() => ({ x: 0, y: 0, rotation: 0 }))
//   );

//   const socialLinks = ['TIKTOK', 'INSTAGRAM', 'YOUTUBE', 'FACEBOOK', 'LINKEDIN', 'X'];
//   const partnerLogos = [logo1, logo2, logo3, logo4, logo5];

//   // ── Hover: card scales in-place (keeps its rotation), siblings nudge away ─
//   const handleMouseEnter = useCallback((idx) => {
//     if (hoveredRef.current === idx) return;
//     hoveredRef.current = idx;

//     cardRefs.current.forEach((card, i) => {
//       if (!card) return;
//       const base = fannedState.current[i];

//       if (i === idx) {
//         // ✅ Keep exact rotation — only lift (y) and scale up
//         gsap.to(card, {
//           scale: 1.10,
//           x: base.x,
//           y: base.y - 45,       // lift upward
//           rotation: base.rotation,     // ← stays at its current angle, no straightening
//           zIndex: 50,
//           duration: 0.36,
//           ease: 'power3.out',
//           overwrite: 'auto',
//         });
//       } else {
//         // Sibling cards — nudge away from hovered card, keep their rotation
//         const dir = i < idx ? -1 : 1;
//         const dist = Math.abs(i - idx);
//         const nudge = dir * (28 + dist * 8);

//         gsap.to(card, {
//           scale: 0.95,
//           x: base.x + nudge,
//           y: base.y + 10,
//           rotation: base.rotation,     // ← siblings also keep their own angle
//           zIndex: socialCardsData[i].zIndex,
//           duration: 0.36,
//           ease: 'power3.out',
//           overwrite: 'auto',
//         });
//       }
//     });
//   }, []);

//   // ── Hover out: restore all cards to their scroll-fanned state ────────────
//   const handleMouseLeave = useCallback((idx) => {
//     if (hoveredRef.current !== idx) return;
//     hoveredRef.current = -1;

//     cardRefs.current.forEach((card, i) => {
//       if (!card) return;
//       const base = fannedState.current[i];

//       gsap.to(card, {
//         scale: 1,
//         x: base.x,
//         y: base.y,
//         rotation: base.rotation,
//         zIndex: socialCardsData[i].zIndex,
//         duration: 0.44,
//         ease: 'power3.inOut',
//         overwrite: 'auto',
//       });
//     });
//   }, []);

//   // ── GSAP ScrollTrigger setup ──────────────────────────────────────────────
//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {

//       // 1. Heading reveal
//       gsap.from(headingRef.current, {
//         opacity: 0,
//         y: 80,
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: 'top 85%',
//           end: 'top 50%',
//           scrub: 0.4,
//         },
//       });

//       // 2. Fan-spread animation
//       cardRefs.current.forEach((card, i) => {
//         const data = socialCardsData[i];

//         gsap.fromTo(
//           card,
//           {
//             x: 0, y: 0, rotation: 0,
//             opacity: i === 3 ? 1 : 0,
//             scale: 1,
//           },
//           {
//             x: data.targetX,
//             y: data.targetY,
//             rotation: data.targetRotate,
//             opacity: 1,
//             scale: 1,
//             ease: 'power3.out',
//             scrollTrigger: {
//               trigger: containerRef.current,
//               start: 'top 55%',
//               end: 'top -10%',
//               scrub: 0.35,
//               onUpdate: (self) => {
//                 // Only update fanned state when no card is hovered
//                 if (hoveredRef.current === -1) {
//                   fannedState.current[i] = {
//                     x: data.targetX * self.progress,
//                     y: data.targetY * self.progress,
//                     rotation: data.targetRotate * self.progress,
//                   };
//                 }
//               },
//             },
//           }
//         );
//       });

//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   // ── Render ────────────────────────────────────────────────────────────────
//   return (
//     <section
//       ref={containerRef}
//       className="relative w-full bg-white py-24 md:py-2 overflow-hidden flex flex-col items-center min-h-[150vh]"
//     >
//       <div className="relative z-10 w-full flex flex-col items-center">

//         {/* ── Header ────────────────────────────────────────────────────── */}
//         <div ref={headingRef} className="flex flex-col items-center mb-16 md:mb-24">
//           <div className="relative w-24 h-24 mb-6 flex flex-col items-center">
//             <div className="w-16 h-12 border-2 border-black rounded-[4px] relative bg-white overflow-hidden flex flex-wrap p-1 gap-1">
//               {[...Array(15)].map((_, i) => (
//                 <div key={i} className="w-1 h-1 rounded-full bg-gray-300" />
//               ))}
//             </div>
//             <div className="flex gap-4 -mt-1">
//               <div className="w-0.5 h-3 bg-black rotate-[15deg] origin-top" />
//               <div className="w-0.5 h-3 bg-black -rotate-[15deg] origin-top" />
//             </div>
//           </div>

//           <h2 className="!text-[70px] md:!text-[65px] font-bold !text-black leading-[0.8] text-center tracking-[-0.05em] uppercase font-poppins">
//             WHAT'S UP <br /> ON SOCIALS
//           </h2>
//         </div>

//         {/* ── Fan Cards ─────────────────────────────────────────────────── */}
//         <div className="relative w-full h-[450px] md:h-[650px] flex items-center justify-center">
//           {socialCardsData.map((card, index) => (
//             <div
//               key={index}
//               ref={el => (cardRefs.current[index] = el)}
//               style={{ zIndex: card.zIndex }}
//               onMouseEnter={() => handleMouseEnter(index)}
//               onMouseLeave={() => handleMouseLeave(index)}
//               className="absolute w-[200px] h-[350px] md:w-[375px] md:h-[645px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-100 will-change-transform cursor-pointer"
//             >
//               <img
//                 src={card.img}
//                 alt={`Social post ${index + 1}`}
//                 className="w-full h-full object-cover pointer-events-none select-none"
//                 draggable={false}
//               />
//             </div>
//           ))}
//         </div>

//         {/* ── Social Links ──────────────────────────────────────────────── */}
//         <div className="mt-20 md:mt-32 w-full px-4 flex flex-col items-center">
//           <h3 className="text-[32px] md:text-[50px] font-bold text-black mb-12 tracking-tight uppercase font-poppins">
//             FOLLOW ILAAN
//           </h3>
//           <div className="flex flex-wrap justify-center gap-6 md:gap-12">
//             {socialLinks.map((link, idx) => (
//               <a
//                 key={idx}
//                 href="#"
//                 className="text-[17px] font-bold text-[#97C92B] hover:text-black transition-colors duration-200 font-poppins uppercase tracking-wider hover:scale-110 inline-block"
//               >
//                 {link}
//               </a>
//             ))}
//           </div>
//         </div>

//       </div>

//       {/* ── Marquee ───────────────────────────────────────────────────────── */}
//       <Marquee logos={partnerLogos} />
//     </section>
//   );
// };

// export default Socials;