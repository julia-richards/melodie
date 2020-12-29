export const uploadSong = async (title, length, description, imageUrl, songUrl) => {
    const response = await fetch("/api/songs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            length,
            description,
            imageUrl,
            songUrl,
        }),
    });
    return await response.json();
}
