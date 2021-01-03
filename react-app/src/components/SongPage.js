import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SongPlayer from "./SongPlayer";
import Likes from "./Likes";
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

    if (songId === "upload") return null;
    if (isLoading || !playingSong || !songUser) return null;

    return (
        <>
            <div className="songPageContainer">
                <div className="description">
                    <h3>{songUser.username}</h3>
                    <h2>{playingSong.title}</h2>
                    <p>{playingSong.description}</p>
                    <Likes count={playingSong.likesCount} likedByUser={playingSong.likedByUser} />
                </div>
                <div className="songholder">
                    <img alt="cover" id='coverArt' src={playingSong.image_url}></img>
                    <SongPlayer playingSong={playingSong} />
                </div>
            </div>
		</>
        );
}

export default SongPage;
