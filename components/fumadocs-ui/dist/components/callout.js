import {
  twMerge
} from "../chunk-TK3TM3MR.js";
import "../chunk-MLKGABMK.js";

// src/components/callout.tsx
import { AlertOctagon, AlertTriangle, Info } from "lucide-react";
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Callout = forwardRef(
  ({ className, children, title, type = "info", icon, ...props }, ref) => {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: twMerge(
          "my-6 flex flex-row gap-2 rounded-lg border bg-card p-3 text-sm text-muted-foreground shadow-md",
          className
        ),
        ...props,
        children: [
          icon ?? {
            info: /* @__PURE__ */ jsx(Info, { className: "size-5 fill-blue-500 text-card" }),
            warn: /* @__PURE__ */ jsx(AlertTriangle, { className: "size-5 fill-orange-500 text-card" }),
            error: /* @__PURE__ */ jsx(AlertOctagon, { className: "size-5 fill-red-500 text-card" })
          }[type],
          /* @__PURE__ */ jsxs("div", { className: "w-0 flex-1", children: [
            title ? /* @__PURE__ */ jsx("div", { className: "mb-2 font-medium text-card-foreground", children: title }) : null,
            /* @__PURE__ */ jsx("div", { className: "prose-no-margin", children })
          ] })
        ]
      }
    );
  }
);
Callout.displayName = "Callout";
export {
  Callout
};
