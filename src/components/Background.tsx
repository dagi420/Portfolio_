import React, { useEffect, useRef, useState } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
}

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));
  const [time, setTime] = useState(0);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'));
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let points: Point[] = [];
    let width = 0;
    let height = 0;

    // Color palettes
    const lightPalette = ['#6366f1', '#4f46e5', '#818cf8', '#c7d2fe', '#a5b4fc'];
    const darkPalette = ['#6366f1', '#818cf8', '#a5b4fc', '#c7d2fe', '#e0e7ff'];

    const initCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      // Create more points for a denser network
      points = Array.from({ length: 80 }, () => {
        const palette = isDark ? darkPalette : lightPalette;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          color: palette[Math.floor(Math.random() * palette.length)],
          size: Math.random() * 2 + 1,
        };
      });
    };

    const drawLines = (point: Point, index: number) => {
      for (let i = index + 1; i < points.length; i++) {
        const p2 = points[i];
        const dx = point.x - p2.x;
        const dy = point.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          // Create gradient for line
          const gradient = ctx.createLinearGradient(point.x, point.y, p2.x, p2.y);
          
          if (isDark) {
            gradient.addColorStop(0, `rgba(99, 102, 241, ${(150 - distance) / 750})`);
            gradient.addColorStop(1, `rgba(165, 180, 252, ${(150 - distance) / 750})`);
          } else {
            gradient.addColorStop(0, `rgba(79, 70, 229, ${(150 - distance) / 750})`);
            gradient.addColorStop(1, `rgba(99, 102, 241, ${(150 - distance) / 750})`);
          }
          
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    };

    const animate = (timestamp: number) => {
      // Update time for color cycling
      setTime(prev => prev + 0.005);
      
      ctx.clearRect(0, 0, width, height);

      // Create a subtle gradient background
      const bgGradient = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height) / 1.5
      );
      
      if (isDark) {
        bgGradient.addColorStop(0, 'rgba(30, 41, 59, 0.2)');
        bgGradient.addColorStop(1, 'rgba(15, 23, 42, 0)');
      } else {
        bgGradient.addColorStop(0, 'rgba(241, 245, 249, 0.3)');
        bgGradient.addColorStop(1, 'rgba(248, 250, 252, 0)');
      }
      
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      points.forEach((point, index) => {
        // Update position
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off edges
        if (point.x < 0 || point.x > width) point.vx *= -1;
        if (point.y < 0 || point.y > height) point.vy *= -1;

        // Color cycling based on time
        const hue = (index * 10 + time * 20) % 360;
        const saturation = isDark ? '80%' : '70%';
        const lightness = isDark ? '70%' : '60%';
        const pointColor = `hsla(${hue}, ${saturation}, ${lightness}, 0.8)`;

        // Draw point with glow effect
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        
        // Create radial gradient for glow effect
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, point.size * 3
        );
        gradient.addColorStop(0, pointColor);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw connecting lines
        drawLines(point, index);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      initCanvas();
    };

    initCanvas();
    animationRef.current = requestAnimationFrame(animate);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 transition-opacity duration-1000"
      style={{ opacity: isDark ? 0.6 : 0.4 }}
    />
  );
};

export default Background;