import React, { useState, useEffect } from 'react';
import { 
  Server, 
  ChevronDown, 
  Menu, 
  X, 
  Gamepad2, 
  LayoutDashboard, 
  ArrowRight,
  Users,
  Home,
  Tags,
  Star,
  Globe,
  Database,
  Cpu,
  Zap,
  MonitorPlay,
  MonitorCheck,
  Layers,
  MessageSquare,
  Sun,
  Moon,
  Monitor,
  FileText,
  CreditCard,
  Shield,
  ShoppingBag,
  Terminal,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';

type Theme = 'light' | 'dark' | 'system';

const DROPDOWNS = {
  minecraft: {
    header: { title: 'Minecraft', icon: Gamepad2 },
    items: [
      { 
        title: 'Intel Minecraft', 
        description: 'Intel Platinum Minecraft Hosting', 
        logo: 'https://th-i.thgim.com/public/sci-tech/technology/6fwxd/article53473491.ece/alternates/FREE_320/Intel-4',
        bg: 'bg-blue-500/10', 
        path: '/games/minecraft?type=intel' 
      },
      { 
        title: 'AMD EPYC Minecraft', 
        description: 'AMD EPYC Minecraft Hosting', 
        logo: 'https://raw.githubusercontent.com/Basanta667/HowtosetuppterodactylwingsForFree/refs/heads/main/Epyc-AMD-Color-Logo.wine.png',
        bg: 'bg-red-500/10', 
        path: '/games/minecraft?type=epyc' 
      },
      { 
        title: 'Ryzen 9 Minecraft', 
        description: 'Ryzen 9 Minecraft Hosting', 
        logo: 'https://miro.medium.com/v2/resize:fit:700/1*dKgQGOevoDn3qIAvFS1A_w.jpeg',
        bg: 'bg-orange-500/10', 
        path: '/games/minecraft?type=ryzen' 
      }
    ]
  },
  vps: {
    header: { title: 'VPS', icon: Server },
    items: [
      { 
        title: 'Intel Platinum VPS', 
        description: 'India VPS with NVMe', 
        logo: 'https://th-i.thgim.com/public/sci-tech/technology/6fwxd/article53473491.ece/alternates/FREE_320/Intel-4', 
        bg: 'bg-blue-600/10', 
        path: '/intel-platinum-vps' 
      },
      { 
        title: 'AMD Ryzen VPS', 
        description: 'Ultimate Ryzen Performance', 
        logo: 'https://miro.medium.com/v2/resize:fit:700/1*dKgQGOevoDn3qIAvFS1A_w.jpeg', 
        bg: 'bg-orange-600/10', 
        path: '/amd-ryzen-vps' 
      },
      { 
        title: 'Intel Xeon VPS', 
        description: 'Enterprise Grade Xeon', 
        logo: 'https://th-i.thgim.com/public/sci-tech/technology/6fwxd/article53473491.ece/alternates/FREE_320/Intel-4', 
        bg: 'bg-blue-600/10', 
        path: '/intel-xeon-vps' 
      }
    ]
  },
  services: {
    header: { title: 'Services', icon: Layers },
    items: [
      { title: 'Web Hosting', description: 'Blazing fast cPanel web hosting', logo: 'https://raw.githubusercontent.com/Basanta667/HowtosetuppterodactylwingsForFree/refs/heads/main/Gemini_Generated_Image_ohhaltohhaltohha.png', bg: 'bg-pink-500/10', path: '/web-hosting' },
      { title: 'Discord Bot Hosting', description: '24/7 hosting for your custom bots', logo: 'https://raw.githubusercontent.com/Basanta667/HowtosetuppterodactylwingsForFree/refs/heads/main/Gemini_Generated_Image_21dt1e21dt1e21dt.png', bg: 'bg-indigo-500/10', path: '/discord-bot-hosting' }
    ]
  },
  games: {
    header: { title: 'Games', icon: MonitorPlay },
    items: [
      { 
        title: 'Hytale Hosting', 
        description: 'Best Hytale Hosting', 
        image: 'https://raw.githubusercontent.com/Basanta667/HowtosetuppterodactylwingsForFree/refs/heads/main/Gemini_Generated_Image_bdztu7bdztu7bdzt.png',
        path: '/games/hytale' 
      },
      { 
        title: 'Palworld Hosting', 
        description: 'Dedicated Palworld Server Hosting', 
        image: 'https://raw.githubusercontent.com/Basanta667/HowtosetuppterodactylwingsForFree/refs/heads/main/5a52ade92affafa4c4353c97110026811a365b65d6bad64e.avif',
        path: '/games/palworld' 
      },
      { 
        title: 'See All Game Servers', 
        description: 'Browse all game plans', 
        image: 'https://raw.githubusercontent.com/Basanta667/HowtosetuppterodactylwingsForFree/refs/heads/main/all%20game.webp',
        path: '/game-servers' 
      }
    ]
  },
  learn: {
    header: { title: 'Learn', icon: FileText },
    items: [
      { title: 'Terms of Service', description: 'Legal responsibilities and usage standards', logo: null, icon: FileText, color: 'text-brand-purple', bg: 'bg-brand-purple/10', path: '/terms' },
      { title: 'Privacy Policy', description: 'How we handle your data', logo: null, icon: Shield, color: 'text-atyro-blurple', bg: 'bg-atyro-blurple/10', path: '/privacy-policy' },
      { title: 'Refund Policy', description: 'Billing and refund information', logo: null, icon: CreditCard, color: 'text-brand-pink', bg: 'bg-brand-pink/10', path: '/refund-policy' },
    ]
  },
  client: {
    header: { title: 'Client Area', icon: LayoutDashboard },
    items: [
      { 
        title: 'Dashboard', 
        description: 'Manage your billing and account', 
        logo: null, 
        icon: LayoutDashboard, 
        color: 'text-brand-purple', 
        bg: 'bg-brand-purple/10', 
        path: 'https://dash.fakecloud.qzz.io/' 
      },
      { 
        title: 'Game Panel', 
        description: 'Access your game server files', 
        logo: null, 
        icon: Terminal, 
        color: 'text-brand-pink', 
        bg: 'bg-brand-pink/10', 
        path: 'https://panel.fakecloud.qzz.io/' 
      },
      { 
        title: 'Status Page', 
        description: 'Check our system uptime', 
        logo: null, 
        icon: Activity, 
        color: 'text-emerald-500', 
        bg: 'bg-emerald-500/10', 
        path: 'https://status.fakecloud.qzz.io/' 
      }
    ]
  }
};

const DISCORD_LINK = 'https://discord.com/invite/jyPz22PjEH';

const NavItem = ({ children, dropdownData, isOpen, onToggle, navigate }: any) => {
  const { header, items } = dropdownData;
  return (
    <div className="relative group">
      <button 
        onMouseEnter={onToggle}
        className={`flex items-center gap-1.5 px-3 py-6 text-sm font-bold transition-all hover:text-brand-purple ${isOpen ? 'text-brand-purple' : 'text-zinc-500 dark:text-zinc-400'}`}
      >
        {children}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onMouseLeave={onToggle}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-80 bg-white/95 dark:bg-[#070707]/95 backdrop-blur-xl border border-black/5 dark:border-white/5 rounded-b-2xl p-6 shadow-2xl z-[60]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-brand-purple/10 rounded-lg flex items-center justify-center">
                <header.icon className="w-4 h-4 text-brand-purple" />
              </div>
              <h5 className="font-black text-[10px] uppercase tracking-[0.3em] text-zinc-400 dark:text-white/50">{header.title}</h5>
            </div>

            <div className="space-y-1">
              {items.map((item: any, i: number) => (
                <div 
                  key={i} 
                  onClick={() => {
                    if (item.path && item.path.startsWith('http')) {
                      window.open(item.path, '_blank');
                    } else if (item.path && item.path !== '#') {
                      navigate(item.path);
                    }
                    onToggle();
                  }}
                  className="flex gap-4 p-3 rounded-xl hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-all cursor-pointer group/item items-center"
                >
                  <div className={`w-12 h-12 rounded-xl ${item.bg || 'bg-black/5 dark:bg-white/5'} flex items-center justify-center overflow-hidden shrink-0 border border-black/5 dark:border-white/5`}>
                    {item.logo ? (
                      <img src={item.logo} alt="" referrerPolicy="no-referrer" className="w-8 h-8 object-contain" />
                    ) : item.image ? (
                      <img src={item.image} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <div className={item.color}>
                        <item.icon className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h6 className="text-[13px] font-black text-zinc-900 dark:text-white group-hover:text-brand-purple transition-colors leading-none mb-1.5 uppercase">
                      {item.title}
                    </h6>
                    <p className="text-zinc-500 text-[10px] font-bold tracking-tight">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'system');
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    const updateTheme = () => {
      const actualTheme = 
        theme === 'system' 
          ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
          : theme;
      
      root.classList.remove('light', 'dark');
      root.classList.add(actualTheme);
      root.style.colorScheme = actualTheme;
    };

    updateTheme();
    localStorage.setItem('theme', theme);

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => updateTheme();
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  if (isAuthPage) return null;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? 'bg-fake-bg/80 backdrop-blur-xl border-b border-fake-border py-0' 
          : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div onClick={() => navigate('/')} className="flex items-center gap-3 cursor-pointer py-4 text-zinc-900 dark:text-white">
           <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
              <img src="https://raw.githubusercontent.com/Basanta667/HowtosetuppterodactylwingsForFree/refs/heads/main/FakeCloud2.png" alt="FakeCloud Logo" className="w-full h-full object-cover" />
           </div>
          <span className="text-xl font-black tracking-tighter uppercase text-zinc-900 dark:text-white whitespace-nowrap">Fake Cloud</span>
        </div>

        <div className="hidden lg:flex items-center gap-2">
          {/* MINECRAFT NavItem etc ... already has colors */}
          <NavItem 
            dropdownData={DROPDOWNS.minecraft} 
            isOpen={activeDropdown === 'minecraft'} 
            onToggle={() => setActiveDropdown(activeDropdown === 'minecraft' ? null : 'minecraft')}
            navigate={navigate}
          >
            MINECRAFT
          </NavItem>
          
          <NavItem 
            dropdownData={DROPDOWNS.vps} 
            isOpen={activeDropdown === 'vps'} 
            onToggle={() => setActiveDropdown(activeDropdown === 'vps' ? null : 'vps')}
            navigate={navigate}
          >
            VPS
          </NavItem>
 
          <NavItem 
            dropdownData={DROPDOWNS.services} 
            isOpen={activeDropdown === 'services'} 
            onToggle={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
            navigate={navigate}
          >
            SERVICES
          </NavItem>
 
          <NavItem 
            dropdownData={DROPDOWNS.games} 
            isOpen={activeDropdown === 'games'} 
            onToggle={() => setActiveDropdown(activeDropdown === 'games' ? null : 'games')}
            navigate={navigate}
          >
            GAMES
          </NavItem>
          
          <NavItem 
            dropdownData={DROPDOWNS.learn} 
            isOpen={activeDropdown === 'learn'} 
            onToggle={() => setActiveDropdown(activeDropdown === 'learn' ? null : 'learn')}
            navigate={navigate}
          >
            LEARN
          </NavItem>

          <NavItem 
            dropdownData={DROPDOWNS.client} 
            isOpen={activeDropdown === 'client'} 
            onToggle={() => setActiveDropdown(activeDropdown === 'client' ? null : 'client')}
            navigate={navigate}
          >
            CLIENT
          </NavItem>
          <a 
            href={DISCORD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-6 text-sm font-bold text-zinc-500 dark:text-zinc-400 hover:text-brand-purple transition-all"
          >
            SUPPORT
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button 
              onClick={() => setIsThemeOpen(!isThemeOpen)}
              className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {theme === 'light' ? <Sun className="w-5 h-5" /> : theme === 'dark' ? <Moon className="w-5 h-5" /> : <Monitor className="w-5 h-5" />}
            </button>

            <AnimatePresence>
              {isThemeOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsThemeOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full right-0 mt-2 w-44 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-xl p-1.5 shadow-2xl z-50 overflow-hidden"
                  >
                    {[
                      { id: 'system', label: 'Device', icon: Monitor, sub: `(${window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'})` },
                      { id: 'light', label: 'Light', icon: Sun },
                      { id: 'dark', label: 'Dark', icon: Moon },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setTheme(item.id as Theme);
                          setIsThemeOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-bold transition-all ${
                          theme === item.id 
                            ? 'bg-black/5 dark:bg-white/10 text-zinc-900 dark:text-white' 
                            : 'text-zinc-500 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-zinc-200'
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                        <div className="flex items-center gap-1.5 flex-1">
                          <span>{item.label}</span>
                          {item.sub && <span className="text-[10px] text-zinc-400 dark:text-zinc-600 font-normal">{item.sub}</span>}
                        </div>
                        {theme === item.id && <div className="w-1 h-1 bg-brand-purple rounded-full" />}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <button 
            onClick={() => navigate('/order-guide')}
            className="bg-brand-gradient text-white px-6 py-2.5 rounded-xl text-sm font-black tracking-tight shadow-lg shadow-brand-purple/20 hover:scale-105 transition-all flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            ORDER NOW
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
