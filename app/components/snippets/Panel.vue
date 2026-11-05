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
    --panel-position: color-mix(in oklab, var(--ui-component-text) 50%, transparent);
    --panel-content: color-mix(in oklab, var(--ui-component-text) 90%, transparent);
    --panel-shadow: color-mix(in oklab, var(--ui-tertiary) 15%, transparent);

    background-color: var(--ui-component);
    color: var(--ui-component-text);
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
    color: var(--ui-primary);
    font-size: 2rem;
}

.content {
    font-size: 1rem;
    line-height: 1.5;
    color: var(--panel-content);
}
</style>
