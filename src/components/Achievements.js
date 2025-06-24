import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiAward, FiStar, FiTarget } from 'react-icons/fi';
import { SiLeetcode, SiCodechef, SiCodeforces } from 'react-icons/si';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const codingProfiles = [
    {
      name: 'LeetCode',
      icon: SiLeetcode,
      rating: '2200+',
      badge: 'Guardian Badge',
      problems: '1000+',
      url: 'https://leetcode.com/u/Gurnoor_Chhabra/',
      color: 'from-orange-400 to-orange-600',
      description: 'Earned the Guardian badge with 2200+ rating'
    },
    {
      name: 'CodeChef',
      icon: SiCodechef,
      rating: '2030+',
      badge: '5⋆ Rating',
      problems: '700+',
      url: 'https://www.codechef.com/users/coderchhabra',
      color: 'from-amber-400 to-amber-600',
      description: 'Achieved 5-star rating with 2030+ points'
    },
    {
      name: 'Codeforces',
      icon: SiCodeforces,
      rating: '1600+',
      badge: 'Expert',
      problems: '700+',
      url: 'https://codeforces.com/profile/coderchhabra',
      color: 'from-blue-400 to-blue-600',
      description: 'Rated Expert, ranked in Top 1500 globally in Round 973'
    },
    {
      name: 'AtCoder',
      icon: FiTarget,
      rating: 'Coming Soon',
      badge: 'TBD',
      problems: 'TBD',
      url: '#',
      color: 'from-gray-400 to-gray-600',
      description: 'Profile will be added soon'
    }
  ];

  const achievements = [
    {
      icon: FiAward,
      title: 'Code-With-CISCO Innovation Challenge',
      description: 'Selected among the Top 25 teams nationally',
      year: '2024',
      color: 'text-yellow-500'
    },
    {
      icon: FiAward,
      title: 'Amazon ML Summer School 2024',
      description: 'Selected for the prestigious program',
      year: '2024',
      color: 'text-orange-500'
    },
    {
      icon: FiStar,
      title: 'Meta Hacker Cup T-shirt Winner',
      description: 'Ranked 1758th in Round 2',
      year: '2024',
      color: 'text-blue-500'
    },
    {
      icon: FiTarget,
      title: 'ICPC Regionalist 2024',
      description: 'Qualified for ICPC Regional Contest',
      year: '2024',
      color: 'text-purple-500'
    },
    {
      icon: FiAward,
      title: 'Branch Topper',
      description: 'Currently the branch topper with CGPA 9.38',
      year: '2025',
      color: 'text-green-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Achievements & Coding Profiles
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Showcasing my competitive programming journey and notable achievements
            </p>
          </motion.div>

          {/* Coding Profiles */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Coding Profiles
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {codingProfiles.map((profile, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  className="group cursor-pointer"
                  onClick={() => profile.url !== '#' && window.open(profile.url, '_blank')}
                >
                  <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-700 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-r ${profile.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <profile.icon className="text-white text-2xl" />
                    </div>
                    
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {profile.name}
                      </h4>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500 dark:text-gray-400">Rating:</span>
                          <span className="font-semibold text-gray-900 dark:text-white">{profile.rating}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500 dark:text-gray-400">Badge:</span>
                          <span className="font-semibold text-gray-900 dark:text-white">{profile.badge}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500 dark:text-gray-400">Problems:</span>
                          <span className="font-semibold text-gray-900 dark:text-white">{profile.problems}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                        {profile.description}
                      </p>
                      
                      {profile.url !== '#' && (
                        <div className="flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-200">
                          <span className="text-sm font-medium mr-1">Visit Profile</span>
                          <FiExternalLink size={14} />
                        </div>
                      )}
                      
                      {profile.url === '#' && (
                        <div className="text-gray-400 dark:text-gray-500 text-sm">
                          Coming Soon
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Achievements */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Notable Achievements
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-white dark:bg-dark-700 ${achievement.color}`}>
                      <achievement.icon size={24} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                          {achievement.title}
                        </h4>
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium ml-2">
                          {achievement.year}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Summary */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Competitive Programming Stats</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">2400+</div>
                  <div className="text-sm opacity-90">Total Problems Solved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">3</div>
                  <div className="text-sm opacity-90">Active Platforms</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">2200+</div>
                  <div className="text-sm opacity-90">Highest Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">5⋆</div>
                  <div className="text-sm opacity-90">CodeChef Rating</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
