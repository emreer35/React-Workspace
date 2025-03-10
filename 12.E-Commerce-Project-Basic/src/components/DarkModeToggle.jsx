import { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const DarkModeToggle = () => {
  // Mevcut temayı saklamak için state
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Sayfa yüklendiğinde mevcut temayı kontrol et
    const isDark =
      localStorage.currentTheme === "dark" ||
      (!("currentTheme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark"); // Karanlık modu kaldır
      localStorage.currentTheme = "light"; // Tercihi kaydet
      setIsDarkMode(false); // State'i güncelle
    } else {
      document.documentElement.classList.add("dark"); // Karanlık modu etkinleştir
      localStorage.currentTheme = "dark"; // Tercihi kaydet
      setIsDarkMode(true); // State'i güncelle
    }
  };

  return (
    <div>
      {isDarkMode ? (
        <MdOutlineLightMode
          onClick={toggleDarkMode}
          className="h-6 w-6 cursor-pointer text-white"
        />
      ) : (
        <MdOutlineDarkMode
          onClick={toggleDarkMode}
          className="h-6 w-6 cursor-pointer text-gray-800"
        />
      )}
    </div>
  );
};

export default DarkModeToggle;
