# Pranav Global School Website

A comprehensive school website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **8 Main Pages**: Home, About, Infrastructure, Academic, Admission, Gallery, Career, and Contact
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Form Validation**: Contact, Career, and Admission forms with proper validation
- **Image Gallery**: Masonry layout with lightbox functionality
- **Interactive Components**: Sliders, animations, and smooth transitions
- **Custom Theme**: School brand colors and consistent design system

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Forms**: React Hook Form with validation
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Image Handling**: React Responsive Masonry

## School Color Palette

- **Dark Teal**: `#0f4c5c` - Primary color
- **Light Sage**: `#c7d5c8` - Accent color  
- **Burgundy**: `#b23a32` - Error/Destructive color
- **Teal**: `#3caea3` - Secondary color
- **Cream**: `#e8ddd0` - Background accent

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Deploy automatically with the included `vercel.json` configuration

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. The `public/_redirects` file handles SPA routing

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   └── figma/          # Figma-specific components
├── styles/             # CSS styles
└── main.tsx           # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## License

© 2024 Pranav Global School. All rights reserved.