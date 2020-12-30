import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SongPlayer from "../components/SongPlayer";

const SearchResults = (props) => {
    let value = props.searchValue
    console.log(value)

    const [songs, setSongs] = useState([]);
    const [searchSongs, setSearchSongs] = useState([]);
	const [currentSong, setCurrentSong] = useState(null);

	useEffect(() => {
		(async () => {
			const response = await fetch("/api/songs/");
			const songs = await response.json();
			setSongs(songs.songs);
		})();
	}, []);
	if (!songs) {
		return "No songs found";
    }

	if (value !== "") {
        setSearchSongs(songs.filter(song => song.title.includes(value)))
        if (!searchSongs) {
            return "No songs found";
        }
    }

    const songComponents = searchSongs.map((searchSong => {
		return (
			<li key={searchSong.id}>
				<NavLink to={`/searchSong/${searchSong.id}`}>
					{searchSong.image}
					{searchSong.title}
				</NavLink>
				<button onClick={() => setCurrentSong(searchSong)}>Play Button</button>
			</li>
		);
	}));

	return (
		<>
			<h1>Song List: </h1>
			<ul>{songComponents}</ul>
			{ currentSong ? (
				<SongPlayer playingSong={currentSong} />
			): null}
		</>
	);
}

export default SearchResults
