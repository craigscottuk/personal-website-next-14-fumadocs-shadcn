import {
  twMerge
} from "./chunk-TK3TM3MR.js";

// src/components/ui/popover.tsx
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    side: "bottom",
    className: twMerge(
      "z-50 min-w-[220px] max-w-[98vw] rounded-lg border bg-popover p-2 text-sm text-popover-foreground shadow-md outline-none data-[state=closed]:animate-popover-out data-[state=open]:animate-popover-in",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export {
  Popover,
  PopoverTrigger,
  PopoverContent
};
