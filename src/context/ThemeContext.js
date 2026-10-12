import { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvidoer = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

//custom hook
const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvidoer };
