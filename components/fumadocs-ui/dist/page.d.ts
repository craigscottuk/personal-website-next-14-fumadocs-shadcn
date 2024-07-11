import * as React$1 from 'react';
import { ReactNode, HTMLAttributes } from 'react';
import { TableOfContents } from 'fumadocs-core/server';
import { TOCProps, BreadcrumbProps, FooterProps } from './page.client.js';
import 'fumadocs-core/toc-internal';
import 'fumadocs-core/breadcrumb';

type TableOfContentOptions = Omit<TOCProps, 'items'> & {
    enabled: boolean;
    component: ReactNode;
};
interface BreadcrumbOptions extends BreadcrumbProps {
    enabled: boolean;
    component: ReactNode;
}
interface FooterOptions extends FooterProps {
    enabled: boolean;
    component: ReactNode;
}
interface DocsPageProps {
    toc?: TableOfContents;
    /**
     * Extend the page to fill all available space
     *
     * @defaultValue false
     */
    full?: boolean;
    tableOfContent?: Partial<TableOfContentOptions>;
    tableOfContentPopover?: Partial<TableOfContentOptions>;
    /**
     * Replace or disable breadcrumb
     */
    breadcrumb?: Partial<BreadcrumbOptions>;
    /**
     * Footer navigation, you can disable it by passing `false`
     */
    footer?: Partial<FooterOptions>;
    lastUpdate?: Date | string | number;
    children: ReactNode;
}
declare function DocsPage({ toc, tableOfContent, breadcrumb, tableOfContentPopover, lastUpdate, full, footer, ...props }: DocsPageProps): React.ReactElement;
/**
 * Add typography styles
 */
declare const DocsBody: React$1.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
/**
 * For separate MDX page
 */
declare function withArticle({ children, }: {
    children: React.ReactNode;
}): React.ReactElement;

export { DocsBody, DocsPage, type DocsPageProps, withArticle };
