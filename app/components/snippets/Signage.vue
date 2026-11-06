<template>
    <div class="info-arrow-box" :class="variant">
        <svg viewBox="0 0 260 60" preserveAspectRatio="none">
            <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" :stop-color="gradientStart" />
                    <stop offset="100%" :stop-color="gradientEnd" />
                </linearGradient>
            </defs>

            <!-- Borde -->
            <path
                v-if="variant === 'outlined'"
                d="M10,2 H230 Q236,2 240,8 L256,28 Q258,30 256,32 L240,52 Q236,58 230,58 H10 Q4,58 2,52 V8 Q2,2 10,2 Z"
                fill="none"
                :stroke="strokeColor"
                stroke-width="4"
            />

            <!-- Fondo -->
            <path d="M10,2 H230 Q236,2 240,8 L256,28 Q258,30 256,32 L240,52 Q236,58 230,58 H10 Q4,58 2,52 V8 Q2,2 10,2 Z" :fill="backgroundFill" />
        </svg>
        <div class="content">
            <slot>{{ text }}</slot>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        default: '',
    },
    variant: {
        type: String,
        default: 'outlined',
        validator: (v: string) => ['outlined', 'gradient', 'filled'].includes(v),
    },
});

const backgroundFill = computed(() => {
    if (props.variant === 'gradient' || props.variant === 'outlined') return 'url(#gradient)';
    if (props.variant === 'filled') return 'var(--ui-primary-dark)';
    return 'transparent';
});

const gradientStart = computed(() => {
    return 'var(--ui-primary-dark)';
});

const gradientEnd = computed(() => {
    return 'var(--color-bfcw-white-50)';
});

const strokeColor = computed(() => {
    return 'var(--ui-component-border)';
});
</script>

<style scoped lang="scss">
.info-arrow-box {
    display: inline-flex;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 200px;
    max-height: 50px;
    transition: all 0.25s ease;

    .content {
        position: absolute;
        top: 0;
        left: 0;
        width: 160px;
        height: 90%;
        display: flex;
        align-items: center;
        padding: 8px 16px;
        color: var(--color-bfcw-white-100);
        z-index: 1;
    }

    &:hover {
        opacity: 0.5;
    }
}
</style>
