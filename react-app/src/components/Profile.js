import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getUserLikedSongs, getUsersSongs, getAllSongs } from "../../src/services/profile";
import Songs from "./Songs";
import { getUserById } from "../services/song";
import "../styles/Profile.css"

const Profile = () => {
  const [user, setUser] = useState(null);
  const [allSongs, setAllSongs] = useState([]);
  const [usersSongs, setUsersSongs] = useState([]);
  // const [likedSongs, setLikedSongs] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const userRes = await getUserById(id);
      const allSongsRes = await getAllSongs();
      // const usersSongsRes = await getUsersSongs(userId);
      // const likedSongsRes = await getUserLikedSongs(userId);

      setUser(userRes);
      setAllSongs(allSongsRes);
      // setUsersSongs(usersSongsRes);

      // setLikedSongs(likedSongsRes);
    })();
  }, []);

  if (!allSongs || !user) return null;

  return (
    <>
      <div className="profileContainer">
        <div className="userContainer">
          <img className="userImg" src={user.image_url}></img>
          <div className="userDescription">
            <h1>{user.username}</h1>
            <h3>{user.about}</h3>
          </div>
        </div>
        <div>
            <div>
              <h3 >User's Uploads</h3>
              <div>
                <Songs songResults={allSongs}/>
              </div>
              {/* <h3>My Liked Songs</h3>
              <div>
                <Songs likedSongs={likedSongs} />
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
