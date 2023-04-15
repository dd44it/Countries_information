import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"

export default function Layout() {
  return (
    <div className="site-wrapper">
      <Header />
      <main className="main">
        <div className="container">
          <section className="search">
            <div className="search-wrapper">
              <span className="icon-search"></span>
              <input type="text" className="search-input" placeholder="Search for a country..." />
            </div>
          </section>

          <Outlet />
        </div>
      </main>
    </div>
  )
}
