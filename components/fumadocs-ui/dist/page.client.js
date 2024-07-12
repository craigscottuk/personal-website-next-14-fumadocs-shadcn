"use client";
import {
  ScrollArea,
  ScrollViewport
} from "./chunk-VYTHQTZE.js";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "./chunk-GHKJ6EFT.js";
import {
  useTreeContext
} from "./chunk-R3M2OC5U.js";
import "./chunk-IIDV3RNQ.js";
import {
  useI18n
} from "./chunk-HLGNIWUN.js";
import {
  twMerge
} from "./chunk-TK3TM3MR.js";
import "./chunk-MLKGABMK.js";

// src/page.client.tsx
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight as ChevronRight2 } from "lucide-react";
import Link2 from "next/link";
import { usePathname as usePathname2 } from "next/navigation";
import { cva } from "class-variance-authority";

// src/components/layout/toc.tsx
import { ChevronDown, Text } from "lucide-react";
import * as Primitive from "fumadocs-core/toc-internal";
import {
  useCallback,
  useRef
} from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var TocProvider = Primitive.AnchorProvider;
function Toc({ items, header, footer }) {
  const { text } = useI18n();
  return /* @__PURE__ */ jsxs("div", { className: "sticky top-0 flex h-dvh w-[220px] shrink-0 flex-col gap-4 pe-2 pt-12 max-lg:hidden xl:w-[260px]", children: [
    header,
    /* @__PURE__ */ jsxs("h3", { className: "-mb-1 -ms-0.5 inline-flex items-center gap-1.5 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsx(Text, { className: "size-4" }),
      text.toc
    ] }),
    /* @__PURE__ */ jsx(TOCItems, { items }),
    footer
  ] });
}
function TocPopover({
  items,
  header,
  footer,
  ...props
}) {
  const { text } = useI18n();
  return /* @__PURE__ */ jsxs(Popover, { children: [
    /* @__PURE__ */ jsxs(PopoverTrigger, { ...props, children: [
      /* @__PURE__ */ jsx(Text, { className: "size-4" }),
      text.toc,
      /* @__PURE__ */ jsx(ChevronDown, { className: "ms-auto size-4 text-muted-foreground" })
    ] }),
    /* @__PURE__ */ jsxs(
      PopoverContent,
      {
        hideWhenDetached: true,
        alignOffset: 16,
        align: "start",
        side: "bottom",
        className: "flex max-h-[80vh] w-[260px] flex-col gap-4 p-3",
        children: [
          header,
          /* @__PURE__ */ jsx(TOCItems, { items, isMenu: true }),
          footer
        ]
      }
    )
  ] });
}
function TOCItems({
  items,
  isMenu = false
}) {
  const { text } = useI18n();
  const containerRef = useRef(null);
  const markerRef = useRef(null);
  const setPos = useCallback(([top, height]) => {
    const element = markerRef.current;
    if (!element || containerRef.current?.clientHeight === 0) return;
    element.style.setProperty("top", `${top.toString()}px`);
    element.style.setProperty("height", `${height.toString()}px`);
    element.style.setProperty("display", "block");
  }, []);
  if (items.length === 0)
    return /* @__PURE__ */ jsx("div", { className: "rounded-lg border bg-card p-3 text-xs text-muted-foreground", children: text.tocNoHeadings });
  return /* @__PURE__ */ jsx(ScrollArea, { className: twMerge("flex flex-col", isMenu && "-mx-3"), children: /* @__PURE__ */ jsxs(ScrollViewport, { className: "relative min-h-0 text-sm", ref: containerRef, children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        role: "none",
        ref: markerRef,
        className: "absolute start-0 hidden w-0.5 bg-primary transition-all"
      }
    ),
    /* @__PURE__ */ jsx(Primitive.ScrollProvider, { containerRef, children: /* @__PURE__ */ jsx(
      "div",
      {
        className: twMerge(
          "flex flex-col gap-1 text-muted-foreground",
          !isMenu && "border-s-2"
        ),
        children: items.map((item) => /* @__PURE__ */ jsx(TOCItem2, { item, setMarker: setPos }, item.url))
      }
    ) })
  ] }) });
}
function TOCItem2({
  item,
  setMarker
}) {
  const ref = useRef(null);
  return /* @__PURE__ */ jsx(
    Primitive.TOCItem,
    {
      ref,
      href: item.url,
      onActiveChange: (active) => {
        const element = ref.current;
        if (active && element)
          setMarker([element.offsetTop, element.clientHeight]);
      },
      className: twMerge(
        "py-1 transition-colors data-[active=true]:font-medium data-[active=true]:text-primary",
        item.depth <= 2 && "ps-4",
        item.depth === 3 && "ps-7",
        item.depth >= 4 && "ps-10"
      ),
      children: item.title
    }
  );
}

