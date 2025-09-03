export const switchTheme = () => {
  return document.documentElement.classList.toggle("dark", isDarkMode());
};



export const isDarkMode = () => localStorage.theme === "dark" ||
    !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches