import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SongPlayer from "../components/SongPlayer";

const Songs = () => {
	const [songs, setSongs] = useState([]);
	// const [currentSongId, setCurrentSongId] = useState(0);
	const [currentSong, setCurrentSong] = useState(null);

	useEffect(() => {
		(async () => {
			const response = await fetch("/api/songs/");
			const songs = await response.json();
			// console.log("these are songs", songs);
			setSongs(songs.songs);
		})();
	}, []);
	if (!songs) {
		return "No songs found";
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
