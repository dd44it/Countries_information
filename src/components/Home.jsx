import Filter from "./Filter"
import Cards from "./Cards"
import useHooks from "../hooks/useHooksHomePage"

export default function Home() {
  const { data, country, searchedCountries, handleText, searchCountry, selectRegion } = useHooks()

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
