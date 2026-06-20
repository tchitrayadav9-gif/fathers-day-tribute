import React, { useEffect, useRef } from 'react';

interface CanvasParticlesProps {
  mode: 'stars' | 'petals' | 'hearts' | 'gold-dust' | 'surprise';
  active?: boolean;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  fadeSpeed?: number;
  color?: string;
  angle?: number;
  spin?: number;
  swaySpeed?: number;
  swayWidth?: number;
}

export const CanvasParticles: React.FC<CanvasParticlesProps> = ({ mode, active = true }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles based on mode
    const initParticles = () => {
      particles = [];
      const particleCount = mode === 'stars' ? 80 : mode === 'surprise' ? 120 : 35;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle(true));
      }
    };

    const createParticle = (randomY = false): Particle => {
      const w = canvas.width;
      const h = canvas.height;
      
      const yVal = randomY ? Math.random() * h : (mode === 'hearts' || mode === 'surprise' ? h + 20 : -20);
      const xVal = Math.random() * w;

      if (mode === 'stars') {
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.05,
          speedY: (Math.random() - 0.5) * 0.05,
          opacity: Math.random() * 0.8 + 0.2,
          fadeSpeed: Math.random() * 0.01 + 0.005,
        };
      }

      if (mode === 'petals') {
        return {
          x: xVal,
          y: yVal,
          size: Math.random() * 8 + 6,
          speedX: Math.random() * 0.8 - 0.4,
          speedY: Math.random() * 0.8 + 0.6,
          opacity: Math.random() * 0.6 + 0.4,
          angle: Math.random() * 360,
          spin: (Math.random() - 0.5) * 0.02,
          swaySpeed: Math.random() * 0.01 + 0.005,
          swayWidth: Math.random() * 2 + 1,
        };
      }

      if (mode === 'hearts') {
        const colors = ['rgba(239, 68, 68, opacity)', 'rgba(244, 63, 94, opacity)', 'rgba(217, 119, 6, opacity)'];
        return {
          x: xVal,
          y: yVal,
          size: Math.random() * 10 + 8,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: -(Math.random() * 1.2 + 0.8),
          opacity: Math.random() * 0.7 + 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
        };
      }

      if (mode === 'surprise') {
        // High energy mixture of sparkles and confetti
        const colors = [
          '#fbbf24', '#f59e0b', '#d97706', // gold
          '#ef4444', '#f43f5e', '#ec4899', // reds/pinks
          '#3b82f6', '#10b981', '#8b5cf6'  // sparkles
        ];
        return {
          x: xVal,
          y: yVal,
          size: Math.random() * 6 + 4,
          speedX: (Math.random() - 0.5) * 4,
          speedY: -(Math.random() * 4 + 4),
          opacity: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          fadeSpeed: Math.random() * 0.015 + 0.005,
          angle: Math.random() * 360,
          spin: (Math.random() - 0.5) * 0.1,
        };
      }

      // Default: gold-dust
      return {
        x: xVal,
        y: yVal,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: -(Math.random() * 0.4 + 0.2),
        opacity: Math.random() * 0.5 + 0.2,
      };
    };

    const drawHeart = (c: CanvasRenderingContext2D, x: number, y: number, size: number, color: string) => {
      c.save();
      c.beginPath();
      c.translate(x, y);
      c.moveTo(0, -size / 4);
      // Top left curve
      c.bezierCurveTo(-size / 2, -size * 0.7, -size, -size * 0.3, -size, size / 6);
      // Bottom curves meeting at point
      c.bezierCurveTo(-size, size * 0.6, -size / 3, size * 0.9, 0, size);
      c.bezierCurveTo(size / 3, size * 0.9, size, size * 0.6, size, size / 6);
      // Top right curve
      c.bezierCurveTo(size, -size * 0.3, size / 2, -size * 0.7, 0, -size / 4);
      c.closePath();
      c.fillStyle = color;
      c.fill();
      c.restore();
    };

    const drawPetal = (c: CanvasRenderingContext2D, p: Particle) => {
      c.save();
      c.translate(p.x, p.y);
      c.rotate(p.angle || 0);
      c.beginPath();
      
      // Soft organic petal shape
      c.ellipse(0, 0, p.size, p.size / 2, 0, 0, 2 * Math.PI);
      
      // Luxury soft pink/rose gradient with gold undertone
      const grad = c.createRadialGradient(0, 0, 0, 0, 0, p.size);
      grad.addColorStop(0, `rgba(251, 113, 133, ${p.opacity})`);
      grad.addColorStop(0.7, `rgba(244, 63, 94, ${p.opacity * 0.8})`);
      grad.addColorStop(1, `rgba(217, 119, 6, ${p.opacity * 0.3})`); // gold tint
      
      c.fillStyle = grad;
      c.fill();
      c.restore();
    };

    const updateAndDraw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!active) return;

      particles.forEach((p, idx) => {
        if (mode === 'stars') {
          // Twinkle stars
          p.opacity += p.fadeSpeed || 0.005;
          if (p.opacity > 0.95 || p.opacity < 0.15) {
            p.fadeSpeed = -(p.fadeSpeed || 0.005);
          }
          p.x += p.speedX;
          p.y += p.speedY;

          // Render star
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(251, 191, 36, ${p.opacity})`; // Golden stars
          ctx.fill();

          // Outer glowing shadow for larger stars
          if (p.size > 1.2) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(251, 191, 36, ${p.opacity * 0.15})`;
            ctx.fill();
          }
        } 
        else if (mode === 'petals') {
          // Falling rose petals with sway
          p.y += p.speedY;
          p.x += p.speedX + Math.sin(p.y * (p.swaySpeed || 0.01)) * (p.swayWidth || 1);
          p.angle = (p.angle || 0) + (p.spin || 0.01);

          drawPetal(ctx, p);

          // Recycle
          if (p.y > canvas.height + 20) {
            particles[idx] = createParticle();
          }
        } 
        else if (mode === 'hearts') {
          // Rising hearts
          p.y += p.speedY;
          p.x += p.speedX;
          p.opacity -= 0.0015; // Slow fade out

          const currentOpacity = Math.max(0, p.opacity);
          const colorString = (p.color || 'rgba(239, 68, 68, opacity)').replace('opacity', currentOpacity.toString());

          drawHeart(ctx, p.x, p.y, p.size, colorString);

          // Recycle or replace
          if (p.y < -20 || p.opacity <= 0) {
            particles[idx] = createParticle();
          }
        } 
        else if (mode === 'surprise') {
          // Surprise high energy sparks
          p.y += p.speedY;
          p.x += p.speedX;
          p.speedY += 0.08; // Gravity effect
          p.opacity -= p.fadeSpeed || 0.01;
          p.angle = (p.angle || 0) + (p.spin || 0.05);

          if (p.opacity > 0) {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle || 0);
            
            // Randomly draw diamonds (confetti) or circles (sparkles)
            ctx.beginPath();
            if (idx % 2 === 0) {
              ctx.rect(-p.size / 2, -p.size / 2, p.size, p.size);
            } else {
              ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
            }
            
            ctx.fillStyle = p.color || '#fbbf24';
            ctx.globalAlpha = p.opacity;
            ctx.fill();
            ctx.restore();
          }

          if (p.y > canvas.height + 20 || p.opacity <= 0) {
            // Re-spawn only if surprise is active and from bottom
            if (Math.random() < 0.3) {
              particles[idx] = createParticle(false);
              particles[idx].y = canvas.height - Math.random() * 50; // spawn at bottom
              particles[idx].speedY = -(Math.random() * 6 + 6); // fly up fast
            }
          }
        }
        else {
          // Gold dust drifting up
          p.y += p.speedY;
          p.x += p.speedX;
          p.opacity -= 0.0005;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(251, 191, 36, ${Math.max(0, p.opacity)})`;
          ctx.fill();

          if (p.y < -10 || p.opacity <= 0) {
            particles[idx] = createParticle();
          }
        }
      });

      animationFrameId = requestAnimationFrame(updateAndDraw);
    };

    initParticles();
    updateAndDraw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mode, active]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
      style={{ mixBlendMode: mode === 'stars' ? 'screen' : 'normal' }}
    />
  );
};
