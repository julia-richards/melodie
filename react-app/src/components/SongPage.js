import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SongPlayer from "./SongPlayer";

const SongPage = () => {
    const { songId } = useParams();
    const [songs, setSongs] = useState([]);
    const [playingSong, setPlayingSong] = useState(null);
    const [songUser, setSongUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

	// useEffect(() => {
	// 	(async () => {
	// 		const response = await fetch("/api/songs/");
	// 		const songs = await response.json();
	// 		setSongs(songs.songs);
    //     })()
    // }, []);

    // useEffect(() => {
    //     let filteredSong = songs[songId - 1]
    //     setPlayingSong(filteredSong);
    //     setIsLoading(false)
    // }, [songs, songId])

    useEffect(() => {
        (async () => {
            const response = await fetch(`/api/songs/song/${songId}`);
            const data = await response.json();
            setPlayingSong(data.song);
            // setSongUser(data.user);
        })()
        .then(setIsLoading(false))
    }, [songId])

    if (isLoading || !playingSong) return null;

    if (playingSong) {
        console.log(playingSong)
    }

    return (
        <div>
            <h2>{playingSong.title}</h2>
            {/* <h3>{playingSong.user}</h3> */}
            {/* <h3>{songUser.username}</h3> */}
            <SongPlayer playingSong={playingSong}/>
        </div>
    )
}

export default SongPage;
