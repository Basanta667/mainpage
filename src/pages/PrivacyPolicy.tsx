import React from 'react';
import { motion } from 'motion/react';
import { Shield, Database, Eye, Share2, Lock, UserCheck, Mail, Globe, MessageSquare } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      id: 'collection',
      title: 'Information We Collect',
      icon: Database,
      content: [
        'Account data: name, email, billing details, and contact information.',
        'Technical data: IP address, browser/device type, usage logs, and diagnostics.',
        'Support data: ticket messages, issue traces, and service-specific metadata.'
      ]
    },
    {
      id: 'usage',
      title: 'How We Use Data',
      icon: Eye,
      content: [
        'To provide, secure, and optimize hosting services.',
        'To process billing, fraud checks, and support requests.',
        'To communicate service updates, legal notices, and account alerts.'
      ]
    },
    {
      id: 'sharing',
      title: 'Data Sharing',
      icon: Share2,
      content: [
        'Data is shared only with essential processors (payment, anti-fraud, infrastructure).',
        'We do not sell personal data to third parties.',
        'Legal disclosure may occur when required by law or court order.'
      ]
    },
    {
      id: 'security',
      title: 'Security Controls',
      icon: Lock,
      content: [
        'Encryption in transit and access control for internal systems.',
        'Security monitoring, audits, and incident response procedures.',
        'No system is risk-free; users should maintain strong credential practices.'
      ]
    },
    {
      id: 'rights',
      title: 'Your Rights',
      icon: UserCheck,
      content: [
        'Request access, correction, or deletion of your personal data where applicable.',
        'Request restrictions on certain processing activities.',
        'Contact support for privacy requests and verification.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-fake-bg pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-atyro-blurple/10 border border-atyro-blurple/20 text-atyro-blurple text-[10px] font-black uppercase tracking-[0.2em] mb-4"
          >
            <Shield className="w-3 h-3" />
            Data Protection
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6"
          >
            Privacy <span className="text-atyro-blurple">Policy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 font-medium max-w-2xl mx-auto"
          >
            This policy explains what information we collect, why we process it, how we protect it, and the controls available to users.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-zinc-600 text-xs font-bold uppercase tracking-widest mt-4"
          >
            Last updated: November 30, 2024
          </motion.p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-atyro-blurple/30 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-atyro-blurple/10 border border-atyro-blurple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <section.icon className="w-5 h-5 text-atyro-blurple" />
                </div>
                <h2 className="text-lg font-black uppercase tracking-tight">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm font-medium text-zinc-500 leading-relaxed">
                    <div className="w-1 h-1 rounded-full bg-atyro-blurple/40 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10"
        >
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-5 h-5 text-atyro-blurple" />
            <h2 className="text-xl font-black uppercase tracking-tight">Support Contact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <p className="text-xs font-black text-zinc-500 uppercase tracking-widest">Discord Server</p>
              <a href="https://discord.com/invite/jyPz22PjEH" target="_blank" rel="noopener noreferrer" className="text-brand-purple font-bold hover:underline block truncate">
                Join our Discord Server
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-black text-zinc-500 uppercase tracking-widest">Official Support</p>
              <a href="https://discord.com/invite/jyPz22PjEH" target="_blank" rel="noopener noreferrer" className="text-brand-purple font-bold hover:underline flex items-center gap-2">
                Open a Ticket
                <Globe className="w-3 h-3" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-zinc-500 font-medium text-sm italic">
              Please open a ticket on our Discord server for any privacy or legal inquiries.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
