import * as React$1 from 'react';
import { MutableRefObject, ReactNode } from 'react';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { DefaultSearchDialogProps } from './components/dialog/search-default.js';
import { SearchLink, SharedProps } from './components/dialog/search.js';
export { u as useI18n } from './i18n-DSnJuWoW.js';
export { u as useTreeContext } from './tree-CrKzI9Nz.js';
import 'fumadocs-core/search/shared';
import 'fumadocs-core/server';

interface HotKey {
    display: React.ReactNode;
    /**
     * Key code or a function determining whether the key is pressed.
     */
    key: string | ((e: KeyboardEvent) => boolean);
}
interface SearchProviderProps {
    /**
     * Preload search dialog before opening it
     *
     * @defaultValue `true`
     */
    preload?: boolean;
    /**
     * Custom links to be displayed if search is empty
     */
    links?: SearchLink[];
    /**
     * Hotkeys for triggering search dialog
     *
     * @defaultValue Meta/Ctrl + K
     */
    hotKey?: HotKey[];
    /**
     * Replace default search dialog, allowing you to use other solutions such as Algolia Search
     *
     * It receives the `open` and `onOpenChange` prop, can be lazy loaded with `next/dynamic`
     */
    SearchDialog: React.ComponentType<SharedProps>;
    /**
     * Additional props to the dialog
     */
    options?: Partial<SharedProps>;
    children?: React.ReactNode;
}
interface SearchContextType {
    enabled: boolean;
    hotKey: HotKey[];
    setOpenSearch: (value: boolean) => void;
}
declare function useSearchContext(): SearchContextType;

interface SidebarContext {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    collapsed: boolean;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
    /**
     * When set to true, close the sidebar on redirection
     */
    closeOnRedirect: MutableRefObject<boolean>;
}
declare const SidebarContext: React$1.Context<SidebarContext | undefined>;
declare function useSidebar(): SidebarContext;

interface SearchOptions extends Omit<SearchProviderProps, 'options' | 'children'> {
    options?: Partial<DefaultSearchDialogProps> | SearchProviderProps['options'];
    /**
     * Enable search functionality
     *
     * @defaultValue `true`
     */
    enabled?: boolean;
}
interface RootProviderProps {
    /**
     * `dir` option for Radix UI
     */
    dir?: 'rtl' | 'ltr';
    /**
     * @remarks `SearchProviderProps`
     */
    search?: Partial<SearchOptions>;
    /**
     * Customise options of `next-themes`
     */
    theme?: Partial<ThemeProviderProps> & {
        /**
         * Enable `next-themes`
         *
         * @defaultValue true
         */
        enabled?: boolean;
    };
    children: ReactNode;
}
declare function RootProvider({ children, dir, theme: { enabled, ...theme }, search, }: RootProviderProps): React.ReactElement;

export { RootProvider, type RootProviderProps, useSearchContext, useSidebar };
