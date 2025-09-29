import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaGitAlt,
  FaDatabase,
  FaAws,
  FaDocker,
  FaBootstrap,
  FaSass,
  FaNpm,
  FaCode
} from 'react-icons/fa';
import { SiDotnet, SiMongodb, SiMysql, SiPostgresql, SiTypescript } from 'react-icons/si';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (width) => ({
      width: `${width}%`,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
        delay: 0.5
      }
    })
  };

  const skills = [
    { name: 'React', level: 90, icon: FaReact, category: 'Frontend' },
    { name: 'JavaScript', level: 95, icon: FaJs, category: 'Frontend' },
    { name: 'TypeScript', level: 80, icon: SiTypescript, category: 'Frontend' },
    { name: 'HTML5', level: 95, icon: FaHtml5, category: 'Frontend' },
    { name: 'CSS3', level: 90, icon: FaCss3Alt, category: 'Frontend' },
    { name: 'Sass', level: 75, icon: FaSass, category: 'Frontend' },
    { name: 'Bootstrap', level: 85, icon: FaBootstrap, category: 'Frontend' },
    { name: 'C#', level: 90, icon: FaCode, category: 'Backend' },
    { name: '.NET Core', level: 85, icon: SiDotnet, category: 'Backend' },
    { name: 'Node.js', level: 80, icon: FaNodeJs, category: 'Backend' },
    { name: 'REST API', level: 90, icon: FaCode, category: 'Backend' },
    { name: 'GraphQL', level: 70, icon: FaCode, category: 'Backend' },
    { name: 'SQL Server', level: 85, icon: FaDatabase, category: 'Базы данных' },
    { name: 'MySQL', level: 80, icon: SiMysql, category: 'Базы данных' },
    { name: 'PostgreSQL', level: 75, icon: SiPostgresql, category: 'Базы данных' },
    { name: 'MongoDB', level: 70, icon: SiMongodb, category: 'Базы данных' },
    { name: 'Git', level: 90, icon: FaGitAlt, category: 'Инструменты' },
    { name: 'Docker', level: 75, icon: FaDocker, category: 'Инструменты' },
    { name: 'AWS', level: 70, icon: FaAws, category: 'Инструменты' },
    { name: 'NPM', level: 85, icon: FaNpm, category: 'Инструменты' }
  ];

  const techIcons = [
    { icon: FaReact, name: 'React', color: 'text-cyan-400' },
    { icon: FaCode, name: 'C#', color: 'text-purple-400' },
    { icon: FaJs, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: SiDotnet, name: '.NET', color: 'text-blue-400' },
    { icon: FaNodeJs, name: 'Node.js', color: 'text-green-400' },
    { icon: FaDatabase, name: 'SQL', color: 'text-red-400' }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Мои <span className="gradient-text">навыки</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Технологии и инструменты, которые я использую для создания качественных решений
          </motion.p>
        </motion.div>

        {/* Skills Table */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="card"
          style={{ overflow: 'hidden' }}
        >
          <div className="overflow-x-auto">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(255, 255, 255, 0.1)' }}>
                  <th className="text-white text-left" style={{ padding: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>Технология</th>
                  <th className="text-white text-left" style={{ padding: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>Категория</th>
                  <th className="text-white text-left" style={{ padding: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>Уровень</th>
                  <th className="text-white text-left" style={{ padding: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>Прогресс</th>
                </tr>
              </thead>
              <tbody>
                {skills.map((skill, index) => (
                  <motion.tr
                    key={index}
                    variants={itemVariants}
                    whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                    style={{ 
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                      transition: 'background-color 0.3s ease'
                    }}
                  >
                    <td style={{ padding: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div className="text-blue-500" style={{ fontSize: '1.5rem' }}>
                          <skill.icon />
                        </div>
                        <span className="text-white" style={{ fontWeight: '500' }}>{skill.name}</span>
                      </div>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <span 
                        className="btn btn-outline"
                        style={{ 
                          padding: '0.25rem 0.75rem',
                          fontSize: '0.875rem',
                          borderRadius: '9999px',
                          display: 'inline-block'
                        }}
                      >
                        {skill.category}
                      </span>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <span className="text-white" style={{ fontWeight: '600' }}>{skill.level}%</span>
                    </td>
                    <td style={{ padding: '1rem', width: '200px' }}>
                      <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                        <motion.div
                          className="progress-fill"
                          variants={progressVariants}
                          custom={skill.level}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          style={{ height: '100%' }}
                        />
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Additional Info */}
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
              maxWidth: '56rem', 
              margin: '0 auto',
              padding: '3rem 2rem',
              textAlign: 'center'
            }}
          >
            <h3 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Постоянное развитие</h3>
            <p className="text-gray-300" style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Я постоянно изучаю новые технологии и улучшаю свои навыки. 
              Следую за трендами в веб-разработке и всегда готов к изучению новых инструментов.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              {['Адаптивный дизайн', 'SEO оптимизация', 'Производительность', 'Безопасность', 'Тестирование'].map((item, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="btn btn-outline"
                  style={{ 
                    padding: '0.5rem 1rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    borderRadius: '9999px'
                  }}
                >
                  {item}
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
