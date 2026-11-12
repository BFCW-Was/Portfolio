<template>
    <div class="thumbnail-card decorative-border decorative-hover">
        <PrimitivesPhotoFrame class="thumbnail-photo" :image="image" :alt="title" ratio="4 / 3" :bordered="false" />

        <div class="content">
            <h3 class="title">{{ title }}</h3>
            <div class="meta">
                <span class="theme">{{ theme }}</span>
                <span class="year">{{ year }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    theme: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/decorative_border.scss';
@use '~/assets/scss/decorative_hover.scss';

.thumbnail-card {
    display: flex;
    flex-direction: column;
    width: min(100%, 15rem);
    overflow: hidden;
    background-color: var(--ui-component);
    color: var(--ui-component-text);

    .thumbnail-photo {
        border-bottom: 2px solid color-mix(in oklab, var(--ui-component-text) 10%, transparent);

        :deep(.photo-image) {
            transition: scale 300ms ease;
        }
    }

    .content {
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.75rem;

        .title {
            display: -webkit-box;
            margin: 0;
            overflow: hidden;
            font-size: 1.2rem;
            font-weight: 600;
            line-height: 1.2;
            color: var(--ui-primary);
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-clamp: 2;
        }

        .meta {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 0.5rem;
            margin-top: auto;

            .theme {
                padding: 0.25rem 0.75rem;
                border-radius: var(--ui-radius-lg);
                background-color: var(--ui-primary);
                font-size: 0.8rem;
                font-weight: 500;
                color: var(--color-bfcw-white-100);
            }

            .year {
                font-size: 1rem;
                font-weight: 500;
                color: color-mix(in oklab, var(--ui-component-text) 60%, transparent);
            }
        }
    }
}
</style>
