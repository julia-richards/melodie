import React from "react";

const handleSearch = () => {
    return
}

const SearchInput = () => {
    return (
        <form onSubmit={handleSearch}>
            <input type="search" value={value} onChange={(e) => setValue(e.target.value)}></input>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchInput
