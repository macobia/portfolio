
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { ChevronDown, Github, Linkedin, Mail, Code, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // const floatingVariants = {
  //   float: {
  //     y: [-20, 20, -20],
  //     x: [-10, 10, -10],
  //     rotate: [0, 180, 360],
  //     transition: {
  //       duration: 6,
  //       repeat: Infinity,
  //       ease: "easeInOut"
  //     }
  //   }
  // };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 bg-[hsl(var(--background))]  overflow-hidden">
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/5 via-[hsl(var(--accent))]/10 to-[hsl(var(--secondary))]/5" />
      
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className={`absolute ${
              i % 2 === 0 
                ? 'w-4 h-4 bg-[hsl(var(--primary))]/20 rounded-full' 
                : 'w-3 h-3 bg-[hsl(var(--accent))]/30 rotate-45'
            }`}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 180, 360],
            }}
            // variants={floatingVariants}
            // animate="float"
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
            }}
          />
        ))}
        
        {/* Code Symbols */}
        {[Code, Sparkles].map((Icon, i) => (
          <motion.div
            key={`icon-${i}`}
            className="absolute text-[hsl(var(--muted-foreground))]/20"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              delay: i * 2,
            }}
            style={{
              left: `${70 + i * 15}%`,
              top: `${30 + i * 20}%`,
            }}
          >
            <Icon className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Animated Greeting */}
          <motion.div 
            variants={itemVariants} 
            className="mb-6"
          >
            <motion.span
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block text-lg md:text-xl font-medium bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--primary))] bg-clip-text text-transparent bg-[length:200%_auto]"
            >
              👋 Hello, I'm
            </motion.span>
          </motion.div>

          {/* Enhanced Name Animation */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <motion.span
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--secondary))] bg-clip-text text-transparent bg-[length:200%_auto]"
            >
              Macben
            </motion.span>
            <br />
            <motion.span
              animate={{ 
                backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="bg-gradient-to-r from-[hsl(var(--secondary))] via-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent bg-[length:200%_auto]"
            >
              Obiakor
            </motion.span>
          </motion.h1>

          {/* Enhanced Role Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <Badge className="text-lg px-8 py-4 bg-[hsl(var(--card))]/80 backdrop-blur-sm border border-[hsl(var(--border))] hover:bg-[hsl(var(--card))] transition-colors">
              <motion.span
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--primary))] bg-clip-text text-transparent bg-[length:200%_auto]"
              >
                Software Engineer
              </motion.span>
            </Badge>
          </motion.div>

          {/* Enhanced Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-[hsl(var(--muted-foreground))] mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Turning possibilities into digital realities{' '}
            <motion.span
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="inline-block"
            >
              ⚡
            </motion.span>
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-[var(--textRev)] px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <motion.span
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  View Projects
                </motion.span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[hsl(var(--primary))]/50 text-[hsl(var(--foreground))] hover:bg-[hsl(var(--primary))]/10 px-10 py-6 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-8 mb-16"
          >
            {[
              { Icon: Github, href: "https://github.com/macobia", color: "hover:text-[hsl(var(--primary))]", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/macben-obiakor-787b44331", color: "hover:text-blue-500", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:cmacobia@gmail.com", color: "hover:text-green-500", label: "Email" }
            ].map(({ Icon, href, color, label }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -8 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 rounded-full bg-[hsl(var(--card))]/50 text-[var(--text)] backdrop-blur-sm border border-[hsl(var(--border))] ${color} transition-all duration-300 shadow-lg hover:shadow-xl`}
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-[hsl(var(--muted-foreground))] cursor-pointer"
              onClick={() => document.getElementById('bio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <motion.span 
                className="text-sm mb-3 font-medium"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Scroll to explore
              </motion.span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
