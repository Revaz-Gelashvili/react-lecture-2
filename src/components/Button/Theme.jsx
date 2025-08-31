import { useState, useEffect } from "react";

export default function Theme() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    const body = document.body;
    if (isDark) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [isDark]);

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <button
        onClick={toggleTheme}
        className={`px-4 py-2 rounded ${
          isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
        }`}
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
