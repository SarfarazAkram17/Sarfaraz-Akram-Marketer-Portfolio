import {
  LuMegaphone,
  LuTarget,
  LuInstagram,
  LuLinkedin,
  LuMousePointerClick,
  LuShare2,
  LuLayoutTemplate,
  LuGlobe,
  LuSearch,
  // LuPenTool,
  // LuChartNoAxesCombined,
} from "react-icons/lu";

// Edit this list to add, remove or reword services.
// Each service shows as a card in the "Services" section.
const servicesData = [
  {
    key: "facebook-marketing",
    title: "Facebook Marketing",
    icon: LuMegaphone,
    desc: "Turn your Facebook page into a steady source of reach, trust and customer messages.",
    points: [
      "Page setup & optimization",
      "Content calendar & posting",
      "Community & inbox management",
    ],
  },
  {
    key: "meta-ads",
    title: "Meta Ads",
    icon: LuTarget,
    desc: "Paid campaigns on Facebook and Instagram built around one goal: profitable results.",
    points: [
      "Audience research & targeting",
      "Campaign setup & creative testing",
      "Budget optimization & scaling",
    ],
  },
  {
    key: "instagram-marketing",
    title: "Instagram Marketing",
    icon: LuInstagram,
    desc: "A consistent, on-brand Instagram presence that grows followers who actually buy.",
    points: [
      "Profile & highlights setup",
      "Posts, Reels & Stories planning",
      "Hashtag & engagement strategy",
    ],
  },
  {
    key: "linkedin-marketing",
    title: "LinkedIn Marketing",
    icon: LuLinkedin,
    desc: "Build authority and attract B2B leads and opportunities on the world’s professional network.",
    points: [
      "Profile & company page optimization",
      "B2B content & outreach strategy",
      "Personal branding for founders",
    ],
  },
  {
    key: "google-ads",
    title: "Google Ads",
    icon: LuMousePointerClick,
    desc: "Reach customers at the exact moment they search for what you sell.",
    points: [
      "Search & display campaign setup",
      "Keyword research & ad copy",
      "Conversion tracking & optimization",
    ],
  },
  {
    key: "social-media-marketing",
    title: "Social Media Marketing",
    icon: LuShare2,
    desc: "One joined-up strategy across every platform your customers spend time on.",
    points: [
      "Multi-platform strategy",
      "Monthly content planning",
      "Performance tracking & reports",
    ],
  },
  {
    key: "landing-page",
    title: "Landing Page",
    icon: LuLayoutTemplate,
    desc: "Focused, mobile-friendly pages designed to turn ad clicks into leads and orders.",
    points: [
      "Offer-driven page structure",
      "Persuasive copy & clear call to action",
      "Lead form & WhatsApp integration",
    ],
  },
  {
    key: "business-website",
    title: "Business Website",
    icon: LuGlobe,
    desc: "A professional website that presents your business clearly and is ready to be found.",
    points: [
      "Clean, brand-matched design",
      "Mobile-friendly & fast",
      "Contact, map & social links",
    ],
  },
  {
    key: "seo",
    title: "SEO",
    icon: LuSearch,
    desc: "Get discovered by people already searching for what you sell, without paying per click.",
    points: [
      "Keyword research",
      "On-page optimization",
      "Google Business Profile setup",
    ],
  },
  // Paused for now. Uncomment (and the icon imports above) to show again.
  // {
  //   key: "content-creative",
  //   title: "Content & Creative",
  //   icon: LuPenTool,
  //   desc: "Scroll-stopping visuals and copy that explain your offer in seconds.",
  //   points: [
  //     "Ad creatives & social post design",
  //     "Copywriting for ads and captions",
  //     "Brand-consistent visual style",
  //   ],
  // },
  // {
  //   key: "tracking-analytics",
  //   title: "Tracking & Analytics",
  //   icon: LuChartNoAxesCombined,
  //   desc: "Know exactly what is working, so every taka you spend is accountable.",
  //   points: [
  //     "Meta Pixel & event tracking setup",
  //     "Conversion & lead tracking",
  //     "Clear monthly performance reports",
  //   ],
  // },
];

// How an engagement works. Shown under the services grid.
export const processSteps = [
  {
    title: "Discover",
    text: "We talk about your business, customers and goals.",
  },
  {
    title: "Plan",
    text: "I propose a strategy, scope and timeline, and we agree on a contract.",
  },
  {
    title: "Launch",
    text: "Pages, content and campaigns go live.",
  },
  {
    title: "Optimize",
    text: "I track results and keep improving them.",
  },
];

export default servicesData;
