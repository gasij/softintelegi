import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaTelegram, 
  FaGithub, 
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
  };

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
      y: -5,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'ivan@example.com',
      link: 'mailto:ivan@example.com',
      color: 'text-red-400'
    },
    {
      icon: FaPhone,
      title: 'Телефон',
      value: '+7 (999) 123-45-67',
      link: 'tel:+79991234567',
      color: 'text-green-400'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Локация',
      value: 'Москва, Россия',
      link: '#',
      color: 'text-blue-400'
    },
    {
      icon: FaTelegram,
      title: 'Telegram',
      value: '@jdidksme',
      link: 'https://t.me/jdidksme',
      color: 'text-cyan-400'
    }
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', color: 'hover:text-gray-400' },
    { icon: FaLinkedin, href: 'https://linkedin.com', color: 'hover:text-blue-400' },
    { icon: FaTelegram, href: 'https://t.me', color: 'hover:text-cyan-400' }
  ];

  return (
    <section id="contact" className="section" style={{ padding: '5rem 0', position: 'relative' }}>
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
            Свяжитесь <span className="gradient-text">со мной</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-300"
            style={{ fontSize: '1.25rem', maxWidth: '48rem', margin: '0 auto' }}
          >
            Готов обсудить ваш проект и ответить на любые вопросы
          </motion.p>
        </motion.div>

        <div className="grid-2">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <motion.div
              variants={itemVariants}
              className="card"
            >
              <h3 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Давайте поговорим</h3>
              <p className="text-gray-300" style={{ lineHeight: '1.6', marginBottom: '2rem' }}>
                У вас есть интересный проект? Хотите обсудить возможности сотрудничества? 
                Или просто хотите поздороваться? Я всегда рад новым знакомствам и интересным проектам!
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    variants={cardVariants}
                    whileHover="hover"
                    className="card"
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '1rem', 
                      padding: '1rem',
                      textDecoration: 'none'
                    }}
                  >
                    <div className={info.color} style={{ fontSize: '1.5rem' }}>
                      <info.icon />
                    </div>
                    <div>
                      <div className="text-white" style={{ fontWeight: '600' }}>{info.title}</div>
                      <div className="text-gray-300">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                style={{ marginTop: '2rem' }}
              >
                <h4 className="text-white" style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Социальные сети</h4>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`text-gray-400 ${social.color}`}
                      style={{ fontSize: '1.5rem', transition: 'color 0.3s' }}
                    >
                      <social.icon />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid-2"
            >
              {[
                { label: 'Ответ в течение', value: '24 часов' },
                { label: 'Доступность', value: '9:00 - 21:00' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card text-center"
                >
                  <div className="text-white" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{stat.value}</div>
                  <div className="text-gray-300" style={{ fontSize: '0.875rem' }}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="card"
          >
            <h3 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Отправить сообщение</h3>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <motion.div variants={itemVariants}>
                <label className="text-white" style={{ display: 'block', fontWeight: '500', marginBottom: '0.5rem' }}>Имя *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Ваше имя"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="text-white" style={{ display: 'block', fontWeight: '500', marginBottom: '0.5rem' }}>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="text-white" style={{ display: 'block', fontWeight: '500', marginBottom: '0.5rem' }}>Тема *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Тема сообщения"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="text-white" style={{ display: 'block', fontWeight: '500', marginBottom: '0.5rem' }}>Сообщение *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-input form-textarea"
                  placeholder="Расскажите о вашем проекте..."
                />
              </motion.div>

              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary"
                style={{ 
                  width: '100%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '0.5rem',
                  fontSize: '1rem',
                  padding: '1rem 2rem'
                }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Отправка...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Отправить сообщение</span>
                  </>
                )}
              </motion.button>

              {/* Submit Status */}
              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`p-4 rounded-lg flex items-center space-x-2 ${
                      submitStatus === 'success' 
                        ? 'bg-green-600 bg-opacity-20 text-green-300' 
                        : 'bg-red-600 bg-opacity-20 text-red-300'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <>
                        <FaCheckCircle />
                        <span>Сообщение успешно отправлено!</span>
                      </>
                    ) : (
                      <>
                        <FaExclamationCircle />
                        <span>Ошибка при отправке. Попробуйте еще раз.</span>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
