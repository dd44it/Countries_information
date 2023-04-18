import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon as faMoonRegular } from "@fortawesome/free-regular-svg-icons"
import { faMoon as faMoonSolid } from "@fortawesome/free-solid-svg-icons"
import { ThemeContext } from "../ThemeContext"

export default function Header() {
  const {theme, toggleTheme} = React.useContext(ThemeContext)

  return (
    <div className="header-wrapper">
      <h1 className="title">Where in the world?</h1>
      <button className="theme" onClick={toggleTheme}>
        {theme === "light" ? <FontAwesomeIcon className="moon-icon" icon={faMoonRegular} /> : <FontAwesomeIcon className="moon-icon" icon={faMoonSolid} /> }
        <span>Dark Mode</span>
      </button>
    </div>
  )
}
