// assets/music/music.js

const musicFiles = {
  //calm
    reckless: './music/Reckless.mp3',
    eightLetters: '/music/8-letters.mp3',
    wedonttalkanymore: '/music/We Dont Talk Anymore.mp3',
    drunktxt: './music/Drunk Text.mp3',
    hurtssogood: './music/Hurts So Good.mp3',
    people: './music/People.mp3',
    shameless: './music/Shameless.mp3',
    marionacross: './music/MARY ON A CROSS-GHOST   Audio Edit - Therplane Musique.m4a',
    rewritethestar: './music/Rewrite The Stars - Anne Marie   James Arthur (sped up) - Sk.m4a',
    fireflies: './music/Owl City - Fireflies (Speedup) Tiktok Version.mp3',
    famy: './music/AvaMax - Famy.m4a',
    playdate: './music/Mellanie Martinez - Play Date Violin Cover.mp3',
    oneofthegirls: './music/One_Of_The_Girls_sped_up_The_Weeknd_JENNIE_&_Lily_Rose_Depp.mp3',
    snap: './music/Rosa Linn - Snap.mp3',
    runeaway: './music/y2mate.com - AURORA  Runaway.mp3',
    wideawake: './music/y2mate.com - Katy Perry  wide awake sped up.mp3',
    // dj
    yaodna: './music/dj/DJ_YA_ODNA_SOUND_THE_KING_PLAT_KT_KANE_SLOWED_+_REVERB_VIRAL_T.m4a',
    yaodnaxthetrum: './music/dj/DJ_YA_ODNA_X_THE_TRUM_🎧💙_𝙎𝙡𝙤𝙬𝙚𝙙&𝙍𝙚𝙫𝙚𝙧𝙗.mp3',
    comeonmakemefeelalive: './music/dj/y2mate_com_DJ_COME_ON_MAKE_ME_FEEL_ALIVE_X_DOTA_FULL_BASS_LAGU_DJ.mp3',
    goyangdayung: './music/dj/y2mate_com_DJ_GOYANG_DAYUNG_BREAKBEAT_MENGKANE_VIRAL_TIKTOK.mp3',
    malampagi: './music/dj/y2mate_com_DJ_MALAM_PAGI_X_SAMPE_BAWAH_MENGKANE_VIRAL_FYP_TIKTOK.mp3',
    moonlight: './music/dj/y2mate_com_Dj_Moonlight_Santuy_Viral_Tiktok_Style_Trabas_Yang_Kalian.mp3',
    setiapkalikitabertemu: './music/dj/y2mate_com_DJ_SETIAP_KALI_KITA_BERTEMU_AKU_LIHAT_KAMU_SENYUM_PADAKU.mp3',
    sweetlove: './music/dj/y2mate_com_DJ_SWEET_LOVE_REMIX_VIRAL_TIKTOK_TERBARU_YANG_PALING.mp3',
    thedrum: './music/dj/y2mate_com_DJ_THE_DRUM_BREAKBEAT_VIRAL_TIK_TOK_TERBARU_2024.mp3',
    terekbale: './music/dj/y2mate_com_SOUND_JJ_DJ_TEREK_BALE_FULL_BASS_SPEED_UP_VIRAL_TIKTOK.mp3',
    //pop
    kingandqueen: './music/pop/Ava Max - Kings & Queens.mp3',
    sweetbutpsycho: './music/pop/Ava Max - Sweet but Psycho [Official Music Video].mp3',
    thenights: './music/pop/Avicii - The Nights (Lyrics).mp3',
    symphony: './music/pop/Clean Bandit - Symphony ft. Zara Larsson.mp3',
    cupid: './music/pop/FIFTY FIFTY - Cupid (Twin Version) sped up.mp3',
    lastfridaynight: './music/pop/last friday night   TikTok Version   speed up   (lyrics). -.m4a',
    moonlightspeedup: './music/pop/moonlight (kali uchis) (sped up Version).mp3',
    hidingintheblue: './music/pop/Nightcore - Hiding In The Blue (Lyrics) - Nightcore Zodiac.m4a',
    middleofthenight: './music/pop/Nightcore - Middle of the Night (Elley Duhé) - (Lyrics).mp3',
    imgood: './music/pop/Nightcore → Im Good.mp3',
    rememberoursummer: './music/pop/Remember Our Summer.m4a',
    royalty: './music/pop/Royalty - Maestro Chives.m4a',
    queensofdisaster: './music/pop/SirLofi - Queen Of Disaster.mp3',
    tatto: './music/pop/Sped Up) - RubyChan s Nightcore.m4a',
    closetothesun: './music/pop/TheFatRat   Anjulie - Close To The Sun - TheFatRat.m4a',
    stereolove: './music/pop/tomp3.cc - stereo love  edward maya  vika jigulina sped up.mp3',
    waitingforlove: './music/pop/Waiting for love.m4a',
    daylight: './music/pop/y2mate.com - Daylight  Maroon 5 Sped Up.mp3',
    dernieredance: './music/pop/y2mate.com - Dernière Danse TikTok Sped Up.mp3',
    indilalovestory: './music/pop/y2mate.com - indila  love story tiktok remix.mp3',
    judas: './music/pop/y2mate.com - judas  lady gaga full versionedit audio.mp3',
    sidetoside: './music/pop/y2mate_com_Side_To_Side_Ariana_Grande_ft_Nicki_Minaj_Tiktok_Version.mp3',
    starboy: './music/pop/y2mate.com - the weeknd  starboy sped up.mp3',
    // phonk
    murderinmymind: './music/phonk/KORDHELL - MURDER IN MY MIND - Kordhell.m4a',
    lifeinrio: './music/phonk/Life in Rio (feat. TOLCHONOV) - NUEKI, Slowboy,   Crazy Mano.m4a',
    wtf2: './music/phonk/UGOVHB - WTF 2 ( PROD.EF ).mp3',
    brodyagafunk: './music/phonk/y2mate_com_BRODYAGA_FUNK_SPED_UP_RYOIKI_TENKAI_RAIDEN_SHOGUN_phonk.mp3',
    cursedevil: './music/phonk/y2mate_com_CURSEDEVIL_DJ_FKU_Skorde_TUCA_DONKA_Brazilian_Phonk.mp3',
    mashaultrafunk: './music/phonk/y2mate_com_HISTED_TXVSTERPLAYA_MASHA_ULTRAFUNK_Brazilian_Funk_Phonk.mp3',
    sequenciada: './music/phonk/y2mate_com_SEQUÊNCIA_DA_DZ7_FUNK_BR_FeatMc_Menor_do_Alvorada.mp3',
    sevdaliza: './music/phonk/y2mate_com_SEVDALIZA_FT_PABLLO_VITTAR_YSEULT_ALIBI_LetraLyrics.mp3',
    barteforteedanca: './music/phonk/y2mate.com - Bate Forte e Dança BRAZILIAN PHONK.mp3',
    lovelybastard: './music/phonk/y2mate.com - LOVELY BASTARDS YATASHIGANG ZWE1HVNDXR.mp3',
    montagemcoral: './music/phonk/y2mate.com - MONTAGEM CORAL.mp3',
    orquestramaldita: './music/phonk/y2mate.com - ORQUESTRA MALDITA FUNK BR TRASHXRL  MC DELUX.mp3'
  };
  
  export default musicFiles;
  