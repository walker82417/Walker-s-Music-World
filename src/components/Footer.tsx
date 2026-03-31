import React from 'react';
import { Youtube, Twitter, Instagram, Github, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded overflow-hidden border border-white/10">
                <img 
                  src="alan4.jpg" 
                  alt="Alan Walker" 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '20% center' }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-bold text-lg tracking-tighter">WALKER'S MUSIC WORLD</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              The global frequency for music lovers, creators, and the Walker community. Join the pulse of the world.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Twitter, Youtube, Github].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary hover:text-background transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-6 text-white/80">Explore</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-primary transition-colors">Latest Releases</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Curated Playlists</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Live Concerts</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Merchandise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-6 text-white/80">Community</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-primary transition-colors">Walker Spotlight</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Fan Art</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Discord Server</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Global Meetups</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-6 text-white/80">Stay in the Loop</h4>
            <p className="text-white/40 text-sm mb-6">Get exclusive updates on new drops and tour dates.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm flex-1 focus:outline-none focus:border-primary/50"
              />
              <button className="p-2 bg-primary text-background rounded-lg hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
          <p className="text-white/20 text-xs">© 2026 Walker's Music World. All rights reserved. Right owned by Walker's Music World and Team Alan.</p>
          <div className="flex items-center gap-8 text-white/20 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
