import React from 'react';

const Playlist = ({ playlist, currentSongIndex, onSelectSong }) => {
  return (
    <div className="mb-10">
      <div className="w-72 max-h-[calc(100vh-200px)] mx-auto overflow-y-auto p-4 border rounded-md bg-white">
        <table className="w-full text-left border-collapse">
          <tbody>
            {playlist.map((song, index) => (
              <tr
                key={index}
                onClick={() => onSelectSong(index)}
                className={`cursor-pointer transition-colors duration-300 ${
                  currentSongIndex === index ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 text-blue-600'
                }`}
              >
                <td className="p-3">{song.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        @layer components {
          .text-shadow-md {
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
          }
        }
      `}</style>
    </div>
  );
};

export default Playlist;
