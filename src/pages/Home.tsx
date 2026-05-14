import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Server, 
  Gamepad2, 
  Monitor, 
  Globe, 
  Database, 
  ArrowRight,
  Search,
  ChevronDown,
  ChevronRight,
  Layout,
  Cpu,
  Layers,
  Settings,
  MessageSquare,
  Headphones,
  HardDrive
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activePanelFeature, setActivePanelFeature] = useState(0);

  return (
    <div className="pt-20">
      {/* Announcement Bar */}
      <div className="bg-brand-purple/10 border-y border-brand-purple/20 py-2.5 px-4 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-3 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-purple text-center">
          <span className="bg-brand-purple text-white px-2 py-0.5 rounded-sm">NEW</span>
          Join our Discord to get 10% Discount on your first order!
          <a href="https://discord.com/invite/jyPz22PjEH" target="_blank" rel="noopener noreferrer" className="underline flex items-center gap-1 hover:text-white transition-colors">
            Join Discord <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-brand-purple/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-brand-purple uppercase tracking-[0.3em] font-black text-[10px] mb-6"
            >
              <div className="w-8 h-px bg-brand-purple" />
              Hosting Solutions Made Simple
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.05] tracking-tight mb-8 uppercase"
            >
              HOSTING SOLUTION <br />
              MADE <span className="text-gradient">SIMPLE</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-zinc-500 text-lg md:text-xl font-medium mb-12 max-w-xl leading-relaxed"
            >
              Scale your vision with enterprise-grade hardware, 24/7 expert support, and global infrastructure tailored for your needs.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <button 
                onClick={() => navigate('/game-servers')}
                className="bg-brand-gradient text-white px-8 py-4 rounded-xl font-black tracking-tight flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-purple/30 group"
              >
                GAME SERVER
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => navigate('/intel-platinum-vps')}
                className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-8 py-4 rounded-xl font-bold tracking-tight hover:bg-black/10 dark:hover:bg-white/10 transition-all flex items-center gap-2"
              >
                VPS HOSTING
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Everything You Need Section (Redesigned) */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <div className="inline-block px-4 py-1.5 bg-brand-purple/10 border border-brand-purple/20 rounded-full text-brand-purple text-[10px] font-black uppercase tracking-widest mb-6">
               <Zap className="w-3.5 h-3.5 inline-block mr-2" /> All Services
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 uppercase">Everything You Need, <span className="text-brand-purple">In One Place</span></h2>
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] max-w-2xl mx-auto">VPS, Websites, and Game Servers - modern hosting solutions with premium performance.</p>
          </div>

          {/* VPS & Servers Category */}
          <div className="mb-24">
             <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-zinc-400">
                   <Server className="w-5 h-5" />
                </div>
                <div>
                   <h3 className="text-2xl font-black uppercase tracking-tight">VPS & Servers</h3>
                   <p className="text-zinc-500 text-[11px] font-bold tracking-widest uppercase">Choose the perfect plan for your needs</p>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Intel Platinum VPS */}
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="bg-fake-card border border-white/5 rounded-3xl overflow-hidden group hover:border-brand-pink/30 transition-all flex flex-col shadow-2xl shadow-black/50"
                >
                   <div className="aspect-[16/10] relative overflow-hidden bg-[#0c4ca3] flex items-center justify-center">
                      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest border border-white/10">Save up to 40%</div>
                      <img src="https://th-i.thgim.com/public/sci-tech/technology/6fwxd/article53473491.ece/alternates/FREE_320/Intel-4" alt="Intel" referrerPolicy="no-referrer" className="w-40 h-auto group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                   </div>
                   <div className="p-10 flex-grow">
                      <h4 className="text-3xl font-black mb-3 tracking-tight group-hover:text-brand-pink transition-all">Intel Platinum VPS</h4>
                      <p className="text-zinc-500 text-[13px] font-bold mb-8 leading-relaxed">Budget VPS in India with High Performance</p>
                      <button 
                        onClick={() => navigate('/intel-platinum-vps')}
                        className="w-full bg-[#b432e6] text-white py-4.5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#b432e6]/20 transition-all hover:scale-105 active:scale-95"
                      >
                         Set Up <ChevronRight className="w-4 h-4" />
                      </button>
                   </div>
                </motion.div>

                {/* AMD Ryzen VPS */}
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="bg-fake-card border border-fake-border rounded-3xl overflow-hidden group hover:border-orange-500/30 transition-all flex flex-col shadow-2xl shadow-black/50"
                >
                   <div className="aspect-[16/10] relative overflow-hidden bg-[#1a110a] flex items-center justify-center">
                      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest border border-white/10">Save up to 30%</div>
                      <img src="https://miro.medium.com/v2/resize:fit:700/1*dKgQGOevoDn3qIAvFS1A_w.jpeg" alt="Ryzen" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                   </div>
                   <div className="p-10 flex-grow">
                      <h4 className="text-3xl font-black mb-3 tracking-tight group-hover:text-orange-500 transition-all uppercase">AMD Ryzen VPS</h4>
                      <p className="text-zinc-500 text-[13px] font-bold mb-8 leading-relaxed">Premium Performance with NVMe SSD</p>
                      <button 
                         onClick={() => navigate('/amd-ryzen-vps')}
                         className="w-full bg-[#f66a32] text-white py-4.5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#f66a32]/20 transition-all hover:scale-105 active:scale-95"
                      >
                         Set Up <ChevronRight className="w-4 h-4" />
                      </button>
                   </div>
                </motion.div>

                {/* Intel Xeon VPS */}
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="bg-fake-card border border-fake-border rounded-3xl overflow-hidden group hover:border-brand-pink/30 transition-all flex flex-col shadow-2xl shadow-black/50"
                >
                   <div className="aspect-[16/10] relative overflow-hidden bg-[#0c4ca3] flex items-center justify-center">
                      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest border border-white/10">Save up to 25%</div>
                      <img src="https://th-i.thgim.com/public/sci-tech/technology/6fwxd/article53473491.ece/alternates/FREE_320/Intel-4" alt="Intel" referrerPolicy="no-referrer" className="w-40 h-auto group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                   </div>
                   <div className="p-10 flex-grow">
                      <h4 className="text-3xl font-black mb-3 tracking-tight group-hover:text-brand-pink transition-all">Intel Xeon VPS</h4>
                      <p className="text-zinc-500 text-[13px] font-bold mb-8 leading-relaxed">Reliable VPS for enterprise-style workloads</p>
                      <button 
                         onClick={() => navigate('/intel-xeon-vps')}
                         className="w-full bg-[#b432e6] text-white py-4.5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#b432e6]/20 transition-all hover:scale-105 active:scale-95"
                      >
                         Set Up <ChevronRight className="w-4 h-4" />
                      </button>
                   </div>
                </motion.div>
             </div>
          </div>

          {/* Websites & Apps Category */}
          <div className="mb-24">
             <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-zinc-400">
                   <Globe className="w-5 h-5" />
                </div>
                <div>
                   <h3 className="text-2xl font-black uppercase tracking-tight">Websites & Apps</h3>
                   <p className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase">Choose the perfect plan for your needs</p>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Web Hosting */}
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="bg-fake-card border border-fake-border rounded-3xl overflow-hidden group hover:border-teal-500/30 transition-all flex flex-col shadow-2xl shadow-black/50"
                >
                   <div className="aspect-[16/10] relative overflow-hidden bg-[#121212] flex items-center justify-center">
                      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest border border-white/10">Save up to 30%</div>
                      <img src="https://raw.githubusercontent.com/Basanta667/HowtosetuppterodactylwingsForFree/refs/heads/main/Gemini_Generated_Image_ohhaltohhaltohha.png" alt="Web Hosting" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                   </div>
                   <div className="p-10 flex-grow">
                      <h4 className="text-[1.75rem] font-black mb-3 tracking-tight group-hover:text-teal-400 transition-all">Web Hosting</h4>
                      <p className="text-zinc-500 text-[13px] font-bold mb-8 leading-relaxed">Fast & Reliable Hosting with cPanel</p>
                      <button 
                         onClick={() => navigate('/web-hosting')}
                         className="w-full bg-[#10b981] text-white py-4.5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#10b981]/20 transition-all hover:scale-105 active:scale-95"
                      >
                         Set Up <ChevronRight className="w-4 h-4" />
                      </button>
                   </div>
                </motion.div>

                {/* Discord Bot Hosting */}
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="bg-fake-card border border-fake-border rounded-3xl overflow-hidden group hover:border-indigo-500/30 transition-all flex flex-col shadow-2xl shadow-black/50"
                >
                   <div className="aspect-[16/10] relative overflow-hidden bg-[#5865f2] flex items-center justify-center">
                      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest border border-white/10">Save up to 25%</div>
                      <img src="https://raw.githubusercontent.com/Basanta667/HowtosetuppterodactylwingsForFree/refs/heads/main/Gemini_Generated_Image_21dt1e21dt1e21dt.png" alt="Discord" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                   </div>
                   <div className="p-10 flex-grow">
                      <h4 className="text-[1.75rem] font-black mb-3 tracking-tight group-hover:text-indigo-400 transition-all">Bot Hosting</h4>
                      <p className="text-zinc-500 text-[13px] font-bold mb-8 leading-relaxed">Keep your bot online 24/7 with zero lag</p>
                      <button 
                         onClick={() => navigate('/discord-bot-hosting')}
                         className="w-full bg-[#5865f2] text-white py-4.5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#5865f2]/20 transition-all hover:scale-105 active:scale-95"
                      >
                         Set Up <ChevronRight className="w-4 h-4" />
                      </button>
                   </div>
                </motion.div>
             </div>
          </div>

          {/* Game Hosting Category */}
          <div className="mb-24">
             <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-zinc-400">
                   <Gamepad2 className="w-5 h-5" />
                </div>
                <div>
                   <h3 className="text-2xl font-black uppercase tracking-tight">Game Servers</h3>
                   <p className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase">High performance gaming infrastructure</p>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Minecraft Hosting */}
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="bg-fake-card border border-fake-border rounded-3xl overflow-hidden group hover:border-emerald-500/30 transition-all flex flex-col"
                >
                   <div className="aspect-[16/9] relative overflow-hidden flex items-center justify-center">
                      <img src="https://raw.githubusercontent.com/Basanta667/HowtosetuppterodactylwingsForFree/refs/heads/main/Gemini_Generated_Image_i0cnhli0cnhli0cn.png" alt="Minecraft" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                   </div>
                   <div className="p-8 flex-grow">
                      <h4 className="text-2xl font-black mb-2 tracking-tight group-hover:text-emerald-400 transition-all">Minecraft Hosting</h4>
                      <p className="text-zinc-500 text-sm font-medium mb-8 leading-relaxed">Premium Performance for Your Worlds</p>
                      <button 
                         onClick={() => navigate('/games/minecraft')}
                         className="w-full bg-emerald-500 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                      >
                         Set Up <ArrowRight className="w-3 h-3" />
                      </button>
                   </div>
                </motion.div>

                {/* Hytale Hosting */}
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="bg-fake-card border border-fake-border rounded-3xl overflow-hidden group hover:border-brand-purple/30 transition-all flex flex-col"
                >
                   <div className="aspect-[16/9] relative overflow-hidden flex items-center justify-center">
                      <img src="https://raw.githubusercontent.com/Basanta667/HowtosetuppterodactylwingsForFree/refs/heads/main/Gemini_Generated_Image_bdztu7bdztu7bdzt.png" alt="Hytale" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                   </div>
                   <div className="p-8 flex-grow">
                      <h4 className="text-2xl font-black mb-2 tracking-tight group-hover:text-brand-purple transition-all">Hytale Hosting</h4>
                      <p className="text-zinc-500 text-sm font-medium mb-8 leading-relaxed">Optimized for Next-Gen Adventure</p>
                      <button 
                         onClick={() => navigate('/games/hytale')}
                         className="w-full bg-brand-purple text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                      >
                         Set Up <ArrowRight className="w-3 h-3" />
                      </button>
                   </div>
                </motion.div>

                {/* All Game Servers */}
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="bg-fake-card border border-fake-border rounded-3xl overflow-hidden group hover:border-brand-pink/30 transition-all flex flex-col"
                >
                   <div className="aspect-[16/9] relative overflow-hidden flex items-center justify-center">
                      <img src="https://raw.githubusercontent.com/Basanta667/HowtosetuppterodactylwingsForFree/refs/heads/main/all%20game.webp" alt="All Games" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                   </div>
                   <div className="p-8 flex-grow">
                      <h4 className="text-2xl font-black mb-2 tracking-tight group-hover:text-brand-pink transition-all">See All Game Servers</h4>
                      <p className="text-zinc-500 text-sm font-medium mb-8 leading-relaxed">Browse all supported game server options</p>
                      <button 
                         onClick={() => navigate('/game-servers')}
                         className="w-full bg-brand-pink text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                      >
                         Set Up <ArrowRight className="w-3 h-3" />
                      </button>
                   </div>
                </motion.div>
             </div>
          </div>
        </div>
      </section>

      {/* Why Us Section / Our Features */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 uppercase">Our Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Headphones, title: '24/7/365 SUPPORT', desc: 'Get the best customer support of any Minecraft server host. Our average support ticket reply time is under 15 minutes.' },
              { icon: Globe, title: 'SERVERS WORLDWIDE FOR LOWER LATENCY', desc: 'We offer game server hosting at 20 locations worldwide so that you can have a low latency wherever you\'re located.' },
              { icon: Zap, title: 'AUTOMATED MODPACK INSTALLATION', desc: 'Our Minecraft server hosting plans include automatic installation, making modpack server hosting a breeze with hundreds of mods.' },
              { icon: ShieldCheck, title: 'DDOS PROTECTION', desc: 'All of our gaming servers are outfitted with DDoS protection to help you avoid downtime, including intentional DDoS attacks.' },
              { icon: Layout, title: 'COOL EASY TO USE GAME PANEL', desc: 'Our game has all option you need for your minecraft server management like player, server, version manager and much more.' },
              { icon: Layers, title: 'GAME SWAPPING', desc: 'Want to shake things up? You can swap your server to any of our 80+ covered games anytime, at no extra charge!' },
            ].map((feature, i) => (
              <div key={i} className="bg-fake-card border border-fake-border rounded-[2.5rem] p-10 text-center hover:border-brand-purple/30 transition-all group">
                <div className="w-16 h-16 bg-brand-purple/10 rounded-2xl flex items-center justify-center p-4 mx-auto mb-8 group-hover:scale-110 transition-transform">
                   <feature.icon className="w-full h-full text-brand-purple" />
                </div>
                <h4 className="text-lg font-black tracking-tight text-fake-text mb-4 uppercase">{feature.title}</h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Control Panel Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-brand-gradient rounded-[2.5rem] p-1 lg:p-2 shadow-2xl shadow-brand-purple/20">
            <div className="bg-fake-bg rounded-[2rem] p-8 md:p-16 lg:p-24 flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/10 blur-[120px] rounded-full pointer-events-none" />
              
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-block px-4 py-1.5 bg-brand-purple/10 border border-brand-purple/20 rounded-full text-brand-purple text-[10px] font-black uppercase tracking-widest mb-6">
                  Next-Gen Management
                </div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1]">
                  Managing your servers <br />
                  has never been <span className="text-gradient">so easy.</span>
                </h2>
                <p className="text-zinc-500 font-medium text-lg mb-10 max-w-xl">
                  Our custom-built control panel gives you complete control over your hosting environment with one-click installers, real-time metrics, and instant backups.
                </p>
                
                <div className="grid grid-cols-2 gap-x-12 gap-y-6 mb-12">
                   {[
                     { icon: Settings, label: 'Advanced Controls' },
                     { icon: Layout, label: 'Intuitive UI' },
                     { icon: Layers, label: 'Scalable' },
                     { icon: Zap, label: 'Instant Deploy' }
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-brand-purple" />
                        <span className="font-bold text-sm tracking-tight">{item.label}</span>
                     </div>
                   ))}
                </div>

                <button 
                  onClick={() => window.open('https://panel.fakecloud.qzz.io/', '_blank')}
                  className="bg-white text-black px-8 py-4 rounded-xl font-black tracking-tight hover:bg-zinc-200 transition-all flex items-center justify-center lg:justify-start gap-3 w-full sm:w-auto"
                >
                  Try Demo Panel <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-[1.2] relative w-full lg:w-auto">
                <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group transition-transform duration-500">
                  <img 
                    src="https://raw.githubusercontent.com/Basanta667/HowtosetuppterodactylwingsForFree/refs/heads/main/Control%20panel.png" 
                    alt="Control Panel Preview" 
                    className="w-full transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                {/* Decorative floaters */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-purple/20 blur-2xl rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-pink/20 blur-2xl rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Panel Features Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">Panel Features</h2>
             <p className="text-zinc-500 font-bold">Powerful panel tools for Minecraft setup, management, and scaling.</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
             <div className="flex-1 space-y-2">
                {[
                  { 
                    title: 'Minecraft Configuration', 
                    desc: 'Control server behavior, gameplay rules, and startup settings from one clean dashboard.', 
                    icon: Settings,
                    image: 'https://raw.githubusercontent.com/Basanta667/HowtosetuppterodactylwingsForFree/refs/heads/main/Minecraft%20Configuration%20Panel%20Ui.png'
                  },
                  { 
                    title: 'Version Changer', 
                    desc: 'Switch through hundreds of versions and modpacks instantly.', 
                    icon: Layers,
                    image: 'https://raw.githubusercontent.com/Basanta667/HowtosetuppterodactylwingsForFree/refs/heads/main/Version%20Changer.png'
                  },
                  { 
                    title: 'Plugin Installer', 
                    desc: 'Search and install 100,000+ plugins with a single click.', 
                    icon: Zap,
                    image: 'https://raw.githubusercontent.com/Basanta667/HowtosetuppterodactylwingsForFree/refs/heads/main/Plugin%20Installer.png'
                  },
                  { 
                    title: 'Mod Installer', 
                    desc: 'Install popular mods and modpacks automatically.', 
                    icon: Cpu,
                    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2600&auto=format&fit=crop'
                  },
                  { 
                    title: 'Modpack Installer', 
                    desc: 'One-click modpack installer for CurseForge, Technic & more.', 
                    icon: HardDrive,
                    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2600&auto=format&fit=crop'
                  },
                  { 
                    title: 'World Manager', 
                    desc: 'Upload, download, and manage your worlds with ease.', 
                    icon: Globe,
                    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2600&auto=format&fit=crop'
                  }
                ].map((item, i, array) => (
                  <div 
                    key={i} 
                    onClick={() => setActivePanelFeature(i)}
                    className={`p-6 rounded-2xl border transition-all cursor-pointer flex items-center gap-6 group ${activePanelFeature === i ? 'bg-brand-purple/10 border-brand-purple/30' : 'bg-transparent border-white/5 hover:border-white/20'}`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center p-3 ${activePanelFeature === i ? 'bg-brand-purple text-white' : 'bg-white/5 text-zinc-500 group-hover:text-white'}`}>
                       <item.icon className="w-full h-full" />
                    </div>
                    <div className="flex-1 text-left">
                       <div className="flex items-center justify-between">
                          <h5 className="font-black text-lg tracking-tight">{item.title}</h5>
                          <ArrowRight className={`w-5 h-5 transition-transform ${activePanelFeature === i ? 'rotate-180' : ''}`} />
                       </div>
                       <AnimatePresence mode="wait">
                         {activePanelFeature === i && (
                           <motion.p 
                             initial={{ height: 0, opacity: 0 }}
                             animate={{ height: 'auto', opacity: 1 }}
                             exit={{ height: 0, opacity: 0 }}
                             className="text-zinc-400 text-sm mt-2 font-medium leading-relaxed overflow-hidden"
                           >
                             {item.desc}
                           </motion.p>
                         )}
                       </AnimatePresence>
                    </div>
                  </div>
                ))}
             </div>
             
             <div className="flex-[1.5] relative">
                <div className="bg-brand-gradient p-1 rounded-3xl shadow-2xl shadow-brand-purple/20">
                   <div className="bg-fake-bg rounded-[calc(1.5rem-4px)] overflow-hidden aspect-video">
                      <AnimatePresence mode="wait">
                        <motion.img 
                          key={activePanelFeature}
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.4 }}
                          src={[
                            'https://raw.githubusercontent.com/Basanta667/HowtosetuppterodactylwingsForFree/refs/heads/main/Minecraft%20Configuration%20Panel%20Ui.png',
                            'https://raw.githubusercontent.com/Basanta667/HowtosetuppterodactylwingsForFree/refs/heads/main/Version%20Changer.png',
                            'https://raw.githubusercontent.com/Basanta667/HowtosetuppterodactylwingsForFree/refs/heads/main/Plugin%20Installer.png',
                            'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2600&auto=format&fit=crop',
                            'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2600&auto=format&fit=crop',
                            'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2600&auto=format&fit=crop'
                          ][activePanelFeature]}
                          alt="Panel UI" 
                          className="w-full h-full object-cover"
                        />
                      </AnimatePresence>
                   </div>
                </div>
                {/* Floaties */}
                <div className="absolute -bottom-10 -right-10 bg-brand-purple/20 blur-3xl w-64 h-64 rounded-full" />
             </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-7xl font-black tracking-tight mb-4 uppercase">Frequently Asked Questions</h2>
            <p className="text-zinc-500 font-bold">Clear answers to the most common questions about plans, performance, and support.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: 'How quick is your support?', a: 'Our average ticket reply time is 15 minutes or less, day or night! We built our support team to be the quickest and best in the industry because we understand that server hosting can be complicated and want to be there when you need help.' },
              { q: 'What are the specifications of FakeCloud server nodes?', a: 'We own a broad mix of processors including Intel Xeon workhorses and the latest Ryzens. 65%+ of our infrastructure runs on AMD CPUs, and 67%+ of all active CPUs are at 3.7 GHz base-speed or higher. Since Q1 2025, we primarily deploy Ryzen 7 9700X or Ryzen 7 9900X CPUs with DDR5 RAM.' },
              { q: 'Are your Minecraft and gaming servers online 24/7?', a: 'Yes, all of our services run 24 hours per day, 7 days per week, and 365 days per year, so that you can connect with your friends any time.' },
              { q: 'Can I switch between modpacks on my Minecraft server whenever I want?', a: 'Yes! When you choose for hosting your Minecraft server, you get the ability to switch between modpacks as often as you\'d like with only a few clicks.' },
              { q: 'Are the player slots unlimited or adjustable?', a: 'On our Premium and Budget Minecraft servers, you can adjust the player slots as needed in order to suit your server directly from your control panel.' },
              { q: 'Do you provide DDoS protection?', a: 'Yes, we provide enterprise-grade DDoS protection represented by up to 1.3Tbps capacity if you want.' }
            ].map((faq, i) => (
              <details key={i} className="group bg-fake-card rounded-2xl border border-fake-border transition-all open:border-brand-purple/30 overflow-hidden">
                <summary className="list-none p-8 cursor-pointer flex items-center justify-between font-black tracking-tight text-xl">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-brand-purple" />
                </summary>
                <div className="p-8 pt-0 text-zinc-400 font-medium leading-relaxed border-t border-white/5">
                  <div className="pt-6">
                    {faq.a}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Go Beyond Gaming */}
      <section className="py-32 text-center">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-7xl font-black mb-16 uppercase tracking-tight">Go Beyond Gaming</h2>
            
            <div className="flex flex-wrap justify-center gap-12 mb-20">
               {[
                 { icon: Globe, label: 'WEB HOSTING' },
                 { icon: Monitor, label: 'BOT HOSTING' },
                 { icon: Server, label: 'VPS SERVERS' }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center gap-4">
                    <div className="w-20 h-20 bg-brand-purple/10 rounded-3xl flex items-center justify-center p-5 text-brand-purple border border-brand-purple/20 hover:scale-110 transition-transform cursor-pointer">
                       <item.icon className="w-full h-full" />
                    </div>
                    <span className="font-black text-xs tracking-widest text-zinc-500">{item.label}</span>
                 </div>
               ))}
            </div>

            <div className="max-w-4xl mx-auto">
               <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] mb-20 leading-loose">
                  FakeCloud offers more than just Minecraft hosting and gaming servers — We also have <span className="text-brand-purple">Fast Hosting</span> for VPS, Web, and Discord Bots. With our unbeatable customer support and global reach, we can offer server hosting for any need.
               </p>

               <div className="relative inline-block group">
                  <div className="absolute inset-0 bg-brand-purple blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative bg-fake-card border border-fake-border p-12 rounded-[2.5rem] min-w-[300px]">
                     <div className="text-brand-purple font-black text-xs tracking-[0.4em] mb-4">START HERE</div>
                     <button onClick={() => navigate('/order-guide')} className="bg-brand-purple text-white px-10 py-4 rounded-xl font-black tracking-tight hover:scale-105 active:scale-95 transition-all uppercase">
                        Create Server
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-brand-purple p-[1px] rounded-[3rem] overflow-hidden">
             <div className="bg-fake-bg py-20 px-8 rounded-[3rem] text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-gradient opacity-5" />
                <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 relative z-10">Start Your Performance <br /> Journey Today.</h2>
                <div className="flex flex-wrap justify-center gap-4 relative z-10">
                   <button onClick={() => navigate('/order-guide')} className="bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl">
                      Get Started Now
                   </button>
                   <a 
                     href="https://discord.com/invite/jyPz22PjEH" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="bg-white/5 border border-white/10 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all flex items-center justify-center"
                   >
                      Contact Support
                   </a>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
