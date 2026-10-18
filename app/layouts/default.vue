<template>
    <!-- <Body /> -->
    <v-app>
        <v-fade-transition class="w-100 h-100">
            <!-- <Splash /> -->
            <div v-if="showSplash === true" class="splash-screen">
                <h1 class="main-title">Bastián Contreras</h1>
                <p class="subtitle">{{ subtitles[currentIndex] }}</p>
            </div>
            <div v-if="showSplash === false">
                <!-- <NavBar /> o <SideBar /> -->
                <NavBar />
                <!-- <MainContent /> -->
                <v-main class="background-frame">
                    <NuxtRouteAnnouncer />
                    <NuxtPage/>
                </v-main>
                <!-- <Footer /> -->
                <Footer />
            </div>
        </v-fade-transition>
    </v-app>
</template>

<script setup>
// ##### Imports
import { ref, onMounted } from 'vue';

// ##### Splash
const showSplash = ref(null);
const subtitles = ['FullStack Developer', 'Games Enthusiast', 'Tech Consultant'];
const currentIndex = ref(0);

const switchSubtitle = () => {
    const sessionSplash = sessionStorage.getItem('seenSplash') === 'true';
    if (sessionSplash) {
        showSplash.value = false;
        return;
    }
    else {
        showSplash.value = true;
        const splashInterval = setInterval(() => {
            currentIndex.value = (currentIndex.value + 1) % subtitles.length;
        }, 1000);
    
        setTimeout(() => {
            showSplash.value = false;
            sessionStorage.setItem('seenSplash', 'true');
            clearInterval(splashInterval);
        }, ((subtitles.length - 1) * 1000) + 500);
    }
};
onMounted(switchSubtitle);
</script>

<style lang="scss">
@use "~/assets/styles/global/_typography.scss";
@use "~/assets/styles/components/background_frame.scss";
@use "~/assets/styles/components/splash_introduction.scss";
</style>