import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, FileText, ChevronRight, AlertCircle, HelpCircle, MessageSquare } from 'lucide-react';

const TermsOfService = () => {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: Shield,
      content: [
        'By purchasing or using any FakeCloud service, you agree to this Terms of Service agreement.',
        'If you do not agree with any clause, you must not use our services.',
        'You are responsible for reviewing updates to these terms periodically.'
      ]
    },
    {
      id: 'eligibility',
      title: 'Account Eligibility & Security',
      icon: Lock,
      content: [
        'You must provide accurate account and billing information.',
        'You are responsible for account credentials and all activity under your account.',
        'Accounts may be suspended for fraud, abuse, false information, or security risks.'
      ]
    },
    {
      id: 'scope',
      title: 'Service Scope',
      icon: FileText,
      content: [
        'Services include game hosting, VPS, web hosting, bot hosting, and related add-ons.',
        'Features may vary by product plan and can be updated over time.',
        'FakeCloud may modify, suspend, or discontinue services when required.'
      ]
    },
    {
      id: 'billing',
      title: 'Billing & Renewal',
      icon: AlertCircle,
      content: [
        'All services are billed in advance and renew according to selected billing cycle.',
        'Late or unpaid invoices may result in suspension and data deletion after grace period.',
        'Taxes, gateway fees, and currency fees may apply depending on payment method.'
      ]
    },
    {
      id: 'usage',
      title: 'Acceptable Use Policy',
      icon: HelpCircle,
      content: [
        'Illegal activity, phishing, malware, DDoS, spam, and abusive automation are prohibited.',
        'Resource abuse that impacts platform stability is prohibited.',
        'Violations can result in immediate suspension or termination without refund.'
      ]
    },
    {
      id: 'availability',
      title: 'Availability & Maintenance',
      icon: Shield,
      content: [
        'Target uptime is 99.9%, excluding scheduled maintenance and force majeure events.',
        'Planned maintenance may be performed to improve stability and security.',
        'Compensation, where applicable, is provided as service credits only.'
      ]
    },
    {
      id: 'data',
      title: 'Data & Backups',
      icon: Lock,
      content: [
        'You are responsible for maintaining your own backups unless explicitly included in your plan.',
        'Backup availability does not guarantee successful restoration in all scenarios.',
        'Deleted data after termination may not be recoverable.'
      ]
    },
    {
      id: 'termination',
      title: 'Suspension & Termination',
      icon: AlertCircle,
      content: [
        'Accounts may be suspended for non-payment, policy violations, or legal notices.',
        'Services terminated for abuse are not eligible for refunds.',
        'FakeCloud may deny new registrations linked to abusive or fraudulent activity.'
      ]
    },
    {
      id: 'liability',
      title: 'Liability Limitation',
      icon: FileText,
      content: [
        'Services are provided on an "as is" and "as available" basis.',
        'FakeCloud is not liable for indirect losses, business interruption, or third-party failures.',
        'Maximum liability is limited to the amount paid for the affected service period.'
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
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-[10px] font-black uppercase tracking-[0.2em] mb-4"
          >
            Legal Framework
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6"
          >
            Terms of <span className="text-brand-purple">Service</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 font-medium max-w-2xl mx-auto"
          >
            These terms define legal responsibilities for using FakeCloud services, including billing, usage standards, security, and dispute handling.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-zinc-600 text-xs font-bold uppercase tracking-widest mt-4"
          >
            Effective date: August 9, 2025
          </motion.p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-32 space-y-1">
              <h5 className="font-black text-[10px] uppercase tracking-[0.3em] mb-4 text-zinc-400">On This Page</h5>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 py-2 text-xs font-black text-zinc-500 hover:text-brand-purple transition-colors uppercase tracking-wider group"
                >
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  {section.title}
                </a>
              ))}
              <a
                href="#contact"
                className="flex items-center gap-2 py-2 text-xs font-black text-zinc-500 hover:text-brand-purple transition-colors uppercase tracking-wider group"
              >
                <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                Contact
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-16">
            {sections.map((section, index) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="scroll-mt-32"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-brand-purple" />
                  </div>
                  <h2 className="text-xl font-black uppercase tracking-tight">{section.title}</h2>
                </div>
                <div className="space-y-4">
                  {section.content.map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-purple/30 mt-2 shrink-0 group-hover:bg-brand-purple transition-colors" />
                      <p className="text-zinc-500 font-medium leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            ))}

            <motion.section
              id="contact"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="scroll-mt-32 p-8 rounded-3xl bg-fake-card border border-fake-border"
            >
              <h2 className="text-xl font-black uppercase tracking-tight mb-4">Contact</h2>
              <p className="text-zinc-500 font-medium leading-relaxed mb-6">
                If you have any questions regarding these Terms of Service, please join our Discord server and open a ticket in the support channel. We do not provide support via phone or traditional email platforms.
              </p>
              <a href="https://discord.com/invite/jyPz22PjEH" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-atyro-blurple text-white px-8 py-3 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all">
                <MessageSquare className="w-4 h-4" />
                Join Discord Server
              </a>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
