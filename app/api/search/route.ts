import {
  // getCustomBikesPages,
  // getQuizPages,
  getBlogPages,
  getProjectsPages,
} from '@/app/source';
import { createSearchAPI } from 'fumadocs-core/search/server';

// Combine all pages from different sources
const allPages = [
  // ...getCustomBikesPages(),
  // ...getQuizPages(),
  ...getProjectsPages(),
  ...getBlogPages(),
];
const searchIndexes = allPages.map((page) => ({
  title: page.data.title,
  structuredData: page.data.exports.structuredData || null,
  id: page.url,
  url: page.url,
}));

export const { GET } = createSearchAPI('advanced', {
  indexes: searchIndexes,
});
