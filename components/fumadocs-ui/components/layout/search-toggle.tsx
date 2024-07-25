import { type ButtonHTMLAttributes, useCallback } from 'react';
import { SearchIcon } from 'lucide-react';
import { useSearchContext } from '@fumadocs-ui/contexts/search';
import { useI18n } from '@fumadocs-ui/contexts/i18n';
import { cn } from '@fumadocs-ui/utils/cn';
import { buttonVariants } from '@fumadocs-ui/theme/variants';

export function SearchToggle(
  props: ButtonHTMLAttributes<HTMLButtonElement>
): React.ReactElement {
  const { setOpenSearch } = useSearchContext();

  return (
    <button
      type='button'
      className={cn(
        buttonVariants({
          size: 'icon',
          color: 'ghost',
          className: props.className,
        })
      )}
      data-search=''
      aria-label='Open Search'
      onClick={useCallback(() => {
        setOpenSearch(true);
      }, [setOpenSearch])}
    >
      <SearchIcon />
    </button>
  );
}

export function LargeSearchToggle(
  props: ButtonHTMLAttributes<HTMLButtonElement>
): React.ReactElement {
  const { hotKey, setOpenSearch } = useSearchContext();
  const { text } = useI18n();

  return (
    <button
      type='button'
      data-search-full=''
      {...props}
      className={cn(
        'inline-flex items-center gap-2 rounded-full border bg-secondary/50 p-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground',
        props.className
      )}
      onClick={useCallback(() => {
        setOpenSearch(true);
      }, [setOpenSearch])}
    >
      <SearchIcon className='ms-1 size-4' />
      {text.search}
      <div className='ms-auto inline-flex gap-0.5'>
        {hotKey.map((k, i) => (
          <kbd key={i} className='rounded-md border bg-background px-1.5'>
            {k.display}
          </kbd>
        ))}
      </div>
    </button>
  );
}
