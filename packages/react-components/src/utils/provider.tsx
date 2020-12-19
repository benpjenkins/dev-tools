import React from "react";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

interface ThemeItem {
  key: string;
  value: any;
}

interface Theme {
  [key: string]: ThemeItem;
}

interface Props {
  children: React.ReactNode;
  theme: Theme;
}

export const Provider = ({ children, theme }: Props): React.ReactNode => (
  <>
    <Normalize />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);
