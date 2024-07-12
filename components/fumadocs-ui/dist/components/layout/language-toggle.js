"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "../../chunk-GHKJ6EFT.js";
import {
  useI18n
} from "../../chunk-HLGNIWUN.js";
import {
  buttonVariants
} from "../../chunk-VUIQ7ZYI.js";
import {
  twMerge
} from "../../chunk-TK3TM3MR.js";
import "../../chunk-MLKGABMK.js";

// src/components/layout/language-toggle.tsx
import { useState } from "react";
import { LanguagesIcon } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
function LanguageToggle(props) {
  const context = useI18n();
  const [open, setOpen] = useState(false);
  if (!context.translations) throw new Error("Missing `<I18nProvider />`");
  const languages = Object.entries(context.translations);
  return /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, ...props, children: [
    /* @__PURE__ */ jsx(
      PopoverTrigger,
      {
        "aria-label": context.text.chooseLanguage,
        className: twMerge(buttonVariants({ size: "icon", color: "ghost" })),
        children: /* @__PURE__ */ jsx(LanguagesIcon, {})
      }
    ),
    /* @__PURE__ */ jsxs(PopoverContent, { className: "flex flex-col p-1", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-1 p-2 text-xs font-medium text-muted-foreground", children: context.text.chooseLanguage }),
      languages.map(([lang, { name }]) => /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: twMerge(
            "rounded-md p-2 text-left text-sm transition-colors duration-100",
            lang === context.locale ? "bg-primary/10 font-medium text-primary" : "hover:bg-accent hover:text-accent-foreground"
          ),
          onClick: () => {
            context.onChange?.(lang);
          },
          children: name
        },
        lang
      ))
    ] })
  ] });
}
export {
  LanguageToggle
};
