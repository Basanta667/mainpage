import React, { useState } from 'react';
import { 
  Gamepad2, 
  ChevronRight, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  Cpu,
  LayoutDashboard,
  Settings,
  Terminal,
  MousePointer2,
  HelpCircle,
  MessageSquare,
  CheckCircle2,
  Rocket,
  Search,
  Globe,
  Database,
  Monitor,
  Activity,
  Layers,
  MonitorPlay,
  HardDrive
} from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const GameServers = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const stats = [
    { label: 'Uptime Guarantee', value: '99.9%', sub: 'Maximum reliability', color: 'text-emerald-500' },
    { label: 'Response Time', value: '<30ms', sub: 'Lightning fast', color: 'text-emerald-500' },
    { label: 'Global Locations', value: '20+', sub: 'Low latency', color: 'text-brand-purple' },
    { label: 'DDoS Protection', value: '10TB+', sub: 'Enterprise grade', color: 'text-brand-purple' }
  ];

  const categories = ['All', 'Sandbox', 'Survival', 'RPG', 'Simulation', 'Military'];

  const games = [
    { title: 'Minecraft', category: 'Sandbox', slots: 'Unlimited', price: '149', image: 'https://raw.githubusercontent.com/Basanta667/HowtosetuppterodactylwingsForFree/refs/heads/main/Gemini_Generated_Image_i0cnhli0cnhli0cn.png', popular: true, path: '/games/minecraft' },
    { title: 'Hytale', category: 'Survival', slots: 'Unlimited', price: '199', image: 'https://raw.githubusercontent.com/Basanta667/HowtosetuppterodactylwingsForFree/refs/heads/main/Gemini_Generated_Image_bdztu7bdztu7bdzt.png', path: '/games/hytale' },
    { title: 'Palworld', category: 'Survival', slots: '32', price: '799', image: 'https://raw.githubusercontent.com/Basanta667/HowtosetuppterodactylwingsForFree/refs/heads/main/5a52ade92affafa4c4353c97110026811a365b65d6bad64e.avif', popular: true, path: '/games/palworld' }
  ];

  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || game.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 bg-fake-bg min-h-screen text-fake-text">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1538481199705-c710c4e963fc?q=80&w=2070&auto=format&fit=crop" 
             className="w-full h-full object-cover opacity-20"
             referrerPolicy="no-referrer"
             alt="Gaming background"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-fake-bg via-fake-bg/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-2xl"
           >
              <div className="inline-flex items-center gap-2 bg-brand-purple/10 border border-brand-purple/20 px-4 py-2 rounded-full mb-6">
                 <Zap className="w-4 h-4 text-brand-purple" />
                 <span className="text-brand-purple font-black text-[10px] uppercase tracking-widest leading-none">Premium Game Hosting</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none italic uppercase">
                 GAME SERVER<br />
                 <span className="text-brand-purple">HOSTING</span><br />
                 PERFECTED
              </h1>
              <p className="text-zinc-400 font-bold text-lg mb-10 leading-relaxed">
                 Rent high-performance game servers for 80+ popular titles. NVMe SSD storage, DDoS protection, and 24/7 support for lag-free gaming with friends.
              </p>
              <div className="flex flex-wrap gap-4 mb-16">
                 <button 
                   onClick={() => document.getElementById('browse-games')?.scrollIntoView({ behavior: 'smooth' })}
                   className="bg-brand-purple text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 transition-all hover:scale-105 shadow-xl shadow-brand-purple/20"
                 >
                    Explore Games <ArrowRight className="w-4 h-4" />
                 </button>
                 <div className="flex gap-4">
                    {[
                      { icon: HardDrive, label: 'NVMe SSD' },
                      { icon: ShieldCheck, label: 'DDoS Protected' },
                      { icon: Globe, label: 'Global Nodes' },
                      { icon: Clock, label: '99.9% Uptime' }
                    ].map((feat, i) => (
                      <div key={i} className="hidden lg:flex flex-col items-center gap-2">
                         <div className="w-12 h-12 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl flex items-center justify-center">
                            <feat.icon className="w-5 h-5 text-zinc-500" />
                         </div>
                         <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{feat.label}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-fake-card border-y border-fake-border py-12 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {stats.map((stat, i) => (
                 <div key={i} className="text-center md:text-left">
                    <p className={`${stat.color} text-4xl font-black tracking-tighter mb-1`}>{stat.value}</p>
                    <p className="text-white text-sm font-black uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-zinc-500 text-xs font-bold">{stat.sub}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Browse Games Section */}
      <section id="browse-games" className="py-24 px-6 bg-fake-bg">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-7xl font-black tracking-tight mb-4 uppercase italic">
                  Explore <span className="text-brand-purple">80+ Games</span>
               </h2>
               <p className="text-zinc-500 font-bold max-w-2xl mx-auto mb-12">
                  Choose from our extensive library of popular games. All servers feature instant setup and 24/7 support.
               </p>

               <div className="flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto">
                  <div className="relative flex-1 w-full">
                     <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                     <input 
                       type="text" 
                       placeholder="Search games by name or category..."
                       value={searchQuery}
                       onChange={(e) => setSearchQuery(e.target.value)}
                       className="w-full bg-[#111319] border border-white/5 rounded-2xl py-5 pl-16 pr-8 text-white font-bold placeholder:text-zinc-700 outline-none focus:border-brand-purple/50 transition-all"
                     />
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                     {categories.map(cat => (
                       <button
                         key={cat}
                         onClick={() => setActiveCategory(cat)}
                         className={`px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-brand-purple text-white' : 'bg-white/5 border border-white/10 text-zinc-500 hover:bg-white/10'}`}
                       >
                         {cat}
                       </button>
                     ))}
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {filteredGames.map((game, i) => (
                 <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-fake-card border border-fake-border rounded-3xl overflow-hidden group cursor-pointer hover:border-brand-purple/30 transition-all"
                    onClick={() => navigate(game.path)}
                  >
                    <div className="h-44 relative">
                       <img src={game.image} alt={game.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#111319] via-transparent to-transparent" />
                       <div className="absolute top-4 left-4 flex gap-2">
                          {game.popular && (
                             <span className="bg-emerald-500 text-white px-3 py-1 rounded-md text-[8px] font-black uppercase tracking-widest">Popular</span>
                          )}
                          <span className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 text-[8px] font-black uppercase tracking-widest">{game.slots} Slots</span>
                       </div>
                    </div>
                    <div className="p-6 text-center">
                       <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1 italic">{game.category}</p>
                       <h3 className="text-2xl font-black mb-6 uppercase italic">{game.title}</h3>
                       <div className="mb-6">
                          <p className="text-white text-3xl font-black tracking-tight">₹{game.price}<span className="text-zinc-500 text-xs">/mo</span></p>
                          <p className="text-zinc-600 text-[9px] font-bold uppercase tracking-widest leading-none">Starting from</p>
                       </div>
                       <div className="bg-brand-purple/10 border border-brand-purple/20 text-brand-purple py-4 rounded-xl font-black text-[10px] uppercase tracking-widest group-hover:bg-brand-purple group-hover:text-white transition-all shadow-xl shadow-brand-purple/5">
                          Get Started
                       </div>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Complete Hosting Suite */}
      <section className="py-24 px-6 border-t border-fake-border bg-fake-card">
         <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-7xl font-black tracking-tight mb-4 uppercase italic">Complete <span className="text-brand-purple">Hosting Suite</span></h2>
            <p className="text-zinc-500 font-bold max-w-2xl mx-auto mb-20 uppercase tracking-widest text-xs">Everything you need to power your online presence</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {[
                 { title: 'Game Servers', icon: Gamepad2, color: 'text-brand-purple', bg: 'bg-brand-purple/10', sub: '80+ popular games with instant setup', items: ['Instant Setup', 'Mod Support', 'Full Control'] },
                 { title: 'Discord Bots', icon: MessageSquare, color: 'text-blue-400', bg: 'bg-blue-500/10', sub: '24/7 bot hosting with auto-scaling', items: ['Node.js/Python', 'Auto Backups', '99.9% Uptime'] },
                 { title: 'Web Hosting', icon: Globe, color: 'text-emerald-400', bg: 'bg-emerald-500/10', sub: 'cPanel hosting with free SSL', items: ['Free SSL', 'Unlimited Email', 'Daily Backups'] },
                 { title: 'VPS Hosting', icon: Cpu, color: 'text-orange-400', bg: 'bg-orange-500/10', sub: 'High-performance virtual servers', items: ['NVMe SSD', 'Root Access', 'DDoS Protected'] }
               ].map((item, i) => (
                 <div key={i} className="bg-fake-card border border-fake-border p-10 rounded-[2.5rem] text-center hover:border-white/10 transition-all">
                    <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mx-auto mb-8`}>
                       <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-zinc-500 text-xs font-bold leading-relaxed mb-8">{item.sub}</p>
                    <div className="space-y-3">
                       {item.items.map((feat, j) => (
                         <div key={j} className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 justify-center">
                            <CheckCircle2 className="w-3 h-3 text-zinc-600" /> {feat}
                         </div>
                       ))}
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
               <div>
                  <h2 className="text-4xl md:text-7xl font-black tracking-tight mb-12 uppercase italic">Why Choose <span className="text-brand-purple">FakeCloud?</span></h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {[
                       { icon: Cpu, title: 'High Performance CPUs', text: 'Intel Platinum processors for lag-free gaming experience' },
                       { icon: ShieldCheck, title: 'DDoS Protection', text: 'Enterprise-grade protection keeps your server online 24/7' },
                       { icon: Globe, title: 'Global Locations', text: '20+ worldwide datacenters for lowest possible ping' },
                       { icon: Clock, title: 'Auto Backups', text: 'Daily automated backups with 7-day retention period' },
                       { icon: Zap, title: 'Instant Setup', text: 'Your server is ready to play in under 60 seconds' },
                       { icon: MessageSquare, title: '24/7 Support', text: 'Expert support team available around the clock' }
                     ].map((item, i) => (
                       <div key={i} className="group cursor-default">
                          <item.icon className="w-8 h-8 text-brand-purple mb-4 group-hover:scale-110 transition-transform" />
                          <h4 className="text-lg font-black uppercase tracking-tight mb-2 text-fake-text">{item.title}</h4>
                          <p className="text-zinc-500 text-xs font-bold leading-relaxed">{item.text}</p>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-purple/20 blur-[120px] rounded-full opacity-30" />
                  <div className="relative bg-fake-card border border-fake-border rounded-[3rem] p-12 relative overflow-hidden group">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-brand-purple/10 rounded-xl flex items-center justify-center">
                           <LayoutDashboard className="w-6 h-6 text-brand-purple" />
                        </div>
                        <h4 className="text-2xl font-black uppercase tracking-tighter">CROSS-PLATFORM COMPATIBILITY</h4>
                     </div>
                     <h3 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-none italic">Play Anywhere</h3>
                     <p className="text-zinc-500 font-bold mb-10 leading-relaxed">
                        Connect players from all platforms with our crossplay support. Whether on PC, console, or mobile, everyone can play together seamlessly.
                     </p>
                     <div className="grid grid-cols-2 gap-4">
                        {['PC Gaming', 'XBOX', 'PlayStation', 'Mobile'].map(platform => (
                          <div key={platform} className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-4 rounded-xl flex items-center justify-center gap-3 group-hover:bg-brand-purple/10 transition-all cursor-pointer">
                             <div className="w-2 h-2 bg-brand-purple rounded-full" />
                             <span className="text-[10px] font-black uppercase tracking-widest">{platform}</span>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Support Section */}
      <section className="py-24 px-6 bg-fake-card border-y border-fake-border">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-7xl font-black tracking-tight mb-4 uppercase italic">Expert <span className="text-brand-purple">24/7 Support</span></h2>
               <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest">Our dedicated team is always available to help you maximize your gaming experience</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { title: '24/7/365 SUPPORT', text: 'Immediate assistance via our Discord server tickets. Average response time under 15 minutes.' },
                 { title: 'EXPERIENCED STAFF', text: 'Years of experience with game server hosting and optimization.' },
                 { title: 'PERSONALIZED HELP', text: 'Human support tailored to your specific game and community needs.' }
               ].map((item, i) => (
                 <div key={i} className="text-center p-8 bg-fake-card border border-fake-border rounded-3xl hover:border-brand-purple/20 transition-all">
                    <h4 className="text-xl font-black uppercase tracking-tight mb-4 text-fake-text">{item.title}</h4>
                    <p className="text-zinc-500 text-sm font-bold leading-relaxed">{item.text}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-32 relative overflow-hidden">
         <div className="max-w-5xl mx-auto relative z-10">
            <div className="bg-fake-card border border-fake-border rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden group shadow-2xl">
               <div className="absolute inset-0 bg-brand-purple/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />
               <div className="relative">
                  <div className="w-20 h-20 bg-brand-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-10 border border-brand-purple/30 group-hover:scale-110 transition-transform">
                     <Rocket className="w-10 h-10 text-brand-purple" />
                  </div>
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase italic">Ready to Start Gaming?</h2>
                  <p className="text-zinc-500 font-bold text-xl mb-12 max-w-2xl mx-auto">Join thousands of gamers hosting their servers with FakeCloud. Instant setup, DDoS protection, and 24/7 support.</p>
                  <button 
                    onClick={() => navigate('/order-guide')}
                    className="bg-brand-purple text-white px-20 py-6 rounded-2xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 transition-all hover:scale-105 shadow-2xl shadow-brand-purple/40 mx-auto"
                  >
                     Explore All Games <ArrowRight className="w-6 h-6" />
                  </button>
                  <p className="text-zinc-600 font-bold text-[10px] mt-10 uppercase tracking-widest">No setup fees | Free trial available | 30-day money-back guarantee</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default GameServers;
