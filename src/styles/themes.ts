/** @format */

import { Theme, Themes } from "../models/theme";

const light: Theme = {
  name: "light",
  colors: {
    backgroundPrimary: "#5c98ccff",
    backgroundSecondary: "#f0f0f0",
  },
};

const dark: Theme = {
  name: "dark",
  colors: {
    backgroundPrimary: "#1e1e1e",
    backgroundSecondary: "#59595cff",
  },
};

export const themes: Themes = { light, dark };
