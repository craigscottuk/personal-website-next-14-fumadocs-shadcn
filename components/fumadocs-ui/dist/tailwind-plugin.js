import "./chunk-MLKGABMK.js";

// src/tailwind-plugin.ts
import typography2 from "@tailwindcss/typography";
import plugin from "tailwindcss/plugin";

// src/theme/colors.ts
var defaultPreset = {
  light: {
    background: "0 0% 98%",
    foreground: "0 0% 3.9%",
    muted: "0 0% 96.1%",
    "muted-foreground": "0 0% 45.1%",
    popover: "0 0% 100%",
    "popover-foreground": "0 0% 15.1%",
    card: "0 0% 99.7%",
    "card-foreground": "0 0% 3.9%",
    border: "0 0% 89.8%",
    primary: "0 0% 9%",
    "primary-foreground": "0 0% 98%",
    secondary: "0 0% 96.1%",
    "secondary-foreground": "0 0% 9%",
    accent: "0 0% 94.1%",
    "accent-foreground": "0 0% 9%",
    ring: "0 0% 63.9%"
  },
  dark: {
    background: "0 0% 3.9%",
    foreground: "0 0% 94%",
    muted: "0 0% 12.9%",
    "muted-foreground": "0 0% 60.9%",
    popover: "0 0% 7%",
    "popover-foreground": "0 0% 88%",
    card: "0 0% 6.0%",
    "card-foreground": "0 0% 98%",
    border: "0 0% 18%",
    primary: "0 0% 98%",
    "primary-foreground": "0 0% 9%",
    secondary: "0 0% 12.9%",
    "secondary-foreground": "0 0% 98%",
    accent: "0 0% 12.9%",
    "accent-foreground": "0 0% 98%",
    ring: "0 0% 14.9%"
  }
};
var oceanPreset = {
  light: {
    background: "0 0% 98%",
    foreground: "0 0% 3.9%",
    muted: "220 90% 96.1%",
    "muted-foreground": "0 0% 45.1%",
    popover: "0 0% 98%",
    "popover-foreground": "0 0% 15.1%",
    card: "220 50% 98%",
    "card-foreground": "0 0% 3.9%",
    border: "220 50% 89.8%",
    primary: "210 80% 20.2%",
    "primary-foreground": "0 0% 98%",
    secondary: "220 90% 96.1%",
    "secondary-foreground": "0 0% 9%",
    accent: "220 50% 94.1%",
    "accent-foreground": "0 0% 9%",
    ring: "220 100% 63.9%"
  },
  dark: {
    "card-foreground": "220 60% 94.5%",
    "primary-foreground": "0 0% 9%",
    "secondary-foreground": "220 80% 90%",
    ring: "205 100% 85%",
    card: "220 50% 10%",
    muted: "220 50% 10%",
    "muted-foreground": "220 30% 65%",
    "accent-foreground": "220 80% 90%",
    popover: "220 50% 10%",
    "popover-foreground": "220 30% 65%",
    accent: "220 40% 20%",
    secondary: "220 50% 20%",
    background: "220 60% 6%",
    foreground: "220 60% 94.5%",
    primary: "205 100% 85%",
    border: "220 50% 20%"
  },
  css: {
    ".dark body": {
      "background-image": "linear-gradient(rgba(5, 105, 255, 0.15), transparent 20rem, transparent)"
    }
  }
};
var neutral = {
  light: {
    background: "0 0% 96%",
    foreground: "0 0% 3.9%",
    muted: "0 0% 96.1%",
    "muted-foreground": "0 0% 45.1%",
    popover: "0 0% 100%",
    "popover-foreground": "0 0% 15.1%",
    card: "0 0% 94.7%",
    "card-foreground": "0 0% 3.9%",
    border: "0 0% 89.8%",
    primary: "0 0% 9%",
    "primary-foreground": "0 0% 98%",
    secondary: "0 0% 93.1%",
    "secondary-foreground": "0 0% 9%",
    accent: "0 0% 90.1%",
    "accent-foreground": "0 0% 9%",
    ring: "0 0% 63.9%"
  },
  dark: {
    background: "0 0% 8.9%",
    foreground: "0 0% 92%",
    muted: "0 0% 12.9%",
    "muted-foreground": "0 0% 60.9%",
    popover: "0 0% 9.8%",
    "popover-foreground": "0 0% 88%",
    card: "0 0% 10%",
    "card-foreground": "0 0% 98%",
    border: "0 0% 18%",
    primary: "0 0% 98%",
    "primary-foreground": "0 0% 9%",
    secondary: "0 0% 12.9%",
    "secondary-foreground": "0 0% 98%",
    accent: "0 0% 16.9%",
    "accent-foreground": "0 0% 90%",
    ring: "0 0% 14.9%"
  },
  css: {
    "#nd-sidebar": {
      "--muted": "0deg 0% 89%",
      "--secondary": "0deg 0% 99%",
      "--muted-foreground": "0 0% 30%"
    },
    ".dark #nd-sidebar": {
      "--muted": "0deg 0% 16%",
      "--secondary": "0deg 0% 18%",
      "--muted-foreground": "0 0% 72%"
    }
  }
};
var catppuccin = {
  light: {
    popover: "220deg 22% 92%",
    "popover-foreground": "234deg 16% 35%",
    "secondary-foreground": "234deg 16% 35%",
    border: "223deg 16% 83%",
    primary: "266deg 85% 58%",
    "primary-foreground": "234deg 16% 35%",
    muted: "220deg 22% 92%",
    card: "220deg 22% 92%",
    accent: "223deg 16% 83%",
    "accent-foreground": "234deg 16% 35%",
    "card-foreground": "234deg 16% 35%",
    "muted-foreground": "233deg 10% 47%",
    foreground: "234deg 16% 35%",
    secondary: "220deg 22% 92%",
    background: "220deg 23% 95%",
    ring: "267deg 84% 81%"
  },
  dark: {
    ring: "267deg 84% 81%",
    primary: "267deg 84% 81%",
    background: "240deg 21% 15%",
    foreground: "226deg 64% 88%",
    popover: "240deg 23% 9%",
    card: "240deg 21% 12%",
    muted: "240deg 21% 12%",
    border: "237deg 16% 23%",
    accent: "237deg 16% 23%",
    secondary: "240deg 21% 12%",
    "primary-foreground": "240deg 23% 9%",
    "card-foreground": "226deg 64% 88%",
    "secondary-foreground": "226deg 64% 88%",
    "popover-foreground": "226deg 64% 88%",
    "accent-foreground": "226deg 64% 88%",
    "muted-foreground": "228deg 24% 72%"
  },
  css: {
    "#nd-sidebar": {
      "--secondary": "223deg 16% 83%",
      "--muted": "223deg 16% 83%"
    },
    ".dark #nd-sidebar": {
      "--secondary": "237deg 16% 23%",
      "--muted": "237deg 16% 23%"
    }
  }
};
var purple = {
  light: {
    background: "256 100% 96%",
    primary: "270 100% 52%",
    border: "270 40% 80%",
    accent: "270 60% 86%",
    "accent-foreground": "270 100% 20%",
    muted: "256 60% 94%",
    "muted-foreground": "256 50% 50%",
    foreground: "256 60% 26%",
    secondary: "270 60% 90%",
    "secondary-foreground": "256 60% 10%",
    card: "256 60% 92%",
    "card-foreground": "256 100% 20%",
    "popover-foreground": "256 100% 20%",
    popover: "256 60% 96%",
    "primary-foreground": "270 100% 20%",
    ring: "270 100% 52%"
  },
  dark: {
    background: "256 60% 6%",
    primary: "270 100% 86%",
    border: "270 100% 20%",
    accent: "256 60% 26%",
    "accent-foreground": "270 100% 86%",
    muted: "256 60% 10%",
    foreground: "256 60% 90%",
    "muted-foreground": "256 50% 75%",
    secondary: "270 100% 20%",
    "secondary-foreground": "256 60% 90%",
    card: "256 60% 10%",
    "card-foreground": "256 60% 90%",
    "popover-foreground": "256 60% 90%",
    popover: "256 60% 6%",
    "primary-foreground": "256 60% 6%",
    ring: "270 100% 86%"
  }
};
var dusk = {
  light: {
    background: "250 20% 92%",
    primary: "340 40% 48%",
    border: "240 40% 90%",
    accent: "250 30% 90%",
    "accent-foreground": "250 20% 20%",
    muted: "240 30% 94%",
    "muted-foreground": "240 10% 50%",
    foreground: "220 20% 30%",
    secondary: "250 40% 94%",
    "secondary-foreground": "240 40% 10%",
    card: "250 20% 92%",
    "card-foreground": "250 20% 20%",
    "popover-foreground": "250 40% 20%",
    popover: "250 40% 96%",
    "primary-foreground": "240 80% 20%",
    ring: "340 40% 48%"
  },
  dark: {
    ring: "340 100% 90%",
    "primary-foreground": "240 40% 4%",
    popover: "240 20% 5%",
    "popover-foreground": "250 20% 90%",
    primary: "340 100% 90%",
    border: "220 15% 15%",
    background: "220 15% 6%",
    foreground: "220 15% 87%",
    muted: "220 20% 15%",
    "muted-foreground": "220 15% 60%",
    accent: "250 20% 15%",
    secondary: "240 20% 15%",
    "card-foreground": "240 15% 87%",
    card: "240 20% 5%",
    "secondary-foreground": "250 20% 90%",
    "accent-foreground": "340 5% 90%"
  }
};
var presets = {
  purple,
  default: defaultPreset,
  ocean: oceanPreset,
  catppuccin,
  neutral,
  dusk
};

