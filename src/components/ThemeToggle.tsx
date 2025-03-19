import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeSharpIcon from "@mui/icons-material/LightMode";
import { useTheme } from "../contex/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButtonGroup value={theme} exclusive>
      <ToggleButton
        value="dark"
        aria-label="dark mode"
        onClick={() => toggleTheme("dark")}
      >
        <DarkModeIcon sx={{ color: "gray" }} />
      </ToggleButton>
      <ToggleButton
        value="light"
        aria-label="light mode"
        onClick={() => toggleTheme("light")}
      >
        <LightModeSharpIcon sx={{ color: "gray" }} />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ThemeToggle;