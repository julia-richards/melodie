import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SongPlayer from "../components/SongPlayer";

const Songs = (props) => {
	const [songs, setSongs] = useState([]);
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

	if (props.searchValue) {
		setSongs(songs.filter(songs => songs.title.includes(props.searchValue)))
	}

	const songComponents = songs.map((song) => {
		return (
			<li key={song.id}>
				<NavLink to={`/songs/${song.id}`}>
					{song.songImage}
					{song.title}
				</NavLink>
				<button onClick={() => setCurrentSong(song)}>Play Button</button>
			</li>
		);
	});

	return (
		<>
			<h1>Song List: </h1>
			<ul>{songComponents}</ul>
			{ currentSong ? (
				<SongPlayer playingSong={currentSong} />
			): null}
		</>
	);
};

export default Songs;
