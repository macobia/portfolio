import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const greetings = [
    { text: 'Hello', lang: 'English' },
    { text: 'Bonjour', lang: 'French' },
    { text: 'Hola', lang: 'Spanish' },
    { text: 'Hallo', lang: 'German' },
    { text: 'こんにちは', lang: 'Japanese' },
    { text: 'Ndewo', lang: 'Igbo' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < greetings.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 500);
          }, 1000);
          return prev;
        }
      });
    }, 600);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
        >
          <div className="text-center">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="text-6xl font-bold text-white mb-4"
            >
              {greetings[currentIndex]?.text}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300"
            >
              {greetings[currentIndex]?.lang}
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / greetings.length) * 100}%` }}
              transition={{ duration: 0.3 }}
              className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-8 mx-auto max-w-xs rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;