import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaCode, FaLaptopCode } from 'react-icons/fa';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    'C# Разработчик',
    'JavaScript Разработчик',
    'React Разработчик',
    'Веб Разработчик',
    'Full Stack Разработчик'
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === texts[textIndex]) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      } else {
        setCurrentText(
          isDeleting
            ? texts[textIndex].substring(0, currentText.length - 1)
            : texts[textIndex].substring(0, currentText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, textIndex, texts]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <section id="home" className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background Elements */}
      <div style={{ position: 'absolute', inset: '0', overflow: 'hidden' }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="text-white"
            style={{
              position: 'absolute',
              width: '8px',
              height: '8px',
              backgroundColor: 'white',
              borderRadius: '50%',
              opacity: 0.2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container text-center"
        style={{ position: 'relative', zIndex: 10 }}
      >
        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          style={{ marginBottom: '2rem', position: 'relative', display: 'inline-block' }}
        >
          <motion.div
            variants={floatingVariants}
            animate="float"
            style={{ position: 'relative' }}
          >
            <div className="gradient-text" style={{ 
              width: '128px', 
              height: '128px', 
              margin: '0 auto', 
              borderRadius: '50%', 
              padding: '4px',
              background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 50%, #ff6b6b 100%)'
            }}>
              <div style={{ 
                width: '100%', 
                height: '100%', 
                borderRadius: '50%', 
                backgroundColor: '#1f2937', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <FaCode className="text-white" style={{ fontSize: '2.5rem' }} />
              </div>
            </div>
            <motion.div
              style={{ 
                position: 'absolute', 
                top: '-8px', 
                right: '-8px', 
                width: '32px', 
                height: '32px', 
                backgroundColor: '#10b981', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div style={{ width: '12px', height: '12px', backgroundColor: 'white', borderRadius: '50%' }}></div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.h1
          variants={itemVariants}
          className="text-white"
          style={{ 
            fontSize: 'clamp(2rem, 8vw, 3.5rem)', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}
        >
          Привет, я{' '}
          <span className="gradient-text">softintelegi</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-blue-500"
          style={{ 
            fontSize: 'clamp(1.2rem, 5vw, 2rem)', 
            marginBottom: '2rem', 
            height: 'clamp(40px, 8vw, 48px)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}
        >
          <span style={{ borderRight: '2px solid white', paddingRight: '0.5rem' }}>
            {currentText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-white"
            >
              |
            </motion.span>
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-gray-300"
          style={{ 
            fontSize: 'clamp(1rem, 3vw, 1.125rem)', 
            marginBottom: '3rem', 
            maxWidth: '32rem', 
            margin: '0 auto 3rem auto', 
            lineHeight: '1.6',
            padding: '0 1rem'
          }}
        >
          Создаю современные веб-приложения с использованием React, C# и JavaScript. 
          Специализируюсь на разработке пользовательских интерфейсов и backend решений.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1rem', 
            justifyContent: 'center', 
            alignItems: 'center', 
            marginBottom: '3rem',
            padding: '0 1rem'
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <FaDownload style={{ width: '20px', height: '20px' }} />
            <span>Скачать CV</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-secondary"
          >
            Связаться со мной
          </motion.button>
        </motion.div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white"
          style={{ 
            width: '24px', 
            height: '40px', 
            border: '2px solid white', 
            borderRadius: '12px', 
            display: 'flex', 
            justifyContent: 'center' 
          }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white"
            style={{ 
              width: '4px', 
              height: '12px', 
              backgroundColor: 'white', 
              borderRadius: '2px', 
              marginTop: '8px' 
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
