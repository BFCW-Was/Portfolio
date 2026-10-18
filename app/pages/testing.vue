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
            <!-- Timeline.vue -->
            <SnippetsTimeline>
                <SnippetsTimelineStep :number="1" title="Title 1" description="Lorem ipsum..." buttonText="See Examples" />
                <SnippetsTimelineStep :number="2" title="Title 2" description="Another step" />
                <SnippetsTimelineStep :number="3" title="Title 3" description="Last step" />
            </SnippetsTimeline>
            <hr />
            <SnippetsTimeline2
                :steps="[
                    { title: 'Title 1', description: 'Lorem ipsum...', buttonText: 'See Examples' },
                    { title: 'Title 2', description: 'Another step' },
                    { title: 'Title 3', description: 'Final step', buttonText: 'Finish' },
                ]"
            />
            <hr />
            <!-- Title Card.vue -->
            <SnippetsTitleCard title="Temporal Title" variant="top-left" />
            <SnippetsTitleCard title="Temporal Title" variant="top-right" />
            <SnippetsTitleCard title="Temporal Title" variant="bottom-left" />
            <SnippetsTitleCard title="Temporal Title" variant="bottom-right" />
            <hr />
            <!-- Thumbnail.vue -->
            <SnippetsThumbnail image="/img/thumbnail1.jpg" title="TITLE" theme="THEME" year="2025" />
            <hr />
            <!-- Panel.vue -->
            <SnippetsPanel name="Lorem ipsum" position="Lorem ipsum" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit..." avatar="/img/people/john.jpg" />
            <hr />
            <!-- ItemSelector.vue -->
            <SnippetsItemSelector v-model="selectedItem" :items="items" label="Selecciona una opción" class="m-4" />
            <div>Seleccionado: {{ selectedItem }}</div>
            <hr />
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
            <!-- PolygonalIcon.vue -->
            <SnippetsPolygonalIcon icon="i-fa6-solid-star" :sides="3" :size="100" class="m-4" />
            <SnippetsPolygonalIcon icon="i-fa6-solid-star" :sides="4" :size="100" class="m-4" />
            <SnippetsPolygonalIcon icon="i-fa6-solid-star" :sides="5" :size="100" class="m-4" />
            <SnippetsPolygonalIcon icon="i-fa6-solid-star" :sides="12" :size="100" class="m-4" />
            <SnippetsPolygonalIcon icon="i-fa6-solid-star" :sides="24" :size="100" class="m-4" />
            <SnippetsPolygonalIcon icon="i-fa6-solid-star" :sides="50" :size="100" class="m-4" />
            <SnippetsPolygonalIcon icon="i-fa6-solid-star" :sides="0" :size="100" class="m-4" />
            <hr />
            <!-- DownloadButton.vue -->
            <SnippetsDownloadButton label="Descargar Archivo" href="/files/sample.pdf" icon="i-fa6-solid-file-pdf" variant="outlined" class="m-4" />
            <SnippetsDownloadButton label="Descargar Archivo" href="/files/sample.pdf" icon="i-fa6-solid-file-audio" variant="gradient" class="m-4" />
            <SnippetsDownloadButton label="Descargar Archivo" href="/files/sample.pdf" icon="i-fa6-solid-file-invoice" variant="filled" class="m-4" />
            <hr />
            <!-- IdentificationPlate.vue -->
            <SnippetsIdentificationPlate variant="outlined" text="Test Texto" class="m-4" />
            <SnippetsIdentificationPlate variant="gradient" text="Test Texto" class="m-4" />
            <SnippetsIdentificationPlate variant="filled" text="Test Texto" class="m-4" />
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
