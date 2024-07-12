import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "./chunk-GHKJ6EFT.js";
import {
  isActive
} from "./chunk-IIDV3RNQ.js";
import {
  useSearchContext
} from "./chunk-ET4TW6M5.js";
import {
  useI18n
} from "./chunk-HLGNIWUN.js";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "./chunk-7XPZOMJ2.js";
import {
  buttonVariants,
  itemVariants
} from "./chunk-VUIQ7ZYI.js";
import {
  twMerge
} from "./chunk-TK3TM3MR.js";

// src/components/layout/search-toggle.tsx
import { useCallback } from "react";
import { SearchIcon } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
function SearchToggle(props) {
  const { setOpenSearch } = useSearchContext();
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: twMerge(
        buttonVariants({
          size: "icon",
          color: "ghost",
          className: props.className
        })
      ),
      "aria-label": "Open Search",
      onClick: useCallback(() => {
        setOpenSearch(true);
      }, [setOpenSearch]),
      children: /* @__PURE__ */ jsx(SearchIcon, {})
    }
  );
}
function LargeSearchToggle(props) {
  const { hotKey, setOpenSearch } = useSearchContext();
  const { text } = useI18n();
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      ...props,
      className: twMerge(
        "inline-flex items-center gap-2 rounded-full border bg-secondary/50 p-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
        props.className
      ),
      onClick: useCallback(() => {
        setOpenSearch(true);
      }, [setOpenSearch]),
      children: [
        /* @__PURE__ */ jsx(SearchIcon, { className: "ms-1 size-4" }),
        text.search,
        /* @__PURE__ */ jsx("div", { className: "ms-auto inline-flex gap-0.5", children: hotKey.map((k, i) => /* @__PURE__ */ jsx("kbd", { className: "rounded-md border bg-background px-1.5", children: k.display }, i)) })
      ]
    }
  );
}

