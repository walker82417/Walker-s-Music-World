import React from 'react';
import { Play, ArrowRight, Music2, Headphones, Radio, Mic2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { usePlayer, Track } from '../contexts/PlayerContext';

export function Home() {
  const { playTrack, currentTrack, isPlaying, playlist } = usePlayer();
  
  const playlists = [
    { id: 'faded', title: 'Walker Essentials', tracks: '42 Tracks', color: 'bg-gradient-to-br from-primary to-primary/60', size: 'md:col-span-2 md:row-span-2', url: 'https://www.youtube.com/watch?v=60ItHLz5WEA' },
    { id: 'alone', title: 'Late Night Pulse', tracks: '18 Tracks', color: 'bg-gradient-to-br from-secondary to-secondary/60', size: 'md:col-span-1 md:row-span-1', url: 'https://www.youtube.com/watch?v=1-xGerv5FOk' },
    { id: 'spectre', title: 'Aviation Anthems', tracks: '24 Tracks', color: 'bg-gradient-to-br from-tertiary to-tertiary/60', size: 'md:col-span-1 md:row-span-2', url: 'https://www.youtube.com/watch?v=wJnBEEgBCD0' },
    { id: 'cyberpunk', title: 'Cyberpunk Beats', tracks: '12 Tracks', color: 'bg-gradient-to-br from-indigo-600 to-purple-700', size: 'md:col-span-1 md:row-span-1', url: 'https://www.youtube.com/watch?v=60ItHLz5WEA' },
  ];

  const handlePlayPlaylist = (p: any) => {
    const existingTrack = playlist.find(t => t.id === p.id);
    if (existingTrack) {
      playTrack(existingTrack);
      return;
    }

    const track: Track = {
      id: p.id,
      title: p.title,
      artist: 'Alan Walker',
      cover: `https://picsum.photos/seed/${p.id}/400/400`,
      url: p.url
    };
    playTrack(track);
  };

  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center px-6 md:px-12 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full animate-pulse delay-700" />
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/music/1920/1080')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <AnimatePresence>
                {isPlaying && currentTrack && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex items-center gap-3 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full w-fit backdrop-blur-md"
                  >
                    <div className="flex items-end gap-0.5 h-3">
                      <motion.div animate={{ height: [4, 12, 6] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-0.5 bg-primary rounded-full" />
                      <motion.div animate={{ height: [8, 4, 12] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-0.5 bg-primary rounded-full" />
                      <motion.div animate={{ height: [12, 6, 8] }} transition={{ repeat: Infinity, duration: 0.7 }} className="w-0.5 bg-primary rounded-full" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Now Playing: {currentTrack.title}</span>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full w-fit backdrop-blur-md">
                <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">New Release: The Spectre (Remix)</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter">
              FEEL THE <span className="text-primary">PULSE</span> OF THE WORLD
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-lg">
              Dive into the global frequency. Discover exclusive tracks, live events, and the community that drives the beat.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => handlePlayPlaylist(playlists[0])}
                className="btn-primary flex items-center gap-2"
              >
                <Play className="w-5 h-5 fill-current" />
                Start Listening
              </button>
              <button className="btn-outline">Explore Community</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Videos */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-display font-bold tracking-tight">Latest Videos</h2>
            <p className="text-white/40">Visual journeys through the Walker universe.</p>
          </div>
          <button className="flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold">
            View All <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                <img 
                  src={`https://picsum.photos/seed/video${i}/800/450`} 
                  alt="Video Thumbnail" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                    <Play className="w-8 h-8 fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-mono">
                  04:20
                </div>
              </div>
              <h3 className="font-display font-bold text-xl mb-1 group-hover:text-primary transition-colors">Walker #2024: The Journey Begins</h3>
              <p className="text-sm text-white/40">Official Music Video • 1.2M Views</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Curated Playlists Bento Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="text-4xl font-display font-bold tracking-tight">Curated Playlists</h2>
          <p className="text-white/40">Hand-picked frequencies for every mood.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {playlists.map((p, i) => {
            const isCurrentPlaylist = currentTrack?.id === p.id;
            
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 0.98 }}
                onClick={() => handlePlayPlaylist(p)}
                className={cn(
                  "relative rounded-3xl overflow-hidden p-8 flex flex-col justify-end group cursor-pointer min-h-[200px] transition-all duration-500",
                  p.size,
                  p.color,
                  isCurrentPlaylist && "ring-4 ring-primary ring-offset-4 ring-offset-background"
                )}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                
                {isCurrentPlaylist && isPlaying && (
                  <div className="absolute top-8 left-8 flex items-end gap-1 h-6">
                    <motion.div animate={{ height: [8, 24, 12] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1 bg-background rounded-full" />
                    <motion.div animate={{ height: [16, 8, 24] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1 bg-background rounded-full" />
                    <motion.div animate={{ height: [24, 12, 16] }} transition={{ repeat: Infinity, duration: 0.7 }} className="w-1 bg-background rounded-full" />
                  </div>
                )}

                <div className="relative z-10">
                  <h3 className="text-3xl font-display font-bold mb-2 text-background">{p.title}</h3>
                  <p className="text-background/60 font-medium">{p.tracks}</p>
                </div>
                <div className="absolute top-8 right-8 w-12 h-12 bg-background/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  {isCurrentPlaylist && isPlaying ? (
                    <div className="w-6 h-6 bg-background rounded-sm" />
                  ) : (
                    <Play className="w-6 h-6 fill-background text-background" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="glass-card p-8 md:p-20 relative overflow-hidden flex flex-col items-center text-center gap-8">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
          <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl">
            <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mb-4">
              <Radio className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">JOIN THE GLOBAL FREQUENCY</h2>
            <p className="text-lg text-white/60">
              Be the first to hear about new drops, exclusive events, and community updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mt-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-8 py-4 focus:outline-none focus:border-primary/50 text-lg"
              />
              <button className="btn-primary whitespace-nowrap">Subscribe Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
