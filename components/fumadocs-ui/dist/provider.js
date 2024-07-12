"use client";
import {
  useTreeContext
} from "./chunk-R3M2OC5U.js";
import "./chunk-IIDV3RNQ.js";
import {
  SidebarProvider,
  useSidebar
} from "./chunk-3F57TIUQ.js";
import {
  SearchProvider,
  useSearchContext
} from "./chunk-ET4TW6M5.js";
import {
  useI18n
} from "./chunk-HLGNIWUN.js";
import "./chunk-MLKGABMK.js";

// src/provider.tsx
import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";
import { DirectionProvider } from "@radix-ui/react-direction";
import { jsx } from "react/jsx-runtime";
var DefaultSearchDialog = dynamic(
  () => import("./components/dialog/search-default.js"),
  { ssr: false }
);
function RootProvider({
  children,
  dir,
  theme: { enabled = true, ...theme } = {},
  search
}) {
  let body = children;
  if (search?.enabled !== false)
    body = /* @__PURE__ */ jsx(SearchProvider, { SearchDialog: DefaultSearchDialog, ...search, children: body });
  if (enabled)
    body = /* @__PURE__ */ jsx(
      ThemeProvider,
      {
        attribute: "class",
        defaultTheme: "system",
        enableSystem: true,
        disableTransitionOnChange: true,
        ...theme,
        children: body
      }
    );
  return /* @__PURE__ */ jsx(DirectionProvider, { dir: dir ?? "ltr", children: /* @__PURE__ */ jsx(SidebarProvider, { children: body }) });
}
export {
  RootProvider,
  useI18n,
  useSearchContext,
  useSidebar,
  useTreeContext
};
