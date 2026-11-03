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
.timeline {
    display: flex;
    flex-direction: column;
    position: relative;

    .timeline-step {
        display: flex;
        align-items: flex-start;
        margin-bottom: 2rem;
        position: relative;

        .circle {
            min-width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 2px solid var(--color-bfcw-cyan-50);
            color: var(--color-bfcw-white-100);
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
                background: linear-gradient(to bottom, var(--color-bfcw-cyan-50), transparent);
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
            }

            p {
                margin: 0.3rem 0;
                color: rgba(var(--color-bfcw-white-100), 0.15);
            }

            .btn {
                margin-top: 0.5rem;
                padding: 0.3rem 0.8rem;
                border: 1px solid var(--color-bfcw-cyan-50);
                background: transparent;
                color: var(--color-bfcw-white-100);
                border-radius: 20px;
                cursor: pointer;
            }
        }
    }
}
</style>
