import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiMapPin, FiArrowRight, FiFileText, FiExternalLink } from 'react-icons/fi';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'Uber',
      role: 'Software Engineering Intern',
      location: 'Bengaluru, India',
      duration: 'January 2025 – Present',
      description: 'Developed the User Insights Tab in the internal XP Hub tool to help data scientists analyze how and when users are exposed to experiments. Optimized the experiment data backfilling pipeline, significantly improving efficiency and reducing overall ETA.',
      technologies: ['Go', 'React.js'],
      current: true,
      experienceLetter: '/experience-letters/uber-experience-letter.pdf' // Add your actual file path
    },
    {
      company: 'CRED',
      role: 'Software Engineering Intern',
      location: 'Bengaluru, India',
      duration: 'August 2024 – December 2024',
      description: 'Introduced vernacular language support across all loan documentation workflows. Built a Go-based service to generate PDF documents without rendering inconsistencies using Apache Velocity templates.',
      technologies: ['Go', 'Java', 'MySQL', 'Apache Velocity'],
      current: false,
      experienceLetter: '/experience-letters/cred-experience-letter.pdf' // Add your actual file path
    },
    {
      company: 'Cisco',
      role: 'Technical Intern 1',
      location: 'Bengaluru, India',
      duration: 'June 2024 – July 2024',
      description: 'Overcame Athena\'s limitations to extract over 30 million records in under 2 hours. Developed an optimized Python script to transform deeply nested 30M+ records into the desired schema and ingest into MongoDB within 1.5 hours. Built a scalable data pipeline using Airflow and Kafka for scheduling, monitoring, and ingestion.',
      technologies: ['Python', 'MongoDB', 'PostgreSQL', 'Athena', 'Airflow', 'Kafka'],
      current: false,
      experienceLetter: '/experience-letters/cisco-experience-letter.pdf' // Add your actual file path
    }
  ];

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My journey through top-tier companies, building impactful solutions and gaining valuable experience
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-purple-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark-800 z-10">
                    {exp.current && (
                      <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-16 md:ml-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {exp.role}
                          </h3>
                          <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                            {exp.company}
                          </h4>
                        </div>
                        {exp.current && (
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <FiCalendar size={14} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FiMapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Experience Letter Button */}
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={exp.experienceLetter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-purple-600 text-white font-medium rounded-lg hover:from-primary-600 hover:to-purple-700 transition-all duration-200 text-sm"
                      >
                        <FiFileText size={16} />
                        View Experience Letter
                        <FiExternalLink size={14} />
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Education
            </h3>
            
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white dark:bg-dark-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    B.Tech in Computer Science and Engineering
                  </h4>
                  <h5 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">
                    Dr. B.R. Ambedkar National Institute of Technology Jalandhar
                  </h5>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    9.38/10
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">CGPA</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <FiCalendar size={14} />
                  <span>October 2021 – June 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiMapPin size={14} />
                  <span>Jalandhar, Punjab, India</span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                <strong>Coursework:</strong> Data Structures & Algorithms, AI/ML, Operating System, Object-Oriented Programming
              </p>

              <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium">
                <span>Currently the branch topper</span>
                <FiArrowRight className="ml-2" size={16} />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
