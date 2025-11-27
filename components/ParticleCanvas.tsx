'use client';

import { useCallback, useRef, useEffect } from 'react';
import { useCanvas } from '@/hooks/useCanvas';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    color: string;
}

const ParticleCanvas = () => {
    // useRef pour conserver les particules entre les rendus
    const particles = useRef<Particle[]>([]);

    // Initialiser les particules une seule fois
    useEffect(() => {
        if (typeof window === 'undefined' || particles.current.length > 0) return;
        
        const particleCount = 100;
        const newParticles: Particle[] = [];
        for (let i = 0; i < particleCount; i++) {
            newParticles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                radius: Math.random() * 1.5 + 0.5,
                color: 'rgba(255, 255, 255, 0.7)',
            });
        }
        particles.current = newParticles;
    }, []);

    // Étape 3 : Utilisation de useCallback pour la fonction de dessin
    const draw = useCallback((ctx: CanvasRenderingContext2D) => {
        const dpr = window.devicePixelRatio || 1;
        const canvasWidth = ctx.canvas.width / dpr;
        const canvasHeight = ctx.canvas.height / dpr;

        particles.current.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > canvasWidth) p.vx *= -1;
            if (p.y < 0 || p.y > canvasHeight) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        });
    }, []);

    const canvasRef = useCanvas(draw);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                // z-index est crucial pour le positionner en arrière-plan
                zIndex: -1,
                // Pas de background ici, il doit être transparent pour voir le reste
            }}
        />
    );
};

export default ParticleCanvas;