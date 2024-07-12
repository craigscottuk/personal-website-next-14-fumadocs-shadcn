import {
  useSidebar
} from "./chunk-3F57TIUQ.js";
import {
  useSearchContext
} from "./chunk-ET4TW6M5.js";
import {
  useI18n
} from "./chunk-HLGNIWUN.js";
import {
  buttonVariants
} from "./chunk-VUIQ7ZYI.js";
import {
  twMerge
} from "./chunk-TK3TM3MR.js";

// src/components/dialog/search.tsx
import { FileTextIcon, HashIcon, TextIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useCallback } from "react";

// src/components/ui/command.tsx
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var CommandInput = React.forwardRef(({ className, onClose, ...props }, ref) => /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-2 px-3", children: [
  /* @__PURE__ */ jsx(Search, { className: "size-4 text-muted-foreground" }),
  /* @__PURE__ */ jsx(
    CommandPrimitive.Input,
    {
      ref,
      className: twMerge(
        "w-0 flex-1 bg-transparent py-3 text-base placeholder:text-muted-foreground focus-visible:outline-none",
        className
      ),
      ...props
    }
  ),
  /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      "aria-label": "Close Search",
      onClick: onClose,
      className: twMerge(
        buttonVariants({
          color: "outline",
          className: "text-xs p-1.5"
        })
      ),
      children: "Esc"
    }
  )
] }));
CommandInput.displayName = CommandPrimitive.Input.displayName;
var CommandList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  CommandPrimitive.List,
  {
    ref,
    className: twMerge("max-h-[460px] overflow-y-auto border-t p-2", className),
    ...props
  }
));
CommandList.displayName = CommandPrimitive.List.displayName;
var CommandEmpty = React.forwardRef((props, ref) => /* @__PURE__ */ jsx(
  CommandPrimitive.Empty,
  {
    ref,
    className: "py-12 text-center text-sm",
    ...props
  }
));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
var CommandGroup = React.forwardRef(({ className, heading, ...props }, ref) => /* @__PURE__ */ jsx(
  CommandPrimitive.Group,
  {
    ref,
    heading: heading ? /* @__PURE__ */ jsx("div", { className: "px-3 py-2 text-xs font-medium", children: heading }) : void 0,
    className: twMerge("overflow-hidden", className),
    ...props
  }
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;
var CommandSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  CommandPrimitive.Separator,
  {
    ref,
    className: twMerge("h-px bg-border", className),
    ...props
  }
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
var CommandItem = React.forwardRef(({ className, icon, nested = false, children, ...props }, ref) => /* @__PURE__ */ jsx(
  CommandPrimitive.Item,
  {
    ref,
    className: twMerge(
      "select-none rounded-lg px-2 text-sm aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-selected:bg-accent aria-selected:text-accent-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: twMerge(
          "flex min-h-10 flex-row items-center gap-3",
          nested && "ms-2 gap-2 border-s ps-4"
        ),
        children: [
          /* @__PURE__ */ jsx("div", { className: "text-muted-foreground [&_svg]:size-4", children: icon }),
          /* @__PURE__ */ jsx("p", { className: "w-0 flex-1 truncate", children })
        ]
      }
    )
  }
));
CommandItem.displayName = CommandPrimitive.Item.displayName;
var CommandDialog = React.forwardRef(({ footer, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  CommandPrimitive.Dialog,
  {
    ref,
    shouldFilter: false,
    loop: true,
    contentClassName: "fixed left-1/2 top-[10vh] z-50 w-[98vw] max-w-screen-sm origin-left -translate-x-1/2 rounded-lg border bg-popover text-popover-foreground shadow-lg data-[state=closed]:animate-dialog-out data-[state=open]:animate-dialog-in",
    overlayClassName: "fixed inset-0 z-50 bg-background/50 backdrop-blur-sm data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in",
    ...props,
    children: [
      children,
      footer ? /* @__PURE__ */ jsx("div", { className: "mt-auto flex flex-col border-t p-3", children: footer }) : null
    ]
  }
));
CommandDialog.displayName = CommandPrimitive.Dialog.displayName;

// src/components/dialog/search.tsx
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function SearchDialog({
  open,
  onOpenChange,
  footer,
  links = [],
  ...props
}) {
  const defaultItems = useMemo(
    () => links.map(([name, link]) => ({
      type: "page",
      id: name,
      content: name,
      url: link
    })),
    [links]
  );
  return /* @__PURE__ */ jsx2(CommandDialog, { open, onOpenChange, footer, children: /* @__PURE__ */ jsx2(Search2, { defaultItems, ...props }) });
}
var icons = {
  text: /* @__PURE__ */ jsx2(TextIcon, {}),
  heading: /* @__PURE__ */ jsx2(HashIcon, {}),
  page: /* @__PURE__ */ jsx2(FileTextIcon, {})
};
function Search2({
  search,
  onSearchChange,
  defaultItems = [],
  results
}) {
  const { text } = useI18n();
  const router = useRouter();
  const { setOpenSearch } = useSearchContext();
  const sidebar = useSidebar();
  const items = results === "empty" ? defaultItems : results;
  const hideList = results === "empty" && defaultItems.length === 0;
  const onOpen = (url) => {
    router.push(url);
    setOpenSearch(false);
    if (location.pathname === url.split("#")[0]) {
      sidebar.setOpen(false);
    } else {
      sidebar.closeOnRedirect.current = true;
    }
  };
  return /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsx2(
      CommandInput,
      {
        value: search,
        onValueChange: onSearchChange,
        onClose: useCallback(() => {
          setOpenSearch(false);
        }, [setOpenSearch]),
        placeholder: text.search
      }
    ),
    /* @__PURE__ */ jsxs2(CommandList, { className: twMerge(hideList && "hidden"), children: [
      /* @__PURE__ */ jsx2(CommandEmpty, { children: text.searchNoResult }),
      /* @__PURE__ */ jsx2(CommandGroup, { value: "result", children: items.map((item) => /* @__PURE__ */ jsx2(
        CommandItem,
        {
          value: item.id,
          onSelect: () => {
            onOpen(item.url);
          },
          icon: icons[item.type],
          nested: item.type !== "page",
          children: item.content
        },
        item.id
      )) })
    ] })
  ] });
}

export {
  SearchDialog
};
