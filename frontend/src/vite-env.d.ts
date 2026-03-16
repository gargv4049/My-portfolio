/// <reference types="vite/client" />

// Allow importing image assets directly in TypeScript files.
// This prevents build errors like "Cannot find module './image.jpg' or its corresponding type declarations.".

declare module '*.avif'
declare module '*.bmp'
declare module '*.gif'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.webp'
declare module '*.svg'
