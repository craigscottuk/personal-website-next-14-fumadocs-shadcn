import {
  LanguageToggle,
} from "./components/layout/language-toggle"
import {
  TreeContextProvider,
  DynamicSidebar,
  SubNav,
  LinksMenu,
  Sidebar,
  ThemeToggle,
} from "./docs.client"
import { Nav } from "./layout.client"
import {
  replaceOrDefault
} from "./chunk-IIDV3RNQ.js";
import {
  buttonVariants
} from "./chunk-VUIQ7ZYI.js";
import {
  twMerge
} from "./chunk-TK3TM3MR.js";
import "./chunk-MLKGABMK.js";

// src/layout.tsx
import Link from "next/link";
import { MoreHorizontal } from "lucide-react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function Layout({
  nav = {},
  links = [],
  githubUrl,
  children
}) {
  const finalLinks = getLinks(links, githubUrl);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    replaceOrDefault(
      nav,
      /* @__PURE__ */ jsx(Nav, { items: finalLinks, ...nav, children: nav.children })
    ),
    children
  ] });
}
function DocsLayout({
  nav,
  githubUrl,
  sidebar: {
    enabled: sidebarEnabled = true,
    collapsible = true,
    component: sidebarReplace,
    ...sidebar
  } = {},
  links = [],
  containerProps = {},
  tree,
  i18n = false,
  children
}) {
  const finalLinks = getLinks(links, githubUrl);
  const Aside = collapsible ? DynamicSidebar : Sidebar;
  return /* @__PURE__ */ jsxs(TreeContextProvider, { tree, children: [
    replaceOrDefault(nav, /* @__PURE__ */ jsx(SubNav, { ...nav })),
    /* @__PURE__ */ jsxs(
      "main",
      {
        id: "nd-docs-layout",
        ...containerProps,
        className: twMerge("flex flex-1 flex-row", containerProps.className),
        children: [
          replaceOrDefault(
            { enabled: sidebarEnabled, component: sidebarReplace },
            /* @__PURE__ */ jsx(
              Aside,
              {
                ...sidebar,
                items: finalLinks,
                banner: /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-between border-b pb-2 max-md:hidden", children: [
                    /* @__PURE__ */ jsx(
                      Link,
                      {
                        href: nav?.url ?? "/",
                        className: "inline-flex items-center gap-2.5 font-medium",
                        children: nav?.title
                      }
                    ),
                    finalLinks.length > 0 && /* @__PURE__ */ jsx(
                      LinksMenu,
                      {
                        items: finalLinks,
                        className: twMerge(
                          buttonVariants({
                            size: "icon",
                            color: "ghost"
                          })
                        ),
                        children: /* @__PURE__ */ jsx(MoreHorizontal, {})
                      }
                    )
                  ] }),
                  sidebar.banner
                ] }),
                bannerProps: {
                  className: twMerge(
                    !sidebar.banner && "max-md:hidden",
                    sidebar.bannerProps?.className
                  ),
                  ...sidebar.bannerProps
                },
                footer: /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(ThemeToggle, { className: "me-auto" }),
                  sidebar.footer,
                  i18n ? /* @__PURE__ */ jsx(LanguageToggle, {}) : null
                ] })
              }
            )
          ),
          children
        ]
      }
    )
  ] });
}
function getLinks(links, githubUrl) {
  let result = links ?? [];
  if (githubUrl)
    result = [
      ...result,
      {
        type: "secondary",
        url: githubUrl,
        text: "Github",
        icon: /* @__PURE__ */ jsx("svg", { role: "img", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" }) }),
        external: true
      }
    ];
  return result;
}
export {
  DocsLayout,
  Layout
};
