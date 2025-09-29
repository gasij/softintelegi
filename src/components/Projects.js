import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCode, 
  FaLaptopCode,
  FaDatabase,
  FaMobile,
  FaServer,
  FaCloud
} from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'Все проекты' },
    { id: 'web', name: 'Веб-приложения' },
    { id: 'mobile', name: 'Мобильные' },
    { id: 'backend', name: 'Backend' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Полнофункциональная платформа электронной коммерции с React frontend и .NET Core backend',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'C#', '.NET Core', 'SQL Server', 'Stripe API'],
      category: 'web',
      github: 'https://github.com',
      live: 'https://example.com',
      features: ['Корзина покупок', 'Платежи', 'Админ панель', 'API', 'Аутентификация']
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Современное приложение для управления задачами с drag-and-drop функциональностью',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.io'],
      category: 'web',
      github: 'https://github.com',
      live: 'https://example.com',
      features: ['Drag & Drop', 'Real-time', 'Команды', 'Уведомления', 'Аналитика']
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      description: 'Мобильное приложение для банковских операций с высоким уровнем безопасности',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'C#', 'Xamarin', 'Azure', 'Biometric Auth'],
      category: 'mobile',
      github: 'https://github.com',
      live: 'https://example.com',
      features: ['Биометрия', 'Push уведомления', 'Офлайн режим', 'Шифрование', '2FA']
    },
    {
      id: 4,
      title: 'Microservices API',
      description: 'Масштабируемая API архитектура с микросервисами и контейнеризацией',
      image: '/api/placeholder/600/400',
      technologies: ['C#', '.NET Core', 'Docker', 'Kubernetes', 'Redis'],
      category: 'backend',
      github: 'https://github.com',
      live: 'https://example.com',
      features: ['Микросервисы', 'Docker', 'Kubernetes', 'Redis', 'Мониторинг']
    },
    {
      id: 5,
      title: 'Real Estate Portal',
      description: 'Портал недвижимости с поиском, фильтрацией и виртуальными турами',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Next.js', 'C#', 'PostgreSQL', 'Map API'],
      category: 'web',
      github: 'https://github.com',
      live: 'https://example.com',
      features: ['Поиск', 'Карты', 'VR туры', 'Чат', 'Бронирование']
    },
    {
      id: 6,
      title: 'IoT Dashboard',
      description: 'Панель управления для IoT устройств с real-time мониторингом',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'WebSocket', 'C#', 'SignalR', 'InfluxDB'],
      category: 'web',
      github: 'https://github.com',
      live: 'https://example.com',
      features: ['Real-time', 'Графики', 'Алерты', 'История', 'Экспорт']
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

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
      scale: 1.03,
      y: -10,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'web': return FaLaptopCode;
      case 'mobile': return FaMobile;
      case 'backend': return FaServer;
      default: return FaCode;
    }
  };

  return (
    <section id="projects" className="section" style={{ padding: '5rem 0', position: 'relative' }}>
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
            Мои <span className="gradient-text">проекты</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-300"
            style={{ fontSize: '1.25rem', maxWidth: '48rem', margin: '0 auto 2rem auto' }}
          >
            Коллекция проектов, демонстрирующих мои навыки и опыт в разработке
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'glass text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-10'
                }`}
              >
                {filter.name}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => {
              const CategoryIcon = getCategoryIcon(project.category);
              return (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  whileHover="hover"
                  layout
                  className="glass rounded-2xl overflow-hidden group"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <CategoryIcon className="text-6xl text-white opacity-80" />
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-all duration-300"
                      >
                        <FaGithub />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-all duration-300"
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-600 bg-opacity-50 rounded-full text-xs text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white">Особенности:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-700 bg-opacity-50 rounded text-xs text-gray-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
          style={{ 
            marginTop: '4rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '50vh'
          }}
        >
          <motion.div
            variants={itemVariants}
            className="card"
            style={{ 
              maxWidth: '32rem', 
              margin: '0 auto',
              padding: '3rem 2rem',
              textAlign: 'center'
            }}
          >
            <h3 className="text-white" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Заинтересованы в сотрудничестве?
            </h3>
            <p className="text-gray-300" style={{ fontSize: '1.125rem', marginBottom: '2rem', lineHeight: '1.6' }}>
              Давайте обсудим ваш проект и создадим что-то удивительное вместе
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary"
              style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}
            >
              Начать проект
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
