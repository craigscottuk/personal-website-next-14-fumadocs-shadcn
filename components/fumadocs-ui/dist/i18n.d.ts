import { ReactNode } from 'react';
import { N as NamedTranslation } from './i18n-DSnJuWoW.js';
export { T as Translations } from './i18n-DSnJuWoW.js';

interface I18nProviderProps {
    /**
     * Force a locale, by default, it is parsed from pathname
     *
     * **Highly recommended to specify one**
     */
    locale?: string;
    /**
     * Translations for each language
     */
    translations?: Record<string, NamedTranslation>;
    /**
     * Handle changes to the locale, redirect user when not specified.
     */
    onChange?: (v: string) => void;
    children: ReactNode;
}
declare function I18nProvider({ translations, ...props }: I18nProviderProps): React.ReactElement;

export { I18nProvider };
