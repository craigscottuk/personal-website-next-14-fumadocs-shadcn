"use client";
import {
  SearchDialog
} from "../../chunk-BZ53GHJX.js";
import "../../chunk-3F57TIUQ.js";
import "../../chunk-ET4TW6M5.js";
import "../../chunk-HLGNIWUN.js";
import "../../chunk-VUIQ7ZYI.js";
import "../../chunk-TK3TM3MR.js";
import "../../chunk-MLKGABMK.js";

// src/components/dialog/search-algolia.tsx
import {
  useAlgoliaSearch
} from "fumadocs-core/search-algolia/client";
import { jsx } from "react/jsx-runtime";
function AlgoliaSearchDialog({
  index,
  searchOptions,
  ...props
}) {
  const { search, setSearch, query } = useAlgoliaSearch(index, searchOptions);
  return /* @__PURE__ */ jsx(
    SearchDialog,
    {
      search,
      onSearchChange: setSearch,
      results: query.data ?? [],
      ...props
    }
  );
}
export {
  AlgoliaSearchDialog as default
};
