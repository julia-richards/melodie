export const uploadSong = async (title, length, description, imageUrl, songUrl) => {
    const response = await fetch("/api/songs/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			// TODO:add csrf token
			title,
			length,
			description,
			image_url: imageUrl,
			song_url: songUrl,
		}),
	});
    return await response.json();
}
