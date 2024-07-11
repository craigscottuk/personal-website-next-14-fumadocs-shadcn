import {
  hasActive
} from "./chunk-IIDV3RNQ.js";

// src/contexts/tree.tsx
import { usePathname } from "next/navigation";
import { createContext, useContext, useMemo } from "react";
import { jsx } from "react/jsx-runtime";
var TreeContext = createContext(void 0);
function findRoot(items, pathname) {
  for (const item of items) {
    if (item.type === "folder") {
      const root = findRoot(item.children, pathname);
      if (root) return root;
      if (item.root === true && hasActive(item.children, pathname)) {
        return item;
      }
    }
  }
}
function getNavigationList(tree) {
  return tree.flatMap((node) => {
    if (node.type === "separator") return [];
    if (node.type === "folder") {
      const children = getNavigationList(node.children);
      if (!node.root && node.index) children.unshift(node.index);
      return children;
    }
    return !node.external ? [node] : [];
  });
}
function TreeContextProvider({
  children,
  tree
}) {
  const pathname = usePathname();
  const value = useMemo(() => {
    const root = findRoot(tree.children, pathname) ?? tree;
    const navigation = getNavigationList(root.children);
    return {
      root,
      navigation,
      tree
    };
  }, [pathname, tree]);
  return /* @__PURE__ */ jsx(TreeContext.Provider, { value, children });
}
function useTreeContext() {
  const ctx = useContext(TreeContext);
  if (!ctx)
    throw new Error("You must wrap this component under <DocsLayout />");
  return ctx;
}

export {
  TreeContextProvider,
  useTreeContext
};
