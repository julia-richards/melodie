import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import SearchResults from "../components/SearchResults";

const SearchInput = (props) => {
    const [value, setValue] = useState("");
    const history = useHistory();

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`/search/${value}`)
    };

    return (
        <form onSubmit={handleSearch}>
            <input type="search" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search for a melodie..."></input>
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchInput
