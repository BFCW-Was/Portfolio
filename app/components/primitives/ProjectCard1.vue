<template>
    <div class="project-card decorative-border decorative-hover">
        <PrimitivesPhotoFrame class="project-photo" :image="image" :alt="alt" :year="year" ratio="1" badge="bottom-left" />
        <div class="project-body">
            <span v-if="index !== undefined" class="decorative-ring project-index">{{ index }}</span>
            <h4 class="project-name">{{ name }}</h4>
            <p v-for="(line, i) in toLines(description)" :key="i" class="project-text">{{ line }}</p>
        </div>
        <span class="decorative-ring project-dot" aria-hidden="true" />
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
    max-width: 57rem;
    max-height: 31.5rem;
    overflow: hidden auto;
    scrollbar-color: var(--ui-primary-muted, var(--ui-primary)) transparent;
    scrollbar-width: thin;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: clamp(1.25rem, 4vw, 3rem);
    padding: clamp(1rem, 5vw, 4rem);

    .project-photo {
        flex: 1 1 14rem;
        max-width: 22.5rem;
    }

    .project-body {
        display: flex;
        flex: 1 1 16rem;
        flex-direction: column;
        gap: 0.75rem;

        .project-index {
            --ring-size: clamp(2rem, 4vw, 4rem);

            font-size: clamp(0.9rem, 1.5vw, 2rem);
        }

        .project-name {
            margin: 0;
            font-weight: 400;
            line-height: 1.1;
        }

        .project-text {
            margin: 0;
            font-size: 0.875rem;
            line-height: 1.45;
            color: color-mix(in oklab, var(--ui-component-text) 85%, transparent);
        }
    }

    .project-dot {
        position: absolute;
        top: clamp(1rem, 3vw, 2rem);
        right: clamp(1rem, 4vw, 3rem);
        pointer-events: none;
    }
}
</style>
