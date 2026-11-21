<template>
    <div class="step-flow" :style="{ '--count': items.length, '--size': `${size}px` }">
        <template v-for="(item, index) in items" :key="item.name">
            <span v-if="index" class="link" aria-hidden="true" />
            <div class="node">
                <PrimitivesPolygonalIcon :icon="item.icon" :sides="6" :size="size" />
                <strong>{{ item.name }}</strong>
                <small v-if="item.role">{{ item.role }}</small>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
export interface StepFlowItem {
    name: string;
    icon: string;
    role?: string;
}

const props = defineProps({
    items: {
        type: Array as PropType<StepFlowItem[]>,
        required: true,
    },
    size: {
        type: Number,
        default: 80,
    },
});
</script>

<style lang="scss" scoped>
@use '~/assets/scss/animations/animation_sweep.scss';

.step-flow {
    display: flex;
    align-items: flex-start;
    width: min(100%, calc(var(--count) * 12rem));

    .node {
        display: flex;
        flex: 0 1 6rem;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
        min-width: var(--size);
        text-align: center;

        small {
            font-size: 0.7rem;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: var(--ui-text-muted);
        }
    }

    .link {
        position: relative;
        flex: 1 1 0;
        min-width: 1rem;
        margin: -0.75rem;
        height: 2px;
        margin-top: calc(var(--size) / 2 - 1px);
        background: color-mix(in srgb, var(--ui-secondary) 55%, transparent);

        &::after {
            content: '';
            position: absolute;
            top: 50%;
            width: 0.5rem;
            height: 0.5rem;
            margin-top: -0.25rem;
            border-radius: 50%;
            background: var(--ui-primary);
            animation: sweep 2.4s linear infinite;
        }
    }
}
</style>
