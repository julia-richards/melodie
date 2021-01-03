import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getUserLikedSongs, getUsersSongs, getAllSongs } from "../../src/services/profile";
import Songs from "./Songs";
import { getUserById } from "../services/song";
import "../styles/Profile.css"

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
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
      console.log(`allSongsRes: ${allSongsRes.songs}`)
      setUser(userRes);
      setAllSongs(allSongsRes.songs);
      // setUsersSongs(usersSongsRes);

      // setLikedSongs(likedSongsRes);
    })();
  }, []);

  useEffect(() => {
    let filteredSongs = allSongs.filter((song) => {
      // console.log(`song: ${JSON.stringify(song)}`)
      console.log(`song user: ${song.user}`)
      console.log(`id: ${id}`)
      return song.user == id
    });
    console.log(`filteredSongs: ${JSON.stringify(filteredSongs)}`)
    setUsersSongs(filteredSongs);
    setIsLoading(false);
  }, [allSongs])

  if (isLoading || !allSongs || !user || !usersSongs) return null;
  console.log(`usersSongs: ${JSON.stringify(usersSongs)}`)
  console.log(`usersSongs: ${usersSongs}`)

  return (
    <>
      <div className="profileContainer">
        <div className="userContainer">
          <img className="userImg" src={user.image_url}></img>
          <div className="userDescription">
            <div className="profileLinks">
              <h1>{user.username}</h1>
              <h3 className="links" >Uploads ({usersSongs.length})</h3>
            </div>
            <h3>{user.about}</h3>
          </div>
        </div>
        <div>
            <div>
              <div>
                <Songs searchSongs={usersSongs}/>
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
