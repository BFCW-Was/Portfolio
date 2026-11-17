<template>
    <div class="info-arrow-box" :class="variant">
        <svg viewBox="0 0 260 60" preserveAspectRatio="none">
            <defs>
                <linearGradient :id="gradientId" x1="0" y1="0" x2="1" y2="0">
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

const gradientId = `signage-gradient-${useId()}`;

const backgroundFill = computed(() => {
    if (props.variant === 'gradient' || props.variant === 'outlined') return `url(#${gradientId})`;
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
    position: relative;
    align-items: center;

    width: fit-content;
    min-width: 100px;
    max-width: 500px;
    min-height: 20px;

    transition: opacity 0.25s ease;

    svg {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
    }

    .content {
        position: relative;
        z-index: 1;
        width: 100%;
        min-width: 0;
        padding: 5px 30px 5px 15px;
        display: flex;
        align-items: center;
        color: var(--color-bfcw-white-100);
        overflow-wrap: anywhere;
        line-height: 1.4;
    }

    &:hover {
        opacity: 0.5;
    }
}
</style>
