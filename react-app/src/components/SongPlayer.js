import React from "react";
import {
  PlayButton,
  Progress,
  Icons, VolumeControl,
} from "react-soundplayer/components";
import { withSoundCloudAudio } from 'react-soundplayer/addons';

const SongPlayer = withSoundCloudAudio((props) => {
    const { playingSong } = props

    return (
        <div>
            {/* <h2>{playingSong.title}</h2> */}
            <audio controls>
                <source src={playingSong.song_url} type='audio/wav'></source>
            </audio>
        </div>
    );
})

export default SongPlayer
