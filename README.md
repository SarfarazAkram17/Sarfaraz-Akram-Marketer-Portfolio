# Sarfaraz Akram — Digital Marketing Portfolio

A modern, responsive portfolio for **Sarfaraz Akram**, a contract-based digital marketer from Bangladesh. The site presents the services on offer, marketing skills, milestones, and a working contact form so businesses can get in touch.

**Live portfolio:** [sarfarazakram.netlify.app](https://sarfarazakram.netlify.app)

## What I offer

All services are provided on a contract basis: each project starts with an agreed scope, timeline and deliverables.

| Service | What it covers |
| --- | --- |
| **Facebook Marketing** | Page setup, content calendar, community and inbox management |
| **Meta Ads** | Facebook and Instagram campaigns, audience targeting, creative testing, scaling |
| **Instagram Marketing** | Profile setup, posts, Reels and Stories planning, engagement strategy |
| **LinkedIn Marketing** | Profile and company page optimization, B2B content and outreach strategy, personal branding |
| **Google Ads** | Search and display campaigns, keyword research and ad copy, conversion tracking and optimization |
| **Social Media Marketing** | Multi-platform strategy, monthly planning, performance reports |
| **Landing Page** | Offer-driven, mobile-friendly pages built to turn clicks into leads |
| **Business Website** | Clean, brand-matched, mobile-friendly business websites |
| **SEO** | Keyword research, on-page optimization, Google Business Profile setup |

## Marketing skills

Facebook Marketing · Instagram Marketing · TikTok Marketing · Pinterest Marketing · LinkedIn Marketing · YouTube Marketing · X Marketing · Content Marketing · Meta Ads · Google Ads · SEO · Landing Pages · Business Websites

## Highlights

- Responsive dark interface with an editorial layout and a lime accent theme
- Services section with a card per service, a "How I work" process, and an **Ask about this** button that pre-fills the contact form subject
- Portfolio section with a **Marketing skills** tab (grouped into social platforms and paid, search & web) (the Awards and Certificates tabs are commented out for now)
- Fine-pointer custom cursor, reduced-motion and touch-device fallbacks
- Scroll-triggered motion, a typewriter introduction, and a scroll progress indicator
- EmailJS contact form with name, email, subject, and message fields

## Customize the content

| To change… | Edit |
| --- | --- |
| Services and the "How I work" steps | [`src/servicesData.js`](src/servicesData.js) |
| Marketing skills and their groups | [`src/skillsData.js`](src/skillsData.js) |
| Intro, role titles, social links | `src/Components/Home/Hero.jsx` |
| About text | `src/Components/About/About.jsx` |
| Contact details | `src/Components/Contact/Contact.jsx` |
| Colors and spacing | the `:root` variables at the top of `src/index.css` |

### Adding projects later

Projects, the project case-study page, and the Certificates and Awards tabs are **commented out** because there is no client work, certificate or award to show yet. When you have some:

1. Uncomment `src/projectsData.js`, `src/Components/Showcase/Projects.jsx` and `src/Components/ProjectDetails/ProjectDetails.jsx`, then replace the old entries with your own marketing case studies.
2. In `src/main.jsx`, uncomment the `ProjectDetails` import and the `/project/:projectName` route.
3. In `src/Components/Showcase/Showcase.jsx`, uncomment the Projects, Certificates and Awards imports, tab entries, and panel entries (and the Award metric in `About.jsx`).

### Resume button

The "Download Resume" button in the hero is commented out. Replace `public/Sarfaraz-Akram-Resume.pdf` with a digital marketing resume, then uncomment the button in `src/Components/Home/Hero.jsx`.

## Run locally

### Requirements

- Node.js 20.19+ or 22.12+
- npm

### Install and start

```bash
# Move into the project directory, then:
npm install
npm run dev
```

The terminal prints the local URL.

### Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint on the source and configuration |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Configure the contact form

Create a `.env.local` file in the project root and add the EmailJS values for your account:

```env
VITE_emailjs_serviceId=your_service_id
VITE_emailjs_templateId=your_template_id
VITE_emailjs_publicKey=your_public_key
```

The contact form sends these template parameters: `user_name`, `user_email`, `subject`, `message`, and `time`. In the EmailJS template, include `{{subject}}` in the email subject or message body. For example, set the template subject to `Website enquiry: {{subject}}`.

Use only the EmailJS public key here. Never put a private key, password, or other secret in this file. `.env.local` is excluded from Git by `.gitignore`.

## Project structure

```text
src/
├── Components/       # Page sections (Hero, About, Services, Showcase, Contact)
├── Layout/           # Home and shared layouts
├── assets/           # Images
├── servicesData.js   # Services and process steps
├── skillsData.js     # Marketing skills
├── index.css         # Theme, layout, and component styles
└── main.jsx          # Entry point and routes
```

## Deployment

Run `npm run build` and publish the generated `dist/` directory with your static hosting provider.
