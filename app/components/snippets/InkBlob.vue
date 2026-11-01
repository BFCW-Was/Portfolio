<template>
    <div
        v-if="!gone"
        class="ink"
        :class="{ 'ink--fade': after === 'fade', 'ink--end': after === 'end' }"
        aria-hidden="true"
        :style="{
            '--ink-color': `var(${color})`,
            '--ink-duration': `${duration}ms`,
            '--ink-easing': easing,
            '--ink-after-duration': `${afterDuration}ms`,
            ...(curtain ? { '--ink-dx': curtain[0], '--ink-dy': curtain[1] } : {}),
        }"
        @animationend="onAnimationEnd"
    >
        <div v-if="curtain" class="ink__curtain">
            <div class="ink__plate" />
        </div>

        <template v-else>
            <svg
                v-for="(origin, i) in origins"
                :key="`${type}-${i}`"
                class="ink__blob"
                viewBox="0 0 200 200"
                :style="{
                    '--ink-x': origin[0],
                    '--ink-y': origin[1],
                    '--ink-r0': `${i * 90}deg`,
                    ...(reach ? { '--ink-reach': reach } : {}),
                }"
            >
                <defs v-if="after === 'end'">
                    <mask :id="`${uid}-${i}`" maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="200">
                        <rect width="200" height="200" fill="#fff" />
                        <path class="ink__hole" :d="BLOB_PATH" fill="#000" />
                    </mask>
                </defs>
                <path :d="BLOB_PATH" :mask="after === 'end' ? `url(#${uid}-${i})` : undefined" />
            </svg>
        </template>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

type BlobType = 'sideBottom' | 'sideUp' | 'sideLeft' | 'sideRight' | 'center' | 'outside';
type CurtainType = 'curtainBottom' | 'curtainUp' | 'curtainLeft' | 'curtainRight';
type InkType = BlobType | CurtainType;
type InkAfter = 'stay' | 'fade' | 'end';

