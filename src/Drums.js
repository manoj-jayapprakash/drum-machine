import './Drums.css';
import { Key } from './Key';
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

  return (
    <main id="drum-machine">
      <div className="keys">
        {data.map((d) => (
          <Key key={d.id} id={d.id} title={d.title} music={d.music} />
        ))}
      </div>
      <div className="controls">
        <div id="display">Music</div>
      </div>
    </main>
  );
};
