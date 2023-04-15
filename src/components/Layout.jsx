import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import Cards from "./Cards"
import Header from "./Header"
import data from "../data.json"

export default function Layout() {
  const [country, setCountry] = useState("")
  const [countriesList, setCountiesList] = useState(data)
  const [searchedCountries, setSearchedCountries] = useState([])

  function handleText(e) {
    const { value } = e.target
    setCountry(value)
  }

  function searchCountry(e) {
    const CHAR_CODE_ENTER = 13
    const { value } = e.target
    if (e.charCode === CHAR_CODE_ENTER) {
      const findCountry = countriesList.filter((country) =>
        country.name.toLowerCase().includes(value.toLowerCase())
      )
      if (findCountry.length) {
        setSearchedCountries(findCountry)
      }
    }
  }

  return (
    <div className="site-wrapper">
      <Header />
      <main className="main">
        <div className="container">
          <section className="filter">
            <div className="search-wrapper">
              <span className="icon-search"></span>
              <input
                type="text"
                className="search-input"
                placeholder="Search for a country..."
                name="country"
                value={country}
                onChange={handleText}
                onKeyPress={searchCountry}
              />
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
          <Cards listCountries={searchedCountries.length ? searchedCountries : countriesList} />
          <Outlet />
        </div>
      </main>
    </div>
  )
}
