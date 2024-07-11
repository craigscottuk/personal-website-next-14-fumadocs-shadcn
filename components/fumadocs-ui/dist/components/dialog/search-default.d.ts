import { ReactNode } from 'react';
import { SharedProps } from './search.js';
import 'fumadocs-core/search/shared';

interface DefaultSearchDialogProps extends SharedProps {
    /**
     * Search tag
     */
    tag?: string;
    /**
     * Search API URL
     */
    api?: string;
    /**
     * The debounced delay for performing a search.
     */
    delayMs?: number;
    footer?: ReactNode;
}
declare function DefaultSearchDialog({ tag, api, delayMs, ...props }: DefaultSearchDialogProps): React.ReactElement;

export { type DefaultSearchDialogProps, DefaultSearchDialog as default };
