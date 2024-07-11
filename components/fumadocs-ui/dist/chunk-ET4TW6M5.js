// src/contexts/search.tsx
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var SearchContext = createContext({
  enabled: false,
  hotKey: [],
  setOpenSearch: () => void 0
});
function useSearchContext() {
  return useContext(SearchContext);
}
function SearchProvider({
  SearchDialog,
  children,
  preload = true,
  options,
  hotKey = [
    {
      key: (e) => e.metaKey || e.ctrlKey,
      display: "\u2318"
    },
    {
      key: "k",
      display: "K"
    }
  ],
  links
}) {
  const [isOpen, setIsOpen] = useState(preload ? false : void 0);
  useEffect(() => {
    const handler = (e) => {
      if (hotKey.every(
        (v) => typeof v.key === "string" ? e.key === v.key : v.key(e)
      )) {
        setIsOpen(true);
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [hotKey]);
  return /* @__PURE__ */ jsxs(
    SearchContext.Provider,
    {
      value: useMemo(
        () => ({ enabled: true, hotKey, setOpenSearch: setIsOpen }),
        [hotKey]
      ),
      children: [
        isOpen !== void 0 && /* @__PURE__ */ jsx(
          SearchDialog,
          {
            open: isOpen,
            onOpenChange: setIsOpen,
            links,
            ...options
          }
        ),
        children
      ]
    }
  );
}

export {
  useSearchContext,
  SearchProvider
};
