import { map } from '@/.map';
import { createMDXSource } from 'fumadocs-mdx';
import { loader, Source } from 'fumadocs-core/source';

// Loader for Custom Bikes
export const {
  getPage: getCustomBikesPage,
  getPages: getCustomBikesPages,
  pageTree: CustomBikesPageTree,
} = loader({
  baseUrl: '/projects/custom-bikes-system',
  rootDir: 'projects/custom-bikes',
  source: createMDXSource(map),
});

// Loader for Quiz
export const {
  getPage: getQuizPage,
  getPages: getQuizPages,
  pageTree: projectQuizTree,
} = loader({
  baseUrl: '/projects/quiz-react-app',
  rootDir: 'projects/quiz',
  source: createMDXSource(map),
});

// Loader for Blog
export const {
  getPage: getBlogPage,
  getPages: getBlogPages,
  pageTree: blogPageTree,
} = loader({
  baseUrl: '/blog',
  rootDir: 'blog',
  source: createMDXSource(map),
});
