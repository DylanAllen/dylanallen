import { ThemeType } from "grommet";


/* tslint:disable */
export const theme: ThemeType = {
  "global": {
    "colors": {
      "brand": {
        "dark": "#7700cc",
        "light": "#453762"
      },
      "background": {
        "dark": "#111111",
        "light": "#FAFAFB"
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
        "light": "#0F0D14"
      },
      "text-strong": {
        "dark": "#FFFFFF",
        "light": "#0F0D14"
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
        "light": "#554F59"
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
      "family": "\"Roboto Mono\"",
      "face": "/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v7/L0x5DF4xlVMF-BfR8bXMIjhGq3-cXbKDO1w.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v7/L0x5DF4xlVMF-BfR8bXMIjhPq3-cXbKDO1w.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v7/L0x5DF4xlVMF-BfR8bXMIjhHq3-cXbKDO1w.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v7/L0x5DF4xlVMF-BfR8bXMIjhIq3-cXbKDO1w.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v7/L0x5DF4xlVMF-BfR8bXMIjhEq3-cXbKDO1w.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v7/L0x5DF4xlVMF-BfR8bXMIjhFq3-cXbKDO1w.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v7/L0x5DF4xlVMF-BfR8bXMIjhLq3-cXbKD.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"
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