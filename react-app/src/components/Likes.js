import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Likes.css";
import { likeSong } from "../services/like";

const Likes = props => {
  const [likes, setLikes] = useState(props.count);
  const [likedByUser, setLikedByUser] = useState(props.likedByUser);
  const params = useParams();
  const songId = params.songId || props.songId;

  const toggleLike = async () => {
    const res = await likeSong(songId);
    if (res.addedLike) {
      setLikes(likes + 1);
      setLikedByUser(true);
    } else {
      setLikes(likes - 1);
      setLikedByUser(false);
    }
  };

  return (
    <button className="like-button" onClick={toggleLike}>
      {likedByUser ? (
        <i
          className={`fas fa-heart fa-lg`}
          style={{ color: "red", fontSize: "1rem" }}
        ></i>
      ) : (
        <i
          className={`far fa-heart fa-lg`}
          style={{ color: "#33c3f0", fontSize: "1rem" }}
        ></i>
      )}
      {likes}
    </button>
  );
};

export default Likes;
