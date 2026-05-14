import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Pages & Components
import Home from './pages/Home';
import OrderGuide from './pages/OrderGuide';
import IntelPlatinumVPS from './pages/IntelPlatinumVPS';
import AMDRyzenVPS from './pages/AMDRyzenVPS';
import IntelXeonVPS from './pages/IntelXeonVPS';
import WebHosting from './pages/WebHosting';
import DiscordBotHosting from './pages/DiscordBotHosting';
import GameServers from './pages/GameServers';
import MinecraftHosting from './pages/MinecraftHosting';
import HytaleHosting from './pages/HytaleHosting';
import PalworldHosting from './pages/PalworldHosting';
import TermsOfService from './pages/TermsOfService';
import RefundPolicy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial loading simulation or any non-auth related setup
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-fake-bg flex items-center justify-center">
        <div className="w-16 h-16 relative">
          <div className="absolute inset-0 border-4 border-brand-purple/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-brand-purple border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-fake-bg text-fake-text font-sans selection:bg-brand-purple/30">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intel-platinum-vps" element={<IntelPlatinumVPS />} />
            <Route path="/amd-ryzen-vps" element={<AMDRyzenVPS />} />
            <Route path="/intel-xeon-vps" element={<IntelXeonVPS />} />
            <Route path="/web-hosting" element={<WebHosting />} />
            <Route path="/discord-bot-hosting" element={<DiscordBotHosting />} />
            <Route path="/game-servers" element={<GameServers />} />
            <Route path="/games/minecraft" element={<MinecraftHosting />} />
            <Route path="/games/hytale" element={<HytaleHosting />} />
            <Route path="/games/palworld" element={<PalworldHosting />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/order-guide" element={<OrderGuide />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
