import './Key.css';

export const Key = (props) => {
  const playMusic = (e) => {
    e.target.children[0].play();
  };

  return (
    <>
      <button className="drum-pad" onClick={playMusic} data-music={props.title}>
        {props.id}
        <audio>
          <source src={props.music} type="audio/wav" />
        </audio>
      </button>
    </>
  );
};
