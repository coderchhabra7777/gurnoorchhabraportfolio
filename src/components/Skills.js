import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiJavascript, SiPython, SiReact, SiNodedotjs, SiGo, SiCplusplus,
  SiTensorflow, SiPytorch, SiMongodb, SiPostgresql, SiDocker,
  SiAmazonaws, SiGit, SiLinux, SiVuedotjs, SiDjango, SiExpress
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C++', icon: SiCplusplus, level: 95, color: 'text-blue-600' },
        { name: 'Python', icon: SiPython, level: 90, color: 'text-yellow-500' },
        { name: 'JavaScript', icon: SiJavascript, level: 88, color: 'text-yellow-400' },
        { name: 'Go', icon: SiGo, level: 85, color: 'text-cyan-500' },
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React', icon: SiReact, level: 92, color: 'text-blue-400' },
        { name: 'Vue.js', icon: SiVuedotjs, level: 85, color: 'text-green-500' },
        { name: 'Node.js', icon: SiNodedotjs, level: 88, color: 'text-green-600' },
        { name: 'Express', icon: SiExpress, level: 85, color: 'text-gray-600' },
        { name: 'Django', icon: SiDjango, level: 80, color: 'text-green-700' },
      ]
    },
    {
      title: 'Machine Learning',
      skills: [
        { name: 'TensorFlow', icon: SiTensorflow, level: 85, color: 'text-orange-500' },
        { name: 'PyTorch', icon: SiPytorch, level: 82, color: 'text-red-500' },
      ]
    },
    {
      title: 'Databases & Tools',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, level: 88, color: 'text-green-500' },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 85, color: 'text-blue-700' },
        { name: 'Docker', icon: SiDocker, level: 80, color: 'text-blue-500' },
        { name: 'AWS', icon: SiAmazonaws, level: 75, color: 'text-orange-400' },
        { name: 'Git', icon: SiGit, level: 90, color: 'text-red-600' },
        { name: 'Linux', icon: SiLinux, level: 85, color: 'text-yellow-600' },
      ]
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

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise across various domains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <skill.icon className={`${skill.color} text-xl group-hover:scale-110 transition-transform duration-200`} />
                          <span className="font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          variants={skillVariants}
                          custom={skill.level}
                          className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full skill-bar"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Additional Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Data Structures & Algorithms',
                'System Design',
                'API Development',
                'Microservices',
                'Apache Kafka',
                'Apache Airflow',
                'Apache Velocity',
                'Competitive Programming',
                'Problem Solving',
                'Team Collaboration'
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium cursor-default shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
