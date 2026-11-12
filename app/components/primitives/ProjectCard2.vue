<template>
    <div class="project-card decorative-border decorative-hover">
        <header class="project-head">
            <span v-if="index !== undefined" class="decorative-ring project-index">{{ index }}</span>
            <h4 class="project-name">{{ name }}</h4>
        </header>
        <div class="project-content">
            <div class="project-body">
                <div class="project-texts">
                    <p v-for="(line, i) in toLines(description)" :key="i" class="project-text">{{ line }}</p>
                </div>
                <span class="project-dots" aria-hidden="true">
                    <span class="decorative-ring project-dot" />
                    <span class="decorative-ring project-dot" />
                </span>
            </div>
            <PrimitivesPhotoFrame class="project-photo" :image="image" :alt="alt" :year="year" badge="bottom-right" />
        </div>
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
.project-card {
    width: 100%;
    max-width: 31.5rem;
    max-height: 31.5rem;
    overflow: hidden auto;
    scrollbar-color: var(--ui-primary-muted, var(--ui-primary)) transparent;
    scrollbar-width: thin;
    display: flex;
    flex-direction: column;
    gap: clamp(1rem, 3vw, 1.5rem);
    padding: clamp(1rem, 4vw, 2rem);

    .project-head {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        .project-index {
            --ring-size: clamp(2rem, 4vw, 4rem);

            font-size: clamp(0.9rem, 1.5vw, 2rem);
        }

        .project-name {
            margin: 0;
            font-weight: 400;
            line-height: 1.1;
        }
    }

    .project-content {
        display: flex;
        flex-wrap: wrap;
        gap: clamp(1.25rem, 4vw, 2rem);

        .project-body {
            display: flex;
            flex: 1 1 12rem;
            flex-direction: column;
            gap: 1rem;

            .project-texts {
                display: flex;
                flex-direction: column;
                gap: 1.25rem;

                .project-text {
                    margin: 0;
                    font-size: 0.875rem;
                    line-height: 1.45;
                    color: color-mix(in oklab, var(--ui-component-text) 85%, transparent);
                }
            }

            .project-dots {
                display: flex;
                gap: 0.75rem;
                align-self: flex-end;
            }
        }

        .project-photo {
            flex: 0 1 11rem;
            align-self: flex-end;
            margin-inline: auto 1rem;
        }
    }
}
</style>
