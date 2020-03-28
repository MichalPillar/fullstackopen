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
  const [notification, setNotification] = useState({
    message: null,
    success: true
  });

  const isDuplicate = (name) => persons.some(person => person.name === name);

  useEffect(() => {
    personService
      .getAll()
      .then(persons => setPersons(persons))
  }, [])

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchStr.toLowerCase()));

  const showNotification = (content, success) => {
    const newNotification = {
      message: content,
      success: success
    }

    setNotification(newNotification);
    setTimeout(() => {
      const emptyNotification = {
        message: null,
        success: true
      }
      setNotification(emptyNotification);
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
            showNotification(`Updated number for ${newName}`, true);
            setNewName('');
            setNewNumber('');
          })
          .catch(error => {
            console.log(error);
            showNotification(`Information of ${newName} has already been removed from server`, false);
          })
      }
    } else {
      personService
        .createPerson(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
          showNotification(`Added ${newName}`, true);
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
      <Notification message={notification.message} success={notification.success} />
      <Filter searchStr={searchStr} handleSearch={handleSearch} />
      <h2>Add a new person</h2>
      <PersonForm newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} handleSubmit={handleSubmit} />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} handleDelete={deletePerson} />
    </div>
  )
}

export default App;
