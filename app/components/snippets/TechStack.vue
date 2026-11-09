<template>
    <ul ref="root" class="tech-stack" :class="{ 'tech-stack--active': active !== null }" :style="{ '--grow': GROW, '--overlap': `${OVERLAP}px`, maxWidth }">
        <li v-for="(item, i) in items" :key="item.name" class="tech-item" :class="{ 'tech-item--active': active === i }" :data-side="placements[i]?.side ?? 'right'">
            <button
                type="button"
                class="tech-tile decorative-tile"
                :aria-label="item.name"
                :aria-describedby="active === i ? `${uid}-card-${i}` : undefined"
                @pointerenter="onEnter(i, $event)"
                @pointerleave="onLeave(i, $event)"
                @focus="activate(i, $event)"
                @blur="deactivate(i)"
                @click="activate(i, $event)"
            >
                <UIcon :name="item.icon" />
            </button>
            <Transition name="tech-card">
                <div v-if="active === i" :id="`${uid}-card-${i}`" class="tech-card" :style="{ width: cardWidth, left: placements[i]?.side === 'below' ? `${placements[i]?.shift}px` : undefined }">
                    <div class="tech-title">{{ item.name }}</div>
                    <p v-if="item.description" class="tech-desc">{{ item.description }}</p>
                    <div v-if="item.level !== undefined" class="tech-level">
                        <div class="tech-level-head">
                            <span>{{ levelLabel }}</span>
                            <span>{{ percent(item.level) }}%</span>
                        </div>
                        <div class="tech-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" :aria-valuenow="percent(item.level)" :aria-label="`${levelLabel} de ${item.name}`">
                            <span class="tech-fill" :style="{ width: `${percent(item.level)}%` }" />
                        </div>
                    </div>
                </div>
            </Transition>
        </li>
    </ul>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

export interface TechStackItem {
    name: string;
    icon: string;
    description?: string;
    level?: number;
}

type Side = 'right' | 'left' | 'below';

const props = defineProps({
    items: {
        type: Array as PropType<TechStackItem[]>,
        required: true,
    },
    levelLabel: {
        type: String,
        default: 'Nivel',
    },
    columns: {
        type: Number,
        default: undefined,
        validator: (n: number) => Number.isInteger(n) && n > 0,
    },
});

const maxWidth = computed(() => (props.columns ? `calc(${props.columns} * var(--tile) + ${props.columns - 1} * var(--gap))` : undefined));
const GROW = 1.5;
const OVERLAP = 8;
const MARGIN = 8;
const CARD_REM = 24;
const CARD_MIN_REM = 14;
const cardWidth = `min(clamp(${CARD_MIN_REM}rem, 70vw, ${CARD_REM}rem), 100vw - ${MARGIN * 2}px)`;

const uid = useId();
const root = useTemplateRef<HTMLElement>('root');
const active = ref<number | null>(null);
const placements = reactive<Record<number, { side: Side; shift: number }>>({});
const percent = (level: number) => Math.min(100, Math.max(0, Math.round(level)));

const place = (i: number, tile: HTMLElement) => {
    const rect = (tile.parentElement as HTMLElement).getBoundingClientRect();
    const viewport = document.documentElement.clientWidth;
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const width = Math.min(Math.max(window.innerWidth * 0.7, CARD_MIN_REM * rem), CARD_REM * rem, viewport - MARGIN * 2);
    const reach = ((GROW - 1) * rect.width) / 2 - OVERLAP + width + MARGIN;

    if (viewport - rect.right >= reach) placements[i] = { side: 'right', shift: 0 };
    else if (rect.left >= reach) placements[i] = { side: 'left', shift: 0 };
    else {
        const left = Math.min(Math.max(rect.left + rect.width / 2 - width / 2, MARGIN), viewport - width - MARGIN);
        placements[i] = { side: 'below', shift: left - rect.left };
    }
};

const activate = (i: number, event: Event) => {
    place(i, event.currentTarget as HTMLElement);
    active.value = i;
};

const deactivate = (i: number) => {
    if (active.value === i) active.value = null;
};

const onEnter = (i: number, event: PointerEvent) => {
    if (event.pointerType !== 'touch') activate(i, event);
};

const onLeave = (i: number, event: PointerEvent) => {
    if (event.pointerType !== 'touch') deactivate(i);
};

const onOutside = (event: PointerEvent) => {
    if (!root.value?.contains(event.target as Node)) active.value = null;
};

const onKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') active.value = null;
};

onMounted(() => {
    document.addEventListener('pointerdown', onOutside);
    document.addEventListener('keydown', onKeydown);
});