const BLOB_PATH =
    'M194.9 100.0 L195.6 102.1 L193.7 104.2 L193.7 106.3 L193.3 108.4 L188.6 110.0 L189.3 112.1 L188.0 113.9 L186.6 115.7 L187.4 117.9 L188.0 120.1 L186.4 121.8 L184.4 123.3 L185.6 125.7 L184.9 127.6 L184.7 129.6 L186.3 132.4 L185.0 134.1 L184.7 136.2 L185.5 138.8 L184.2 140.5 L181.0 141.3 L180.3 143.2 L180.4 145.6 L180.1 147.8 L180.7 150.7 L180.5 153.1 L177.8 153.9 L176.2 155.3 L175.4 157.4 L172.8 158.0 L171.5 159.7 L170.1 161.2 L168.0 162.2 L168.3 165.3 L166.1 166.1 L163.3 166.2 L160.7 166.4 L158.7 167.2 L157.9 169.3 L156.3 170.6 L155.9 173.5 L154.1 174.4 L152.1 175.1 L151.3 177.7 L148.7 177.6 L146.2 177.4 L144.0 177.5 L142.4 178.7 L141.0 180.5 L140.2 183.4 L138.3 184.2 L135.2 182.5 L133.3 183.0 L131.3 183.5 L129.9 185.4 L127.9 185.8 L126.0 186.7 L124.0 186.9 L122.1 187.7 L120.4 189.3 L118.3 189.2 L115.8 186.8 L113.9 187.9 L112.1 189.2 L110.3 191.1 L108.3 192.3 L106.3 193.4 L104.1 192.2 L102.1 193.5 L100.0 194.5 L97.9 194.3 L95.9 191.4 L93.9 191.1 L91.8 191.1 L89.6 192.1 L87.6 191.4 L85.8 189.4 L84.2 187.2 L82.0 188.0 L79.7 188.8 L77.3 190.0 L75.2 190.0 L73.5 188.1 L71.3 188.4 L68.8 189.3 L66.7 188.7 L65.0 187.4 L63.0 186.5 L61.0 185.8 L58.8 185.5 L56.0 186.3 L54.1 185.3 L52.4 184.0 L49.8 183.9 L47.8 183.1 L46.5 181.0 L45.2 179.0 L44.1 177.0 L43.9 173.6 L41.8 173.0 L40.5 171.2 L40.1 168.6 L39.6 166.1 L38.2 164.7 L36.3 163.7 L34.7 162.5 L31.4 162.7 L30.6 160.6 L29.4 158.9 L27.3 158.0 L26.6 155.9 L26.8 153.2 L26.9 150.7 L26.5 148.5 L26.3 146.3 L25.0 144.8 L23.5 143.4 L24.3 140.8 L21.9 139.8 L20.3 138.4 L20.3 136.2 L18.6 134.8 L16.1 133.7 L15.4 131.8 L14.9 129.8 L12.0 128.6 L12.2 126.4 L13.9 123.8 L12.4 122.1 L12.0 120.1 L11.0 118.2 L7.7 116.8 L6.5 114.8 L6.1 112.7 L6.4 110.5 L6.8 108.4 L7.4 106.2 L8.6 104.1 L9.1 102.0 L9.8 100.0 L10.6 98.0 L9.3 95.9 L10.9 94.0 L12.4 92.1 L11.7 90.0 L12.5 88.2 L11.6 86.0 L9.5 83.6 L8.3 81.2 L9.2 79.3 L7.9 76.8 L10.1 75.2 L12.9 73.9 L12.3 71.5 L12.0 69.2 L12.5 67.2 L11.2 64.4 L11.3 62.1 L14.0 60.9 L15.9 59.5 L15.9 57.1 L18.1 55.9 L19.6 54.4 L19.9 52.2 L21.0 50.4 L21.6 48.3 L21.5 45.6 L24.1 44.9 L28.0 45.2 L28.5 43.0 L29.3 41.0 L30.0 38.8 L30.9 36.8 L32.7 35.6 L34.8 34.8 L35.8 32.8 L37.3 31.4 L39.6 30.8 L41.2 29.6 L42.7 28.1 L44.2 26.7 L44.5 23.7 L45.9 21.9 L49.5 23.5 L51.2 22.4 L52.3 20.2 L53.8 18.7 L55.4 17.1 L57.2 16.0 L59.4 15.6 L60.4 12.9 L62.1 11.4 L64.0 10.4 L66.6 11.1 L69.1 11.8 L70.8 10.2 L72.1 7.1 L74.0 5.6 L76.5 6.6 L78.9 7.5 L80.9 6.9 L82.7 4.6 L85.0 5.1 L87.4 7.2 L89.5 6.9 L91.6 6.8 L93.7 6.6 L95.8 7.1 L98.0 8.7 L100.0 11.2 L102.0 11.3 L104.1 8.5 L106.2 8.1 L108.3 8.1 L110.4 8.0 L112.3 8.9 L114.7 7.3 L116.8 7.5 L118.4 10.4 L120.1 12.0 L122.0 12.8 L124.0 13.1 L126.3 12.4 L128.0 14.0 L129.5 15.6 L131.2 16.8 L134.1 15.1 L135.8 16.2 L137.8 16.8 L139.7 17.6 L141.7 18.2 L143.3 19.5 L146.0 19.0 L147.1 21.2 L148.3 23.1 L150.3 23.8 L152.1 24.7 L155.0 24.3 L157.3 24.7 L159.1 26.0 L161.4 26.4 L162.8 28.1 L164.8 29.1 L165.5 31.5 L165.8 34.2 L166.0 36.9 L166.3 39.4 L167.3 41.2 L168.6 42.7 L167.6 46.1 L169.1 47.4 L170.9 48.5 L172.7 49.6 L175.7 50.0 L178.4 50.7 L180.3 52.0 L182.2 53.3 L185.0 54.3 L185.1 56.6 L185.2 59.0 L186.6 60.7 L188.1 62.4 L189.4 64.1 L191.7 65.6 L193.7 67.2 L193.5 69.6 L195.6 71.3 L196.4 73.4 L195.9 75.8 L196.3 78.0 L196.1 80.3 L195.5 82.7 L196.0 84.8 L196.2 87.0 L192.7 89.6 L190.9 91.8 L192.1 93.8 L191.4 95.9 L192.0 97.9Z';

// Puntos de origen de cada mancha, en unidades del viewport
const ORIGINS: Record<BlobType, [string, string][]> = {
    sideBottom: [['50vw', '100vh']],
    sideUp: [['50vw', '0px']],
    sideLeft: [['0px', '50vh']],
    sideRight: [['100vw', '50vh']],
    center: [['50vw', '50vh']],
    outside: [
        ['0px', '0px'],
        ['100vw', '0px'],
        ['0px', '100vh'],
        ['100vw', '100vh'],
    ],
};

// Lado desde el que entra cada cortina, como vector (x, y)
const CURTAINS: Record<CurtainType, [number, number]> = {
    curtainBottom: [0, 1],
    curtainUp: [0, -1],
    curtainLeft: [-1, 0],
    curtainRight: [1, 0],
};

const props = defineProps({
    type: {
        type: String as PropType<InkType>,
        default: 'center',
    },
    after: {
        type: String as PropType<InkAfter>,
        default: 'end',
    },
    color: {
        type: String,
        default: '--color-bfcw-white-50',
    },
    afterDuration: {
        type: Number,
        default: 600,
    },
    easing: {
        type: String,
        default: 'cubic-bezier(.7, 0, .3, 1)',
    },
    duration: {
        type: Number,
        default: 1200,
    },
});

