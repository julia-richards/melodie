import React, { useState } from "react";
import SearchResults from "../components/SearchResults";

const SearchInput = () => {
    const [value, setValue] = useState("");

    const handleSearch = (e) => {
        setValue(e.target.value)
        console.log(value)
    };

    return (
        <div>
            <input type="text" value={value} onChange={handleSearch} placeholder="Search for a melodie..."></input>
            { value !== "" ? ( <SearchResults searchValue={value}/> ) : (null)}
        </div>
        // <form onSubmit={handleSearch}>
        //     <input type="search" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search for a melodie..."></input>
        //     {/* <button type="submit">Search</button> */}
        // </form>
    );
}

export default SearchInput
