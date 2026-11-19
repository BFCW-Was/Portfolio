<template>
    <div v-if="isVisible" class="splash-screen">
        <h1 class="main-title">Bastián Contreras Wasilkowski</h1>
        <p class="subtitle">{{ subtitles[currentIndex] }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    subtitles: {
        type: Array as PropType<string[]>,
        default: () => ['FullStack Developer', 'Games Enthusiast', 'Tech Consultant'],
    },
    intervalMs: {
        type: Number,
        default: 1000,
    },
    storageKey: {
        type: String,
        default: 'seenSplash',
    },
});

const emit = defineEmits({
    finished: () => true,
});

const isVisible = ref(false);
const currentIndex = ref(0);

let splashInterval: ReturnType<typeof setInterval> | undefined;
let splashTimeout: ReturnType<typeof setTimeout> | undefined;

const finishSplash = (markAsSeen = true) => {
    clearInterval(splashInterval);
    clearTimeout(splashTimeout);

    if (markAsSeen && import.meta.client) {
        sessionStorage.setItem(props.storageKey, 'true');
    }

    isVisible.value = false;
    emit('finished');
};

onMounted(() => {
    if (sessionStorage.getItem(props.storageKey) === 'true') {
        emit('finished');
        return;
    }

    isVisible.value = true;

    splashInterval = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % props.subtitles.length;
    }, props.intervalMs);

    const totalDuration = (props.subtitles.length - 1) * props.intervalMs + 500;
    splashTimeout = setTimeout(() => {
        finishSplash(true);
    }, totalDuration);
});

onBeforeUnmount(() => {
    clearInterval(splashInterval);
    clearTimeout(splashTimeout);
});
</script>

<style scoped>
.splash-screen {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
    background-color: var(--ui-bg);
    color: var(--ui-text);

    .main-title {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 16px;
        animation: fadeIn 1s ease-in-out forwards;
    }

    .subtitle {
        font-size: 1.5rem;
        opacity: 0;
        animation: fadeSlide 0.5s ease-in-out forwards;
        animation-duration: 0.6s;
    }

    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }

    @keyframes fadeSlide {
        0% {
            opacity: 0;
            transform: translateY(10px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
}
</style>
