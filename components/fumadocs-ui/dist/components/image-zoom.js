"use client";
import {
  defaultImageSizes
} from "../chunk-IIDV3RNQ.js";
import "../chunk-MLKGABMK.js";

// src/components/image-zoom.tsx
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "../../dist/image-zoom.css";
import { jsx } from "react/jsx-runtime";
function getImageSrc(src) {
  if (typeof src === "string") return src;
  if ("default" in src) return src.default.src;
  return src.src;
}
function ImageZoom({
  zoomInProps,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Zoom,
    {
      zoomMargin: 20,
      wrapElement: "span",
      zoomImg: {
        src: getImageSrc(props.src),
        sizes: void 0,
        ...zoomInProps
      },
      children: children ?? /* @__PURE__ */ jsx(Image, { sizes: defaultImageSizes, ...props })
    }
  );
}
export {
  ImageZoom
};
