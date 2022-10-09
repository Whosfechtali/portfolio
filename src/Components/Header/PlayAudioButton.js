import React, { useState, useEffect, useRef } from 'react';
import song from "../../resources/audio.mp3";

var Sound = 'OFF'

function PlayAudioButton(){

  const [SoundOFF, SetSoundOFF] = useState('true')
  useEffect(() => {
    PlaySound()
  }, []);

  const audioRef = useRef(new Audio(song));

  function PlaySound(){

    SetSoundOFF(!SoundOFF)

     switch(SoundOFF) {
       case false:
          audioRef.current.play();
           console.log("Play")
           Sound = 'ON'
        break;
        case true:
          audioRef.current.pause();
          console.log("Stop")
          Sound = 'OFF'
        break;
    }
  }

  return(
    <div className=" mr-3 flex mt-4 ml-3 space-x-2 absolute top-0 right-0"
    style={{zIndex:1}}>
    <button
      className="w-6">
      <img src={SoundOFF ? './resources/sound-on.png' : './resources/sound-off.png'}
      alt="Sound ON"
      onClick={PlaySound}
      />
      </button>
      <span>Sound <span  style={{ color: SoundOFF ? "#009487" : "#FD0755" }} >{Sound}</span></span>
    </div>
  )
}
export default PlayAudioButton;
