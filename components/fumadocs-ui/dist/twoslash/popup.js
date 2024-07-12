"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "../chunk-GHKJ6EFT.js";
import {
  twMerge
} from "../chunk-TK3TM3MR.js";
import "../chunk-MLKGABMK.js";

// src/twoslash/popup.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var PopupContext = React.createContext(
  void 0
);
function Popup({
  delay = 300,
  children
}) {
  const [open, setOpen] = React.useState(false);
  const openTimeoutRef = React.useRef();
  const closeTimeoutRef = React.useRef();
  const handleOpen = React.useCallback(
    (e) => {
      if (e.pointerType === "touch") return;
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      openTimeoutRef.current = window.setTimeout(() => {
        setOpen(true);
      }, delay);
    },
    [delay]
  );
  const handleClose = React.useCallback(
    (e) => {
      if (e.pointerType === "touch") return;
      if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
      closeTimeoutRef.current = window.setTimeout(() => {
        setOpen(false);
      }, delay);
    },
    [delay]
  );
  return /* @__PURE__ */ jsx(Popover, { open, onOpenChange: setOpen, children: /* @__PURE__ */ jsx(
    PopupContext.Provider,
    {
      value: React.useMemo(
        () => ({
          open,
          setOpen,
          handleOpen,
          handleClose
        }),
        [handleClose, handleOpen, open]
      ),
      children
    }
  ) });
}
var PopupTrigger = React.forwardRef((props, ref) => {
  const ctx = React.useContext(PopupContext);
  if (!ctx) throw new Error("Missing Popup Context");
  return /* @__PURE__ */ jsx(
    PopoverTrigger,
    {
      ref,
      onPointerEnter: ctx.handleOpen,
      onPointerLeave: ctx.handleClose,
      ...props
    }
  );
});
PopupTrigger.displayName = "PopupTrigger";
var PopupContent = React.forwardRef(({ className, ...props }, ref) => {
  const ctx = React.useContext(PopupContext);
  if (!ctx) throw new Error("Missing Popup Context");
  return /* @__PURE__ */ jsx(
    PopoverContent,
    {
      ref,
      onPointerEnter: ctx.handleOpen,
      onPointerLeave: ctx.handleClose,
      onCloseAutoFocus: (e) => {
        e.preventDefault();
      },
      className: twMerge("max-w-80", className),
      ...props
    }
  );
});
PopupContent.displayName = "PopupContent";
export {
  Popup,
  PopupContent,
  PopupTrigger
};
