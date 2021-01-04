import { v4 as uuidv4 } from "uuid";

export const uploadSong = async (title, description, imageUrl, songUrl) => {
  const response = await fetch("/api/songs/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
      image_url: imageUrl,
      song_url: songUrl,
    }),
  });
  if (response.status >= 200 && response.status < 300) {
    return await response.json();
  } else {
    let error = new Error(response.statusText);
    error.status = response.status;
    try {
      error.body = await response.json();
    } catch (_e) {
      // swallow parse error
    }
    throw error;
  }
};
export const getSongById = async (id) => {
  const response = await fetch(`/api/songs/${id}`);
  return await response.json();
};

export const editSong = async (id, title, description, imageUrl, songUrl) => {
  const response = await fetch(`/api/songs/edit/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
      image_url: imageUrl,
      song_url: songUrl,
    }),
  });
  if (response.status >= 200 && response.status < 300) {
    return await response.json();
  } else {
    let error = new Error(response.statusText);
    error.status = response.status;
    try {
      error.body = await response.json();
    } catch (_e) {}
    throw error;
  }
};

export const editFile = async (songFile) => {
  const formData = new FormData();
  const uniqKey = uuidv4();
  formData.append("file", songFile, `${uniqKey}-${songFile.name}`);

  const response = await fetch(`/api/songs/upload`, {
    method: "PATCH",
    body: formData,
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

export const deleteSong = async (songId) => {
	const response = await fetch(`/api/songs/${songId}`, { method: "DELETE" });
	return await response.json();
};

export const getUserById = async (id) => {
  const response = await fetch(`/api/users/${id}`);
  return await response.json();
};
