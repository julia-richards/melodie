import React from "react";
import { PlayButton, Progress, VolumeControl } from 'react-soundplayer/components';
import { withSoundCloudAudio } from 'react-soundplayer/addons';

const hardCodeSong = {title: 'New Years Eve', length: 2.7, description:'', image_url: 'https://melodieapp.s3.amazonaws.com/Untitled_Artwork.jpg', song_url: 'https://melodieapp.s3.amazonaws.com/NYE+mixed.wav', user_id: 1}


const SongPlayer = (props) => {
    const { playingSong } = props

    return (
        <div>
            {/* <h2>{playingSong.title}</h2> */}
            <audio controls>
                <source src={playingSong.song_url} type='audio/wav'></source>
            </audio>
        </div>
    );
}

export default SongPlayer

//  React.memo(SongList)
