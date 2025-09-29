import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTelegram, 
  FaEnvelope,
  FaHeart,
  FaCode,
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTelegram, href: 'https://t.me/jdidksme', label: 'Telegram' },
    { icon: FaEnvelope, href: 'mailto:ivan@example.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Главная', href: '#home' },
    { name: 'О себе', href: '#about' },
    { name: 'Навыки', href: '#skills' },
    { name: 'Проекты', href: '#projects' },
    { name: 'Контакты', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="section" style={{ 
      position: 'relative', 
      background: 'rgba(0, 0, 0, 0.2)', 
      backdropFilter: 'blur(10px)', 
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '3rem 0'
    }}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid-4"
          style={{ marginBottom: '2rem' }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div className="gradient-text" style={{ 
                width: '3rem', 
                height: '3rem', 
                borderRadius: '0.5rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: 'white'
              }}>
                ИВ
              </div>
              <div>
                <h3 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>softintelegi</h3>
                <p className="text-gray-400" style={{ fontSize: '1rem' }}>C# & JavaScript Developer</p>
              </div>
            </div>
            <p className="text-gray-300" style={{ lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '28rem' }}>
              Создаю современные веб-приложения с использованием React, C# и JavaScript. 
              Специализируюсь на разработке пользовательских интерфейсов и backend решений.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn btn-ghost"
                  style={{ 
                    width: '2.5rem', 
                    height: '2.5rem', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '1.25rem'
                  }}
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white" style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Быстрые ссылки</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ 
                      scale: 1.05,
                      x: 5
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-ghost"
                    style={{ 
                      width: '100%',
                      textAlign: 'left',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.75rem',
                      fontSize: '1rem',
                      fontWeight: '500',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <span style={{ position: 'relative', zIndex: 2 }}>{link.name}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '0%' }}
                      transition={{ duration: 0.3 }}
                      style={{ zIndex: 1 }}
                    />
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white" style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Контакты</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <FaEnvelope className="text-blue-400" style={{ width: '1rem', height: '1rem' }} />
                <span className="text-gray-400">ivan@example.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <FaTelegram className="text-cyan-400" style={{ width: '1rem', height: '1rem' }} />
                <a href="https://t.me/jdidksme" className="text-gray-400" style={{ textDecoration: 'none' }}>@jdidksme</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <FaCode className="text-purple-400" style={{ width: '1rem', height: '1rem' }} />
                <span className="text-gray-400">Москва, Россия</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
            paddingTop: '2rem' 
          }}
        >
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <motion.p
              variants={itemVariants}
              className="text-gray-400"
              style={{ textAlign: 'center' }}
            >
              © 2024 softintelegi. Все права защищены.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              className="text-gray-400"
            >
              <span>Сделано с</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                <FaHeart />
              </motion.div>
              <span>и React</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="btn btn-primary"
        style={{ 
          position: 'fixed', 
          bottom: '2rem', 
          right: '2rem', 
          width: '3rem', 
          height: '3rem', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          zIndex: 50,
          fontSize: '1.25rem'
        }}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
};

export default Footer;
