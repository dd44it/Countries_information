import React, { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import data  from "../data.json"

export default function Layout() {
  console.log(data)

  // useEffect(() => {

  // }, [])

  const cardElem = data.map( (item, index) => {
    return (
        <div className="card-country" key={index}>
          <div className="card-img"> 
            <img src={item.flag} alt="" />
          </div>
          <div className="card-body">
            <h3 className="card-title"> {item.name} </h3>
            <div className="card-info">
              <div className="card-info-row">
                <div className="card-label">Population</div>
                <div className="card-population"> {item.population} </div>
              </div>
              <div className="card-info-row">
                <div className="card-label">Region</div>
                <div className="card-region">{item.region}</div>
              </div>
              <div className="card-info-row">
                <div className="card-label">Capital</div>
                <div className="card-capital">{item.capital}</div>
              </div>
            </div>
          </div>
        </div>
      )
  })


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
          <section className="countries">
            {cardElem}
          </section>
          <Outlet />
        </div>
      </main>
    </div>
  )
}
