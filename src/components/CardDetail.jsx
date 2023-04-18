import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons"
import useHookDetailPage from "../hooks/useHookDetailPage"

export default function CardDetail() {
  const { findCountry, listLang, listCurrencies, population, listBorder } = useHookDetailPage()
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
              <div className="country-response">{population}</div>
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
              <div className="country-response"> {listCurrencies} </div>
            </div>
            <div className="column-row">
              <div className="country-label">Languages</div>
              <div className="country-response"> {listLang} </div>
            </div>
          </div>
        </div>
        {findCountry.borders && (
          <div className="country-border">
            <span className="country-label"> Border Countries </span>
            <div className="badge-wrapper">{listBorder}</div>
          </div>
        )}
      </div>
    </section>
  )
}
