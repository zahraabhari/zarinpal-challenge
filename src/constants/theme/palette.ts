import { PaletteOptions } from "@mui/material";

// declare  module (override MUi types)
declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }
  interface PaletteColor {
    "900"?: string;
    "800"?: string;
    "700"?: string;
    "600"?: string;
    "500"?: string;
    "400"?: string;
    "300"?: string;
    "200"?: string;
    "100"?: string;
    "50"?: string;
    "0"?: string;
  }
  interface SimplePaletteColorOptions {
    "900"?: string;
    "800"?: string;
    "700"?: string;
    "600"?: string;
    "500"?: string;
    "400"?: string;
    "300"?: string;
    "200"?: string;
    "100"?: string;
    "50"?: string;
    "0"?: string;
  }
}

// define const darkPalette:PaletteOptions
export const palette: PaletteOptions = {
  mode: "light",
  neutral: {
    "900": "#000000",
    "800": "#262626",
    "700": "#434343",
    "600": "#555555",
    "500": "#7B7B7B",
    "400": "#9D9D9D",
    "300": "#C4C4C4",
    "200": "#D9D9D9",
    "100": "#E9E9E9",
    "50": "#F5F5F5",
    "0": "#FFFFFF",
  },
  text: {
    primary: "#000000",
    secondary: "#262626",
  },
};
