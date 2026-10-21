import { useEffect, useRef } from 'react';

/**
 * خلفية تفاعلية:
 *  - جزيئات عايمة بتتوصل ببعض بخطوط
 *  - الجزيئات بتهرب من الماوس/اللمس وبتتوصل فيه بخطوط
 *  - الكبسة (أو اللمسة) بتطلّع انفجار جزيئات
 *  - بقع ضوء (aurora) بتتحرك ببطء ورا كل شي
 */
const COLORS = ['0, 212, 255', '239, 0, 195', '45, 212, 191']; // سماوي، وردي، تركوازي

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let w = 0, h = 0, dpr = 1, raf = 0, running = true;
    let particles = [];
    const mouse = { x: -9999, y: -9999, active: false };
    const LINK = 130;      // أقصى مسافة لرسم خط بين جزيئتين
    const MOUSE_R = 160;   // نطاق تأثير الماوس

    const make = (x, y, burst = false) => {
      const a = Math.random() * Math.PI * 2;
      const s = burst ? 1.5 + Math.random() * 3 : 0.15 + Math.random() * 0.45;
      return {
        x, y,
        vx: Math.cos(a) * s,
        vy: Math.sin(a) * s,
        r: 1 + Math.random() * 1.8,
        c: COLORS[Math.floor(Math.random() * COLORS.length)],
        life: burst ? 1 : Infinity, // الجزيئات الناتجة عن الكبسة بتختفي
      };
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const target = Math.round(Math.min(110, Math.max(35, (w * h) / 14000)));
      const base = particles.filter(p => p.life === Infinity);
      const rest = particles.filter(p => p.life !== Infinity);
      while (base.length < target) base.push(make(Math.random() * w, Math.random() * h));
      base.length = Math.min(base.length, target);
      particles = base.concat(rest);
    };

    const frame = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        // تفاعل مع الماوس: تنافر خفيف
        if (mouse.active) {
          const dx = p.x - mouse.x, dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < MOUSE_R * MOUSE_R && d2 > 1) {
            const d = Math.sqrt(d2);
            const f = (1 - d / MOUSE_R) * 0.6;
            p.vx += (dx / d) * f;
            p.vy += (dy / d) * f;
          }
        }
        p.x += p.vx;
        p.y += p.vy;
        // احتكاك: يرجّع السرعة للهدوء بعد الدفعات
        p.vx *= 0.985;
        p.vy *= 0.985;
        if (p.life === Infinity) {
          const sp = Math.hypot(p.vx, p.vy);
          if (sp < 0.15) { p.vx *= 1.02; p.vy *= 1.02; }
          // لف حول الشاشة
          if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
          if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;
        } else {
          p.life -= 0.012;
        }
      }
      particles = particles.filter(p => p.life > 0);

      // خطوط بين الجزيئات
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK * LINK) {
            const o = (1 - Math.sqrt(d2) / LINK) * 0.35 * Math.min(a.life, b.life, 1);
            ctx.strokeStyle = `rgba(${a.c}, ${o})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        // خطوط من الماوس للجزيئات القريبة
        if (mouse.active) {
          const dx = a.x - mouse.x, dy = a.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < MOUSE_R * 1.3) {
            ctx.strokeStyle = `rgba(0, 212, 255, ${(1 - d / (MOUSE_R * 1.3)) * 0.5})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
          }
        }
      }

      // النقاط نفسها
      for (const p of particles) {
        ctx.fillStyle = `rgba(${p.c}, ${0.85 * Math.min(p.life, 1)})`;
        ctx.shadowColor = `rgba(${p.c}, 0.9)`;
        ctx.shadowBlur = 8;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.shadowBlur = 0;

      if (!reduceMotion) raf = requestAnimationFrame(frame);
    };

    const onMove = e => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true; };
    const onLeave = () => { mouse.active = false; };
    const onDown = e => {
      for (let i = 0; i < 14; i++) particles.push(make(e.clientX, e.clientY, true));
    };
    const onVisibility = () => {
      if (reduceMotion) return;
      running = !document.hidden;
      if (running) raf = requestAnimationFrame(frame);
    };

    resize();
    // مع reduce-motion بيرسم لقطة ثابتة وحدة بس، بدون حلقة animation
    frame();

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    window.addEventListener('blur', onLeave);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      document.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('blur', onLeave);
      document.removeEventListener('visibilitychange', onVisibility);
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
