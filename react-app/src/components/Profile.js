import React, { useState, useEffect } from "react";
import { NavLink, Link, useParams } from "react-router-dom";
import {
  getUserLikedSongs,
  getUsersSongs,
  getAllSongs,
} from "../../src/services/profile";
import Songs from "./Songs";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [usersSongs, setUsersSongs] = useState(null);
  const [allSongs, setAllSongs] = useState(null);
  const { profileId } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getUsersSongs(profileId);
      const res1 = await getUserLikedSongs(profileId);
      const res2 = await getAllSongs(profileId);

      setProfile(res1);
      setUsersSongs(res)
      setAllSongs(res2);
    })();
  }, []);
  return (
    <>
      {profile && <h1>{profile.username}</h1>}
      {profile && (
        <h2>
          About {profile.username}: {profile.about}
        </h2>
      )}
      {profile && <h3>MySongs</h3>}
      <div>
        {profile &&
          profile.songs.map((song, id) => <Songs song={song} key={song.id} />)}
        <div>
          {usersSongs && <h3>My Liked Songs</h3>}
          <div>
            {usersSongs &&
              usersSongs.songs.map((song, id) => (
                <Songs song={song} key={song.id} />
              ))}
          </div>
          <div>
            <h3>All Songs</h3>
            {/* {allSongs && <h3>Song List</h3>}
            <div> */}
            {allSongs &&
              allSongs.songs.map((song, id) => (
                <Songs song={song} key={song.id} />
              ))}
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Profile;
