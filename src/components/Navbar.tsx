import React, { useState } from 'react';
import { Search, Menu, X, MessageCircle, Radio } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { usePlayer } from '../contexts/PlayerContext';

export function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentTrack, isPlaying } = usePlayer();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Library', path: '/library' },
    { name: 'Community', path: '/community' },
    { name: 'Live', path: '/live' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-20 flex items-center px-6 md:px-12">
        <div className="flex items-center gap-8 w-full max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors">
              <img 
                src="alan4.jpg" 
                alt="Alan Walker" 
                className="w-full h-full object-cover"
                style={{ objectPosition: '20% center' }}
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-display font-bold text-xl tracking-tighter hidden sm:block">WALKER'S MUSIC WORLD</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 ml-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.path ? "text-primary" : "text-white/60"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md ml-auto hidden lg:block">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search tracks, artists, events..."
                className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 ml-auto md:ml-0">
            {/* Now Playing Mini-Widget */}
            <AnimatePresence>
              {currentTrack && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="hidden xl:flex items-center gap-3 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
                >
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={currentTrack.cover} className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
                    {isPlaying && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="flex items-end gap-0.5 h-2.5">
                          <motion.div animate={{ height: [2, 8, 4] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-0.5 bg-primary rounded-full" />
                          <motion.div animate={{ height: [6, 2, 8] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-0.5 bg-primary rounded-full" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col min-w-0 pr-2">
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest leading-none mb-0.5">Pulse</span>
                    <span className="text-[11px] font-medium truncate max-w-[100px]">{currentTrack.title}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Community Button */}
            <button className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-primary text-background rounded-full text-xs font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20">
              <Radio className="w-4 h-4" />
              JOIN LIVE
            </button>
            
            <button className="hidden md:flex p-2.5 bg-white/5 border border-white/10 rounded-full text-white/60 hover:text-primary hover:border-primary/30 transition-all">
              <MessageCircle className="w-5 h-5" />
            </button>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 hover:bg-white/5 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-display font-bold transition-colors",
                    location.pathname === link.path ? "text-primary" : "text-white/60"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-4" />
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-lg focus:outline-none focus:border-primary/40"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
