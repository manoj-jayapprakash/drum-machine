import './Key.css';

export const Key = (props) => {
  const playMusicOnClick = (e) => {
    e.target.children[0].play();
    props.onPress(e.target.dataset.music);
  };

  const playMusicOnKeyPress = (e) => {
    console.log(e);
  };

  return (
    <>
      <button
        className="drum-pad"
        onClick={playMusicOnClick}
        onKeyDown={playMusicOnKeyPress}
        data-music={props.title}
      >
        {props.id}
        <audio>
          <source src={props.music} type="audio/wav" />
        </audio>
      </button>
    </>
  );
};
