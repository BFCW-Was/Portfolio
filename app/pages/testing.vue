<template>
    <main>
        <div class="flex justify-center gap-2">
            <UButton color="primary" @click="isVisibleTextos = !isVisibleTextos">{{ isVisibleTextos ? 'Ocultar' : 'Mostrar' }} Textos</UButton>
            <UButton color="primary" @click="isVisibleBotones = !isVisibleBotones">{{ isVisibleBotones ? 'Ocultar' : 'Mostrar' }} Botones</UButton>
            <UButton color="primary" @click="isVisibleImagenes = !isVisibleImagenes">{{ isVisibleImagenes ? 'Ocultar' : 'Mostrar' }} Imagenes</UButton>
            <UButton color="primary" @click="isVisibleThemes = !isVisibleThemes">{{ isVisibleThemes ? 'Ocultar' : 'Mostrar' }} Temas</UButton>
            <UButton color="primary" @click="isVisibleComponentes = !isVisibleComponentes">{{ isVisibleComponentes ? 'Ocultar' : 'Mostrar' }} Componentes</UButton>
        </div>
        <!-- #################### TEXTOS #################### -->
        <div v-if="isVisibleTextos">
            <h1>Textos</h1>
            <hr />
        </div>
        <!-- #################### BOTONES #################### -->
        <div v-if="isVisibleBotones">
            <h1>Botones</h1>
            <hr />
        </div>
        <!-- #################### IMÁGENES #################### -->
        <div v-if="isVisibleImagenes">
            <h1>Imagenes</h1>
            <NuxtImg src="/images/logos/MyPortfolio.png" alt="Logo" />
            <hr />
        </div>
        <!-- #################### BOTONES #################### -->
        <div v-if="isVisibleThemes">
            <h1>Temas</h1>
            <div class="mx-auto w-full max-w-7xl px-4">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <UCard class="bg-primary p-6 text-inverted">
                        <p class="font-bold">Primary Card</p>
                        <p class="text-sm">Testing the primary color</p>
                    </UCard>
                    <UCard class="bg-secondary p-6 text-inverted">
                        <p class="font-bold">Secondary Card</p>
                        <p class="text-sm">Testing the secondary color</p>
                    </UCard>
                </div>
                <div class="mt-4 flex flex-wrap justify-around gap-4">
                    <UButton color="primary">Primary Button</UButton>
                    <UButton color="secondary">Secondary Button</UButton>
                    <UButton color="success">Success Button</UButton>
                    <UButton color="info">Info Button</UButton>
                    <UButton color="warning">Warning Button</UButton>
                    <UButton color="error">Error Button</UButton>
                </div>
                <div class="mt-4 flex flex-col gap-4">
                    <UAlert color="success" title="Success Alert" />
                    <UAlert color="info" title="Info Alert" />
                    <UAlert color="warning" title="Warning Alert" />
                    <UAlert color="error" title="Error Alert" />
                </div>
                <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <UFormField label="Input Field">
                        <UInput color="primary" variant="outline" class="w-full" />
                    </UFormField>
                    <USwitch label="Toggle Switch" color="secondary" />
                    <UFormField label="Slider Control">
                        <USlider color="info" />
                    </UFormField>
                    <UCheckbox label="Checkbox" color="primary" />
                </div>
            </div>
            <hr />
        </div>
        <!-- #################### COMPONENTES #################### -->
        <div v-if="isVisibleComponentes">
            <h1>Componentes</h1>
            <!-- InformationCard.vue -->
            <SnippetsInformationCard title="Test Title" subtitle="Test Subtitle" footnote="Test Footnote" :color="currentColorIC">
                <template #body>
                    <div class="text-default">
                        <p>Este es un div de ejemplo.</p>
                        <UButton size="xs" color="primary" @click="nextColorIC">Cambiar Color</UButton>
                    </div>
                </template>
            </SnippetsInformationCard>
            <hr />
            <!-- ClipboardTooltip.vue -->
            <SnippetsClipboardTooltip text="Test Text" class="m-4">
                <UButton aria-label="Test Label" color="neutral" variant="subtle" icon="i-fa6-solid-flask-vial" label="Test Span" />
            </SnippetsClipboardTooltip>
            <hr />
        </div>
        <!-- ##### -->
    </main>
</template>

<script setup>
import { ref } from 'vue';

// Definición de Variables para Visibilidad:
const isVisibleTextos = ref(false);
const isVisibleBotones = ref(false);
const isVisibleImagenes = ref(false);
const isVisibleComponentes = ref(true);
const isVisibleThemes = ref(false);

// Cambio de color InformationCard:
const colorsIC = ['burgundy', 'sepia', 'gray', 'cyan', 'fire', 'mustard'];
const colorIndexIC = ref(0);
const currentColorIC = computed(() => colorsIC[colorIndexIC.value]);

function nextColorIC() {
    colorIndexIC.value = (colorIndexIC.value + 1) % colorsIC.length;
}
</script>
