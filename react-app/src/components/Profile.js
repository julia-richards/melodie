import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllSongs } from "../../src/services/profile";
import Songs from "./Songs";
import { getUserById } from "../services/song";
import "../styles/Profile.css"

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [usersSongs, setUsersSongs] = useState([]);
  const { id } = useParams();

  useEffect(() => {
		(async () => {
      setIsLoading(true);
			const userRes = await getUserById(id);
			setUser(userRes);
      const { songs } = await getAllSongs();
      let userSongs = songs.filter((song) => song.user == id);
      setUsersSongs(userSongs);
      setIsLoading(false);
    })();
	}, [id]);

  if (isLoading || !user || !usersSongs) return null;

  return (
		<>
			<div className="profileContainer">
				<div className="userContainer">
					<img className="userImg" src={user.image_url}></img>
					<div className="userDescription">
						<div className="profileLinks">
							<h1>{user.username}</h1>
							<h3 id="uploadHeading">Uploads ({usersSongs.length})</h3>
						</div>
						<h3>{user.about}</h3>
					</div>
				</div>
				<div className="profileSongsContainer">
					<div>
						<Songs songList={usersSongs} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
