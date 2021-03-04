import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleInput = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
      console.log(newName)
  }

  const handleAddName = (event) => {
      event.preventDefault()
      console.log('clicked')
      const newPerson = {
          name: newName
      }
      setPersons(persons.concat(newPerson))
      console.log(persons)
      setNewName('')


  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleInput}/>
        </div>
        <div>
          <button type="submit" onClick={handleAddName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
     
      {persons.map((person) =><div>{person.name}</div>)}
    </div>
  )
}

export default App