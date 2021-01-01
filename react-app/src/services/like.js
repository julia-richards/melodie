export const likeSong = async (songId) => {
	const response = await fetch(`/api/songs/${songId}/likes`, {
		method: "POST",
		body: songId,
	});
	return await response.json();
};
