import darkIcon from "../assets/darkIcon.png";
import React, { useEffect } from "react";

const Theme = () => {
    // Function to toggle between dark and light modes
    const toggleMode = () => {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light"); // Save preference as light mode
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark"); // Save preference as dark mode
        }
    };

    // Apply stored theme preference on component load
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    return (
        <div>
            <button
                onClick={toggleMode}
                className="dark:bg-blue p-2 rounded-md hover:bg-gray-300"
            >
                <img className="h-10" src={darkIcon} alt="Toggle Theme" />
            </button>
        </div>
    );
};

export default Theme;
  