import React from 'react';

const Persons = ({ filteredPersons, handleDelete }) => (
  filteredPersons.map(person => (
    <div key={person.id}>
      {person.name} {person.number}
      <button onClick={() => handleDelete(person.id, person.name)}>delete</button>
    </div>
  ))
)

export default Persons;