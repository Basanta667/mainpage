import React from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquare, 
  UserPlus, 
  Ticket, 
  Tag, 
  ArrowRight,
  ShieldCheck,
  Zap,
  HelpCircle
} from 'lucide-react';

const OrderGuide = () => {
  const steps = [
    {
      title: 'Join Our Discord',
      description: 'The first step is to join the official FakeCloud Discord server where all orders are processed.',
      icon: MessageSquare,
      color: 'text-brand-purple',
      bg: 'bg-brand-purple/10',
      action: {
        text: 'Join Discord Server',
        link: 'https://discord.com/invite/jyPz22PjEH'
      }
    },
    {
      title: 'Create a Ticket',
      description: 'Once you are in the server, navigate to the #tickets or #order channel and open a new Billing/Order ticket.',
      icon: Ticket,
      color: 'text-brand-pink',
      bg: 'bg-brand-pink/10'
    },
    {
      title: 'Tag the Owner',
      description: 'In your ticket, specify the service you want to buy (VPS, Minecraft, etc.) and tag the @Owner or @Admin for immediate assistance.',
      icon: Tag,
      color: 'text-brand-green',
      bg: 'bg-brand-green/10'
    }
  ];

  return (
    <div className="min-h-screen bg-fake-bg pt-32 pb-20 text-fake-text">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-[10px] font-black uppercase tracking-[0.2em] mb-4"
          >
            <Zap className="w-3 h-3" />
            Instant Ordering Process
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6"
          >
            How to <span className="text-brand-purple">Order</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 font-medium max-w-2xl mx-auto"
          >
            We've simplified our ordering process to be entirely Discord-based for better communication, security, and personalized support. Follow these simple steps to get your server online.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="space-y-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-fake-card border border-fake-border flex flex-col md:flex-row gap-8 items-center"
            >
              <div className={`w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center shrink-0`}>
                <step.icon className={`w-8 h-8 ${step.color}`} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <span className="text-zinc-300 dark:text-zinc-700 font-black text-4xl leading-none">0{index + 1}</span>
                  <h2 className="text-2xl font-black uppercase tracking-tight">{step.title}</h2>
                </div>
                <p className="text-zinc-500 font-medium leading-relaxed mb-4">{step.description}</p>
                {step.action && (
                  <a 
                    href={step.action.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-purple text-white px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-purple/20"
                  >
                    {step.action.text}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Discord Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-fake-card border border-fake-border"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-brand-green" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight">Secure Payment</h3>
            </div>
            <p className="text-zinc-500 font-medium leading-relaxed">
              Our admins will provide you with secure payment links directly in your private ticket. We support a wide range of payment methods including Crypto, PayPal, and Card.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-fake-card border border-fake-border"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-pink/10 flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-brand-pink" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight">24/7 Support</h3>
            </div>
            <p className="text-zinc-500 font-medium leading-relaxed">
              Once you create a ticket, you have a direct line to our entire support staff. We can help you configure your server or answer any questions before you pay.
            </p>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 rounded-[2.5rem] bg-brand-gradient text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase italic">Ready to get started?</h2>
            <p className="text-white/80 font-bold mb-8 max-w-xl mx-auto">
              Join our community of thousands of satisfied customers and get your high-performance server online today.
            </p>
            <a 
              href="https://discord.com/invite/jyPz22PjEH" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl inline-block"
            >
              Go to Discord
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderGuide;
