<template>
    <button class="polygonal-button" :style="shapeStyle">
        <slot>
            <UIcon :name="icon" class="polygonal-icon" :style="{ width: iconSize + 'px', height: iconSize + 'px', fontSize: iconSize + 'px' }" />
        </slot>
    </button>
</template>

<script setup lang="ts">
const props = defineProps({
    icon: {
        type: String,
        default: '',
    },
    sides: {
        type: Number,
        default: 0,
        validator: (value: number) => value === 0 || (Number.isInteger(value) && value >= 3),
    },
    size: {
        type: Number,
        default: 100,
    },
});

const shapeStyle = computed(() => {
    if (props.sides >= 3) {
        const angle = (2 * Math.PI) / props.sides;
        const radius = 50;
        const points = Array.from({ length: props.sides }, (_, i) => {
            const x = 50 + radius * Math.cos(i * angle - Math.PI / 2);
            const y = 50 + radius * Math.sin(i * angle - Math.PI / 2);
            return `${x}% ${y}%`;
        }).join(', ');
        return {
            width: `${props.size}px`,
            height: `${props.size}px`,
            clipPath: `polygon(${points})`,
        };
    } else {
        return {
            width: `${props.size}px`,
            height: `${props.size}px`,
            borderRadius: '50%',
        };
    }
});

const iconSize = computed(() => {
    return props.size * (props.sides === 3 ? 0.35 : 0.5);
});
</script>

<style lang="scss" scoped>
.polygonal-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, var(--ui-primary-dark), var(--color-bfcw-white-50));
    color: var(--color-bfcw-white-100);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    .polygonal-icon {
        display: flex !important;
        align-items: center;
        justify-content: center;
        line-height: 1 !important;
    }

    &:hover {
        opacity: 0.5;
    }
}
</style>
