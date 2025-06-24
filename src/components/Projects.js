import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiX, FiCode, FiEye } from 'react-icons/fi';
import { SiReact, SiPython, SiJavascript, SiNodedotjs, SiMongodb, SiTensorflow, SiGo } from 'react-icons/si';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Oral Cancer Detector',
      category: 'ML/DL Project',
      description: 'Built a deep learning model using VGG19 and Adam optimizer to detect oral cancer from smartphone images.',
      image: '/images/projects/oral-cancer-detector.jpg',
      longDescription: 'Developed a comprehensive deep learning solution for early detection of oral cancer using smartphone images. The project leverages transfer learning with VGG19 architecture and Adam optimizer to achieve high accuracy in classification. The model was trained on a diverse dataset and optimized for real-world deployment.',
      technologies: ['Python', 'TensorFlow', 'VGG19', 'OpenCV', 'NumPy'],
      features: [
        'High accuracy classification using transfer learning',
        'Efficient model tuning and optimization',
        'Real-time image processing capabilities',
        'User-friendly interface for medical professionals'
      ],
      github: 'https://github.com/gurnoorchhabra/oral-cancer-detector',
      demo: '#',
      status: 'Completed',
      impact: 'Achieved 95%+ accuracy in oral cancer detection'
    },
    {
      id: 2,
      title: 'Jobify',
      category: 'Full Stack Project',
      description: 'Designed and developed a platform for users to track progress on job applications in one unified dashboard.',
      image: '/images/projects/jobify.jpg',
      longDescription: 'A comprehensive job application tracking platform that helps job seekers organize and monitor their application process. Features include application status tracking, interview scheduling, company research tools, and analytics dashboard to provide insights into job search progress.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      features: [
        'Unified dashboard for job application tracking',
        'Real-time status updates and notifications',
        'Analytics and insights on application progress',
        'Company research and job market analysis',
        'Interview scheduling and reminder system'
      ],
      github: 'https://github.com/gurnoorchhabra/jobify',
      demo: 'https://jobify-demo.netlify.app',
      status: 'Completed',
      impact: 'Streamlined job search process for 100+ users'
    },
    {
      id: 3,
      title: 'SPYx',
      category: 'Steganography Project',
      description: 'Engineered a secure image-hiding system using a hybrid of Interpolation, AES Encryption, and compression algorithms.',
      image: '/images/projects/SPYx.png',
      longDescription: 'Advanced steganography application that combines multiple security layers to hide sensitive information within images. The system uses interpolation techniques, AES encryption, and compression algorithms to ensure both security and efficiency in data hiding.',
      technologies: ['Python', 'AES Encryption', 'OpenCV', 'NumPy', 'Cryptography'],
      features: [
        'Multi-layer security with AES encryption',
        'Advanced interpolation techniques',
        'Lossless compression algorithms',
        'Undetectable data hiding',
        'User-friendly encryption/decryption interface'
      ],
      github: 'https://github.com/coderchhabra7777/SPYx',
      demo: '#',
      status: 'Completed',
      impact: 'Achieved 99.9% data hiding success rate'
    },
    {
      id: 4,
      title: 'CipherWars (Code with Cisco)',
      category: 'Optimization Project',
      description: 'Re-engineered Access Line Tablet to reduce space complexity significantly.',
      image: '/images/projects/cipherwars.jpg',
      longDescription: 'Optimization project developed during the Code with Cisco innovation challenge. Transformed a visual matrix model into a tree-based structure for constant-time retrieval of information, significantly reducing space complexity and improving performance.',
      technologies: ['Python', 'Data Structures', 'Algorithms', 'Tree Structures'],
      features: [
        'Significant space complexity reduction',
        'Constant-time information retrieval',
        'Tree-based data structure implementation',
        'Performance optimization techniques',
        'Scalable architecture design'
      ],
      github: 'https://github.com/gurnoorchhabra/cipherwars',
      demo: '#',
      status: 'Completed',
      impact: 'Selected among Top 25 teams nationally'
    },
    {
      id: 5,
      title: 'NXTBlogger',
      category: 'Full Stack Website',
      description: 'Developed a complete blogging platform supporting blog creation, viewing, and reactions.',
      image: '/images/projects/nxtblogger.jpg',
      longDescription: 'A modern, feature-rich blogging platform built with cutting-edge web technologies. Supports markdown editing, real-time comments, user authentication, blog categorization, and social features like likes and shares.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
      features: [
        'Rich text editor with markdown support',
        'Real-time commenting system',
        'User authentication and profiles',
        'Blog categorization and tagging',
        'Social features (likes, shares, follows)',
        'Responsive design for all devices'
      ],
      github: 'https://github.com/gurnoorchhabra/nxtblogger',
      demo: 'https://nxtblogger-demo.netlify.app',
      status: 'Completed',
      impact: 'Supports 500+ active bloggers'
    },
    {
      id: 6,
      title: 'Data Pipeline Optimization',
      category: 'Backend Project',
      description: 'Built scalable data pipelines using Airflow and Kafka for real-time data processing.',
      image: '/images/projects/data-pipeline.jpg',
      longDescription: 'Enterprise-grade data pipeline solution developed during internship at Cisco. Handles massive datasets with real-time processing capabilities, featuring automated scheduling, monitoring, and error handling.',
      technologies: ['Python', 'Apache Airflow', 'Apache Kafka', 'MongoDB', 'PostgreSQL'],
      features: [
        'Real-time data processing',
        'Automated scheduling and monitoring',
        'Error handling and recovery',
        'Scalable architecture',
        'Performance optimization'
      ],
      github: '#',
      demo: '#',
      status: 'Professional Project',
      impact: 'Processed 30M+ records in under 2 hours'
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

  const getTechIcon = (tech) => {
    const icons = {
      'React': SiReact,
      'Python': SiPython,
      'JavaScript': SiJavascript,
      'Node.js': SiNodedotjs,
      'MongoDB': SiMongodb,
      'TensorFlow': SiTensorflow,
      'Go': SiGo
    };
    return icons[tech] || FiCode;
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of my technical projects spanning full-stack development, machine learning, and system optimization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to gradient background if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-500 items-center justify-center hidden">
                    <FiCode className="text-white text-6xl opacity-50" />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => {
                      const IconComponent = getTechIcon(tech);
                      return (
                        <div key={techIndex} className="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-dark-600 rounded text-xs">
                          <IconComponent className="text-primary-600 dark:text-primary-400" size={12} />
                          <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                        </div>
                      );
                    })}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-dark-600 rounded text-xs text-gray-700 dark:text-gray-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {project.github !== '#' && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 dark:bg-dark-600 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-500 transition-colors duration-200"
                        >
                          <FiGithub className="text-gray-700 dark:text-gray-300" size={16} />
                        </motion.a>
                      )}
                      
                      {project.demo !== '#' && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 dark:bg-dark-600 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-500 transition-colors duration-200"
                        >
                          <FiExternalLink className="text-gray-700 dark:text-gray-300" size={16} />
                        </motion.a>
                      )}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 flex items-center gap-1"
                    >
                      <FiEye size={14} />
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-dark-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-dark-700">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {selectedProject.category}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg transition-colors duration-200"
                >
                  <FiX className="text-gray-500 dark:text-gray-400" size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => {
                      const IconComponent = getTechIcon(tech);
                      return (
                        <div key={index} className="flex items-center gap-2 px-3 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-lg">
                          <IconComponent size={16} />
                          <span className="font-medium">{tech}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Impact & Results
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
                    {selectedProject.impact}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {selectedProject.github !== '#' && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <FiGithub size={20} />
                      View Code
                    </motion.a>
                  )}
                  
                  {selectedProject.demo !== '#' && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                    >
                      <FiExternalLink size={20} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
