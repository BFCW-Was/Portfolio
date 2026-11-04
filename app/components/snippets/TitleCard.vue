<template>
    <div class="title-card" :class="variantClass">
        <!-- SVG para el borde cyan -->
        <svg class="corner-border" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
                <linearGradient :id="`line-gradient-${variant}`" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="cyan" />
                    <stop offset="100%" stop-color="transparent" />
                </linearGradient>
                <linearGradient :id="`line-gradient-vertical-${variant}`" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="cyan" />
                    <stop offset="100%" stop-color="transparent" />
                </linearGradient>
            </defs>
            <g :stroke="`url(#line-gradient-${variant})`" stroke-width="3" fill="none">
                <line :x1="borderLines.horizontal.x1" :y1="borderLines.horizontal.y1" :x2="borderLines.horizontal.x2" :y2="borderLines.horizontal.y2" />
            </g>
            <g :stroke="`url(#line-gradient-vertical-${variant})`" stroke-width="3" fill="none">
                <line :x1="borderLines.vertical.x1" :y1="borderLines.vertical.y1" :x2="borderLines.vertical.x2" :y2="borderLines.vertical.y2" />
            </g>
        </svg>

        <!-- Degradé de fondo -->
        <div class="background-gradient" :style="{ clipPath }" />

        <h5 class="title">{{ title }}</h5>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    variant: {
        type: String,
        default: 'top-left',
        validator: (v: string) => ['top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(v),
    },
});

// Constantes para las proporciones
const widthPercent = 55;
const heightPercent = 50;

const variantClass = computed(() => `variant-${props.variant}`);

// Líneas para el borde
const borderLines = computed(() => {
    switch (props.variant) {
        case 'top-left':
            return {
                horizontal: { x1: 0, y1: 0, x2: widthPercent, y2: 0 },
                vertical: { x1: 0, y1: 0, x2: 0, y2: heightPercent },
            };
        case 'top-right':
            return {
                horizontal: { x1: 100, y1: 0, x2: 100 - widthPercent, y2: 0 },
                vertical: { x1: 100, y1: 0, x2: 100, y2: heightPercent },
            };
        case 'bottom-left':
            return {
                horizontal: { x1: 0, y1: 100, x2: widthPercent, y2: 100 },
                vertical: { x1: 0, y1: 100, x2: 0, y2: 100 - heightPercent },
            };
        case 'bottom-right':
            return {
                horizontal: { x1: 100, y1: 100, x2: 100 - widthPercent, y2: 100 },
                vertical: { x1: 100, y1: 100, x2: 100, y2: 100 - heightPercent },
            };
        default:
            return {
                horizontal: { x1: 0, y1: 0, x2: widthPercent, y2: 0 },
                vertical: { x1: 0, y1: 0, x2: 0, y2: heightPercent },
            };
    }
});

// Clip path para cada variante
const clipPath = computed(() => {
    switch (props.variant) {
        case 'top-left':
            return `polygon(0% 0%, ${widthPercent}% 0%, 0% ${heightPercent}%)`;
        case 'top-right':
            return `polygon(100% 0%, ${100 - widthPercent}% 0%, 100% ${heightPercent}%)`;
        case 'bottom-left':
            return `polygon(0% 100%, ${widthPercent}% 100%, 0% ${100 - heightPercent}%)`;
        case 'bottom-right':
            return `polygon(100% 100%, ${100 - widthPercent}% 100%, 100% ${100 - heightPercent}%)`;
        default:
            return `polygon(0% 0%, ${widthPercent}% 0%, 0% ${heightPercent}%)`;
    }
});
</script>

<style scoped lang="scss">
.title-card {
    // Light Theme (Por defecto)
    --tc-bg: var(--color-bfcw-white-90);
    --tc-text: var(--color-bfcw-black-90);

    background-color: var(--tc-bg);
    color: var(--tc-text);
    padding: 1.5rem 2.5rem;
    border-radius: 0.8rem;
    width: fit-content;
    min-width: 200px;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
}

.corner-border {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
}

.background-gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
}

.variant-top-left .background-gradient {
    background: radial-gradient(
        ellipse 100% 80% at 0% 0%,
        color-mix(in oklab, var(--color-bfcw-cyan-70) 30%, transparent) 0%,
        color-mix(in oklab, var(--color-bfcw-cyan-70) 15%, transparent) 20%,
        color-mix(in oklab, var(--color-bfcw-cyan-70) 5%, transparent) 40%,
        transparent 100%
    );
}

.variant-top-right .background-gradient {
    background: radial-gradient(
        ellipse 100% 80% at 100% 0%,
        color-mix(in oklab, var(--color-bfcw-cyan-70) 30%, transparent) 0%,
        color-mix(in oklab, var(--color-bfcw-cyan-70) 15%, transparent) 20%,
        color-mix(in oklab, var(--color-bfcw-cyan-70) 5%, transparent) 40%,
        transparent 100%
    );
}

.variant-bottom-left .background-gradient {
    background: radial-gradient(
        ellipse 100% 80% at 0% 100%,
        color-mix(in oklab, var(--color-bfcw-cyan-70) 30%, transparent) 0%,
        color-mix(in oklab, var(--color-bfcw-cyan-70) 15%, transparent) 20%,
        color-mix(in oklab, var(--color-bfcw-cyan-70) 5%, transparent) 40%,
        transparent 100%
    );
}

.variant-bottom-right .background-gradient {
    background: radial-gradient(
        ellipse 100% 80% at 100% 100%,
        color-mix(in oklab, var(--color-bfcw-cyan-70) 30%, transparent) 0%,
        color-mix(in oklab, var(--color-bfcw-cyan-70) 15%, transparent) 20%,
        color-mix(in oklab, var(--color-bfcw-cyan-70) 5%, transparent) 40%,
        transparent 100%
    );
}

.title {
    position: relative;
    z-index: 2;
    margin: 0;
}

// Dark Theme
.dark .title-card {
    --tc-bg: var(--color-bfcw-black-100);
    --tc-text: var(--color-bfcw-white-90);
}

// Sepia Theme
.theme-sepia .title-card {
    --tc-bg: var(--color-bfcw-black-70);
    --tc-text: var(--color-bfcw-white-90);
}
</style>
