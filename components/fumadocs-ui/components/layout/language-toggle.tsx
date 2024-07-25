'use client';
import { useState } from 'react';
import type { PopoverProps } from '@radix-ui/react-popover';
import { LanguagesIcon } from 'lucide-react';
import { useI18n } from '@fumadocs-ui/contexts/i18n';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@fumadocs-ui/components/ui/popover';
import { cn } from '@fumadocs-ui/utils/cn';
import { buttonVariants } from '@fumadocs-ui/theme/variants';

export type LanguageSelectProps = Omit<PopoverProps, 'open' | 'onOpenChange'>;

export function LanguageToggle(props: LanguageSelectProps): React.ReactElement {
  const context = useI18n();
  const [open, setOpen] = useState(false);
  if (!context.translations) throw new Error('Missing `<I18nProvider />`');

  const languages = Object.entries(context.translations);

  return (
    <Popover open={open} onOpenChange={setOpen} {...props}>
      <PopoverTrigger
        aria-label={context.text.chooseLanguage}
        className={cn(buttonVariants({ size: 'icon', color: 'ghost' }))}
      >
        <LanguagesIcon />
      </PopoverTrigger>
      <PopoverContent className='flex flex-col p-1'>
        <p className='mb-1 p-2 text-xs font-medium text-muted-foreground'>
          {context.text.chooseLanguage}
        </p>
        {languages.map(([lang, { name }]) => (
          <button
            key={lang}
            type='button'
            className={cn(
              'rounded-md p-2 text-left text-sm transition-colors duration-100',
              lang === context.locale
                ? 'bg-primary/10 font-medium text-primary'
                : 'hover:bg-accent hover:text-accent-foreground'
            )}
            onClick={() => {
              context.onChange?.(lang);
            }}
          >
            {name}
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
}
