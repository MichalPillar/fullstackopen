import React from 'react';
import Country from './Country';

const CountryList = ({ countries }) => {
  return countries.length > 10 ? (
    countries.length === 250 ? (
      <div></div>
    ) : (
        <div>Too many matches, specify another filter</div>
      )
  ) : (
      countries.map(country => (
        <Country key={country.name} country={country} />
      ))
    )
}

export default CountryList;