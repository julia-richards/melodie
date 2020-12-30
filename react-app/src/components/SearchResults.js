import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import SongPlayer from "../components/SongPlayer";
import Songs from "../components/Songs";

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
        console.log(songs)
        let filteredSongs = songs.filter((song) => {
            console.log(`searchResults, song title: ${song.title}`)
            console.log(`searchResults, searchValue: ${searchValue}`)
            console.log(`searchResults, match: ${song.title.toLowerCase().includes(searchValue.toLowerCase())}`)
            return song.title.toLowerCase().includes(searchValue.toLowerCase())});
        setSearchSongs(filteredSongs);
        setIsLoading(false);
        console.log(`searchResults, filteredSongs: ${filteredSongs}`)
    }, [searchValue, songs])

    if (isLoading) return null;

    return (
        <Songs searchSongs={searchSongs}/>
    )
}

export default SearchResults
