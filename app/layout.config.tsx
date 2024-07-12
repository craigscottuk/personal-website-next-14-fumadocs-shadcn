import {
  type BaseLayoutProps,
  type DocsLayoutProps,
} from 'components/fumadocs-ui/dist/layout';
import {
  CustomBikesPageTree,
  projectQuizTree,
  blogPageTree,
} from '@/app/source';

// shared configuration
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'Craig Scott',
  },
  links: [
    {
      text: 'Custom Bikes',
      url: '/projects/custom-bikes-system',
      active: 'nested-url',
    },
    {
      text: 'Quiz',
      url: '/projects/quiz-react-app',
      active: 'nested-url',
    },
    {
      text: 'Blog',
      url: '/blog',
      active: 'nested-url',
    },
  ],
};

// projects layout configuration
export const projectCustomBikesOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: CustomBikesPageTree,
};

// blog layout configuration
export const projectQuizOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: projectQuizTree,
};
// blog layout configuration
export const blogOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: blogPageTree,
};
