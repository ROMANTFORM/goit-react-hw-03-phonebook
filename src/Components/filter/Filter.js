const Filter = ({ onSearchInput, value }) => {
    
    return (
        <div>
            <h3>Find contact by name</h3>
            <label>
                <input
                    name="search"
                    type="text"
                    value={value}
                    onChange={onSearchInput}
                ></input>
            </label>
        </div>
    )
};

export default Filter;