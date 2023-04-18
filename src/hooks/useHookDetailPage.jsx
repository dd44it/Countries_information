import { useParams } from "react-router-dom"
import data from "../data.json"
import { Link } from "react-router-dom"

export default function useHookDetailPage() {
  const { countryName } = useParams()
  const findCountry = data.find((country) => country.name === countryName)
  const listLang = findCountry.languages && findCountry.languages.map((lang) => lang.name).join(", ")
  const listCurrencies = findCountry.currencies && findCountry.currencies.map((curr) => curr.name).join(", ")
  const population = new Intl.NumberFormat("en-En").format(findCountry.population)

  const listFullNameBorder =
    findCountry.borders &&
    data
      .filter((country) => findCountry.borders.includes(country.cioc))
      .map((country) => country.name)

  const listBorder =
    findCountry.borders &&
    listFullNameBorder.map((border, index) => (
      <Link to={`/${border}`} key={index} className="link">
        <span className="border-badge">
          {border}
        </span>
      </Link>
    ))

  return { findCountry, listLang, listCurrencies, population, listBorder }
}
