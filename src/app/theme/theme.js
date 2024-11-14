"use client";

import { createTheme } from "@mui/material/styles";
import { DM_Sans } from "next/font/google";

const dm = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const theme = createTheme({
  typography: {
    fontFamily: dm.style.fontFamily,
  },
  button: {
    fontFamily: dm.style.fontFamily,
  },
});

export default theme;
