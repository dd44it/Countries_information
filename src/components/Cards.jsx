import React from 'react'

export default function Cards(props){

  const cardElem = props.listCountries.map( (item, index) => {
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
    <section className="countries">
      {cardElem}
    </section>
  )
}