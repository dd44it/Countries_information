import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import Cards from "./Cards"
import Header from "./Header"
import Filter from "./Filter"
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
    if (e.keyCode === CHAR_CODE_ENTER) {
      const findCountry = countriesList.filter((country) =>
        country.name.toLowerCase().includes(value.toLowerCase())
      )
      if (findCountry.length) {
        setSearchedCountries(findCountry)
      }
    }
  }

  function selectRegion(e) {
    const { value } = e.target
    const findRegion = countriesList.filter((region) => region.region.includes(value))
    setSearchedCountries(findRegion)
  }

  return (
    <div className="site-wrapper">
      <Header />
      <main className="main">
        <div className="container">
          <Filter
            country={country}
            handleText={handleText}
            searchCountry={searchCountry}
            selectRegion={selectRegion}
          />
          <Cards listCountries={searchedCountries.length ? searchedCountries : countriesList} />
          <Outlet />
        </div>
      </main>
    </div>
  )
}
