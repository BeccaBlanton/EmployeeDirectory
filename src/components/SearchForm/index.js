function SearchForm(props){
    return (
        <form>
            <input 
            onChange={props.handleInputChange}
            value={props.value} 
            name="search" 
            type="text" 
            placeholder="search here" 
            id="search"/>
            <button
            onClick={props.formSubmit}>
            Submit
            </button>
        </form>
    )
}
export default SearchForm;