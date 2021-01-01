import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SongPlayer from "./SongPlayer";
import { getUserById, getSongById } from "../services/song";
import "../styles/SongPage.css";

const SongPage = () => {
    const { songId } = useParams();
    const [playingSong, setPlayingSong] = useState(null);
    const [songUser, setSongUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const songRes = await getSongById(songId);
            const userRes = await getUserById(songRes.user);

            setPlayingSong(songRes);
            setSongUser(userRes);
        })()
        .then(setIsLoading(false));
    }, [songId])

    if (isLoading || !playingSong || !songUser) return null;

    if (songUser) {
        console.log(songUser)
    }

    return (
        <div className="songPageContainer">
            <h2>{playingSong.title}</h2>
            <h3>{songUser.username}</h3>
            <img src={playingSong.image_url}></img>
            <SongPlayer playingSong={playingSong}/>
        </div>
    )
}

export default SongPage;
