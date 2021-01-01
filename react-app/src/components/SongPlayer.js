import React from "react";
import { PlayButton, Progress, VolumeControl } from 'react-soundplayer/components';
import { withCustomAudio, SoundPlayerContainer } from 'react-soundplayer/addons';


const SongPlayer = withCustomAudio((props) => {
    const {playingSong} = props
    // const { playingSong, playing, soundCloudAudio } = props

    // const play = () => {
    //     if (playing) {
    //         soundCloudAudio.pause();
    //     } else {
    //         soundCloudAudio.play();
    //     }
    // }

    return (
        <div>
            {/* <SoundPlayerContainer streamURL={playingSong.song_url} {...props} >

                <PlayButton {...props} />
                  <div>
                    <VolumeControl {...props}/>
                </div>
                <div>
                    <Progress {...props}/>
                </div>

            </SoundPlayerContainer> */}
            <audio controls>
                <source src={playingSong.song_url} type='audio/wav'></source>
            </audio>
        </div>
    );
})

export default SongPlayer
