import { SearchIndex } from 'algoliasearch/lite';
import { Options } from 'fumadocs-core/search-algolia/client';
import { ReactNode } from 'react';
import { SharedProps } from './search.js';
import 'fumadocs-core/search/shared';

interface AlgoliaSearchDialogProps extends SharedProps {
    index: SearchIndex;
    searchOptions?: Options;
    footer?: ReactNode;
}
declare function AlgoliaSearchDialog({ index, searchOptions, ...props }: AlgoliaSearchDialogProps): React.ReactElement;

export { type AlgoliaSearchDialogProps, AlgoliaSearchDialog as default };
