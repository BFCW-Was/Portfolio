<template>
    <footer class="flex items-center justify-between gap-4 px-5 py-2.5">
        <!-- Copyright Section -->
        <p class="text-xs">
            v{{ appVersion }} | Copyright © {{ new Date().getFullYear() }} by
            <a class="text-primary" href="https://www.linkedin.com/in/basti%C3%A1ncontreraswasilkowski/" target="_blank" rel="noopener noreferrer">Bastián Contreras Wasilkowski</a>. Licensed under
            <a class="text-secondary" href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-ND 4.0</a>.
        </p>

        <div class="flex items-center gap-2">
            <!-- Language Selector -->
            <div class="flex gap-2">
                <UDropdownMenu :items="langItems">
                    <UButton
                        variant="outline"
                        size="xs"
                        color="neutral"
                        :icon="currentLang.icon"
                        :label="currentLang.code.toUpperCase()"
                        :ui="{ leadingIcon: 'rounded-sm' }"
                        trailingIcon="i-lucide-chevron-down"
                    />
                </UDropdownMenu>
            </div>

            <!-- Theme Mode Selector -->
            <div class="flex gap-2">
                <UButton
                    v-for="mode in themes"
                    :key="mode.name"
                    variant="outline"
                    size="xs"
                    square
                    :icon="mode.icon"
                    :color="isActiveTheme(mode.name) ? 'primary' : 'neutral'"
                    :title="mode.title"
                    @click="setTheme(mode.name)"
                />
                <UButton
                    variant="outline"
                    size="xs"
                    square
                    color="neutral"
                    icon="i-fa6-solid-arrows-spin"
                    title="Cycle Between My Themes."
                    :style="{ transform: `rotate(${rotationAngle}deg)`, transition: 'transform 0.3s ease' }"
                    @click="cycleTheme()"
                />
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const appVersion = config.public.appVersion;

// ##### Locales
const { locale, locales, setLocale } = useI18n();

const languages = [
    { code: 'es', label: 'Español', icon: 'i-flag-cl-4x3' },
    { code: 'en', label: 'English', icon: 'i-flag-gb-4x3' },
] as const;

const currentLang = computed(() => languages.find((l) => l.code === locale.value) ?? languages[0]);

const langItems = computed(() =>
    languages.map((l) => ({
        label: l.label,
        icon: l.icon,
        onSelect: () => setLocale(l.code),
    }))
);

// ##### Themes
type ThemeName = 'light' | 'dark' | 'theme-sepia';

const themes: { name: ThemeName; icon: string; title: string }[] = [
    { name: 'light', icon: 'i-fa6-solid-sun', title: "Light Theme -😫 | ⚠️ Dont Use This ⚠️ - It will burn your eyes. That's why it's a sun." },
    { name: 'dark', icon: 'i-fa6-solid-moon', title: 'Dark Theme 😃 | Its the default theme, no need to thank me.' },
    { name: 'theme-sepia', icon: 'i-fa6-solid-book', title: 'Sepia Theme 🚬🗿 | Always a pleasure have a cool alternative like this.' },
];

// ##### Theme Changing
const colorMode = useColorMode();
const setTheme = (name: ThemeName) => {
    colorMode.preference = name;
};
const isActiveTheme = (name: ThemeName) => colorMode.preference === name;

// ##### Icon Rotation
const rotationAngle = ref(0);
function cycleTheme() {
    const index = themes.findIndex((mode) => mode.name === colorMode.preference);
    setTheme(themes[(index + 1) % themes.length]!.name);
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
