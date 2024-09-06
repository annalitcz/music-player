'use client';
import Head from 'next/head';
import { useState } from 'react';
import MusicPlayer from '../components/MusicPlayer';
import Playlist from '../components/Playlist';
import musicFiles from '../assets/music';

export default function Home() {
  const playlist = [
    { title: 'Reckless', src: musicFiles.reckless },
    { title: '8 Letters', src: musicFiles.eightLetters },
    { title: 'We Dont Talk Anymore', src: musicFiles.wedonttalkanymore },
    { title: 'Drunk Text', src: musicFiles.drunktxt },
    { title: 'Hurts So Good', src: musicFiles.hurtssogood },
    { title: 'Shameless', src: musicFiles.shameless },
    { title: 'Side To Side', src: musicFiles.sidetoside},
    { title: 'Alibi', src: musicFiles.alibi},
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  // Function to play the next song in the playlist
  const handleNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  // Function to play the previous song in the playlist
  const handlePrevSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? playlist.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 to-orange-200 p-5">
      <Head>
        <title>Music Player with Playlist</title>
        <meta name="description" content="A simple music player with playlist built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      <main className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold text-white mb-10 text-center shadow-lg">
          Music Playlist
        </h1>

        {/* Container untuk Playlist dan MusicPlayer */}
        <div className="flex justify-between gap-10 w-90">
          {/* Playlist component */}
          <Playlist
            playlist={playlist}
            currentSongIndex={currentSongIndex}
            onSelectSong={setCurrentSongIndex}
          />

          {/* Music Player */}
          <MusicPlayer
            song={playlist[currentSongIndex]}
            onNextSong={handleNextSong}
            onPrevSong={handlePrevSong}
          />
        </div>
      </main>
    </div>
  );
}
