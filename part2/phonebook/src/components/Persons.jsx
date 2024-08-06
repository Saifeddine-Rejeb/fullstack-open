
const DeleteButton = ({ person, deletePerson }) => {
    return(
        <button onClick={() => deletePerson(person)}>delete</button>
    )   
}

const Person = ({ person, deletePerson }) => {
    return(
        <div>
            {person.name} {person.number} <DeleteButton person={person.id} deletePerson={deletePerson}/>
        </div>
    )
}
const Persons =  ({ persons, deletePerson}) => {
    return(
        <div>
            {persons.map(person => 
                <Person key={person.id} person={person} deletePerson={deletePerson} />
            )}
        </div>
    )

}
export default Persons