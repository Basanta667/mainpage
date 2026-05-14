import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  Cpu,
  LayoutDashboard,
  CheckCircle2,
  HardDrive,
  Globe,
  Database,
  Terminal,
  Activity,
  Layers,
  Rocket
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const MinecraftHosting = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedType, setSelectedType] = useState<'intel' | 'epyc' | 'ryzen' | null>(null);

  useEffect(() => {
    const type = searchParams.get('type') as 'intel' | 'epyc' | 'ryzen' | null;
    if (type && ['intel', 'epyc', 'ryzen'].includes(type)) {
      setSelectedType(type);
      // Wait for the AnimatePresence or initial render to finish
      setTimeout(() => {
        const el = document.getElementById('plans');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, [searchParams]);

  const intelPlans = [
    { name: 'Oak', price: '159', ram: '2GB', cpu: '200%', storage: '10GB' },
    { name: 'Birch', price: '189', ram: '4GB', cpu: '200%', storage: '20GB' },
    { name: 'Jungle', price: '239', ram: '6GB', cpu: '300%', storage: '20GB', popular: true },
    { name: 'Acacia', price: '349', ram: '8GB', cpu: '350%', storage: '30GB' },
    { name: 'Pale', price: '459', ram: '10GB', cpu: '400%', storage: '40GB', popular: true },
    { name: 'Mangrove', price: '569', ram: '12GB', cpu: '500%', storage: '50GB' },
    { name: 'Cherry', price: '729', ram: '16GB', cpu: '600%', storage: '60GB', popular: true },
    { name: 'Crimson', price: '919', ram: '24GB', cpu: '700%', storage: '70GB', popular: true },
    { name: 'Warped', price: '1279', ram: '32GB', cpu: '800%', storage: '80GB' },
  ];

  const epycPlans = [
    { name: 'Copper', price: '179', ram: '2GB', cpu: '200%', storage: '4GB' },
    { name: 'Iron', price: '219', ram: '4GB', cpu: '200%', storage: '8GB', popular: true },
    { name: 'Gold', price: '329', ram: '6GB', cpu: '300%', storage: '20GB' },
    { name: 'Redstone', price: '439', ram: '8GB', cpu: '350%', storage: '30GB', popular: true },
    { name: 'Diamond', price: '549', ram: '10GB', cpu: '400%', storage: '40GB' },
    { name: 'Emerald', price: '719', ram: '12GB', cpu: '500%', storage: '50GB', popular: true },
    { name: 'Lapis', price: '909', ram: '16GB', cpu: '600%', storage: '60GB', popular: true },
    { name: 'Quartz', price: '1139', ram: '24GB', cpu: '700%', storage: '70GB', popular: true },
    { name: 'Netherite', price: '1459', ram: '32GB', cpu: '800%', storage: '80GB' },
  ];

  const ryzenPlans = [
    { name: 'Coal', price: '199', ram: '2GB', cpu: '200%', storage: '4GB', popular: true },
    { name: 'Obsidian', price: '289', ram: '4GB', cpu: '200%', storage: '10GB', popular: true },
    { name: 'Prismarine', price: '419', ram: '6GB', cpu: '300%', storage: '20GB' },
    { name: 'Amethyst', price: '559', ram: '8GB', cpu: '350%', storage: '25GB' },
    { name: 'Blaze', price: '749', ram: '10GB', cpu: '400%', storage: '30GB', popular: true },
    { name: 'Ender', price: '999', ram: '12GB', cpu: '500%', storage: '40GB' },
    { name: 'Shulker', price: '1329', ram: '16GB', cpu: '600%', storage: '50GB', popular: true },
    { name: 'Beacon', price: '1709', ram: '24GB', cpu: '700%', storage: '60GB', popular: true },
    { name: 'Dragon Egg', price: '2199', ram: '32GB', cpu: '800%', storage: '80GB' },
  ];

  const commonFeatures = [
    'Instant Setup',
    'All Minecraft Versions',
    '24/7 Support',
    'One-Click Datapack',
    'One-Click Plugin',
    'One-Click Mods',
    '99.9% Uptime',
    'SFTP Access',
    'Free Subdomain'
  ];

  const getActivePlans = () => {
    if (selectedType === 'intel') return intelPlans;
    if (selectedType === 'epyc') return epycPlans;
    if (selectedType === 'ryzen') return ryzenPlans;
    return [];
  };

  const getCPUModel = () => {
    if (selectedType === 'intel') return 'Intel Platinum 8269CY';
    if (selectedType === 'epyc') return 'Epyc 7c13';
    if (selectedType === 'ryzen') return 'AMD Ryzen 9 9950X';
    return '';
  };

  const scrollToPlans = () => {
    const el = document.getElementById('plans');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-24 pb-20 bg-fake-bg min-h-screen">
      {/* Hero Section */}
      <section className="px-6 pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-purple/10 rounded-full blur-[120px] opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black tracking-tight mb-6 uppercase"
          >
            Professional <span className="text-brand-purple">Minecraft Hosting</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 font-bold text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            Choose AMD EPYC for stable value hosting or Ryzen for premium performance. Built for survival, SMP, modpacks, and plugin-heavy networks.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            <button 
              onClick={() => {
                if (!selectedType) setSelectedType('intel');
                setTimeout(scrollToPlans, 100);
              }}
              className="bg-brand-purple text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 transition-all hover:scale-105 shadow-xl shadow-brand-purple/20"
            >
              <LayoutDashboard className="w-4 h-4" /> View Plans <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => navigate('/order-guide')}
              className="bg-white/5 border border-white/10 px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 transition-all hover:bg-white/10"
            >
              Order Now
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Intel Platinum Card */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() => {
                setSelectedType('intel');
                setTimeout(scrollToPlans, 100);
              }}
              className={`text-left p-8 rounded-[2rem] border transition-all relative overflow-hidden group ${selectedType === 'intel' ? 'bg-brand-purple/10 border-brand-purple shadow-2xl shadow-brand-purple/10' : 'bg-fake-card border-fake-border hover:border-brand-purple/30'}`}
            >
              <div className="flex justify-between items-start mb-6">
                <span className="bg-brand-purple/20 text-brand-purple px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest">Balanced</span>
                <div className={`p-2 rounded-lg border transition-all ${selectedType === 'intel' ? 'bg-emerald-500 border-emerald-400 text-white' : 'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-zinc-500 group-hover:text-fake-text dark:group-hover:text-white'}`}>
                  {selectedType === 'intel' ? <CheckCircle2 className="w-5 h-5" /> : <span className="text-[10px] font-black uppercase">Click to select</span>}
                </div>
              </div>
              <h3 className="text-3xl font-black mb-3 uppercase tracking-tight">Intel Platinum</h3>
              <p className="text-zinc-500 font-medium text-sm leading-relaxed mb-8">Stable Intel Platinum hosting for smooth Minecraft survival, SMP, and plugin servers.</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Reliable performance for survival, SMP, and plugin-heavy communities.</p>
            </motion.button>

            {/* AMD EPYC Card */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() => {
                setSelectedType('epyc');
                setTimeout(scrollToPlans, 100);
              }}
              className={`text-left p-8 rounded-[2rem] border transition-all relative overflow-hidden group ${selectedType === 'epyc' ? 'bg-emerald-500/10 border-emerald-500 shadow-2xl shadow-emerald-500/10' : 'bg-fake-card border-fake-border hover:border-emerald-500/30'}`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none -mr-8 -mt-8 rotate-12 group-hover:rotate-0 transition-transform">
                <img src="https://raw.githubusercontent.com/Basanta667/HowtosetuppterodactylwingsForFree/refs/heads/main/Epyc-AMD-Color-Logo.wine.png" alt="EPYC Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex justify-between items-start mb-6">
                <span className="bg-emerald-500/20 text-emerald-500 px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest">Budget-Friendly</span>
                <div className={`p-2 rounded-lg border transition-all ${selectedType === 'epyc' ? 'bg-emerald-500 border-emerald-400 text-white' : 'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-zinc-500 group-hover:text-fake-text dark:group-hover:text-white'}`}>
                  {selectedType === 'epyc' ? <CheckCircle2 className="w-5 h-5" /> : <span className="text-[10px] font-black uppercase">Click to select</span>}
                </div>
              </div>
              <h3 className="text-3xl font-black mb-3 uppercase tracking-tight">AMD EPYC</h3>
              <p className="text-zinc-500 font-medium text-sm leading-relaxed mb-8">Balanced performance hosting powered by AMD EPYC for stable Minecraft servers.</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Great value for survival, SMP, and community servers with EPYC efficiency.</p>
            </motion.button>

            {/* AMD Ryzen 9 Card */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() => {
                setSelectedType('ryzen');
                setTimeout(scrollToPlans, 100);
              }}
              className={`text-left p-8 rounded-[2rem] border transition-all relative overflow-hidden group ${selectedType === 'ryzen' ? 'bg-orange-500/10 border-orange-500 shadow-2xl shadow-orange-500/10' : 'bg-fake-card border-fake-border hover:border-orange-500/30'}`}
            >
              <div className="flex justify-between items-start mb-6">
                <span className="bg-orange-500/20 text-orange-500 px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest">Performance-Focused</span>
                <div className={`p-2 rounded-lg border transition-all ${selectedType === 'ryzen' ? 'bg-emerald-500 border-emerald-400 text-white' : 'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-zinc-500 group-hover:text-fake-text dark:group-hover:text-white'}`}>
                  {selectedType === 'ryzen' ? <CheckCircle2 className="w-5 h-5" /> : <span className="text-[10px] font-black uppercase">Click to select</span>}
                </div>
              </div>
              <h3 className="text-3xl font-black mb-3 uppercase tracking-tight">AMD Ryzen 9</h3>
              <p className="text-zinc-500 font-medium text-sm leading-relaxed mb-8">Ultra-fast single-core performance, ideal for lag-free Minecraft hosting.</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Best for modpacks, larger player counts, and demanding plugins.</p>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <AnimatePresence mode="wait">
        {selectedType && (
          <motion.section 
            id="plans"
            key={selectedType}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="py-24 px-6 border-t border-white/5"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest text-brand-purple mb-6">
                   <div className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />
                   {selectedType === 'intel' ? 'Intel Platinum' : selectedType === 'epyc' ? 'AMD EPYC' : 'AMD Ryzen 9'} Plans
                </div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 uppercase">
                   {selectedType === 'intel' ? 'Stable Performance' : selectedType === 'epyc' ? 'Balanced Value' : 'Ultimate Power'}
                </h2>
                <p className="text-zinc-500 font-bold max-w-2xl mx-auto">
                   {selectedType === 'intel' && 'Stable Intel Platinum hosting for smooth Minecraft survival, SMP, and plugin servers.'}
                   {selectedType === 'epyc' && 'Balanced performance hosting powered by AMD EPYC for stable Minecraft servers.'}
                   {selectedType === 'ryzen' && 'Ultra-fast single-core performance, ideal for lag-free Minecraft hosting.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getActivePlans().map((plan, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`bg-fake-card border ${plan.popular ? 'border-brand-purple/50' : 'border-fake-border'} rounded-[3rem] p-10 flex flex-col relative group transition-all hover:border-brand-purple/20`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-brand-purple text-white px-6 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-bl-xl shadow-xl">
                        Popular
                      </div>
                    )}
                    
                    <div className="mb-10 text-center">
                      <h3 className="text-4xl font-black mb-4 uppercase tracking-tighter">{plan.name}</h3>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-5xl font-black">₹{plan.price}</span>
                        <span className="text-zinc-500 font-bold text-sm">/month</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                       <div className="bg-[#1a1233]/40 border border-[#8b5cf6]/30 rounded-lg p-4 flex items-center gap-4">
                          <div className="text-[#8b5cf6]"><Cpu className="w-6 h-6" /></div>
                          <div>
                            <p className="text-fake-text dark:text-white font-black text-xl leading-none">{plan.ram}</p>
                            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">RAM</p>
                          </div>
                       </div>
                       <div className="bg-[#0f241a]/40 border border-emerald-500/30 rounded-lg p-4 flex items-center gap-4">
                          <div className="text-emerald-500"><Activity className="w-6 h-6" /></div>
                          <div>
                            <p className="text-emerald-500 font-black text-xl leading-none">{plan.cpu} CPU</p>
                            <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mt-1">{getCPUModel()}</p>
                          </div>
                       </div>
                       <div className="bg-[#1a1233]/40 border border-[#8b5cf6]/30 rounded-lg p-4 flex items-center gap-4">
                          <div className="text-[#8b5cf6]"><HardDrive className="w-6 h-6" /></div>
                          <div>
                            <p className="text-fake-text dark:text-white font-black text-xl leading-none">{plan.storage}</p>
                            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">NVMe SSD</p>
                          </div>
                       </div>
                       <div className="bg-[#241a0f]/40 border border-orange-500/30 rounded-lg p-4 flex items-center gap-4">
                          <div className="text-orange-500"><Database className="w-6 h-6" /></div>
                          <div>
                            <p className="text-orange-500 font-black text-xl leading-none">2 Ports</p>
                            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">Additional</p>
                          </div>
                       </div>
                    </div>

                    {/* Technical Specs List */}
                    <div className="space-y-1.5 mb-8">
                       <div className="bg-fake-bg rounded-md p-4 py-3 flex items-center justify-between border border-fake-border shadow-sm">
                          <div className="flex items-center gap-3">
                             <Cpu className="w-4 h-4 text-[#8b5cf6]" />
                             <span className="text-zinc-500 text-[11px] font-black uppercase tracking-widest">CPU Model</span>
                          </div>
                          <span className="text-fake-text dark:text-zinc-100 text-[11px] font-black tracking-tight">{getCPUModel()}</span>
                       </div>
                       <div className="bg-fake-bg rounded-md p-4 py-3 flex items-center justify-between border border-fake-border shadow-sm">
                          <div className="flex items-center gap-3">
                             <Clock className="w-4 h-4 text-rose-500" />
                             <span className="text-zinc-500 text-[11px] font-black uppercase tracking-widest">Backups</span>
                          </div>
                          <span className="text-fake-text dark:text-zinc-100 text-[11px] font-black tracking-tight">1</span>
                       </div>
                       <div className="bg-fake-bg rounded-md p-4 py-3 flex items-center justify-between border border-fake-border shadow-sm">
                          <div className="flex items-center gap-3">
                             <Database className="w-4 h-4 text-orange-500" />
                             <span className="text-zinc-500 text-[11px] font-black uppercase tracking-widest">Additional Ports</span>
                          </div>
                          <span className="text-fake-text dark:text-zinc-100 text-[11px] font-black tracking-tight">2</span>
                       </div>
                       <div className="bg-fake-bg rounded-md p-4 py-3 flex items-center justify-between border border-fake-border shadow-sm">
                          <div className="flex items-center gap-3">
                             <Globe className="w-4 h-4 text-blue-500" />
                             <span className="text-zinc-500 text-[11px] font-black uppercase tracking-widest">Locations</span>
                          </div>
                          <span className="text-fake-text dark:text-zinc-100 text-[11px] font-black tracking-tight">India, Mumbai/Delhi</span>
                       </div>
                       <div className="bg-fake-bg rounded-md p-4 py-3 flex items-center justify-between border border-fake-border shadow-sm">
                          <div className="flex items-center gap-3">
                             <ShieldCheck className="w-4 h-4 text-emerald-500" />
                             <span className="text-zinc-500 text-[11px] font-black uppercase tracking-widest">DDoS Protection</span>
                          </div>
                          <span className="text-fake-text dark:text-zinc-100 text-[11px] font-black tracking-tight uppercase">Yes</span>
                       </div>
                    </div>

                    <div className="mb-10">
                      <p className="text-fake-text dark:text-white text-xl font-black uppercase tracking-tighter mb-4">Features:</p>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        {commonFeatures.map((f, j) => (
                          <div key={j} className="flex items-center gap-2 text-[11px] font-bold text-zinc-400">
                            <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" /> {f}
                          </div>
                        ))}
                      </div>
                    </div>

                    <button 
                      onClick={() => navigate('/order-guide')}
                      className={`w-full py-5 rounded-2xl bg-gradient-to-r ${selectedType === 'intel' ? 'from-brand-purple to-brand-pink' : selectedType === 'epyc' ? 'from-emerald-500 to-teal-700' : 'from-orange-500 to-red-700'} text-white font-black uppercase tracking-widest text-xs transition-all hover:scale-105 active:scale-95 shadow-xl relative overflow-hidden`}
                    >
                      <span className="relative z-10">Order Now</span>
                      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Ready to host Section */}
      <section className="px-6 py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="bg-fake-card border border-fake-border rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden group shadow-2xl">
             <div className="absolute inset-0 bg-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="relative">
                <Rocket className="w-16 h-16 text-brand-purple mx-auto mb-8" />
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">Ready to host Your World?</h2>
                <p className="text-zinc-500 font-bold mb-10 max-w-xl mx-auto uppercase tracking-widest text-xs leading-relaxed">Deploy your Server in under 60 seconds. No long-term contracts required.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 w-full max-w-2xl mx-auto">
                   <button 
                     onClick={() => {
                       if (!selectedType) setSelectedType('intel');
                       setTimeout(scrollToPlans, 100);
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
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MinecraftHosting;
