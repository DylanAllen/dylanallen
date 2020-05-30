import { ThemeType } from "grommet";


/* tslint:disable */
export const theme: ThemeType = {
    "global": {
      "colors": {
        "brand": {
          "dark": "#7700cc",
          "light": "#3d9c83"
        },
        "background": {
          "dark": "#111111",
          "light": "#fafafa"
        },
        "background-back": {
          "dark": "#111111",
          "light": "#EEEEEE"
        },
        "background-front": {
          "dark": "#222222",
          "light": "#fafafa"
        },
        "background-contrast": {
          "dark": "#FFFFFF11",
          "light": "#11111111"
        },
        "text": {
          "dark": "#EEEEEE",
          "light": "#525252"
        },
        "text-strong": {
          "dark": "#FFFFFF",
          "light": "#000000"
        },
        "text-weak": {
          "dark": "#CCCCCC",
          "light": "#444444"
        },
        "text-xweak": {
          "dark": "#999999",
          "light": "#707070"
        },
        "border": {
          "dark": "#444444",
          "light": "#CCCCCC"
        },
        "control": "brand",
        "active-background": "background-contrast",
        "active-text": "text-strong",
        "selected-background": "brand",
        "selected-text": "text-strong",
        "status-critical": "#FF4040",
        "status-warning": "#FFAA15",
        "status-ok": "#00C781",
        "status-unknown": "#CCCCCC",
        "status-disabled": "#CCCCCC",
        "graph-0": "brand",
        "graph-1": "status-warning"
      },
      "font": {
        "family": "\"Lato\"",
        "face": "/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wXiWtFCc.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"
      },
      "active": {
        "background": {
          "color": "#FFFFFF11"
        },
        "color": "active-text"
      },
      "hover": {
        "background": "active-background",
        "color": "active-text"
      },
      "selected": {
        "background": "selected-background",
        "color": "selected-text"
      },
      "control": {
        "border": {
          "radius": "2px"
        }
      },
      "drop": {
        "border": {
          "radius": "2px"
        }
      }
    },
    "chart": {},
    "diagram": {
      "line": {}
    },
    "meter": {},
    "button": {
      "border": {
        "radius": "2px"
      }
    },
    "checkBox": {
      "check": {
        "radius": "2px"
      },
      "toggle": {
        "radius": "2px"
      }
    },
    "radioButton": {
      "check": {
        "radius": "2px"
      }
    },
    "formField": {
      "border": {
        "color": "border",
        "side": "bottom"
      },
      "content": {
        "pad": "small"
      },
      "disabled": {
        "background": {
          "color": "status-disabled",
          "opacity": "medium"
        }
      },
      "error": {
        "color": "status-critical",
        "margin": {
          "vertical": "xsmall",
          "horizontal": "small"
        }
      },
      "help": {
        "color": "dark-3",
        "margin": {
          "start": "small"
        }
      },
      "label": {
        "margin": {
          "vertical": "xsmall",
          "horizontal": "small"
        }
      },
      "margin": {
        "bottom": "small"
      },
      "round": "2px"
    },
    "layer": {
      "background": {
        "dark": "#111111",
        "light": "#fafafa"
      }
    }
  }