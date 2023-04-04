import React, { useState } from "react";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";

export const ThemeContext = React.createContext();
export default function Parent() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevTheme) => !prevTheme);
  }
  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>change theme</button>
        <ClassComponent/>
        <FunctionComponent/>
      </ThemeContext.Provider>
    </>
  );
}
