"use client";
import {
  Accordion,
  Accordions
} from "../chunk-6JD7NGHG.js";
import "../chunk-2KMKNVSN.js";
import {
  Tab,
  Tabs
} from "../chunk-NUPTR2L5.js";
import "../chunk-VUIQ7ZYI.js";
import {
  twMerge
} from "../chunk-TK3TM3MR.js";
import "../chunk-MLKGABMK.js";

// src/components/api.tsx
import { cva } from "class-variance-authority";
import { jsx, jsxs } from "react/jsx-runtime";
function Root({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: twMerge(
        "flex flex-col gap-24 text-sm text-muted-foreground",
        className
      ),
      ...props,
      children
    }
  );
}
function API({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: twMerge(
        "flex flex-col gap-x-6 gap-y-2 xl:flex-row xl:items-start",
        className
      ),
      ...props,
      children
    }
  );
}
var badgeVariants = cva(
  "rounded-lg border px-1.5 py-1 text-xs font-medium leading-[12px]",
  {
    variants: {
      color: {
        green: "border-green-400/50 bg-green-400/20 text-green-600 dark:text-green-400",
        yellow: "border-yellow-400/50 bg-yellow-400/20 text-yellow-600 dark:text-yellow-400",
        red: "border-red-400/50 bg-red-400/20 text-red-600 dark:text-red-400",
        blue: "border-blue-400/50 bg-blue-400/20 text-blue-600 dark:text-blue-400",
        orange: "border-orange-400/50 bg-orange-400/20 text-orange-600 dark:text-orange-400"
      }
    }
  }
);
function APIInfo({
  children,
  className,
  method = "GET",
  route,
  ...props
}) {
  let color = "green";
  if (["GET", "HEAD"].includes(method)) color = "green";
  if (["PUT"].includes(method)) color = "yellow";
  if (["PATCH"].includes(method)) color = "orange";
  if (["POST"].includes(method)) color = "blue";
  if (["DELETE"].includes(method)) color = "red";
  return /* @__PURE__ */ jsxs("div", { className: twMerge("flex-1 prose-no-margin", className), ...props, children: [
    /* @__PURE__ */ jsxs("h2", { className: "flex flex-row items-center gap-3 rounded-lg border bg-card p-3 text-base", children: [
      /* @__PURE__ */ jsx("span", { className: twMerge(badgeVariants({ color })), children: method }),
      /* @__PURE__ */ jsx("code", { children: route })
    ] }),
    children
  ] });
}
function Property({
  name,
  type,
  required,
  deprecated,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "mb-4 flex flex-col rounded-lg border bg-card p-3 prose-no-margin", children: [
    /* @__PURE__ */ jsxs("h4", { className: "inline-flex items-center gap-4", children: [
      /* @__PURE__ */ jsx("code", { children: name }),
      required ? /* @__PURE__ */ jsx("div", { className: twMerge(badgeVariants({ color: "red" })), children: "Required" }) : null,
      deprecated ? /* @__PURE__ */ jsx("div", { className: twMerge(badgeVariants({ color: "yellow" })), children: "Deprecated" }) : null,
      /* @__PURE__ */ jsx("span", { className: "ms-auto font-mono text-[13px] text-muted-foreground", children: type })
    ] }),
    children
  ] });
}
function APIExample({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: twMerge("sticky top-6 prose-no-margin xl:w-[400px]", className),
      ...props,
      children
    }
  );
}
var Responses = Tabs;
var Response = Tab;
var Requests = Tabs;
var Request = Tab;
function ResponseTypes(props) {
  return /* @__PURE__ */ jsx(
    Accordions,
    {
      type: "single",
      className: "!-m-4 border-none pt-2",
      defaultValue: "Response",
      children: props.children
    }
  );
}
function ExampleResponse(props) {
  return /* @__PURE__ */ jsx(Accordion, { title: "Response", children: props.children });
}
function TypeScriptResponse(props) {
  return /* @__PURE__ */ jsx(Accordion, { title: "Typescript", children: props.children });
}
function ObjectCollapsible(props) {
  return /* @__PURE__ */ jsx(Accordions, { type: "single", children: /* @__PURE__ */ jsx(Accordion, { title: props.name, children: props.children }) });
}
export {
  API,
  APIExample,
  APIInfo,
  ExampleResponse,
  ObjectCollapsible,
  Property,
  Request,
  Requests,
  Response,
  ResponseTypes,
  Responses,
  Root,
  TypeScriptResponse
};
