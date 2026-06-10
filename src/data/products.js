// Products Local Data for Ilaan Digital Signage Catalog
import p1 from '../assets/ChatGPT Image Apr 30, 2026, 05_41_10 PM 1.png';
import p2 from '../assets/ChatGPT Image Apr 30, 2026, 05_41_10 PM 3.png';
import p3 from '../assets/02 1.png';
import p4 from '../assets/ChatGPT Image Apr 30, 2026, 05_41_10 PM 1 (1).png';
import p5 from '../assets/ChatGPT Image Apr 30, 2026, 05_41_10 PM 1 (2).png';
import p6 from '../assets/ChatGPT Image Apr 30, 2026, 05_41_10 PM 1.png';

// Fallback images from standard assets
import webp1 from '../assets/1.webp';
import webp2 from '../assets/2.webp';
import webp3 from '../assets/3.webp';
import webp4 from '../assets/4.webp';
import webp5 from '../assets/5.webp';
import webp6 from '../assets/6.webp';
import webp7 from '../assets/7.webp';

export const products = [
  // --- TOP SELLERS / COLLECTIONS ---
  {
    id: 1,
    name: "LED Poster Display",
    category: "LED Poster & Banners",
    ledType: "Outdoor LED Display",
    price: 1200,
    image: p1,
    description: "LED Poster Display for standalone advertisements. Features high visibility in outdoor conditions.",
    featured: true,
    specs: {
      resolution: "1920 x 1080",
      brightness: "1500 nits",
      connectivity: "WiFi / LAN / USB",
      mounting: "Floor Stand / Wall Mount",
      operation: "24/7 Run Operation"
    },
    features: [
      "Slim profile design with a heavy-duty stable base",
      "Seamless content scheduling and remote updates via cloud console",
      "High brightness output ensuring clear visibility under direct sunlight"
    ]
  },
  {
    id: 2,
    name: "All-in-One LED TV",
    category: "All-in-one LED TV",
    ledType: "Rental LED Display",
    price: 2500,
    image: p2,
    description: "Premium large-format Smart LED TV for boardrooms, high-end retail, and events.",
    featured: true,
    specs: {
      resolution: "3840 x 2160 (4K)",
      brightness: "800 nits",
      connectivity: "WiFi / HDMI / Bluetooth",
      mounting: "Mobile Trolley / Wall Mount",
      operation: "18/7 Run Operation"
    },
    features: [
      "Ultra-narrow bezels for an immersive viewing experience",
      "Integrated Android Smart OS with pre-loaded collaboration tools",
      "Plug-and-play setup with instant wireless screen sharing support"
    ]
  },
  {
    id: 3,
    name: "Holographic Invisible LED Screen",
    category: "Holographic invisible LED",
    ledType: "Creative LED Display",
    price: 3500,
    image: p3,
    description: "Holographic invisible LED screen for floating 3D effects on windows and glass storefronts.",
    featured: true,
    specs: {
      resolution: "Custom Pixel Pitch",
      brightness: "4000 nits",
      connectivity: "WiFi / LAN / Cloud Control",
      mounting: "Suspended Glass mounting",
      operation: "24/7 Run Operation"
    },
    features: [
      "Up to 85% transparency, preserving view and light transmission",
      "True 3D holographic effect without dedicated glasses",
      "Modular design easily scalable to fit any retail glass area"
    ]
  },
  {
    id: 4,
    name: "Transparent LED Display",
    category: "LED Screen",
    ledType: "Creative LED Display",
    price: 2800,
    image: p4,
    description: "High transparency LED glass facade solution for architectural signage and retail display window panels.",
    featured: true,
    specs: {
      resolution: "1024 x 768",
      brightness: "3500 nits",
      connectivity: "LAN / USB / HDMI",
      mounting: "Hanging / Floor Stacking",
      operation: "24/7 Run Operation"
    },
    features: [
      "Super light-weight structures weighing less than 12kg/sqm",
      "Outstanding heat dissipation with fanless design",
      "Preserves original interior aesthetics when powered off"
    ]
  },

  // --- STANDARD GRID PRODUCTS ---
  {
    id: 5,
    name: "LED Mesh",
    category: "LED Screen",
    ledType: "LED Mesh",
    price: 150,
    image: p5,
    description: "Outdoor flexible LED mesh screen for creative installations, building facades, and massive scale-out displays.",
    featured: false,
    specs: {
      resolution: "Strip Pitch Options",
      brightness: "5000 nits",
      connectivity: "Fiber Optic Controller",
      mounting: "Steel Structure Fixing",
      operation: "24/7 Weatherproof"
    },
    features: [
      "Wind-permeable structure with low wind resistance",
      "Highly flexible strip connectors supporting curved shapes",
      "IP67 double-face protection for extreme outdoor weather"
    ]
  },
  {
    id: 6,
    name: "Rental LED Display",
    category: "LED Screen",
    ledType: "Rental LED Display",
    price: 95,
    image: p6,
    description: "High-quality, rapid-assemble LED panels designed for events, stage backdrops, and mobile exhibitions.",
    featured: false,
    specs: {
      resolution: "P2.6 / P2.9 / P3.91",
      brightness: "1200 nits",
      connectivity: "HDMI / DVI / SDI",
      mounting: "Stacking / Hanging Rig",
      operation: "12/7 Operation"
    },
    features: [
      "Fast-lock design for quick, single-person setup and tear down",
      "Front and rear maintenance access panels",
      "Die-cast aluminum cabinets with high precision alignment"
    ]
  },
  {
    id: 7,
    name: "Creative LED Display",
    category: "LED Screen",
    ledType: "Creative LED Display",
    price: 140,
    image: webp1,
    description: "Free shape, bendable and customizable LED screens for immersive displays, columns, and custom setups.",
    featured: false,
    specs: {
      resolution: "Variable",
      brightness: "1000 nits",
      connectivity: "WiFi / LAN / HDMI",
      mounting: "Custom Frame Mount",
      operation: "24/7 Run Operation"
    },
    features: [
      "Ultra-thin soft modules supporting convex and concave curves",
      "Magnetic mounting design for seamless geometric alignments",
      "Perfect for creative spheres, rings, and architectural curves"
    ]
  },
  {
    id: 8,
    name: "Indoor LED Display",
    category: "LED Screen",
    ledType: "Rental LED Display",
    price: 110,
    image: webp2,
    description: "High-resolution commercial indoor LED display panel ideal for control rooms, corporate lobbies, and retail.",
    featured: false,
    specs: {
      resolution: "Fine Pitch P1.2 / P1.5 / P1.8",
      brightness: "600 nits",
      connectivity: "HDMI / DisplayPort / LAN",
      mounting: "Wall Mounted",
      operation: "24/7 Operations"
    },
    features: [
      "High refresh rate (3840Hz) for flicker-free camera display",
      "HDR10 high dynamic range with deep contrast ratios",
      "Smart automatic color calibration technology"
    ]
  },
  {
    id: 9,
    name: "Outdoor LED Display",
    category: "LED Screen",
    ledType: "Outdoor LED Display",
    price: 180,
    image: webp3,
    description: "High brightness outdoor LED signage panels with extreme weatherproofing and energy-efficient performance.",
    featured: false,
    specs: {
      resolution: "P4 / P5 / P6 / P8",
      brightness: "6500 nits",
      connectivity: "Fiber / 4G / WiFi / LAN",
      mounting: "Pole Mount / Wall Mounted / Roof Mount",
      operation: "24/7 All-weather"
    },
    features: [
      "Energy-saving power supply design cutting costs up to 30%",
      "Fully sealed cabinet with IP65 front/rear weather resistance",
      "Auto-adjusting brightness sensors based on ambient light"
    ]
  },
  {
    id: 10,
    name: "Seamless LED Poster",
    category: "LED Poster & Banners",
    ledType: "Creative LED Display",
    price: 125,
    image: webp4,
    description: "Premium seamless smart LED poster for retail displays. Clean aesthetic and high impact.",
    featured: false,
    specs: {
      resolution: "Fine Pitch P1.92 / P2.5",
      brightness: "1000 nits",
      connectivity: "WiFi / USB / Mobile App",
      mounting: "Base stand / Hanging / Wall mount",
      operation: "24/7 Run Operation"
    },
    features: [
      "Zero-bezel seamless casing for neat visual appearance",
      "Chainable setup supporting up to 6 units together",
      "Instantly upload content via smartphone mobile application"
    ]
  },
  {
    id: 11,
    name: "Standard LED Poster",
    category: "LED Poster & Banners",
    ledType: "Creative LED Display",
    price: 45,
    image: webp5,
    description: "Budget-friendly indoor LED poster providing cost-effective digital signage solutions for malls and shops.",
    featured: false,
    specs: {
      resolution: "P2.5 / P3.0",
      brightness: "800 nits",
      connectivity: "WiFi / USB / LAN",
      mounting: "Foldable Kickstand",
      operation: "16/7 Operation"
    },
    features: [
      "Plug-and-play content player using USB flash drive",
      "Extremely lightweight structure on heavy-duty wheels",
      "User-friendly management software included"
    ]
  },
  {
    id: 12,
    name: "Outdoor LED Poster",
    category: "LED Poster & Banners",
    ledType: "Outdoor LED Display",
    price: 48,
    image: webp6,
    description: "Heavy-duty outdoor digital poster with double-sided screen options and advanced climate control casing.",
    featured: false,
    specs: {
      resolution: "P3.0 / P4.0",
      brightness: "5500 nits",
      connectivity: "WiFi / 4G / Cloud Control",
      mounting: "Bolted Ground Base",
      operation: "24/7 Weatherproof"
    },
    features: [
      "Double-sided display option for dual traffic targeting",
      "Integrated air cooling fan system preventing overheating",
      "Vandal-proof design with tempered protective screen glass"
    ]
  },
  {
    id: 13,
    name: "Foldable LED Poster",
    category: "LED Poster & Banners",
    ledType: "Creative LED Display",
    price: 160,
    image: webp7,
    description: "Ultra-portable foldable LED display poster. Collapsible layout fits in a portable carrying case.",
    featured: false,
    specs: {
      resolution: "P2.0 / P2.5",
      brightness: "1200 nits",
      connectivity: "WiFi / LAN / HDMI",
      mounting: "Self-standing Bracket",
      operation: "24/7 Run Operation"
    },
    features: [
      "Unique foldable panel mechanism reduces storage size by 50%",
      "Sets up in under 2 minutes without tools",
      "Premium flight case included for secure transportation"
    ]
  }
];

export const categories = [
  "LED Screen",
  "LED Poster & Banners",
  "All-in-one LED TV",
  "Holographic invisible LED"
];

export const ledTypes = [
  "Creative LED Display",
  "Rental LED Display",
  "LED Mesh",
  "Outdoor LED Display"
];

export const priceRanges = [
  { label: "< $50.00", min: 0, max: 50.8 },
  { label: "$50.00 - $120.00", min: 50.8, max: 120 },
  { label: "> $130.00", min: 130, max: Infinity }
];

export const popularCategories = [
  "LED",
  "Outdoor",
  "Indoor",
  "Poster",
  "Sports/Video",
  "Project",
  "Foldable LED"
];
