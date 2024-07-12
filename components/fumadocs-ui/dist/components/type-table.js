"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "../chunk-GHKJ6EFT.js";
import {
  twMerge
} from "../chunk-TK3TM3MR.js";
import "../chunk-MLKGABMK.js";

// src/components/type-table.tsx
import { InfoIcon } from "lucide-react";
import Link from "next/link";
import { cva } from "class-variance-authority";
import { jsx, jsxs } from "react/jsx-runtime";
function Info({
  children
}) {
  return /* @__PURE__ */ jsxs(Popover, { children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { children: /* @__PURE__ */ jsx(InfoIcon, { className: "size-4" }) }),
    /* @__PURE__ */ jsx(PopoverContent, { className: "prose text-sm", children })
  ] });
}
var th = cva("p-2 font-medium first:pl-0 last:pr-0");
var td = cva("p-2 first:pl-0 last:pr-0");
var field = cva("inline-flex flex-row items-center gap-1");
var code = cva("rounded-md bg-secondary p-1 text-secondary-foreground", {
  variants: {
    color: { primary: "bg-primary/10 text-primary" }
  }
});
function TypeTable({
  type
}) {
  return /* @__PURE__ */ jsx("div", { className: "not-prose overflow-auto whitespace-nowrap", children: /* @__PURE__ */ jsxs("table", { className: "my-4 w-full text-left text-sm text-muted-foreground", children: [
    /* @__PURE__ */ jsx("thead", { className: "border-b", children: /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx("th", { className: twMerge(th(), "w-[45%]"), children: "Prop" }),
      /* @__PURE__ */ jsx("th", { className: twMerge(th(), "w-[30%]"), children: "Type" }),
      /* @__PURE__ */ jsx("th", { className: twMerge(th(), "w-1/4"), children: "Default" })
    ] }) }),
    /* @__PURE__ */ jsx("tbody", { className: "border-collapse divide-y divide-border", children: Object.entries(type).map(([key, value]) => /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx("td", { className: td(), children: /* @__PURE__ */ jsxs("div", { className: field(), children: [
        /* @__PURE__ */ jsx("code", { className: twMerge(code({ color: "primary" })), children: key }),
        value.description ? /* @__PURE__ */ jsx(Info, { children: value.description }) : null
      ] }) }),
      /* @__PURE__ */ jsx("td", { className: td(), children: /* @__PURE__ */ jsxs("div", { className: field(), children: [
        /* @__PURE__ */ jsx("code", { className: code(), children: value.type }),
        value.typeDescription ? /* @__PURE__ */ jsx(Info, { children: /* @__PURE__ */ jsx("pre", { className: "overflow-auto bg-secondary text-secondary-foreground", children: value.typeDescription }) }) : null,
        value.typeDescriptionLink ? /* @__PURE__ */ jsx(Link, { href: value.typeDescriptionLink, children: /* @__PURE__ */ jsx(InfoIcon, { className: "size-4" }) }) : null
      ] }) }),
      /* @__PURE__ */ jsx("td", { className: td(), children: value.default ? /* @__PURE__ */ jsx("code", { className: code(), children: value.default }) : /* @__PURE__ */ jsx("span", { children: "-" }) })
    ] }, key)) })
  ] }) });
}
export {
  Info,
  TypeTable
};
