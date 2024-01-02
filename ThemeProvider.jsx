"use client";

import { ThemeProvider } from "next-themes";
// import * as React from "react";

export default function NextThemeProvider({ children }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}
