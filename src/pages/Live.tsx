import React from 'react';
import { Radio, Users, Play, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function Live() {
  return (
    <div className="flex flex-col gap-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full py-12">
      <div className="flex flex-col gap-4 text-center items-center">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary/20 rounded-full flex items-center justify-center animate-pulse">
          <Radio className="w-8 h-8 md:w-10 md:h-10 text-secondary" />
        </div>
        <h1 className="text-4xl md:text-8xl font-display font-bold tracking-tighter uppercase">Live Pulse</h1>
        <p className="text-base md:text-xl text-white/60 max-w-2xl">
          Experience the frequency in real-time. Join thousands of Walkers in the global live stream.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Stream */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="relative aspect-video glass-card overflow-hidden group">
            <img 
              src="https://picsum.photos/seed/live/1280/720" 
              className="w-full h-full object-cover" 
              alt="Live Stream" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button className="w-16 h-16 md:w-20 md:h-20 bg-white text-background rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Play className="w-8 h-8 md:w-10 md:h-10 fill-current ml-1" />
              </button>
            </div>
            <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2 px-3 py-1 bg-red-500 rounded-full text-[10px] font-bold uppercase tracking-widest">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
              Live
            </div>
            <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest">
              <Users className="w-3 h-3" /> 12.4k Watching
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-xl md:text-2xl font-display font-bold">Walkerverse: The Final Chapter (Live from Oslo)</h2>
              <p className="text-white/40 text-sm">Alan Walker • Started 42 minutes ago</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="btn-primary flex-1 md:flex-none">Join Stage</button>
              <button className="btn-outline p-3"><MessageCircle className="w-5 h-5" /></button>
            </div>
          </div>
        </div>

        {/* Chat / Sidebar */}
        <div className="glass-card flex flex-col h-[400px] md:h-[600px] lg:h-auto">
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <h3 className="font-bold">Live Chat</h3>
            <div className="flex items-center gap-2 text-xs text-white/40">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              Active
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <div key={i} className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 shrink-0 overflow-hidden">
                  <img src={`https://picsum.photos/seed/chat${i}/32/32`} alt="" referrerPolicy="no-referrer" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-primary">Walker #{100 + i}</span>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {i % 2 === 0 ? "This drop is insane! 🔥" : "Greetings from Tokyo! 🇯🇵"}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 border-t border-white/5">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Say something..." 
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-primary/50"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-primary hover:scale-110 transition-transform">
                <Play className="w-4 h-4 fill-current rotate-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
