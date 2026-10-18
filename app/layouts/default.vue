<template>
    <Transition name="fade">
        <!-- <Splash /> -->
        <div v-if="showSplash === true" key="splash" class="splash-screen">
            <h1 class="main-title">Bastián Contreras</h1>
            <p class="subtitle">{{ subtitles[currentIndex] }}</p>
        </div>
        <div v-else-if="showSplash === false" key="content" class="app-shell">
            <!-- <Header /> o <SideBar /> -->
            <NavBar />
            <!-- <MainContent /> -->
            <main class="background-frame">
                <slot />
            </main>
            <!-- <Footer /> -->
            <Footer />
        </div>
    </Transition>
</template>

<script setup lang="ts">
// ##### Splash
const SUBTITLE_INTERVAL = 1000;
const subtitles = ['FullStack Developer', 'Games Enthusiast', 'Tech Consultant'];

const showSplash = ref<boolean | null>(null);
const currentIndex = ref(0);

let splashInterval: ReturnType<typeof setInterval> | undefined;
let splashTimeout: ReturnType<typeof setTimeout> | undefined;

const switchSubtitle = () => {
    if (sessionStorage.getItem('seenSplash') === 'true') {
        showSplash.value = false;
        return;
    }

    showSplash.value = true;
    splashInterval = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % subtitles.length;
    }, SUBTITLE_INTERVAL);

    splashTimeout = setTimeout(
        () => {
            showSplash.value = false;
            sessionStorage.setItem('seenSplash', 'true');
            clearInterval(splashInterval);
        },
        (subtitles.length - 1) * SUBTITLE_INTERVAL + 500
    );
};

onMounted(switchSubtitle);

onBeforeUnmount(() => {
    clearInterval(splashInterval);
    clearTimeout(splashTimeout);
});
</script>

<style lang="scss">
@use '~/assets/scss/background_frame.scss';
@use '~/assets/scss/splash_introduction.scss';

// Reemplazo de v-fade-transition
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
