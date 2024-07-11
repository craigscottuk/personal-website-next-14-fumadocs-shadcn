import * as react_jsx_runtime from 'react/jsx-runtime';
import { FC, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, TableHTMLAttributes } from 'react';
import { Card, Cards } from './components/card.js';
import 'fumadocs-core/link';

declare function Image(props: ImgHTMLAttributes<HTMLImageElement>): React.ReactElement;
declare function Table(props: TableHTMLAttributes<HTMLTableElement>): React.ReactElement;
declare const defaultMdxComponents: {
    pre: FC<HTMLAttributes<HTMLPreElement>>;
    Card: typeof Card;
    Cards: typeof Cards;
    a: FC<AnchorHTMLAttributes<HTMLAnchorElement>>;
    img: typeof Image;
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => react_jsx_runtime.JSX.Element;
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => react_jsx_runtime.JSX.Element;
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => react_jsx_runtime.JSX.Element;
    h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => react_jsx_runtime.JSX.Element;
    h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => react_jsx_runtime.JSX.Element;
    h6: (props: React.HTMLAttributes<HTMLHeadingElement>) => react_jsx_runtime.JSX.Element;
    table: typeof Table;
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
declare function createComponents<Components extends Record<string, FC<unknown>>>(c: Components): Components;

export { createComponents, defaultMdxComponents as default };
