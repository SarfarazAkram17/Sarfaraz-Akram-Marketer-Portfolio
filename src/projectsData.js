/*
PROJECTS ARE PAUSED (no marketing case studies yet).
The previous project data is kept below, commented out. When you have real
marketing work, write new entries in this file and uncomment the Projects
components (see README: "Adding projects later").

import samsKitchen from "./assets/sams-kitchen.png";
import tournest from "./assets/tournest.png";
import studify from "./assets/studify.png";
import taskwave from "./assets/taskwave.png";

const projectData = [
  {
    name: "Sam's Kitchen",
    challanges: "Building a notification system and conditional backend actions.",
    title:
      "Sam's Kitchen — Personal Cloud Kitchen (Full Stack)",
    desc: "Sam's Kitchen is a personal cloud kitchen platform where users can order food, riders can deliver orders, and admins can manage the entire kitchen system, including foods, payments, and rider assignments.",
    techs: [
      "React.js",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "JWT",
      "Stripe",
      "SSLCommerz",
      "Tanstack Query",
      "React Hook Form",
      "React Share",
      "jsPDF",
    ],
    features: [
      {
        icon: "🍔",
        title: "Food Ordering System",
        points: [
          "Browse a wide variety of food items",
          "Add items to the cart and proceed with secure payment via Stripe and SSLCommerz",
          "Order tracking in real-time with push notifications",
          "Food sharing feature",
        ],
      },
      {
        icon: "🚴‍♂️",
        title: "Rider Management",
        points: [
          "Admin assigns orders to riders",
          "Real-time updates on order statuses for riders",
          "See completed deliveries",
        ],
      },
      {
        icon: "📋",
        title: "Role-based Dashboard",
        points: [
          "Admin can add and manage foods, orders, users",
          "Normal users apply to become a rider",
          "Everyone can see their stats in the dashboard",
        ],
      },
      {
        icon: "🛒",
        title: "Order History & Management",
        points: [
          "Users can view all of their orders and track delivery status",
          "Cancel orders while the order status is pending",
          "Download a receipt after payment",
          "Admins can manage all orders from the dashboard",
        ],
      },
      {
        icon: "📱",
        title: "Real-Time Notifications",
        points: ["All users receive notifications for user actions"],
      },
    ],
    status: "Completed",
    image: samsKitchen,
    github: "https://github.com/SarfarazAkram17/Sams-Kitchen-Client",
    liveLink: "https://sams-kitchen.netlify.app",
    aos: "fade-up-right",
  },
  {
    name: "tournest",
    challanges: "Sharing travel stories on Facebook with React Share.",
    title: "TourNest — Tourism Management System (Full Stack)",
    desc: "TourNest is a complete tourism management platform that allows users to book tour packages, apply as tour guides, share stories, and make secure payments, all under a role-based access-controlled environment.",
    techs: [
      "React.js",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "JWT",
      "Stripe",
      "TanStack Query",
      "React Hook Form",
      "React Share",
    ],
    features: [
      {
        icon: "🌍",
        title: "Tour Package Booking",
        points: [
          "Explore tour packages in all trips page",
          "Book tours with Stripe payment integration",
          "Prevent duplicate unpaid bookings",
        ],
      },
      {
        icon: "🧑‍💼",
        title: "Role-Based Dashboards",
        points: [
          "Separate dashboards for Admin, Tourist, and Tour Guide",
          "Tour Guides can view assigned tours",
          "Admins can approve guide applications, manage users and packages",
        ],
      },
      {
        icon: "📖",
        title: "Story Sharing System",
        points: [
          "All users can create, edit, and delete travel stories",
          "Random stories and community page with facebook share button",
          "Image uploading via Cloudinary",
        ],
      },
      {
        icon: "🧾",
        title: "Guide Applications & Approval",
        points: [
          "Tourists can apply to become tour guides",
          "Admin can approve/reject applications",
        ],
      },
      {
        icon: "📊",
        title: "Admin Analytics",
        points: [
          "Admins can see statistics for payments, users, guides, packages, and stories in the dashboard",
          "Dynamic data from MongoDB queries",
        ],
      },
      {
        icon: "🎯",
        title: "Modern UX/UI",
        points: [
          "Fully responsive layout using Tailwind and DaisyUI",
          "Animations using Framer Motion",
          "Smart forms with validation and feedback",
        ],
      },
    ],
    status: "Completed",
    image: tournest,
    github: "https://github.com/SarfarazAkram17/TourNest-Client",
    liveLink: "https://tournest-sarfaraz-akram.netlify.app",
    aos: "fade-up",
  },
  {
    name: "studify",
    title: "Studify — Group Study Platform (Full Stack)",
    challanges: "Implement JWT.",
    desc: "Studify is a group study platform where students can create assignments, submit work, and peer-review submissions with scoring and feedback.",
    techs: [
      "React.js",
      "Tailwind CSS",
      "Firebase",
      "Express.js",
      "MongoDB",
      "Firebase Backend Authentication",
    ],
    features: [
      {
        icon: "📝",
        title: "Assignment Management",
        points: [
          "Create, update, and delete assignments with detailed information",
          "Set titles, descriptions, marks, and deadlines",
        ],
      },
      {
        icon: "👥",
        title: "Peer Collaboration",
        points: [
          "Peer-to-peer marking and review system",
          "Interactive submission and evaluation workflow",
        ],
      },
      {
        icon: "📈",
        title: "Submission & Grading",
        points: [
          "Upload completed assignments with file support",
          "Grades and feedback displayed in user profiles",
        ],
      },
      {
        icon: "🔥",
        title: "Secure Authentication",
        points: [
          "Firebase Authentication for account creation and login",
          "User-specific data isolation and protection",
        ],
      },
      {
        icon: "🎨",
        title: "Modern UI/UX",
        points: [
          "Responsive layout built with Tailwind CSS and DaisyUI",
          "Minimalist and accessible user experience",
        ],
      },
    ],
    status: "Completed",
    image: studify,
    github: "https://github.com/SarfarazAkram17/Studify-Client",
    liveLink: "https://studify-sarfaraz-akram.netlify.app",
    aos: "fade-up-left",
  },
  {
    name: "taskwave",
    challanges: "Building the backend and applying the right access conditions.",
    title: "TaskWave — Freelance Platform for Microtasks (Full Stack)",
    desc: "TaskWave is a freelance platform for small tasks where employers post jobs and freelancers bid for them.",
    techs: ["Tailwind CSS", "React.js", "Express.js", "MongoDB", "Firebase"],
    features: [
      {
        icon: "🧰",
        title: "Task Lifecycle",
        points: [
          "Post, update, and delete freelance tasks",
          "Includes budget, deadline, and category support",
        ],
      },
      {
        icon: "🔍",
        title: "Smart Bidding System",
        points: ["Freelancers bid for tasks easily"],
      },
      {
        icon: "🚀",
        title: "Employer Features",
        points: ["View all bids per task in a clean table"],
      },
      {
        icon: "🎯",
        title: "Refined User Interface",
        points: [
          "Polished layout and fully responsive design using Tailwind CSS and DaisyUI",
        ],
      },
    ],
    status: "Completed",
    image: taskwave,
    github: "https://github.com/SarfarazAkram17/Taskwave-Client",
    liveLink: "https://taskwave-sarfaraz-akram.netlify.app",
    aos: "fade-up-right",
  },
];

export default projectData;
*/
