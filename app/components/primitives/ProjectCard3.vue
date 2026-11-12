<template>
    <div class="project-card decorative-border decorative-hover">
        <PrimitivesPhotoFrame class="project-photo" :image="image" :alt="alt" :year="year" badge="top-left" />
        <div class="project-header">
            <span v-if="index !== undefined" class="decorative-ring project-index">
                {{ index }}
            </span>
            <h4 class="project-name">{{ name }}</h4>
        </div>
        <p v-for="(line, i) in toLines(description)" :key="i" class="project-text">{{ line }}</p>
        <span class="project-dots" aria-hidden="true">
            <span class="decorative-ring project-dot" />
            <span class="decorative-ring project-dot" />
        </span>
        <span class="decorative-ring project-dot project-dot--corner" aria-hidden="true" />
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: [String, Array] as PropType<string | string[]>,
        required: true,
    },
    index: {
        type: [Number, String] as PropType<number | string>,
        default: undefined,
    },
    image: {
        type: String,
        default: '',
    },
    alt: {
        type: String,
        default: '',
    },
    year: {
        type: String,
        default: '',
    },
});

const toLines = (description: string | string[]) => (Array.isArray(description) ? description : [description]);
</script>

<style scoped lang="scss">
@use '~/assets/scss/decorative_border.scss';
@use '~/assets/scss/decorative_ring.scss';
@use '~/assets/scss/decorative_hover.scss';

.project-card {
    width: 100%;
    max-width: 31.5rem;
    max-height: 31.5rem;
    overflow: hidden auto;
    scrollbar-color: var(--ui-primary-muted, var(--ui-primary)) transparent;
    scrollbar-width: thin;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    padding: clamp(2rem, 6vw, 2.5rem) clamp(1rem, 4vw, 2rem);
    text-align: center;

    .project-header {
        display: flex;
        align-items: center;
        gap: 8px;

        .project-index {
            --ring-size: clamp(2rem, 3vw, 4rem);

            font-size: clamp(0.9rem, 1.5vw, 2rem);
        }
    }

    .project-photo {
        width: 10.75rem;
        max-width: 100%;
    }

    .project-name {
        margin: 0;
        font-weight: 400;
        line-height: 1.1;
    }

    .project-text {
        max-width: 36rem;
        margin: 0;
        font-size: 0.875rem;
        line-height: 1.45;
        color: color-mix(in oklab, var(--ui-component-text) 85%, transparent);
    }

    .project-dots {
        position: absolute;
        top: clamp(0.75rem, 3vw, 1.25rem);
        right: clamp(0.75rem, 3vw, 1.25rem);
        display: flex;
        gap: 0.5rem;
    }

    .project-dot {
        &--corner {
            position: absolute;
            bottom: clamp(0.75rem, 3vw, 1.25rem);
            left: clamp(0.75rem, 3vw, 1.25rem);
        }
    }
}
</style>
