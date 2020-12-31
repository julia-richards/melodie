import { v4 as uuidv4 } from "uuid";

export const uploadSong = async (
	title,
	length,
	description,
	imageUrl,
	songUrl
) => {
	const response = await fetch("/api/songs/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			title,
			length,
			description,
			image_url: imageUrl,
			song_url: songUrl,
		}),
	});
	return await response.json();
};

export const uploadFile = async (songFile) => {
	const formData = new FormData();
	const uniqKey = uuidv4();
	formData.append("file", songFile, `${uniqKey}-${songFile.name}`);

	const response = await fetch("/api/songs/upload", {
		method: "POST",
		body: formData,
	});
	return await response.json();
};

export const getUserById = async (id) => {
	const response = await fetch(`/api/users/${id}`);
  	return await response.json();
}

export const getSongById = async (id) => {
	const response = await fetch(`/api/songs/${id}`);
  	return await response.json();
}
