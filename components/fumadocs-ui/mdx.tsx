import Link from 'fumadocs-core/link';
import type {
  AnchorHTMLAttributes,
  FC,
  HTMLAttributes,
  ImgHTMLAttributes,
  TableHTMLAttributes,
} from 'react';
import NextImage from 'next/image';
import type { ImageProps } from 'next/image';
import { Card, Cards } from '@fumadocs-ui/components/card';
import { Heading } from '@fumadocs-ui/components/heading';
import { defaultImageSizes } from '@fumadocs-ui/utils/shared';

// declare const { Pre }: typeof import('./mdx.client');
import { Pre } from './mdx.client';

function Image(props: ImgHTMLAttributes<HTMLImageElement>): React.ReactElement {
  return <NextImage sizes={defaultImageSizes} {...(props as ImageProps)} />;
}

function Table(
  props: TableHTMLAttributes<HTMLTableElement>
): React.ReactElement {
  return (
    <div className='relative overflow-auto'>
      <table {...props} />
    </div>
  );
}

const defaultMdxComponents = {
  pre: Pre as FC<HTMLAttributes<HTMLPreElement>>,
  Card,
  Cards,
  a: Link as FC<AnchorHTMLAttributes<HTMLAnchorElement>>,
  img: Image,
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading as='h1' {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading as='h2' {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading as='h3' {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading as='h4' {...props} />
  ),
  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading as='h5' {...props} />
  ),
  h6: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading as='h6' {...props} />
  ),
  table: Table,
};

/**
 * **Server Component Only**
 *
 * Sometimes, if you directly pass a client component to MDX Components, it will throw an error
 *
 * To solve this, you can re-create the component in a server component like: `(props) => <Component {...props} />`
 *
 * This function does that for you
 *
 * @param c - MDX Components
 * @returns MDX Components with re-created client components
 */
export function createComponents<
  Components extends Record<string, FC<unknown>>
>(c: Components): Components {
  const mapped = Object.entries(c).map(([k, V]) => {
    // Client components are empty objects
    return [
      k,
      Object.keys(V).length === 0 ? (props: object) => <V {...props} /> : V,
    ];
  });

  return Object.fromEntries(mapped) as Components;
}

export { defaultMdxComponents as default };
