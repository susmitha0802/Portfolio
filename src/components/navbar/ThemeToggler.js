import DarkModeToggle from "react-dark-mode-toggle";
import { useTheme } from "../../context/ThemeContext";

export const ThemeToggler = () => {
    const { theme, onChange } = useTheme();
    return (
        <DarkModeToggle
            className="mx-4"
            onChange={onChange}
            checked={theme === "dark" ? true : false}
            size={60}
        />
    )
}