const emit = defineEmits(['done']);
const uid = `ink${useId().replace(/\W/g, '')}`;
const gone = ref(false);
const origins = computed(() => ORIGINS[props.type as BlobType] ?? []);
const curtain = computed(() => CURTAINS[props.type as CurtainType]);
const reach = computed(() => (props.type === 'outside' ? 'hypot(50vw, 50vh)' : undefined));

let emitted = false;
function onAnimationEnd(e: AnimationEvent) {
    const el = e.target as Element;
    const isCurtain = el.classList.contains('ink__curtain');
    const finished = {
        stay: isCurtain || el.classList.contains('ink__blob'),
        fade: el === e.currentTarget,
        end: el.classList.contains('ink__hole') || (isCurtain && e.animationName.startsWith('ink-curtain-out')),
    }[props.after];
    if (!finished || emitted) return;
    emitted = true;
    if (props.after !== 'stay') gone.value = true; // Libera la capa de la GPU
    emit('done');
}
</script>

<style lang="scss" scoped>
.ink {
    position: fixed;
    inset: 0;
    z-index: -1;
    overflow: hidden;
    pointer-events: none;

    &--fade {
        animation: ink-fade var(--ink-after-duration) ease-out var(--ink-duration) forwards;
    }

    &__blob {
        --ink-reach: hypot(max(var(--ink-x), 100vw - var(--ink-x)), max(var(--ink-y), 100vh - var(--ink-y)));

        position: absolute;
        left: var(--ink-x);
        top: var(--ink-y);
        width: calc(var(--ink-reach) * 2.5);
        aspect-ratio: 1;
        translate: -50% -50%;
        fill: var(--ink-color);
        will-change: scale, rotate;
        animation: ink-grow var(--ink-duration) var(--ink-easing) forwards;
    }

    &__hole {
        transform-box: view-box;
        transform-origin: 100px 100px;
        transform: scale(0) rotate(90deg);
        animation: ink-hole var(--ink-after-duration) var(--ink-easing) var(--ink-duration) forwards;
    }

    &__curtain {
        position: absolute;
        inset: -2px;
        overflow: hidden;
        will-change: translate;
        translate: calc(var(--ink-dx) * 100%) calc(var(--ink-dy) * 100%);
        animation: ink-curtain-in var(--ink-duration) var(--ink-easing) forwards;
    }

    &__plate {
        position: absolute;
        inset: 0;
        background: var(--ink-color);
        will-change: translate;
        translate: calc(var(--ink-dx) * -100%) calc(var(--ink-dy) * -100%);
        animation: ink-plate-in var(--ink-duration) var(--ink-easing) forwards;
    }

    &--end &__curtain {
        animation:
            ink-curtain-in var(--ink-duration) var(--ink-easing) forwards,
            ink-curtain-out var(--ink-after-duration) var(--ink-easing) var(--ink-duration) forwards;
    }

    &--end &__plate {
        animation:
            ink-plate-in var(--ink-duration) var(--ink-easing) forwards,
            ink-plate-out var(--ink-after-duration) var(--ink-easing) var(--ink-duration) forwards;
    }
}

@keyframes ink-grow {
    from {
        scale: 0;
        rotate: var(--ink-r0);
    }
    to {
        scale: 1;
        rotate: calc(var(--ink-r0) + 20deg);
    }
}

@keyframes ink-fade {
    to {
        opacity: 0;
    }
}

@keyframes ink-hole {
    from {
        transform: scale(0) rotate(90deg);
    }
    to {
        transform: scale(1.25) rotate(110deg);
    }
}

@keyframes ink-curtain-in {
    to {
        translate: 0 0;
    }
}

@keyframes ink-plate-in {
    to {
        translate: 0 0;
    }
}

@keyframes ink-curtain-out {
    from {
        translate: 0 0;
    }
    to {
        translate: calc(var(--ink-dx) * -100%) calc(var(--ink-dy) * -100%);
    }
}

@keyframes ink-plate-out {
    from {
        translate: 0 0;
    }
    to {
        translate: calc(var(--ink-dx) * 100%) calc(var(--ink-dy) * 100%);
    }
}

@media (prefers-reduced-motion: reduce) {
    .ink__blob {
        animation-duration: 1ms;
    }
    .ink--fade {
        animation-delay: 1ms;
    }
    .ink__hole {
        animation-delay: 1ms;
        animation-duration: 1ms;
    }
    .ink__curtain,
    .ink__plate,
    .ink--end .ink__curtain,
    .ink--end .ink__plate {
        animation-duration: 1ms;
    }
    .ink--end .ink__curtain,
    .ink--end .ink__plate {
        animation-delay: 0s, 1ms;
    }
}
</style>
