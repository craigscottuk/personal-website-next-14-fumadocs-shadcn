"use client";
import {
  useTreeContext
} from "../chunk-R3M2OC5U.js";
import "../chunk-IIDV3RNQ.js";
import {
  buttonVariants
} from "../chunk-VUIQ7ZYI.js";
import {
  twMerge
} from "../chunk-TK3TM3MR.js";
import "../chunk-MLKGABMK.js";

// src/components/roll-button.tsx
import { ChevronUp } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { jsx, jsxs } from "react/jsx-runtime";
function RollButton({
  percentage = 0.1
}) {
  const [show, setShow] = useState(false);
  const { navigation } = useTreeContext();
  const pathname = usePathname();
  const current = useMemo(
    () => navigation.find((item) => item.url === pathname),
    [pathname, navigation]
  );
  useEffect(() => {
    const listener = () => {
      const element = document.scrollingElement;
      if (!element) return;
      const nearTop = element.scrollHeight === element.clientHeight || element.scrollTop / (element.scrollHeight - element.clientHeight) < percentage;
      setShow(!nearTop);
    };
    listener();
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [percentage]);
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      "aria-label": "Scroll to Top",
      className: twMerge(
        buttonVariants({
          color: "secondary",
          className: "fixed top-[72px] [&_svg]:size-4 gap-1 left-1/2 translate-x-[-50%] z-10 shadow-md rounded-full transition-all md:top-12 lg:top-4"
        }),
        !show && "pointer-events-none translate-y-20 opacity-0"
      ),
      onClick: useCallback(() => {
        document.scrollingElement?.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, []),
      children: [
        current?.icon ?? /* @__PURE__ */ jsx(ChevronUp, {}),
        current?.name
      ]
    }
  );
}
export {
  RollButton
};
