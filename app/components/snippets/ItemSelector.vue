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

type ItemVariant = 'variant-burgundy' | 'variant-sepia' | 'variant-gray' | 'variant-cyan' | 'variant-fire' | 'variant-mustard';

interface SelectorItem {
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
    const validVariants = ['variant-burgundy', 'variant-sepia', 'variant-gray', 'variant-cyan', 'variant-fire', 'variant-mustard'];
    return validVariants.includes(variant) ? variant : 'variant-gray';
};
</script>

<style scoped lang="scss">
.item-selector {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    border: 3px dashed var(--ui-component-text);
    border-radius: 1rem;

    .selector-label {
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--ui-component-text);
    }

    .items {
        display: flex;
        gap: 2rem;

        .item {
            font-size: 1.5rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            position: relative;

            &.selected::after {
                content: '';
                position: absolute;
                bottom: -6px;
                left: 0;
                width: 100%;
                height: 4px;
                border-radius: 2px;
                background: currentColor;
            }

            $colors: (
                'variant-burgundy': var(--color-bfcw-burgundy-70),
                'variant-sepia': var(--color-bfcw-sepia-70),
                'variant-gray': var(--color-bfcw-white-20),
                'variant-cyan': var(--color-bfcw-cyan-70),
                'variant-fire': var(--color-bfcw-fire-70),
                'variant-mustard': var(--color-bfcw-mustard-70),
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
