import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"

export default function Layout() {
  return (
    <div className="site-wrapper">
      <Header />
      <main className="main">
        <div className="container">
          <section className="filter">
            <div className="search-wrapper">
              <span className="icon-search"></span>
              <input type="text" className="search-input" placeholder="Search for a country..." />
            </div>
            <div className="select-wrapper">
              <select id="" className="choose-select">
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
            </div>
          </section>

          <Outlet />
        </div>
      </main>
    </div>
  )
}
