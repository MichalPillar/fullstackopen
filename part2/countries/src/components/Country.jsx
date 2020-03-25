import React, { useState } from 'react';

const Country = ({ country }) => {
  const [expand, toggleExpand] = useState(false);

  const handleClick = () => {
    toggleExpand(!expand)
  }

  return expand ? (
    <div>
      <button onClick={handleClick}>hide</button>
      <h2>{country.name}</h2>
      <div>capital {country.capital}</div>
      <div>population {country.population}</div>
      <h3>languages</h3>
      <ul>
        {
          country.languages.map(language => (
            <li key={language.name}>
              {language.name}
            </li>
          ))
        }
      </ul>
      <img src={country.flag} alt={country.name} width="120" />
    </div>
  ) : (
      <div>
        {country.name}
        <button onClick={handleClick}>show</button>
      </div>
    )

}

export default Country;