import React from "react";


const SongPlayer = ((props) => {
    const { playingSong, passedRef } = props

    if (!playingSong) return null

    return (
        <div>
            <h3 className='links'>Now playing: {playingSong.title}</h3>
            <div className='playerContainer'>
                <audio controls autoPlay ref={passedRef}>
                    <source src={playingSong.song_url} type='audio/wav'></source>
                </audio>
            </div>
        </div>
    );
})

export default SongPlayer
