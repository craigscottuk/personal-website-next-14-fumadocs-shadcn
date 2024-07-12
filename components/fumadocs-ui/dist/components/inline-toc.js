"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "../chunk-7XPZOMJ2.js";
import "../chunk-TK3TM3MR.js";
import "../chunk-MLKGABMK.js";

// src/components/inline-toc.tsx
import { ChevronDown } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
function InlineTOC({
  items,
  defaultOpen
}) {
  return /* @__PURE__ */ jsxs(
    Collapsible,
    {
      defaultOpen,
      className: "not-prose rounded-lg border bg-card text-card-foreground",
      children: [
        /* @__PURE__ */ jsxs(CollapsibleTrigger, { className: "inline-flex w-full items-center justify-between p-4 font-medium [&[data-state=open]>svg]:rotate-180", children: [
          "Table of Contents",
          /* @__PURE__ */ jsx(ChevronDown, { className: "size-4 transition-transform duration-200" })
        ] }),
        /* @__PURE__ */ jsx(CollapsibleContent, { children: /* @__PURE__ */ jsx("div", { className: "flex flex-col p-4 pt-0 text-sm text-muted-foreground", children: items.map((item) => /* @__PURE__ */ jsx(
          "a",
          {
            href: item.url,
            className: "border-l py-1.5 hover:text-accent-foreground",
            style: {
              paddingLeft: 12 * Math.max(item.depth - 1, 0)
            },
            children: item.title
          },
          item.url
        )) }) })
      ]
    }
  );
}
export {
  InlineTOC
};
