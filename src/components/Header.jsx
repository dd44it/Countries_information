import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-regular-svg-icons"
import { ThemeContext } from "../ThemeContext"

export default function Header() {
  const {toggleTheme} = React.useContext(ThemeContext)

  return (
    <div className="header-wrapper">
      <h1 className="title">Where in the world?</h1>
      <button className="theme" onClick={toggleTheme}>
        <FontAwesomeIcon icon={faMoon} />
        Dark Mode
      </button>
    </div>
  )
}
