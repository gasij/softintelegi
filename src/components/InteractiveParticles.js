import React, { useEffect, useState } from 'react';

const InteractiveParticles = () => {
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate initial particles
    const initialParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`
    }));
    setParticles(initialParticles);

    // Mouse move handler
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // Calculate distance to mouse
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Apply magnetic effect
          const force = distance < 150 ? (150 - distance) / 150 : 0;
          const angle = Math.atan2(dy, dx);
          
          const newVx = particle.vx + (Math.cos(angle) * force * 0.01);
          const newVy = particle.vy + (Math.sin(angle) * force * 0.01);
          
          // Apply friction
          const friction = 0.98;
          const newX = particle.x + newVx * friction;
          const newY = particle.y + newVy * friction;
          
          // Bounce off edges
          const boundedX = newX < 0 ? 0 : newX > window.innerWidth ? window.innerWidth : newX;
          const boundedY = newY < 0 ? 0 : newY > window.innerHeight ? window.innerHeight : newY;
          
          return {
            ...particle,
            x: boundedX,
            y: boundedY,
            vx: newX === boundedX ? -newVx * 0.8 : newVx,
            vy: newY === boundedY ? -newVy * 0.8 : newVy,
            opacity: distance < 100 ? 0.8 : particle.opacity
          };
        })
      );
      
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [mousePosition]);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1
      }}
    >
      {particles.map(particle => (
        <div
          key={particle.id}
          style={{
            position: 'absolute',
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            borderRadius: '50%',
            opacity: particle.opacity,
            transition: 'opacity 0.1s ease',
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
          }}
        />
      ))}
    </div>
  );
};

export default InteractiveParticles;
