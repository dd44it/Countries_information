import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import { ThemeContext } from "../ThemeContext"

export default function Layout() {
  const { theme } = React.useContext(ThemeContext)

  return (
    <div className="site-wrapper">
      <header className={`header header-${theme}`}>
        <div className="container">
          <Header />
        </div>
      </header>
      <main className={`main main-${theme}`}>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
