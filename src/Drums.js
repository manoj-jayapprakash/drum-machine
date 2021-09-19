import { useState, useEffect } from 'react';

import './Drums.css';
import boom from './assets/sounds/boom.wav';
import clap from './assets/sounds/clap.wav';
import hihat from './assets/sounds/hihat.wav';
import kick from './assets/sounds/kick.wav';
import openhat from './assets/sounds/openhat.wav';
import ride from './assets/sounds/ride.wav';
import snare from './assets/sounds/snare.wav';
import tink from './assets/sounds/tink.wav';
import tom from './assets/sounds/tom.wav';

export const Drums = () => {
  const [musicTitle, setMusicTitle] = useState('');
  const [, setKeyPressed] = useState(false);
  const data = [
    {
      id: 'Q',
      title: 'Boom',
      music: boom,
    },

    {
      id: 'W',
      title: 'Clap',
      music: clap,
    },
    {
      id: 'E',
      title: 'Hihat',
      music: hihat,
    },
    {
      id: 'A',
      title: 'Kick',
      music: kick,
    },
    {
      id: 'S',
      title: 'Openhat',
      music: openhat,
    },
    {
      id: 'D',
      title: 'Ride',
      music: ride,
    },
    {
      id: 'Z',
      title: 'Snare',
      music: snare,
    },
    {
      id: 'X',
      title: 'Tink',
      music: tink,
    },
    {
      id: 'C',
      title: 'Tom',
      music: tom,
    },
  ];

  const playMusic = (e) => {
    e.target.children[0].play();
    setMusicTitle(e.target.id);
  };

  useEffect(() => {
    const downHandler = (e) => {
      setKeyPressed(true);

      const musicToPlay = data.filter(
        (d) => d.id.toLowerCase() === e.key.toLowerCase()
      );
      if (musicToPlay.length === 0) return;
      const audioElement = document.querySelector(`#${musicToPlay[0].id}`);
      audioElement.play();
      setMusicTitle(musicToPlay[0].title);
    };
    const upHandler = (e) => {
      setKeyPressed(false);
    };
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);
  return (
    <main id="drum-machine">
      <div className="keys">
        {data.map((d) => (
          <button
            key={d.id}
            className="drum-pad"
            onClick={playMusic}
            id={d.title}
          >
            {d.id}
            <audio className="clip" id={d.id} src={d.music} type="audio/wav" />
          </button>
        ))}
      </div>
      <div className="controls">
        <div id="display">{musicTitle}</div>
      </div>
    </main>
  );
};
