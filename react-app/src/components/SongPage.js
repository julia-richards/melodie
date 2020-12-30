import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SongPlayer from "./SongPlayer";

const SongPage = () => {
    const { songId } = useParams();
    const [songs, setSongs] = useState([]);
    const [playingSong, setPlayingSong] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const response = await fetch("/api/songs/");
			const songs = await response.json();
			setSongs(songs.songs);
        })()
    }, []);

    useEffect(() => {
        let filteredSong = songs[songId - 1]
        setPlayingSong(filteredSong);
        setIsLoading(false)
    }, [songs, songId])

    if (isLoading || !playingSong) return null;

    return (
        <div>
            <h2>{playingSong.title}</h2>
            <h3>{playingSong.user}</h3>
            <SongPlayer playingSong={playingSong}/>
        </div>
    )
}

export default SongPage;
