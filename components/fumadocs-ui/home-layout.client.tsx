'use client';

import { MoreVertical } from 'lucide-react';
import { useSearchContext } from '@fumadocs-ui/contexts/search';
import { useI18n } from '@fumadocs-ui/contexts/i18n';
import {
  LinkItem,
  type LinkItemType,
  LinksMenu,
} from '@fumadocs-ui/components/layout/link-item';
import {
  LargeSearchToggle,
  SearchToggle,
} from '@fumadocs-ui/components/layout/search-toggle';
import { ThemeToggle } from '@fumadocs-ui/components/layout/theme-toggle';
import { NavBox, Title } from '@fumadocs-ui/components/layout/nav';
import { cn } from '@fumadocs-ui/utils/cn';
import { buttonVariants } from '@fumadocs-ui/theme/variants';
import { isSecondary } from '@fumadocs-ui/utils/shared';
import type { SharedNavProps } from '@fumadocs-ui/layout.shared';

export function Nav({
  title,
  url,
  items,
  transparentMode,
  enableSearch = true,
  children,
}: SharedNavProps & { items: LinkItemType[] }): React.ReactElement {
  const search = useSearchContext();
  const { text } = useI18n();

  return (
    <NavBox id='nd-nav' className='h-14' transparentMode={transparentMode}>
      <nav className='mx-auto flex size-full max-w-container flex-row items-center gap-6 px-4'>
        <Title title={title} url={url} />
        {children}
        {items
          .filter((item) => !isSecondary(item))
          .map((item, i) => (
            <LinkItem key={i} item={item} className='text-sm max-lg:hidden' />
          ))}
        <div className='flex flex-1 flex-row items-center justify-end md:gap-2'>
          {enableSearch && search.enabled ? (
            <>
              <SearchToggle className='md:hidden' />
              <LargeSearchToggle className='w-full max-w-[240px] max-md:hidden' />
            </>
          ) : null}

          <ThemeToggle className='max-lg:hidden' />
          {items.filter(isSecondary).map((item, i) => (
            <LinkItem key={i} item={item} className='max-lg:hidden' />
          ))}

          <LinksMenu
            items={items}
            className={cn(
              buttonVariants({
                size: 'icon',
                color: 'ghost',
                className: '-me-2 lg:hidden',
              })
            )}
            footer={
              <div className='flex flex-row items-center justify-between px-2 pt-2'>
                <p className='font-medium text-muted-foreground'>
                  {text.chooseTheme}
                </p>
                <ThemeToggle />
              </div>
            }
          >
            <MoreVertical />
          </LinksMenu>
        </div>
      </nav>
    </NavBox>
  );
}
