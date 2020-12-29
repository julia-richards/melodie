import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Songs = () => {
	const [songs, setSongs] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await fetch("/api/songs/");
			const songs = await response.json();
			console.log("these are songs", songs);
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
			</li>
		);
	});
	return (
		<>
			<h1>Song List: </h1>
			<ul>{songComponents}</ul>
		</>
	);
};

export default Songs;
