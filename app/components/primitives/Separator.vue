<template>
    <div class="separator" :class="separatorClasses" :style="{ '--separator-thickness': thickness }" role="separator" aria-orientation="horizontal">
        <span v-if="symbol" class="separator__symbol" :class="symbolClass" aria-hidden="true">
            <span v-for="index in decoration" :key="index" class="separator__bar" />
        </span>
    </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue';

const props = defineProps({
    variant: {
        type: String as PropType<'default' | 'subtle'>,
        default: 'default',
        validator: (value: string) => ['default', 'subtle'].includes(value),
    },
    thickness: {
        type: String,
        default: '3px',
    },
    symbol: {
        type: Boolean,
        default: true,
    },
    decoration: {
        type: Number as PropType<1 | 2 | 3>,
        default: 2,
        validator: (value: number) => [1, 2, 3].includes(value),
    },
});

const separatorClasses = computed(() => ({
    'separator--subtle': props.variant === 'subtle',
    'separator--without-symbol': !props.symbol,
}));

const symbolClass = computed(() => ({
    'separator__symbol--1': props.decoration === 1,
    'separator__symbol--2': props.decoration === 2,
    'separator__symbol--3': props.decoration === 3,
}));
</script>

<style lang="scss" scoped>
.separator {
    --separator-color: var(--ui-secondary);

    display: flex;
    align-items: center;
    width: 100%;
    min-height: 38px;
    gap: 20px;

    &::before,
    &::after {
        content: '';
        flex: 1;
        height: var(--separator-thickness);
        background-color: var(--separator-color);
        border-radius: var(--ui-radius-sm);
    }

    &__symbol {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        gap: 4px;
        transform: rotate(30deg);
    }

    &__bar {
        display: block;
        width: 8px;
        height: 24px;
        flex-shrink: 0;
        background-color: var(--separator-color);
        border-radius: 1px;
    }

    &__symbol--1 &__bar {
        width: 10px;
        height: 25px;
    }

    &__symbol--2 &__bar:first-child {
        width: 10px;
        height: 25px;
    }

    &__symbol--2 &__bar:last-child {
        width: 6px;
        height: 15px;
    }

    &__symbol--3 &__bar:first-child,
    &__symbol--3 &__bar:last-child {
        width: 6px;
        height: 15px;
    }

    &__symbol--3 &__bar:nth-child(2) {
        width: 10px;
        height: 25px;
    }

    &--subtle {
        --separator-color: color-mix(in srgb, var(--ui-secondary) 55%, transparent);
    }

    &--without-symbol {
        gap: 0;
    }

    @media (max-width: 480px) {
        gap: 12px;

        &__bar {
            height: 21px;
        }

        &__symbol--1 &__bar {
            height: 21px;
        }

        &__symbol--2 &__bar:first-child {
            height: 21px;
        }

        &__symbol--2 &__bar:last-child {
            height: 12px;
        }

        &__symbol--3 &__bar:first-child,
        &__symbol--3 &__bar:last-child {
            height: 12px;
        }

        &__symbol--3 &__bar:nth-child(2) {
            height: 21px;
        }
    }
}
</style>
