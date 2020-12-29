import React, { useState, useEffect } from "react";
import { uploadSong } from "../services/song";

const SongForm = () => {
    const [title, setTitle] = useState("");
    const [length, setLength] = useState(2.34);
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [songUrl, setSongUrl] = useState("");

    const uploadNewSong = async (e) => {
        e.preventDefault();
        console.log("upload song")
        console.log(title, length, description, imageUrl, songUrl)
        const song = await uploadSong(
            title,
            length,
            description,
            imageUrl,
            songUrl
        );
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
        <form onSubmit={uploadNewSong} >
            <div>
                <label>Song Title</label>
                <input
                    type="text"
                    name="title"
                    onChange={updateTitle}
                    value={title}>
                </input>
            </div>
            <div>
                <label>Description</label>
                <textarea
                    type="text"
                    name="description"
                    onChange={updateDescription}
                    value={description}>
                </textarea>
            </div>
            <div>
                <label>Image URL</label>
                <input
                    type="text"
                    name="imageUrl"
                    onChange={updateImageUrl}
                    value={imageUrl}>
                </input>
            </div>
            <div>
                <label>Audio URL</label>
                <input
                    type="text"
                    name="songUrl"
                    onChange={updateSongUrl}
                    value={songUrl}>
                </input>
            </div>
            <button type="submit">Upload Song</button>
        </form>
    )
};

export default SongForm;
