import React, { useState } from 'react'
import Filter from "./components/Filter"
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '39-44-5323523' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const [ newNumber, setNewNumber ] = useState('')

  const [ filteredValue, setFilteredValue ] = useState('')

  const handleNameInput = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
    
  }
  
  const handleNumberInput = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  
  const filterName = (event) => {
    console.log(event.target.value)
    setFilteredValue(event.target.value)
    console.log(filteredValue)
  }

  const handleAddName = (event) => {
    event.preventDefault()
    const newPerson = {
        
        name: newName,
        number: newNumber
    }
    persons.find((person) => person.name === newName) ? alert(`${newName} is already added to the phonebook`) :
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')


}

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filteredValue={filteredValue} filterName={filterName} />
      <div>
      <h2>Add New</h2>
      <PersonForm newName={newName} handleNumberInput={handleNumberInput} 
      newNumber={newNumber} handleNameInput={handleNameInput} handleAddName={handleAddName} />
      <h2>Numbers</h2>
      <Persons filteredValue={filteredValue} persons={persons} />
    </div>
    </div>
  )
}

export default App