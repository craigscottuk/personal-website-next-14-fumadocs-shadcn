"use client";
import {
  LargeSearchToggle,
  LinkItem,
  LinksMenu,
  NavBox,
  SearchToggle,
  ThemeToggle,
  Title
} from "./chunk-NZA3MCPM.js";
import "./chunk-GHKJ6EFT.js";
import {
  isSecondary
} from "./chunk-IIDV3RNQ.js";
import {
  useSearchContext
} from "./chunk-ET4TW6M5.js";
import {
  useI18n
} from "./chunk-HLGNIWUN.js";
import "./chunk-7XPZOMJ2.js";
import {
  buttonVariants
} from "./chunk-VUIQ7ZYI.js";
import {
  twMerge
} from "./chunk-TK3TM3MR.js";
import "./chunk-MLKGABMK.js";

// src/layout.client.tsx
import { MoreVertical } from "lucide-react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function Nav({
  title,
  url,
  items,
  transparentMode,
  enableSearch = true,
  children
}) {
  const search = useSearchContext();
  const { text } = useI18n();
  return /* @__PURE__ */ jsx(NavBox, { id: "nd-nav", className: "h-14", transparentMode, children: /* @__PURE__ */ jsxs("nav", { className: "mx-auto flex size-full max-w-container flex-row items-center gap-6 px-4", children: [
    /* @__PURE__ */ jsx(Title, { title, url }),
    children,
    items.filter((item) => !isSecondary(item)).map((item, i) => /* @__PURE__ */ jsx(LinkItem, { item, className: "text-sm max-lg:hidden" }, i)),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-row items-center justify-end md:gap-2", children: [
      enableSearch && search.enabled ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(SearchToggle, { className: "md:hidden" }),
        /* @__PURE__ */ jsx(LargeSearchToggle, { className: "w-full max-w-[240px] max-md:hidden" })
      ] }) : null,
      /* @__PURE__ */ jsx(ThemeToggle, { className: "max-lg:hidden" }),
      items.filter(isSecondary).map((item, i) => /* @__PURE__ */ jsx(LinkItem, { item, className: "max-lg:hidden" }, i)),
      /* @__PURE__ */ jsx(
        LinksMenu,
        {
          items,
          className: twMerge(
            buttonVariants({
              size: "icon",
              color: "ghost",
              className: "-me-2 lg:hidden"
            })
          ),
          footer: /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-between px-2 pt-2", children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium text-muted-foreground", children: text.chooseTheme }),
            /* @__PURE__ */ jsx(ThemeToggle, {})
          ] }),
          children: /* @__PURE__ */ jsx(MoreVertical, {})
        }
      )
    ] })
  ] }) });
}
export {
  Nav
};
