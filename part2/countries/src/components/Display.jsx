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
                <img src={country.flags.png} alt={country.name.common} width="100" />
            </div>
    );
}

const Display = ({countries}) => {

    if (countries.length > 10) {
        return <div>Too many matches, specify another filter</div>
    }
    
    if (countries.length === 1) {
        return (
            <Country country={countries[0]} />
        )
    }
    else{
        return (
            <div>
                {countries.map((country) => (
                    <div key={country.name.common}>
                        {country.name.common}
                    </div>
                ))}
            </div>
        )
    }
}

export default Display;