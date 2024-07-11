import {
  twMerge
} from "./chunk-TK3TM3MR.js";

// src/components/ui/scroll-area.tsx
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var ScrollArea = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  ScrollAreaPrimitive.Root,
  {
    ref,
    className: twMerge("overflow-hidden", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ScrollAreaPrimitive.Corner, {}),
      /* @__PURE__ */ jsx(ScrollBar, { orientation: "vertical" })
    ]
  }
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollViewport = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  ScrollAreaPrimitive.Viewport,
  {
    ref,
    className: twMerge("size-full rounded-[inherit]", className),
    ...props,
    children
  }
));
ScrollViewport.displayName = ScrollAreaPrimitive.Viewport.displayName;
var ScrollBar = React.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsx(
  ScrollAreaPrimitive.Scrollbar,
  {
    ref,
    orientation,
    className: twMerge(
      "flex select-none data-[state=hidden]:animate-fade-out",
      orientation === "vertical" && "h-full w-1.5",
      orientation === "horizontal" && "h-1.5 flex-col",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive.Scrollbar.displayName;

export {
  ScrollArea,
  ScrollViewport,
  ScrollBar
};
