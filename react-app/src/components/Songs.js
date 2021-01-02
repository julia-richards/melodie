import React, { useState, useEffect, useRef } from "react";
import SongPlayer from "../components/SongPlayer";
import SongPreview from "../components/SongPreview";
import "../styles/Songs.css";

const Songs = ({searchSongs}) => {
	const [songs, setSongs] = useState([]);
	const [songResults, setSongResults] = useState([]);
	const [currentSong, setCurrentSong] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [playPromise, setPlayPromise] = useState(null);
	const sp = useRef(null);

	useEffect(() => {
		(async () => {
			const response = await fetch("/api/songs/");
			const songs = await response.json();
			setSongs(songs.songs);
		})()
	}, []);

	useEffect(() => {
		if (searchSongs) {
			setSongResults(searchSongs)
		} else {
			setSongResults(songs)
		};
		setIsLoading(false);
	}, [songs, searchSongs]);

	const handleClick = async (song) => {
		setCurrentSong(song);
		if (sp.current) {
			if (playPromise) {
				await playPromise
			}
			sp.current.pause();
			sp.current.load();
			setPlayPromise(sp.current.play());
		};
	}

	if (!songs) {
		return "No songs found";
	}

	const songComponents = songResults.map((song) => {
		return (
			<SongPreview key={song.id} handleClick={handleClick} song={song}/>
		)
	});

	if (isLoading) return null;

	return (
		<>
			<ul className="previews">{songComponents}</ul>
			{ currentSong ? (
				<SongPlayer passedRef={sp} playingSong={currentSong} />
			): null}
		</>
	);
};

export default Songs;
