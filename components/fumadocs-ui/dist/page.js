import {
  Toc,
  TocPopover,
  Breadcrumb,
  Footer,
  TocProvider,
  LastUpdate,
} from "./page.client"
import {
  replaceOrDefault
} from "./chunk-IIDV3RNQ.js";
import {
  twMerge
} from "./chunk-TK3TM3MR.js";
import "./chunk-MLKGABMK.js";

// src/page.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
function DocsPage({
  toc = [],
  tableOfContent = {},
  breadcrumb = {},
  tableOfContentPopover = {},
  lastUpdate,
  full = false,
  footer = {},
  ...props
}) {
  const tocOptions = {
    // disable TOC on full mode, you can still enable it with `enabled` option.
    enabled: tableOfContent.enabled ?? !full,
    ...tableOfContent
  };
  return /* @__PURE__ */ jsxs(TocProvider, { toc, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-1 flex-col", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: twMerge(
            "sticky top-14 z-10 border-b bg-background/60 text-sm font-medium backdrop-blur-md md:top-0 md:bg-card",
            !full && "lg:hidden"
          ),
          children: replaceOrDefault(
            tableOfContentPopover,
            /* @__PURE__ */ jsx(
              TocPopover,
              {
                items: toc,
                header: tableOfContentPopover.header,
                footer: tableOfContentPopover.footer,
                className: "inline-flex items-center gap-2 px-4 py-2 text-left max-md:size-full md:ps-6 md:text-muted-foreground"
              }
            )
          )
        }
      ),
      /* @__PURE__ */ jsxs(
        "article",
        {
          className: twMerge(
            "mx-auto flex w-full max-w-[840px] flex-1 flex-col gap-6 px-4 pt-10 md:px-6 md:pt-12",
            !tocOptions.enabled && "max-w-[1200px]"
          ),
          children: [
            replaceOrDefault(breadcrumb, /* @__PURE__ */ jsx(Breadcrumb, { full: breadcrumb.full })),
            props.children,
            /* @__PURE__ */ jsx("div", { className: "mt-auto" }),
            lastUpdate ? /* @__PURE__ */ jsx(LastUpdate, { date: new Date(lastUpdate) }) : null,
            replaceOrDefault(footer, /* @__PURE__ */ jsx(Footer, { items: footer.items }))
          ]
        }
      )
    ] }),
    replaceOrDefault(
      tocOptions,
      /* @__PURE__ */ jsx(
        Toc,
        {
          items: toc,
          header: tocOptions.header,
          footer: tocOptions.footer
        }
      )
    )
  ] });
}
var DocsBody = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: twMerge("prose", className), ...props }));
DocsBody.displayName = "DocsBody";
function withArticle({
  children
}) {
  return /* @__PURE__ */ jsx("main", { className: "container py-12", children: /* @__PURE__ */ jsx("article", { className: "prose", children }) });
}
export {
  DocsBody,
  DocsPage,
  withArticle
};
