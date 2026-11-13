<template>
    <li ref="root" class="timeline-step motion-reduce:[--motion:0]" :data-variant="current" :data-reveal="reveal">
        <span v-if="current === 'dot'" class="step-label">
            <span v-if="label" class="step-tag">{{ label }}</span>
        </span>

        <div class="step-marker" aria-hidden="true">
            <span class="step-node">{{ current === 'number' ? number : '' }}</span>
            <span class="step-line" />
        </div>

        <div class="step-content">
            <h3 class="step-title">{{ current === 'number' ? `Step ${number}: ${title}` : title }}</h3>
            <p v-if="description" class="step-text">{{ description }}</p>
            <button v-if="buttonText" type="button" class="step-button">{{ buttonText }}</button>
        </div>
    </li>
</template>

<script setup lang="ts">
import type { PropType, Ref } from 'vue';

type Variant = 'number' | 'dot';

const props = defineProps({
    number: {
        type: Number,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    buttonText: {
        type: String,
    },
    label: {
        type: String,
    },
    variant: {
        type: String as PropType<Variant>,
        default: undefined,
        validator: (v: string) => ['number', 'dot'].includes(v),
    },
});

const parent = inject<Ref<Variant> | undefined>('timelineVariant', undefined);
const current = computed<Variant>(() => props.variant ?? parent?.value ?? 'number');
const root = useTemplateRef<HTMLElement>('root');
const reveal = ref<'hidden' | 'shown'>();
let observer: IntersectionObserver | undefined;

onMounted(() => {
    reveal.value = 'hidden';
    observer = new IntersectionObserver(
        ([entry]) => {
            if (!entry?.isIntersecting) return;
            reveal.value = 'shown';
            observer?.disconnect();
        },
        { threshold: 0.2 }
    );
    if (root.value) observer.observe(root.value);
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<style scoped lang="scss">
$spring: cubic-bezier(0.35, 1.55, 0.65, 1);
$row: 1rem;
$dot: 1rem;

.timeline-step {
    --label-width: clamp(3.5rem, 14vw, 5rem);

    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 0.75rem;
    align-items: start;
    margin: 0;
    padding: 0;
    list-style: none;

    &[data-variant='dot'] {
        grid-template-columns: var(--label-width) auto 1fr;
    }

    .step-label {
        display: flex;
        justify-content: flex-end;
        min-width: 20px;
        transition:
            opacity 400ms ease 100ms,
            translate 500ms $spring 100ms;

        .step-tag {
            overflow: hidden;
            padding: 0 1rem 0 0.625rem;
            border-radius: 0.25rem;
            background: var(--ui-secondary, var(--ui-primary));
            clip-path: polygon(0 0, calc(100% - 0.5rem) 0, 100% 50%, calc(100% - 0.5rem) 100%, 0 100%);
            font-size: 0.75rem;
            font-weight: 600;
            line-height: $row;
            color: var(--color-bfcw-white-100);
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    .step-marker {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: stretch;

        .step-node {
            display: flex;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            transition:
                scale 500ms $spring,
                transform 250ms $spring,
                box-shadow 300ms,
                background 300ms;
        }

        .step-line {
            flex: 1;
            width: 2px;
            margin-block: 0.5rem;
            background: linear-gradient(to bottom, var(--ui-primary), transparent);
            transform-origin: top;
            transition: transform 700ms ease-out 250ms;
        }
    }

    &[data-variant='number'] .step-node {
        width: 2.5rem;
        height: 2.5rem;
        border: 2px solid var(--ui-primary);
        border-radius: var(--ui-radius-circular, 9999px);
        background: linear-gradient(to bottom, color-mix(in oklab, var(--ui-primary) 25%, transparent), transparent);
        font-size: 1rem;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        color: var(--ui-component-text);
    }

    &[data-variant='dot'] .step-node {
        width: $dot;
        height: $dot;
        margin-top: calc((#{$row} - #{$dot}) / 2);
        border-radius: var(--ui-radius-circular, 9999px);
        background: var(--ui-primary);
        box-shadow: 0 0 0 0.25rem color-mix(in oklab, var(--ui-primary) 25%, transparent);
    }

    .step-content {
        padding-bottom: 2rem;
        transition:
            opacity 500ms ease 150ms,
            translate 500ms ease 150ms;

        .step-title {
            margin: 0;
            font-size: 1.2rem;
            font-weight: 600;
            line-height: $row;
            color: var(--ui-component-text);
        }

        .step-text {
            margin: 0.3rem 0;
            color: color-mix(in oklab, var(--ui-component-text) 50%, transparent);
        }

        .step-button {
            margin-top: 0.5rem;
            padding: 0.3rem 0.8rem;
            border: 1px solid var(--ui-primary);
            border-radius: var(--ui-radius);
            background: transparent;
            color: var(--ui-component-text);
            cursor: pointer;
            transition:
                background 200ms,
                box-shadow 200ms;

            &:hover {
                background: color-mix(in oklab, var(--ui-primary) 20%, transparent);
                box-shadow: 0 0 0.75rem -0.25rem var(--ui-primary);
            }

            &:focus-visible {
                outline: 2px solid var(--ui-primary);
                outline-offset: 2px;
            }
        }
    }

    &[data-variant='number'] .step-content {
        padding-top: calc((2.5rem - #{$row}) / 2);
    }

    &:last-child {
        .step-line {
            display: none;
        }

        .step-content {
            padding-bottom: 0;
        }
    }

    &:hover .step-node {
        transform: scale(1.1);
    }

    &[data-variant='number']:hover .step-node {
        background: color-mix(in oklab, var(--ui-primary) 35%, transparent);
        box-shadow: 0 0 1rem -0.25rem var(--ui-primary);
    }

    &[data-variant='dot']:hover .step-node {
        animation: step-pulse 1200ms ease-out infinite;
    }

    &[data-reveal='hidden'] {
        .step-node {
            scale: 0;
        }

        .step-line {
            transform: scaleY(0);
        }

        .step-label {
            opacity: 0;
            translate: -0.75rem 0;
        }

        .step-content {
            opacity: 0;
            translate: 0 0.75rem;
        }
    }
}

@keyframes step-pulse {
    from {
        box-shadow:
            0 0 0 0.25rem color-mix(in oklab, var(--ui-primary) 25%, transparent),
            0 0 0 0.25rem color-mix(in oklab, var(--ui-primary) 50%, transparent);
    }

    to {
        box-shadow:
            0 0 0 0.25rem color-mix(in oklab, var(--ui-primary) 25%, transparent),
            0 0 0 1rem transparent;
    }
}
</style>
