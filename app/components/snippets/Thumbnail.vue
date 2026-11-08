<template>
    <div class="thumbnail-card">
        <!-- Imagen -->
        <div class="image-container">
            <img :src="image" alt="thumbnail" class="thumbnail-image" />
        </div>

        <!-- Contenido -->
        <div class="content">
            <div class="title">{{ title }}</div>
            <div class="theme">{{ theme }}</div>
            <div class="year">{{ year }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
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
.thumbnail-card {
    // Light Theme
    --tc-year: color-mix(in oklab, var(--ui-component-text) 60%, transparent);
    --tc-shadow: color-mix(in oklab, var(--ui-component-text) 10%, transparent);
    --tc-border: color-mix(in oklab, var(--ui-component-text) 10%, transparent);

    background-color: var(--ui-component);
    color: var(--ui-component-text);
    border-radius: var(--ui-radius);
    overflow: hidden;
    width: 240px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px var(--tc-shadow);

    .image-container {
        width: 100%;
        height: 180px;
        background-color: var(--ui-component-border);
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        img.thumbnail-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-bottom: 2px solid var(--tc-border);
        }
    }

    .content {
        padding: 0.75rem;
        position: relative;
        flex: 1;

        .title {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--ui-primary);
            margin-bottom: 0.25rem;
        }

        .theme {
            display: inline-block;
            background-color: var(--ui-primary);
            color: var(--color-bfcw-white-100);
            padding: 0.25rem 0.75rem;
            border-radius: var(--ui-radius-lg);
            font-size: 0.8rem;
            font-weight: 500;
            margin-bottom: 2rem;
        }

        .year {
            position: absolute;
            bottom: 0.5rem;
            right: 0.5rem;
            font-size: 1rem;
            color: var(--tc-year);
            font-weight: 500;
        }
    }
}
</style>
