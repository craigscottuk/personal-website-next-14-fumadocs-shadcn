import { PageTree } from 'fumadocs-core/server';
import { ReactNode, HTMLAttributes } from 'react';

interface NavBoxProps {
    /**
     * Use transparent background
     *
     * @defaultValue none
     */
    transparentMode?: 'always' | 'top' | 'none';
}
interface TitleProps {
    title?: ReactNode;
    /**
     * Redirect url of title
     * @defaultValue '/'
     */
    url?: string;
}

interface BaseItem {
    /**
     * Restrict where the item is displayed
     *
     * @defaultValue 'all'
     */
    on?: 'menu' | 'nav' | 'all';
}
interface BaseLinkItem extends BaseItem {
    url: string;
    /**
     * When the item is marked as active
     *
     * @defaultValue 'url'
     */
    active?: 'url' | 'nested-url' | 'none';
    external?: boolean;
}
type LinkItemType = (BaseLinkItem & {
    type?: 'main';
    icon?: ReactNode;
    text: ReactNode;
}) | (BaseLinkItem & {
    type: 'icon' | 'secondary';
    /**
     * `aria-label` of icon button
     */
    label?: string;
    icon: ReactNode;
    text: ReactNode;
    /**
     * @defaultValue true
     */
    secondary?: boolean;
}) | (BaseLinkItem & {
    type: 'button';
    icon?: ReactNode;
    text: ReactNode;
    /**
     * @defaultValue false
     */
    secondary?: boolean;
}) | (BaseItem & {
    type: 'menu';
    icon?: ReactNode;
    text: ReactNode;
    items: LinkItemType[];
    /**
     * @defaultValue false
     */
    secondary?: boolean;
}) | (BaseItem & {
    type: 'custom';
    /**
     * @defaultValue false
     */
    secondary?: boolean;
    children: ReactNode;
});
interface LinksMenuProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    items: LinkItemType[];
    footer?: React.ReactNode;
}
declare function LinksMenu({ items, footer, ...props }: LinksMenuProps): React.ReactElement;

interface SidebarProps {
    items: LinkItemType[];
    /**
     * Open folders by default if their level is lower or equal to a specific level
     * (Starting from 1)
     *
     * @defaultValue 1
     */
    defaultOpenLevel?: number;
    /**
     * Customise each of the component
     */
    components?: Partial<Components>;
    banner?: React.ReactNode;
    bannerProps?: HTMLAttributes<HTMLDivElement>;
    footer?: React.ReactNode;
    footerProps?: HTMLAttributes<HTMLDivElement>;
}
interface Components {
    Item: React.FC<{
        item: PageTree.Item;
    }>;
    Folder: React.FC<{
        item: PageTree.Folder;
        level: number;
    }>;
    Separator: React.FC<{
        item: PageTree.Separator;
    }>;
}
declare function Sidebar({ footer, components, defaultOpenLevel, banner, items, aside, bannerProps, footerProps, }: SidebarProps & {
    aside?: HTMLAttributes<HTMLElement> & Record<string, unknown>;
}): React.ReactElement;

interface NavOptions extends SharedNavProps {
    enabled: boolean;
    component: ReactNode;
}
interface SharedNavProps extends TitleProps, NavBoxProps {
    /**
     * Show/hide search toggle
     *
     * Note: Enable/disable search from root provider instead
     */
    enableSearch?: boolean;
    children?: ReactNode;
}
interface SidebarOptions extends Omit<SidebarProps, 'items'> {
    enabled: boolean;
    component: ReactNode;
    collapsible: boolean;
}
interface BaseLayoutProps {
    /**
     * GitHub url
     */
    githubUrl?: string;
    links?: LinkItemType[];
    /**
     * Replace or disable navbar
     */
    nav?: Partial<NavOptions>;
    children?: ReactNode;
}
interface DocsLayoutProps extends BaseLayoutProps {
    tree: PageTree.Root;
    sidebar?: Partial<SidebarOptions>;
    containerProps?: HTMLAttributes<HTMLDivElement>;
    /**
     * Enable Language Switch
     *
     * @defaultValue false
     */
    i18n?: boolean;
}
declare function Layout({ nav, links, githubUrl, children, }: BaseLayoutProps): React.ReactElement;
declare function DocsLayout({ nav, githubUrl, sidebar: { enabled: sidebarEnabled, collapsible, component: sidebarReplace, ...sidebar }, links, containerProps, tree, i18n, children, }: DocsLayoutProps): React.ReactElement;

export { type BaseLayoutProps as B, type DocsLayoutProps as D, LinksMenu as L, type SidebarProps as S, type SharedNavProps as a, Sidebar as b, type LinkItemType as c, Layout as d, DocsLayout as e };
