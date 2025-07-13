import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

const Projects :React.FC = () => {
  const projects = [
    {
      title: "Dance Pose AI",
      description: "AI-powered dance pose detection and real-time feedback application using MediaPipe and TensorFlow.js",
      image: "/src/assets/screenshot2.jpg",
      techStack: ["React", "TypeScript", "TensorFlow.js", "MediaPipe", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
      category: "AI/ML"
    },
    // {
    //   title: "DeFi Trading Platform",
    //   description: "Decentralized trading platform with smart contract integration and real-time market data",
    //   image: "/placeholder.svg",
    //   techStack: ["React", "Solidity", "Web3.js", "Node.js", "MongoDB"],
    //   liveLink: "#",
    //   githubLink: "#",
    //   category: "Blockchain"
    // },
    {
      title: "E-Commerce API",
      description: "RESTful API for e-commerce platform with authentication, payment processing, and inventory management",
      image: "/placeholder.svg",
      techStack: ["Node.js", "Express", "MongoDB", "JWT", "Flutterwave"],
      liveLink: "#",
      githubLink: "#",
      category: "Backend"
    },
    {
      title: "Portfolio Dashboard",
      description: "Modern dashboard for managing personal portfolio",   //TODO with real-time analytics and data visualization
      image: "/src/assets/screenshot3.jpg",
      techStack: ["React", "TypeScript", "Recharts", "Zustand", "Tailwind"],
      liveLink: "#",
      githubLink: "#",
      category: "Frontend"
    },
    {
      title: "Dance Academy Website",
      description: "A visually rich and interactive website for a dance academy featuring performance videos, event bookings, User Dashboards, shareable content, and admin CMS integration.",
      image: "/src/assets/screenshot1.png", 
      techStack: ["React", "TypeScript", "Tailwind", "Node.js", "MongoDB", "Framer Motion"],
      liveLink: "#",
      githubLink: "#",
      category: "Full-Stack"
    },
    {
      title: "Chief-Store",
      description: "A modern e-commerce platform built with a responsive UI, secure payment integration (Flutterwave), admin order management, and real-time order status tracking.",
      image: "/src/assets/screenshot4.jpg",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Zustand", "Flutterwave"],
      liveLink: "https://chief-store.vercel.app/",
      githubLink: "https://github.com/macobia/chief-store",
      category: "Full-Stack"
    },
    {
      title: "Discord Bot (Custom Bot)",
      description: "A multipurpose Discord bot with automated moderation, fun commands, and custom prefix handling, built using Discord.js.",
      image: "/src/assets/discord-bot.jpg",
      techStack: ["Node.js", "Discord.js"],
      liveLink: "#",
      githubLink: "https://github.com/macobia/discord-bot",
      category: "Backend"
    }
    
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-[hsl(var(--background))] transition-colors duration-300" id="projects">
    <div className="container mx-auto px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-[hsl(var(--foreground))]"
        >
          Featured Projects
        </motion.h2>

        <motion.p
 
          className="text-xl text-center text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto  mb-12"
        >
          A curated selection of some of my recent work, showcasing my skills in web development, design, and problem-solving. These projects span various domains including e-commerce, education, and automation.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-[hsl(var(--card))]/80 backdrop-blur-sm border border-[hsl(var(--border))] shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="hidden md:block lg:w-full lg:h-48 object-top rounded-t-lg bg-gradient-to-br from-[hsl(var(--primary))]/10 to-[hsl(var(--secondary))]/10"
                  />
                  <Badge className="absolute top-4 right-4 bg-[hsl(var(--card))]/90 backdrop-blur-sm text-[hsl(var(--foreground))] border border-[hsl(var(--border))]">
                    {project.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-[hsl(var(--foreground))]">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary))]/50 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      size="sm" 
                      className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-[hsl(var(--primary-foreground))] shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                    >
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--foreground))] transition-colors cursor-pointer">
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
};

export default Projects;

