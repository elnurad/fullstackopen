import React from 'react'

const Persons =(props) =>{
    return(
        <div>
        {props.filteredValue === '' 
        ? props.persons.map((person) =><div key={person.name}>{person.name} {person.number}</div>) 
        : props.persons.map((person) => person.name.toLowerCase().includes(props.filteredValue.toLowerCase()) 
        ? <div key={person.name}>{person.name} {person.number}</div> 
        : <div key={person.name}></div>)}
        </div>
    )
}

export default Persons