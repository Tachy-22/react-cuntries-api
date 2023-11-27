import { useEffect } from "react";
import { useState } from "react";

const useToggleTheme = () => {
  const [theme, setTheme] = useState(localStorage.theme);
  useEffect(() => {
    if (
      theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return () => {};
  }, [theme]);

  return [theme, setTheme];
};

export default useToggleTheme;


