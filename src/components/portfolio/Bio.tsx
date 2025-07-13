
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';

const Bio: React.FC = () => {

  const timeline = [
    {
      year: "2020",
      title: "Computer Science Graduate",
      description: "University of Benin",
      color: "from-blue-500 to-cyan-500",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      year: "2021",
      title: "Web Development Journey",
      description: "Started learning modern web technologies",
      color: "from-green-500 to-emerald-500",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      year: "2024",
      title: "ALX Africa Program",
      description: "AI Career Essentials",
      color: "from-purple-500 to-violet-500",
      icon: <MapPin className="w-5 h-5" />
    },
    {
      year: "2024",
      title: "Blockchain Exploration",
      description: "Diving into Web3 and smart contracts",
      color: "from-orange-500 to-red-500",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      year: "2025",
      title: "AI Integration",
      description: "Building AI-powered applications",
      color: "from-pink-500 to-rose-500",
      icon: <Calendar className="w-5 h-5" />
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="py-20 relative overflow-hidden" id="about">
      
      {/* Background Elements */}
      <div className={`absolute inset-0  bg-[var(--otherBg)] `} />   {/* ${isDark ? 'bg-purple-900/10' : 'bg-purple-50'} */}
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-5xl font-bold text-center mb-16 bg-[hsl(var(--foreground))] bg-clip-text text-transparent">
          Personal Overview
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Bio Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <Card className="bg-[var(--textRev)]/100 backdrop-blur-sm border-0 shadow-2xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-[var(--text)]/100">
                      Hello, I'm Macben! 👋
                    </h3>
                    <p className="text-lg text-[var(--text)]/80  leading-relaxed mb-6">
                      I'm a passionate <strong>Full-Stack & Blockchain Developer</strong> with a Computer Science degree from the University of Benin (2020). I specialize in building real-world blockchain and web solutions that bridge traditional web development with cutting-edge decentralized technologies.
                    </p>
                    <p className="text-lg text-[var(--text)]/80 leading-relaxed">
                      My journey spans from mastering modern web frameworks to exploring the possibilities of Web3, AI integration, and creating innovative solutions that solve real problems. I believe in continuous learning and pushing the boundaries of what's possible with code.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Timeline */}
              <motion.div variants={itemVariants}>
                <Card className="bg-[var(--text)]/80 backdrop-blur-sm border-0 shadow-2xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-8 text-[var(--textRev)]/100">
                      My Tech Journey 🚀
                    </h3>
                    <div className="space-y-6">
                      {timeline.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-4"
                        >
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg`}>
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                              <h4 className="text-lg font-semibold text-[var(--textRev)]/100">
                                {item.title}
                              </h4>
                              <Badge variant="outline" className="w-fit text-[var(--textRev)]/100">
                                {item.year}
                              </Badge>
                            </div>
                            <p className="text-[var(--textRev)]/60">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Right Side - Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Main Image Container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-80 h-80 lg:h-full lg:w-full rounded-3xl bg-gradient-to-br from-purple-400 via-pink-400 to-indigo-400 p-1 shadow-2xl"
                >
                  <div className="w-full h-full rounded-3xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                    <div className="text-6xl font-bold text-gray-400 dark:text-gray-600">
                      <img src="/macben.jpg" alt="Macben's image" className='w-full h-full object-cover'/>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl">⚡</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>

                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-lg">💎</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bio;
