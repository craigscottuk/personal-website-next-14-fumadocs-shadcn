import { createPreset } from 'fumadocs-ui/tailwind-plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.mdx',
    './mdx-components.tsx',
    './node_modules/fumadocs-ui/dist/**/*.js',
    // './node_modules/fumadocs-openapi/dist/**/*.js',
  ],
  presets: [createPreset()], // createPreset() will override global.css
};

// createPreset({
//   preset: 'ocean',
//   prefix: 'custom', // Optional prefix for CSS variables
//   keepCodeBlockBackground: true,
// });

// default
// purple
// ocean
// catppuccin
// neutral
// dusk
