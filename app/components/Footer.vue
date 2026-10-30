<template>
    <footer
        class="bg-background fixed right-0 bottom-0 left-0 flex flex-col items-center justify-between gap-2 p-2 text-[11px] min-[36rem]:flex-row min-[36rem]:gap-4"
        :style="{ marginInline: 'clamp(1.25rem, 2dvw, 1.75rem)' }"
    >
        <!-- Copyright Section -->
        <p class="w-full truncate text-center min-[36rem]:w-auto min-[36rem]:text-left">
            v{{ appVersion }} | © {{ new Date().getFullYear() }}
            <span class="hidden min-[36rem]:inline">by </span>
            <a class="font-medium text-primary" href="https://www.linkedin.com/in/basti%C3%A1ncontreraswasilkowski/" target="_blank" rel="noopener noreferrer">
                <span class="hidden min-[36rem]:inline">Bastián Contreras Wasilkowski</span>
                <span class="min-[36rem]:hidden">BFCW</span>.
            </a>
        </p>

        <!-- Controles de Idioma y Theme -->
        <div class="flex w-full shrink-0 items-center justify-center gap-4 min-[36rem]:w-auto">
            <!-- Language Selector -->
            <div class="flex gap-1">
                <UDropdownMenu
                    v-model:open="isOpenLocales"
                    :items="langItems"
                    size="xs"
                    :ui="{
                        content: 'px-3 py-0 min-w-0',
                        item: 'text-[11px]',
                        itemLeadingIcon: 'size-4',
                    }"
                >
                    <UButton
                        variant="outline"
                        size="xs"
                        color="neutral"
                        class="text-[11px]"
                        :icon="currentLang.icon"
                        :label="currentLang.code.toUpperCase()"
                        :ui="{ leadingIcon: 'rounded-sm' }"
                        :trailingIcon="isOpenLocales ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
                    />
                </UDropdownMenu>
            </div>

            <!-- Theme Mode Selector -->
            <div class="flex gap-1">
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
const isOpenLocales = ref(false);

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
