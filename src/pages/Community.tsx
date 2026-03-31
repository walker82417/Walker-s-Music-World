import React from 'react';
import { Users, Heart, MessageCircle, Share2, Calendar, MapPin, ExternalLink, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export function Community() {
  const events = [
    { title: 'Walkerverse Global Tour', date: 'Oct 24, 2026', location: 'London, UK', type: 'Concert', color: 'bg-primary' },
    { title: 'Aviation Meetup', date: 'Nov 12, 2026', location: 'Oslo, Norway', type: 'Meetup', color: 'bg-secondary' },
    { title: 'Neon Pulse Festival', date: 'Dec 05, 2026', location: 'Tokyo, Japan', type: 'Festival', color: 'bg-tertiary' },
  ];

  const posts = [
    { user: 'Walker #001', content: 'Just finished my first remix of Faded! What do you guys think?', likes: '1.2k', comments: '84', image: 'https://picsum.photos/seed/post1/600/400' },
    { user: 'CyberWalker', content: 'The new merch drop is insane. Love the hoodie design.', likes: '842', comments: '12', image: null },
    { user: 'AlanFan_99', content: 'Throwback to the 2022 concert in Berlin. Best night ever!', likes: '3.4k', comments: '156', image: 'https://picsum.photos/seed/post2/600/800' },
    { user: 'MusicProducerX', content: 'Anyone else using the Walker sample pack? The kicks are punchy.', likes: '423', comments: '29', image: null },
    { user: 'Walker_Global', content: 'New community challenge starting tomorrow. Get ready!', likes: '5.1k', comments: '312', image: 'https://picsum.photos/seed/post3/600/600' },
  ];

  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/crowd/1920/1080')] bg-cover bg-center opacity-30 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full text-center flex flex-col items-center gap-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4"
          >
            <Users className="w-8 h-8 md:w-10 md:h-10 text-primary" />
          </motion.div>
          <h1 className="text-4xl md:text-8xl font-display font-bold tracking-tighter uppercase">Community Hub</h1>
          <p className="text-base md:text-xl text-white/60 max-w-2xl">
            Where the Walker community comes alive. Share your creations, join events, and connect with fans worldwide.
          </p>
        </div>
      </section>

      {/* Fan Spotlight Bento */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">Fan Spotlight</h2>
          <button className="btn-outline text-xs md:text-sm">Nominate a Walker</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">
          <div className="md:col-span-2 glass-card p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group min-h-[300px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-4">
                <Star className="w-4 h-4 fill-current" /> Artist of the Month
              </div>
              <h3 className="text-4xl font-display font-bold mb-4">Sarah "Walker" Jenkins</h3>
              <p className="text-white/60 max-w-md">
                Sarah's digital art series "Neon Horizons" captures the essence of the Walkerverse in stunning detail.
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-4">
              <button className="btn-primary">View Portfolio</button>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${i}/32/32`} alt="" referrerPolicy="no-referrer" />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-background bg-surface flex items-center justify-center text-[10px] font-bold">
                  +12
                </div>
              </div>
            </div>
            <img 
              src="https://picsum.photos/seed/art/800/600" 
              className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" 
              alt=""
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="glass-card p-8 flex flex-col gap-6 bg-secondary/10 border-secondary/20">
            <h3 className="text-2xl font-display font-bold">Top Contributor</h3>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden">
                <img src="https://picsum.photos/seed/top/64/64" alt="" referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="font-bold">Marcus Vane</div>
                <div className="text-xs text-white/40">Community Moderator</div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs">
                <span>Contribution Level</span>
                <span className="text-secondary">Level 42</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[85%]" />
              </div>
            </div>
            <p className="text-sm text-white/60">
              Marcus has helped over 500 new Walkers find their way in the community this month.
            </p>
          </div>
        </div>
      </section>

      {/* Live Pulse Events */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="text-4xl font-display font-bold tracking-tight">Live Pulse Events</h2>
          <p className="text-white/40">Synchronize with the world. Don't miss the beat.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card p-8 flex flex-col gap-6 group cursor-pointer"
            >
              <div className={cn("w-fit px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-background", event.color)}>
                {event.type}
              </div>
              <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">{event.title}</h3>
              <div className="flex flex-col gap-3 text-sm text-white/40">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> {event.date}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> {event.location}
                </div>
              </div>
              <button className="mt-4 flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <span className="font-bold">Get Tickets</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Community Wall */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-display font-bold tracking-tight">Community Wall</h2>
          <div className="flex items-center gap-4">
            <button className="text-sm font-bold text-primary">Trending</button>
            <button className="text-sm font-bold text-white/40">Recent</button>
          </div>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="break-inside-avoid glass-card p-6 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${i+10}/40/40`} alt="" referrerPolicy="no-referrer" />
                  </div>
                  <span className="font-bold text-sm">{post.user}</span>
                </div>
                <button className="text-white/20 hover:text-white">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
              {post.image && (
                <div className="rounded-xl overflow-hidden">
                  <img src={post.image} className="w-full h-auto" alt="" referrerPolicy="no-referrer" />
                </div>
              )}
              <p className="text-sm text-white/80 leading-relaxed">
                {post.content}
              </p>
              <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                <button className="flex items-center gap-2 text-xs text-white/40 hover:text-tertiary transition-colors">
                  <Heart className="w-4 h-4" /> {post.likes}
                </button>
                <button className="flex items-center gap-2 text-xs text-white/40 hover:text-primary transition-colors">
                  <MessageCircle className="w-4 h-4" /> {post.comments}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <button className="btn-outline">Load More Posts</button>
        </div>
      </section>
    </div>
  );
}
