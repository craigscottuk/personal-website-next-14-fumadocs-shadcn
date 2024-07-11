import { PageTree } from 'fumadocs-core/server';
import { ReactNode } from 'react';

interface TreeContextType {
    tree: PageTree.Root;
    navigation: PageTree.Item[];
    root: PageTree.Root | PageTree.Folder;
}
declare function TreeContextProvider({ children, tree, }: {
    tree: PageTree.Root;
    children: ReactNode;
}): React.ReactElement;
declare function useTreeContext(): TreeContextType;

export { TreeContextProvider as T, useTreeContext as u };
