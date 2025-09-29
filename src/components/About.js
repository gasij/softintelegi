import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaRocket, FaUsers, FaLightbulb, FaCog } from 'react-icons/fa';

const About = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  const stats = [
    { number: '3+', label: 'Года опыта', icon: FaCode },
    { number: '50+', label: 'Проектов', icon: FaLaptopCode },
    { number: '100%', label: 'Довольных клиентов', icon: FaUsers },
    { number: '24/7', label: 'Поддержка', icon: FaCog }
  ];

  const features = [
    {
      icon: FaCode,
      title: 'C# Разработка',
      description: 'Создание backend приложений, API, микросервисов на .NET Core'
    },
    {
      icon: FaLaptopCode,
      title: 'Frontend Разработка',
      description: 'Современные пользовательские интерфейсы на React, JavaScript'
    },
    {
      icon: FaRocket,
      title: 'Полный цикл',
      description: 'От идеи до запуска - полная разработка веб-приложений'
    },
    {
      icon: FaLightbulb,
      title: 'Инновации',
      description: 'Использование современных технологий и лучших практик'
    }
  ];

  return (
    <section id="about" className="section" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
          style={{ marginBottom: '4rem' }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-white"
            style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}
          >
            О <span className="gradient-text">себе</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-300"
            style={{ fontSize: '1.25rem', maxWidth: '48rem', margin: '0 auto' }}
          >
            Я увлеченный разработчик с опытом создания современных веб-приложений
          </motion.p>
        </motion.div>

        <div className="grid-2" style={{ marginBottom: '5rem' }}>
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <motion.div
              variants={itemVariants}
              className="card"
            >
              <h3 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Мой путь в разработке</h3>
              <p className="text-gray-300" style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Начал свой путь в программировании с изучения C# и .NET Framework. 
                Постепенно расширил свои навыки до веб-разработки, изучив JavaScript, 
                React и современные инструменты разработки.
              </p>
              <p className="text-gray-300" style={{ lineHeight: '1.6' }}>
                Сейчас я специализируюсь на создании полнофункциональных веб-приложений, 
                от проектирования архитектуры до развертывания в продакшн.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="card"
            >
              <h3 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Мои принципы</h3>
              <ul className="text-gray-300" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="text-red-500" style={{ width: '8px', height: '8px', borderRadius: '50%' }}></div>
                  <span>Чистый и читаемый код</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="text-red-500" style={{ width: '8px', height: '8px', borderRadius: '50%' }}></div>
                  <span>Постоянное обучение и развитие</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="text-red-500" style={{ width: '8px', height: '8px', borderRadius: '50%' }}></div>
                  <span>Внимание к деталям и качеству</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="text-red-500" style={{ width: '8px', height: '8px', borderRadius: '50%' }}></div>
                  <span>Командная работа и коммуникация</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid-2"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="card text-center"
              >
                <motion.div
                  className="text-blue-500"
                  style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon />
                </motion.div>
                <motion.div
                  className="text-white"
                  style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '0.5rem' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="card text-center"
            >
              <motion.div
                className="text-blue-500"
                style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon />
              </motion.div>
              <h3 className="text-white" style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>{feature.title}</h3>
              <p className="text-gray-300" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
