<template>
    <footer class="footer-layout">
        <!-- Language Selector -->
        <div class="language">
            <!-- languages -->
        </div>
        <!-- Color Palette Selector -->
        <div class="color-palette">
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
        <!-- Copyright Section -->
        <p class="copyright">
            Copyright © 2025 by
            <a class="text-primary" href="https://www.linkedin.com/in/basti%C3%A1ncontreraswasilkowski/" target="_blank" rel="noopener noreferrer">Bastián Contreras Wasilkowski</a>.
            Licensed under <a class="text-secondary" href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-ND 4.0</a>
        </p>
    </footer>
</template>

<script setup>
// ##### Imports
import { useTheme } from 'vuetify';

// ##### Theme Changing
const theme = useTheme();
const setTheme = (name) => {
  theme.global.name.value = name;
};
const isActiveTheme = (name) => theme.global.name.value === name;
</script>

<style lang="scss" scoped>
.footer-layout {
    background: none;
    margin: 20px;

    .language {
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: flex;
        gap: 8px;
    }
    
    .color-palette {
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: flex;
        gap: 8px;
    }
    
    .copyright {
        position: fixed;
        bottom: 20px;
    }
}
</style>