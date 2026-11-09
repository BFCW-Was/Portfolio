<template>
    <nav class="icon-stack" :class="[{ 'icon-stack--floating': floating }, marginByPosition]" :data-position="position" :aria-label="label">
        <div class="stack-panel">
            <ul class="stack-list">
                <li v-for="item in items" :key="item.to + item.label">
                    <NuxtLink :to="item.to" :target="isExternal(item.to) ? '_blank' : undefined" :aria-label="item.label" class="stack-item">
                        <span class="stack-tile">
                            <UIcon :name="item.icon" class="stack-icon" />
                        </span>
                        <span class="stack-tip decorative-title" aria-hidden="true">{{ item.label }}</span>
                    </NuxtLink>
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

const isExternal = (to: string) => /^(https?:)?\/\//.test(to);
</script>

<style scoped lang="scss">
@use '~/assets/scss/decorative_title.scss';

$tile: 36px;
$pad: 0.75rem;
$bar: calc(#{$tile} + #{$pad} * 2);
$tip-offset: 0.75rem;
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

    &[data-position='left'] .stack-panel::after {
        right: 0;
    }

    &[data-position='right'] .stack-panel::after {
        left: 0;
    }

    &:is([data-position='top'], [data-position='bottom']) .stack-panel {
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

    &[data-position='top'] .stack-panel::after {
        bottom: 0;
    }

    &[data-position='bottom'] .stack-panel::after {
        top: 0;
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

        &[data-position='top'] .stack-panel {
            top: 0;
        }

        &[data-position='bottom'] .stack-panel {
            bottom: 0;
        }
    }

    .stack-list {
        position: relative;
        display: flex;
        gap: 1.5rem;
        margin: 0;
        padding: 0;
        list-style: none;

        .stack-item {
            position: relative;
            display: block;
            border-radius: 0.25rem;
            color: inherit;
            text-decoration: none;

            &:focus-visible {
                outline: 2px solid var(--ui-primary);
                outline-offset: 3px;
            }

            .stack-tile {
                display: flex;
                align-items: center;
                justify-content: center;
                width: $tile;
                height: $tile;
                border-radius: 0.25rem;
                background: linear-gradient(to bottom, var(--ui-primary-muted, var(--ui-primary)), transparent);
                transition:
                    transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1),
                    box-shadow 200ms;

                .stack-icon {
                    width: 55%;
                    height: 55%;
                }
            }

            .stack-tip {
                width: max-content;
                max-width: min(16rem, calc(100dvw - 7rem));
                white-space: normal;
                position: absolute;
                z-index: 10;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                transition:
                    opacity 150ms,
                    transform 150ms,
                    visibility 0s linear 150ms;
            }

            &:is(:hover, :focus-visible) {
                .stack-tile {
                    box-shadow: 0 0 0.75rem -0.125rem var(--ui-primary);
                    transform: translateY(-2px) scale(1.1);
                }

                .stack-tip {
                    opacity: 1;
                    visibility: visible;
                    transform: none;
                    transition-delay: 0s;
                }
            }
        }
    }

    &[data-position='left'] .stack-tip {
        top: 50%;
        left: calc(100% + #{$tip-offset});
        translate: 0 -50%;
        transform: translateX(-0.25rem);
    }

    &[data-position='right'] .stack-tip {
        top: 50%;
        right: calc(100% + #{$tip-offset});
        translate: 0 -50%;
        transform: translateX(0.25rem);
    }

    &[data-position='top'] .stack-tip {
        top: calc(100% + #{$tip-offset});
        left: 50%;
        translate: -50% 0;
        transform: translateY(-0.25rem);
    }

    &[data-position='bottom'] .stack-tip {
        bottom: calc(100% + #{$tip-offset});
        left: 50%;
        translate: -50% 0;
        transform: translateY(0.25rem);
    }
}
</style>
