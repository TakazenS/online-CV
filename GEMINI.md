# Project Overview: Online CV Portfolio

This project is a modern, responsive personal portfolio and online curriculum vitae (CV) built with **React 19**, **TypeScript**, and **Vite**. It features a clean, professional aesthetic with dark/light mode support, smooth animations using **Framer Motion**, and a custom cursor glow effect.

## Tech Stack
- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with `clsx` and `tailwind-merge` for dynamic classes.
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Package Manager**: [Bun](https://bun.sh/) (indicated by `bun.lock`)

## Key Features
- **Responsive Design**: Mobile-first approach using Tailwind.
- **Dark/Light Mode**: Integrated theme toggling using Tailwind's `class` strategy.
- **Interactive UI**: Includes a custom cursor glow (`CursorGlow.tsx`) and smooth scroll navigation.
- **Portfolio Sections**: Hero, Skills, Experience, and Projects components.

## Building and Running

### Development
To start the development server:
```bash
bun run dev
# OR
npm run dev
```

### Build
To build the project for production (outputs to `dist/`):
```bash
bun run build
# OR
npm run build
```

### Linting
To run ESLint:
```bash
bun run lint
# OR
npm run lint
```

### Preview
To preview the production build locally:
```bash
bun run preview
# OR
npm run preview
```

## Development Conventions

### Styling
- **Utility-First**: Use Tailwind CSS utility classes directly in JSX.
- **Dynamic Classes**: Use the `cn` utility (found in `Navbar.tsx`) which combines `clsx` and `twMerge` to handle conditional classes and Tailwind conflict resolution.
- **Theme Variables**: Custom colors (primary, dark, light) and fonts (Poppins) are defined in `tailwind.config.js`.

### Components
- **Functional Components**: Use arrow functions or function declarations with TypeScript interfaces for props where applicable.
- **Organization**: Components are stored in `src/components/`.
- **HMR**: Vite's Fast Refresh is enabled for a smooth developer experience.

### State & Hooks
- Standard React hooks (`useState`, `useEffect`) are used for UI state like theme toggling and scroll tracking.
- Framer Motion is used for entry animations and interactive elements.
