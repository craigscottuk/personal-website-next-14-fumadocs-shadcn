"use client";
import {
  LargeSearchToggle,
  LinkItem,
  LinksMenu,
  NavBox,
  SearchToggle,
  ThemeToggle,
  Title
} from "./chunk-NZA3MCPM.js";
import {
  ScrollArea,
  ScrollViewport
} from "./chunk-VYTHQTZE.js";
import "./chunk-GHKJ6EFT.js";
import {
  TreeContextProvider,
  useTreeContext
} from "./chunk-R3M2OC5U.js";
import {
  hasActive,
  isActive
} from "./chunk-IIDV3RNQ.js";
import {
  useSidebar
} from "./chunk-3F57TIUQ.js";
import {
  useSearchContext
} from "./chunk-ET4TW6M5.js";
import "./chunk-HLGNIWUN.js";
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
import "./chunk-MLKGABMK.js";

// src/docs.client.tsx
import { SidebarTrigger } from "fumadocs-core/sidebar";
import { Menu, X } from "lucide-react";

// src/components/layout/sidebar.tsx
import { ChevronDown, ExternalLinkIcon } from "lucide-react";
import * as Base from "fumadocs-core/sidebar";
import { usePathname } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import Link from "fumadocs-core/link";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var defaultComponents = {
  Folder: FolderNode,
  Separator: SeparatorNode,
  Item: PageNode
};
var Context = createContext({
  defaultOpenLevel: 1,
  components: defaultComponents
});
function Sidebar({
  footer,
  components,
  defaultOpenLevel = 1,
  banner,
  items,
  aside,
  bannerProps,
  footerProps
}) {
  const search = useSearchContext();
  const context = useMemo(
    () => ({
      defaultOpenLevel,
      components: { ...defaultComponents, ...components }
    }),
    [components, defaultOpenLevel]
  );
  return /* @__PURE__ */ jsx(Context.Provider, { value: context, children: /* @__PURE__ */ jsxs(
    Base.SidebarList,
    {
      id: "nd-sidebar",
      blockScrollingWidth: 768,
      ...aside,
      className: twMerge(
        "fixed z-30 flex shrink-0 flex-col bg-card text-sm md:sticky md:top-0 md:h-dvh md:w-[240px] md:border-e xl:w-[260px]",
        "max-md:inset-0 max-md:bg-background/80 max-md:pt-14 max-md:text-[15px] max-md:backdrop-blur-md max-md:data-[open=false]:hidden",
        aside?.className
      ),
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            ...bannerProps,
            className: twMerge(
              "flex flex-col gap-2 px-4 pt-2 md:px-3 md:pt-4",
              bannerProps?.className
            ),
            children: [
              banner,
              search.enabled ? /* @__PURE__ */ jsx(LargeSearchToggle, { className: "rounded-lg max-md:hidden" }) : null
            ]
          }
        ),
        /* @__PURE__ */ jsx(ViewportContent, { children: items.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-col md:hidden", children: items.map((item, i) => /* @__PURE__ */ jsx(LinkItem, { item, on: "menu" }, i)) }) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            ...footerProps,
            className: twMerge(
              "flex flex-row items-center border-t px-4 pb-2 pt-1 md:px-3",
              footerProps?.className
            ),
            children: footer
          }
        )
      ]
    }
  ) });
}
function ViewportContent({
  children
}) {
  const { root } = useTreeContext();
  return /* @__PURE__ */ jsx(ScrollArea, { className: "flex-1", children: /* @__PURE__ */ jsx(
    ScrollViewport,
    {
      style: {
        maskImage: "linear-gradient(to bottom, transparent 2px, white 24px, white calc(100% - 24px), transparent calc(100% - 2px))"
      },
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8 px-4 py-6 md:px-3", children: [
        children,
        /* @__PURE__ */ jsx(NodeList, { items: root.children })
      ] })
    }
  ) });
}
function NodeList({
  items,
  level = 0,
  ...props
}) {
  const { components } = useContext(Context);
  return /* @__PURE__ */ jsx("div", { ...props, children: items.map((item, i) => {
    const id = `${item.type}_${i.toString()}`;
    switch (item.type) {
      case "separator":
        return /* @__PURE__ */ jsx(components.Separator, { item }, id);
      case "folder":
        return /* @__PURE__ */ jsx(components.Folder, { item, level: level + 1 }, id);
      default:
        return /* @__PURE__ */ jsx(components.Item, { item }, item.url);
    }
  }) });
}
function PageNode({
  item: { icon, external = false, url, name }
}) {
  const pathname = usePathname();
  const { closeOnRedirect } = useSidebar();
  const active = isActive(url, pathname, false);
  return /* @__PURE__ */ jsxs(
    Link,
    {
      href: url,
      external,
      className: twMerge(itemVariants({ active })),
      onClick: useCallback(() => {
        closeOnRedirect.current = !active;
      }, [closeOnRedirect, active]),
      children: [
        icon ?? (external ? /* @__PURE__ */ jsx(ExternalLinkIcon, {}) : null),
        name
      ]
    }
  );
}
function FolderNode({
  item: { name, children, index, icon, defaultOpen = false },
  level
}) {
  const { defaultOpenLevel } = useContext(Context);
  const { closeOnRedirect } = useSidebar();
  const pathname = usePathname();
  const active = index !== void 0 && isActive(index.url, pathname, false);
  const childActive = useMemo(
    () => hasActive(children, pathname),
    [children, pathname]
  );
  const shouldExtend = active || childActive || defaultOpenLevel >= level || defaultOpen;
  const [extend, setExtend] = useState(shouldExtend);
  useEffect(() => {
    if (shouldExtend) setExtend(true);
  }, [shouldExtend]);
  const onClick = useCallback(
    (e) => {
      if (e.target !== e.currentTarget || active) {
        setExtend((prev) => !prev);
        e.preventDefault();
      } else {
        closeOnRedirect.current = !active;
      }
    },
    [closeOnRedirect, active]
  );
  const content = /* @__PURE__ */ jsxs(Fragment, { children: [
    icon,
    name,
    /* @__PURE__ */ jsx(
      ChevronDown,
      {
        className: twMerge("ms-auto transition-transform", !extend && "-rotate-90")
      }
    )
  ] });
  return /* @__PURE__ */ jsxs(Collapsible, { open: extend, onOpenChange: setExtend, children: [
    index ? /* @__PURE__ */ jsx(
      Link,
      {
        className: twMerge(itemVariants({ active })),
        href: index.url,
        onClick,
        children: content
      }
    ) : /* @__PURE__ */ jsx(CollapsibleTrigger, { className: twMerge(itemVariants({ active })), children: content }),
    /* @__PURE__ */ jsx(CollapsibleContent, { children: /* @__PURE__ */ jsx(
      NodeList,
      {
        className: "ms-2 flex flex-col border-s py-2 ps-2",
        items: children,
        level
      }
    ) })
  ] });
}
function SeparatorNode({
  item
}) {
  return /* @__PURE__ */ jsx("p", { className: "mb-2 mt-8 px-2 font-medium first:mt-0", children: item.name });
}

