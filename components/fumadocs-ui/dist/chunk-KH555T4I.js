import {
  ScrollArea,
  ScrollBar,
  ScrollViewport
} from "./chunk-VYTHQTZE.js";
import {
  useCopyButton
} from "./chunk-2KMKNVSN.js";
import {
  buttonVariants
} from "./chunk-VUIQ7ZYI.js";
import {
  twMerge
} from "./chunk-TK3TM3MR.js";

// src/components/codeblock.tsx
import { Check, Copy } from "lucide-react";
import {
  forwardRef,
  useCallback,
  useRef
} from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Pre = forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx("pre", { ref, className: twMerge("nd-codeblock p-4", className), ...props, children: props.children });
  }
);
Pre.displayName = "Pre";
var CodeBlock = forwardRef(
  ({ title, allowCopy = true, icon, className, ...props }, ref) => {
    const areaRef = useRef(null);
    const onCopy = useCallback(() => {
      const pre = areaRef.current?.getElementsByTagName("pre").item(0);
      if (!pre) return;
      const clone = pre.cloneNode(true);
      clone.querySelectorAll(".nd-copy-ignore").forEach((node) => {
        node.remove();
      });
      void navigator.clipboard.writeText(clone.textContent ?? "");
    }, []);
    return /* @__PURE__ */ jsxs(
      "figure",
      {
        ref,
        className: twMerge(
          "not-prose group relative my-6 overflow-hidden rounded-lg border bg-secondary/50 text-sm",
          className
        ),
        ...props,
        children: [
          title ? /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-2 border-b bg-muted px-4 py-1.5", children: [
            icon ? /* @__PURE__ */ jsx(
              "div",
              {
                className: "text-muted-foreground [&_svg]:size-3.5",
                ...typeof icon === "string" ? {
                  dangerouslySetInnerHTML: { __html: icon }
                } : {
                  children: icon
                }
              }
            ) : null,
            /* @__PURE__ */ jsx("figcaption", { className: "flex-1 truncate text-muted-foreground", children: title }),
            allowCopy ? /* @__PURE__ */ jsx(CopyButton, { className: "-me-2", onCopy }) : null
          ] }) : allowCopy && /* @__PURE__ */ jsx(
            CopyButton,
            {
              className: "absolute right-2 top-2 z-[2] backdrop-blur-sm",
              onCopy
            }
          ),
          /* @__PURE__ */ jsxs(ScrollArea, { ref: areaRef, dir: "ltr", children: [
            /* @__PURE__ */ jsx(ScrollViewport, { children: props.children }),
            /* @__PURE__ */ jsx(ScrollBar, { orientation: "horizontal" })
          ] })
        ]
      }
    );
  }
);
CodeBlock.displayName = "CodeBlock";
function CopyButton({
  className,
  onCopy,
  ...props
}) {
  const [checked, onClick] = useCopyButton(onCopy);
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      className: twMerge(
        buttonVariants({
          color: "ghost",
          className: "transition-all group-hover:opacity-100"
        }),
        !checked && "opacity-0",
        className
      ),
      "aria-label": "Copy Text",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          Check,
          {
            className: twMerge("size-3.5 transition-transform", !checked && "scale-0")
          }
        ),
        /* @__PURE__ */ jsx(
          Copy,
          {
            className: twMerge(
              "absolute size-3.5 transition-transform",
              checked && "scale-0"
            )
          }
        )
      ]
    }
  );
}

export {
  Pre,
  CodeBlock
};
