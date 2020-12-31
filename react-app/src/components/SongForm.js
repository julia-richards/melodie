import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { uploadSong, uploadFile } from "../services/song";
import "../styles/SongForm.css";

const SongForm = () => {
  const [title, setTitle] = useState("");
  const [length, setLength] = useState(2.34); // TODO: remove me?
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [songUrl, setSongUrl] = useState("");

  const [imageFile, setImageFile] = useState(null);
  const [songFile, setSongFile] = useState(null);
  const [redirect, setRedirect] = useState(null);

  const uploadNewSong = async (e) => {
    e.preventDefault();
    const song = await uploadSong(
      title,
      length,
      description,
      imageUrl,
      songUrl
    );
    console.log("added song ID", song.id);
    setRedirect(`/profile`) // TODO: update me to song?
  };

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleImageUpload = async (e) => {
    const res = await uploadFile(imageFile);
    setImageUrl(res.url)
  }

  const handleSongUpload = async (e) => {
    const res = await uploadFile(songFile);
    setSongUrl(res.url)
  }

  if (redirect) {
    return <Redirect to={redirect} />
  }

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
						<label>Select Image</label>
						<div>
                <input type="file" name="file" onChange={event =>
                        setImageFile(
                          event.currentTarget.files[0]
                        )
                      } />
                <button type="button" onClick={handleImageUpload} disabled={!imageFile}>
                  Upload
                </button>
                {!!imageUrl && <p>{imageUrl}</p>}
						</div>
					</div>
					<div>
						<label>Select Audio</label>
						<div>
              <input type="file" name="file" onChange={event =>
                        setSongFile(
                          event.currentTarget.files[0]
                        )
                      } />
              <button type="button" disabled={!songFile} onClick={handleSongUpload}>
                Upload
              </button>
							{!!songUrl && <p>{songUrl}</p>}
						</div>
					</div>

					<div>
						<button className="upload_song-button" type="submit" disabled={!songFile}>
							Upload
						</button>
					</div>
				</form>
			</div>
		</div>
  );
};;

export default SongForm;
