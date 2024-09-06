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
    <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl p-6 shadow-lg text-center my-10">
      <h2 className="text-lg font-bold text-gray-800 mb-4 font-poppins overflow-hidden whitespace-nowrap">
        <span className="animate-marquee">Now Playing: {song.title} 🎶</span>
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
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          box-sizing: border-box;
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MusicPlayer;
