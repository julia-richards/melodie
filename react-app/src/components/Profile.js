import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getUserLikedSongs, getUsersSongs, getAllSongs } from "../../src/services/profile";
import Songs from "./Songs";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [likedSongs, setLikedSongs] = useState(null);
  const [usersSongs, setUsersSongs] = useState(null);
  const { profileId } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getUsersSongs(profileId);
      const res1 = await getUserLikedSongs(profileId);
      const res2 = await getAllSongs(profileId);

      setProfile(res);
      setLikedSongs(res1)
      setUsersSongs(res2);
      console.log(res2.songs)
    })();
  }, []);

  if (!profile || !likedSongs || !usersSongs) return null;

  return (
    <>
      <div className="songPageContainer">
      <h1>{profile.username}</h1>
      <h2>About: {profile.about}</h2>
      <div>
          <div>
            <h3>User's Uploads</h3>
            <div>
              <Songs usersSongs={usersSongs}/>
            </div>
          <h3>My Liked Songs</h3>
          <div>
            <Songs likedSongs={likedSongs} />
          </div>
        </div>
          <NavLink to="/songs/upload">Upload Song</NavLink>
        </div>
      </div>
    </>
  );
};

export default Profile;
