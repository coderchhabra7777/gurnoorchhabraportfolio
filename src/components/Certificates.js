import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiAward, FiCalendar } from 'react-icons/fi';

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // You can add your actual certificates here
  const certificates = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      company: 'Amazon Web Services',
      issueDate: 'December 2023',
      credentialId: 'AWS-SAA-123456',
      verifyUrl: '#', // Add your actual certificate verification URL
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      description: 'Validates expertise in designing distributed systems on AWS',
      skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Scalability']
    },
    {
      id: 2,
      title: 'Google Cloud Professional Developer',
      company: 'Google Cloud',
      issueDate: 'November 2023',
      credentialId: 'GCP-PD-789012',
      verifyUrl: '#', // Add your actual certificate verification URL
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
      description: 'Demonstrates ability to build scalable applications on Google Cloud',
      skills: ['GCP Services', 'Kubernetes', 'DevOps', 'Microservices']
    },
    {
      id: 3,
      title: 'Microsoft Azure Fundamentals',
      company: 'Microsoft',
      issueDate: 'October 2023',
      credentialId: 'AZ-900-345678',
      verifyUrl: '#', // Add your actual certificate verification URL
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg',
      description: 'Foundational knowledge of cloud services and Microsoft Azure',
      skills: ['Azure Services', 'Cloud Concepts', 'Security', 'Compliance']
    },
    {
      id: 4,
      title: 'Docker Certified Associate',
      company: 'Docker',
      issueDate: 'September 2023',
      credentialId: 'DCA-901234',
      verifyUrl: '#', // Add your actual certificate verification URL
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
      description: 'Validates skills in containerization and Docker technologies',
      skills: ['Containerization', 'Docker', 'DevOps', 'Orchestration']
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications & Credentials
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professional certifications that validate my expertise and commitment to continuous learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-dark-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-dark-700"
              >
                {/* Certificate Header */}
                <div className="p-6 border-b border-gray-200 dark:border-dark-700">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white rounded-lg p-2 shadow-sm flex items-center justify-center">
                        <img
                          src={cert.logo}
                          alt={`${cert.company} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-full bg-gradient-to-br from-primary-500 to-purple-500 rounded-lg items-center justify-center text-white font-bold text-xl hidden">
                          {cert.company.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {cert.title}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-semibold">
                          {cert.company}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg"
                    >
                      <FiAward className="text-primary-600 dark:text-primary-400" size={20} />
                    </motion.div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Certificate Body */}
                <div className="p-6">
                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Key Skills Validated
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <FiCalendar className="mr-2" size={16} />
                      <span>Issued: {cert.issueDate}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <FiAward className="mr-2" size={16} />
                      <span>Credential ID: {cert.credentialId}</span>
                    </div>
                  </div>

                  {/* Verify Button */}
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-purple-700 transition-all duration-200"
                  >
                    <FiExternalLink size={16} />
                    Verify Certificate
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="bg-white dark:bg-dark-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-dark-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                I believe in staying current with the latest technologies and best practices. 
                These certifications represent my commitment to professional development and expertise validation.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <FiAward size={16} />
                  {certificates.length} Certifications
                </span>
                <span>•</span>
                <span>Industry Recognized</span>
                <span>•</span>
                <span>Verified Credentials</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
