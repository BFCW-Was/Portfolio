// Tilt: Inclinación según la posición del puntero: actualiza --tx y --ty (-1 a 1) en el elemento, agrupando escrituras en requestAnimationFrame (máx. una por fotograma).
// El estilo visual lo aplica la clase global `ornamental-tilt`.
//
// Uso:
//   const tilt = useTilt();
//   <NuxtLink class="ornamental-tilt" v-on="tilt">...</NuxtLink>

export function useTilt() {
    let frame = 0;

    const pointermove = (event: PointerEvent) => {
        const card = event.currentTarget as HTMLElement;
        const { clientX, clientY } = event;

        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
            const box = card.getBoundingClientRect();
            card.style.setProperty('--tx', (((clientX - box.left) / box.width - 0.5) * 2).toFixed(3));
            card.style.setProperty('--ty', (((clientY - box.top) / box.height - 0.5) * 2).toFixed(3));
        });
    };

    const pointerleave = (event: PointerEvent) => {
        const card = event.currentTarget as HTMLElement;

        cancelAnimationFrame(frame);
        card.style.setProperty('--tx', '0');
        card.style.setProperty('--ty', '0');
    };

    return { pointermove, pointerleave };
}
