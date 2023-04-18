import React, { useState } from "react"
import Filter from "./Filter"
import Cards from "./Cards"
import data from "../data.json"

export default function Home() {
  const [country, setCountry] = useState("")
  const [searchedCountries, setSearchedCountries] = useState([])

  function handleText(e) {
    const { value } = e.target
    setCountry(value)
  }

  function searchCountry(e) {
    const CHAR_CODE_ENTER = 13
    const { value } = e.target
    if (e.keyCode === CHAR_CODE_ENTER) {
      const findCountry = data.filter((country) =>
        country.name.toLowerCase().includes(value.toLowerCase())
      )
      if (findCountry.length) {
        setSearchedCountries(findCountry)
      }
    }
  }

  function selectRegion(e) {
    const { value } = e.target
    const findRegion = data.filter((region) => region.region.includes(value))
    setSearchedCountries(findRegion)
  }

  return (
    <>
      <Filter
        country={country}
        handleText={handleText}
        searchCountry={searchCountry}
        selectRegion={selectRegion}
      />
      <Cards listCountries={searchedCountries.length ? searchedCountries : data} />
    </>
  )
}
