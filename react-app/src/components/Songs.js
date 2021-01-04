import React, { useState, useEffect, useRef } from "react";
import SongPlayer from "../components/SongPlayer";
import SongPreview from "../components/SongPreview";
import "../styles/Songs.css";

const Songs = ({songList}) => {
	const [songResults, setSongResults] = useState([]);
	const [currentSong, setCurrentSong] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [playPromise, setPlayPromise] = useState(null);
	const [startingIndex, setStartingIndex] = useState(0);
	const sp = useRef(null);

	useEffect(() => {
		setSongResults(songList.slice(0, 5));
		setIsLoading(false);
	}, [songList]);

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
		if (songList.length <= 5) {
			return
		}
		setStartingIndex((startingIndex + 5) % songList.length)
		if ((startingIndex + 5) >= songList.length) {
			const displaySongs = songList.slice(startingIndex)
			let pointer = 0;
			while (displaySongs.length < 5) {
				displaySongs.push(songList[pointer++]);
			};
			return setSongResults(displaySongs);
		};
		setSongResults(songList.slice(startingIndex, startingIndex + 5))
	};

	const backClick = (e) => {
		if (songList.length <= 5) {
			return
		}
		let index = startingIndex - 5;
		if (index < 0) {
			index+=(songList.length)
		}
		setSongResults(songList.slice(index, index + 5))
		setStartingIndex(index);
	};

	const songComponents = songResults.map((song) => {
		return <SongPreview key={song.id} handleClick={handleClick} song={song} />;
	});

	if (isLoading) return null;

	if (!songResults || !songResults.length) {
		return (
			<div>
				<p style={{ textAlign: "center" }}>No songs uploaded, yet</p>
			</div>
		);
	}

	return (
		<div className='feedContainer'>
			<div className="feed">
				<span onClick={backClick} className="feedBtn">
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
