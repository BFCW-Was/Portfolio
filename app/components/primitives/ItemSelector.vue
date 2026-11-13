<template>
    <div class="item-selector">
        <label v-if="label" class="selector-label">{{ label }}</label>
        <div class="items">
            <div v-for="(item, index) in items" :key="index" :class="['item', variantClass(item.variant), { selected: modelValue === index }]" @click="updateSelection(index)">
                {{ item.label }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

export type ItemVariant = 'variant-cyan' | 'variant-burgundy' | 'variant-fire' | 'variant-mustard' | 'variant-sepia' | 'variant-gray';

export interface SelectorItem {
    label: string;
    variant: ItemVariant;
}

const props = defineProps({
    modelValue: {
        type: Number,
        default: 0,
    },
    label: {
        type: String,
        default: '',
    },
    items: {
        type: Array as PropType<SelectorItem[]>,
        required: true,
        validator: (arr: SelectorItem[]) => arr.every((i) => 'label' in i && 'variant' in i),
    },
});

const emit = defineEmits(['update:modelValue']);

const updateSelection = (index: number) => {
    emit('update:modelValue', index);
};

const variantClass = (variant: ItemVariant) => {
    const validVariants = ['variant-cyan', 'variant-burgundy', 'variant-fire', 'variant-mustard', 'variant-sepia', 'variant-gray'];
    return validVariants.includes(variant) ? variant : 'variant-gray';
};
</script>

<style scoped lang="scss">
$spring: cubic-bezier(0.35, 1.55, 0.65, 1);

.item-selector {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(0.5rem, 2vw, 1rem);
    padding: clamp(0.75rem, 3vw, 1.5rem);
    border: 3px dashed var(--ui-component-text);
    border-radius: var(--ui-radius);
    width: 100%;
    box-sizing: border-box;
    min-width: 0;

    .selector-label {
        font-size: clamp(0.95rem, 2.5vw, 1.2rem);
        font-weight: 600;
        color: var(--ui-component-text);
        text-align: center;
    }

    .items {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: clamp(0.5rem, 2vw, 1rem) clamp(0.75rem, 3vw, 2rem);
        width: 100%;
        min-width: 0;

        .item {
            font-size: clamp(0.9rem, 3vw, 1.5rem);
            font-weight: 500;
            cursor: pointer;
            transition: color 0.2s ease;
            position: relative;
            text-align: center;
            max-width: 100%;
            overflow-wrap: anywhere;
            padding: 0.25rem 0;
            line-height: 1.3;

            transition:
                color 200ms ease,
                translate 200ms $spring,
                scale 150ms ease;

            &::after {
                content: '';
                position: absolute;
                bottom: -4px;
                left: 0;
                width: 100%;
                height: 4px;
                border-radius: var(--ui-radius);
                background: currentColor;
                transform: scaleX(0);
                transition: transform 300ms $spring;
            }

            &.selected::after {
                transform: scaleX(1);
            }

            &:hover {
                translate: 0 -2px;
            }

            &:active {
                scale: 0.95;
            }

            $colors: (
                'variant-cyan': var(--color-bfcw-cyan-70),
                'variant-burgundy': var(--color-bfcw-burgundy-70),
                'variant-fire': var(--color-bfcw-fire-70),
                'variant-mustard': var(--color-bfcw-mustard-70),
                'variant-sepia': var(--color-bfcw-sepia-70),
                'variant-gray': var(--color-bfcw-white-20),
            );

            @each $name, $color in $colors {
                &.#{$name} {
                    color: color-mix(in oklab, $color 55%, transparent);

                    &.selected {
                        color: $color;
                    }
                }
            }
        }
    }
}
</style>
