import React, { useState, useCallback } from "react";
import { Redirect } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { uploadSong, uploadFile } from "../services/song";
import "../styles/SongForm.css";

const validationErrorCode = 422;

const SongForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [songUrl, setSongUrl] = useState("");

  const [redirect, setRedirect] = useState(null);

  const [isImageUploading, setIsImageUploading] = useState(false);
  const [isSongUploading, setIsSongUploading] = useState(false);

  const [error, setError] = useState(null);

  const uploadNewSong = async (e) => {
    e.preventDefault();
    try {
      const song = await uploadSong(title, description, imageUrl, songUrl);
      setRedirect(`/songs/${song.id}`);
    } catch (submissionError) {
      setError(submissionError);
    }
  };

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const onImageDrop = useCallback(
    async (acceptedFiles) => {
      setIsImageUploading(true);
      const imageFile = acceptedFiles[0]; // only 1 accepted
      const res = await uploadFile(imageFile);
      setImageUrl(res.url);
      setIsImageUploading(false);
    },
    [setImageUrl, setIsImageUploading]
  );
  const {
    getRootProps: getImageRootProps,
    getInputProps: getImageInputProps,
    isDragActive: isImageDragActive,
  } = useDropzone({ onDrop: onImageDrop });

  const onSongDrop = useCallback(
    async (acceptedFiles) => {
      setIsSongUploading(true);
      const songFile = acceptedFiles[0]; // only 1 accepted
      const res = await uploadFile(songFile);
      setSongUrl(res.url);
      setIsSongUploading(false);
    },
    [setSongUrl, setIsSongUploading]
  );
  const {
    getRootProps: getSongRootProps,
    getInputProps: getSongInputProps,
    isDragActive: isSongDragActive,
  } = useDropzone({ onDrop: onSongDrop });

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
		<div className="wholePageContainer">
			<div className="song_form-outer">
				<div className="song-form_container">
					<form className="song-form" onSubmit={uploadNewSong}>
						{!!error && error.status !== validationErrorCode && (
							<div className="song-form__error">
								<h4>Oh no! An error occurred</h4>
								<details>
									<summary>Error Details</summary>
									<pre>{JSON.stringify(error, null, 2)}</pre>
								</details>
							</div>
						)}
						<div className="song-form__title">
							<input
								type="text"
								name="title"
								placeholder="Song Title"
								onChange={updateTitle}
								value={title}
								required
							></input>
							{!!error?.body?.errors?.title && (
								<p style={{ color: "red" }}>{error.body.errors.title}</p>
							)}
						</div>
						<div className="song-form__description">
							<textarea
								type="text"
								name="description"
								placeholder="Song Description"
								onChange={updateDescription}
								value={description}
							></textarea>
						</div>
						<div className="song-form__image">
							<div className="drop" {...getImageRootProps()}>
								<input {...getImageInputProps()} />
								{!!imageUrl ? (
									<>
										<img
											src={imageUrl}
											alt="new song"
											style={{ maxWidth: 100, height: "auto" }}
										/>{" "}
										<button onClick={() => setImageUrl(null)}>
											<i className="fas fa-trash"></i>
										</button>{" "}
									</>
								) : isImageUploading ? (
									<p>Uploading...</p>
								) : isImageDragActive ? (
									<p>Drop the file here ...</p>
								) : (
									<>
										<i className="fas fa-image"></i>{" "}
										<p>
											Drag 'n' drop image file here, or click to select files
										</p>
									</>
								)}
							</div>
						</div>
						<div className="song-form__audio">
							<div className="drop" {...getSongRootProps()}>
								<input {...getSongInputProps()} />
								{!!songUrl ? (
									<>
										<p>
											<audio controls>
												<source src={songUrl} type="audio/wav"></source>
											</audio>
										</p>{" "}
										<button onClick={() => setSongUrl(null)}>
											<i className="fas fa-trash"></i>
										</button>{" "}
									</>
								) : isSongUploading ? (
									<p>Uploading...</p>
								) : isSongDragActive ? (
									<p>Drop the file ...</p>
								) : (
									<>
										<i className="fas fa-microphone-alt"></i>{" "}
										<p>
											Drag 'n' drop song file here, or click to select files
										</p>
									</>
								)}
							</div>
							{!!error?.body?.errors?.song_url && (
								<p style={{ color: "red" }}>{error.body.errors.song_url}</p>
							)}
						</div>
						<div className="song-form__submit">
							<button className="upload_song-button" type="submit">
								Upload
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SongForm;
