import { useEffect, useState } from "react";
("use client");
import { useTheme } from "next-themes";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";

export default function ThemeToggler() {
  const { systemTheme, theme, setTheme } = useTheme();
  // const [mounted,setMounted] = useState(false)

  // useEffect(() =>  ()=> {setMounted(true)}, [])

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {/* { mounted && */}
      <button
        type="button"
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <BsSunFill size={25} />
        ) : (
          <MdOutlineDarkMode size={25} />
        )}
      </button>
      {/* } */}
    </>
  );
}
