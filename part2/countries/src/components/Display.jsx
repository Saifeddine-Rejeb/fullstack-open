import Weather from "./Weather";

const Country = ({ country }) => {
    return (
        <div>
                <h1>{country.name.common}</h1>
                capital {country.capital}
                <br />
                area {country.area}
                <h2>Languages</h2>
                <ul>
                    {Object.values(country.languages).map((language) => (
                        <li key={language}>{language}</li>
                    ))}
                </ul>
                <img src={country.flags.png} alt={country.name.common} width="150" />
            </div>
    );
}

const ShowButton = ({ country, handleShow }) => {
    return (
        <button onClick={() => handleShow(country)}>Show</button>
    )
}

const Display = ({countries, handleShow}) => {

    if (countries.length > 10) {
        return <div>Too many matches, specify another filter</div>
    }
    
    if (countries.length === 1) {
        return (
            <div>
                <Country country={countries[0]} />
                <Weather capital={countries[0].capital} /> 
            </div>
        )
    }
    else{
        return (
            <div>
                {countries.map((country) => (
                    <div key={country.name.common}>
                        {country.name.common}
                        <ShowButton country={country} handleShow={handleShow} />    
                    </div>
                ))}
            </div>
        )
    }
}

export default Display;