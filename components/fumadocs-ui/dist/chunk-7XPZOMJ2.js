import {
  twMerge
} from "./chunk-TK3TM3MR.js";

// src/components/ui/collapsible.tsx
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Collapsible = CollapsiblePrimitive.Root;
var CollapsibleTrigger2 = CollapsiblePrimitive.CollapsibleTrigger;
var CollapsibleContent2 = forwardRef(({ className, children, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    CollapsiblePrimitive.CollapsibleContent,
    {
      ref,
      className: twMerge(
        "overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",
        className
      ),
      ...props,
      children
    }
  );
});
CollapsibleContent2.displayName = CollapsiblePrimitive.CollapsibleContent.displayName;

export {
  Collapsible,
  CollapsibleTrigger2 as CollapsibleTrigger,
  CollapsibleContent2 as CollapsibleContent
};
