// import React from 'react';
// import { motion } from 'framer-motion';
// import { useTheme } from '../../contexts/ThemeContext';
// import { Sun, Moon } from 'lucide-react';

// const ThemeToggle = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <motion.button
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       onClick={toggleTheme}
//       className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
//     >
//       <motion.div
//         initial={false}
//         animate={{ rotate: theme === 'dark' ? 0 : 180 }}
//         transition={{ duration: 0.3 }}
//       >
//         {theme === 'dark' ? (
//           <Sun className="w-6 h-6 text-yellow-400" />
//         ) : (
//           <Moon className="w-6 h-6 text-purple-400" />
//         )}
//       </motion.div>
//     </motion.button>
//   );
// };

// export default ThemeToggle;
