import {
  useCopyButton
} from "./chunk-2KMKNVSN.js";
import {
  buttonVariants
} from "./chunk-VUIQ7ZYI.js";
import {
  twMerge
} from "./chunk-TK3TM3MR.js";

// src/components/accordion.tsx
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Check, ChevronRight, LinkIcon } from "lucide-react";
import {
  forwardRef,
  useState,
  useEffect
} from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Accordions = forwardRef(({ type = "single", className, defaultValue, ...props }, ref) => {
  const [value, setValue] = useState(
    type === "single" ? defaultValue ?? "" : defaultValue ?? []
  );
  useEffect(() => {
    const id = window.location.hash.substring(1);
    if (id.length > 0)
      setValue((prev) => {
        return type === "single" ? id : [id, ...Array.isArray(prev) ? prev : []];
      });
  }, [type]);
  return (
    // @ts-expect-error -- Multiple types
    /* @__PURE__ */ jsx(
      AccordionPrimitive.Root,
      {
        type,
        ref,
        value,
        onValueChange: setValue,
        collapsible: true,
        className: twMerge(
          "divide-y divide-border overflow-hidden rounded-lg border bg-card",
          className
        ),
        ...props
      }
    )
  );
});
Accordions.displayName = "Accordions";
var Accordion = forwardRef(({ title, className, id, children, ...props }, ref) => {
  return /* @__PURE__ */ jsxs(
    AccordionPrimitive.Item,
    {
      ref,
      value: id ?? title,
      className: twMerge("group/accordion relative scroll-m-20", className),
      ...props,
      children: [
        /* @__PURE__ */ jsxs(
          AccordionPrimitive.Header,
          {
            id,
            className: "not-prose flex flex-row items-center font-medium text-foreground",
            children: [
              /* @__PURE__ */ jsxs(AccordionPrimitive.Trigger, { className: "flex flex-1 items-center gap-2 p-4 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", children: [
                /* @__PURE__ */ jsx(ChevronRight, { className: "-ms-1 size-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]/accordion:rotate-90" }),
                title
              ] }),
              id ? /* @__PURE__ */ jsx(CopyButton, { id }) : null
            ]
          }
        ),
        /* @__PURE__ */ jsx(AccordionPrimitive.Content, { className: "overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down", children: /* @__PURE__ */ jsx("div", { className: "p-4 pt-0 prose-no-margin", children }) })
      ]
    }
  );
});
function CopyButton({ id }) {
  const [checked, onClick] = useCopyButton(() => {
    const url = new URL(window.location.href);
    url.hash = id;
    void navigator.clipboard.writeText(url.toString());
  });
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      "aria-label": "Copy Link",
      className: twMerge(
        buttonVariants({
          color: "ghost",
          className: "text-muted-foreground me-2"
        })
      ),
      onClick,
      children: checked ? /* @__PURE__ */ jsx(Check, { className: "size-3.5" }) : /* @__PURE__ */ jsx(LinkIcon, { className: "size-3.5" })
    }
  );
}
Accordion.displayName = "Accordion";

export {
  Accordions,
  Accordion
};
