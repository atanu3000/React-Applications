import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "dark",
    lightTheme: () => {},
    darkTheme: () => {},
})

export const useThemeContext = () => { // custom hook for theme context
    return useContext(ThemeContext);
}