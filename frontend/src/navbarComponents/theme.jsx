import React, { useEffect, useState } from "react";
import DarkIcon from "../icons/darkIcon";
import LightModeIcon from "../icons/lightModeIcon";

const Theme = () => {
    const [darkMode, setDarkMode] = useState(false);

    
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setDarkMode(false);
        }
    }, []);

   
    const toggleMode = () => {
        const isDarkMode = !darkMode;
        setDarkMode(isDarkMode);
        document.documentElement.classList.toggle("dark", isDarkMode);
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    };
   
    return (
        <div>
            <button
                onClick={toggleMode}
                className="bg-blue-300 p-2 rounded-md hover:bg-blue-500 dark:bg-gray-800 dark:hover:bg-gray-600 text-white"
            >
                {darkMode ? <DarkIcon /> : <LightModeIcon />}
            </button>
        </div>
    );
};

export default Theme;
  