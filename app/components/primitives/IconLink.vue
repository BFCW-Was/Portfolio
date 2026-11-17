<template>
    <NuxtLink :to="to" :target="isExternal ? '_blank' : undefined" :aria-label="label" class="icon-link" :data-position="position">
        <span class="icon-link-tile">
            <UIcon :name="icon" class="icon-link-icon" />
        </span>

        <span class="icon-link-tip ornamental-title" aria-hidden="true">
            {{ label }}
        </span>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

type Position = 'right' | 'left' | 'bottom' | 'top';

const props = defineProps({
    icon: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    position: {
        type: String as PropType<Position>,
        default: 'right',
        validator: (v: string) => ['right', 'left', 'bottom', 'top'].includes(v),
    },
});

const isExternal = computed(() => /^(https?:)?\/\//.test(props.to));
</script>

<style scoped lang="scss">
$tile: 36px;
$tip-offset: 0.75rem;

.icon-link {
    position: relative;
    display: block;
    border-radius: 0.25rem;
    color: inherit;
    text-decoration: none;

    &:focus-visible {
        outline: 2px solid var(--ui-primary);
        outline-offset: 3px;
    }

    &:is(:hover, :focus-visible) {
        .icon-link-tile {
            box-shadow: 0 0 0.75rem -0.125rem var(--ui-primary);
            transform: translateY(-2px) scale(1.1);
        }

        .icon-link-tip {
            opacity: 1;
            visibility: visible;
            transform: none;
            transition-delay: 0s;
        }
    }

    .icon-link-tile {
        display: flex;
        align-items: center;
        justify-content: center;
        width: $tile;
        height: $tile;
        border-radius: 0.25rem;
        background: linear-gradient(to bottom, var(--ui-primary-muted, var(--ui-primary)), transparent);
        transition:
            transform 200ms cubic-bezier(0.35, 1.55, 0.65, 1),
            box-shadow 200ms;
    }

    .icon-link-icon {
        width: 55%;
        height: 55%;
    }

    .icon-link-tip {
        position: absolute;
        z-index: 10;
        width: max-content;
        max-width: min(16rem, calc(100dvw - 7rem));
        white-space: normal;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition:
            opacity 150ms,
            transform 150ms,
            visibility 0s linear 150ms;
    }

    &[data-position='left'] {
        .icon-link-tip {
            top: 50%;
            left: calc(100% + #{$tip-offset});
            translate: 0 -50%;
            transform: translateX(-0.25rem);
        }
    }

    &[data-position='right'] {
        .icon-link-tip {
            top: 50%;
            right: calc(100% + #{$tip-offset});
            translate: 0 -50%;
            transform: translateX(0.25rem);
        }
    }

    &[data-position='top'] {
        .icon-link-tip {
            top: calc(100% + #{$tip-offset});
            left: 50%;
            translate: -50% 0;
            transform: translateY(-0.25rem);
        }
    }

    &[data-position='bottom'] {
        .icon-link-tip {
            bottom: calc(100% + #{$tip-offset});
            left: 50%;
            translate: -50% 0;
            transform: translateY(0.25rem);
        }
    }
}
</style>
