// src/contexts/sidebar.tsx
import {
  createContext,
  useContext,
  useState,
  useMemo,
  useRef,
  useEffect
} from "react";
import { usePathname } from "next/navigation";
import { SidebarProvider as BaseProvider } from "fumadocs-core/sidebar";
import { jsx } from "react/jsx-runtime";
var SidebarContext = createContext(void 0);
function useSidebar() {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("Missing root provider");
  return ctx;
}
function SidebarProvider({
  children
}) {
  const closeOnRedirect = useRef(false);
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (closeOnRedirect.current) {
      setOpen(false);
      closeOnRedirect.current = false;
    }
  }, [pathname]);
  return /* @__PURE__ */ jsx(
    SidebarContext.Provider,
    {
      value: useMemo(
        () => ({
          open,
          setOpen,
          collapsed,
          setCollapsed,
          closeOnRedirect
        }),
        [open, collapsed]
      ),
      children: /* @__PURE__ */ jsx(BaseProvider, { open, onOpenChange: setOpen, children })
    }
  );
}

export {
  useSidebar,
  SidebarProvider
};
