
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';
import { Code, Blocks, Bot, Cloud, Puzzle, PenTool, Wrench } from 'lucide-react';

const WhatIDo: React.FC = () => {
  const rotatingSkills = [
    'Web Development',
    'Blockchain App Development', 
    'Responsive UI/UX Design',
    'SaaS App Development',
    'AI Automation & Integration',
    'Discord/X/Telegram/WhatsApp Bot Development',
    'Web Maintenance & Consultations',
    'Smart Contract Engineering (Solidity, Rust)'
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % rotatingSkills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [rotatingSkills.length]);

  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      icon: Code,
      description: `• Fully Responsive UI/UX Design (Tailwind CSS, Framer Motion, CSS Variables)
• Full-Stack Web Applications (React, Node.js, Express, MongoDB, PostgreSQL)
• CMS Integration, Admin Dashboards & Custom Interfaces
• Web App Maintenance, Optimization & Consultation
• Authentication Systems (JWT, OAuth2, Google Sign-In)
• File uploads (Cloudinary, local, backend-first)`
    },
    {
      id: 'blockchain-web3',
      title: ' Blockchain & Web3 Development',
      icon: Blocks,
      description: `• Decentralized Applications (DApps)
• Smart Contract Development (Solidity, Rust)
• Blockchain Identity Systems & Token Gating
• Wallet Integrations (MetaMask, WalletConnect)
• NFT, Token, and Payment Systems
• Platforms: Ethereum, Sui, Polygon`
    },
    {
      id: 'ai-automation',
      title: ' AI & Automation',
      icon: Bot,
      description: `• Pose Detection & Real-Time Feedback (MediaPipe, MoveNet)
• AI-Based Dance Evaluators & Motion Analytics
• Chatbots & Virtual Assistants (GPT integrations)
• Workflow Automation & Task Scheduling
• AI-Powered UI/UX Suggestions`
    },
    {
      id: 'saas-applications',
      title: ' SaaS Applications',
      icon: Cloud,
      description: `• Custom SaaS Platforms
• Payment Integrations (Flutterwave, Stripe, Paystack)
• User & Admin Dashboards
• Analytics, Billing, Notifications & Roles
• Subscription Models & Access Control`
    },
    {
      id: 'bot-messaging',
      title: ' Bot & Messaging Platform Integrations',
      icon: Puzzle,
      description: `• Discord Bots (Moderation, Events, Automation)
• Telegram Bots (Notifications, Commands, AI Chat)
• WhatsApp Bots (Business Automation, Webhooks, Chat)
• X (Twitter) Bots (Auto-posting, Analytics, DMs)
• Webhooks, REST APIs, and Event Triggers for real-time messaging systems`
    },
    {
      id: 'writing-communication',
      title: ' Writing & Technical Communication',
      icon: PenTool,
      description: `• Technical Documentation & Blog Writing
• Prompt Engineering for AI Tools
• Resume Revamp & Portfolio Writing
• SEO-Friendly Developer Content`
    },
    {
      id: 'tools-technologies',
      title: ' Tools & Technologies',
      icon: Wrench,
      description: `• Frontend: React, TypeScript, Zustand, Next.js, Tailwind CSS
• Backend: Node.js, Express, MongoDB, PostgreSQL, Redis
• DevOps: GitHub Actions, Railway, Render, Vercel, Netlify
• Testing: Vitest, Jest
• CMS: Strapi, Sanity
• Version Control: Git, GitHub`
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="what-i-do" className="py-20 relative bg-[hsl(var(--background))] text-[hsl(var(--foreground))] transition-colors duration-300  ">

      {/* Enhanced Gradient Overlay */}
      <div className="absolute bg-gradient-to-br from-[hsl(var(--primary))]/5 via-[hsl(var(--accent))]/10 to-[hsl(var(--secondary))]/5" />
      

      <div className="container mx-auto px-6 "  >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[hsl(var(--foreground))]">
              What I Do
            </h2>
            
            {/* Rotating Text Animation */}
            <div className="h-16 flex items-center justify-center mb-8">
              <motion.div
                key={currentSkillIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-semibold text-[hsl(var(--muted-foreground))]"
              >
                {rotatingSkills[currentSkillIndex]}
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto rounded-full"
            />
          </motion.div>

          {/* Services Accordion */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              Services & Expertise
            </h3>
            
            <Accordion type="single" collapsible className="space-y-4">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <AccordionItem
                    key={service.id}
                    value={service.id}
                    className="border border-[hsl(var(--border))] rounded-lg bg-[hsl(var(--card))]/50 backdrop-blur-sm hover:bg-[hsl(var(--card))]/80 transition-all duration-300"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                      <div className="flex items-center gap-4 text-left">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="p-2 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-lg"
                        >
                          <IconComponent className="w-5 h-5" />
                        </motion.div>
                        <span className="text-lg font-semibold text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors">
                          {service.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-[hsl(var(--muted-foreground))] leading-relaxed pl-12 whitespace-pre-line"
                      >
                        {service.description}
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.p
              className="text-lg text-[hsl(var(--muted-foreground))] mb-6 max-w-2xl mx-auto"
            >
              Ready to bring your ideas to life? Let's discuss how I can help you build something amazing.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/60 text-[hsl(var(--primary-foreground))] px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 cursor-pointer"
            >
              Let's Work Together
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIDo;
