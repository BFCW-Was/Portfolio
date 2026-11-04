<template>
    <div class="panel">
        <div class="header">
            <div class="avatar">
                <img v-if="avatar" :src="avatar" alt="avatar" />
            </div>
            <div class="user-info">
                <div class="name">{{ name }}</div>
                <div class="position">{{ position }}</div>
            </div>
            <UIcon class="quote-icon" :name="quoteIcon" />
        </div>
        <div class="content">{{ text }}</div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: '',
    },
    quoteIcon: {
        type: String,
        default: 'i-fa6-solid-quote-right',
    },
});
</script>

<style scoped lang="scss">
.panel {
    // Light Theme
    --panel-bg: var(--color-bfcw-white-90);
    --panel-text: var(--color-bfcw-black-90);
    --panel-position: color-mix(in oklab, var(--panel-text) 50%, transparent);
    --panel-content: color-mix(in oklab, var(--panel-text) 90%, transparent);
    --panel-shadow: color-mix(in oklab, var(--color-bfcw-cyan-100) 15%, transparent);

    background-color: var(--panel-bg);
    color: var(--panel-text);
    padding: 1.5rem;
    border-radius: 1rem;
    border-top: 3px solid var(--color-bfcw-cyan-70);
    width: 100%;
    max-width: 480px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-shadow: 0 4px 12px var(--panel-shadow);
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, var(--color-bfcw-cyan-70), var(--color-bfcw-indigo-70));
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.user-info {
    flex: 1;
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
}

.name {
    font-weight: 600;
    font-size: 1rem;
}

.position {
    font-size: 0.75rem;
    color: var(--panel-position);
}

.quote-icon {
    color: var(--color-bfcw-cyan-70);
    font-size: 2rem;
}

.content {
    font-size: 1rem;
    line-height: 1.5;
    color: var(--panel-content);
}

// Dark Theme
.dark .panel {
    --panel-bg: var(--color-bfcw-black-100);
    --panel-text: var(--color-bfcw-white-90);
    --panel-shadow: color-mix(in oklab, var(--color-bfcw-black-100) 50%, transparent);
}

// Sepia Theme
.theme-sepia .panel {
    --panel-bg: var(--color-bfcw-black-70);
    --panel-text: var(--color-bfcw-white-90);
    --panel-shadow: color-mix(in oklab, var(--color-bfcw-sepia-100) 50%, transparent);
}
</style>
