<template>
    <div class="timeline-step">
        <div class="circle">{{ number }}</div>
        <div class="content">
            <h3>Step {{ number }}: {{ title }}</h3>
            <p>{{ description }}</p>
            <button v-if="buttonText" class="btn">{{ buttonText }}</button>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    number: {
        type: Number,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    buttonText: {
        type: String,
    },
});
</script>

<style scoped lang="scss">
.timeline-step {
    // Light Theme
    --tl-muted: color-mix(in oklab, var(--ui-component-text) 50%, transparent);
    --tl-line: linear-gradient(to bottom, var(--ui-primary), transparent);
    --tl-button-background: transparent;
    --tl-button-border: var(--ui-primary);
    --tl-button-text: var(--ui-component-text);

    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;
    position: relative;

    .circle {
        min-width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid var(--ui-primary);
        color: var(--ui-component-text);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        font-weight: 600;
        margin-right: 1rem;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            width: 2px;
            height: calc(100% + 1rem);
            background: var(--tl-line);
            transform: translateX(-50%);
        }
    }

    &:last-child .circle::after {
        display: none;
    }

    .content {
        h3 {
            margin: 0;
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--ui-component-text);
        }

        p {
            margin: 0.3rem 0;
            color: var(--tl-muted);
        }

        .btn {
            margin-top: 0.5rem;
            padding: 0.3rem 0.8rem;
            border: 1px solid var(--tl-button-border);
            background: var(--tl-button-background);
            color: var(--tl-button-text);
            border-radius: 20px;
            cursor: pointer;
        }
    }
}
</style>