// src/components/layout/dynamic-sidebar.tsx
import { useCallback as useCallback2, useRef, useState as useState2 } from "react";
import { SidebarIcon } from "lucide-react";
import { Fragment as Fragment2, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function DynamicSidebar(props) {
  const { collapsed, setCollapsed } = useSidebar();
  const [hover, setHover] = useState2(false);
  const timerRef = useRef(0);
  const closeTimeRef = useRef(0);
  const onCollapse = useCallback2(() => {
    setCollapsed((v) => !v);
    setHover(false);
    closeTimeRef.current = Date.now() + 150;
  }, [setCollapsed]);
  const onEnter = useCallback2((e) => {
    if (e.pointerType === "touch" || closeTimeRef.current > Date.now()) return;
    window.clearTimeout(timerRef.current);
    setHover(true);
  }, []);
  const onLeave = useCallback2((e) => {
    if (e.pointerType === "touch") return;
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(
      () => {
        setHover(false);
        closeTimeRef.current = Date.now() + 150;
      },
      Math.min(e.clientX, document.body.clientWidth - e.clientX) > 100 ? 0 : 500
    );
  }, []);
  return /* @__PURE__ */ jsxs2(Fragment2, { children: [
    collapsed ? /* @__PURE__ */ jsx2(
      "div",
      {
        className: "fixed inset-y-0 start-0 w-6 max-md:hidden xl:w-[50px]",
        onPointerEnter: onEnter,
        onPointerLeave: onLeave
      }
    ) : null,
    collapsed ? /* @__PURE__ */ jsx2(
      "button",
      {
        type: "button",
        "aria-label": "Collapse Sidebar",
        className: twMerge(
          buttonVariants({
            color: "secondary",
            size: "icon",
            className: "fixed start-4 bottom-2 z-10 max-md:hidden"
          })
        ),
        onClick: onCollapse,
        children: /* @__PURE__ */ jsx2(SidebarIcon, {})
      }
    ) : null,
    /* @__PURE__ */ jsx2(
      Sidebar,
      {
        ...props,
        aside: {
          "data-collapse": collapsed,
          "data-hover": hover,
          onPointerEnter: onEnter,
          onPointerLeave: onLeave,
          "aria-hidden": Boolean(collapsed && !hover),
          className: twMerge(
            "md:transition-[transform,margin]",
            collapsed && [
              "md:top-1 md:mr-[-240px] md:h-[calc(100dvh-4px)] md:animate-sidebar-collapse md:rounded-xl md:border md:shadow-md xl:mr-[-260px]",
              hover ? "md:translate-x-1 rtl:md:-translate-x-1" : "md:-translate-x-full rtl:md:translate-x-full"
            ]
          )
        },
        footer: /* @__PURE__ */ jsxs2(Fragment2, { children: [
          props.footer,
          /* @__PURE__ */ jsx2(
            "button",
            {
              type: "button",
              "aria-label": "Collapse Sidebar",
              className: twMerge(
                buttonVariants({
                  color: "ghost",
                  size: "icon",
                  className: "max-md:hidden"
                })
              ),
              onClick: onCollapse,
              children: /* @__PURE__ */ jsx2(SidebarIcon, {})
            }
          )
        ] })
      }
    )
  ] });
}

// src/docs.client.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function SubNav({
  title,
  url,
  transparentMode,
  children,
  enableSearch = true
}) {
  const { open } = useSidebar();
  const { enabled } = useSearchContext();
  return /* @__PURE__ */ jsxs3(
    NavBox,
    {
      id: "nd-subnav",
      className: "flex h-14 flex-row items-center px-4 md:hidden",
      transparentMode,
      children: [
        /* @__PURE__ */ jsx3(Title, { url, title }),
        /* @__PURE__ */ jsx3("div", { className: "flex flex-1 flex-row items-center", children }),
        enabled && enableSearch ? /* @__PURE__ */ jsx3(SearchToggle, {}) : null,
        /* @__PURE__ */ jsx3(
          SidebarTrigger,
          {
            className: twMerge(
              buttonVariants({
                color: "ghost",
                size: "icon",
                className: "-me-2"
              })
            ),
            children: open ? /* @__PURE__ */ jsx3(X, {}) : /* @__PURE__ */ jsx3(Menu, {})
          }
        )
      ]
    }
  );
}
export {
  DynamicSidebar,
  LinksMenu,
  Sidebar,
  SubNav,
  ThemeToggle,
  TreeContextProvider
};
