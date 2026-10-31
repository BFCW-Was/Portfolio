<template>
    <main>
        <div class="flex items-center gap-3">
            <h1>Bastián Contreras Wasilkowski</h1>
            |
            <NuxtImg :src="usePublicAsset(lightLogo?.src)" :alt="lightLogo?.alt" class="block h-16 w-16 object-contain dark:hidden" />
            <NuxtImg :src="usePublicAsset(darkLogo?.src)" :alt="darkLogo?.alt" class="hidden h-16 w-16 object-contain dark:block" />
        </div>
        <p class="text-lg font-semibold">Este portfolio aún está en desarrollo 😁</p>
        <br />
        <div>
            <p>Aún así, si deseas contactarme puedes hablarme por correo o mis redes sociales:</p>
            <div class="mt-2 ml-4 flex flex-col items-start gap-2">
                <!-- Email -->
                <SnippetsClipboardTooltip text="basticontrewasil@gmail.com">
                    <UButton aria-label="Copiar correo" color="neutral" variant="subtle" icon="i-fa6-solid-envelope" label="Email" />
                </SnippetsClipboardTooltip>
                <!-- Linkedin -->
                <UButton
                    to="https://www.linkedin.com/in/basti%C3%A1ncontreraswasilkowski/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Linkedin"
                    color="neutral"
                    variant="subtle"
                    icon="i-fa6-brands-linkedin"
                    label="Linkedin"
                />
                <!-- GitHub -->
                <UButton to="https://github.com/BFCW-Was" target="_blank" rel="noopener noreferrer" aria-label="Github" color="neutral" variant="subtle" icon="i-fa6-brands-github" label="Github" />
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { usePublicAsset } from '~/composables/use_public_assets';
import { assetsManager } from '~/utils/assets_manager';

const lightLogo = assetsManager.find((img) => img.id === 'logo-light');
const darkLogo = assetsManager.find((img) => img.id === 'logo-dark');
</script>
