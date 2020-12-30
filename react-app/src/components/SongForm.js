import React, { useState, useEffect } from "react";
import { uploadSong } from "../services/song";
import "../styles/SongForm.css";

const SongForm = () => {
  const [title, setTitle] = useState("");
  const [length, setLength] = useState(2.34); // TODO: remove me?
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [songUrl, setSongUrl] = useState("");

  const uploadNewSong = async (e) => {
    e.preventDefault();
    const song = await uploadSong(
      title,
      length,
      description,
      imageUrl,
      songUrl
    );
    console.log("uploaded song:", song);
  };

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const updateImageUrl = (e) => {
    setImageUrl(e.target.value);
  };

  const updateSongUrl = (e) => {
    setSongUrl(e.target.value);
  };

  return (
    <div className="song_form-outer">
      <div className="song-form_container">
        <form className="song-form" onSubmit={uploadNewSong}>
          <div>
            <label>Song Title</label>
            <input
              type="text"
              name="title"
              onChange={updateTitle}
              value={title}
            ></input>
          </div>
          <div>
            <label>Description</label>
            <textarea
              type="text"
              name="description"
              onChange={updateDescription}
              value={description}
            ></textarea>
          </div>
          <div>
            <label>Image URL</label>
            <div>
              <input
                type="text"
                name="imageUrl"
                onChange={updateImageUrl}
                value={imageUrl}
              ></input>
            </div>
          </div>
          <div>
            <label>Audio URL</label>
            <input
              type="text"
              name="songUrl"
              onChange={updateSongUrl}
              value={songUrl}
            ></input>
          </div>
          <div>
            <button className="upload_song-button" type="submit">
              Upload Song
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};;

export default SongForm;
