import {
  twMerge
} from "./chunk-TK3TM3MR.js";
import {
  __export
} from "./chunk-MLKGABMK.js";

// src/components/tabs.tsx
import {
  useEffect,
  useMemo,
  useState,
  useCallback
} from "react";

// src/components/ui/tabs.tsx
var tabs_exports = {};
__export(tabs_exports, {
  Tabs: () => Tabs,
  TabsContent: () => TabsContent,
  TabsList: () => TabsList,
  TabsTrigger: () => TabsTrigger
});
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var Tabs = React.forwardRef((props, ref) => {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Root,
    {
      ref,
      ...props,
      className: twMerge(
        "flex flex-col overflow-hidden rounded-xl border bg-card",
        props.className
      )
    }
  );
});
Tabs.displayName = "Tabs";
var TabsList = React.forwardRef((props, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.List,
  {
    ref,
    ...props,
    className: twMerge(
      "flex flex-row items-end gap-4 overflow-x-auto bg-secondary px-4 text-muted-foreground",
      props.className
    )
  }
));
TabsList.displayName = "TabsList";
var TabsTrigger = React.forwardRef((props, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Trigger,
  {
    ref,
    ...props,
    className: twMerge(
      "whitespace-nowrap border-b border-transparent py-2 text-sm font-medium transition-colors hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-primary data-[state=active]:text-primary",
      props.className
    )
  }
));
TabsTrigger.displayName = "TabsTrigger";
var TabsContent = React.forwardRef((props, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Content,
  {
    ref,
    ...props,
    className: twMerge("p-4", props.className)
  }
));
TabsContent.displayName = "TabsContent";

// src/components/tabs.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var listeners = /* @__PURE__ */ new Map();
function addChangeListener(id, listener) {
  const list = listeners.get(id) ?? [];
  list.push(listener);
  listeners.set(id, list);
}
function removeChangeListener(id, listener) {
  const list = listeners.get(id) ?? [];
  listeners.set(
    id,
    list.filter((item) => item !== listener)
  );
}
function update(id, v, persist) {
  listeners.get(id)?.forEach((item) => {
    item(v);
  });
  if (persist) localStorage.setItem(id, v);
  else sessionStorage.setItem(id, v);
}
function Tabs2({
  id,
  items = [],
  persist = false,
  defaultIndex = 0,
  children
}) {
  const values = useMemo(() => items.map((item) => toValue(item)), [items]);
  const [value, setValue] = useState(values[defaultIndex]);
  useEffect(() => {
    if (!id) return;
    const onUpdate = (v) => {
      if (values.includes(v)) setValue(v);
    };
    const previous = persist ? localStorage.getItem(id) : sessionStorage.getItem(id);
    if (previous) onUpdate(previous);
    addChangeListener(id, onUpdate);
    return () => {
      removeChangeListener(id, onUpdate);
    };
  }, [id, persist, values]);
  const onValueChange = useCallback(
    (v) => {
      if (id) {
        update(id, v, persist);
      } else {
        setValue(v);
      }
    },
    [id, persist]
  );
  return /* @__PURE__ */ jsxs(
    Tabs,
    {
      value,
      onValueChange,
      className: "my-4",
      children: [
        /* @__PURE__ */ jsx2(TabsList, { children: values.map((v, i) => /* @__PURE__ */ jsx2(TabsTrigger, { value: v, children: items[i] }, v)) }),
        children
      ]
    }
  );
}
function toValue(v) {
  return v.toLowerCase().replace(/\s/, "-");
}
function Tab({
  value,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx2(
    TabsContent,
    {
      value: toValue(value),
      className: twMerge(
        "prose-no-margin [&>figure:only-child]:-m-4 [&>figure:only-child]:rounded-none [&>figure:only-child]:border-none",
        className
      ),
      ...props
    }
  );
}

export {
  tabs_exports,
  Tabs2 as Tabs,
  Tab
};
