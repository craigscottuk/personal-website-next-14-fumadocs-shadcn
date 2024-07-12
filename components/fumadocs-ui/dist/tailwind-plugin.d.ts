import * as tailwindcss_types_config from 'tailwindcss/types/config';
import { CSSRuleObject, PresetsConfig } from 'tailwindcss/types/config';

declare const presets: {
    purple: Preset;
    default: Preset;
    ocean: Preset;
    catppuccin: Preset;
    neutral: Preset;
    dusk: Preset;
};

interface DocsUIOptions {
    /**
     * Prefix of colors
     */
    prefix?: string;
    preset?: keyof typeof presets | Preset;
    /**
     * Keep code block background of theme
     *
     * @defaultValue false
     */
    keepCodeBlockBackground?: boolean;
}
type Keys = 'background' | 'foreground' | 'muted' | 'muted-foreground' | 'popover' | 'popover-foreground' | 'card' | 'card-foreground' | 'border' | 'primary' | 'primary-foreground' | 'secondary' | 'secondary-foreground' | 'accent' | 'accent-foreground' | 'ring';
type Theme = Record<Keys, string>;
interface Preset {
    light: Theme;
    dark: Theme;
    css?: CSSRuleObject;
}
declare const docsUi: {
    (options: DocsUIOptions): {
        handler: tailwindcss_types_config.PluginCreator;
        config?: Partial<tailwindcss_types_config.Config>;
    };
    __isOptionsFunction: true;
};
declare function createPreset(options?: DocsUIOptions): PresetsConfig;

export { type Preset, createPreset, docsUi, presets };