// src/theme/animations.ts
var animations = {
  keyframes: {
    "collapsible-down": {
      from: { height: "0", opacity: "0" },
      to: {
        height: "var(--radix-collapsible-content-height)"
      }
    },
    "collapsible-up": {
      from: {
        height: "var(--radix-collapsible-content-height)"
      },
      to: { height: "0", opacity: "0" }
    },
    "accordion-down": {
      from: { height: "0", opacity: "0.5" },
      to: { height: "var(--radix-accordion-content-height)" }
    },
    "accordion-up": {
      from: { height: "var(--radix-accordion-content-height)" },
      to: { height: "0", opacity: "0.5" }
    },
    "dialog-in": {
      from: { transform: "scale(0.95) translate(-50%, 0)", opacity: "0" },
      to: { transform: "scale(1) translate(-50%, 0)" }
    },
    "dialog-out": {
      from: { transform: "scale(1) translate(-50%, 0)" },
      to: { transform: "scale(0.95) translateY(-50%, 0)", opacity: "0" }
    },
    "popover-in": {
      from: { opacity: "0", transform: "scale(0.95) translateY(-10px)" },
      to: { opacity: "1", transform: "scale(1) translateY(0)" }
    },
    "popover-out": {
      from: { opacity: "1", transform: "scale(1) translateY(0)" },
      to: { opacity: "0", transform: "scale(0.95) translateY(-10px)" }
    },
    "sidebar-collapse": {
      // retain the current styles until collapsed
      "0%, 100%": {
        top: "0",
        height: "100dvh",
        "border-radius": "none"
      }
    },
    "fade-in": {
      from: { opacity: "0" },
      to: { opacity: "1" }
    },
    "fade-out": {
      to: { opacity: "0" }
    }
  },
  animation: {
    "fade-in": "fade-in 300ms ease",
    "fade-out": "fade-out 300ms ease",
    "dialog-in": "dialog-in 200ms cubic-bezier(0.32, 0.72, 0, 1)",
    "dialog-out": "dialog-out 300ms cubic-bezier(0.32, 0.72, 0, 1)",
    "popover-in": "popover-in 150ms ease",
    "popover-out": "popover-out 150ms ease",
    "collapsible-down": "collapsible-down 150ms ease-out",
    "collapsible-up": "collapsible-up 150ms ease-out",
    "accordion-down": "accordion-down 200ms ease-out",
    "accordion-up": "accordion-up 200ms ease-out",
    "sidebar-collapse": "sidebar-collapse 150ms"
  }
};

