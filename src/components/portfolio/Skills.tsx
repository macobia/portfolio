
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import {
  Code,
  Server,
  Blocks,
  Brain,
  Wrench,
  Database,
  GitBranch,
  Terminal,
  Cloud,
  KeyRound,
  // File,
  Activity,
  Github,
  // Chrome,
  Figma,
  LayoutDashboard,
  Shield,
  Zap,
} from 'lucide-react';

const Skills: React.FC = () => {

const iconMap: Record<string, React.ReactNode> = {
  'React.js': <Code className="w-4 h-4" />,
  TypeScript: <Code className="w-4 h-4" />,
  'Tailwind CSS': <LayoutDashboard className="w-4 h-4" />,
  Zustand: <Activity className="w-4 h-4" />,
  Axios: <Zap className="w-4 h-4" />,
  'Framer Motion': <Zap className="w-4 h-4" />,
  'Node.js': <Terminal className="w-4 h-4" />,
  'Express.js': <Terminal className="w-4 h-4" />,
  MongoDB: <Database className="w-4 h-4" />,
  PostgreSQL: <Database className="w-4 h-4" />,
  Sequelize: <Database className="w-4 h-4" />,
  Redis: <Database className="w-4 h-4" />,
  JWT: <KeyRound className="w-4 h-4" />,
  Solidity: <Code className="w-4 h-4" />,
  Rust: <Code className="w-4 h-4" />,
  Sui: <Code className="w-4 h-4" />,
  'Web3.js': <GitBranch className="w-4 h-4" />,
  'Ethers.js': <GitBranch className="w-4 h-4" />,
  'TensorFlow.js': <Brain className="w-4 h-4" />,
  MediaPipe: <Brain className="w-4 h-4" />,
  'Pose Detection': <Brain className="w-4 h-4" />,
  Git: <GitBranch className="w-4 h-4" />,
  GitHub: <Github className="w-4 h-4" />,
  Postman: <Shield className="w-4 h-4" />,
  Docker: <Cloud className="w-4 h-4" />,
  Vercel: <Cloud className="w-4 h-4" />,
  Railway: <Cloud className="w-4 h-4" />,
  Netlify: <Cloud className="w-4 h-4" />,
  Figma: <Figma className="w-4 h-4" />,
}
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-6 h-6" />,
      skills: ["React.js", "TypeScript", "Tailwind CSS", "Zustand", "Axios", "Framer Motion"],
      color: "from-blue-600 to-blue-800",
      bgColor: "from-blue-600/10 to-blue-800/10"
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Sequelize", "Redis", "JWT"],
      color: "from-slate-600 to-slate-800",
      bgColor: "from-slate-600/10 to-slate-800/10"
    },
    {
      title: "Blockchain",
      icon: <Blocks className="w-6 h-6" />,
      skills: ["Solidity", "Rust", "Sui", "Web3.js", "Ethers.js"],
      color: "from-indigo-600 to-indigo-800",
      bgColor: "from-indigo-600/10 to-indigo-800/10"
    },
    {
      title: "AI/ML",
      icon: <Brain className="w-6 h-6" />,
      skills: ["TensorFlow.js", "MediaPipe", "Pose Detection"],
      color: "from-gray-600 to-gray-800",
      bgColor: "from-gray-600/10 to-gray-800/10"
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "GitHub", "Postman", "Docker", "Vercel", "Railway", "Netlify", "Figma"],
      color: "from-emerald-600 to-emerald-800",
      bgColor: "from-emerald-600/10 to-emerald-800/10"
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 relative overflow-hidden" id="skills">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--otherBg)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-[hsl(var(--foreground))] bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
              A comprehensive toolkit I use in building modern web app and blockchain applications
            </p>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                transition={{ 
                  duration: 0.6,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="h-full"
              >
                <Card className="h-full bg-[var(--textRev)]/100 backdrop-blur-sm border border-[hsl(var(--border))] shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className={`w-full h-2 bg-gradient-to-r ${category.color} rounded-full mb-6 group-hover:h-3 transition-all duration-300`}></div>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={`bg-gradient-to-r ${category.color} bg-clip-text  text-[var(--text)]/100`}>
                        {category.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-[hsl(var(--foreground))]">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            delay: skillIndex * 0.1,
                            duration: 0.3 
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {/* <Badge 
                            variant="secondary" 
                            className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                          >
                            {skill}
                          </Badge> */}
                           <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-[var(--button)] text-[hsl(var(--muted-foreground))]  hover:text-[hsl(var(--foreground))] transition-colors cursor-pointer"
                        >
                          {iconMap[skill] || '🛠️'}
                          <span>{skill}</span>
                        </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating Tech Icons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-4xl opacity-5 dark:opacity-10"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                  rotate: [0, 360, 0],
                }}
                transition={{
                  duration: 20 + i * 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${20 + i * 8}%`,
                }}
              >
                {['⚛️', '🔧', '🚀', '💎', '🔗', '🧠', '⚡', '🎨'][i]}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
