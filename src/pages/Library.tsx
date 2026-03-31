import React from 'react';
import { Search, Filter, Grid, List, Play, Heart, MoreHorizontal, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { usePlayer, Track } from '../contexts/PlayerContext';

export function Library() {
  const { playTrack, currentTrack, isPlaying, playlist } = usePlayer();
  
  const albums = [
    { id: 'faded', title: 'Different World', artist: 'Alan Walker', year: '2018', cover: 'https://picsum.photos/seed/album1/400/400', url: 'https://www.youtube.com/watch?v=60ItHLz5WEA' },
    { id: 'alone', title: 'World of Walker', artist: 'Alan Walker', year: '2021', cover: 'https://picsum.photos/seed/album2/400/400', url: 'https://www.youtube.com/watch?v=1-xGerv5FOk' },
    { id: 'spectre', title: 'Walkerverse Pt. I & II', artist: 'Alan Walker', year: '2022', cover: 'https://picsum.photos/seed/album3/400/400', url: 'https://www.youtube.com/watch?v=wJnBEEgBCD0' },
    { id: 'alone-pt-2', title: 'Alone, Pt. II', artist: 'Alan Walker & Ava Max', year: '2019', cover: 'https://picsum.photos/seed/alone2/400/400', url: 'https://www.youtube.com/watch?v=HhjHYkPQ8F0' },
    { id: 'on-my-way', title: 'On My Way', artist: 'Alan Walker', year: '2019', cover: 'https://picsum.photos/seed/onmyway/400/400', url: 'https://www.youtube.com/watch?v=dhYOPzcsbGM' },
  ];

  const handlePlayTrack = (trackData: any) => {
    const existingTrack = playlist.find(t => t.id === trackData.id);
    if (existingTrack) {
      playTrack(existingTrack);
      return;
    }

    const track: Track = {
      id: trackData.id,
      title: trackData.title,
      artist: trackData.artist,
      cover: trackData.cover,
      url: trackData.url
    };
    playTrack(track);
  };

  // Use the actual playlist from context for the table
  const displayTracks = playlist.map(track => ({
    ...track,
    album: albums.find(a => a.id === track.id)?.title || 'Single',
    duration: '3:30' // Placeholder duration
  }));

  return (
    <div className="px-6 md:px-12 max-w-7xl mx-auto w-full py-12 flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight">YOUR SONIC ARCHIVE</h1>
          <p className="text-white/40 text-lg">Explore your collection of frequencies and anthems.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="btn-primary flex items-center gap-2">
            <Play className="w-5 h-5 fill-current" />
            Play All
          </button>
          <button className="btn-outline p-3">
            <Heart className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            placeholder="Search your library..."
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-primary/40 transition-all"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filter</span>
          </button>
          <div className="flex bg-white/5 border border-white/10 rounded-xl p-1">
            <button className="p-2 bg-white/10 rounded-lg text-primary">
              <Grid className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-white/5 rounded-lg text-white/40">
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {albums.map((album, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -10 }}
            onClick={() => handlePlayTrack(album)}
            className="group cursor-pointer"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-2xl shadow-black/40">
              <img 
                src={album.cover} 
                alt={album.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <button className="w-12 h-12 bg-primary text-background rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </button>
                <button className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6" />
                </button>
              </div>
            </div>
            <h3 className="font-display font-bold text-lg truncate group-hover:text-primary transition-colors">{album.title}</h3>
            <div className="flex items-center justify-between text-sm text-white/40">
              <span>{album.artist}</span>
              <span>{album.year}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity Table */}
      <div className="mt-12">
        <h2 className="text-2xl font-display font-bold mb-8">Recently Played</h2>
        <div className="glass-card overflow-hidden overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px] md:min-w-0">
            <thead>
              <tr className="border-b border-white/5 text-white/40 text-xs uppercase tracking-widest">
                <th className="px-6 py-4 font-medium">#</th>
                <th className="px-6 py-4 font-medium">Title</th>
                <th className="px-6 py-4 font-medium hidden md:table-cell">Album</th>
                <th className="px-6 py-4 font-medium"><Clock className="w-4 h-4" /></th>
                <th className="px-6 py-4 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {displayTracks.map((track, i) => {
                const isCurrent = currentTrack?.id === track.id;
                
                return (
                  <tr 
                    key={track.id} 
                    onClick={() => handlePlayTrack(track)}
                    className={cn(
                      "group hover:bg-white/5 transition-colors cursor-pointer border-b border-white/5 last:border-0",
                      isCurrent && "bg-primary/10 hover:bg-primary/20"
                    )}
                  >
                    <td className="px-6 py-4 text-sm text-white/40">
                      {isCurrent && isPlaying ? (
                        <div className="flex items-end gap-0.5 h-3">
                          <motion.div animate={{ height: [4, 12, 6] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-0.5 bg-primary rounded-full" />
                          <motion.div animate={{ height: [8, 4, 12] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-0.5 bg-primary rounded-full" />
                          <motion.div animate={{ height: [12, 6, 8] }} transition={{ repeat: Infinity, duration: 0.7 }} className="w-0.5 bg-primary rounded-full" />
                        </div>
                      ) : (
                        <span className={cn(isCurrent && "text-primary font-bold")}>{i + 1}</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 flex-shrink-0">
                          <img src={track.cover} className="w-full h-full rounded object-cover" alt="" referrerPolicy="no-referrer" />
                          {isCurrent && isPlaying && (
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded">
                              <div className="flex items-end gap-0.5 h-2">
                                <motion.div animate={{ height: [2, 8, 4] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-0.5 bg-primary rounded-full" />
                                <motion.div animate={{ height: [6, 2, 8] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-0.5 bg-primary rounded-full" />
                                <motion.div animate={{ height: [8, 4, 6] }} transition={{ repeat: Infinity, duration: 0.7 }} className="w-0.5 bg-primary rounded-full" />
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className={cn("font-bold text-sm truncate", isCurrent ? "text-primary" : "text-white")}>{track.title}</span>
                          <span className="text-xs text-white/40 truncate">{track.artist}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-white/40 hidden md:table-cell truncate">{track.album}</td>
                    <td className="px-6 py-4 text-sm text-white/40">{track.duration}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Heart className={cn("w-4 h-4 transition-colors", isCurrent ? "text-primary fill-primary" : "text-white/40 hover:text-primary")} />
                        <MoreHorizontal className="w-4 h-4 text-white/40 hover:text-white" />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
