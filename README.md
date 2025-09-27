# Prabudda Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Production

```bash
# Build for production
pnpm run build

# Start production server
pnpm start
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Theme**: Dark/Light mode support
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   └── theme-*         # Theme-related components
└── lib/                # Utility functions
```

## 🚢 Deployment

The project includes Docker configuration for easy deployment:

```bash
# Build and run with Docker
docker-compose up -d --build
```

See `DEPLOYMENT.md` for complete deployment instructions.

## ✨ Features

- 🎨 Modern, clean design
- 🌙 Dark/Light theme toggle
- 📱 Fully responsive
- ⚡ Lightning fast with Next.js
- 🔧 TypeScript for type safety
- 🎯 SEO optimizedd