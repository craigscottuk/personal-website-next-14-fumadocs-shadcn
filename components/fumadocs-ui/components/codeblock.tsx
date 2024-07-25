'use client';
import { Check, Copy } from 'lucide-react';
import {
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
  forwardRef,
  useCallback,
  useRef,
} from 'react';
import { cn } from '@fumadocs-ui/utils/cn';
import {
  ScrollArea,
  ScrollBar,
  ScrollViewport,
} from '@fumadocs-ui/components/ui/scroll-area';
import { useCopyButton } from '@fumadocs-ui/utils/use-copy-button';
import { buttonVariants } from '@fumadocs-ui/theme/variants';

export type CodeBlockProps = HTMLAttributes<HTMLElement> & {
  /**
   * Icon of code block
   *
   * When passed as a string, it assumes the value is the HTML of icon
   */
  icon?: ReactNode;

  allowCopy?: boolean;
};

export const Pre = forwardRef<HTMLPreElement, HTMLAttributes<HTMLPreElement>>(
  ({ className, ...props }, ref) => {
    return (
      <pre ref={ref} className={cn('nd-codeblock p-4', className)} {...props}>
        {props.children}
      </pre>
    );
  }
);

Pre.displayName = 'Pre';

export const CodeBlock = forwardRef<HTMLElement, CodeBlockProps>(
  ({ title, allowCopy = true, icon, className, ...props }, ref) => {
    const areaRef = useRef<HTMLDivElement>(null);
    const onCopy = useCallback(() => {
      const pre = areaRef.current?.getElementsByTagName('pre').item(0);

      if (!pre) return;

      const clone = pre.cloneNode(true) as HTMLElement;
      clone.querySelectorAll('.nd-copy-ignore').forEach((node) => {
        node.remove();
      });

      void navigator.clipboard.writeText(clone.textContent ?? '');
    }, []);

    return (
      <figure
        ref={ref}
        className={cn(
          'not-prose group relative my-6 overflow-hidden rounded-lg border bg-secondary/50 text-sm',
          className
        )}
        {...props}
      >
        {title ? (
          <div className='flex flex-row items-center gap-2 border-b bg-muted px-4 py-1.5'>
            {icon ? (
              <div
                className='text-muted-foreground [&_svg]:size-3.5'
                {...(typeof icon === 'string'
                  ? {
                      dangerouslySetInnerHTML: { __html: icon },
                    }
                  : {
                      children: icon,
                    })}
              />
            ) : null}
            <figcaption className='flex-1 truncate text-muted-foreground'>
              {title}
            </figcaption>
            {allowCopy ? (
              <CopyButton className='-me-2' onCopy={onCopy} />
            ) : null}
          </div>
        ) : (
          allowCopy && (
            <CopyButton
              className='absolute right-2 top-2 z-[2] backdrop-blur-sm'
              onCopy={onCopy}
            />
          )
        )}
        <ScrollArea ref={areaRef} dir='ltr'>
          <ScrollViewport>{props.children}</ScrollViewport>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>
      </figure>
    );
  }
);

CodeBlock.displayName = 'CodeBlock';

function CopyButton({
  className,
  onCopy,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  onCopy: () => void;
}): ReactElement {
  const [checked, onClick] = useCopyButton(onCopy);

  return (
    <button
      type='button'
      className={cn(
        buttonVariants({
          color: 'ghost',
          className: 'transition-all group-hover:opacity-100',
        }),
        !checked && 'opacity-0',
        className
      )}
      aria-label='Copy Text'
      onClick={onClick}
      {...props}
    >
      <Check
        className={cn('size-3.5 transition-transform', !checked && 'scale-0')}
      />
      <Copy
        className={cn(
          'absolute size-3.5 transition-transform',
          checked && 'scale-0'
        )}
      />
    </button>
  );
}
