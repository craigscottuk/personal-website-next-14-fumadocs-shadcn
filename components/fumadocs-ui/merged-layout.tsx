import type { PageTree } from 'fumadocs-core/server';
import type { ReactNode, HTMLAttributes } from 'react';
import Link from 'next/link';
import { MoreHorizontal } from 'lucide-react';
import dynamic from 'next/dynamic';
import { cn } from './utils/cn';
import { buttonVariants } from '@fumadocs-ui/theme/variants';
import type { SidebarProps } from '@fumadocs-ui/components/layout/sidebar';
import { replaceOrDefault } from './utils/shared';
import type { LinkItemType } from './components/layout/link-item';
import { type BaseLayoutProps, getLinks } from './layout.shared';

declare const { Nav }: typeof import('./home-layout.client');

import {
  TreeContextProvider,
  SubNav,
  LinksMenu,
  Sidebar,
  ThemeToggle,
} from '@fumadocs-ui/docs-layout.client';
import { HomeLayout } from './home-layout';
import { baseOptions, BaseOptions } from '@/app/layout.config';

// We can use dynamic imports to avoid loading a client component when they are not used
const LanguageToggle = dynamic(() =>
  import('./components/layout/language-toggle').then(
    (mod) => mod.LanguageToggle
  )
);

const DynamicSidebar = dynamic(() =>
  import('./components/layout/dynamic-sidebar').then(
    (mod) => mod.DynamicSidebar
  )
);

export type {
  LinkItemType,
  // TODO: Remove this (next major)
  /**
   * @deprecated Import `HomeLayoutProps` from `fumadocs-ui/home-layout` instead
   */
  BaseLayoutProps,
};

interface SidebarOptions extends Omit<SidebarProps, 'items'> {
  enabled: boolean;
  component: ReactNode;
  collapsible: boolean;
}

export interface MergedLayoutProps extends BaseLayoutProps {
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

// TODO: Remove this (next major)
/**
 * @deprecated Use `HomeLayout` from `fumadocs-ui/home-layout` instead
 */
export function Layout({
  nav = {},
  links = [],
  githubUrl,
  children,
}: BaseLayoutProps): React.ReactElement {
  const finalLinks = getLinks(links, githubUrl);

  return (
    <>
      {replaceOrDefault(
        nav,
        <Nav items={finalLinks} {...nav}>
          {nav.children}
        </Nav>
      )}
      {children}
    </>
  );
}

export function MergedLayout({
  nav,
  githubUrl,
  sidebar: {
    enabled: sidebarEnabled = true,
    collapsible = true,
    component: sidebarReplace,
    ...sidebar
  } = {},
  links = [],
  containerProps = {},
  tree,
  i18n = false,
  children,
}: MergedLayoutProps): React.ReactElement {
  const finalLinks = getLinks(links, githubUrl);
  const Aside = collapsible ? DynamicSidebar : Sidebar;

  return (
    <TreeContextProvider tree={tree}>
      <div className='flex flex-col min-h-screen'>
        {replaceOrDefault(nav, <SubNav {...nav} />)}

        <div className='flex flex-col flex-1'>
          {/* <div className='fixed top-0 left-0 right-0 z-10 h-8'>
            <HomeLayout {...baseOptions} />
          </div> */}
          <main
            id='nd-docs-layout'
            {...containerProps}
            className={cn('flex flex-1 flex-col', containerProps.className)}
          >
            <div className='flex flex-1'>
              {replaceOrDefault(
                { enabled: sidebarEnabled, component: sidebarReplace },
                <Aside
                  {...sidebar}
                  items={finalLinks}
                  banner={
                    <>
                      <div className='flex flex-row items-center justify-between border-b pb-2 max-md:hidden'>
                        <Link
                          href={nav?.url ?? '/'}
                          className='inline-flex items-center gap-2.5 font-medium'
                        >
                          {nav?.title}
                        </Link>
                        {finalLinks.length > 0 && (
                          <LinksMenu
                            items={finalLinks}
                            className={cn(
                              buttonVariants({
                                size: 'icon',
                                color: 'ghost',
                              })
                            )}
                          >
                            <MoreHorizontal />
                          </LinksMenu>
                        )}
                      </div>
                      {sidebar.banner}
                    </>
                  }
                  bannerProps={{
                    className: cn(
                      !sidebar.banner && 'max-md:hidden',
                      sidebar.bannerProps?.className
                    ),
                    ...sidebar.bannerProps,
                  }}
                  footer={
                    <>
                      <ThemeToggle className='me-auto' />
                      {sidebar.footer}
                      {i18n ? <LanguageToggle /> : null}
                    </>
                  }
                />
              )}
              {children}
            </div>
          </main>
        </div>
      </div>
    </TreeContextProvider>
  );
}
