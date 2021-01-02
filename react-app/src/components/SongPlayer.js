import React from "react";


const SongPlayer = ((props) => {
    const { playingSong, passedRef } = props

    if (!playingSong) return null

    return (
        <div>
            <h3>Now playing: {playingSong.title}</h3>
            <audio controls ref={passedRef}>
                <source src={playingSong.song_url} type='audio/wav'></source>
            </audio>
        </div>
    );
})

export default SongPlayer
