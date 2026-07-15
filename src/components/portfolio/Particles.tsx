import { useEffect, useRef } from "react";

export function Particles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let raf = 0;
        let w = (canvas.width = canvas.offsetWidth * devicePixelRatio);
        let h = (canvas.height = canvas.offsetHeight * devicePixelRatio);

        const count = Math.min(80, Math.floor((w * h) / 25000));
        const particles = Array.from({ length: count }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            r: Math.random() * 1.6 + 0.4,
            hue: Math.random() > 0.5 ? 255 : 295,
        }));

        const onResize = () => {
            w = canvas.width = canvas.offsetWidth * devicePixelRatio;
            h = canvas.height = canvas.offsetHeight * devicePixelRatio;
        };
        window.addEventListener("resize", onResize);

        const draw = () => {
            ctx.clearRect(0, 0, w, h);
            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > w) p.vx *= -1;
                if (p.y < 0 || p.y > h) p.vy *= -1;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r * devicePixelRatio, 0, Math.PI * 2);
                ctx.fillStyle = `oklch(0.7 0.18 ${p.hue} / 0.7)`;
                ctx.fill();
            }
            // connections
            for(let i = 0; i < particles.length; i++) {
                for(let j = i + 1; j < particles.length; j++) {
                    const a = particles[i], b = particles[j];
                    const dx = a.x - b.x, dy = a.y - b.y;
                    const d = Math.hypot(dx, dy);
                    if(d < 130 * devicePixelRatio) {
                        ctx.strokeStyle = `oklch(0.7 0.18 275 / ${0.15 * (1 - d / (130 * devicePixelRatio))})`;
                        ctx.lineWidth = devicePixelRatio * 0.5;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }
            raf = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full pointer-events-none"
            aria-hidden="true"
        />
    );
}