import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      href: 'https://github.com/gurnoorchhabra',
      label: 'GitHub'
    },
    {
      icon: FiLinkedin,
      href: 'https://linkedin.com/in/gurnoor-chhabra',
      label: 'LinkedIn'
    },
    {
      icon: FiMail,
      href: 'mailto:chhabragurnoor@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gradient dark:dark-text-gradient mb-4">
                Gurnoor Chhabra
              </h3>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Software Engineer passionate about building scalable solutions, exploring machine learning, 
                and solving complex problems. Currently pursuing B.Tech at NIT Jalandhar.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-gray-300">
                <p>chhabragurnoor@gmail.com</p>
                <p>+91 9115113137</p>
                <p>Jalandhar, Punjab, India</p>
              </div>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download
                className="inline-block mt-4 px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-200 text-sm font-medium"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0"
            >
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FiHeart className="text-red-500" size={16} />
              </motion.div>
              <span>by Gurnoor Chhabra</span>
            </motion.div>

            <div className="flex items-center space-x-4">
              <p className="text-gray-300 text-sm">
                © {currentYear} All rights reserved.
              </p>
              
              {/* Scroll to Top Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                aria-label="Scroll to top"
              >
                <FiArrowUp size={16} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Tech Stack Credits */}
        <div className="border-t border-gray-800 py-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 text-xs"
          >
            <p>Built with React, Tailwind CSS, Framer Motion & lots of ☕</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
