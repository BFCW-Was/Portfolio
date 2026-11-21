// Reveal: Muestra, con una entrada suave (una sola vez) los elementos [data-reveal] al entrar al viewport.
// Solo se observan los presentes al montar; lo agregado después queda visible sin animar.
//
// Uso:
//   const root = useTemplateRef<HTMLElement>('root');
//   const { replay } = useReveal(root);
//   <section ref="root">
//     <div data-reveal>...</div>
//     <div data-reveal="150" data-reveal-from="left">...</div>
//   </section>

import type { ShallowRef } from 'vue';

interface RevealOptions {
    threshold?: number;
    rootMargin?: string;
    duration?: number;
}

const FROM: Record<string, string> = {
    up: 'translateY(1.5rem)',
    left: 'translateX(-2rem)',
    right: 'translateX(2rem)',
    scale: 'scale(0.94)',
};

export function useReveal(root: Readonly<ShallowRef<HTMLElement | null>>, options: RevealOptions = {}) {
    let observer: IntersectionObserver | undefined;

    function start() {
        const container = root.value;
        if (!container) return;
        observer?.disconnect();

        observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue;
                    const target = entry.target as HTMLElement;
                    const from = FROM[target.dataset.revealFrom ?? 'up'] ?? FROM.up!;

                    observer?.unobserve(target);
                    target.animate(
                        [
                            { opacity: 0, transform: from },
                            { opacity: 1, transform: 'none' },
                        ],
                        {
                            duration: options.duration ?? 700,
                            delay: Number(target.dataset.reveal) || 0,
                            easing: 'ease-out',
                            fill: 'backwards',
                        }
                    );
                    target.style.opacity = '';
                }
            },
            { threshold: options.threshold ?? 0.12, rootMargin: options.rootMargin ?? '0px 0px -4% 0px' }
        );

        container.querySelectorAll<HTMLElement>('[data-reveal]').forEach((target) => {
            target.style.opacity = '0';
            observer?.observe(target);
        });
    }

    onMounted(start);
    onBeforeUnmount(() => observer?.disconnect());

    return { replay: start };
}