// src/components/layout/nav.tsx
import Link from "fumadocs-core/link";
import {
  useEffect,
  useState
} from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
function NavBox({
  transparentMode = "none",
  ...props
}) {
  const [transparent, setTransparent] = useState(transparentMode !== "none");
  useEffect(() => {
    if (transparentMode !== "top") return;
    const listener = () => {
      setTransparent(window.scrollY < 10);
    };
    listener();
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [transparentMode]);
  return /* @__PURE__ */ jsx2(
    "header",
    {
      ...props,
      className: twMerge(
        "sticky top-0 z-50 border-b transition-colors",
        transparent ? "border-transparent" : "border-foreground/10 bg-background/60 backdrop-blur-md",
        props.className
      )
    }
  );
}
function Title({ title, url = "/" }) {
  return /* @__PURE__ */ jsx2(Link, { href: url, className: "inline-flex items-center gap-2.5 font-semibold", children: title });
}

// src/components/layout/link-item.tsx
import Link2 from "fumadocs-core/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { cva } from "class-variance-authority";
import { useEffect as useEffect2, useState as useState2 } from "react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var linkItemVariants = cva(
  "-m-2 inline-flex items-center gap-1 p-2 text-muted-foreground transition-colors [&_svg]:size-4",
  {
    variants: {
      active: {
        true: "text-primary",
        false: "hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      active: false
    }
  }
);
function LinkItem({
  item,
  on = "nav",
  className,
  ...props
}) {
  const pathname = usePathname();
  if (item.on && item.on !== "all" && item.on !== on) return null;
  if (item.type === "custom") return item.children;
  if (item.type === "menu" && on === "nav") {
    return /* @__PURE__ */ jsxs2(
      LinksMenu,
      {
        items: item.items,
        className: twMerge(linkItemVariants({ className })),
        ...props,
        children: [
          item.icon,
          item.text,
          /* @__PURE__ */ jsx3(ChevronDown, { className: "ms-auto !size-3.5" })
        ]
      }
    );
  }
  if (item.type === "menu") {
    return /* @__PURE__ */ jsxs2(Collapsible, { className: "flex flex-col", children: [
      /* @__PURE__ */ jsxs2(
        CollapsibleTrigger,
        {
          className: twMerge(itemVariants({ className }), "group/link"),
          ...props,
          children: [
            item.icon,
            item.text,
            /* @__PURE__ */ jsx3(ChevronDown, { className: "ms-auto transition-transform group-data-[state=closed]/link:-rotate-90" })
          ]
        }
      ),
      /* @__PURE__ */ jsx3(CollapsibleContent, { children: /* @__PURE__ */ jsx3("div", { className: "ms-2 flex flex-col border-s py-2 ps-2", children: item.items.map((child, i) => /* @__PURE__ */ jsx3(LinkItem, { item: child, on: "menu" }, i)) }) })
    ] });
  }
  if (item.type === "button") {
    return /* @__PURE__ */ jsxs2(
      Link2,
      {
        href: item.url,
        external: item.external,
        className: twMerge(
          buttonVariants({ color: "secondary" }),
          "gap-1.5 [&_svg]:size-4",
          className
        ),
        children: [
          item.icon,
          item.text
        ]
      }
    );
  }
  const activeType = item.active ?? "url";
  const active = activeType !== "none" && isActive(item.url, pathname, activeType === "nested-url");
  if ((item.type === "secondary" || item.type === "icon") && on === "nav") {
    return /* @__PURE__ */ jsx3(
      Link2,
      {
        "aria-label": item.label,
        href: item.url,
        external: item.external,
        className: twMerge(
          buttonVariants({
            size: "icon",
            color: "ghost",
            className
          })
        ),
        ...props,
        children: item.icon
      }
    );
  }
  return /* @__PURE__ */ jsxs2(
    Link2,
    {
      href: item.url,
      external: item.external,
      className: twMerge(
        on === "nav" ? linkItemVariants({
          active
        }) : itemVariants({ active }),
        className
      ),
      ...props,
      children: [
        on === "menu" ? item.icon : null,
        item.text
      ]
    }
  );
}
function LinksMenu({
  items,
  footer,
  ...props
}) {
  const [open, setOpen] = useState2(false);
  const pathname = usePathname();
  useEffect2(() => {
    setOpen(false);
  }, [pathname]);
  return /* @__PURE__ */ jsxs2(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx3(PopoverTrigger, { ...props }),
    /* @__PURE__ */ jsxs2(PopoverContent, { className: "flex flex-col", children: [
      items.map((item, i) => /* @__PURE__ */ jsx3(LinkItem, { item, on: "menu" }, i)),
      footer
    ] })
  ] });
}

// src/components/layout/theme-toggle.tsx
import { cva as cva2 } from "class-variance-authority";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback as useCallback2 } from "react";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var buttonVariants2 = cva2("size-7 rounded-full p-1.5 text-muted-foreground", {
  variants: {
    dark: {
      true: "dark:bg-accent dark:text-accent-foreground",
      false: "bg-accent text-accent-foreground dark:bg-transparent dark:text-muted-foreground"
    }
  }
});
function ThemeToggle({
  className,
  ...props
}) {
  const { setTheme, resolvedTheme } = useTheme();
  const onToggle = useCallback2(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [setTheme, resolvedTheme]);
  return /* @__PURE__ */ jsxs3(
    "button",
    {
      type: "button",
      className: twMerge(
        "inline-flex items-center rounded-full border p-0.5",
        className
      ),
      "aria-label": "Toggle Theme",
      onClick: onToggle,
      ...props,
      children: [
        /* @__PURE__ */ jsx4(Sun, { className: twMerge(buttonVariants2({ dark: false })) }),
        /* @__PURE__ */ jsx4(Moon, { className: twMerge(buttonVariants2({ dark: true })) })
      ]
    }
  );
}

export {
  SearchToggle,
  LargeSearchToggle,
  NavBox,
  Title,
  LinkItem,
  LinksMenu,
  ThemeToggle
};