onBeforeUnmount(() => {
    document.removeEventListener('pointerdown', onOutside);
    document.removeEventListener('keydown', onKeydown);
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/decorative_tile.scss';

$spring: cubic-bezier(0.35, 1.55, 0.65, 1);

.tech-stack {
    --tile: clamp(4rem, 20vw, 6rem);
    --gap: clamp(0.75rem, 3.5vw, 1.5rem);
    --edge: calc((var(--grow) - 1) * var(--tile) / 2);

    display: flex;
    flex-wrap: wrap;
    gap: var(--gap);
    justify-content: center;
    margin: 0 auto;
    padding: 0;
    list-style: none;

    .tech-item {
        position: relative;
        z-index: 0;
        width: var(--tile);
        height: var(--tile);
        animation: tech-in 400ms $spring backwards;
        transition: z-index 0s linear 350ms;

        &--active {
            z-index: 20;
            transition-delay: 0s;

            .tech-tile {
                box-shadow: 0 0 1.5rem -0.25rem var(--ui-primary);
                transform: scale(var(--grow));

                &::after {
                    transform: translateX(120%);
                    transition: transform 400ms ease-out;
                }
            }
        }

        .tech-tile {
            --tile-size: 100%;
            width: 100%;
            height: 100%;

            position: relative;
            z-index: 1;
            overflow: hidden;
            cursor: pointer;
            transition:
                transform 350ms $spring,
                box-shadow 300ms,
                opacity 300ms,
                filter 300ms;

            &::after {
                content: '';
                position: absolute;
                inset: 0;
                background: linear-gradient(115deg, transparent 35%, color-mix(in oklab, white 35%, transparent) 50%, transparent 65%);
                transform: translateX(-120%);
                pointer-events: none;
            }

            &:focus-visible {
                outline: 2px solid var(--ui-primary);
                outline-offset: 3px;
            }
        }

        .tech-card {
            position: absolute;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            padding: clamp(0.5rem, 2.5vw, 0.75rem) clamp(0.875rem, 4vw, 1.25rem);
            border: 1px solid var(--ui-component-border);
            border-radius: var(--ui-radius);
            background: var(--ui-component);
            color: var(--ui-component-text);
            pointer-events: none;

            &.tech-card-enter-active,
            &.tech-card-leave-active {
                transition:
                    clip-path 350ms ease,
                    transform 350ms ease,
                    opacity 250ms;
            }

            &.tech-card-enter-from,
            &.tech-card-leave-to {
                opacity: 0;
            }

            .tech-title {
                font-size: clamp(1.125rem, 4vw, 1.5rem);
                font-weight: 500;
                line-height: 1.15;
            }

            .tech-desc {
                margin: 0;
                font-size: 0.875rem;
                line-height: 1.35;
                color: color-mix(in oklab, var(--ui-component-text) 60%, transparent);
            }

            .tech-level {
                display: flex;
                flex-direction: column;
                gap: 0.25rem;
                margin-top: 0.5rem;
                padding: 0.375rem 0.5rem;
                border-radius: 0.25rem;
                background: var(--ui-bg);
                font-size: 0.6875rem;
                font-weight: 600;

                .tech-level-head {
                    display: flex;
                    justify-content: space-between;
                }

                .tech-bar {
                    height: 0.5rem;
                    overflow: hidden;
                    border-radius: 9999px;
                    background: var(--ui-component-text);

                    .tech-fill {
                        display: block;
                        height: 100%;
                        border-radius: inherit;
                        background: var(--ui-primary);
                        transform-origin: left;
                        animation: tech-fill 500ms ease-out 150ms backwards;
                    }
                }
            }
        }

        &[data-side='right'] .tech-card {
            top: 50%;
            translate: 0 -50%;
            left: calc(100% + var(--edge) - var(--overlap));
            padding-left: calc(clamp(0.5rem, 3vw, 1.25rem) + var(--overlap));

            &.tech-card-enter-from,
            &.tech-card-leave-to {
                clip-path: inset(0 100% 0 0);
                transform: translateX(-1rem);
            }
        }

        &[data-side='left'] .tech-card {
            top: 50%;
            translate: 0 -50%;
            right: calc(100% + var(--edge) - var(--overlap));
            padding-right: calc(clamp(0.5rem, 3vw, 1.25rem) + var(--overlap));

            &.tech-card-enter-from,
            &.tech-card-leave-to {
                clip-path: inset(0 0 0 100%);
                transform: translateX(1rem);
            }
        }

        &[data-side='below'] .tech-card {
            top: calc(100% + var(--edge) + 0.5rem);

            &.tech-card-enter-from,
            &.tech-card-leave-to {
                clip-path: inset(0 0 100% 0);
                transform: translateY(-0.5rem);
            }
        }
    }

    &--active .tech-item:not(.tech-item--active) .tech-tile {
        opacity: 0.45;
        filter: saturate(0.4);
    }
}

@keyframes tech-in {
    from {
        opacity: 0;
        transform: translateY(0.75rem) scale(0.6);
    }
}

@keyframes tech-fill {
    from {
        transform: scaleX(0);
    }
}
</style>
