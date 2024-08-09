import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Diplay from "./components/Display";
const App = () => {
    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState("");


    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((response) => {
                setCountries(response.data);
            })
    }   , []);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
        
    }

    const countriesToShow = countries.filter((country) =>
        country.name.common.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <Filter country={filter} handleChange={handleFilterChange} />
            <Diplay countries={countriesToShow} />
        </div>
    )
}
export default App;