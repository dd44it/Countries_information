import React from "react"
import { useParams } from "react-router-dom"
import data from "../data.json"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function CardDetail() {
  const { countryName } = useParams()
  const findCountry = data.find(country => country.name === countryName)

  return (
    <section className="country-detail">
      <Link to="/" className="back-link"> 
        <FontAwesomeIcon icon={faLongArrowLeft} />
        Back 
      </Link>
      <div className="column column-flag">
        <img src={findCountry.flag} alt={findCountry.name} />
      </div>
      <div className="column column-info">
        <h2 className="country-title">{findCountry.name}</h2>
        <div className="country-info">
          <div className="column">
            <div className="column-row">
              <div className="country-label">Native Name</div>
              <div className="country-response">{findCountry.nativeName}</div>
            </div>
            <div className="column-row">
              <div className="country-label">Population</div>
              <div className="country-response">{findCountry.population}</div>
            </div>
            <div className="column-row">
              <div className="country-label">Region</div>
              <div className="country-response">{findCountry.region}</div>
            </div>
            <div className="column-row">
              <div className="country-label">Sub Region</div>
              <div className="country-response">{findCountry.subregion}</div>
            </div>
            <div className="column-row">
              <div className="country-label">Capital</div>
              <div className="country-response">{findCountry.capital}</div>
            </div>
          </div>
          <div className="column">
            <div className="column-row">
              <div className="country-label">Top Level Domain</div>
              <div className="country-response">{findCountry.topLevelDomain}</div>
            </div>
            <div className="column-row">
              <div className="country-label">Currencies</div>
              <div className="country-response"></div>
            </div>
            <div className="column-row">
              <div className="country-label">Languages</div>
              <div className="country-response"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
