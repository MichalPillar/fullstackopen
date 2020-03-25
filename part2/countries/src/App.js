import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBox from './components/SearchBox';
import CountryList from './components/CountryList';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchStr, setSearchStr] = useState('');

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchStr.toLowerCase()));

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => setCountries(response.data))
  }, [])

  const handleSearch = (event) => {
    setSearchStr(event.target.value);
  }

  return (
    <div>
      find countries
      <SearchBox handleSearch={handleSearch} />
      <CountryList countries={filteredCountries} />
    </div>
  );
}

export default App;
