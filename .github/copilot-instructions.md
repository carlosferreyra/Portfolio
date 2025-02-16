# GitHub Copilot Instructions

This document provides context and guidelines for GitHub Copilot to better assist with this portfolio project.

## Project Overview

- Modern portfolio website built with React 18, Vite, and Tailwind CSS
- Features 3D elements using Three.js
- Implements email functionality using EmailJS
- Uses Framer Motion for animations

## File Structure Conventions

- `/src/components/`: React components with specific section components
- `/src/assets/`: Static assets including images and SVGs
- `/src/constants/`: Configuration and constant values
- `/src/utils/`: Utility functions and helpers
- `/public/`: 3D models and large static assets

## Coding Guidelines

1. **Component Structure**

   - Use functional components with hooks
   - Implement proper prop-types
   - Keep components modular and reusable

2. **Styling**

   - Use Tailwind CSS classes
   - Follow mobile-first responsive design
   - Maintain consistent spacing using Tailwind's spacing scale

3. **3D Elements**

   - Keep 3D models optimized for web performance
   - Use React Three Fiber for Three.js implementations
   - Implement proper loading states for 3D assets

4. **State Management**

   - Use React hooks for local state
   - Implement proper error boundaries
   - Handle loading states appropriately

5. **Performance**
   - Lazy load components when possible
   - Optimize images and 3D assets
   - Implement proper caching strategies

## Common Tasks

- Adding new projects: Update `/src/constants/index.js`
- Modifying 3D scenes: Check `/src/components/canvas/`
- Updating experience: Modify experience section in constants
- Styling changes: Use Tailwind classes or update `tailwind.config.js`

## Testing and Development

- Use `npm run dev` for local development
- Ensure responsive design works across devices
- Test 3D model loading and performance
- Verify contact form functionality

## Deployment

- Build with `npm run build`
- Verify built assets in `dist/` directory
- Test production build locally before deployment
- Deploy to Vercel or similar platform
