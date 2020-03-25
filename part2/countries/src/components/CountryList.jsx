import React from 'react';
import Country from './Country';

const CountryList = ({ countries }) => {
  if (countries.length > 10) {
    return countries.length === 250 ? (
      <div></div>
    ) : (
        <div>Too many matches, specify another filter</div>
      )
  } else if (countries.length === 1) {
    return <Country country={countries[0]} />
  } else {
    return countries.map(country => (
      <div key={country.name}>
        {country.name}
      </div>
    ))
  }
}

export default CountryList;