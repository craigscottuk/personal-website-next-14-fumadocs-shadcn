"use client";
import {
  buttonVariants
} from "../chunk-VUIQ7ZYI.js";
import {
  twMerge
} from "../chunk-TK3TM3MR.js";
import "../chunk-MLKGABMK.js";

// src/components/banner.tsx
import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
function Banner({
  id,
  ...props
}) {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    if (id) setOpen(localStorage.getItem(`nd-banner-${id}`) !== "true");
  }, [id]);
  const onClick = useCallback(() => {
    setOpen(false);
    if (id) localStorage.setItem(`nd-banner-${id}`, "true");
  }, [id]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id,
      ...props,
      className: twMerge(
        "relative flex h-12 flex-row items-center justify-center bg-secondary px-4 text-center text-sm font-medium",
        !open && "hidden",
        props.className
      ),
      suppressHydrationWarning: true,
      children: [
        id ? /* @__PURE__ */ jsx(
          "script",
          {
            dangerouslySetInnerHTML: {
              __html: `const ndBannerItem = localStorage.getItem('nd-banner-${id}');
   if (ndBannerItem === 'true') {
     document.getElementById('${id}').style.display = 'none';
   }`
            }
          }
        ) : null,
        props.children,
        id ? /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            "aria-label": "Close Banner",
            onClick,
            className: twMerge(
              buttonVariants({
                color: "ghost",
                className: "absolute end-2 top-1/2 -translate-y-1/2 text-muted-foreground",
                size: "icon"
              })
            ),
            children: /* @__PURE__ */ jsx(X, {})
          }
        ) : null
      ]
    }
  );
}
export {
  Banner
};
