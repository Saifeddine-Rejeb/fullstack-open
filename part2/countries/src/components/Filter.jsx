const Filter = ({ handleChange, country }) => {
    return(
        <form>
            find countries <input value={country} onChange={handleChange} />
        </form>
    )
}

export default Filter;