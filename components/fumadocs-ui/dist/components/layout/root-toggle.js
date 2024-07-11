"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "../../chunk-GHKJ6EFT.js";
import {
  isActive
} from "../../chunk-IIDV3RNQ.js";
import {
  twMerge
} from "../../chunk-TK3TM3MR.js";
import "../../chunk-MLKGABMK.js";

// src/components/layout/root-toggle.tsx
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function RootToggle({
  options
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const selected = options.find((item) => isActive(item.url, pathname, true)) ?? options[0];
  return /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxs(PopoverTrigger, { className: "-mx-2 flex flex-row items-center gap-2.5 rounded-lg p-2 hover:bg-muted", children: [
      /* @__PURE__ */ jsx(Item, { ...selected }),
      /* @__PURE__ */ jsx(ChevronDown, { className: "size-4 text-muted-foreground md:me-1.5" })
    ] }),
    /* @__PURE__ */ jsx(PopoverContent, { className: "w-[var(--radix-popover-trigger-width)] overflow-hidden p-0", children: options.map((item) => /* @__PURE__ */ jsx(
      Link,
      {
        href: item.url,
        onClick: () => {
          setOpen(false);
        },
        className: twMerge(
          "flex w-full flex-row gap-2 p-2",
          selected === item ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"
        ),
        children: /* @__PURE__ */ jsx(Item, { ...item })
      },
      item.url
    )) })
  ] });
}
function Item({ title, icon, description }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    icon,
    /* @__PURE__ */ jsxs("div", { className: "flex-1 text-left", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: description })
    ] })
  ] });
}
export {
  RootToggle
};
