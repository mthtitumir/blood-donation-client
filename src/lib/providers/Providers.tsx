"use client";

import { ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";
import { ChildrenProps } from "@/types";

const Providers = ({ children }: ChildrenProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
