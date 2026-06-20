import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    // Listen for hover on buttons, anchors, and cards
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.interactive-card') ||
        target.getAttribute('role') === 'button'
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Trail effect (smooth lag for the outer circle)
  useEffect(() => {
    let animationId: number;
    
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        // Adjust multiplier (0.15) to change the trail smoothness/lag
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationId = requestAnimationFrame(updateTrail);
    };

    animationId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationId);
  }, [position]);

  if (hidden) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        className="custom-cursor"
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
          width: hovered ? '48px' : '24px',
          height: hovered ? '48px' : '24px',
          borderColor: hovered ? '#d97706' : 'rgba(217, 119, 6, 0.8)',
          backgroundColor: hovered ? 'rgba(217, 119, 6, 0.1)' : 'transparent',
        }}
      />
      {/* Inner dot */}
      <div
        className="custom-cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          backgroundColor: hovered ? '#fbbf24' : '#fbbf24',
          transform: `translate(-50%, -50%) scale(${hovered ? 1.5 : 1})`,
        }}
      />
    </>
  );
};
