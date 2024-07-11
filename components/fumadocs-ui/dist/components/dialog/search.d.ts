import { SortedResult } from 'fumadocs-core/search/shared';
import { ReactNode } from 'react';

type SearchLink = [name: string, href: string];
interface SharedProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    /**
     * Custom links to be displayed if search is empty
     */
    links?: SearchLink[];
}
interface SearchDialogProps extends SharedProps, Omit<SearchContentProps, 'defaultItems'> {
    footer?: ReactNode;
}
interface SearchContentProps {
    search: string;
    onSearchChange: (v: string) => void;
    results: SortedResult[] | 'empty';
    defaultItems?: SortedResult[];
}
declare function SearchDialog({ open, onOpenChange, footer, links, ...props }: SearchDialogProps): React.ReactElement;

export { SearchDialog, type SearchLink, type SharedProps };