// src/components/layout/breadcrumb.tsx
import { ChevronRight } from "lucide-react";
import { useBreadcrumb } from "fumadocs-core/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function Breadcrumb({
  full = false,
  ...options
}) {
  const { root } = useTreeContext();
  const pathname = usePathname();
  const items = useBreadcrumb(pathname, root, {
    includePage: full,
    ...options
  });
  return /* @__PURE__ */ jsx2(
    "div",
    {
      className: twMerge(
        "-mb-3 flex flex-row items-center gap-1 text-sm font-medium text-muted-foreground",
        items.length === 0 && "hidden"
      ),
      children: items.map((item, i) => /* @__PURE__ */ jsxs2(Fragment, { children: [
        i !== 0 && /* @__PURE__ */ jsx2(ChevronRight, { className: "size-4 shrink-0 rtl:rotate-180" }),
        item.url ? /* @__PURE__ */ jsx2(
          Link,
          {
            href: item.url,
            className: "truncate hover:text-accent-foreground",
            children: item.name
          }
        ) : /* @__PURE__ */ jsx2("span", { className: "truncate", children: item.name })
      ] }, i))
    }
  );
}

// src/page.client.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function LastUpdate(props) {
  const { text } = useI18n();
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(props.date.toLocaleDateString());
  }, [props.date]);
  return /* @__PURE__ */ jsxs3("p", { className: "text-xs text-muted-foreground", children: [
    text.lastUpdate,
    " ",
    date
  ] });
}
var itemVariants = cva(
  "flex w-full flex-col gap-2 rounded-lg border bg-card p-4 text-sm transition-colors hover:bg-accent/80 hover:text-accent-foreground"
);
var itemLabel = cva("inline-flex items-center gap-0.5 text-muted-foreground");
function Footer({ items }) {
  const tree = useTreeContext();
  const pathname = usePathname2();
  const { text } = useI18n();
  const { previous = items?.previous, next = items?.next } = useMemo(() => {
    const idx = tree.navigation.findIndex((item) => item.url === pathname);
    return {
      previous: tree.navigation[idx - 1],
      next: tree.navigation[idx + 1]
    };
  }, [pathname, tree.navigation]);
  return /* @__PURE__ */ jsxs3("div", { className: "grid grid-cols-2 gap-4 pb-6", children: [
    previous ? /* @__PURE__ */ jsxs3(Link2, { href: previous.url, className: twMerge(itemVariants()), children: [
      /* @__PURE__ */ jsxs3("div", { className: twMerge(itemLabel()), children: [
        /* @__PURE__ */ jsx3(ChevronLeft, { className: "-ms-1 size-4 shrink-0 rtl:rotate-180" }),
        /* @__PURE__ */ jsx3("p", { children: text.previousPage })
      ] }),
      /* @__PURE__ */ jsx3("p", { className: "font-medium", children: previous.name })
    ] }) : null,
    next ? /* @__PURE__ */ jsxs3(
      Link2,
      {
        href: next.url,
        className: twMerge(itemVariants({ className: "col-start-2 text-end" })),
        children: [
          /* @__PURE__ */ jsxs3("div", { className: twMerge(itemLabel({ className: "flex-row-reverse" })), children: [
            /* @__PURE__ */ jsx3(ChevronRight2, { className: "-me-1 size-4 shrink-0 rtl:rotate-180" }),
            /* @__PURE__ */ jsx3("p", { children: text.nextPage })
          ] }),
          /* @__PURE__ */ jsx3("p", { className: "font-medium", children: next.name })
        ]
      }
    ) : null
  ] });
}
export {
  Breadcrumb,
  Footer,
  LastUpdate,
  Toc,
  TocPopover,
  TocProvider
};
