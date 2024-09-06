import React, { useRef, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const MusicPlayer = ({ song, onNextSong, onPrevSong }) => {
  const player = useRef(null);

  useEffect(() => {
    // Autoplay the player when the song changes
    if (player.current) {
      player.current.audio.current.play();
    }
  }, [song]); // Re-run whenever the song changes

  return (
    <div className="w-full max-w-4xl mx-auto bg-white border rounded-md shadow-md p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        🎶 Now Playing: {song.title} 🎶
      </h2>
      <AudioPlayer
        ref={player}
        src={song.src}
        autoPlay
        controls
        onEnded={onNextSong} // Automatically play the next song when the current one ends
        onClickNext={onNextSong}
        onClickPrevious={onPrevSong}
        className="w-full"
      />
    </div>
  );
};

export default MusicPlayer;
