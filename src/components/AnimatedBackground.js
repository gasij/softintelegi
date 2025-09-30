import React from 'react';

const AnimatedBackground = () => {
  // Generate random positions and sizes for animated elements
  const generateElements = (count, type) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      type,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 50 + 20,
      delay: Math.random() * 10,
      duration: Math.random() * 10 + 5
    }));
  };

  const floatingParticles = generateElements(15, 'particle');
  const driftingShapes = generateElements(8, 'shape');
  const pulsingDots = generateElements(12, 'dot');
  const rotatingRings = generateElements(6, 'ring');
  const waveElements = generateElements(10, 'wave');
  const zigzagLines = generateElements(5, 'zigzag');
  const morphingShapes = generateElements(6, 'morphing');
  const twinklingStars = generateElements(20, 'twinkling');
  const orbitingElements = generateElements(4, 'orbiting');
  const spiralElements = generateElements(5, 'spiral');
  const heartbeatElements = generateElements(8, 'heartbeat');
  const matrixElements = generateElements(15, 'matrix');
  const lightningElements = generateElements(6, 'lightning');
  const bubbleElements = generateElements(12, 'bubble');
  const magneticElements = generateElements(7, 'magnetic');

  return (
    <div className="animated-bg">
      {/* Floating Particles */}
      {floatingParticles.map((element) => (
        <div
          key={`particle-${element.id}`}
          className="floating-particle"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`
          }}
        />
      ))}

      {/* Drifting Shapes */}
      {driftingShapes.map((element) => (
        <div
          key={`shape-${element.id}`}
          className="drifting-shape"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`
          }}
        />
      ))}

      {/* Pulsing Dots */}
      {pulsingDots.map((element) => (
        <div
          key={`dot-${element.id}`}
          className="pulsing-dot"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`
          }}
        />
      ))}

      {/* Rotating Rings */}
      {rotatingRings.map((element) => (
        <div
          key={`ring-${element.id}`}
          className="rotating-ring"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`
          }}
        />
      ))}

      {/* Wave Elements */}
      {waveElements.map((element) => (
        <div
          key={`wave-${element.id}`}
          className="wave-element"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`
          }}
        />
      ))}

      {/* Zigzag Lines */}
      {zigzagLines.map((element) => (
        <div
          key={`zigzag-${element.id}`}
          className="zigzag-line"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`
          }}
        />
      ))}

      {/* Morphing Shapes */}
      {morphingShapes.map((element) => (
        <div
          key={`morphing-${element.id}`}
          className="morphing-shape"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`
          }}
        />
      ))}

      {/* Twinkling Stars */}
      {twinklingStars.map((element) => (
        <div
          key={`twinkling-${element.id}`}
          className="twinkling-star"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`
          }}
        />
      ))}

      {/* Orbiting Elements */}
      {orbitingElements.map((element) => (
        <div
          key={`orbiting-${element.id}`}
          className="orbiting-element"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`
          }}
        />
      ))}

      {/* Spiral Elements */}
      {spiralElements.map((element) => (
        <div
          key={`spiral-${element.id}`}
          className="spiral-element"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`
          }}
        />
      ))}

      {/* Heartbeat Elements */}
      {heartbeatElements.map((element) => (
        <div
          key={`heartbeat-${element.id}`}
          className="heartbeat-element"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`
          }}
        />
      ))}

      {/* Matrix Elements */}
      {matrixElements.map((element) => (
        <div
          key={`matrix-${element.id}`}
          className="matrix-element"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`
          }}
        />
      ))}

      {/* Lightning Elements */}
      {lightningElements.map((element) => (
        <div
          key={`lightning-${element.id}`}
          className="lightning-element"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 20 + 10}px`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`
          }}
        />
      ))}

      {/* Bubble Elements */}
      {bubbleElements.map((element) => (
        <div
          key={`bubble-${element.id}`}
          className="bubble-element"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`
          }}
        />
      ))}

      {/* Magnetic Elements */}
      {magneticElements.map((element) => (
        <div
          key={`magnetic-${element.id}`}
          className="magnetic-element"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 20% 80%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(78, 205, 196, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(69, 183, 209, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 60% 60%, rgba(254, 202, 87, 0.1) 0%, transparent 50%)
          `,
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
