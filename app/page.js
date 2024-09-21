'use client';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import CombinedPlayer from '../components/CombinedPlayer';
import musicFiles from '../public/music';

export default function Home() {
  const calmPlaylist = [
    { title: 'Reckless', src: musicFiles.reckless },
    { title: '8 Letters', src: musicFiles.eightLetters },
    { title: 'We Dont Talk Anymore', src: musicFiles.wedonttalkanymore },
    { title: 'Drunk Text', src: musicFiles.drunktxt },
    { title: 'Hurts So Good', src: musicFiles.hurtssogood },
    { title: 'Shameless', src: musicFiles.shameless },
    { title: 'People', src: musicFiles.people },
    { title: 'Wide Awake', src: musicFiles.wideawake },
    { title: 'One Of The Girls', src: musicFiles.oneofthegirls },
    { title: 'Play Date', src: musicFiles.playdate },
    { title: 'Mary On A Cross', src: musicFiles.marionacross },
    { title: 'Run away', src: musicFiles.runeaway },
    { title: 'Rewrite The Stars', src: musicFiles.rewritethestar },
    { title: 'Famy', src: musicFiles.famy },
    { title: 'Snap', src: musicFiles.snap },
    { title: 'Fireflies', src: musicFiles.fireflies },
  ];

  const djPlaylist = [
    { title: 'Ya Odna', src: musicFiles.yaodna },
    { title: 'Ya Odna X The Trum', src: musicFiles.yaodnaxthetrum },
    { title: 'Come On Make Me Feel Alive', src: musicFiles.comeonmakemefeelalive },
    { title: 'Goyang Dayung', src: musicFiles.goyangdayung },
    { title: 'Malam Pagi X Sampai Bawah', src: musicFiles.malampagi },
    { title: 'Moonlight', src: musicFiles.moonlight },
    { title: 'Setiap Kali Bertemu', src: musicFiles.setiapkalikitabertemu },
    { title: 'Sweet Love', src: musicFiles.sweetlove },
    { title: 'The Drum Breakbeat', src: musicFiles.thedrum },
    { title: 'Terek Bale', src: musicFiles.terekbale },
  ];

  const phonkPlaylist = [
    {title: 'Murder In My Mind', src:musicFiles.murderinmymind},
    {title: 'Life In Rio', src:musicFiles.lifeinrio},
    {title: 'WTF 2', src:musicFiles.wtf2},
    {title: 'Brodyaga Funk', src:musicFiles.brodyagafunk},
    {title: 'CurseDevil', src:musicFiles.cursedevil},
    {title: 'Masha UltraFunk', src:musicFiles.mashaultrafunk},
    {title: 'Sequencia Da', src:musicFiles.sequenciada},
    {title: 'Sevdaliza', src:musicFiles.sevdaliza},
    {title: 'Barte Forte E Danca', src:musicFiles.barteforteedanca},
    {title: 'Lovely Bastard', src:musicFiles.lovelybastard},
    {title: 'Montagem Coral', src:musicFiles.montagemcoral},
    {title: 'Orquestra Maldita', src:musicFiles.orquestramaldita}
  ]

  const popPlaylist = [
    { title: 'Kings & Queens', src: musicFiles.kingandqueen },
    { title: 'Sweet But Psycho', src: musicFiles.sweetbutpsycho },
    { title: 'Symphony', src: musicFiles.symphony },
    { title: 'Cupid', src: musicFiles.cupid },
    { title: 'Last Friday Nights', src: musicFiles.lastfridaynight },
    { title: 'Moonlight SpeedUp', src: musicFiles.moonlightspeedup },
    { title: 'Hiding In The Blue', src: musicFiles.hidingintheblue },
    { title: 'Middle Of The Night', src: musicFiles.middleofthenight },
    { title: 'Im Good (Blue)', src: musicFiles.imgood },
    { title: 'Remember Our Summer', src: musicFiles.rememberoursummer },
    { title: 'Royalty', src: musicFiles.royalty },
    { title: 'Queen Of Disaster', src: musicFiles.queensofdisaster },
    { title: 'Tatto', src: musicFiles.tatto },
    { title: 'Stereo Love', src: musicFiles.stereolove },
    { title: 'Close To The Sun', src: musicFiles.closetothesun },
    { title: 'Waiting For Love', src: musicFiles.waitingforlove },
    { title: 'Daylight', src: musicFiles.daylight },
    { title: 'Derniere Dance', src: musicFiles.dernieredance },
    { title: 'Love Story', src: musicFiles.indilalovestory },
    { title: 'Judas', src: musicFiles.judas },
    { title: 'Side To Side', src: musicFiles.sidetoside },
    { title: 'Starboy', src: musicFiles.starboy }
    
  ];

  const [currentPlaylist, setCurrentPlaylist] = useState(calmPlaylist);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [activePlaylist, setActivePlaylist] = useState('calm'); // Track active playlist

  useEffect(() => {
    document.title = 'Music Player';
  }, []);

  const handleNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % currentPlaylist.length);
  };

  const handlePrevSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? currentPlaylist.length - 1 : prevIndex - 1
    );
  };

  // Handle changing playlist and active button style
  const handlePlaylistChange = (playlist, playlistName) => {
    setCurrentPlaylist(playlist);
    setActivePlaylist(playlistName); // Set the active playlist
    setCurrentSongIndex(0); // Reset to the first song of the new playlist
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
        {/* Playlist Selection Buttons */}
        <div className="flex space-x-4 mb-5">
          <button
            className={`px-4 py-2 rounded-md shadow-md focus:outline-none ${
              activePlaylist === 'calm' ? 'bg-blue-800 text-white' : 'bg-white text-blue-700 hover:bg-gray-100'
            }`}
            onClick={() => handlePlaylistChange(calmPlaylist, 'calm')}
          >
            Relax
          </button>
          <button
            className={`px-4 py-2 rounded-md shadow-md focus:outline-none ${
              activePlaylist === 'dj' ? 'bg-blue-800 text-white' : 'bg-white text-blue-700 hover:bg-gray-100'
            }`}
            onClick={() => handlePlaylistChange(djPlaylist, 'dj')}
          >
            DJ/Remix
          </button>
          <button
            className={`px-4 py-2 rounded-md shadow-md focus:outline-none ${
              activePlaylist === 'phonk' ? 'bg-blue-800 text-white' : 'bg-white text-blue-700 hover:bg-gray-100'
            }`}
            onClick={() => handlePlaylistChange(phonkPlaylist, 'phonk')}
          >
            Phonk
          </button>
          <button
            className={`px-4 py-2 rounded-md shadow-md focus:outline-none ${
              activePlaylist === 'pop' ? 'bg-blue-800 text-white' : 'bg-white text-blue-700 hover:bg-gray-100'
            }`}
            onClick={() => handlePlaylistChange(popPlaylist, 'pop')}
          >
            POP
          </button>
        </div>

        {/* CombinedPlayer component for playlist */}
        <CombinedPlayer
          playlist={currentPlaylist}
          currentSongIndex={currentSongIndex}
          onSelectSong={setCurrentSongIndex}
          onNextSong={handleNextSong}
          onPrevSong={handlePrevSong}
        />
      </main>
    </div>
  );
}
