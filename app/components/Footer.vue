<template>
    <footer class="footer-layout">
        <!-- Language Selector -->
        <div class="language">
            <!-- languages -->
        </div>
        <!-- Color Mode Selector -->
        <div class="color-mode">
            <v-btn variant="outlined" size="small" density="comfortable" icon :color="isActiveTheme('light') ? 'primary' : ''" title="⚠️ Dont Use This ⚠️ - It will burn your eyes. That's why it's a sun." @click="setTheme('light')">
                <v-icon size="small">fa fa-sun</v-icon>
            </v-btn>
            <v-btn variant="outlined" size="small" density="comfortable" icon :color="isActiveTheme('dark') ? 'primary' : ''" title="Dark Theme 😃" @click="setTheme('dark')">
                <v-icon size="small">fa fa-moon</v-icon>
            </v-btn>
            <v-btn variant="outlined" size="small" density="comfortable" icon :color="isActiveTheme('sepia') ? 'primary' : ''" title="Sepia Theme 🚬🗿. Always a pleasure have a cool alternative like this." @click="setTheme('sepia')">
                <v-icon size="small">fa fa-book</v-icon>
            </v-btn>
            <v-btn variant="outlined" size="small" density="comfortable" icon @click="changeTheme()" :style="{ transform: 'rotate(' + rotationAngle + 'deg)', transition: 'transform 0.3s ease' }" title="Cycle Between My Themes.">
                <v-icon size="small">fa fa-arrows-spin</v-icon>
            </v-btn>
        </div>
        <!-- Copyright Section -->
        <p class="copyright">
            Copyright © 2025 by
            <a class="text-primary" href="https://www.linkedin.com/in/basti%C3%A1ncontreraswasilkowski/" target="_blank" rel="noopener noreferrer">Bastián Contreras Wasilkowski</a>. Licensed under
            <a class="text-secondary" href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-ND 4.0</a>.
        </p>
    </footer>
</template>

<script setup>
// ##### Imports
import { useTheme } from 'vuetify';

// ##### Theme Changing
const theme = useTheme();
const setTheme = (name) => {
    theme.change(name);
};
const isActiveTheme = (name) => theme.global.name.value === name;

// ##### Icon Rotation
let rotationAngle = ref(0);
function changeTheme() {
    theme.cycle();
    rotationAngle.value += 90;
}
</script>

<style lang="scss" scoped>
.rotate-180 {
    transition: transform 0.3s ease-in-out;
    transform: rotate(180deg);
}

.footer-layout {
    background: none;
    margin: 0px 20px;
    left: 20px;

    .language {
        position: fixed;
        bottom: 10px;
        right: 20px;
        display: flex;
        gap: 8px;
    }

    .color-mode {
        position: fixed;
        bottom: 10px;
        right: 20px;
        display: flex;
        gap: 8px;
    }

    .copyright {
        font-size: 0.75rem;
        position: fixed;
        bottom: 10px;
    }
}
</style>
