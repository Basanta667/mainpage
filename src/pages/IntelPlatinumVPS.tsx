import React from 'react';
import { 
  Cpu, 
  HardDrive, 
  Zap, 
  ShieldCheck, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  Server,
  Network,
  Clock,
  Activity,
  MousePointer2,
  LayoutDashboard
} from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const IntelPlatinumVPS = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Intel Micro VPS',
      price: '359',
      ram: '2 GB DDR4',
      cpu: '1 vCPU Cores',
      ssd: '30 GB NVMe',
      bw: '2 TB 1Gbps Network',
      color: 'border-blue-500/30',
      btnColor: 'bg-blue-500'
    },
    {
      name: 'Intel Nano VPS',
      price: '419',
      ram: '4 GB DDR4',
      cpu: '2 vCPU Cores',
      ssd: '80 GB NVMe',
      bw: '2 TB 1Gbps Network',
      popular: true,
      color: 'border-brand-purple/50',
      btnColor: 'bg-brand-purple'
    },
    {
      name: 'Intel Starter VPS',
      price: '539',
      ram: '6 GB DDR4',
      cpu: '3 vCPU Cores',
      ssd: '120 GB NVMe',
      bw: '3 TB 1Gbps Network',
      color: 'border-emerald-500/30',
      btnColor: 'bg-emerald-500'
    },
    {
      name: 'Intel Gamer VPS',
      price: '689',
      ram: '8 GB DDR4',
      cpu: '4 vCPU Cores',
      ssd: '160 GB NVMe',
      bw: '3 TB 1Gbps Network',
      color: 'border-blue-400/30',
      btnColor: 'bg-blue-400'
    },
    {
      name: 'Intel Extreme VPS',
      price: '1699',
      ram: '48 GB DDR4',
      cpu: '14 vCPU Cores',
      ssd: '340 GB NVMe',
      bw: '6 TB 1Gbps Network',
      color: 'border-orange-500/30',
      btnColor: 'bg-orange-500'
    },
    {
      name: 'Intel Ultra VPS',
      price: '3099',
      ram: '64 GB DDR4',
      cpu: '18 vCPU Cores',
      ssd: '400 GB NVMe',
      bw: '8 TB 1Gbps Network',
      color: 'border-sky-500/30',
      btnColor: 'bg-sky-500'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-fake-bg">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8"
          >
            <Cpu className="w-3.5 h-3.5" /> Intel Platinum Series
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-6"
          >
            Intel Platinum <br /> <span className="text-gradient">VPS Hosting</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl mb-12"
          >
            Enterprise-grade performance with Intel Platinum processors. DDR4 ECC memory, NVMe storage, and premium network infrastructure for demanding workloads.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4">
             <button 
               onClick={() => {
                 const el = document.getElementById('plans');
                 el?.scrollIntoView({ behavior: 'smooth' });
               }}
               className="bg-brand-gradient text-white px-8 py-4 rounded-xl font-black tracking-tight flex items-center gap-3 transition-all hover:scale-105 shadow-xl shadow-brand-purple/20"
             >
               View Plans
             </button>
             <button className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-bold tracking-tight hover:bg-white/10 transition-all flex items-center gap-2">
               Learn More
             </button>
          </div>
        </div>
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      </section>

      {/* Hardware Specs Card */}
      <section className="px-6 mb-32">
        <div className="max-w-5xl mx-auto">
          <div className="bg-fake-card border border-fake-border rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full" />
            
            <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
              <div className="w-20 h-20 rounded-3xl bg-blue-500/10 flex items-center justify-center p-5 text-blue-500 border border-blue-500/20">
                <Cpu className="w-full h-full" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase tracking-tight">Intel Xeon Platinum 8269CY @ 3.092GHz</h3>
                <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">High Performance - @ 3.092 GHz</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl p-6 flex items-start gap-4">
                <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg"><Cpu className="w-5 h-5" /></div>
                <div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mb-1">DDR4 RAM</div>
                  <div className="font-black text-fake-text">High Speed</div>
                </div>
              </div>
              <div className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl p-6 flex items-start gap-4">
                <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg"><HardDrive className="w-5 h-5" /></div>
                <div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mb-1">STORAGE</div>
                  <div className="font-black text-fake-text">NVMe SSD</div>
                </div>
              </div>
              <div className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl p-6 flex items-start gap-4">
                <div className="p-2 bg-indigo-500/10 text-indigo-500 rounded-lg"><Network className="w-5 h-5" /></div>
                <div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mb-1">NETWORK</div>
                  <div className="font-black text-fake-text">1Gbps Uplink</div>
                </div>
              </div>
              <div className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl p-6 flex items-start gap-4">
                <div className="p-2 bg-red-500/10 text-red-500 rounded-lg"><ShieldCheck className="w-5 h-5" /></div>
                <div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mb-1">PROTECTION</div>
                  <div className="font-black text-fake-text">DDoS Protected</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-fake-border text-center">
              <div>
                <div className="text-2xl font-black mb-1 flex items-center justify-center gap-1"><Clock className="w-4 h-4 text-emerald-500" /> 100.0%</div>
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-black mb-1 flex items-center justify-center gap-1"><Activity className="w-4 h-4 text-blue-500" /> &lt;10ms</div>
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Average Ping</div>
              </div>
              <div>
                <div className="text-2xl font-black mb-1 flex items-center justify-center gap-1"><Zap className="w-4 h-4 text-indigo-500" /> 1.0Gbps</div>
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Speed</div>
              </div>
              <div>
                <div className="text-2xl font-black mb-1 flex items-center justify-center gap-1"><ShieldCheck className="w-4 h-4 text-red-500" /> Layer 7+</div>
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">DDoS Protection</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section id="plans" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-black tracking-tight mb-4 uppercase">Choose Your Intel Platinum Plan</h2>
            <p className="text-zinc-500 font-bold max-w-2xl mx-auto">Select the perfect Intel Platinum VPS for your needs. All plans include premium hardware and 24/7 support.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className={`bg-fake-card border ${plan.color} rounded-[2.5rem] p-10 relative overflow-hidden flex flex-col h-full`}
              >
                {plan.popular && (
                  <div className="absolute top-8 right-[-35px] bg-brand-purple text-white px-12 py-1 rotate-45 text-[10px] font-black uppercase tracking-widest shadow-lg">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="mb-10">
                  <h3 className="text-2xl font-black mb-1 group-hover:text-brand-purple transition-all">{plan.name}</h3>
                  <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Intel Platinum VPS</p>
                </div>

                <div className="flex items-baseline gap-1 mb-10">
                  <span className="text-5xl font-black">₹{plan.price}</span>
                  <span className="text-zinc-500 font-bold">/month</span>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  <div className="flex items-center gap-4 p-4 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5">
                     <Cpu className="w-5 h-5 text-blue-500" />
                     <div className="flex flex-col">
                        <span className="text-fake-text font-black">{plan.cpu}</span>
                        <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Cores</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5">
                     <Activity className="w-5 h-5 text-purple-500" />
                     <div className="flex flex-col">
                        <span className="text-fake-text font-black">{plan.ram}</span>
                        <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">DDR4</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5">
                     <HardDrive className="w-5 h-5 text-emerald-500" />
                     <div className="flex flex-col">
                        <span className="text-fake-text font-black">{plan.ssd}</span>
                        <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">NVMe</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5">
                     <Zap className="w-5 h-5 text-amber-500" />
                     <div className="flex flex-col">
                        <span className="text-fake-text font-black">{plan.bw}</span>
                        <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Network</span>
                     </div>
                  </div>
                </div>

                <div className="space-y-4 pt-10 border-t border-fake-border">
                  <div className="grid grid-cols-2 gap-4 text-xs font-bold text-zinc-400">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Root Access</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> 24/7 Support</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Instant Setup</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Control Panel</div>
                  </div>
                  
                  <button onClick={() => navigate('/order-guide')} className={`w-full ${plan.btnColor} text-white py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-2 group/btn`}>
                    <MousePointer2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform" /> Order Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <p className="text-center mt-12 text-zinc-600 text-sm font-medium">
             All prices exclude taxes. No setup fee. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Why Intel Page */}
      <section className="py-32 relative overflow-hidden bg-fake-bg border-y border-fake-border">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">Why Choose Intel Platinum VPS?</h2>
               <p className="text-zinc-500 font-bold">Unmatched performance for business applications, development, and production workloads.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { icon: Cpu, title: 'Intel Xeon Platinum 8269CY @ 3.092GHz', desc: 'High performance @ 3.092 GHz' },
                 { icon: LayoutDashboard, title: 'DDR4 ECC Memory', desc: 'Error-correcting code RAM for extreme stability.' },
                 { icon: HardDrive, title: 'NVMe SSD Storage', desc: 'Blazing fast NVM Express storage for high intensive apps.' },
                 { icon: ShieldCheck, title: 'Path.net DDoS Protection', desc: 'Enterprise 1.5Tbps protection on all nodes.' },
                 { icon: Zap, title: '1Gbps Uplink', desc: 'High bandwidth nodes with low latency routing.' },
                 { icon: Globe, title: 'Global Infrastructure', desc: 'Multiple locations for global reach and redundancy.' }
               ].map((item, i) => (
                 <div key={i} className="bg-fake-card border border-fake-border rounded-3xl p-8 hover:border-brand-purple/20 transition-all group">
                    <div className="w-14 h-14 bg-brand-purple/10 rounded-2xl flex items-center justify-center p-3 text-brand-purple mb-8 group-hover:scale-110 transition-transform">
                       <item.icon className="w-full h-full" />
                    </div>
                    <h4 className="text-xl font-black mb-3 tracking-tight">{item.title}</h4>
                    <p className="text-zinc-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Call to action card */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-brand-gradient p-[1px] rounded-[3rem] overflow-hidden">
             <div className="bg-fake-card py-20 px-8 rounded-[3rem] text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-gradient opacity-10" />
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 relative z-10 uppercase">Ready to Experience Intel Performance?</h2>
                <p className="text-zinc-500 font-bold mb-10 relative z-10 max-w-xl mx-auto uppercase tracking-widest text-xs">Deploy your Intel Platinum VPS in under 60 seconds. No long-term contracts required.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                   <button 
                     onClick={() => {
                       const el = document.getElementById('plans');
                       el?.scrollIntoView({ behavior: 'smooth' });
                     }}
                     className="bg-white text-black px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl uppercase"
                   >
                      View All Plans
                   </button>
                   <button onClick={() => navigate('/order-guide')} className="bg-black/10 dark:bg-white/10 text-fake-text border border-black/10 dark:border-white/10 px-12 py-5 rounded-2xl font-black text-lg hover:bg-black/20 dark:hover:bg-white/20 active:scale-95 transition-all shadow-2xl uppercase">
                      Order Now
                   </button>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntelPlatinumVPS;
