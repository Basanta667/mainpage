import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Github,
  Twitter,
  Instagram,
  Mail,
  Zap,
  Shield,
  Server
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-32 pb-16 border-t border-fake-border relative bg-fake-bg">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20 text-center md:text-left">
         <div className="col-span-1">
           <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
                <img src="https://raw.githubusercontent.com/Basanta667/HowtosetuppterodactylwingsForFree/refs/heads/main/FakeCloud2.png" alt="FakeCloud Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase text-zinc-900 dark:text-white whitespace-nowrap">Fake Cloud</span>
           </div>
           <p className="text-zinc-500 font-medium text-sm leading-relaxed mb-8 max-w-xs">
             Enterprise-grade hosting solutions with guaranteed performance and global infrastructure. Experience the future of hosting.
           </p>
           <div className="flex gap-4">
             {[
               { icon: Twitter, link: 'https://discord.com/invite/jyPz22PjEH' },
               { icon: Github, link: 'https://discord.com/invite/jyPz22PjEH' },
               { icon: Instagram, link: 'https://discord.com/invite/jyPz22PjEH' },
             ].map((social, i) => (
               <a key={i} href={social.link} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-brand-purple hover:bg-brand-purple/10 transition-all cursor-pointer group">
                 <social.icon className="w-5 h-5"/>
               </a>
             ))}
           </div>
         </div>

         <div>
           <h5 className="font-black text-[10px] uppercase tracking-[0.3em] mb-10 text-brand-purple">SERVICES</h5>
           <ul className="space-y-4 text-zinc-500 font-bold text-xs uppercase tracking-widest">
             <li><Link to="/games/minecraft" className="hover:text-brand-purple dark:hover:text-white transition-colors">Minecraft Hosting</Link></li>
             <li><Link to="/games/hytale" className="hover:text-brand-purple dark:hover:text-white transition-colors">Hytale Hosting</Link></li>
             <li><Link to="/game-servers" className="hover:text-brand-purple dark:hover:text-white transition-colors">Game Servers</Link></li>
             <li><Link to="/intel-platinum-vps" className="hover:text-brand-purple dark:hover:text-white transition-colors">Intel Platinum VPS</Link></li>
             <li><Link to="/intel-xeon-vps" className="hover:text-brand-purple dark:hover:text-white transition-colors">Intel Xeon VPS</Link></li>
             <li><Link to="/amd-ryzen-vps" className="hover:text-brand-purple dark:hover:text-white transition-colors">AMD Ryzen VPS</Link></li>
             <li><Link to="/web-hosting" className="hover:text-brand-purple dark:hover:text-white transition-colors">Web Hosting</Link></li>
             <li><Link to="/discord-bot-hosting" className="hover:text-brand-purple dark:hover:text-white transition-colors">Discord Bot Hosting</Link></li>
             <li><a href="#" className="hover:text-brand-purple dark:hover:text-white transition-colors">Email Hosting</a></li>
             <li><a href="#" className="hover:text-brand-purple dark:hover:text-white transition-colors">Dedicated Servers</a></li>
           </ul>
         </div>

         <div>
           <h5 className="font-black text-[10px] uppercase tracking-[0.3em] mb-10 text-brand-purple">Company</h5>
           <ul className="space-y-4 text-zinc-500 font-bold text-xs uppercase tracking-widest">
             <li><a href="#" className="hover:text-brand-purple dark:hover:text-white transition-colors">About Us</a></li>
             <li><a href="#" className="hover:text-brand-purple dark:hover:text-white transition-colors">Partner Program</a></li>
             <li><a href="#" className="hover:text-brand-purple dark:hover:text-white transition-colors">FAQ</a></li>
             <li><Link to="/privacy-policy" className="hover:text-brand-purple dark:hover:text-white transition-colors">Privacy Policy</Link></li>
             <li><Link to="/terms" className="hover:text-brand-purple dark:hover:text-white transition-colors">Terms of Service</Link></li>
             <li><Link to="/refund-policy" className="hover:text-brand-purple dark:hover:text-white transition-colors">Refund Policy</Link></li>
           </ul>
         </div>

         <div>
           <h5 className="font-black text-[10px] uppercase tracking-[0.3em] mb-10 text-brand-purple">Support</h5>
           <ul className="space-y-4 text-zinc-500 font-bold text-xs uppercase tracking-widest">
             <li><a href="https://discord.com/invite/jyPz22PjEH" target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple dark:hover:text-white transition-colors">Discord Server</a></li>
             <li><a href="https://discord.com/invite/jyPz22PjEH" target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple dark:hover:text-white transition-colors">Support Tickets</a></li>
             <li><a href="https://discord.com/invite/jyPz22PjEH" target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple dark:hover:text-white transition-colors">Knowledgebase</a></li>
             <li><a href="https://status.fakecloud.qzz.io/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple dark:hover:text-white transition-colors">Status Page</a></li>
           </ul>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-fake-border flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em]">
         <p>© 2026 Fake Cloud Hosting. Power by Fake Cloud.</p>
      </div>
    </footer>
  );
};

export default Footer;
