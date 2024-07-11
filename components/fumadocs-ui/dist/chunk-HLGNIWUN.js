// src/contexts/i18n.tsx
import { createContext, useContext } from "react";
var I18nContext = createContext({
  text: {
    search: "Search",
    searchNoResult: "No results found",
    toc: "On this page",
    tocNoHeadings: "No Headings",
    lastUpdate: "Last updated on",
    chooseLanguage: "Choose a language",
    nextPage: "Next",
    previousPage: "Previous",
    chooseTheme: "Theme"
  }
});
function useI18n() {
  return useContext(I18nContext);
}

export {
  I18nContext,
  useI18n
};
