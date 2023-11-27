import { MdDarkMode } from "react-icons/md";
import { PiSunFill } from "react-icons/pi";
import { useCallback } from "react";
import useToggleTheme from "../../../controls/hooks/useToggleTheme";

export const Nav = () => {
  const [theme, setTheme] = useToggleTheme();

  const handleThemeToggle = useCallback(() => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }, [setTheme, theme]);

  return (
    <nav className=" bg-white dark:bg-gray-700 dark:text-white w-full flex justify-between px-[0.5rem] lg:px-[2rem] py-3 shadow-lg">
      <div className="font-semibold text-xl">Where in the world?</div>
      <div onClick={handleThemeToggle} className="">
        <div className="flex p-1 hover:bg-gray-50 dark:hover:bg-white/10 rounded-md cursor-pointer">
          {theme === "dark" ? (
            <span className="flex gap-2 justify-between items-center">
              {" "}
              <MdDarkMode className="text-2xl" />
              Light mode
            </span>
          ) : (
            <span className="flex gap-2 justify-between items-center">
              {" "}
              <PiSunFill className="text-2xl" />
              Dark Mode
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};
