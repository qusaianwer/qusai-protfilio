import { useEffect, useRef, memo } from 'react';

/**
 * High-Performance Animated Background:
 * - Batched 2D canvas draw calls (single stroke per frame, zero string GC allocations)
 * - Dynamic particle reduction (18 on mobile, 45 on desktop)
 * - Automatic pause on document visibility change (hidden tab)
 * - Automatic throttle during user scroll bursts to guarantee 60fps scrolling
 * - Full prefers-reduced-motion support
 */
const PARTICLE_COLOR = 'rgba(0, 212, 255, 0.75)';
const LINE_COLOR = 'rgba(0, 212, 255, 0.12)';

function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px), (pointer: coarse)').matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let running = true;
    let isScrolling = false;
    let scrollTimeout = 0;

    let particles = [];
    const mouse = { x: -9999, y: -9999, active: false };

    // Distance thresholds (squared to avoid Math.sqrt in hot loops)
    const LINK = isMobile ? 85 : 120;
    const LINK_SQ = LINK * LINK;
    const MOUSE_R = isMobile ? 90 : 140;
    const MOUSE_R_SQ = MOUSE_R * MOUSE_R;

    const TARGET_COUNT = isMobile ? 18 : 45;

    const createParticle = (x, y, isBurst = false) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = isBurst ? 1.2 + Math.random() * 2 : 0.15 + Math.random() * 0.35;
      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: isMobile ? 1.2 : 1.5,
        life: isBurst ? 1 : Infinity,
      };
    };

    const resize = () => {
      // Ignore mobile URL bar resize when width is unchanged
      if (isMobile && w && window.innerWidth === w) return;

      dpr = isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 1.5);
      w = window.innerWidth;
      h = window.innerHeight;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Populate particles
      const base = particles.filter((p) => p.life === Infinity);
      while (base.length < TARGET_COUNT) {
        base.push(createParticle(Math.random() * w, Math.random() * h));
      }
      base.length = TARGET_COUNT;
      particles = base;
    };

    let lastTime = 0;
    const TARGET_FPS_INTERVAL = isMobile ? 1000 / 30 : 1000 / 60;

    const frame = (now = 0) => {
      if (!running) return;

      // Throttle rendering while scrolling on mobile to keep compositor thread 100% smooth
      if (isScrolling && isMobile) {
        raf = requestAnimationFrame(frame);
        return;
      }

      if (!reduceMotion && now - lastTime < TARGET_FPS_INTERVAL - 2) {
        raf = requestAnimationFrame(frame);
        return;
      }
      lastTime = now;

      ctx.clearRect(0, 0, w, h);

      // 1. Update Positions
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < MOUSE_R_SQ && d2 > 1) {
            const d = Math.sqrt(d2);
            const force = (1 - d / MOUSE_R) * 0.5;
            p.vx += (dx / d) * force;
            p.vy += (dy / d) * force;
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        p.vx *= 0.985;
        p.vy *= 0.985;

        if (p.life === Infinity) {
          if (p.x < -10) p.x = w + 10;
          else if (p.x > w + 10) p.x = -10;
          if (p.y < -10) p.y = h + 10;
          else if (p.y > h + 10) p.y = -10;
        } else {
          p.life -= 0.02;
        }
      }

      particles = particles.filter((p) => p.life > 0);

      // 2. Batched Line Drawing (Single path & single stroke call!)
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_SQ) {
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
          }
        }
      }
      ctx.strokeStyle = LINE_COLOR;
      ctx.lineWidth = 0.65;
      ctx.stroke();

      // 3. Batched Particle Dots (Single path & single fill call!)
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.moveTo(p.x + p.r, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      }
      ctx.fillStyle = PARTICLE_COLOR;
      ctx.fill();

      if (!reduceMotion) {
        raf = requestAnimationFrame(frame);
      }
    };

    // User interactions (throttled & passive)
    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const onLeave = () => {
      mouse.active = false;
    };

    const onDown = (e) => {
      if (particles.length > TARGET_COUNT + 10) return;
      const count = isMobile ? 3 : 6;
      for (let i = 0; i < count; i++) {
        particles.push(createParticle(e.clientX, e.clientY, true));
      }
    };

    // Scroll detection to prioritize 60fps scrolling
    const onScrollStart = () => {
      isScrolling = true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 150);
    };

    // Pause completely when tab is hidden
    const onVisibilityChange = () => {
      running = !document.hidden;
      if (running && !reduceMotion) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(frame);
      }
    };

    resize();
    frame();

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('scroll', onScrollStart, { passive: true });
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('pointerup', onLeave, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      clearTimeout(scrollTimeout);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScrollStart);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onLeave);
      document.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <div className="bg-fx" aria-hidden="true">
      <span className="bg-blob bg-blob-1" />
      <span className="bg-blob bg-blob-2" />
      <span className="bg-blob bg-blob-3" />
      <canvas ref={canvasRef} className="bg-canvas" />
    </div>
  );
}

export default memo(AnimatedBackground);
