import {
  twMerge
} from "./chunk-TK3TM3MR.js";

// src/components/card.tsx
import Link from "fumadocs-core/link";
import { jsx, jsxs } from "react/jsx-runtime";
function Cards(props) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ...props,
      className: twMerge("grid grid-cols-1 gap-4 sm:grid-cols-2", props.className),
      children: props.children
    }
  );
}
function Card({
  icon,
  title,
  description,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    Link,
    {
      ...props,
      className: twMerge(
        "not-prose block rounded-lg border bg-card p-4 text-sm text-card-foreground shadow-md transition-colors hover:bg-accent/80",
        props.className
      ),
      children: [
        icon ? /* @__PURE__ */ jsx("div", { className: "mb-2 w-fit rounded-md border bg-muted p-2 text-muted-foreground [&_svg]:size-4", children: icon }) : null,
        /* @__PURE__ */ jsx("h3", { className: "mb-1 font-medium", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: description })
      ]
    }
  );
}

export {
  Cards,
  Card
};
