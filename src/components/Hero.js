import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = [
    'Software Engineer',
    'Full Stack Developer',
    'ML Enthusiast',
    'Competitive Programmer'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Light Theme Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 dark:hidden">
        {/* Animated gradient overlay for light theme */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(236, 72, 153, 0.4), rgba(168, 85, 247, 0.4), rgba(34, 211, 238, 0.4))",
              "linear-gradient(90deg, rgba(34, 211, 238, 0.4), rgba(236, 72, 153, 0.4), rgba(168, 85, 247, 0.4))",
              "linear-gradient(135deg, rgba(168, 85, 247, 0.4), rgba(34, 211, 238, 0.4), rgba(236, 72, 153, 0.4))",
              "linear-gradient(45deg, rgba(236, 72, 153, 0.4), rgba(168, 85, 247, 0.4), rgba(34, 211, 238, 0.4))"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Moving gradient orbs for light theme */}
        <motion.div
          animate={{
            x: [0, 200, -100, 0],
            y: [0, -150, 100, 0],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-pink-300 to-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60"
        />
        
        <motion.div
          animate={{
            x: [0, -150, 200, 0],
            y: [0, 200, -100, 0],
            scale: [1, 0.7, 1.4, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70"
        />
        
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 150, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50"
        />

        {/* Floating particles for light theme */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              x: [0, Math.random() * 400 - 200, Math.random() * 300 - 150, 0],
              y: [0, Math.random() * 400 - 200, Math.random() * 300 - 150, 0],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.8, 0.3, 0.2],
              scale: [0.5, 1.2, 0.8, 0.5],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <div className={`w-3 h-3 ${i % 4 === 0 ? 'bg-pink-400' : i % 4 === 1 ? 'bg-blue-400' : i % 4 === 2 ? 'bg-purple-400' : 'bg-cyan-400'} ${i % 2 === 0 ? 'rounded-full' : 'rotate-45'} opacity-70`} />
          </motion.div>
        ))}
      </div>

      {/* Dark Theme Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 hidden dark:block">
        {/* Animated gradient overlay for dark theme */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(236, 72, 153, 0.3), rgba(168, 85, 247, 0.3), rgba(34, 211, 238, 0.3))",
              "linear-gradient(90deg, rgba(34, 211, 238, 0.3), rgba(236, 72, 153, 0.3), rgba(168, 85, 247, 0.3))",
              "linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(34, 211, 238, 0.3), rgba(236, 72, 153, 0.3))",
              "linear-gradient(180deg, rgba(236, 72, 153, 0.3), rgba(168, 85, 247, 0.3), rgba(34, 211, 238, 0.3))",
              "linear-gradient(225deg, rgba(34, 211, 238, 0.3), rgba(236, 72, 153, 0.3), rgba(168, 85, 247, 0.3))",
              "linear-gradient(45deg, rgba(236, 72, 153, 0.3), rgba(168, 85, 247, 0.3), rgba(34, 211, 238, 0.3))"
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Moving gradient orbs for dark theme */}
        <motion.div
          animate={{
            x: [0, 250, -150, 100, 0],
            y: [0, -200, 150, -50, 0],
            scale: [1, 1.5, 0.7, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-40"
        />
        
        <motion.div
          animate={{
            x: [0, -200, 300, -100, 0],
            y: [0, 250, -150, 200, 0],
            scale: [1, 0.6, 1.6, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-50"
        />
        
        <motion.div
          animate={{
            x: [0, 150, -200, 50, 0],
            y: [0, -100, 200, -150, 0],
            scale: [1, 1.3, 0.8, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-35"
        />

        {/* Floating particles for dark theme */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              x: [0, Math.random() * 500 - 250, Math.random() * 400 - 200, Math.random() * 300 - 150, 0],
              y: [0, Math.random() * 500 - 250, Math.random() * 400 - 200, Math.random() * 300 - 150, 0],
              rotate: [0, 120, 240, 360],
              opacity: [0.1, 0.9, 0.4, 0.7, 0.1],
              scale: [0.3, 1.5, 0.6, 1.1, 0.3],
            }}
            transition={{
              duration: Math.random() * 25 + 20,
              repeat: Infinity,
              delay: Math.random() * 15,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <div className={`w-2 h-2 ${i % 5 === 0 ? 'bg-white' : i % 5 === 1 ? 'bg-yellow-300' : i % 5 === 2 ? 'bg-pink-300' : i % 5 === 3 ? 'bg-cyan-300' : 'bg-purple-300'} ${i % 3 === 0 ? 'rounded-full' : i % 3 === 1 ? 'rotate-45' : 'rounded-sm'} opacity-80`} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-800 dark:text-white"
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <motion.h2 
              className="text-lg sm:text-xl font-medium mb-2 text-purple-600 dark:text-cyan-300"
              animate={{
                textShadow: [
                  "0 0 10px rgba(147, 51, 234, 0.5)",
                  "0 0 20px rgba(147, 51, 234, 0.8)",
                  "0 0 30px rgba(147, 51, 234, 0.5)",
                  "0 0 20px rgba(147, 51, 234, 0.8)",
                  "0 0 10px rgba(147, 51, 234, 0.5)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Hello, I'm
            </motion.h2>
            
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-purple-600 to-blue-600 dark:from-white dark:via-cyan-200 dark:to-purple-200 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              Gurnoor Chhabra
            </motion.h1>
            
            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold h-12 flex items-center justify-center">
              <motion.span 
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 dark:from-yellow-300 dark:via-pink-300 dark:to-cyan-300 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                {displayText}
                <motion.span 
                  className="text-gray-800 dark:text-white"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  |
                </motion.span>
              </motion.span>
            </div>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 text-gray-700 dark:text-gray-200 leading-relaxed"
          >
            Passionate about building scalable solutions, exploring machine learning, 
            and solving complex problems. Currently pursuing B.Tech in Computer Science 
            at NIT Jalandhar with a CGPA of 9.38.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(34, 211, 238, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              View My Work
            </motion.button>
            
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(236, 72, 153, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="px-8 py-3 border-2 border-pink-400 dark:border-pink-300 text-pink-600 dark:text-pink-300 rounded-lg font-semibold hover:bg-pink-400 hover:text-white dark:hover:bg-pink-300 dark:hover:text-gray-900 transition-all duration-300 flex items-center gap-2"
            >
              <FiDownload size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-6"
          >
            <motion.a
              whileHover={{ 
                scale: 1.2, 
                rotate: 5,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)"
              }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/gurnoorchhabra"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <FiGithub size={24} />
            </motion.a>
            
            <motion.a
              whileHover={{ 
                scale: 1.2, 
                rotate: -5,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/gurnoor-chhabra"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-blue-500/30 transition-all duration-300 border border-white/20"
            >
              <FiLinkedin size={24} />
            </motion.a>
            
            <motion.a
              whileHover={{ 
                scale: 1.2, 
                rotate: 5,
                boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)"
              }}
              whileTap={{ scale: 0.9 }}
              href="mailto:chhabragurnoor@gmail.com"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-green-500/30 transition-all duration-300 border border-white/20"
            >
              <FiMail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              boxShadow: [
                "0 0 10px rgba(34, 211, 238, 0.3)",
                "0 0 20px rgba(34, 211, 238, 0.6)",
                "0 0 10px rgba(34, 211, 238, 0.3)"
              ]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
            }}
            className="text-cyan-300 cursor-pointer p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
          >
            <FiArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
