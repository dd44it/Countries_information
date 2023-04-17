/* eslint-disable no-undef */
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-regular-svg-icons"

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <h1 className="title">Where in the world?</h1>
          <button className="theme">
            <FontAwesomeIcon icon={faMoon} />
            Dark Mode
          </button>
        </div>
      </div>
    </header>
  )
}