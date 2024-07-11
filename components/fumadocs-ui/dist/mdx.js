import { Pre } from "./mdx.client"
import {
  defaultImageSizes
} from "./chunk-IIDV3RNQ.js";
import {
  Card,
  Cards
} from "./chunk-N3HFQZRE.js";
import {
  Heading
} from "./chunk-5CZEA2KX.js";
import "./chunk-TK3TM3MR.js";
import "./chunk-MLKGABMK.js";

// src/mdx.tsx
import Link from "fumadocs-core/link";
import NextImage from "next/image";
import { jsx } from "react/jsx-runtime";
function Image(props) {
  return /* @__PURE__ */ jsx(NextImage, { sizes: defaultImageSizes, ...props });
}
function Table(props) {
  return /* @__PURE__ */ jsx("div", { className: "relative overflow-auto", children: /* @__PURE__ */ jsx("table", { ...props }) });
}
var defaultMdxComponents = {
  pre: Pre,
  Card,
  Cards,
  a: Link,
  img: Image,
  h1: (props) => /* @__PURE__ */ jsx(Heading, { as: "h1", ...props }),
  h2: (props) => /* @__PURE__ */ jsx(Heading, { as: "h2", ...props }),
  h3: (props) => /* @__PURE__ */ jsx(Heading, { as: "h3", ...props }),
  h4: (props) => /* @__PURE__ */ jsx(Heading, { as: "h4", ...props }),
  h5: (props) => /* @__PURE__ */ jsx(Heading, { as: "h5", ...props }),
  h6: (props) => /* @__PURE__ */ jsx(Heading, { as: "h6", ...props }),
  table: Table
};
function createComponents(c) {
  const mapped = Object.entries(c).map(([k, V]) => {
    return [
      k,
      Object.keys(V).length === 0 ? (props) => /* @__PURE__ */ jsx(V, { ...props }) : V
    ];
  });
  return Object.fromEntries(mapped);
}
export {
  createComponents,
  defaultMdxComponents as default
};
