# Dhruv Tilva — Portfolio

A production-grade, visually stunning personal portfolio built with Next.js, Tailwind CSS, Framer Motion, and React Three Fiber.

## Tech Stack

| Layer       | Technology                        |
| ----------- | --------------------------------- |
| Framework   | Next.js 14 (App Router)           |
| Styling     | Tailwind CSS 3.4                  |
| Animation   | Framer Motion 11                  |
| 3D          | React Three Fiber + Drei          |
| Icons       | Lucide React                      |
| Fonts       | Space Grotesk, Inter, JetBrains Mono |
| Language    | TypeScript 5                      |

## Features

- **3D Interactive Hero** — Floating icosahedron with distort material, orbit rings, and particle field
- **Loading Screen** — Animated monogram with progress bar
- **Custom Cursor** — Spring-physics cursor follower (desktop only)
- **Scroll Progress** — Gradient progress bar at the top
- **Magnetic Buttons** — Spring-physics hover interactions
- **Typing Animation** — Cycling role headlines
- **Animated Skill Bars** — Scroll-triggered proficiency visualization
- **Tech Stack Marquee** — Auto-scrolling dual-row tech showcase
- **Experience Timeline** — Alternating layout with scroll reveals
- **Project Cards** — 3D tilt effect on hover with category filtering
- **Animated Counters** — Count-up stats on scroll
- **Back to Top** — Animated visibility toggle
- **Responsive** — Mobile, tablet, laptop, ultra-wide
- **Accessible** — Semantic HTML, ARIA labels, reduced motion support
- **SEO Optimized** — OpenGraph, Twitter cards, structured metadata

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles, animations, scrollbar
│   ├── layout.tsx           # Root layout with fonts & metadata
│   └── page.tsx             # Home page composing all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Fixed nav with active section tracking
│   │   ├── Footer.tsx       # Social links and credits
│   │   └── ScrollProgress.tsx
│   ├── sections/
│   │   ├── Hero.tsx         # 3D hero with typing animation
│   │   ├── About.tsx        # Bio, stats, resume download
│   │   ├── Skills.tsx       # Categorized skill bars
│   │   ├── TechStack.tsx    # Marquee tech showcase
│   │   ├── Experience.tsx   # Timeline layout
│   │   ├── Projects.tsx     # Filterable project grid
│   │   ├── Achievements.tsx # Achievement cards
│   │   └── Contact.tsx      # Form + contact methods
│   ├── three/
│   │   └── HeroScene.tsx    # R3F canvas with geometry & particles
│   └── ui/
│       ├── AnimatedCounter.tsx
│       ├── BackToTop.tsx
│       ├── CursorEffect.tsx
│       ├── LoadingScreen.tsx
│       ├── MagneticButton.tsx
│       └── SectionHeading.tsx
├── data/                    # All content in editable data files
│   ├── achievements.ts
│   ├── experience.ts
│   ├── personal.ts
│   ├── projects.ts
│   └── skills.ts
├── hooks/
│   ├── useMagnetic.ts
│   └── useScrollProgress.ts
├── lib/
│   └── utils.ts             # cn(), lerp(), mapRange()
└── types/
    └── index.ts
```

## Setup

```bash
# Clone the repo
git clone <your-repo-url>
cd dt_sde_portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js — click **Deploy**
4. Your site is live

### Deploy to Netlify

1. Run `npm run build`
2. Deploy the `.next` folder using the Netlify CLI or connect your repo

## Customization

### Personal Info

Edit `src/data/personal.ts` to update your name, bio, email, social links, and stats.

### Experience

Edit `src/data/experience.ts` to add or modify work history entries.

### Projects

Edit `src/data/projects.ts` to add your projects with descriptions, tech stacks, and links.

### Skills

Edit `src/data/skills.ts` to adjust skill categories and proficiency levels.

### Achievements

Edit `src/data/achievements.ts` to update your milestones.

### Resume

Place your resume PDF at `public/resume/Dhruv_Tilva_Resume.pdf`.

### Avatar

Place your photo at `public/images/avatar.jpg`. The About section currently uses initials as a placeholder.

### Project Images

Add project screenshots to `public/images/projects/` and reference them in `src/data/projects.ts`.

### Colors

The color system is defined in `tailwind.config.ts` under `theme.extend.colors`. The primary palette:

- **Background**: `#030014` (deep space)
- **Primary**: `#6366f1` (indigo)
- **Secondary**: `#8b5cf6` (violet)
- **Accent**: `#06b6d4` (cyan)

### Contact Form

The contact form UI is ready. To make it functional, integrate one of:
- [EmailJS](https://www.emailjs.com/)
- [Formspree](https://formspree.io/)
- A custom API route in `src/app/api/contact/route.ts`

## Performance

- Three.js loaded via `next/dynamic` with `ssr: false`
- GPU-optimized animations with `transform` and `opacity`
- Reduced motion media query respected
- Static page generation for fast TTFB
- First Load JS: ~151 kB (including 3D scene)

## License

MIT
