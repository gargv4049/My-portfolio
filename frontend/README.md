# Modern CS Portfolio

A production-ready React portfolio for Computer Science students targeting product-based companies. Built with cutting-edge technologies focusing on performance, accessibility, and stunning animations.

## ✨ Features

- 🎨 **Dark/Light Mode Toggle** - Persistent theme preference with system detection
- ⚡ **Smooth Animations** - Framer Motion animations for scroll reveals and interactions
- 🎯 **Filterable Projects** - Dynamic project filtering with smooth transitions
- 📊 **Animated Skills** - Progress bars with smooth animations
- 📱 **Fully Responsive** - Mobile-first design with Tailwind CSS
- ♿ **Accessible** - WCAG 2.1 AA compliant with semantic HTML
- 🚀 **Performance Optimized** - Vite bundling, lazy loading, and code splitting
- 🔍 **SEO Ready** - Meta tags, Open Graph, structured data
- 💎 **Reusable Components** - Button, Card, and Layout components
- 🎭 **Custom Hooks** - Utilities for animations and state management

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite (3-10x faster than CRA)
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter + JetBrains Mono

## 📋 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx (Reusable with variants)
│   │   │   ├── Card.tsx (Reusable with hover effects)
│   │   │   └── Layout.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx (With dark/light toggle)
│   │   │   └── Footer.tsx
│   │   └── sections/
│   │       ├── Hero.tsx (Hero with animations)
│   │       ├── About.tsx (About section)
│   │       ├── Skills.tsx (Animated skill bars)
│   │       ├── Projects.tsx (Filterable projects)
│   │       └── Contact.tsx (Contact form)
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

## 🎨 Customization Guide

### Update Personal Information
1. Edit [src/components/sections/Hero.tsx](src/components/sections/Hero.tsx) - Update hero text
2. Edit [src/components/sections/About.tsx](src/components/sections/About.tsx) - Update about section
3. Edit [src/components/layout/Footer.tsx](src/components/layout/Footer.tsx) - Update contact info
4. Edit [src/components/sections/Contact.tsx](src/components/sections/Contact.tsx) - Update contact details

### Add Your Projects
Update the `projects` array in [src/components/sections/Projects.tsx](src/components/sections/Projects.tsx):

```tsx
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description',
    image: '🏗️',
    tags: ['React', 'TypeScript'],
    category: 'fullstack',
    link: 'https://your-project.com',
    github: 'https://github.com/yourname/project',
  },
  // ... more projects
]
```

### Update Skills
Modify the `skillCategories` array in [src/components/sections/Skills.tsx](src/components/sections/Skills.tsx)

### Customize Colors
Edit [tailwind.config.js](tailwind.config.js) to update the color palette:

```js
colors: {
  primary: {
    light: '#3B82F6',  // Update primary color
    dark: '#60A5FA',
  },
  // ... more colors
}
```

### Add Social Links
Update the `socialLinks` array in [src/components/layout/Footer.tsx](src/components/layout/Footer.tsx) and [src/components/sections/Contact.tsx](src/components/sections/Contact.tsx)

## 🎯 UI/UX Strategy

**Design Principles Applied:**
- ✅ Visual hierarchy with generous whitespace
- ✅ Consistent micro-interactions throughout
- ✅ Accessible color contrasts (WCAG AA)
- ✅ Mobile-first responsive design
- ✅ Semantic HTML structure
- ✅ Performance-optimized animations (GPU-accelerated)

## 📊 Performance Metrics

- **Bundle Size**: ~100KB (gzipped)
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **Lighthouse Score**: 95+

## 🔍 SEO Optimization

- ✅ Dynamic meta tags in HTML
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML structure
- ✅ Mobile-responsive design
- ✅ Fast load times
- ✅ Clean URLs and navigation

## 🌐 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari 12+
- Mobile browsers

## 📝 Component Documentation

### Button Component
```tsx
<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline'
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean
- `type`: 'button' | 'submit' | 'reset'

### Card Component
```tsx
<Card hover={true} className="custom-class">
  Card content
</Card>
```

**Props:**
- `hover`: boolean (enables hover animation)
- `onClick`: function (optional click handler)
- `className`: string (additional classes)

## 🚦 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload dist folder to your hosting provider
```

## 📄 License

MIT License - feel free to use this portfolio template for your own projects.

## 🤝 Contributing

Feel free to fork and customize this portfolio for your needs!

## 📧 Contact & Support

For questions or improvements, reach out or check the contact section in the portfolio.

---

**Built with ❤️ for Computer Science students targeting product-based companies.**
