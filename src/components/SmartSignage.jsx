import React from "react";
import group104 from "./group-104.png";
import group105 from "./group-105.png";
import group106 from "./group-106.png";
import group107 from "./group-107.png";
import image36 from "./image-36.png";
import resolution1 from "./resolution-1.png";
import sun1 from "./sun-1.png";
import wifi2 from "./wifi-2.png";

const featureIcons = [
  {
    id: "brightness",
    icon: sun1,
    alt: "Brightness feature",
    wrapperClassName:
      "left-[54px] absolute top-[139px] w-[71px] h-[71px] bg-[#d9d9d966] rounded-[35.59px]",
    iconClassName:
      "absolute top-[156px] left-[70px] w-[38px] h-[38px] aspect-[1] object-cover",
  },
  {
    id: "connectivity",
    icon: wifi2,
    alt: "Wireless connectivity feature",
    wrapperClassName:
      "left-[183px] absolute top-[139px] w-[71px] h-[71px] bg-[#d9d9d966] rounded-[35.59px]",
    iconClassName:
      "absolute top-[159px] left-[202px] w-[33px] h-[33px] aspect-[1] object-cover",
  },
  {
    id: "resolution",
    icon: resolution1,
    alt: "High resolution feature",
    wrapperClassName:
      "left-[312px] absolute top-[139px] w-[71px] h-[71px] bg-[#d9d9d966] rounded-[35.59px]",
    iconClassName:
      "absolute top-[164px] left-[331px] w-[33px] h-[33px] aspect-[1] object-cover",
  },
];

const backgroundLayers = [
  {
    id: "group105",
    src: group105,
    alt: "Decorative background layer",
    className: "absolute top-[570px] left-[690px] w-[696px] h-[731px]",
  },
  {
    id: "group107",
    src: group107,
    alt: "Decorative background layer",
    className: "absolute top-[640px] left-[568px] w-[940px] h-[987px]",
  },
  {
    id: "group106",
    src: group106,
    alt: "Decorative background layer",
    className: "absolute top-[719px] left-[368px] w-[1340px] h-[1407px]",
  },
  {
    id: "group104",
    src: group104,
    alt: "Decorative background layer",
    className: "absolute top-[827px] left-36 w-[1789px] h-[1878px]",
  },
];

export const SmartSignage = () => {
  return (
    <section className="relative w-full h-[2897px] overflow-hidden flex justify-center bg-neutral-100 text-black">
      {/* 
        This relative container is exactly 1920px wide (matching Figma spec) 
        and matches the absolute positioning coordinate space.
      */}
      <div className="relative w-[1920px] h-full shrink-0">
        
        {/* Decorative concentric background layers */}
        {backgroundLayers.map((layer) => (
          <img
            key={layer.id}
            className={layer.className}
            alt={layer.alt}
            src={layer.src}
            aria-hidden="true"
          />
        ))}

        {/* Header promotional banner */}
        <header className="absolute top-[31px] left-0 w-[1920px] h-[236px]">
          <img
            className="w-[1920px] h-[236px] aspect-[9.83] object-cover"
            alt="Smart digital signage promotional banner"
            src={image36}
          />
        </header>

        {/* Hero headline section */}
        <section
          className="absolute top-[370px] left-[calc(50.00%_-_390px)] w-[780px] h-[120px]"
          aria-labelledby="hero-heading"
        >
          <h1
            id="hero-heading"
            className="absolute top-0 left-[44px] [font-family:'Suisse_Intl_Trial-Regular',Helvetica] font-normal text-black text-[55.2px] tracking-[0] leading-[56.8px] whitespace-nowrap"
          >
            Power so natural,
          </h1>
          <p className="absolute top-[61px] left-0 [font-family:'Suisse_Intl_Trial-Regular',Helvetica] font-normal text-transparent text-[55.2px] tracking-[0] leading-[56.8px] whitespace-nowrap">
            <span className="text-black">you&apos;re </span>
            <span className="text-neutral-300">always in flow.</span>
          </p>
        </section>

        {/* Product details & Features section */}
        <section
          className="absolute top-[1893px] left-[calc(50.00%_-_222px)] w-[444px] h-[438px]"
          aria-labelledby="product-title"
        >
          <p className="absolute top-0 left-[calc(50.00%-_107px)] [text-shadow:0px_2.8px_20.23px#000000] [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-[18.9px] text-right tracking-[0] leading-[19.5px] whitespace-nowrap">
            Smart Digital Signage
          </p>
          
          <h2
            id="product-title"
            className="absolute top-10 left-[calc(50.00%_-_222px)] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[63px] text-right tracking-[0] leading-[64.9px] whitespace-nowrap"
          >
            Magic for real
          </h2>

          {/* Feature Icons wrapper */}
          {featureIcons.map((feature) => (
            <React.Fragment key={feature.id}>
              <div className={feature.wrapperClassName} aria-hidden="true" />
              <img
                className={feature.iconClassName}
                alt={feature.alt}
                src={feature.icon}
              />
            </React.Fragment>
          ))}

          {/* Description text */}
          <p className="absolute top-[280px] left-[calc(50.00%_-_189px)] [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-[15.8px] text-center tracking-[0] leading-[23.8px] whitespace-nowrap">
            High-performance digital signage that delivers
            <br />
            impactful messages with stunning clarity.
            <br />
            Anytime, anywhere.
          </p>

          {/* Call to action button */}
          <button
            type="button"
            className="absolute top-[377px] left-[calc(50.00%_-_90px)] w-[174px] h-[62px] bg-white rounded-[36.22px] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white border-0"
            aria-label="Explore now"
          >
            <span className="absolute top-[17px] left-[34px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[17.6px] text-center tracking-[0] leading-[26.6px] whitespace-nowrap">
              Explore Now
            </span>
          </button>
        </section>

      </div>
    </section>
  );
};

export default SmartSignage;
