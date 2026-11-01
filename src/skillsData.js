import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiMeta, SiGoogleads } from "react-icons/si";
import { LuSearch, LuPenTool, LuLayoutTemplate, LuGlobe } from "react-icons/lu";

// Edit these lists to add or remove skills.
// `color` is the icon tint (muted so it sits well on the dark theme).
const skillGroups = [
  {
    label: "Social platforms",
    skills: [
      {
        name: "Facebook Marketing",
        note: "Pages, groups & community",
        icon: FaFacebookF,
        color: "#6a98e6",
      },
      {
        name: "Instagram Marketing",
        note: "Reels, Stories & growth",
        icon: FaInstagram,
        color: "#e07aa0",
      },
      {
        name: "TikTok Marketing",
        note: "Short video & trends",
        icon: FaTiktok,
        color: "#6cc9c9",
      },
      {
        name: "Pinterest Marketing",
        note: "Pins, boards & traffic",
        icon: FaPinterestP,
        color: "#e0675f",
      },
      {
        name: "LinkedIn Marketing",
        note: "B2B & personal branding",
        icon: FaLinkedinIn,
        color: "#5f9fd3",
      },
      {
        name: "YouTube Marketing",
        note: "Channel & video strategy",
        icon: FaYoutube,
        color: "#e5645a",
      },
      {
        name: "X Marketing",
        note: "Threads, reach & engagement",
        icon: FaXTwitter,
        color: "#d7dfd4",
      },
      {
        name: "Content Marketing",
        note: "Planning & storytelling",
        icon: LuPenTool,
        color: "#e39474",
      },
    ],
  },
  {
    label: "Paid, search & web",
    skills: [
      {
        name: "Meta Ads",
        note: "Facebook & Instagram campaigns",
        icon: SiMeta,
        color: "#5aa0e6",
      },
      {
        name: "Google Ads",
        note: "Search & display campaigns",
        icon: SiGoogleads,
        color: "#e6bd45",
      },
      {
        name: "SEO",
        note: "On-page & local search",
        icon: LuSearch,
        color: "#79ae65",
      },
      {
        name: "Landing Pages",
        note: "Built to convert clicks",
        icon: LuLayoutTemplate,
        color: "#c4ed78",
      },
      {
        name: "Business Websites",
        note: "Professional online presence",
        icon: LuGlobe,
        color: "#d5c58f",
      },
    ],
  },
];

export default skillGroups;
