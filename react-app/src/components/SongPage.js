import React, { useEffect, useState } from "react";
import { useParams, NavLink, Redirect } from "react-router-dom";
import SongPlayer from "./SongPlayer";
import Likes from "./Likes";
import { getUserById, getSongById, deleteSong } from "../services/song";
import { authenticate } from "../services/auth";
import "../styles/SongPage.css";

const SongPage = () => {
    const { songId } = useParams();
    const [playingSong, setPlayingSong] = useState(null);
    const [songUser, setSongUser] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [redirect, setRedirect] = useState(null);

    useEffect(() => {
        setIsLoading(true);
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
            return (<NavLink id="formLink" className="links edit-link" to={`/edit/songs/${songId}`} ><i className="fas fa-pencil-alt"></i></NavLink>)
        } else {
            return null
        };
    }

    const DeleteButton = () => {
			if (songUser.id === currentUser.id) {
				return (
					<button
                        className="delete-button"
						onClick={async () => {
							await deleteSong(songId);
							setRedirect(`/profile/${currentUser.id}`);
						}}
					>
						<i className="fas fa-trash"></i>
					</button>
				);
			} else {
				return null;
			}
		};

		if (redirect) {
			return <Redirect to={redirect} />;
		}

    return (
			<>
				<div className="wholePageContainer">
					<div className="bodyContainer">
						<div className="songPageContainer">
							<div className="description">
								<NavLink
									className="profileLink"
									to={`/profile/${songUser.id}`}
								>
									{songUser.username}
								</NavLink>
								<h2>{playingSong.title}</h2>
								<p>{playingSong.description}</p>
                                <div className="actions">
								    <Likes
								    	count={playingSong.likesCount}
								    	likedByUser={playingSong.likedByUser}
								    />
                                    <EditButton />
								    <DeleteButton />
                                </div>

							</div>
							<div className="songholder">
								<img
									alt="cover"
									id="coverArt"
									src={playingSong.image_url}
								></img>
								<SongPlayer playingSong={playingSong} />
							</div>
						</div>
					</div>
				</div>
			</>
		);
}

export default SongPage;
