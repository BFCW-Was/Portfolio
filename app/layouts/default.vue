<template>
    <Transition name="fade">
        <!-- <Splash /> -->
        <Splash v-if="!splashDone" key="splash" @finished="splashDone = true" />

        <div v-else key="content" class="app-shell">
            <!-- <NavBar />, <Header /> o <SideBar /> -->
            <NavBar />
            <!-- <MainContent /> -->
            <main id="main-container" class="background-frame">
                <slot />
            </main>
            <!-- <Footer /> -->
            <Footer />
        </div>
    </Transition>
</template>

<script setup lang="ts">
const splashDone = ref(false);
</script>

<style lang="scss">
@use '~/assets/scss/background_frame.scss';

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
