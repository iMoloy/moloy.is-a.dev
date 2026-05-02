# 🏗️ Moloy Krishna Paul — Industrial BWY Portfolio

A high-performance, strictly minimalist, and industrial-themed developer portfolio. Built with a focus on high-contrast design, sharp UI elements, and seamless theme inversion.

![Logo](/public/logo.png)

## 🎨 Aesthetic: Black, White & Yellow (BWY)

This portfolio follows a strict **"Industrial Magazine"** aesthetic:
- **Sharp Corners:** 0px border-radius across all containers, buttons, and sections.
- **Perfect Inversion:** Light and Dark modes are literal inverses of each other—pure black vs. pure white.
- **High Contrast:** Bold typography and yellow highlights (`#FFFF00`) for interactive elements.

## 🚀 Key Features

- **🌓 Dynamic Theme Inversion:** Seamlessly switch between Light and Dark modes with persistent state.
- **✨ Big Bang Text Animation:** A custom particle-based text explosion animation for the hero section.
- **📊 Real-time GitHub Stats:** Fetches repository counts, experience years, and contribution data directly from the GitHub API.
- **🖱️ Custom Cursor:** A theme-aware interactive cursor that reacts to links and buttons.
- **📱 Fully Responsive:** Optimized for all screen sizes, from mobile to ultra-wide displays.
- **⚡ Performance Optimized:** Built with Next.js 15, utilizing Font Optimization, Image Optimization, and API Caching.

## 🛠️ Tech Stack

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

## 📦 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm / yarn / pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/iMoloy/moloy.is-a.dev.git
   cd moloy.is-a.dev
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```text
├── src/
│   ├── app/            # Next.js App Router (Layouts, Pages, APIs)
│   ├── components/     # Reusable UI Components (Hero, Navbar, etc.)
│   ├── data/           # Portfolio Content (portfolio.js)
│   └── hooks/          # Custom React Hooks
├── public/             # Static Assets (Images, Icons, PDFs)
└── next.config.mjs     # Next.js Configuration
```

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
Developed with 💛 by [Moloy Krishna Paul](https://moloy.is-a.dev)
