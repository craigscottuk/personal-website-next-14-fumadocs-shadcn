// src/utils/shared.ts
var defaultImageSizes = "(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px";
function isActive(url, pathname, nested = true) {
  return url === pathname || nested && pathname.startsWith(`${url}/`);
}
function replaceOrDefault(obj, def) {
  if (obj?.enabled === false) return;
  if (obj?.component !== void 0) return obj.component;
  return def;
}
function hasActive(items, url) {
  return items.some((item) => {
    if (item.type === "page") {
      return item.url === url;
    }
    if (item.type === "folder")
      return item.index?.url === url || hasActive(item.children, url);
    return false;
  });
}
function isSecondary(item) {
  return "secondary" in item && item.secondary === true || item.type === "secondary" || item.type === "icon";
}

export {
  defaultImageSizes,
  isActive,
  replaceOrDefault,
  hasActive,
  isSecondary
};
