import React, { useState } from "react"
const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isUserPreferDarkTheme = prefersDark ? "night" : "light"
  const [theme, setTheme] = useState(isUserPreferDarkTheme)

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "night" : "light"))
  }

  return (
    <ThemeContext.Provider value={{theme: theme, toggleTheme: toggleTheme }}>{props.children}</ThemeContext.Provider>
  )
}

export { ThemeContextProvider, ThemeContext }
