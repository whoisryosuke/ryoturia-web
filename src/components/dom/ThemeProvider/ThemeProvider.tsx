import { useAppStore } from "@/store/app";
import generateDarkTheme from "@/theme/colors/dark";
import { Theme, base, themes } from "@/theme/index";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

/* eslint-disable-next-line */
export interface ThemeProviderProps {}

export function ThemeProvider({
  children,
}: React.PropsWithChildren<ThemeProviderProps>) {
  const { theme, colorMode } = useAppStore();

  // @TODO: Put light mode back once colors are consolidated
  const themeStyles =
    theme === "light"
      ? generateDarkTheme(colorMode)
      : generateDarkTheme(colorMode);
  const currentTheme = {
    ...base,
    ...themeStyles,
  };

  return (
    <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
  );
}

ThemeProvider.defaultProps = {
  theme: {},
};

export default ThemeProvider;
