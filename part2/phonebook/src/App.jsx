import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import { useState, useEffect } from 'react'
import personService from './services/persons'
import Notifcation from './components/Notification'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    personService
    .getAll()
    .then(initialData => {
      setPersons(initialData)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.find(person => person.name === newName)){
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const person = persons.find(person => person.name === newName)
        const changedPerson = { ...person, number: newNumber }
        
        personService
          .update(person.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
            setNewName('')
            setNewNumber('')
            setMessage({text: `Updated ${newName}'s number`, type: 'success'})
            setTimeout(() => {
              setMessage(null)
            } , 5000)
          })
          .catch(() => {
            setMessage({text: `Information of ${newName} has already been removed from server`, type: 'error'})
            setTimeout(() => {
              setMessage(null)
            } , 5000)
            setPersons(persons.filter(person => person.id !== changedPerson.id))
          })
      }
    }
    else
    {  const personObject = {
        name: newName,
        number: newNumber
      }

      personService
        .create(personObject)
        .then(modifiedData => {
          setPersons(persons.concat(modifiedData))
          setNewName('')
          setNewNumber('')
          setMessage({text: `Added ${newName}`, type: 'success'})
          setTimeout(() => {
            setMessage(null)
          } , 5000)
        })

    }
  }

  const deletePerson = (id) => {
    if (window.confirm(`Delete ${persons.find(person => person.id === id).name}?`)){
      personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
      
    }
  }

  const personsToShow = filter === '' 
    ? persons 
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notifcation message={message}/>

      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      
      <h3>Add a new</h3>

      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addPerson={addPerson}/>
      
      <h3>Numbers</h3>
      
      <Persons persons={personsToShow} deletePerson={deletePerson}/>
    </div>
  )
}

export default App