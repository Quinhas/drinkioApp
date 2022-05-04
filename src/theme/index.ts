import { extendTheme, themeTools } from "native-base";

export const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
  colors: {
    primaryApp: {
      50: "#d7feff",
      100: "#aaf3ff",
      200: "#7aeaff",
      300: "#48e0ff",
      400: "#1ad7ff",
      500: "#00bde6",
      600: "#0093b4",
      700: "#006982",
      800: "#004050",
      900: "#00171f",
    },
    success: {
      50: "#EAFAEE",
      100: "#C5F1D0",
      200: "#A0E8B1",
      300: "#7BE093",
      400: "#56D774",
      500: "#31CE56",
      600: "#27A545",
      700: "#1D7C33",
      800: "#145222",
      900: "#0A2911",
    },
    warning: {
      50: "#FFF6E6",
      100: "#FEE7B9",
      200: "#FDD78B",
      300: "#FDC85E",
      400: "#FCB831",
      500: "#FCA903",
      600: "#C98703",
      700: "#976502",
      800: "#654301",
      900: "#322201",
    },
    danger: {
      50: "#FBE9EA",
      100: "#F4C2C3",
      200: "#EE9B9D",
      300: "#E77477",
      400: "#E04D51",
      500: "#D9262A",
      600: "#AE1E22",
      700: "#821719",
      800: "#570F11",
      900: "#2B0808",
    },

    google: {
      50: "#FDEAE8",
      100: "#F8C3BE",
      200: "#F49C95",
      300: "#F0756B",
      400: "#EB4F42",
      500: "#E72818",
      600: "#B92013",
      700: "#8B180E",
      800: "#5C100A",
      900: "#2E0805",
    },

    twitter: {
      50: "#dcf7ff",
      100: "#b0e2ff",
      200: "#82cdfa",
      300: "#53b9f6",
      400: "#26a5f3",
      500: "#0c8bd9",
      600: "#006caa",
      700: "#004d7b",
      800: "#002e4c",
      900: "#00101f",
    },

    facebook: {
      50: "#e7f0ff",
      100: "#c4d3ef",
      200: "#a0b5e0",
      300: "#7c98d0",
      400: "#587ac1",
      500: "#3e61a7",
      600: "#2f4b83",
      700: "#20365f",
      800: "#11203c",
      900: "#020b1b",
    },

    gray: {
      50: "#f2f2f2",
      100: "#d9d9d9",
      200: "#bfbfbf",
      300: "#a6a6a6",
      400: "#8c8c8c",
      500: "#737373",
      600: "#595959",
      700: "#404040",
      800: "#262626",
      900: "#0d0d0d",
    },
  },
  fontConfig: {
    "Red Hat Display": {
      300: {
        normal: "RedHatDisplay_300Light",
        italic: "RedHatDisplay_300Light_Italic",
      },
      400: {
        normal: "RedHatDisplay_400Regular",
        italic: "RedHatDisplay_400Regular_Italic",
      },
      500: {
        normal: "RedHatDisplay_500Medium",
        italic: "RedHatDisplay_500Medium_Italic",
      },
      600: {
        normal: "RedHatDisplay_600SemiBold",
        italic: "RedHatDisplay_600SemiBold_Italic",
      },
      700: {
        normal: "RedHatDisplay_700Bold",
        italic: "RedHatDisplay_700Bold_Italic",
      },
      800: {
        normal: "RedHatDisplay_800ExtraBold",
        italic: "RedHatDisplay_800ExtraBold_Italic",
      },
      900: {
        normal: "RedHatDisplay_900Black",
        italic: "RedHatDisplay_900Black_Italic",
      },
    },
  },
  fonts: {
    heading: "Red Hat Display",
    body: "Red Hat Display",
    mono: "Red Hat Display",
  },
  styles: {
    global: (props: any) => ({
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      body: {
        background: themeTools.mode("gray.50", "gray.900")(props),
        color: themeTools.mode("gray.800", "gray.100")(props),
      },
      "input, button, select, textarea": {
        fontFamily: "body",
      },
    }),
  },
});
