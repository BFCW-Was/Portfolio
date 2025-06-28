<template>
    <!-- <Body /> -->
    <v-app>
        <v-fade-transition>
            <div v-if="showSplash === true" class="splash-screen">
                <h1 class="main-title">Bastián Contreras</h1>
                <p class="subtitle">{{ subtitles[currentIndex] }}</p>
            </div>
            <div v-if="showSplash === false">
                <!-- <NavBar /> o <SideBar /> -->
                <!-- <MainContent /> -->
                <v-main class="background-frame">
                    <NuxtRouteAnnouncer />
                    <NuxtPage/>
                </v-main>
                <!-- <Footer /> -->
                <footer style="background: none; margin: 20px;">
                    <!-- (languageSelector + darkMode) -->
                    <div style="position: fixed; bottom: 20px; right: 20px; display: flex; gap: 8px;">
                        <v-btn icon :color="isActiveTheme('light') ? 'primary' : ''" title="⚠️ Dont Use This ⚠️ - It will burn your eyes. That's why it's a sun." @click="setTheme('light')">
                            <v-icon>fa fa-sun</v-icon>
                        </v-btn>
                        <v-btn icon :color="isActiveTheme('dark') ? 'primary' : ''" title="Dark Theme 😃" @click="setTheme('dark')">
                            <v-icon>fa fa-moon</v-icon>
                        </v-btn>
                        <v-btn icon :color="isActiveTheme('sepia') ? 'primary' : ''" title="Sepia Theme 🚬🗿. Always a pleasure have a cool alternative like this." @click="setTheme('sepia')">
                            <v-icon>fa fa-book</v-icon>
                        </v-btn>
                    </div>
                    <p style="position: fixed; bottom: 20px;">
                        Copyright © 2025 by
                        <a class="text-primary" href="https://www.linkedin.com/in/basti%C3%A1ncontreraswasilkowski/" target="_blank" rel="noopener noreferrer">Bastián Contreras Wasilkowski</a>.
                        Licensed under <a class="text-secondary" href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-ND 4.0</a>
                    </p>
                </footer>
            </div>
        </v-fade-transition>
    </v-app>
</template>

<script setup>
import { useTheme } from 'vuetify';
import { ref, onMounted } from 'vue';

// Theme Changing
const theme = useTheme();
const setTheme = (name) => {
  theme.global.name.value = name;
};
const isActiveTheme = (name) => theme.global.name.value === name;

// Splash
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