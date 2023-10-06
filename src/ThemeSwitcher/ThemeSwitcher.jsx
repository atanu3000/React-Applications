import React, { useEffect, useState } from "react";
import { ThemeContext } from "./contexts/themeContext";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

const ThemeSwitcher = () => {
    const [themeMode, setThemeMode] = useState("light");

    const lightTheme = () => {
        setThemeMode("light");
    };

    const darkTheme = () => {
        setThemeMode("dark");
    };

    useEffect(() => {
        document.querySelector("html").classList.remove("light", "dark");
        document.querySelector("html").classList.add(themeMode);
    }, [themeMode]);

    return (
        <ThemeContext.Provider value={{ themeMode, lightTheme, darkTheme }}>
            <div className="flex flex-wrap h-max items-center mx-2">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card />
                    </div>
                </div>
            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeSwitcher;
