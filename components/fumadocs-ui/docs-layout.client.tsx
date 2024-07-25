'use client';

import { SidebarTrigger } from 'fumadocs-core/sidebar';
import { Menu, X } from 'lucide-react';
import { useSidebar } from '@fumadocs-ui/contexts/sidebar';
import { useSearchContext } from '@fumadocs-ui/contexts/search';
import { SearchToggle } from '@fumadocs-ui/components/layout/search-toggle';
import { cn } from '@fumadocs-ui/utils/cn';
import { buttonVariants } from '@fumadocs-ui/theme/variants';
import type { SharedNavProps } from '@fumadocs-ui/layout.shared';
import { NavBox, Title } from '@fumadocs-ui/components/layout/nav';

export function SubNav({
  title,
  url,
  transparentMode,
  children,
  enableSearch = true,
}: SharedNavProps): React.ReactElement {
  const { open } = useSidebar();
  const { enabled } = useSearchContext();

  return (
    <NavBox
      id='nd-subnav'
      className='flex h-14 flex-row items-center px-4 md:hidden'
      transparentMode={transparentMode}
    >
      <Title url={url} title={title} />
      <div className='flex flex-1 flex-row items-center'>{children}</div>
      {enabled && enableSearch ? <SearchToggle /> : null}
      <SidebarTrigger
        className={cn(
          buttonVariants({
            color: 'ghost',
            size: 'icon',
            className: '-me-2',
          })
        )}
      >
        {open ? <X /> : <Menu />}
      </SidebarTrigger>
    </NavBox>
  );
}

export { LinksMenu } from '@fumadocs-ui/components/layout/link-item';
export { Sidebar } from './components/layout/sidebar';
export { TreeContextProvider } from '@fumadocs-ui/contexts/tree';
export { ThemeToggle } from './components/layout/theme-toggle';
