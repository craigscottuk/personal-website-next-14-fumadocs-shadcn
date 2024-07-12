interface Translations {
    search: string;
    searchNoResult: string;
    toc: string;
    tocNoHeadings: string;
    lastUpdate: string;
    chooseLanguage: string;
    nextPage: string;
    previousPage: string;
    chooseTheme: string;
}
interface NamedTranslation extends Partial<Translations> {
    /**
     * The name of translation
     */
    name: string;
}
interface I18nContextType {
    locale?: string;
    onChange?: (v: string) => void;
    text: Translations;
    translations?: Record<string, NamedTranslation>;
}
declare function useI18n(): I18nContextType;

export { type NamedTranslation as N, type Translations as T, useI18n as u };
