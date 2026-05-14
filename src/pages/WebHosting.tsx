import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Globe, 
  Cpu, 
  LayoutDashboard, 
  HardDrive, 
  MousePointer2,
  Server,
  Network,
  Clock,
  ArrowRight,
  Terminal,
  Settings,
  Mail,
  Box,
  Rocket,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const WebHosting = () => {
  const navigate = useNavigate();
  const [hostingType, setHostingType] = useState<'simple' | 'cpanel'>('simple');

  const simplePlans = [
    { 
      name: 'Basic Hosting', 
      tag: 'Beginner Friendly',
      price: '149', 
      websites: '1 Website',
      features: [
        '10 TB DDoS Protection',
        '2 GB SSD Storage',
        '2 GB RAM',
        '1 Database',
        'High Frequency CPUs',
        '24/7 Support',
        '99.9% Uptime',
        'Free Migration'
      ],
      color: 'blue'
    },
    { 
      name: 'Business Hosting', 
      tag: 'Most Popular',
      price: '189', 
      websites: '5 Websites',
      popular: true,
      features: [
        '10 TB DDoS Protection',
        '4 GB SSD Storage',
        '4 GB RAM',
        '1 Database',
        'High Frequency CPUs',
        '24/7 Priority Support',
        '99.9% Uptime',
        'Free Migration'
      ],
      color: 'purple'
    },
    { 
      name: 'Premium Hosting', 
      tag: 'Best Value',
      price: '249', 
      websites: '10 Websites',
      features: [
        '10 TB DDoS Protection',
        '6 GB SSD Storage',
        '6 GB RAM',
        '1 Database',
        'High Frequency CPUs',
        '24/7 Priority Support',
        '99.9% Uptime',
        'Free Migration'
      ],
      color: 'indigo'
    }
  ];

  const cPanelPlans = [
    { 
      name: 'Starter Plan', 
      tag: 'Portfolios & Blogs',
      price: '189', 
      websites: '1 Website',
      features: [
        '1 TB DDoS Protection',
        '1 GB NVMe SSD Storage',
        '2 GB RAM',
        '70 GB Bandwidth',
        'Free SSL Certificate',
        'Free Weekly Backups',
        'Unlimited Emails & Databases',
        'Free Migration'
      ],
      color: 'blue'
    },
    { 
      name: 'Pro Plan', 
      tag: 'Most Popular',
      price: '269', 
      websites: '3 Websites',
      popular: true,
      features: [
        '5 TB DDoS Protection',
        '4 GB NVMe SSD Storage',
        '4 GB RAM',
        '200 GB Bandwidth',
        'Free SSL Certificate',
        'Free Daily Backups',
        'Unlimited Emails & Databases',
        'Free Migration & WHMCS'
      ],
      color: 'purple'
    },
    { 
      name: 'Elite Plan', 
      tag: 'Professional Grade',
      price: '389', 
      websites: '5 Websites',
      features: [
        '10 TB DDoS Protection',
        '6 GB NVMe SSD Storage',
        '7 GB RAM',
        '500 GB Bandwidth',
        'Free SSL Certificate',
        'Free Daily Backups',
        'Unlimited Emails & Databases',
        'Free WHMCS and Migrations'
      ],
      color: 'orange'
    }
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
            <Zap className="w-3.5 h-3.5" /> High-Performance Hosting
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-6"
          >
            Web Hosting <br /> <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">Made Simple & Powerful</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl mb-12"
          >
            Whether you're a developer needing full control or a beginner wanting simplicity, we have the perfect hosting solution. Powered by NVMe SSD, 99.9% uptime, and expert support.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4">
             <button 
               onClick={() => {
                 const el = document.getElementById('plans');
                 el?.scrollIntoView({ behavior: 'smooth' });
               }}
               className="bg-brand-purple text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 transition-all hover:scale-105 shadow-xl shadow-brand-purple/20"
             >
               <LayoutDashboard className="w-4 h-4" /> View Plans <ArrowRight className="w-4 h-4" />
             </button>
             <button 
               onClick={() => {
                 setHostingType('cpanel');
                 const el = document.getElementById('plans');
                 el?.scrollIntoView({ behavior: 'smooth' });
               }}
               className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-black tracking-tight flex items-center gap-3 transition-all hover:bg-white/10"
             >
               cPanel Hosting
             </button>
             <button 
               onClick={() => {
                 setHostingType('simple');
                 const el = document.getElementById('plans');
                 el?.scrollIntoView({ behavior: 'smooth' });
               }}
               className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-black tracking-tight flex items-center gap-3 transition-all hover:bg-white/10"
             >
               Simple Hosting
             </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-12 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
             <div className="flex items-center gap-2"><Zap className="w-3.5 h-3.5 text-amber-500" /> NVMe SSD</div>
             <div className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Free SSL</div>
             <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-blue-500" /> 99.9% Uptime</div>
             <div className="flex items-center gap-2"><Globe className="w-3.5 h-3.5 text-purple-500" /> 24/7 Support</div>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />
      </section>

      {/* Switcher Toggle */}
      <div className="max-w-md mx-auto px-6 mb-20">
         <div className="bg-fake-card border border-fake-border rounded-2xl p-1.5 flex gap-1">
            <button 
               onClick={() => setHostingType('cpanel')}
               className={`flex-1 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${hostingType === 'cpanel' ? 'bg-brand-purple text-white' : 'hover:text-white text-zinc-500'}`}
            >
               <LayoutDashboard className="w-3.5 h-3.5" /> cPanel Hosting
            </button>
            <button 
               onClick={() => setHostingType('simple')}
               className={`flex-1 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${hostingType === 'simple' ? 'bg-emerald-600 text-white' : 'hover:text-white text-zinc-500'}`}
            >
               <Settings className="w-3.5 h-3.5" /> Simple Hosting
            </button>
         </div>
      </div>

      {/* Pricing Section */}
      <section id="plans" className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div 
               key={hostingType}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4"
            >
               {hostingType === 'simple' ? <Settings className="w-3 h-3" /> : <LayoutDashboard className="w-3 h-3" />} 
               {hostingType === 'simple' ? 'Beginner Friendly' : 'Professional Grade'}
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 uppercase">
               {hostingType === 'simple' ? 'Simple Web Hosting' : 'cPanel Web Hosting'}
            </h2>
            <p className="text-zinc-500 font-bold max-w-2xl mx-auto">
               {hostingType === 'simple' 
                  ? 'Managed hosting made easy. Perfect for beginners, small businesses, and anyone who wants professional hosting without the complexity.' 
                  : 'Full control with cPanel. Perfect for developers, agencies, and growing businesses who need advanced features and maximum flexibility.'
               }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
               {(hostingType === 'simple' ? simplePlans : cPanelPlans).map((plan, idx) => (
               <motion.div 
                  key={`${hostingType}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={`bg-fake-card border ${plan.popular ? 'border-brand-purple/50' : 'border-fake-border'} rounded-[2.5rem] p-10 relative overflow-hidden flex flex-col h-full group transition-all`}
               >
                  {plan.popular && (
                     <div className="absolute top-0 right-0">
                        <div className="bg-brand-purple text-white px-10 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-lg rounded-bl-2xl">
                           {plan.tag}
                        </div>
                     </div>
                  )}
                  {!plan.popular && (
                     <div className="absolute top-0 right-0">
                        <div className="bg-white/10 text-white px-10 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-bl-2xl">
                           {plan.tag}
                        </div>
                     </div>
                  )}
                  
                  <div className="text-center mb-10 pt-4">
                     <div className={`w-14 h-14 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-brand-purple group-hover:scale-110 transition-transform`}>
                        {hostingType === 'simple' ? <Settings className="w-6 h-6 text-emerald-500" /> : <LayoutDashboard className="w-6 h-6 text-brand-purple" />}
                     </div>
                     <h3 className="text-3xl font-black mb-2 tracking-tight">{plan.name}</h3>
                     <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Web Hosting</p>
                  </div>

                  <div className="bg-fake-bg border border-fake-border rounded-3xl p-8 text-center mb-10">
                     <div className="flex items-center justify-center gap-1">
                        <span className="text-5xl font-black">₹{plan.price}</span>
                        <span className="text-zinc-500 font-bold text-sm">/month</span>
                     </div>
                     <div className="text-fake-text text-xs font-black mt-3 uppercase tracking-widest">{plan.websites}</div>
                  </div>

                  <div className="space-y-4 mb-12 flex-grow">
                     {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm font-bold text-zinc-400">
                           <CheckCircle2 className={`w-4 h-4 shrink-0 ${hostingType === 'simple' ? 'text-emerald-500' : 'text-brand-purple'}`} /> {feature}
                        </div>
                     ))}
                  </div>

                  <button 
                     onClick={() => navigate('/order-guide')}
                     className={`w-full bg-gradient-to-r ${hostingType === 'simple' ? 'from-emerald-500 to-emerald-700' : 'from-brand-purple to-brand-pink'} text-white py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-2xl transition-all hover:scale-105 active:scale-95`}
                  >
                     <Rocket className="w-4 h-4" /> Get Started <ArrowRight className="w-3.5 h-3.5" />
                  </button>
               </motion.div>
               ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 border-y border-fake-border relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">
                  Why Choose <span className="text-brand-purple font-black">{hostingType === 'simple' ? 'Simple Hosting' : 'cPanel Hosting'}</span>?
               </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {(hostingType === 'simple' ? [
                 { icon: Rocket, title: 'Easy to Use', desc: 'Simple dashboard, one-click installs, no technical knowledge required.' },
                 { icon: Settings, title: 'Fully Managed', desc: 'We handle all technical aspects, updates, and maintenance.' },
                 { icon: Clock, title: 'Quick Setup', desc: 'Get your website online in minutes with our automated setup.' },
                 { icon: ShieldCheck, title: 'Auto-Secured', desc: 'Automatic security updates, malware protection, and SSL setup.' },
                 { icon: MousePointer2, title: 'Mobile Friendly', desc: 'Optimized for all devices with responsive design.' },
                 { icon: Globe, title: 'Dedicated Support', desc: 'Expert 24/7 customer support exclusively via our Discord server tickets.' }
               ] : [
                 { icon: Settings, title: 'Full Control', desc: 'Complete access to server settings, file manager, and advanced configurations.' },
                 { icon: Box, title: 'Advanced Features', desc: 'WHM, Softaculous, Cron jobs, and professional development tools.' },
                 { icon: HardDrive, title: 'High Performance', desc: 'Optimized stack for WordPress, Joomla, and custom applications.' },
                 { icon: Server, title: 'Unlimited Resources', desc: 'Unlimited email accounts, databases, and subdomains.' },
                 { icon: ShieldCheck, title: 'Enhanced Security', desc: 'Advanced firewall, malware scanning, and regular security updates.' },
                 { icon: Activity, title: 'Scalability', desc: 'Easy upgrades and resource scaling as your business grows.' }
               ]).map((item, i) => (
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

      {/* Comparison Section */}
      <section className="py-32 px-6">
         <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">Which One is Right for You?</h2>
               <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Compare our hosting solutions side by side</p>
            </div>

            <div className="bg-fake-card border border-fake-border rounded-[3rem] overflow-hidden shadow-2xl relative">
               <div className="grid grid-cols-1 md:grid-cols-3">
                  {/* Column 1: Feature Names */}
                  <div className="p-10 border-r border-fake-border bg-white/[0.02]">
                     <h4 className="text-xl font-black mb-10 tracking-tight">Features Comparison</h4>
                     <div className="space-y-10">
                        {[
                           { name: 'Control Panel', desc: 'Interface for managing your hosting' },
                           { name: 'Technical Knowledge', desc: 'Required expertise level' },
                           { name: 'Setup Time', desc: 'Time to get started' },
                           { name: 'Maintenance', desc: 'Who handles updates & security' },
                           { name: 'Best For', desc: 'Ideal user profile' },
                           { name: 'Support Level', desc: 'Type of support provided' },
                           { name: 'Price Range', desc: 'Monthly cost' },
                        ].map((f, i) => (
                           <div key={i} className="flex flex-col gap-1">
                              <span className="text-sm font-black text-white">{f.name}</span>
                              <span className="text-[10px] text-zinc-500 font-bold">{f.desc}</span>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Column 2: cPanel Hosting */}
                  <div className="p-10 border-r border-fake-border">
                     <div className="flex items-center gap-3 mb-10">
                        <div className="p-2 bg-brand-purple/10 text-brand-purple rounded-lg"><LayoutDashboard className="w-5 h-5" /></div>
                        <h4 className="text-xl font-black tracking-tight">cPanel Hosting</h4>
                     </div>
                     <div className="space-y-10">
                        <div className="text-sm font-bold text-zinc-400 h-[36px] flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Full cPanel Access</div>
                        <div className="text-sm font-bold text-zinc-400 h-[36px] flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-amber-500 shadow-lg shadow-amber-500/20" /> Technical Required</div>
                        <div className="text-sm font-bold text-fake-text h-[36px] flex items-center">5-10 minutes</div>
                        <div className="text-sm font-bold text-fake-text h-[36px] flex items-center">Self-managed</div>
                        <div className="text-sm font-bold text-fake-text h-[36px] flex items-center">Developers & Agencies</div>
                        <div className="text-sm font-bold text-fake-text h-[36px] flex items-center">Expert Support</div>
                        <div className="text-sm font-black text-brand-purple h-[36px] flex items-center">₹189 - ₹389/month</div>
                        <button onClick={() => setHostingType('cpanel')} className="w-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-purple hover:text-white transition-all">
                           View cPanel Plans
                        </button>
                     </div>
                  </div>

                  {/* Column 3: Simple Hosting */}
                  <div className="p-10">
                     <div className="flex items-center gap-3 mb-10">
                        <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg"><Settings className="w-5 h-5" /></div>
                        <h4 className="text-xl font-black tracking-tight">Simple Hosting</h4>
                     </div>
                     <div className="space-y-10">
                        <div className="text-sm font-bold text-zinc-400 h-[36px] flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Simplified Dashboard</div>
                        <div className="text-sm font-bold text-zinc-400 h-[36px] flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/20" /> No Experience Needed</div>
                        <div className="text-sm font-bold text-fake-text h-[36px] flex items-center">2-5 minutes</div>
                        <div className="text-sm font-bold text-fake-text h-[36px] flex items-center">Fully Managed</div>
                        <div className="text-sm font-bold text-fake-text h-[36px] flex items-center">Beginners & Small Biz</div>
                        <div className="text-sm font-bold text-fake-text h-[36px] flex items-center">24/7 Basic Support</div>
                        <div className="text-sm font-black text-emerald-500 h-[36px] flex items-center">₹149 - ₹249/month</div>
                        <button onClick={() => setHostingType('simple')} className="w-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-all">
                           View Simple Plans
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Call to action section */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-fake-card border border-fake-border rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group shadow-2xl">
             <div className="absolute inset-0 bg-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity" />
             <Rocket className="w-16 h-16 text-brand-purple mx-auto mb-8 animate-pulse" />
             <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">Ready to Launch Your Website?</h2>
             <p className="text-zinc-500 font-bold mb-12 max-w-xl mx-auto">Join thousands of satisfied customers who trust FakeCloud for reliable, high-performance hosting.</p>
             
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 w-full max-w-2xl mx-auto">
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
                  className="bg-white/10 text-white border border-white/10 px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:bg-white/20 w-full"
                >
                   <Rocket className="w-4 h-4" /> Order Now
                </button>
             </div>
             
             <div className="mt-8 flex flex-wrap justify-center gap-6 text-[10px] font-black uppercase tracking-widest text-zinc-600">
                <span>No setup fees</span>
                <span>30-day money-back guarantee</span>
                <span>Free migration assistance</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebHosting;