// src/theme/typography.ts
var typography = {
  css: {
    "--tw-prose-body": `theme('colors.foreground / 90%')`,
    "--tw-prose-headings": `theme('colors.foreground')`,
    "--tw-prose-lead": `theme('colors.foreground')`,
    "--tw-prose-links": `theme('colors.foreground')`,
    "--tw-prose-bold": `theme('colors.foreground')`,
    "--tw-prose-counters": `theme('colors.muted.foreground')`,
    "--tw-prose-bullets": `theme('colors.muted.foreground')`,
    "--tw-prose-hr": `theme('colors.border')`,
    "--tw-prose-quotes": `theme('colors.foreground')`,
    "--tw-prose-quote-borders": `theme('colors.border')`,
    "--tw-prose-captions": `theme('colors.foreground')`,
    "--tw-prose-code": `theme('colors.foreground')`,
    "--tw-prose-th-borders": `theme('colors.border')`,
    "--tw-prose-td-borders": `theme('colors.border')`,
    "--tw-prose-kbd": `theme('colors.foreground')`,
    "--tw-prose-kbd-shadows": `theme('colors.primary.DEFAULT / 50%')`,
    // not used
    "--tw-prose-pre-bg": false,
    "--tw-prose-pre-code": false,
    fontSize: "16px",
    maxWidth: "none",
    a: {
      transition: "opacity 0.3s",
      fontWeight: "400",
      textDecoration: "underline",
      textUnderlineOffset: "2px",
      textDecorationColor: `theme('colors.primary.DEFAULT')`
    },
    "h1 a,h2 a,h3 a,h4 a,h5 a,h6 a": {
      fontWeight: "inherit",
      textDecoration: "inherit"
    },
    "a:hover": {
      opacity: "80%"
    },
    table: {
      fontSize: "14px"
    },
    "thead th": {
      textAlign: "start"
    },
    code: {
      padding: "3px",
      border: "solid 1px",
      fontSize: "13px",
      borderColor: `theme('colors.border')`,
      borderRadius: "5px",
      fontWeight: "400",
      background: `theme('colors.muted.DEFAULT')`
    },
    kbd: {
      boxShadow: "0 0 0 1px var(--tw-prose-kbd-shadows),0 3px 0 var(--tw-prose-kbd-shadows)"
    },
    ul: {
      listStylePosition: "inside",
      paddingLeft: "0"
    },
    "ul > li": {
      paddingLeft: "0"
    },
    // Disabled styles, handled by Fumadocs UI
    "pre code": false,
    "pre code::after": false,
    "pre code::before": false,
    "code::after": false,
    "code::before": false
  }
};

