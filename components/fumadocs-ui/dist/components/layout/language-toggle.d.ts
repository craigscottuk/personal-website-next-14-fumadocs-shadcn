import { PopoverProps } from '@radix-ui/react-popover';

type LanguageSelectProps = Omit<PopoverProps, 'open' | 'onOpenChange'>;
declare function LanguageToggle(props: LanguageSelectProps): React.ReactElement;

export { type LanguageSelectProps, LanguageToggle };
