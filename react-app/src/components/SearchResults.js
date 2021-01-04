import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Songs from "../components/Songs";
import "../styles/Songs.css"

const SearchResults = () => {
    const [songs, setSongs] = useState([]);
    const [searchSongs, setSearchSongs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { searchValue } = useParams();

	useEffect(() => {
		(async () => {
			const response = await fetch("/api/songs/");
			const songs = await response.json();
			setSongs(songs.songs);
        })()
    }, []);

    useEffect(() => {
        let filteredSongs = songs.filter((song) => {
            return song.title.toLowerCase().includes(searchValue.toLowerCase())});
        setSearchSongs(filteredSongs.slice(0, 11));
        setIsLoading(false);
    }, [searchValue, songs])

    if (isLoading) return null;

    const SearchHeading = () => {
        if (searchSongs.length === 0) {
            return <h2 className="heading">A little quiet ... try another search</h2>
        } else {
            return null;
        };
    }


    return (
        <div className='wholePageContainer'>
            <div className='bodyContainer'>
                <div className='feedContainer'>
                    <SearchHeading />
                    { !searchSongs ? <h2 className="heading">No results found</h2> :
                    <>
                        <h2 className='heading'>Searching for "{searchValue}"</h2>
                        <Songs songList={searchSongs}/>
                    </>
                    }
                </div>
            </div>
        </div>

    )
}

export default SearchResults
