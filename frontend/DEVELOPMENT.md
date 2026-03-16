# Development Guide

## Project Setup Completed ✅

Your modern CS portfolio has been successfully created with all best practices implemented!

## 🚀 Quick Start

### 1. Start Development Server
```bash
npm run dev
```
The server will start at `http://localhost:5173`

### 2. Build for Production
```bash
npm run build
```

### 3. Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Button.tsx      - Reusable button with variants
│   │   ├── Card.tsx        - Reusable card component
│   │   └── Layout.tsx      - Wrapper component
│   ├── layout/
│   │   ├── Header.tsx      - Navigation & theme toggle
│   │   └── Footer.tsx      - Footer with links
│   └── sections/
│       ├── Hero.tsx        - Landing hero section
│       ├── About.tsx       - About section
│       ├── Skills.tsx      - Animated skills with bars
│       ├── Projects.tsx    - Filterable projects
│       └── Contact.tsx     - Contact form
├── hooks/
│   └── useUtils.ts         - Custom React hooks
├── utils/
│   ├── seo.ts              - SEO optimization utilities
│   └── constants.ts        - App constants
├── App.tsx                 - Main app component
├── main.tsx                - Entry point
└── index.css               - Global styles
```

## 🎨 Key Features Implemented

### ✅ Dark/Light Mode
- Persistent theme preference in localStorage
- System preference detection
- Smooth transitions

### ✅ Animations
- Scroll reveal animations
- Framer Motion for interactions
- GPU-accelerated transforms
- Staggered children animations

### ✅ Filterable Projects
- Filter by category (Frontend, Backend, FullStack)
- Smooth transitions with AnimatePresence
- Project cards with hover effects

### ✅ Reusable Components
- **Button**: primary, secondary, outline variants
- **Card**: hover animations, responsive
- **Layout**: max-width container wrapper

### ✅ Custom Hooks
- `useScrollReveal`: Intersection Observer for animations
- `useWindowSize`: Track window dimensions
- `useMediaQuery`: Responsive design hook
- `useLocalStorage`: Persistent state
- `useDebounce`, `useThrottle`: Performance helpers
- `useFetch`: Data fetching utility

### ✅ SEO Optimization
- Meta tags (title, description)
- Open Graph tags
- Structured data support
- Semantic HTML
- Fast load times

## 🎯 Customization Checklist

### Personal Information
- [ ] Hero section - Update intro text
- [ ] About section - Update bio
- [ ] Skills - Add your technologies
- [ ] Projects - Add your projects
- [ ] Contact - Update email/phone
- [ ] Footer - Update social links

### Styling
- [ ] Update colors in `tailwind.config.js`
- [ ] Modify fonts in `index.css`
- [ ] Adjust animations in components

### Content Updates
1. **Hero**: Edit `src/components/sections/Hero.tsx`
2. **About**: Edit `src/components/sections/About.tsx`
3. **Skills**: Edit `src/components/sections/Skills.tsx`
4. **Projects**: Edit `src/components/sections/Projects.tsx`
5. **Contact**: Edit `src/components/sections/Contact.tsx`

## 🚀 Performance Tips

1. **Image Optimization**
   - Use WebP format
   - Lazy load images
   - Responsive images with srcset

2. **Bundle Size**
   - Tree-shaking enabled
   - Code splitting by route
   - Minified production build

3. **Runtime Performance**
   - Memoize expensive computations
   - Use useCallback for event handlers
   - Lazy load components

## 📖 Component Examples

### Using the Button Component
```tsx
<Button variant="primary" size="lg" onClick={handleClick}>
  Get Started
</Button>
```

### Using the Card Component
```tsx
<Card hover={true} className="p-6">
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

### Using Custom Hooks
```tsx
const { ref, isVisible } = useScrollReveal()
const windowSize = useWindowSize()
const isMobile = useMediaQuery('(max-width: 768px)')
```

## 🔧 Configuration Files

- **vite.config.ts** - Build configuration
- **tailwind.config.js** - Tailwind CSS setup
- **tsconfig.json** - TypeScript configuration
- **postcss.config.js** - CSS processing

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 768px
- Desktop: 768px - 1024px
- Large Desktop: > 1024px

## 🌐 Browser Support

- Chrome/Edge (latest 2)
- Firefox (latest 2)
- Safari 12+
- Modern mobile browsers

## 🐛 Debugging

Enable React Developer Tools Chrome Extension for better debugging:
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

## 📚 Useful Resources

- [React Docs](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)

## 💡 Pro Tips

1. **Accessibility**: Test with keyboard navigation
2. **Performance**: Run Lighthouse audit regularly
3. **Code Quality**: Use TypeScript for type safety
4. **SEO**: Update meta tags for each section
5. **Testing**: Add unit tests with Jest

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Traditional Hosting
```bash
npm run build
# Upload 'dist' folder to your server
```

## 📧 Need Help?

- Check the README.md for more details
- Review component props in each component file
- Explore the utils/hooks for utility functions

---

Happy coding! 🎉
