import { TOCItemType } from 'fumadocs-core/server';
import * as Primitive from 'fumadocs-core/toc-internal';
import { ReactNode, ReactElement, ButtonHTMLAttributes } from 'react';
import { BreadcrumbOptions } from 'fumadocs-core/breadcrumb';

interface TOCProps {
    items: TOCItemType[];
    /**
     * Custom content in TOC container, before the main TOC
     */
    header?: ReactNode;
    /**
     * Custom content in TOC container, after the main TOC
     */
    footer?: ReactNode;
}
declare const TocProvider: typeof Primitive.AnchorProvider;
declare function Toc({ items, header, footer }: TOCProps): ReactElement;
declare function TocPopover({ items, header, footer, ...props }: TOCProps & ButtonHTMLAttributes<HTMLButtonElement>): ReactElement;

interface BreadcrumbProps extends Omit<BreadcrumbOptions, 'includePage'> {
    /**
     * Show the full path to the current page
     *
     * @defaultValue false
     */
    full?: boolean;
}
declare function Breadcrumb({ full, ...options }: BreadcrumbProps): React.ReactElement;

declare function LastUpdate(props: {
    date: Date;
}): React.ReactElement;
interface FooterProps {
    /**
     * Items including information for the next and previous page
     */
    items?: {
        previous?: {
            name: string;
            url: string;
        };
        next?: {
            name: string;
            url: string;
        };
    };
}
declare function Footer({ items }: FooterProps): React.ReactElement;

export { Breadcrumb, type BreadcrumbProps, Footer, type FooterProps, LastUpdate, type TOCProps, Toc, TocPopover, TocProvider };
