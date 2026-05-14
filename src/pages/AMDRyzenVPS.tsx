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

const AMDRyzenVPS = () => {
  const navigate = useNavigate();

  const plans = [
    { name: 'Ryzen 2GB', price: '789', ram: '2 GB DDR5', cpu: '1 vCPU Cores', ssd: '40 GB NVMe', bw: '1 TB 1Gbps Network', color: 'border-purple-500/30', btnColor: 'bg-indigo-600' },
    { name: 'Ryzen 4GB', price: '999', ram: '4 GB DDR5', cpu: '2 vCPU Cores', ssd: '80 GB NVMe', bw: '2 TB 1Gbps Network', color: 'border-pink-500/30', btnColor: 'bg-pink-600' },
    { name: 'Ryzen 6GB', price: '1,299', ram: '6 GB DDR5', cpu: '3 vCPU Cores', ssd: '120 GB NVMe', bw: '3 TB 1Gbps Network', color: 'border-emerald-500/30', btnColor: 'bg-emerald-600' },
    { name: 'Ryzen 8GB', price: '1,599', ram: '8 GB DDR5', cpu: '4 vCPU Cores', ssd: '160 GB NVMe', bw: '4 TB 1Gbps Network', popular: true, color: 'border-orange-500/50', btnColor: 'bg-orange-600' },
    { name: 'Ryzen 12GB', price: '2,089', ram: '12 GB DDR5', cpu: '5 vCPU Cores', ssd: '200 GB NVMe', bw: '5 TB 1Gbps Network', color: 'border-red-500/30', btnColor: 'bg-red-600' },
    { name: 'Ryzen 16GB', price: '2,399', ram: '16 GB DDR5', cpu: '6 vCPU Cores', ssd: '240 GB NVMe', bw: '6 TB 1Gbps Network', popular: true, color: 'border-amber-500/50', btnColor: 'bg-amber-600' },
    { name: 'Ryzen 24GB', price: '3,599', ram: '24 GB DDR5', cpu: '7 vCPU Cores', ssd: '280 GB NVMe', bw: '7 TB 1Gbps Network', color: 'border-purple-500/30', btnColor: 'bg-purple-600' },
    { name: 'Ryzen 32GB', price: '4,349', ram: '32 GB DDR5', cpu: '8 vCPU Cores', ssd: '320 GB NVMe', bw: '8 TB 1Gbps Network', color: 'border-indigo-500/30', btnColor: 'bg-indigo-600' },
    { name: 'Ryzen 45GB', price: '5,599', ram: '45 GB DDR5', cpu: '9 vCPU Cores', ssd: '360 GB NVMe', bw: '9 TB 1Gbps Network', color: 'border-pink-500/30', btnColor: 'bg-pink-600' },
    { name: 'Ryzen 64GB', price: '8,049', ram: '64 GB DDR5', cpu: '10 vCPU Cores', ssd: '400 GB NVMe', bw: '10 TB 1Gbps Network', color: 'border-red-500/30', btnColor: 'bg-red-600' },
  ];

  return (
    <div className="pt-24 pb-20 bg-fake-bg">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-[10px] font-black uppercase tracking-widest mb-8"
          >
            <ShieldCheck className="w-3.5 h-3.5" /> PROP EPIC Ryzen Lineup
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-6"
          >
            <span className="text-orange-500">AMD Ryzen</span> <br /> <span className="text-fake-text">VPS Hosting</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl mb-12"
          >
            Enterprise-grade performance with AMD Ryzen processors. DDR5 memory, NVMe storage, and premium network infrastructure for demanding workloads.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4">
             <button 
               onClick={() => {
                 const el = document.getElementById('plans');
                 el?.scrollIntoView({ behavior: 'smooth' });
               }}
               className="bg-orange-600 text-white px-8 py-4 rounded-xl font-black tracking-tight flex items-center gap-3 transition-all hover:scale-105 shadow-xl shadow-orange-600/20"
             >
               View Plans
             </button>
             <button className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-bold tracking-tight hover:bg-white/10 transition-all flex items-center gap-2">
               Learn More
             </button>
          </div>
        </div>
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />
      </section>

      {/* Hardware Specs Card */}
      <section className="px-6 mb-32">
        <div className="max-w-5xl mx-auto">
          <div className="bg-fake-card border border-fake-border rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-3xl rounded-full" />
            
            <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
              <div className="w-20 h-20 rounded-3xl bg-orange-500/10 flex items-center justify-center p-5 text-orange-500 border border-orange-500/20">
                <Cpu className="w-full h-full" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase tracking-tight">AMD Ryzen 9 9950X</h3>
                <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">High Performance • @ 5.3 GHz</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl p-6 flex items-start gap-4 hover:border-orange-500/30 transition-all">
                <div className="p-2 bg-purple-500/10 text-purple-500 rounded-lg"><LayoutDashboard className="w-5 h-5" /></div>
                <div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mb-1">DDR5 RAM</div>
                  <div className="font-black text-fake-text">High Speed</div>
                </div>
              </div>
              <div className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl p-6 flex items-start gap-4 hover:border-blue-500/30 transition-all">
                <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg"><HardDrive className="w-5 h-5" /></div>
                <div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mb-1">STORAGE</div>
                  <div className="font-black text-fake-text">NVMe SSD</div>
                </div>
              </div>
              <div className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl p-6 flex items-start gap-4 hover:border-indigo-500/30 transition-all">
                <div className="p-2 bg-indigo-500/10 text-indigo-500 rounded-lg"><Network className="w-5 h-5" /></div>
                <div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mb-1">NETWORK</div>
                  <div className="font-black text-fake-text">1Gbps Uplink</div>
                </div>
              </div>
              <div className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl p-6 flex items-start gap-4 hover:border-red-500/30 transition-all">
                <div className="p-2 bg-red-500/10 text-red-500 rounded-lg"><ShieldCheck className="w-5 h-5" /></div>
                <div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mb-1">PROTECTION</div>
                  <div className="font-black text-fake-text">DDoS Protected</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-fake-border text-center">
              <div>
                <div className="text-2xl font-black mb-1 flex items-center justify-center gap-1"><Clock className="w-4 h-4 text-emerald-500" /> 99.9%</div>
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-black mb-1 flex items-center justify-center gap-1"><Activity className="w-4 h-4 text-blue-500" /> &lt;12ms</div>
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Average Ping</div>
              </div>
              <div>
                <div className="text-2xl font-black mb-1 flex items-center justify-center gap-1"><Zap className="w-4 h-4 text-indigo-500" /> 1.0Gbps</div>
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Download Speed</div>
              </div>
              <div>
                <div className="text-2xl font-black mb-1 flex items-center justify-center gap-1"><Cpu className="w-4 h-4 text-orange-500" /> 5.3GHz</div>
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">CPU Speed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section id="plans" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-black tracking-tight mb-4 uppercase">Choose Your AMD Plan</h2>
            <p className="text-zinc-500 font-bold max-w-2xl mx-auto">Select the perfect AMD Ryzen VPS for your needs. All plans include premium hardware and 24/7 support.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`bg-fake-card border ${plan.popular ? 'border-orange-500/50' : 'border-fake-border'} rounded-[2.5rem] p-10 relative overflow-hidden flex flex-col h-full group transition-all`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-orange-500 text-white px-10 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-lg rounded-bl-2xl">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-black mb-2 text-brand-purple tracking-tight">{plan.name}</h3>
                  <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">AMD Ryzen VPS</p>
                </div>

                <div className="text-center mb-12">
                   <div className="flex items-center justify-center gap-1">
                      <span className="text-5xl font-black">₹{plan.price}</span>
                      <span className="text-zinc-500 font-bold text-sm">/month</span>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-12">
                   <div className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl p-4 flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                         <LayoutDashboard className="w-3.5 h-3.5 text-brand-purple" /> RAM
                      </div>
                      <div className="text-sm font-black text-fake-text">{plan.ram}</div>
                   </div>
                   <div className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl p-4 flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                         <Cpu className="w-3.5 h-3.5 text-brand-purple" /> CPU
                      </div>
                      <div className="text-sm font-black text-fake-text">{plan.cpu}</div>
                   </div>
                   <div className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl p-4 flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                         <HardDrive className="w-3.5 h-3.5 text-brand-purple" /> STORAGE
                      </div>
                      <div className="text-sm font-black text-fake-text">{plan.ssd}</div>
                   </div>
                   <div className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl p-4 flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                         <Zap className="w-3.5 h-3.5 text-brand-purple" /> BANDWIDTH
                      </div>
                      <div className="text-sm font-black text-fake-text">{plan.bw}</div>
                   </div>
                </div>

                <div className="space-y-6 pt-10 border-t border-white/5 mb-10">
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <Cpu className="w-5 h-5 text-zinc-500" />
                         <span className="text-sm font-black text-zinc-300">Processor</span>
                      </div>
                      <div className="text-right">
                         <div className="text-[11px] font-black uppercase">AMD Ryzen 9 9950X</div>
                         <div className="text-[9px] text-zinc-500 font-bold">4.50 GHz Base</div>
                      </div>
                   </div>
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <Zap className="w-5 h-5 text-zinc-500" />
                         <span className="text-sm font-black text-zinc-300">Network</span>
                      </div>
                      <div className="text-sm font-black uppercase">1 Gbit Uplink</div>
                   </div>
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <Globe className="w-5 h-5 text-zinc-500" />
                         <span className="text-sm font-black text-zinc-300">Location</span>
                      </div>
                      <div className="text-sm font-black uppercase">India</div>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-y-4 mb-12">
                   <div className="flex items-center gap-2 text-[11px] font-bold text-zinc-400 capitalize">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Root Access
                   </div>
                   <div className="flex items-center gap-2 text-[11px] font-bold text-zinc-400 capitalize">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 24/7 Support
                   </div>
                   <div className="flex items-center gap-2 text-[11px] font-bold text-zinc-400 capitalize">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Instant Setup
                   </div>
                   <div className="flex items-center gap-2 text-[11px] font-bold text-zinc-400 capitalize">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> DDoS Protected
                   </div>
                   <div className="flex items-center gap-2 text-[11px] font-bold text-zinc-400 capitalize">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 99.9% Uptime
                   </div>
                   <div className="flex items-center gap-2 text-[11px] font-bold text-zinc-400 capitalize">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Control Panel
                   </div>
                </div>

                <button 
                  onClick={() => navigate('/order-guide')}
                  className={`w-full ${plan.popular ? 'bg-orange-600' : 'bg-brand-purple'} text-white py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-2xl transition-all hover:scale-105 active:scale-95`}
                >
                  <Zap className="w-4 h-4 fill-white" /> Order Now
                </button>
              </motion.div>
            ))}
          </div>
          
          <p className="text-center mt-12 text-zinc-600 text-sm font-medium">
             All prices exclude taxes. No setup fee. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Why AMD Section */}
      <section className="py-32 relative overflow-hidden bg-fake-bg border-y border-fake-border">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">Why Choose AMD VPS?</h2>
               <p className="text-zinc-500 font-bold">Unmatched performance for gaming, development, and production workloads.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { icon: Cpu, title: 'AMD Ryzen 9 9950X', desc: 'High performance cores @ 5.3 GHz for unmatched single-core speed.' },
                 { icon: LayoutDashboard, title: 'DDR5 Memory', desc: 'Up to 64GB high-speed RAM for demanding applications.' },
                 { icon: HardDrive, title: 'NVMe SSD', desc: 'RAID1 Storage for Data Safety and extreme speeds.' },
                 { icon: ShieldCheck, title: 'DDoS Protection', desc: 'Layer 7+ Attack Mitigation on all nodes.' },
                 { icon: Zap, title: 'High Speed Network', desc: '1Gbps Uplink with Low Latency routing across India.' },
                 { icon: Globe, title: 'Daily Backups', desc: 'Automated Backup System to keep your data safe and secure.' }
               ].map((item, i) => (
                 <div key={i} className="bg-fake-card border border-fake-border rounded-3xl p-8 hover:border-orange-500/20 transition-all group">
                    <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center p-3 text-orange-500 mb-8 group-hover:scale-110 transition-transform">
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
          <div className="bg-gradient-to-r from-orange-600 to-red-600 p-[1px] rounded-[3rem] overflow-hidden shadow-2xl shadow-orange-600/10">
             <div className="bg-fake-card py-20 px-8 rounded-[3rem] text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-orange-600 opacity-[0.03]" />
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 relative z-10 uppercase">Ready to Experience AMD Performance?</h2>
                <p className="text-zinc-500 font-bold mb-10 relative z-10 max-w-xl mx-auto uppercase tracking-widest text-xs leading-relaxed">Deploy your AMD Ryzen VPS in under 60 seconds. No long-term contracts required.</p>
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

export default AMDRyzenVPS;
