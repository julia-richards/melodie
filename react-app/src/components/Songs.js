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
	const [startingIndex, setStartingIndex] = useState(0);
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
			setSongResults(searchSongs.slice(0, 5))
			console.log(searchSongs)
		} else {
			setSongResults(songs.slice(0, 5))
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

	const nextClick = (e) => {
		if (searchSongs) {
			if (searchSongs.length <= 5) {
				return
			}
		}
		setStartingIndex((startingIndex + 5) % songs.length)
		if ((startingIndex + 5) >= songs.length) {
			const displaySongs = songs.slice(startingIndex)
			let pointer = 0;
			while (displaySongs.length < 5) {
				displaySongs.push(songs[pointer++]);
			}
			return setSongResults(displaySongs);
		}
		setSongResults(songs.slice(startingIndex, startingIndex + 5))
	}

	if (!songs) {
		return "No songs found";
	}

	const songComponents = songResults.map((song) => {
		console.log(`songsFeed: ${song}`)
		return (
			<SongPreview key={song.id} handleClick={handleClick} song={song}/>
		)
	});

	if (isLoading) return null;

	return (
		<div className='feedContainer'>
			<div className="feed">
				<span className="feedBtn">
					<i className="fas fa-angle-double-left fa-5x"></i>
				</span>
				<ul className="previews">{songComponents}</ul>
				<span onClick={nextClick} className="feedBtn">
					<i className="fas fa-angle-double-right fa-5x"></i>
				</span>
			</div>
			{ currentSong ? (
				<SongPlayer passedRef={sp} playingSong={currentSong} />
			): null}
		</div>
	);
};

export default Songs;
