<template>
    <nav class="icon-stack" :class="[{ 'icon-stack--floating': floating }, marginByPosition]" :data-position="position" :aria-label="label">
        <div class="stack-panel">
            <ul class="stack-list">
                <li v-for="item in items" :key="item.to + item.label">
                    <PrimitivesIconLink :icon="item.icon" :label="item.label" :to="item.to" :position="position" />
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

export interface IconStackItem {
    icon: string;
    label: string;
    to: string;
}

type Position = 'right' | 'left' | 'bottom' | 'top';

const props = defineProps({
    items: {
        type: Array as PropType<IconStackItem[]>,
        required: true,
    },
    position: {
        type: String as PropType<Position>,
        default: 'right',
        validator: (v: string) => ['right', 'left', 'bottom', 'top'].includes(v),
    },
    label: {
        type: String,
        default: 'Enlaces',
    },
    floating: {
        type: Boolean,
        default: true,
    },
});

const marginByPosition = computed(() => {
    const classes: Record<Position, string> = {
        right: 'ms-4',
        left: 'me-4',
        top: 'mb-4',
        bottom: 'mt-4',
    };

    return classes[props.position];
});
</script>

<style scoped lang="scss">
$tile: 36px;
$pad: 0.75rem;
$bar: calc(#{$tile} + #{$pad} * 2);
$fade: 20%;

.icon-stack {
    position: relative;
    display: flex;

    .stack-panel {
        position: relative;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        color: var(--ui-component-text);

        &::before,
        &::after {
            content: '';
            position: absolute;
            pointer-events: none;
        }

        &::before {
            inset: 0;
            background: var(--ui-component);
        }
    }

    &:is([data-position='left'], [data-position='right']) {
        .stack-panel {
            padding: 1rem $pad;

            &::before {
                mask-image: linear-gradient(to bottom, transparent, black $fade, black calc(100% - #{$fade}), transparent), linear-gradient(to right, black calc(100% - 1rem), transparent);
                mask-composite: intersect;
            }

            &::after {
                top: 0;
                bottom: 0;
                width: 1px;
                background: linear-gradient(to bottom, transparent, var(--ui-component-border) 50%, transparent);
            }
        }

        .stack-list {
            flex-direction: column;
        }
    }

    &[data-position='left'] {
        .stack-panel::after {
            right: 0;
        }
    }

    &[data-position='right'] {
        .stack-panel::after {
            left: 0;
        }
    }

    &:is([data-position='top'], [data-position='bottom']) {
        .stack-panel {
            padding: $pad 1rem;

            &::before {
                mask-image: linear-gradient(to right, transparent, black $fade, black calc(100% - #{$fade}), transparent);
            }

            &::after {
                right: 0;
                left: 0;
                height: 1px;
                background: linear-gradient(to right, transparent, var(--ui-component-border) 50%, transparent);
            }
        }
    }

    &[data-position='top'] {
        .stack-panel::after {
            bottom: 0;
        }
    }

    &[data-position='bottom'] {
        .stack-panel::after {
            top: 0;
        }
    }

    &--floating {
        .stack-panel {
            position: fixed;
            z-index: 40;
        }

        &:is([data-position='left'], [data-position='right']) {
            width: $bar;

            .stack-panel {
                inset-block: 0;
                width: $bar;
                height: 100%;
                max-height: calc(100dvh - (3 * clamp(1.25rem, 2dvw, 1.75rem)));
                margin-block: auto;
            }
        }

        &:is([data-position='top'], [data-position='bottom']) {
            height: $bar;

            .stack-panel {
                right: 0;
                left: 0;
                height: $bar;
            }
        }

        &[data-position='top'] {
            .stack-panel {
                top: 0;
            }
        }

        &[data-position='bottom'] {
            .stack-panel {
                bottom: 0;
            }
        }
    }

    .stack-list {
        position: relative;
        display: flex;
        gap: 1.5rem;
        margin: 0;
        padding: 0;
        list-style: none;
    }
}
</style>
