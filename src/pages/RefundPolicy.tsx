import React from 'react';
import { motion } from 'motion/react';
import { Shield, CreditCard, Clock, CheckCircle, XCircle, AlertTriangle, Mail, MessageSquare, ArrowRight } from 'lucide-react';

const RefundPolicy = () => {
  const sections = [
    {
      id: 'general',
      title: 'General Principles',
      icon: Shield,
      content: [
        'Hosting services are digital and often provisioned instantly after payment.',
        'Refunds are limited, discretionary, and subject to eligibility checks.',
        'Approval is not guaranteed unless required under applicable law.'
      ]
    },
    {
      id: 'window',
      title: 'Refund Window',
      icon: Clock,
      content: [
        'Requests must be submitted within 24 hours of first activation.',
        'Late requests may be declined automatically.',
        'Promotional, renewal, and upgrade charges generally remain non-refundable.'
      ]
    },
    {
      id: 'eligible',
      title: 'Eligible Cases',
      icon: CheckCircle,
      content: [
        'Service could not be provisioned due to verified FakeCloud platform fault.',
        'Critical non-delivery during initial window with supporting evidence.',
        'No policy violations, abuse reports, or fraudulent activity associated with account.'
      ]
    },
    {
      id: 'non-refundable',
      title: 'Non-Refundable Items',
      icon: XCircle,
      content: [
        'Any game server, VPS, web hosting, or bot hosting service is non-refundable once provisioned.',
        'Domain registration, renewals, SSLs, setup fees, and licensed add-ons.',
        'Dedicated or custom-reserved resources after provisioning starts.',
        'Services suspended or terminated for Terms/AUP violations.'
      ]
    },
    {
      id: 'chargebacks',
      title: 'Chargebacks & Abuse',
      icon: AlertTriangle,
      content: [
        'Payment disputes filed without support escalation may trigger immediate suspension.',
        'Fraudulent or abusive refund behavior can result in permanent account restriction.',
        'FakeCloud reserves the right to contest invalid chargebacks with evidence.'
      ]
    },
    {
      id: 'notice',
      title: 'Important Notice',
      icon: CreditCard,
      content: [
        'Gateway processing fees and banking charges may be deducted from approved refunds.',
        'Refund timelines depend on payment provider and bank processing cycles.',
        'Policy updates may be made over time; latest published version is authoritative.'
      ]
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
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-pink/10 border border-brand-pink/20 text-brand-pink text-[10px] font-black uppercase tracking-[0.2em] mb-4"
          >
            Billing & Refund Rules
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6"
          >
            Refund <span className="text-brand-pink">Policy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 font-medium max-w-2xl mx-auto"
          >
            This policy outlines eligibility, exclusions, timelines, and processing conditions for refund requests related to FakeCloud services.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-zinc-600 text-xs font-bold uppercase tracking-widest mt-4"
          >
            Effective date: 2025-2026
          </motion.p>
        </div>

        {/* Warning Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-2xl bg-brand-pink/5 border border-brand-pink/10 mb-12 flex items-center gap-4"
        >
          <AlertTriangle className="w-6 h-6 text-brand-pink shrink-0" />
          <p className="text-sm font-bold text-zinc-100">
            Digital infrastructure services are typically activated immediately. Please review this policy before purchase.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-fake-card border border-fake-border hover:border-brand-pink/30 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-pink/10 border border-brand-pink/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <section.icon className="w-5 h-5 text-brand-pink" />
                </div>
                <h2 className="text-lg font-black uppercase tracking-tight">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm font-medium text-zinc-500 leading-relaxed">
                    <div className="w-1 h-1 rounded-full bg-brand-pink/40 mt-2 shrink-0" />
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
          className="p-8 rounded-3xl bg-brand-pink/5 border border-brand-pink/10"
        >
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-5 h-5 text-brand-pink" />
            <h2 className="text-xl font-black uppercase tracking-tight">Refund Support</h2>
          </div>
          <p className="text-zinc-500 font-medium mb-4">
            To request a refund, please join our Discord server and open a ticket in the billing department.
          </p>
          <a href="https://discord.com/invite/jyPz22PjEH" target="_blank" rel="noopener noreferrer" className="text-brand-pink font-black hover:underline flex items-center gap-2">
            Discord Server <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundPolicy;
