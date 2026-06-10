import React, { useRef, useLayoutEffect, useCallback, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
;
import screenImg from '../assets/screen.png';

gsap.registerPlugin(ScrollTrigger);

const socialCardsData = [
  { img: p1, targetRotate: -24, targetX: -620, targetY: 160, zIndex: 10 },
  { img: p2, targetRotate: -16, targetX: -420, targetY: 80, zIndex: 20 },
  { img: p3, targetRotate: -8, targetX: -215, targetY: 25, zIndex: 30 },
  { img: p4, targetRotate: 0, targetX: 0, targetY: 0, zIndex: 40 },
  { img: p5, targetRotate: 8, targetX: 215, targetY: 25, zIndex: 30 },
  { img: p6, targetRotate: 16, targetX: 420, targetY: 80, zIndex: 20 },
  { img: p7, targetRotate: 24, targetX: 620, targetY: 160, zIndex: 10 },
];

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
        duration: 35,
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

  const repeated = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-4 md:py-16 mt-0 mb-2 md:mt-2 md:mb-6">
      <div
        ref={trackRef}
        className="flex items-center whitespace-nowrap w-max will-change-transform gap-[60px] md:gap-[100px]"
      >
        {repeated.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="Partner"
            className="h-[100px] md:h-[200px] lg:h-[300px] w-auto max-w-none object-contain opacity-90 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
};

const SocialLink = ({ link }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#"
      className="font-bold uppercase inline-block relative overflow-hidden text-[10px] sm:text-[11px] md:text-[25px] whitespace-nowrap"
      style={{
        lineHeight: '149.7%',
        letterSpacing: '0%',
        fontFamily: "'Falcon',Falcon",
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
        isMobile: "(max-width: 639px)",
        isTablet: "(min-width: 640px) and (max-width: 1023px)",
        isLaptop: "(min-width: 1024px) and (max-width: 1439px)",
        isDesktop: "(min-width: 1440px)"
      }, (context) => {
        let { isMobile, isTablet, isLaptop, isDesktop } = context.conditions;

        wrapperRefs.current.forEach((wrapper, i) => {
          const data = socialCardsData[i];

          // Calculate responsive targets
          let targetX = data.targetX;
          let targetY = data.targetY;
          let targetRotate = data.targetRotate;

          if (isMobile) {
            // Tighter fan spread for mobile
            const mobileX = [-110, -65, -30, 0, 30, 65, 110];
            const mobileY = [45, 20, 5, 0, 5, 20, 45];
            const mobileRotate = [-16, -11, -5, 0, 5, 11, 16];

            targetX = mobileX[i];
            targetY = mobileY[i];
            targetRotate = mobileRotate[i];
          } else if (isTablet) {
            // Custom spread for tablets to keep cards within screen boundaries
            const tabletX = [-200, -130, -65, 0, 65, 130, 200];
            const tabletY = [60, 30, 10, 0, 10, 30, 60];
            const tabletRotate = [-16, -11, -5, 0, 5, 11, 16];

            targetX = tabletX[i];
            targetY = tabletY[i];
            targetRotate = tabletRotate[i];
          } else if (isLaptop) {
            // Custom spread for laptop sized displays to keep cards within screen boundaries
            const laptopX = [-380, -250, -125, 0, 125, 250, 380];
            const laptopY = [100, 50, 15, 0, 15, 50, 100];
            const laptopRotate = [-20, -14, -7, 0, 7, 14, 20];

            targetX = laptopX[i];
            targetY = laptopY[i];
            targetRotate = laptopRotate[i];
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
          <div
            className="pointer-events-none select-none text-center leading-none font-falcon font-extrabold uppercase text-black"
            style={{
              fontFamily: "'Falcon', sans-serif",
              fontSize: 'clamp(48px, 8vw, 100px)',
              lineHeight: 1.05,
              maxWidth: '600px',
              letterSpacing: '-0.06em',
            }}
          >
            WHAT'S UP<br />ON SOCIALS
          </div>
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
              className="text-[23px] md:text-[55px] leading-[43.5px] md:leading-none"
              style={{
                fontFamily: "'Falcon', sans-serif",
                color: '#000',
                textTransform: 'uppercase',
                letterSpacing: '-0.04em',
              }}
            >
              FOLLOW ILAAN
            </span>
            {/* <img
              src={ilaanTextImg}
              alt="ILAAN"
              className="w-[85px] md:w-[123px] h-auto object-contain"
              draggable={false}
            /> */}
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

