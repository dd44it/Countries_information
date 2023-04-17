import React, { useState } from "react"
const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("light")

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "night" : "light"))
  }

  return (
    <ThemeContext.Provider value={{theme: theme, toggleTheme: toggleTheme }}>{props.children}</ThemeContext.Provider>
  )
}

export { ThemeContextProvider, ThemeContext }
