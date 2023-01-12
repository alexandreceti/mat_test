import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { ThemeProvider } from "@mui/material";

import { defaultTheme, whiteLabelTheme } from "../styles/themes";

interface IThemeContextData {
  themeName: "default" | "whitelabel";
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

type AppProps = {
  children: string | JSX.Element | JSX.Element[];
};

export function AppThemeProvider({ children }: AppProps) {
  const [themeName, setThemeName] = useState<"default" | "whitelabel">(
    "default"
  );

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "default" ? "whitelabel" : "default"
    );
  }, []);

  const theme = useMemo(() => {
    if (themeName === "default") return defaultTheme;

    return whiteLabelTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
