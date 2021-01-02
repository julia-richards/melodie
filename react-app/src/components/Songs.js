import React, { useState, useEffect, useRef } from "react";
import { NavLink, useParams } from "react-router-dom";
import SongPlayer from "../components/SongPlayer";
import "../styles/Songs.css";

const Songs = ({searchSongs}) => {
	const [songs, setSongs] = useState([]);
	const [songResults, setSongResults] = useState([]);
	const [currentSong, setCurrentSong] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [player, setPlayer] = useState(null);
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

	const handleClick = (song) => {
		setCurrentSong(song);
		if (sp.current) {
			sp.current.pause();
			sp.current.load();
			sp.current.play();
		}
		// setPlayer(<SongPlayer playingSong={currentSong} />)
	}

	if (!songs) {
		return "No songs found";
	}

	const songComponents = songResults.map((song) => {
		return (
			<li key={song.id}>
				<img className='previewImg' src={song.image_url}></img>
				<NavLink to={`/songs/${song.id}`}>
					{song.songImage}
					{song.title}
				</NavLink>
				<i className='playBtn' onClick={(e) => handleClick(song)} className="fas fa-play-circle"></i>
			</li>
		)
	});

	if (isLoading) return null;

	return (
		<>
			{/* { currentSong ? (<h1>{currentSong.title}</h1>) : null} */}
			<ul className="previews">{songComponents}</ul>
			{ currentSong ? (
				// player
				<SongPlayer passedRef={sp} playingSong={currentSong} />
			): null}
		</>
	);
};

export default Songs;
