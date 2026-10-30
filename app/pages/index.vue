<template>
    <main>
        <div class="flex items-center gap-3">
            <h1>Bastián Contreras Wasilkowski</h1>
            |
            <NuxtImg :src="usePublicAsset('/images/logos/MyPortfolio.png')" alt="Logo" class="h-16 w-16 object-contain" />
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
</script>
