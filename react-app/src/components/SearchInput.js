import React, { useState } from "react";
import SearchResults from "../components/SearchResults";

const SearchInput = () => {
    const [value, setValue] = useState('');

    const handleSearch = (e) => {
        (e) => setValue(e.target.value);
    };

    return (
        <div>
            <input type="search" value={value} onChange={(e) => handleSearch(e)} placeholder="Search for a melodie..."></input>
            { value ? ( <SearchResults /> ) : null}
        </div>
        // <form onSubmit={handleSearch}>
        //     <input type="search" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search for a melodie..."></input>
        //     {/* <button type="submit">Search</button> */}
        // </form>
    );
}

export default SearchInput
