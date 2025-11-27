'use client';
import { useEffect, useRef } from 'react';

type DrawFunction = (ctx: CanvasRenderingContext2D) => void;

export const useCanvas = (draw: DrawFunction) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.height = window.innerHeight + 'px';
            ctx.scale(dpr, dpr);
        };

        const init = () => {
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);

            const render = () => {
                // Efface le canvas avant de redessiner. C'est crucial pour l'animation.
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                draw(ctx);
                animationFrameId = window.requestAnimationFrame(render);
            };
            render();
        };

        init();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [draw]);

    return canvasRef;
};
