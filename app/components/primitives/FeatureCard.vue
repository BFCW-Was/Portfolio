<template>
    <div class="feature-card decorative-border decorative-hover">
        <div class="feature-body" tabindex="0" role="region" :aria-label="name" :style="{ maxHeight }">
            <span class="decorative-tile">
                <UIcon :name="icon" />
            </span>
            <h3 class="feature-name">{{ name }}</h3>
            <p v-if="description" class="feature-desc">{{ description }}</p>
            <div v-for="(feature, i) in features" :key="i" class="feature-item">
                <h4 class="feature-title">{{ feature.title }}</h4>
                <p v-for="(line, j) in toLines(feature.description)" :key="j" class="feature-text">{{ line }}</p>
            </div>
        </div>
        <span class="decorative-ring feature-ring" aria-hidden="true" />
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

export interface FeatureItem {
    title: string;
    description: string | string[];
}

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: '',
    },
    features: {
        type: Array as PropType<FeatureItem[]>,
        default: () => [],
    },
    maxHeight: {
        type: String,
        default: '36rem',
    },
});

const toLines = (description: string | string[]) => (Array.isArray(description) ? description : [description]);
</script>

<style scoped lang="scss">
$muted: color-mix(in oklab, var(--ui-component-text) 85%, transparent);

.feature-card {
    position: relative;
    width: 100%;
    max-width: 24rem;
    overflow: hidden;
    text-align: center;

    .feature-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 2rem 1.5rem 4.5rem;
        overflow-y: auto;
        scrollbar-color: var(--ui-primary-muted, var(--ui-primary)) transparent;
        scrollbar-gutter: stable both-edges;
        scrollbar-width: thin;

        &:focus-visible {
            outline: 2px solid var(--ui-primary);
            outline-offset: -2px;
        }

        .feature-name {
            margin: 0.25rem 0 0;
            font-size: 2rem;
            font-weight: 400;
            line-height: 1.1;
        }

        .feature-desc {
            margin: 0;
            font-size: 1rem;
            font-weight: 300;
            line-height: 1.6;
            color: $muted;
        }

        .feature-item {
            display: flex;
            flex-direction: column;
            gap: 0.125rem;
            margin-top: 1.5rem;

            .feature-title {
                margin: 0 0 0.25rem;
                font-size: 1.375rem;
                font-weight: 400;
                line-height: 1.2;
            }

            .feature-text {
                margin: 0;
                font-size: 0.9375rem;
                font-weight: 300;
                line-height: 1.5;
                color: $muted;
            }
        }
    }

    .feature-ring {
        position: absolute;
        bottom: 1.25rem;
        left: 1.25rem;
        pointer-events: none;
    }
}
</style>
