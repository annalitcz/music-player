'use client';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import CombinedPlayer from '../components/CombinedPlayer';
import musicFiles from '../public/music';

export default function Home() {
  const playlist = [
    { title: 'Reckless', src: musicFiles.reckless },
    { title: '8 Letters', src: musicFiles.eightLetters },
    { title: 'We Dont Talk Anymore', src: musicFiles.wedonttalkanymore },
    { title: 'Drunk Text', src: musicFiles.drunktxt },
    { title: 'Hurts So Good', src: musicFiles.hurtssogood },
    { title: 'Shameless', src: musicFiles.shameless },
    { title: 'People', src: musicFiles.people},
    { title: 'Mary On A Cross', src: musicFiles.marionacross},
    { title: 'Rewrite The Stars', src: musicFiles.rewritethestar},
    { title: 'Fireflies', src: musicFiles.fireflies},
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(()=>{
    document.title = 'Music Player'
  },[])

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 p-5">
      <Head>
        <title>Music Player with Playlist</title>
        <meta name="description" content="A simple music player with playlist built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      <main className="flex flex-col items-center w-full max-w-4xl">
        {/* CombinedPlayer component */}
        <CombinedPlayer
          playlist={playlist}
          currentSongIndex={currentSongIndex}
          onSelectSong={setCurrentSongIndex}
          onNextSong={handleNextSong}
          onPrevSong={handlePrevSong}
        />
      </main>
    </div>
  );
}
