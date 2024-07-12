"use client";
import {
  SearchDialog
} from "../../chunk-BZ53GHJX.js";
import "../../chunk-3F57TIUQ.js";
import "../../chunk-ET4TW6M5.js";
import {
  useI18n
} from "../../chunk-HLGNIWUN.js";
import "../../chunk-VUIQ7ZYI.js";
import "../../chunk-TK3TM3MR.js";
import "../../chunk-MLKGABMK.js";

// src/components/dialog/search-default.tsx
import { useDocsSearch } from "fumadocs-core/search/client";
import { jsx } from "react/jsx-runtime";
function DefaultSearchDialog({
  tag,
  api,
  delayMs,
  ...props
}) {
  const { locale } = useI18n();
  const { search, setSearch, query } = useDocsSearch(locale, tag, api, delayMs);
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
  DefaultSearchDialog as default
};
