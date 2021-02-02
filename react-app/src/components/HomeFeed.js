import React, { useState, useEffect } from "react";
import Songs from "./Songs";

const HomeFeed = () => {
  const [songList, setSongList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const response = await fetch("/api/songs/");
      const songs = await response.json();
      setSongList(songs.songs);
    })();
    setIsLoading(false);
  }, []);

  if (!songList || isLoading) return null;

  return (
    <div className="wholePageContainer">
      <div className="bodyContainer">
        <div className="feedContainer">
          <h1 className="heading">Featured</h1>
          <Songs songList={songList} />
        </div>
      </div>
    </div>
  );
};

export default HomeFeed;
