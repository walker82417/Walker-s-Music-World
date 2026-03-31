import React, { useState, useRef, useEffect } from 'react';
import { Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Maximize2, ListMusic, Heart, Mic2, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactPlayer from 'react-player';
import { cn } from '../lib/utils';
import { usePlayer } from '../contexts/PlayerContext';

const Player = ReactPlayer as any;

export function PulsePlayer() {
  const { currentTrack, isPlaying, togglePlay, setIsPlaying, playNext, playPrevious } = usePlayer();
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [showLyrics, setShowLyrics] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef<any>(null);
  const lyricsContainerRef = useRef<HTMLDivElement>(null);

  // Find active lyric line
  const activeLyricIndex = currentTrack?.timedLyrics?.findIndex((line, index) => {
    const nextLine = currentTrack.timedLyrics?.[index + 1];
    return currentTime >= line.time && (!nextLine || currentTime < nextLine.time);
  }) ?? -1;

  // Auto-scroll to active lyric
  useEffect(() => {
    if (showLyrics && activeLyricIndex !== -1 && lyricsContainerRef.current) {
      const activeElement = lyricsContainerRef.current.children[activeLyricIndex] as HTMLElement;
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [activeLyricIndex, showLyrics]);

  // Reset ready state when track changes to prevent play interruption errors
  useEffect(() => {
    setIsReady(false);
    setCurrentTime(0);
  }, [currentTrack?.url]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleProgress = (state: any) => {
    setProgress(state.played * 100);
    setCurrentTime(state.playedSeconds);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const clickedProgress = x / rect.width;
    playerRef.current?.seekTo(clickedProgress);
  };

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
      <div className="hidden">
        <Player
          ref={playerRef}
          url={currentTrack.url}
          playing={isPlaying && isReady}
          volume={volume}
          onProgress={handleProgress}
          onReady={(player: any) => {
            setDuration(player.getDuration());
            setIsReady(true);
          }}
          onStart={() => setIsReady(true)}
          onEnded={playNext}
        />
      </div>

      <AnimatePresence>
        {showLyrics && (currentTrack.timedLyrics || currentTrack.lyrics) && (
          <motion.div
            initial={{ opacity: 0, y: 100, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: 100, height: 0 }}
            className="max-w-7xl mx-auto mb-4 glass-card overflow-hidden"
          >
            <div className="p-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <Mic2 className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-display font-bold uppercase tracking-tight">Lyrics</h3>
                </div>
                <button 
                  onClick={() => setShowLyrics(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <ChevronDown className="w-6 h-6" />
                </button>
              </div>
              <div 
                ref={lyricsContainerRef}
                className="flex flex-col gap-6 items-center text-center pb-32"
              >
                {(currentTrack.timedLyrics || currentTrack.lyrics || []).map((line, i) => {
                  const text = typeof line === 'string' ? line : line.text;
                  const isActive = i === activeLyricIndex;
                  
                  return (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.02 }}
                      className={cn(
                        "text-xl md:text-4xl font-display font-bold transition-all duration-500 max-w-3xl",
                        isActive 
                          ? "text-white scale-110 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                          : "text-white/20 hover:text-white/40 cursor-pointer"
                      )}
                      onClick={() => {
                        if (typeof line !== 'string') {
                          playerRef.current?.seekTo(line.time);
                        }
                      }}
                    >
                      {text}
                    </motion.p>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto glass-card h-20 md:h-24 flex items-center px-4 md:px-6 gap-4 md:gap-8 shadow-2xl shadow-black/50">
        {/* Track Info */}
        <div className="flex items-center gap-3 md:gap-4 w-full md:w-1/4 min-w-0 md:min-w-[200px]">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden flex-shrink-0 relative group cursor-pointer">
            <img 
              src={currentTrack.cover} 
              alt={currentTrack.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-bold text-xs md:text-sm truncate">{currentTrack.title}</span>
            <span className="text-[10px] md:text-xs text-white/50 truncate">{currentTrack.artist}</span>
          </div>
          <button className="ml-auto md:ml-2 text-white/40 hover:text-tertiary transition-colors flex-shrink-0">
            <Heart className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        {/* Controls */}
        <div className="hidden md:flex flex-1 flex-col items-center gap-2 max-w-xl">
          <div className="flex items-center gap-6">
            <button className="text-white/40 hover:text-white transition-colors">
              <Shuffle className="w-4 h-4" />
            </button>
            <button 
              onClick={playPrevious}
              className="text-white/60 hover:text-white transition-colors"
            >
              <SkipBack className="w-6 h-6 fill-current" />
            </button>
            <button 
              onClick={togglePlay}
              className="w-12 h-12 bg-white text-background rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
            >
              {isPlaying ? (
                <div className="flex gap-1">
                  <div className="w-1.5 h-4 bg-background rounded-full" />
                  <div className="w-1.5 h-4 bg-background rounded-full" />
                </div>
              ) : (
                <Play className="w-6 h-6 fill-current ml-1" />
              )}
            </button>
            <button 
              onClick={playNext}
              className="text-white/60 hover:text-white transition-colors"
            >
              <SkipForward className="w-6 h-6 fill-current" />
            </button>
            <button className="text-white/40 hover:text-white transition-colors">
              <Repeat className="w-4 h-4" />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full flex items-center gap-3">
            <span className="text-[10px] font-mono text-white/40">
              {formatTime((progress / 100) * duration)}
            </span>
            <div 
              className="flex-1 h-1 bg-white/10 rounded-full relative group cursor-pointer"
              onClick={handleSeek}
            >
              <div 
                className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-100" 
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <span className="text-[10px] font-mono text-white/40">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={() => setShowLyrics(!showLyrics)}
            className={cn(
              "p-2 rounded-lg transition-all",
              showLyrics ? "bg-primary text-background" : "text-white/60"
            )}
          >
            <Mic2 className="w-5 h-5" />
          </button>
          <button 
            onClick={togglePlay}
            className="w-10 h-10 bg-white text-background rounded-full flex items-center justify-center active:scale-90 transition-transform"
          >
            {isPlaying ? (
              <div className="flex gap-1">
                <div className="w-1 h-3 bg-background rounded-full" />
                <div className="w-1 h-3 bg-background rounded-full" />
              </div>
            ) : (
              <Play className="w-5 h-5 fill-current ml-0.5" />
            )}
          </button>
        </div>

        {/* Extra Controls */}
        <div className="hidden md:flex w-1/4 items-center justify-end gap-4 min-w-[150px]">
          <button 
            onClick={() => setShowLyrics(!showLyrics)}
            className={cn(
              "p-2 rounded-lg transition-all",
              showLyrics ? "bg-primary text-background" : "text-white/60 hover:text-white hover:bg-white/5"
            )}
          >
            <Mic2 className="w-5 h-5" />
          </button>
          <button className="text-white/60 hover:text-white transition-colors">
            <ListMusic className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 group w-32 relative">
            <Volume2 className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
            <div 
              className="flex-1 h-1 bg-white/10 rounded-full relative cursor-pointer"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                setVolume(x / rect.width);
              }}
            >
              <div 
                className="absolute top-0 left-0 h-full bg-white/60 group-hover:bg-primary rounded-full" 
                style={{ width: `${volume * 100}%` }}
              />
              {/* Volume Tooltip */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-background text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
                {Math.round(volume * 100)}%
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45" />
              </div>
            </div>
          </div>
          <button className="text-white/60 hover:text-white transition-colors">
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
