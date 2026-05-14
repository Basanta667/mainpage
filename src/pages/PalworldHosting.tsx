import React from 'react';
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
  Rocket,
  Gamepad2,
  Settings,
  Download,
  Upload,
  MousePointer2,
  Monitor
} from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const PalworldHosting = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Lamball',
      price: '289',
      ram: '8GB',
      cpu: '2 cores',
      storage: '30GB',
      cpuModel: 'Epyc 7c13',
      icon: <div className="w-20 h-20 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/30 group-hover:scale-110 transition-transform"><div className="w-12 h-12 bg-emerald-500 rounded-lg shadow-lg shadow-emerald-500/50" /></div>
    },
    {
      name: 'Direhowl',
      price: '539',
      ram: '16GB',
      cpu: '4 cores',
      storage: '60GB',
      popular: true,
      cpuModel: 'Epyc 7c13',
      icon: <div className="w-20 h-20 bg-brand-purple/20 rounded-2xl flex items-center justify-center mb-6 border border-brand-purple/30 group-hover:scale-110 transition-transform"><div className="w-12 h-12 bg-brand-purple rounded-lg shadow-lg shadow-brand-purple/50" /></div>
    },
    {
      name: 'Anubis',
      price: '1,049',
      ram: '24GB',
      cpu: '8 cores',
      storage: '90GB',
      cpuModel: 'Epyc 7c13',
      icon: <div className="w-20 h-20 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 border border-orange-500/30 group-hover:scale-110 transition-transform"><div className="w-12 h-12 bg-orange-500 rounded-lg shadow-lg shadow-orange-500/50" /></div>
    }
  ];

  const features = [
    'Instant Setup',
    'All Game Versions',
    '24/7 Support',
    'Automatic Backups',
    'One-Click Mods',
    'Custom Domain',
    '99.9% Uptime',
    'SFTP Access',
    'Free Subdomain',
    'Cross-Play Support'
  ];

  const scrollToPlans = () => {
    const el = document.getElementById('plans');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-24 pb-20 bg-fake-bg min-h-screen">
      {/* Hero Section */}
      <section className="px-6 pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 text-center">
           <img 
             src="https://raw.githubusercontent.com/Basanta667/HowtosetuppterodactylwingsForFree/refs/heads/main/5a52ade92affafa4c4353c97110026811a365b65d6bad64e.avif" 
             className="w-full h-full object-cover opacity-20"
             referrerPolicy="no-referrer"
             alt="Palworld background"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-fake-bg via-fake-bg/80 to-fake-bg" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-3 mb-10">
             <span className="bg-brand-purple/20 text-brand-purple border border-brand-purple/30 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Cross-Play</span>
             <span className="bg-black/10 dark:bg-white/10 text-fake-text dark:text-white border border-black/10 dark:border-white/10 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">PC</span>
             <span className="bg-black/10 dark:bg-white/10 text-fake-text dark:text-white border border-black/10 dark:border-white/10 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">XBOX</span>
             <span className="bg-black/10 dark:bg-white/10 text-fake-text dark:text-white border border-black/10 dark:border-white/10 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Playstation</span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-7xl md:text-9xl font-black tracking-tighter mb-4 leading-[0.9] uppercase"
          >
            PALWORLD<br />
            <span className="text-brand-purple">SERVER</span><br />
            HOSTING
          </motion.h1>

          <div className="space-y-4 mb-12">
             {[
               { icon: Gamepad2, text: 'Instant Setup & Easy Configuration' },
               { icon: Globe, text: '20 Worldwide Locations' },
               { icon: Settings, text: 'Full Mod Support' },
               { icon: ShieldCheck, text: '24/7 DDoS Protection' }
             ].map((item, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.1 * i }}
                 className="flex items-center gap-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-4 rounded-xl max-w-md"
               >
                 <item.icon className="w-5 h-5 text-brand-purple" />
                 <span className="text-fake-text dark:text-white font-bold tracking-tight uppercase text-sm">{item.text}</span>
               </motion.div>
             ))}
          </div>

          <button 
            onClick={scrollToPlans}
            className="bg-brand-purple text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 transition-all hover:scale-105 shadow-xl shadow-brand-purple/20"
          >
            <LayoutDashboard className="w-4 h-4" /> CHOOSE YOUR PAL PLAN <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Real-time Performance Section */}
      <section className="py-24 px-6 border-t border-fake-border bg-black/20">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16 underline-offset-8">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 uppercase">
                 REAL-TIME <span className="text-brand-purple">PERFORMANCE</span>
              </h2>
              <p className="text-zinc-500 font-bold">Monitor our network performance in real-time. We guarantee the best gaming experience for PALWORLD.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: Clock, label: 'Uptime', value: '99.9%', color: 'text-emerald-500' },
                { icon: Activity, label: 'Average Ping', value: '<9ms', color: 'text-emerald-500' },
                { icon: Download, label: 'Download Speed', value: '1Gbps', color: 'text-brand-purple' },
                { icon: Upload, label: 'Upload Speed', value: '1Gbps', color: 'text-brand-purple' }
              ].map((stat, i) => (
                <div key={i} className="bg-fake-card border border-fake-border p-8 rounded-3xl text-center flex flex-col items-center">
                   <stat.icon className={`w-8 h-8 ${stat.color} mb-4`} />
                   <p className={`${stat.color} text-4xl font-black tracking-tighter mb-1`}>{stat.value}</p>
                   <p className="text-zinc-500 text-xs font-black uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Choose Your Plan Section */}
      <section id="plans" className="py-24 px-6 bg-fake-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-black tracking-tight mb-4 uppercase">
               CHOOSE YOUR <span className="text-brand-purple">PAL PLAN</span>
            </h2>
            <p className="text-zinc-500 font-bold max-w-2xl mx-auto">
               Scale your PALWORLD adventure with our optimized server plans. From casual bases to massive empires.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-fake-card border ${plan.popular ? 'border-brand-purple/50' : 'border-fake-border'} rounded-[3rem] p-10 flex flex-col relative group transition-all hover:border-brand-purple/20`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-brand-purple text-white px-6 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl z-20">
                    Popular
                  </div>
                )}
                
                <div className="mb-10 text-center flex flex-col items-center">
                  {plan.icon}
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
                        <p className="text-emerald-500 font-black text-xl leading-none">{plan.cpu}</p>
                        <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mt-1">CPU</p>
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
                      <span className="text-fake-text dark:text-zinc-100 text-[11px] font-black tracking-tight">{plan.cpuModel}</span>
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
                    {features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2 text-[11px] font-bold text-zinc-400">
                        <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" /> {f}
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => navigate('/order-guide')}
                  className="w-full py-5 rounded-2xl bg-brand-purple text-white font-black uppercase tracking-widest text-xs transition-all hover:scale-105 active:scale-95 shadow-xl relative overflow-hidden"
                >
                  Order Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 px-6 border-t border-fake-border">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 underline-offset-8">
               <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 uppercase">
                  WHY CHOOSE <span className="text-brand-purple">FakeCloud?</span>
               </h2>
               <p className="text-zinc-500 font-bold max-w-3xl mx-auto">Experience enterprise-grade hosting with gaming-optimized performance. Our platform is built specifically for PALWORLD's demanding requirements.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
               {[
                 { icon: Settings, text: 'Easy to Use' },
                 { icon: LayoutDashboard, text: 'Instance Manager' },
                 { icon: Gamepad2, text: 'Game Swapping' },
                 { icon: Rocket, text: 'Modding Support' },
                 { icon: Database, text: 'Backups Manager' },
                 { icon: Zap, text: 'Instant Setup' }
               ].map((item, i) => (
                 <div key={i} className="bg-fake-card border border-fake-border p-6 rounded-2xl text-center group hover:border-brand-purple/30 transition-all">
                    <div className="w-12 h-12 bg-brand-purple/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                       <item.icon className="w-6 h-6 text-brand-purple" />
                    </div>
                    <p className="text-fake-text dark:text-white font-black text-[10px] uppercase tracking-widest">{item.text}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-24">
         <div className="max-w-5xl mx-auto">
            <div className="bg-fake-card border border-fake-border rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden group shadow-2xl">
               <div className="absolute inset-0 bg-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="relative">
                  <div className="w-16 h-16 bg-brand-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-brand-purple/30">
                     <Rocket className="w-8 h-8 text-brand-purple" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">Ready to Start Your PALWORLD Journey?</h2>
                  <p className="text-zinc-500 font-bold mb-10 max-w-xl mx-auto">Join thousands of players hosting their PALWORLD servers with FakeCloud. Instant setup, 24/7 support.</p>
                  <button 
                    onClick={() => navigate('/order-guide')}
                    className="bg-brand-purple text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-xl shadow-brand-purple/20 mx-auto"
                  >
                     GET STARTED NOW <ArrowRight className="w-4 h-4" />
                  </button>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default PalworldHosting;
