"use client";
import {
  I18nContext,
  useI18n
} from "./chunk-HLGNIWUN.js";
import "./chunk-MLKGABMK.js";

// src/i18n.tsx
import { useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { jsx } from "react/jsx-runtime";
function I18nProvider({
  translations = {},
  ...props
}) {
  const context = useI18n();
  const router = useRouter();
  const segments = usePathname().split("/").filter((v) => v.length > 0);
  const locale = props.locale ?? segments[0];
  const onChange = useCallback(
    (v) => {
      if (segments[0] !== locale) {
        segments.unshift(v);
      } else {
        segments[0] = v;
      }
      router.push(`/${segments.join("/")}`);
    },
    [locale, segments, router]
  );
  return /* @__PURE__ */ jsx(
    I18nContext.Provider,
    {
      value: {
        locale,
        translations,
        text: {
          ...context.text,
          ...translations[locale]
        },
        onChange: props.onChange ?? onChange
      },
      children: props.children
    }
  );
}
export {
  I18nProvider
};
