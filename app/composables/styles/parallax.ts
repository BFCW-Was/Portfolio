// Parallax: Calcula un offset normalizado (-1 a 1) según la posición del cursor respecto al elemento raíz y lo suaviza hacia --px y --py en requestAnimationFrame (sin re-renders).
// En pantallas táctiles no hay cursor, así que --px y --py quedan en 0.
//
// Uso:
//   const root = useTemplateRef<HTMLElement>('root');
//   useParallax(root);                          // smooth opcional: 0.01 (lento) a 1 (instantáneo)
//   .logo { translate: calc(var(--px, 0) * 16px) calc(var(--py, 0) * 12px); }

import type { ShallowRef } from 'vue';

export function useParallax(root: Readonly<ShallowRef<HTMLElement | null>>, options: { smooth?: number } = {}) {
    const smooth = options.smooth ?? 0.08;
    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    function tick() {
        currentX += (targetX - currentX) * smooth;
        currentY += (targetY - currentY) * smooth;
        root.value?.style.setProperty('--px', currentX.toFixed(3));
        root.value?.style.setProperty('--py', currentY.toFixed(3));
        const moving = Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001;
        frame = moving ? requestAnimationFrame(tick) : 0;
    }

    function onMove(event: PointerEvent) {
        targetX = Math.max(-1, Math.min(1, (event.clientX / window.innerWidth - 0.5) * 2));
        targetY = Math.max(-1, Math.min(1, (event.clientY / window.innerHeight - 0.5) * 2));
        if (!frame) frame = requestAnimationFrame(tick);
    }

    onMounted(() => {
        root.value?.style.setProperty('--px', '0');
        root.value?.style.setProperty('--py', '0');
        window.addEventListener('pointermove', onMove, { passive: true });
    });

    onBeforeUnmount(() => {
        window.removeEventListener('pointermove', onMove);
        if (frame) cancelAnimationFrame(frame);
    });
}
