import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import Likes from "./Likes";

const SongPreview = props => {
  const { song, handleClick } = props;
  const button = useRef(null);
  const imgPreview = useRef(null);

  const handleHoverOver = e => {
    button.current.style.opacity = 1;
    imgPreview.current.style.opacity = 0.6;
  };

  const handleHoverLeave = e => {
    button.current.style.opacity = 0;
    imgPreview.current.style.opacity = 1;
  };

  return (
    <li className="previewContainer" key={song.id}>
      <div
        onMouseOver={handleHoverOver}
        onMouseLeave={handleHoverLeave}
        className="imgContainer"
      >
        <img
          alt="songPrev"
          ref={imgPreview}
          className="previewImg"
          src={song.image_url}
        ></img>
        <span ref={button} className="btn">
          <i
            onClick={e => handleClick(song)}
            className="fas fa-play-circle fa-5x"
          ></i>
        </span>
      </div>
      <NavLink className="links" to={`/songs/${song.id}`}>
        {song.songImage}
        {song.title}
      </NavLink>
      <Likes
        songId={song.id}
        count={song.likesCount}
        likedByUser={song.likedByUser}
      />
    </li>
  );
};

export default SongPreview;
