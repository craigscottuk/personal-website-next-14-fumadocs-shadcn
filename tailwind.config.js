import { createPreset } from 'fumadocs-ui/tailwind-plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
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
