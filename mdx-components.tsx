import type { MDXComponents } from 'mdx/types';
import defaultComponents from 'components/fumadocs-ui/dist/mdx';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
  };
}
