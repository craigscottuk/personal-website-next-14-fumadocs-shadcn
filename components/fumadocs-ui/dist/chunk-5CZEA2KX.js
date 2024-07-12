import {
  twMerge
} from "./chunk-TK3TM3MR.js";

// src/components/heading.tsx
import { LinkIcon } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
function Heading({
  as,
  className,
  ...props
}) {
  const As = as ?? "h1";
  return /* @__PURE__ */ jsx(As, { className: twMerge("scroll-m-20", className), ...props, children: props.id ? /* @__PURE__ */ jsxs("a", { href: `#${props.id}`, className: "group", children: [
    props.children,
    /* @__PURE__ */ jsx(
      LinkIcon,
      {
        "aria-label": "Link to section",
        className: "ms-2 inline size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
      }
    )
  ] }) : props.children });
}

export {
  Heading
};
