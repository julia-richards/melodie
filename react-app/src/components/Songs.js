import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SongPlayer from "../components/SongPlayer";

const Songs = ({searchSongs}) => {
	const [songs, setSongs] = useState([]);
	const [currentSong, setCurrentSong] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const response = await fetch("/api/songs/");
			const songs = await response.json();
			setSongs(songs.songs);
		})()
		.then(() => setIsLoading(false))
	}, []);

	useEffect(() => {
		if (searchSongs && searchSongs !== songs) {
			setSongs(searchSongs)
		}
	}, [songs]);

	if (!songs) {
		return "No songs found";
	}

	console.log(`songs, searchSongs: ${searchSongs}`)

	const songComponents = songs.map((song) => {
		return (
			<li key={song.id}>
				<NavLink to={`/songs/${song.id}`}>
					{song.songImage}
					{song.title}
				</NavLink>
				<button onClick={() => setCurrentSong(song)}>Play Button</button>
			</li>
		)
	});

	if (isLoading) return null;

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
