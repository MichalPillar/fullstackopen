import React, { useState, useEffect } from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';

import personService from './services/personService';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchStr, setSearchStr] = useState('');
  const [message, setMessage] = useState(null);

  const isDuplicate = (name) => persons.some(person => person.name === name);

  useEffect(() => {
    personService
      .getAll()
      .then(persons => setPersons(persons))
  }, [])

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchStr.toLowerCase()));

  const showMessage = (content) => {
    setMessage(content);
    setTimeout(() => {
      setMessage(null);
    }, 2000);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `${newName} is already added to phonebook, replace the old number with a new one?`;

    const personObject = {
      name: newName,
      number: newNumber
    }

    if (isDuplicate(newName)) {
      if (window.confirm(message)) {
        const person = persons.find(p => p.name === newName);
        personService
          .updatePerson(person.id, personObject)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson));
            showMessage(`Updated number for ${newName}`);
            setNewName('');
            setNewNumber('');
          })
      }
    } else {
      personService
        .createPerson(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
          showMessage(`Added ${newName}`);
          setNewName('');
          setNewNumber('');
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSearch = (event) => {
    setSearchStr(event.target.value);
  }

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .removePerson(id)
      setPersons(persons.filter(person => person.id !== id));
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter searchStr={searchStr} handleSearch={handleSearch} />
      <h2>Add a new person</h2>
      <PersonForm newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} handleSubmit={handleSubmit} />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} handleDelete={deletePerson} />
    </div>
  )
}

export default App;
