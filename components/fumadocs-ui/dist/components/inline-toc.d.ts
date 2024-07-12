import { TOCItemType } from 'fumadocs-core/server';

interface InlineTocProps {
    items: TOCItemType[];
    defaultOpen?: boolean;
}
declare function InlineTOC({ items, defaultOpen, }: InlineTocProps): React.ReactElement;

export { InlineTOC, type InlineTocProps };
