import {
  type BaseLayoutProps,
  type DocsLayoutProps,
} from 'components/fumadocs-ui/dist/layout';
import { projectsPageTree, blogPageTree } from '@/app/source';
import { RootToggle } from 'components/fumadocs-ui/dist/components/layout/root-toggle.js';
import { cn } from 'lib/utils';
import { Bebas_Neue } from 'next/font/google';
import { Youtube } from 'lucide-react'; // Import YouTube icon

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
});

// Shared configuration for all layouts
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <Logo size='large' />, // Use large size for the default homepage
    url: '/',
  },
  links: [
    {
      type: 'menu',
      text: 'Projects',
      items: [
        {
          text: 'Custom Bikes',
          url: '/projects/custom-bikes-sheets-system',
          active: 'nested-url',
        },
        {
          text: 'Quiz',
          url: '/projects/quiz-react-app',
          active: 'nested-url',
        },
      ],
    },
    {
      text: 'Blog',
      url: '/blog',
      active: 'nested-url',
    },
    {
      text: 'About',
      url: '/about-me',
      active: 'nested-url',
    },
    {
      text: 'Contact',
      url: '/contact-me',
      active: 'nested-url',
    },
    {
      type: 'secondary',
      text: 'YouTube',
      url: 'https://youtube.com',
      icon: <Youtube />, // Use the YouTube icon component,
      external: true,
    },
  ],
  githubUrl: 'https://github.com/craigscottuk/',
};

// Docs layout configuration
export const docLayoutOptions: DocsLayoutProps = {
  ...baseOptions,
  nav: {
    ...baseOptions.nav,
    title: <Logo size='small' />, // Small size for docs pages
  },
  tree: projectsPageTree,
  sidebar: {
    defaultOpenLevel: 0,
    // banner: (
    //   <RootToggle
    //     options={[
    //       {
    //         title: 'Custom Bikes',
    //         description: 'Google Sheets OMS / CRM System',
    //         url: '/projects/custom-bikes-sheets-system',
    //         icon: <BikeIcon />, // Add an appropriate icon
    //       },
    //       {
    //         title: 'Quiz',
    //         description: 'React-based code project',
    //         url: '/projects/quiz-react-app',
    //         icon: <QuizIcon />, // Add an appropriate icon
    //       },
    //       {
    //         title: 'Blog',
    //         description: 'My stories, insights, ideas and curated playlists',
    //         url: '/projects/blog',
    //         icon: <QuizIcon />, // Add an appropriate icon
    //       },
    //     ]}
    //   />
    // ),
  },
};

// Projects layout configuration
export const projectsOptions: DocsLayoutProps = {
  ...docLayoutOptions,
  tree: projectsPageTree,
};

// Blog layout configuration
export const blogOptions: DocsLayoutProps = {
  ...docLayoutOptions,
  tree: blogPageTree,
};

// Components for custom icons
function Logo({ size }: { size: 'large' | 'small' }) {
  const textSize = size === 'large' ? 'text-[1.8rem]' : 'text-[1.6rem]';
  return (
    <h1 className={cn('block pt-2 leading-none', textSize, bebas.className)}>
      CRAIG SCOTT
    </h1>
  );
}

function BikeIcon() {
  return <div></div>; // Replace with actual SVG or component for bike icon
}

function QuizIcon() {
  return <div></div>; // Replace with actual SVG or component for quiz icon
}

function BlogIcon() {
  return <div></div>; // Replace with actual SVG or component for quiz icon
}
