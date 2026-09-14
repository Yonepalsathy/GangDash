# GangDash 🍔

A hyper-premium, photography-led food delivery platform homepage built with React and Vite. 

GangDash shifts away from traditional abstract utility interfaces and embraces a deeply human, emotional dining experience. By utilizing rich lifestyle photography, elegant glassmorphism, and buttery smooth micro-animations, the design is incredibly craveable and instantly attractive to customers.

## ✨ Features

- **Component-Driven Architecture**: Clean, scalable folder structure separating common UI, layout wrappers, and specific homepage sections.
- **Glassmorphism UI**: Custom built `Button`, `Input`, and `Card` components featuring dynamic blur effects (`backdrop-filter`) and premium glow states.
- **Photography-Led Layout**: Replaces flat icons with high-resolution Unsplash photography for maximum appetite appeal.
- **Immersive Sections**: Includes a full-bleed Hero, interactive Cravings Grid, lifestyle National Favorites cards, and an editorial DashPass Promo Banner.
- **Modern Typography**: Uses the geometric and stylish `Outfit` font for a highly premium editorial feel.

## 🛠 Tech Stack

- **Framework**: [React](https://reactjs.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (`index.css`) with heavily customized design tokens (Variables) for colors, spacing, and transitions.
- **Icons**: [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```text
src/
├── components/
│   ├── common/                 # Reusable UI (Button, Card, Input)
│   ├── layout/                 # Global layout (Header, Footer)
│   └── home/                   # Specific page sections
├── pages/                      # Page components (Home.jsx)
├── styles/                     # Global styling (index.css)
├── App.jsx                     # Application root wrapper
└── main.jsx                    # React DOM entry
```

## 🚀 Getting Started

To run the application locally:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 🎨 Design Philosophy

Food delivery is a visual and emotional experience. GangDash ensures that the moment a user lands on the page, they are greeted not by empty text inputs, but by vibrant, mouth-watering food photography that inspires action. Soft rounded corners, subtle hover-lift animations, and premium dark gradient overlays ensure the text remains legible while keeping the food as the hero.
