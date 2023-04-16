import React from "react"

export default function Filter({country, handleText, searchCountry, selectRegion}) {
  return (
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
          onKeyDown={searchCountry}
        />
      </div>
      <div className="select-wrapper">
        <select 
          id="" 
          className="choose-select"
          onChange={selectRegion}
          >
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  )
}
