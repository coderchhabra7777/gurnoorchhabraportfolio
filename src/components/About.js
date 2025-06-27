import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiUser, FiMapPin, FiBook, FiTrendingUp } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const stats = [
    { icon: FiBook, label: 'CGPA', value: '9.38/10' },
    { icon: FiTrendingUp, label: 'LeetCode Rating', value: '2200+' },
    { icon: FiUser, label: 'CodeChef Rating', value: '2030+' },
    { icon: FiMapPin, label: 'Codeforces Rating', value: '1600+' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full animate-pulse-slow"></div>
                <div className="absolute inset-2 bg-white dark:bg-dark-700 rounded-full overflow-hidden">
                  <img
                    src="/images/projects/profile.jpg"
                    alt="Gurnoor Chhabra"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      // Fallback to icon if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gray-200 dark:bg-dark-700 rounded-full items-center justify-center hidden">
                    <FiUser size={120} className="text-gray-400 dark:text-gray-500" />
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-4 right-4 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold"
              >
                NIT
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-4 left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white"
              >
                <FiTrendingUp size={20} />
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Passionate Software Engineer
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a final-year Computer Science student at NIT Jalandhar with a strong passion for 
                software development and problem-solving. With experience at top companies like Uber, 
                CRED, and Cisco, I've worked on diverse projects ranging from data pipelines to 
                full-stack applications.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My expertise spans across multiple domains including full-stack development, machine 
                learning, and competitive programming. I enjoy tackling complex challenges and building 
                scalable solutions that make a real impact.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-dark-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                        <stat.icon className="text-primary-600 dark:text-primary-400" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">{stat.value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3 mt-6"
              >
                {['Problem Solving', 'Team Leadership', 'Innovation', 'Continuous Learning'].map((trait, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
