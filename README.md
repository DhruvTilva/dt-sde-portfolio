# Dhruv Tilva — Portfolio
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



