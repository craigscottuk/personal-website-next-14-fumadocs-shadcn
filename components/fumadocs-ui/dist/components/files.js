"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "../chunk-7XPZOMJ2.js";
import {
  twMerge
} from "../chunk-TK3TM3MR.js";
import "../chunk-MLKGABMK.js";

// src/components/files.tsx
import { cva } from "class-variance-authority";
import { FileIcon, FolderIcon, FolderOpen } from "lucide-react";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var item = cva(
  "flex flex-row items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground [&_svg]:size-4"
);
function Files({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: twMerge("not-prose rounded-md border bg-card p-2", className),
      ...props,
      children: props.children
    }
  );
}
function File({
  name,
  icon = /* @__PURE__ */ jsx(FileIcon, {}),
  className,
  ...rest
}) {
  return /* @__PURE__ */ jsxs("div", { className: twMerge(item({ className })), ...rest, children: [
    icon,
    name
  ] });
}
function Folder({
  name,
  defaultOpen = false,
  ...props
}) {
  const [open, setOpen] = useState(defaultOpen);
  return /* @__PURE__ */ jsxs(Collapsible, { open, onOpenChange: setOpen, ...props, children: [
    /* @__PURE__ */ jsxs(CollapsibleTrigger, { className: twMerge(item({ className: "w-full" })), children: [
      open ? /* @__PURE__ */ jsx(FolderOpen, {}) : /* @__PURE__ */ jsx(FolderIcon, {}),
      name
    ] }),
    /* @__PURE__ */ jsx(CollapsibleContent, { children: /* @__PURE__ */ jsx("div", { className: "ms-2 flex flex-col border-l pl-2", children: props.children }) })
  ] });
}
export {
  File,
  Files,
  Folder
};