// src/tailwind-plugin.ts
function getThemeStyles(prefix, theme) {
  return Object.fromEntries(
    Object.entries(theme).map(([k, v]) => [variableName(prefix, k), v])
  );
}
function variableName(prefix, name) {
  return `--${[prefix, name].filter(Boolean).join("-")}`;
}
function colorToCSS(prefix, name) {
  return `hsl(var(${variableName(prefix, name)}) / <alpha-value>)`;
}
var docsUi = plugin.withOptions(
  ({
    prefix = "",
    preset = "default",
    keepCodeBlockBackground = false
  } = {}) => {
    return ({ addBase, addComponents, addUtilities }) => {
      const { light, dark, css } = typeof preset === "string" ? presets[preset] : preset;
      addBase({
        ":root": getThemeStyles(prefix, light),
        ".dark": getThemeStyles(prefix, dark),
        "*": {
          "border-color": `theme('colors.border')`
        },
        body: {
          "background-color": `theme('colors.background')`,
          color: `theme('colors.foreground')`
        }
      });
      if (css) addBase(css);
      addComponents({
        ".nd-codeblock span": {
          color: "var(--shiki-light)"
        },
        ".dark .nd-codeblock span": {
          color: "var(--shiki-dark)"
        },
        ".nd-codeblock code": {
          display: "grid",
          "font-size": "13px"
        },
        ".nd-codeblock .highlighted": {
          margin: "0 -16px",
          padding: "0 16px",
          "background-color": `theme('colors.primary.DEFAULT / 10%')`
        },
        ".nd-codeblock .highlighted-word": {
          padding: "1px 2px",
          margin: "-1px -3px",
          border: "1px solid",
          "border-color": `theme('colors.primary.DEFAULT / 50%')`,
          "background-color": `theme('colors.primary.DEFAULT / 10%')`,
          "border-radius": "2px"
        }
      });
      if (keepCodeBlockBackground) {
        addComponents({
          ".nd-codeblock": {
            color: "var(--shiki-light)",
            "background-color": "var(--shiki-light-bg)"
          },
          ".dark .nd-codeblock": {
            color: "var(--shiki-dark)",
            "background-color": "var(--shiki-dark-bg)"
          }
        });
      }
      addUtilities({
        ".steps": {
          "counter-reset": "step",
          "border-left-width": "1px",
          "margin-left": "1rem",
          "padding-left": "1.75rem",
          position: "relative"
        },
        ".step:before": {
          "background-color": `theme('colors.secondary.DEFAULT')`,
          color: `theme('colors.secondary.foreground')`,
          content: "counter(step)",
          "counter-increment": "step",
          "border-radius": `theme('borderRadius.full')`,
          "justify-content": "center",
          "align-items": "center",
          width: "2rem",
          height: "2rem",
          "font-size": ".875rem",
          "line-height": "1.25rem",
          display: "flex",
          position: "absolute",
          left: "-1rem"
        },
        ".prose-no-margin": {
          "& > :first-child": {
            marginTop: "0"
          },
          "& > :last-child": {
            marginBottom: "0"
          }
        }
      });
    };
  },
  ({ prefix = "" } = {}) => ({
    theme: {
      extend: {
        // Allow devs to use `container` for other elements
        container: {
          center: true,
          padding: "1rem",
          screens: {
            "2xl": "1400px"
          }
        },
        height: {
          body: [
            "calc(100vh - 4rem) /* fallback */",
            "calc(100dvh - 4rem)"
          ]
        },
        maxWidth: {
          container: "1400px"
        },
        colors: {
          border: colorToCSS(prefix, "border"),
          ring: colorToCSS(prefix, "ring"),
          background: colorToCSS(prefix, "background"),
          foreground: colorToCSS(prefix, "foreground"),
          primary: {
            DEFAULT: colorToCSS(prefix, "primary"),
            foreground: colorToCSS(prefix, "primary-foreground")
          },
          secondary: {
            DEFAULT: colorToCSS(prefix, "secondary"),
            foreground: colorToCSS(prefix, "secondary-foreground")
          },
          muted: {
            DEFAULT: colorToCSS(prefix, "muted"),
            foreground: colorToCSS(prefix, "muted-foreground")
          },
          accent: {
            DEFAULT: colorToCSS(prefix, "accent"),
            foreground: colorToCSS(prefix, "accent-foreground")
          },
          popover: {
            DEFAULT: colorToCSS(prefix, "popover"),
            foreground: colorToCSS(prefix, "popover-foreground")
          },
          card: {
            DEFAULT: colorToCSS(prefix, "card"),
            foreground: colorToCSS(prefix, "card-foreground")
          }
        },
        ...animations,
        typography: {
          DEFAULT: typography
        }
      }
    }
  })
);
function createPreset(options = {}) {
  return {
    darkMode: "class",
    plugins: [typography2, docsUi(options)]
  };
}
export {
  createPreset,
  docsUi,
  presets
};
