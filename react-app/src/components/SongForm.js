import React, { useState, useCallback } from "react";
import { Redirect } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { uploadSong, uploadFile } from "../services/song";
import "../styles/SongForm.css";

const SongForm = () => {
  const [title, setTitle] = useState("");
  const [length, setLength] = useState(2.34); // TODO: remove me?
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [songUrl, setSongUrl] = useState("");

  const [songFile, setSongFile] = useState(null);
  const [redirect, setRedirect] = useState(null);

  const [isImageUploading, setIsImageUploading] = useState(false)

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

  const onImageDrop = useCallback(async (acceptedFiles) => {
    setIsImageUploading(true)
    const imageFile = acceptedFiles[0]; // only 1 accepted
		const res = await uploadFile(imageFile);
    setImageUrl(res.url)
    setIsImageUploading(false)
  }, [setImageUrl, setIsImageUploading]);
  const { getRootProps: getImageRootProps, getInputProps: getImageInputProps, isDragActive: isImageDragActive } = useDropzone({ onDrop: onImageDrop });

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
            <div {...getImageRootProps()}>
              <input {...getImageInputProps()} />
              {
                !!imageUrl ? <><img src={imageUrl} style={{maxWidth: 60, height: "auto"}}/> <button onClick={()=>setImageUrl(null)}>Remove Image</button> </>:
                isImageUploading ? <p>Uploading...</p>:
                isImageDragActive ?
                  <p>Drop the files here ...</p> :
                  <p>Drag 'n' drop some files here, or click to select files</p>
              }

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
