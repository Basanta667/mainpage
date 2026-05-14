import React from 'react';
import { 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Globe, 
  Cpu, 
  LayoutDashboard, 
  HardDrive, 
  Clock,
  ArrowRight,
  Terminal,
  Settings,
  Rocket,
  Plus,
  MessageSquare,
  Users,
  Code2,
  Box,
  MonitorPlay,
  HeartHandshake
} from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const DiscordBotHosting = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Lite Plan',
      tag: 'Basic | 1-2 Bots',
      price: '139',
      features: [
        '1GB DDR4 RAM',
        '4GB NVMe SSD Storage',
        '100% CPU (AMD Ryzen 7)',
        '1 MySQL Database',
        'Full DDoS Protection',
        'Automated Backups',
        'One-Click Bot Installer',
        '24/7 Support'
      ],
      icon: Box,
      color: 'from-brand-purple to-brand-pink',
      popular: false
    },
    {
      name: 'Standard Plan',
      tag: 'Standard | 1-2 Bots',
      price: '159',
      features: [
        '2GB DDR4 RAM',
        '8GB NVMe SSD Storage',
        '150% CPU (AMD Ryzen 7)',
        '2 MySQL Databases',
        'Full DDoS Protection',
        'Automated Daily Backups',
        'One-Click Bot Installer',
        'Priority Support'
      ],
      icon: Rocket,
      color: 'from-brand-purple to-brand-pink',
      popular: false
    },
    {
      name: 'Starter Plan',
      tag: 'Enhanced | 3-5 Bots',
      price: '199',
      features: [
        '4GB DDR4 RAM',
        '14GB NVMe SSD Storage',
        '200% CPU (AMD Ryzen 7)',
        '3 MySQL Databases',
        'Full DDoS Protection',
        'Automated Daily Backups',
        'One-Click Bot Installer + Libraries',
        'Priority 24/7 Support'
      ],
      icon: LayoutDashboard,
      color: 'from-brand-purple to-brand-pink',
      popular: true,
      popularTag: 'MOST POPULAR'
    },
    {
      name: 'Coder Plan',
      tag: 'Pro | 5-8 Bots',
      price: '249',
      features: [
        '6GB DDR4 RAM',
        '20GB NVMe SSD Storage',
        '300% CPU (AMD Ryzen 7)',
        '4 MySQL Databases',
        'Full DDoS Protection',
        'Automated Hourly Backups',
        'Advanced Bot Libraries',
        'Premium 24/7 Support'
      ],
      icon: Settings,
      color: 'from-emerald-500 to-emerald-700',
      popular: false
    }
  ];

  const platforms = [
    { name: 'Node.js', version: 'v16+', libraries: 'Discord.js, Eris, Oceanic', icon: Zap, color: 'text-amber-500' },
    { name: 'Python', version: 'v3.8+', libraries: 'discord.py, nextcord, py-cord', icon: Globe, color: 'text-emerald-500' },
    { name: 'Java', version: 'v17+', libraries: 'JDA, Discord4J', icon: CupSoda, color: 'text-orange-500' },
    { name: 'TypeScript', version: 'v4.0+', libraries: 'Discord.js with TS', icon: Box, color: 'text-blue-500' },
    { name: 'C#', version: 'v.NET 6+', libraries: 'DSharpPlus, Discord.NET', icon: ShieldCheck, color: 'text-indigo-500' },
    { name: 'Go', version: 'v1.18+', libraries: 'DiscordGo', icon: Plus, color: 'text-sky-500' }
  ];

  return (
    <div className="pt-24 pb-20 bg-fake-bg">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-4 py-1.5 bg-brand-purple/10 border border-brand-purple/20 rounded-full text-brand-purple text-[10px] font-black uppercase tracking-widest mb-8"
          >
            <MonitorPlay className="w-3.5 h-3.5" /> High-Performance Bot Hosting
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-6"
          >
            Discord Bot <br /> <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">Hosting Perfected</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl mb-12"
          >
            Deploy and manage your Discord bots with enterprise-grade performance. NVMe SSD storage, full DDoS protection, and global datacenters ensure your bot runs smoothly 24/7.
          </motion.p>
          
          <button 
            onClick={() => {
              const el = document.getElementById('plans');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-brand-purple text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 transition-all hover:scale-105 shadow-xl shadow-brand-purple/20"
          >
             <LayoutDashboard className="w-4 h-4" /> View Plans <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex flex-wrap justify-center gap-8 mt-12 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
             <div className="flex items-center gap-2"><Zap className="w-3.5 h-3.5 text-amber-500" /> NVMe SSD</div>
             <div className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> DDoS Protected</div>
             <div className="flex items-center gap-2"><Globe className="w-3.5 h-3.5 text-blue-500" /> Global Nodes</div>
             <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-purple-500" /> 99.9% Uptime</div>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />
      </section>

      {/* Supported Platforms */}
      <section className="py-24 px-6 border-y border-fake-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Supported Platforms</h2>
            <p className="text-zinc-500 font-bold">Run your Discord bots on any major platform with our optimized hosting environment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, i) => (
              <div key={i} className="bg-fake-card border border-fake-border rounded-2xl p-8 hover:border-brand-purple/20 transition-all group flex flex-col items-center text-center">
                 <div className={`w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${platform.color}`}>
                   <platform.icon className="w-6 h-6" />
                 </div>
                 <h4 className="text-lg font-black mb-1">{platform.name}</h4>
                 <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-3">{platform.version}</span>
                 <p className="text-xs text-zinc-400 font-medium">{platform.libraries}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="plans" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">Choose Your <span className="text-brand-purple">Bot Plan</span></h2>
            <p className="text-zinc-500 font-bold max-w-2xl mx-auto">
              Scale your Discord bot from small communities to massive servers with our optimized hosting plans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-fake-card border ${plan.popular ? 'border-brand-purple/50' : 'border-fake-border'} rounded-[2.5rem] p-8 relative overflow-hidden flex flex-col h-full group transition-all`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-brand-purple text-white px-8 py-1.5 text-[8px] font-black uppercase tracking-widest shadow-lg rounded-bl-xl flex items-center gap-1">
                       <Plus className="w-2.5 h-2.5" /> {plan.popularTag}
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                   <div className={`w-12 h-12 mx-auto rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center mb-6 text-brand-purple group-hover:scale-110 transition-transform`}>
                      <plan.icon className="w-5 h-5" />
                   </div>
                   <h3 className="text-2xl font-black mb-2 tracking-tight">{plan.name}</h3>
                   <div className="flex items-center justify-center gap-1.5 text-brand-purple text-[10px] font-black uppercase tracking-widest">
                      <Zap className="w-3 h-3 fill-brand-purple" /> {plan.tag}
                   </div>
                </div>

                <div className="text-center mb-8">
                   <div className="flex items-center justify-center gap-1">
                      <span className="text-4xl font-black">₹{plan.price}</span>
                      <span className="text-zinc-500 font-bold text-sm">/month</span>
                   </div>
                </div>

                <div className="space-y-3.5 mb-10 flex-grow">
                   {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs font-bold text-zinc-400">
                         <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${plan.name === 'Coder Plan' ? 'text-emerald-500' : 'text-brand-purple'}`} /> {feature}
                      </div>
                   ))}
                </div>

                <button 
                  onClick={() => navigate('/order-guide')}
                  className={`w-full bg-gradient-to-r ${plan.color} text-white py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-2xl transition-all hover:scale-105 active:scale-95 text-xs`}
                >
                   <Rocket className="w-3.5 h-3.5" /> Get Started Now <ArrowRight className="w-3 h-3" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Control Panel */}
      <section className="py-24 px-6 bg-black/[0.01] dark:bg-white/[0.01]">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Advanced <span className="text-brand-purple">Control Panel</span></h2>
               <p className="text-zinc-500 font-bold max-w-2xl mx-auto">Manage your bot with our intuitive control panel featuring one-click installs, real-time monitoring, and full customization options</p>
            </div>

            <div className="max-w-4xl mx-auto relative group">
               <div className="absolute inset-0 bg-brand-purple/20 blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity" />
               <div className="relative bg-fake-card border border-fake-border rounded-2xl overflow-hidden shadow-2xl">
                  {/* Fake UI Header */}
                  <div className="bg-fake-bg border-b border-fake-border p-4 flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                     </div>
                     <div className="bg-brand-purple px-4 py-1.5 rounded-lg text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                        <Terminal className="w-3 h-3" /> LIVE DEMO
                     </div>
                  </div>
                  
                  {/* Fake UI Body */}
                  <div className="flex h-[400px]">
                     {/* Sidebar */}
                     <div className="w-48 border-r border-fake-border bg-black/5 dark:bg-white/[0.02] p-4 flex flex-col gap-2">
                        {[
                          { name: 'Home', icon: Globe },
                          { name: 'Terminal', icon: Terminal, active: true },
                          { name: 'Files', icon: HardDrive },
                          { name: 'Databases', icon: LayoutDashboard },
                          { name: 'Schedules', icon: Clock },
                          { name: 'Users', icon: Users },
                          { name: 'Backups', icon: ShieldCheck },
                          { name: 'Network', icon: Globe },
                          { name: 'Startup', icon: Rocket },
                          { name: 'Settings', icon: Settings },
                          { name: 'Activity', icon: Activity },
                        ].map((m, i) => (
                           <div key={i} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[10px] font-bold transition-all ${m.active ? 'bg-brand-purple/20 text-brand-purple shadow-[0_0_15px_rgba(168,85,247,0.3)]' : 'text-zinc-500 hover:text-fake-text dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'}`}>
                              <m.icon className="w-3.5 h-3.5" /> {m.name}
                           </div>
                        ))}
                     </div>
                     {/* Content */}
                     <div className="flex-1 p-6 relative font-mono text-[10px] space-y-1 text-zinc-400 overflow-y-auto">
                        <div className="text-amber-500 mb-4 flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" /> Starter Plan
                        </div>
                        <div className="flex items-center gap-2"><span className="text-emerald-500">✓</span> loaded command: inv (aliases: inventory) from commands/inv.js</div>
                        <div className="flex items-center gap-2"><span className="text-emerald-500">✓</span> loaded command: items from commands/items.js</div>
                        <div className="flex items-center gap-2"><span className="text-emerald-500">✓</span> loaded command: lb (aliases: lootbox) from commands/lb.js</div>
                        <div className="flex items-center gap-2"><span className="text-emerald-500">✓</span> loaded command: lottery (aliases: bet, lt) from commands/lottery.js</div>
                        <div className="flex items-center gap-2"><span className="text-emerald-500">✓</span> loaded command: open from commands/open.js</div>
                        <div className="flex items-center gap-2 font-black text-emerald-400 mb-2 mt-4">✓ Connected to MongoDB</div>
                        <div className="text-brand-purple/80 mt-4 tracking-tighter">» Type a command...</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 px-6 border-y border-fake-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Expert <span className="text-brand-purple">24/7</span> Support</h2>
            <p className="text-zinc-500 font-bold max-w-2xl mx-auto">Our dedicated support team is always available to help you with any questions or issues</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-fake-card border border-fake-border rounded-3xl p-10 hover:border-brand-purple/20 transition-all group">
               <div className="w-14 h-14 bg-brand-purple/10 rounded-2xl flex items-center justify-center text-brand-purple mb-8 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
               </div>
               <h4 className="text-2xl font-black mb-4 tracking-tight">24/7/365 SUPPORT</h4>
               <p className="text-zinc-500 font-medium leading-relaxed">Immediate assistance for emergencies. Average response time under 15 minutes.</p>
            </div>
            <div className="bg-fake-card border border-fake-border rounded-3xl p-10 hover:border-brand-purple/20 transition-all group">
               <div className="w-14 h-14 bg-brand-purple/10 rounded-2xl flex items-center justify-center text-brand-purple mb-8 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
               </div>
               <h4 className="text-2xl font-black mb-4 tracking-tight">EXPERT STAFF</h4>
               <p className="text-zinc-500 font-medium leading-relaxed">Years of experience with Discord bots and hosting infrastructure.</p>
            </div>
            <div className="bg-fake-card border border-fake-border rounded-3xl p-10 hover:border-brand-purple/20 transition-all group">
               <div className="w-14 h-14 bg-brand-purple/10 rounded-2xl flex items-center justify-center text-brand-purple mb-8 group-hover:scale-110 transition-transform">
                  <HeartHandshake className="w-6 h-6" />
               </div>
               <h4 className="text-2xl font-black mb-4 tracking-tight">PERSONALIZED HELP</h4>
               <p className="text-zinc-500 font-medium leading-relaxed">Human support tailored to your specific bot and community needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20 pb-0">
        <div className="max-w-6xl mx-auto">
          <div className="bg-fake-card border border-fake-border rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group shadow-2xl">
             <div className="absolute inset-0 bg-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="flex flex-col items-center">
                <Rocket className="w-16 h-16 text-brand-purple mx-auto mb-8 animate-pulse" />
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">Ready to Power Your Bot?</h2>
                <p className="text-zinc-500 font-bold mb-12 max-w-xl mx-auto">Join thousands of Discord communities hosting their bots with FakeCloud. Get started in minutes with our one-click setup.</p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 w-full max-w-2xl">
                   <button 
                     onClick={() => {
                       const el = document.getElementById('plans');
                       el?.scrollIntoView({ behavior: 'smooth' });
                     }}
                     className="bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-xl w-full"
                   >
                      <LayoutDashboard className="w-4 h-4" /> View All Plans <ArrowRight className="w-4 h-4" />
                   </button>
                   <button 
                     onClick={() => navigate('/order-guide')}
                     className="bg-black/10 dark:bg-white/10 text-fake-text dark:text-white border border-black/10 dark:border-white/10 px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:bg-black/20 dark:hover:bg-white/20 w-full"
                   >
                      <Rocket className="w-4 h-4" /> Order Now
                   </button>
                </div>
                
                <p className="mt-8 text-[10px] font-black uppercase tracking-widest text-zinc-600">
                   No credit card required for demo - Free migration - 30-day money-back guarantee
                </p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Simple icon for Java if not available in lucide
const CupSoda = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 8h12" />
    <path d="M5 10a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9Z" />
    <path d="M9 13v3" />
    <path d="M12 13v3" />
    <path d="M15 13v3" />
  </svg>
);

const Activity = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

export default DiscordBotHosting;
