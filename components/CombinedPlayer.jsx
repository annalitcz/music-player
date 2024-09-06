import React, { useRef, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const CombinedPlayer = ({
  playlist,
  currentSongIndex,
  onSelectSong,
  onNextSong,
  onPrevSong,
}) => {
  const player = useRef(null);

  useEffect(() => {
    // Autoplay the player when the song changes
    if (player.current) {
      player.current.audio.current.play();
    }
  }, [currentSongIndex]); // Re-run whenever the song changes

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto bg-white p-5 rounded-md shadow-lg">
      <div className="flex flex-col w-full gap-4 mb-10">
        {/* Playlist */}
        <div className="w-full max-h-[calc(100vh-300px)] overflow-y-auto p-4 bg-white border rounded-md shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-5 text-center">
            🎵 Song List 🎵
          </h3>
          <table className="w-full text-left border-collapse">
            <tbody>
              {playlist.map((song, index) => (
                <tr
                  key={index}
                  onClick={() => onSelectSong(index)}
                  className={`cursor-pointer transition-colors duration-300 ${
                    currentSongIndex === index
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-100 text-blue-600"
                  }`}
                >
                  <td className="p-3">{song.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <AudioPlayer
                ref={player}
                src={playlist[currentSongIndex]?.src}
                autoPlay
                controls
                onEnded={onNextSong} // Automatically play the next song when the current one ends
                onClickNext={onNextSong}
                onClickPrevious={onPrevSong}
                className="w-full"
              />
      </div>
    </div>
  );
};

export default CombinedPlayer;
