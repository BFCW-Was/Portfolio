<template>
    <div class="panel ornamental-border ornamental-hover">
        <div class="header">
            <div class="avatar">
                <img v-if="avatar && avatarType === 'image'" :src="avatar" alt="avatar" />
                <UIcon v-else-if="avatar && avatarType === 'icon'" :name="avatar" class="avatar-icon" />
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
    avatarType: {
        type: String as () => 'image' | 'icon',
        default: 'image',
    },
    quoteIcon: {
        type: String,
        default: 'i-fa6-solid-quote-right',
    },
});
</script>

<style scoped lang="scss">
.panel {
    color: var(--ui-component-text);
    padding: 1.5rem;
    width: 100%;
    max-width: 480px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.avatar {
    width: 3rem;
    height: 3rem;
    flex-shrink: 0;
    border-radius: var(--ui-radius-circular);
    background: radial-gradient(circle at 30% 30%, var(--ui-primary), var(--ui-secondary));
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .avatar-icon {
        font-size: 1.5rem;
        color: var(--color-bfcw-white-100);
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
    color: color-mix(in oklab, var(--ui-component-text) 50%, transparent);
}

.quote-icon {
    font-size: 2rem;
    color: transparent !important;
    background: linear-gradient(to bottom, var(--ui-primary), var(--color-bfcw-white-100));
}

.content {
    font-size: 1rem;
    line-height: 1.5;
    color: var(--ui-component-text);
}
</style>
