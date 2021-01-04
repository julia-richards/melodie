import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import SongPlayer from "./SongPlayer";
import Likes from "./Likes";
import { getUserById, getSongById } from "../services/song";
import { authenticate } from "../services/auth";
import "../styles/SongPage.css";

const SongPage = () => {
    const { songId } = useParams();
    const [playingSong, setPlayingSong] = useState(null);
    const [songUser, setSongUser] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        (async () => {
            const songRes = await getSongById(songId);
            const userRes = await getUserById(songRes.user);
            const currentUser = await authenticate();

            setPlayingSong(songRes);
            setSongUser(userRes);
            setCurrentUser(currentUser);
        })()
        .then(setIsLoading(false));
    }, [songId])

    if (songId === "upload") return null;
    if (isLoading || !playingSong || !songUser ||!currentUser) return null;

    const EditButton = () => {
        if (songUser.id === currentUser.id) {
            return (<NavLink id="formLink" className="links" to={`/edit/songs/${songId}`} >Edit Song</NavLink>)
        } else {
            return null
        };
    }

    return (
        <>
            <div className="songPageContainer">
                <div className="description">
                    <EditButton />
                    <NavLink id="profileLink" className="links" to={`/profile/${songUser.id}`}>{songUser.username}</NavLink>
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
