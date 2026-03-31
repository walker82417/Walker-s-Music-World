import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface LyricLine {
  time: number;
  text: string;
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  cover: string;
  url: string;
  lyrics?: string[];
  timedLyrics?: LyricLine[];
}

interface PlayerContextType {
  currentTrack: Track | null;
  isPlaying: boolean;
  playlist: Track[];
  playTrack: (track: Track) => void;
  togglePlay: () => void;
  setIsPlaying: (playing: boolean) => void;
  playNext: () => void;
  playPrevious: () => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [playlist] = useState<Track[]>([
    {
      id: 'faded',
      title: 'Faded',
      artist: 'Alan Walker',
      cover: 'https://picsum.photos/seed/alan/200/200',
      url: 'https://www.youtube.com/watch?v=60ItHLz5WEA',
      lyrics: [
        "You were the shadow to my light",
        "Did you feel us?",
        "Another start, you fade away",
        "Afraid our aim is out of sight",
        "Wanna see us, alive",
        "Where are you now?",
        "Where are you now?",
        "Where are you now?",
        "Was it all in my fantasy?",
        "Where are you now?",
        "Were you imaginary?",
        "Where are you now?",
        "Under the sea, under the sea",
        "Where are you now?",
        "Another dream",
        "The monster's running wild inside of me",
        "I'm faded, I'm faded",
        "So lost, I'm faded, I'm faded",
        "So lost, I'm faded"
      ],
      timedLyrics: [
        { time: 15, text: "You were the shadow to my light" },
        { time: 19, text: "Did you feel us?" },
        { time: 23, text: "Another start, you fade away" },
        { time: 27, text: "Afraid our aim is out of sight" },
        { time: 31, text: "Wanna see us, alive" },
        { time: 35, text: "Where are you now?" },
        { time: 39, text: "Where are you now?" },
        { time: 43, text: "Where are you now?" },
        { time: 47, text: "Was it all in my fantasy?" },
        { time: 51, text: "Where are you now?" },
        { time: 55, text: "Were you imaginary?" },
        { time: 59, text: "Where are you now?" },
        { time: 63, text: "Under the sea, under the sea" },
        { time: 67, text: "Where are you now?" },
        { time: 71, text: "Another dream" },
        { time: 75, text: "The monster's running wild inside of me" },
        { time: 79, text: "I'm faded, I'm faded" },
        { time: 83, text: "So lost, I'm faded, I'm faded" },
        { time: 87, text: "So lost, I'm faded" }
      ]
    },
    {
      id: 'alone',
      title: 'Alone',
      artist: 'Alan Walker',
      cover: 'https://picsum.photos/seed/alone/200/200',
      url: 'https://www.youtube.com/watch?v=1-xGerv5FOk',
      lyrics: [
        "Lost in your mind",
        "I wanna know",
        "Am I losing my mind?",
        "Never let me go",
        "If this night is not forever",
        "At least we are together",
        "I know I'm not alone",
        "I know I'm not alone",
        "Anywhere, whenever",
        "Apart, but still together",
        "I know I'm not alone",
        "I know I'm not alone"
      ],
      timedLyrics: [
        { time: 10, text: "Lost in your mind" },
        { time: 14, text: "I wanna know" },
        { time: 18, text: "Am I losing my mind?" },
        { time: 22, text: "Never let me go" },
        { time: 26, text: "If this night is not forever" },
        { time: 30, text: "At least we are together" },
        { time: 34, text: "I know I'm not alone" },
        { time: 38, text: "I know I'm not alone" },
        { time: 42, text: "Anywhere, whenever" },
        { time: 46, text: "Apart, but still together" },
        { time: 50, text: "I know I'm not alone" },
        { time: 54, text: "I know I'm not alone" }
      ]
    },
    {
      id: 'spectre',
      title: 'The Spectre',
      artist: 'Alan Walker',
      cover: 'https://picsum.photos/seed/spectre/200/200',
      url: 'https://www.youtube.com/watch?v=wJnBEEgBCD0',
      lyrics: [
        "Hello, hello, can you hear me?",
        "As I scream your name",
        "Hello, hello, do you need me?",
        "Before I fade away",
        "Is this a place that I call home?",
        "To find what I've become",
        "Walk along the path unknown",
        "We live, we love, we lie",
        "Deep in the dark I don't need the light",
        "There's a ghost inside me",
        "It all belongs to the other side",
        "We live, we love, we lie"
      ],
      timedLyrics: [
        { time: 12, text: "Hello, hello, can you hear me?" },
        { time: 16, text: "As I scream your name" },
        { time: 20, text: "Hello, hello, do you need me?" },
        { time: 24, text: "Before I fade away" },
        { time: 28, text: "Is this a place that I call home?" },
        { time: 32, text: "To find what I've become" },
        { time: 36, text: "Walk along the path unknown" },
        { time: 40, text: "We live, we love, we lie" },
        { time: 44, text: "Deep in the dark I don't need the light" },
        { time: 48, text: "There's a ghost inside me" },
        { time: 52, text: "It all belongs to the other side" },
        { time: 56, text: "We live, we love, we lie" }
      ]
    },
    {
      id: 'alone-pt-2',
      title: 'Alone, Pt. II',
      artist: 'Alan Walker & Ava Max',
      cover: 'https://picsum.photos/seed/alone2/200/200',
      url: 'https://www.youtube.com/watch?v=HhjHYkPQ8F0',
      lyrics: [
        "We were both young when I first saw you",
        "I close my eyes and the flashback starts",
        "I'm standing there",
        "On a balcony in summer air",
        "See the lights, see the party, the ball gowns",
        "See you make your way through the crowd",
        "And say, Hello",
        "Little did I know",
        "That you were Romeo, you were throwing pebbles",
        "And my daddy said, Stay away from Juliet",
        "And I was crying on the staircase",
        "Begging you, Please don't go"
      ],
      timedLyrics: [
        { time: 10, text: "We were both young when I first saw you" },
        { time: 14, text: "I close my eyes and the flashback starts" },
        { time: 18, text: "I'm standing there" },
        { time: 22, text: "On a balcony in summer air" },
        { time: 26, text: "See the lights, see the party, the ball gowns" },
        { time: 30, text: "See you make your way through the crowd" },
        { time: 34, text: "And say, Hello" },
        { time: 38, text: "Little did I know" },
        { time: 42, text: "That you were Romeo, you were throwing pebbles" },
        { time: 46, text: "And my daddy said, Stay away from Juliet" },
        { time: 50, text: "And I was crying on the staircase" },
        { time: 54, text: "Begging you, Please don't go" }
      ]
    },
    {
      id: 'on-my-way',
      title: 'On My Way',
      artist: 'Alan Walker, Sabrina Carpenter & Farruko',
      cover: 'https://picsum.photos/seed/onmyway/200/200',
      url: 'https://www.youtube.com/watch?v=dhYOPzcsbGM',
      lyrics: [
        "I'm sorry but",
        "Don't wanna talk",
        "I need a moment before I go",
        "It's nothing personal",
        "I draw the blinds",
        "They don't need to see me cry",
        "Cause even if they understand",
        "They don't understand",
        "So then I'll be on my way",
        "No time for goodbye",
        "On my way",
        "Let's take it to the sky"
      ],
      timedLyrics: [
        { time: 8, text: "I'm sorry but" },
        { time: 12, text: "Don't wanna talk" },
        { time: 16, text: "I need a moment before I go" },
        { time: 20, text: "It's nothing personal" },
        { time: 24, text: "I draw the blinds" },
        { time: 28, text: "They don't need to see me cry" },
        { time: 32, text: "Cause even if they understand" },
        { time: 36, text: "They don't understand" },
        { time: 40, text: "So then I'll be on my way" },
        { time: 44, text: "No time for goodbye" },
        { time: 48, text: "On my way" },
        { time: 52, text: "Let's take it to the sky" }
      ]
    },
    {
      id: 'darkside',
      title: 'Darkside',
      artist: 'Alan Walker (feat. Au/Ra and Tomine Harket)',
      cover: 'https://picsum.photos/seed/darkside/200/200',
      url: 'https://www.youtube.com/watch?v=M-P4QBt-FWw',
      lyrics: [
        "We're not in love",
        "We share no joy",
        "Just a ghost inside",
        "A hollow boy",
        "I'm not the one",
        "You're looking for",
        "But I can be the one",
        "You're waiting for",
        "Take me through the night",
        "Fall into the darkside",
        "We don't need the light",
        "We'll live on the darkside"
      ],
      timedLyrics: [
        { time: 10, text: "We're not in love" },
        { time: 14, text: "We share no joy" },
        { time: 18, text: "Just a ghost inside" },
        { time: 22, text: "A hollow boy" },
        { time: 26, text: "I'm not the one" },
        { time: 30, text: "You're looking for" },
        { time: 34, text: "But I can be the one" },
        { time: 38, text: "You're waiting for" },
        { time: 42, text: "Take me through the night" },
        { time: 46, text: "Fall into the darkside" },
        { time: 50, text: "We don't need the light" },
        { time: 54, text: "We'll live on the darkside" }
      ]
    }
  ]);

  const [currentTrack, setCurrentTrack] = useState<Track | null>(playlist[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const playTrack = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    if (!currentTrack) return;
    const currentIndex = playlist.findIndex(t => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % playlist.length;
    setCurrentTrack(playlist[nextIndex]);
    setIsPlaying(true);
  };

  const playPrevious = () => {
    if (!currentTrack) return;
    const currentIndex = playlist.findIndex(t => t.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    setCurrentTrack(playlist[prevIndex]);
    setIsPlaying(true);
  };

  return (
    <PlayerContext.Provider value={{ 
      currentTrack, 
      isPlaying, 
      playlist,
      playTrack, 
      togglePlay, 
      setIsPlaying,
      playNext,
      playPrevious
    }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
}
