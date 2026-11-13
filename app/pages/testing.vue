<template>
    <section>
        <div class="flex justify-center gap-2">
            <UButton color="primary" @click="isVisibleTextos = !isVisibleTextos">{{ isVisibleTextos ? 'Ocultar' : 'Mostrar' }} Textos</UButton>
            <UButton color="primary" @click="isVisibleBotones = !isVisibleBotones">{{ isVisibleBotones ? 'Ocultar' : 'Mostrar' }} Botones</UButton>
            <UButton color="primary" @click="isVisibleImagenes = !isVisibleImagenes">{{ isVisibleImagenes ? 'Ocultar' : 'Mostrar' }} Imagenes</UButton>
            <UButton color="primary" @click="isVisibleComponentes = !isVisibleComponentes">{{ isVisibleComponentes ? 'Ocultar' : 'Mostrar' }} Componentes</UButton>
            <UButton color="primary" @click="isVisibleThemes = !isVisibleThemes">{{ isVisibleThemes ? 'Ocultar' : 'Mostrar' }} Temas</UButton>
        </div>
        <!-- #################### TEXTOS #################### -->
        <div v-if="isVisibleTextos">
            <h1>Textos</h1>
            <hr class="my-2" />

            <div class="mx-auto my-8 max-w-7xl px-4">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-5">
                    <div class="min-w-0 border-r-0 pr-4 xl:border-r xl:border-gray-300">
                        <h2 class="mb-4 border-b border-gray-300 pb-2 text-sm font-semibold">DEFAULT</h2>
                        <div>
                            <p class="mb-4">Parrafo con texto de prueba. Y algo de lorem ipsum para hacer que el parrafo sea mas largo. Y mi nombre Bastián Fernando Contreras Wasilkowski.</p>
                            <p class="mb-4">ÁÉÍÓÚ Ñ Ü · áéíóú ñ ü · ¿Qué? ¡Sí! «Hola» — "mundo"...</p>
                            <p class="mb-4">0123456789 · 0O oO · 1Il · @ # $ % & * + = / \ | ~ ^ _</p>
                            <p class="mb-4">😀 🚀 ❤️ 🎉 👨‍💻 ✨</p>
                            <p class="mb-4">日本語：こんにちは、世界！ひらがな カタカナ</p>
                            <p class="mb-4">Русский: Привет, мир! Ёжик, съешь ещё этих мягких французских булок.</p>
                        </div>
                    </div>

                    <div class="min-w-0 border-r-0 pr-4 xl:border-r xl:border-gray-300">
                        <h2 class="mb-4 border-b border-gray-300 pb-2 text-sm font-semibold">TITLES</h2>
                        <div class="font-title">
                            <p class="mb-4">Parrafo con texto de prueba. Y algo de lorem ipsum para hacer que el parrafo sea mas largo. Y mi nombre Bastián Fernando Contreras Wasilkowski.</p>
                            <p class="mb-4">ÁÉÍÓÚ Ñ Ü · áéíóú ñ ü · ¿Qué? ¡Sí! «Hola» — "mundo"...</p>
                            <p class="mb-4">0123456789 · 0O oO · 1Il · @ # $ % & * + = / \ | ~ ^ _</p>
                            <p class="mb-4">😀 🚀 ❤️ 🎉 👨‍💻 ✨</p>
                            <p class="mb-4">日本語：こんにちは、世界！ひらがな カタカナ</p>
                            <p class="mb-4">Русский: Привет, мир! Ёжик, съешь ещё этих мягких французских булок.</p>
                        </div>
                    </div>

                    <div class="min-w-0 border-r-0 pr-4 xl:border-r xl:border-gray-300">
                        <h2 class="mb-4 border-b border-gray-300 pb-2 text-sm font-semibold">BASE</h2>
                        <div class="font-base">
                            <p class="mb-4">Parrafo con texto de prueba. Y algo de lorem ipsum para hacer que el parrafo sea mas largo. Y mi nombre Bastián Fernando Contreras Wasilkowski.</p>
                            <p class="mb-4">ÁÉÍÓÚ Ñ Ü · áéíóú ñ ü · ¿Qué? ¡Sí! «Hola» — "mundo"...</p>
                            <p class="mb-4">0123456789 · 0O oO · 1Il · @ # $ % & * + = / \ | ~ ^ _</p>
                            <p class="mb-4">😀 🚀 ❤️ 🎉 👨‍💻 ✨</p>
                            <p class="mb-4">日本語：こんにちは、世界！ひらがな カタカナ</p>
                            <p class="mb-4">Русский: Привет, мир! Ёжик, съешь ещё этих мягких французских булок.</p>
                        </div>
                    </div>

                    <div class="min-w-0 border-r-0 pr-4 xl:border-r xl:border-gray-300">
                        <h2 class="mb-4 border-b border-gray-300 pb-2 text-sm font-semibold">DISLEXIC</h2>
                        <div class="font-dislexic">
                            <p class="mb-4">Parrafo con texto de prueba. Y algo de lorem ipsum para hacer que el parrafo sea mas largo. Y mi nombre Bastián Fernando Contreras Wasilkowski.</p>
                            <p class="mb-4">ÁÉÍÓÚ Ñ Ü · áéíóú ñ ü · ¿Qué? ¡Sí! «Hola» — "mundo"...</p>
                            <p class="mb-4">0123456789 · 0O oO · 1Il · @ # $ % & * + = / \ | ~ ^ _</p>
                            <p class="mb-4">😀 🚀 ❤️ 🎉 👨‍💻 ✨</p>
                            <p class="mb-4">日本語：こんにちは、世界！ひらがな カタカナ</p>
                            <p class="mb-4">Русский: Привет, мир! Ёжик, съешь ещё этих мягких французских булок.</p>
                        </div>
                    </div>

                    <div class="min-w-0">
                        <h2 class="mb-4 border-b border-gray-300 pb-2 text-sm font-semibold">CODE</h2>
                        <div class="font-code">
                            <p class="mb-4">Parrafo con texto de prueba. Y algo de lorem ipsum para hacer que el parrafo sea mas largo. Y mi nombre Bastián Fernando Contreras Wasilkowski.</p>
                            <p class="mb-4">ÁÉÍÓÚ Ñ Ü · áéíóú ñ ü · ¿Qué? ¡Sí! «Hola» — "mundo"...</p>
                            <p class="mb-4">0123456789 · 0O oO · 1Il · @ # $ % & * + = / \ | ~ ^ _</p>
                            <p class="mb-4">😀 🚀 ❤️ 🎉 👨‍💻 ✨</p>
                            <p class="mb-4">日本語：こんにちは、世界！ひらがな カタカナ</p>
                            <p class="mb-4">Русский: Привет, мир! Ёжик, съешь ещё этих мягких французских булок.</p>
                        </div>
                    </div>
                </div>
                <hr class="my-5" />
                <section>
                    <h2 class="mb-4 text-lg font-semibold">Ejemplo de Código</h2>
                    <DomainCodeDisplay>
                        <DomainCodeDisplayFile name="index.html" language="html">
                            <pre v-pre>
                                <div class="font-code">
                                    <p class="mb-4">Parrafo con texto de prueba. Y algo de lorem ipsum para hacer que el parrafo sea mas largo. Y mi nombre Bastián Fernando Contreras Wasilkowski.</p>
                                    <p class="mb-4">ÁÉÍÓÚ Ñ Ü · áéíóú ñ ü · ¿Qué? ¡Sí! «Hola» — "mundo"...</p>
                                    <p class="mb-4">0123456789 · 0O oO · 1Il · @ # $ % & * + = / \ | ~ ^ _</p>
                                    <p class="mb-4">😀 🚀 ❤️ 🎉 👨‍💻 ✨</p>
                                    <p class="mb-4">日本語：こんにちは、世界！ひらがな カタカナ</p>
                                    <p class="mb-4">Русский: Привет, мир! Ёжик, съешь ещё этих мягких французских булок.</p>
                                </div>
                            </pre>
                        </DomainCodeDisplayFile>
                    </DomainCodeDisplay>
                </section>
                <hr class="my-5" />
                <div class="flex flex-col gap-2">
                    <h1>Title (h1)</h1>
                    <h2>Title (h2)</h2>
                    <h3>Title (h3)</h3>
                    <h4>Title (h4)</h4>
                    <h5>Title (h5)</h5>
                    <h6>Title (h6)</h6>
                    <p>Paragraph (p)</p>
                    <label>Label</label>
                    <span>Span</span>
                    <a href="#">Link (a)</a>
                    <dislexic>Dislexic</dislexic>
                    <code>Code</code>

                    <small>Small</small>
                    <strong>Bold (strong)</strong>
                    <em>Italic (em)</em>
                    <del>Deleted (del)</del>
                    <mark>Highlighted (mark)</mark>
                </div>
            </div>
            <hr class="my-5" />
            <div class="flex flex-col items-center gap-2">
                <UButton @click="changeTextBlockWidth">Ancho: {{ textBlockWidth }}</UButton>
                <div v-for="n in 7" :key="n" :style="{ width: textBlockWidth }">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in felis sed orci facilisis tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent
                        mollis finibus diam a volutpat. Suspendisse sed tristique purus. Etiam quis tellus at justo mattis maximus at non mi. Maecenas condimentum rhoncus nulla. Mauris interdum
                        consequat enim at suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc blandit lacus in nisi cursus, eget eleifend massa
                        semper. Fusce hendrerit dolor non pharetra bibendum. Donec ut semper quam, ac scelerisque turpis. Donec vel sodales orci, eget faucibus risus. Fusce quis sodales sapien, eget
                        viverra velit. Nunc blandit quis massa faucibus sodales. In porta nec nunc nec malesuada. Curabitur volutpat ullamcorper dui, eget euismod felis bibendum a.
                    </p>
                    <br />
                    <p>Entia lucis in hac terra excipientur; ii autem qui malum cupiunt, radicitus exstirpabuntur.</p>
                    <br />
                    <p>
                        Phasellus eu vestibulum justo. Vivamus ac nulla elit. Proin sit amet laoreet eros, et lacinia ante. Duis in nulla at justo faucibus scelerisque. Vivamus eu ligula consequat est
                        porta semper eu a enim. Donec dignissim magna mi, ut placerat magna hendrerit eu. Nunc porta a leo sed semper. Integer eget ligula posuere, dapibus dui id, efficitur tellus.
                        Sed viverra sollicitudin pulvinar. Duis rutrum leo sed tempor commodo. Pellentesque vel erat elit.
                    </p>
                    <br />
                </div>
            </div>
        </div>
        <!-- #################### BOTONES #################### -->
        <div v-if="isVisibleBotones">
            <h1>Botones</h1>
            <hr class="my-2" />
            <!-- DownloadButton.vue -->
            <PrimitivesDownloadButton label="Descargar Archivo" href="/files/sample.pdf" icon="i-fa6-solid-file-pdf" variant="outlined" class="m-4" />
            <PrimitivesDownloadButton label="Descargar Archivo" href="/files/sample.pdf" icon="i-fa6-solid-file-audio" variant="gradient" class="m-4" />
            <PrimitivesDownloadButton label="Descargar Archivo" href="/files/sample.pdf" icon="i-fa6-solid-file-invoice" variant="filled" class="m-4" />
            <hr class="my-5" />
            <!-- ClipboardTooltip.vue -->
            <PrimitivesClipboardTooltip text="Test Text" class="m-4">
                <UButton aria-label="Test Label" color="neutral" variant="subtle" icon="i-fa6-solid-flask-vial" label="Test Span" />
            </PrimitivesClipboardTooltip>
            <hr class="my-5" />
        </div>
        <!-- #################### IMÁGENES #################### -->
        <div v-if="isVisibleImagenes">
            <h1>Imagenes</h1>
            <hr class="my-2" />
            <div class="flex flex-wrap items-center gap-4 *:h-100 *:w-100">
                <NuxtImg :src="usePublicAsset(lightLogo?.src)" :alt="lightLogo?.alt" />
                <NuxtImg :src="usePublicAsset(darkLogo?.src)" :alt="darkLogo?.alt" />
                <NuxtImg :src="usePublicAsset(basicTesting?.src)" :alt="basicTesting?.alt" />
                <NuxtImg :src="usePublicAsset(cyanTesting?.src)" :alt="cyanTesting?.alt" />
                <NuxtImg :src="usePublicAsset(fireTesting?.src)" :alt="fireTesting?.alt" />
                <NuxtImg :src="usePublicAsset(mustardTesting?.src)" :alt="mustardTesting?.alt" />
            </div>
        </div>
        <!-- #################### COMPONENTES #################### -->
        <div v-if="isVisibleComponentes">
            <h1>Componentes</h1>
            <hr class="my-2" />
            <!-- Thumbnail.vue -->
            <PrimitivesThumbnail :image="usePublicAsset(fireTesting?.src)" title="TITLE" theme="THEME" year="2026" />
            <hr class="my-5" />
            <!-- Separador.vue -->
            <PrimitivesSeparator />
            <PrimitivesSeparator :decoration="1" />
            <PrimitivesSeparator :decoration="2" />
            <PrimitivesSeparator :decoration="3" />
            <PrimitivesSeparator variant="subtle" thickness="8px" />
            <hr class="my-5" />
            <!-- Panel.vue -->
            <PrimitivesPanel name="Lorem ipsum" position="Lorem ipsum" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit..." :avatar="usePublicAsset(fireTesting?.src)" />
            <hr class="my-5" />
            <!-- FeatureCard.vue -->
            <PrimitivesFeatureCard name="Título" icon="i-fa6-solid-quote-right" description="Descripción" :features="featuresForCard" />
            <hr class="my-5" />
            <!-- ProjectDescription.vue [1, 2 & 3] -->
            <PrimitivesProjectCard1 :index="1" name="Name" :description="['Lorem ipsum dolor sit amet, consectetur adipiscing elit...']" :image="usePublicAsset(fireTesting?.src)" year="2026" />
            <hr class="my-5" />
            <PrimitivesProjectCard2 :index="1" name="Name" :description="['Lorem ipsum dolor sit amet, consectetur adipiscing elit...']" :image="usePublicAsset(fireTesting?.src)" year="2026" />
            <hr class="my-5" />
            <PrimitivesProjectCard3 :index="1" name="Name" :description="['Lorem ipsum dolor sit amet, consectetur adipiscing elit...']" :image="usePublicAsset(fireTesting?.src)" year="2026" />
            <hr class="my-5" />
            <!-- InformationCard.vue -->
            <PrimitivesInformationCard title="Test Title" subtitle="Test Subtitle" footnote="Test Footnote" :color="currentColorIC">
                <template #body>
                    <div class="text-default">
                        <p>Este es un div de ejemplo.</p>
                        <UButton size="xs" color="primary" @click="nextColorIC">Cambiar Color</UButton>
                    </div>
                </template>
            </PrimitivesInformationCard>
            <hr class="my-5" />
            <!-- TechStack.vue -->
            <div class="my-12">
                <DomainTechStack :columns="6" :items="itemsTechStack" />
            </div>
            <hr class="my-5" />
            <!-- CodeDisplay.vue -->
            <DomainCodeDisplay>
                <DomainCodeDisplayFile name="index.html" language="html">
                    <pre v-pre>
                        <head>
                            <title>Page Title</title>
                        </head>
                        <body>
                            <h1>This is a Heading</h1>
                            <p>This is a paragraph.</p>
                        </body>
                    </pre>
                </DomainCodeDisplayFile>
                <DomainCodeDisplayFile name="style.css" language="css">
                    <pre v-pre>
                        body {
                            background-color: powderblue;
                        }
                        h1 {
                            color: blue;
                        }
                        p {
                            color: red;
                        }
                    </pre>
                </DomainCodeDisplayFile>
            </DomainCodeDisplay>
            <hr class="my-5" />
            <!-- Timeline.vue -->
            <PrimitivesTimeline variant="number">
                <PrimitivesTimelineStep :number="1" title="Title 1" description="Lorem ipsum..." buttonText="See Examples" />
                <PrimitivesTimelineStep :number="2" title="Title 2" description="Second step" />
                <PrimitivesTimelineStep :number="3" title="Title 3" description="Another step" />
                <PrimitivesTimelineStep :number="4" title="Title 4" description="Last step" buttonText="Finish" />
            </PrimitivesTimeline>
            <hr class="my-5" />
            <PrimitivesTimeline variant="dot">
                <PrimitivesTimelineStep label="2026" title="Title 1" description="Lorem ipsum..." buttonText="See Examples" />
                <PrimitivesTimelineStep label="2025" title="Title 2" description="Second step" />
                <PrimitivesTimelineStep label="2025" title="Title 3" description="Another step" />
                <PrimitivesTimelineStep label="2024" title="Title 4" description="Last step" buttonText="Finish" />
            </PrimitivesTimeline>
            <hr class="my-5" />
            <!-- ItemSelector.vue -->
            <PrimitivesItemSelector v-model="selectedItem" :items="items" label="Selecciona una opción" />
            <div class="text-center">Seleccionado: {{ selectedItem }}</div>
            <hr class="my-5" />
            <!-- IconStack.vue -->
            <div class="flex flex-wrap gap-12">
                <PrimitivesIconStack :floating="false" position="left" :items="socialLinks" />
                <PrimitivesIconStack :floating="false" position="top" :items="socialLinks" />
                <PrimitivesIconStack :floating="false" position="bottom" :items="socialLinks" />
                <PrimitivesIconStack :floating="false" position="right" :items="socialLinks" />
            </div>
            <hr class="my-5" />
            <!-- Title Card.vue -->
            <div class="flex flex-wrap gap-5">
                <PrimitivesTitleCard title="Temporal Title" variant="top-left" />
                <PrimitivesTitleCard title="Temporal Title" variant="top-right" />
                <PrimitivesTitleCard title="Temporal Title" variant="bottom-left" />
                <PrimitivesTitleCard title="Temporal Title" variant="bottom-right" />
            </div>
            <hr class="my-5" />
            <!-- Signage.vue -->
            <div class="flex flex-wrap gap-5">
                <PrimitivesSignage variant="outlined" text="Test Texto" />
                <PrimitivesSignage variant="gradient" text="Test Texto" />
                <PrimitivesSignage variant="filled" text="Test Texto" />
            </div>
            <hr class="my-5" />
            <!-- PolygonalIcon.vue -->
            <div class="flex flex-wrap gap-5">
                <PrimitivesPolygonalIcon icon="i-fa6-solid-star" :sides="3" :size="100" />
                <PrimitivesPolygonalIcon icon="i-fa6-solid-star" :sides="4" :size="100" />
                <PrimitivesPolygonalIcon icon="i-fa6-solid-star" :sides="5" :size="100" />
                <PrimitivesPolygonalIcon icon="i-fa6-solid-star" :sides="12" :size="100" />
                <PrimitivesPolygonalIcon icon="i-fa6-solid-star" :sides="24" :size="100" />
                <PrimitivesPolygonalIcon icon="i-fa6-solid-star" :sides="50" :size="100" />
                <PrimitivesPolygonalIcon icon="i-fa6-solid-star" :sides="0" :size="100" />
            </div>
        </div>

        <!-- #################### THEME #################### -->
        <div v-if="isVisibleThemes">
            <h1>Temas</h1>
            <hr class="my-2" />
            <div class="mx-auto w-full max-w-7xl px-4">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <UCard class="bg-primary p-6">
                        <p class="font-bold">Primary Card</p>
                        <p class="text-sm">Testing the primary color</p>
                    </UCard>
                    <UCard class="bg-secondary p-6">
                        <p class="font-bold">Secondary Card</p>
                        <p class="text-sm">Testing the secondary color</p>
                    </UCard>
                </div>
                <div class="mt-4 flex flex-wrap justify-around gap-4">
                    <UButton color="primary">Primary Button</UButton>
                    <UButton color="secondary">Secondary Button</UButton>
                    <UButton color="info">Info Button</UButton>
                    <UButton color="success">Success Button</UButton>
                    <UButton color="warning">Warning Button</UButton>
                    <UButton color="error">Error Button</UButton>
                </div>
                <div class="mt-4 flex flex-col gap-4">
                    <UAlert color="info" title="Info Alert" />
                    <UAlert color="success" title="Success Alert" />
                    <UAlert color="warning" title="Warning Alert" />
                    <UAlert color="error" title="Error Alert" />
                </div>
                <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <UFormField label="Input Field">
                        <UInput color="primary" variant="outline" class="w-full" />
                    </UFormField>
                    <USwitch label="Toggle Switch" color="primary" />
                    <UFormField label="Slider Control">
                        <USlider color="primary" />
                    </UFormField>
                    <UCheckbox label="Checkbox" color="primary" />
                </div>
            </div>
            <hr class="my-5" />

            <!-- Colores por Palette -->
            <div v-for="palette in palettesWithValues" :key="palette.category" class="mx-16 space-y-3">
                <h3 class="border-b pb-1 text-lg font-semibold text-gray-400">{{ palette.category }}</h3>

                <div class="mb-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
                    <div
                        v-for="color in palette.colors"
                        :key="color.name"
                        class="flex h-28 flex-col justify-between rounded-lg border border-gray-700 p-4 shadow-sm"
                        :style="{ backgroundColor: `var(${color.name})` }"
                    >
                        <span class="mx-auto w-fit rounded bg-black/60 px-2 py-1 text-center font-mono text-xs text-white">
                            {{ color.name }}
                        </span>
                    </div>
                </div>
            </div>
            <hr class="my-5" />
        </div>
        <!-- ##### -->
    </section>
</template>

<script setup lang="ts">
import type { TechStackItem } from '~/components/domain/TechStack.vue';
import type { FeatureItem } from '~/components/primitives/FeatureCard.vue';
import type { IconStackItem } from '~/components/primitives/IconStack.vue';
import type { SelectorItem } from '~/components/primitives/ItemSelector.vue';
import { usePublicAsset } from '~/composables/use_public_assets';
import { assetsManager } from '~/utils/assets_manager';

// Control y Muestra de Imágenes
const lightLogo = assetsManager.find((img) => img.id === 'logo-light');
const darkLogo = assetsManager.find((img) => img.id === 'logo-dark');
const basicTesting = assetsManager.find((img) => img.id === 'testing-basic');
const cyanTesting = assetsManager.find((img) => img.id === 'testing-cyan');
const fireTesting = assetsManager.find((img) => img.id === 'testing-fire');
const mustardTesting = assetsManager.find((img) => img.id === 'testing-mustard');

// Definición de Variables para Visibilidad:
const isVisibleTextos = ref(false);
const isVisibleBotones = ref(false);
const isVisibleImagenes = ref(false);
const isVisibleComponentes = ref(false);
const isVisibleThemes = ref(false);

// Cambio de Ancho de Texto:
const textBlockWidth = ref('100%');

function changeTextBlockWidth() {
    textBlockWidth.value = textBlockWidth.value === '100%' ? '70%' : textBlockWidth.value === '70%' ? '40%' : '100%';
}

// Cambio de Estilo InformationCard:
const colorsIC = ['variant-burgundy', 'variant-sepia', 'variant-gray', 'variant-cyan', 'variant-fire', 'variant-mustard'];
const colorIndexIC = ref(0);
const currentColorIC = computed(() => colorsIC[colorIndexIC.value]);

function nextColorIC() {
    colorIndexIC.value = (colorIndexIC.value + 1) % colorsIC.length;
}

// Cambiar estilo de ItemSelector:
const selectedItem = ref(0);

const items: SelectorItem[] = [
    { label: 'ITEM1', variant: 'variant-cyan' },
    { label: 'ITEM2', variant: 'variant-burgundy' },
    { label: 'ITEM3', variant: 'variant-fire' },
    { label: 'ITEM4', variant: 'variant-mustard' },
    { label: 'ITEM5', variant: 'variant-sepia' },
    { label: 'ITEM6', variant: 'variant-gray' },
];

// Paletas de Colores:
const colorPalettes = [
    {
        category: 'Theme Palette (Global Theme Variables)',
        colors: [
            { name: '--ui-bg' },
            { name: '--ui-bg-muted' },
            { name: '--ui-bg-elevated' },
            { name: '--ui-text' },
            { name: '--ui-text-inverted' },
            { name: '--ui-text-muted' },
            { name: '--ui-primary' },
            { name: '--ui-primary-muted' },
            { name: '--ui-primary-dark' },
            { name: '--ui-secondary' },
            { name: '--ui-secondary-muted' },
            { name: '--ui-secondary-dark' },
            { name: '--ui-info' },
            { name: '--ui-success' },
            { name: '--ui-warning' },
            { name: '--ui-error' },
            { name: '--ui-component' },
            { name: '--ui-component-text' },
            { name: '--ui-component-border' },
        ],
    },
    {
        category: 'Black Palette',
        colors: [
            { name: '--color-bfcw-black-100' },
            { name: '--color-bfcw-black-90' },
            { name: '--color-bfcw-black-70' },
            { name: '--color-bfcw-black-50' },
            { name: '--color-bfcw-black-30' },
            { name: '--color-bfcw-black-20' },
        ],
    },
    {
        category: 'White Palette',
        colors: [
            { name: '--color-bfcw-white-100' },
            { name: '--color-bfcw-white-90' },
            { name: '--color-bfcw-white-70' },
            { name: '--color-bfcw-white-50' },
            { name: '--color-bfcw-white-30' },
            { name: '--color-bfcw-white-20' },
        ],
    },
    {
        category: 'Sepia Palette',
        colors: [
            { name: '--color-bfcw-sepia-100' },
            { name: '--color-bfcw-sepia-90' },
            { name: '--color-bfcw-sepia-70' },
            { name: '--color-bfcw-sepia-50' },
            { name: '--color-bfcw-sepia-30' },
            { name: '--color-bfcw-sepia-20' },
        ],
    },
    {
        category: 'Cyan Palette',
        colors: [
            { name: '--color-bfcw-cyan-100' },
            { name: '--color-bfcw-cyan-90' },
            { name: '--color-bfcw-cyan-70' },
            { name: '--color-bfcw-cyan-50' },
            { name: '--color-bfcw-cyan-30' },
            { name: '--color-bfcw-cyan-20' },
        ],
    },
    {
        category: 'Fire Palette',
        colors: [
            { name: '--color-bfcw-fire-100' },
            { name: '--color-bfcw-fire-90' },
            { name: '--color-bfcw-fire-70' },
            { name: '--color-bfcw-fire-50' },
            { name: '--color-bfcw-fire-30' },
            { name: '--color-bfcw-fire-20' },
        ],
    },
    {
        category: 'Mustard Palette',
        colors: [
            { name: '--color-bfcw-mustard-100' },
            { name: '--color-bfcw-mustard-90' },
            { name: '--color-bfcw-mustard-70' },
            { name: '--color-bfcw-mustard-50' },
            { name: '--color-bfcw-mustard-30' },
            { name: '--color-bfcw-mustard-20' },
        ],
    },
    {
        category: 'Burgundy Palette',
        colors: [
            { name: '--color-bfcw-burgundy-100' },
            { name: '--color-bfcw-burgundy-90' },
            { name: '--color-bfcw-burgundy-70' },
            { name: '--color-bfcw-burgundy-50' },
            { name: '--color-bfcw-burgundy-30' },
            { name: '--color-bfcw-burgundy-20' },
        ],
    },
    {
        category: 'Indigo Palette',
        colors: [
            { name: '--color-bfcw-indigo-100' },
            { name: '--color-bfcw-indigo-90' },
            { name: '--color-bfcw-indigo-70' },
            { name: '--color-bfcw-indigo-50' },
            { name: '--color-bfcw-indigo-30' },
            { name: '--color-bfcw-indigo-20' },
        ],
    },
];

const palettesWithValues = computed(() => {
    if (import.meta.server) return colorPalettes;
    const styles = getComputedStyle(document.documentElement);

    return colorPalettes.map((palette) => ({
        ...palette,
        colors: palette.colors.map((color) => ({
            ...color,
        })),
    }));
});

// FeatureCard
const featuresForCard: FeatureItem[] = [
    { title: 'Característica 1', description: 'Párrafo único de la característica 1.' },
    { title: 'Característica 2', description: ['Primer párrafo.', 'Segundo párrafo.', 'Tercer párrafo.', 'Cuarto párrafo.', 'Quinto párrafo.'] },
];

// TechStack
const itemsTechStack: TechStackItem[] = [
    {
        name: 'Vue',
        icon: 'i-fa6-brands-vuejs',
        description: 'Framework progresivo para interfaces de usuario',
        level: 90,
    },
    {
        name: 'Nuxt',
        icon: 'i-simple-icons-nuxt',
        description: 'Framework full-stack basado en Vue',
        level: 90,
    },
    {
        name: 'Svelte',
        icon: 'i-simple-icons-svelte',
        description: 'Framework reactivo para aplicaciones web',
        level: 90,
    },
    {
        name: 'Angular',
        icon: 'i-fa6-brands-angular',
        description: 'Framework frontend basado en TypeScript',
        level: 90,
    },
    {
        name: 'JavaScript',
        icon: 'i-fa6-brands-js',
        description: 'Lenguaje de programación para desarrollo web',
        level: 90,
    },
    {
        name: 'TypeScript',
        icon: 'i-fa6-brands-js',
        description: 'JavaScript con tipado estático',
        level: 90,
    },
    {
        name: 'Node.js',
        icon: 'i-fa6-brands-node-js',
        description: 'Entorno de ejecución de JavaScript en el servidor',
        level: 90,
    },
    {
        name: 'Rust',
        icon: 'i-simple-icons-rust',
        description: 'Lenguaje de sistemas enfocado en rendimiento y seguridad',
        level: 90,
    },
    {
        name: 'PHP',
        icon: 'i-fa6-brands-php',
        description: 'Lenguaje de programación para desarrollo backend',
        level: 90,
    },
    {
        name: 'Python',
        icon: 'i-fa6-brands-python',
        description: 'Lenguaje versátil para backend, automatización y datos',
        level: 90,
    },
    {
        name: 'FastAPI',
        icon: 'i-simple-icons-fastapi',
        description: 'Framework moderno para crear APIs con Python',
        level: 90,
    },
    {
        name: 'Laravel',
        icon: 'i-fa6-brands-laravel',
        description: 'Framework PHP para aplicaciones web y APIs',
        level: 90,
    },
    {
        name: 'Tailwind CSS',
        icon: 'i-simple-icons-tailwindcss',
        description: 'Framework CSS basado en clases de utilidad',
        level: 90,
    },
    {
        name: 'Bootstrap',
        icon: 'i-fa6-brands-bootstrap',
        description: 'Framework CSS para interfaces responsive',
        level: 90,
    },
    {
        name: 'Sass',
        icon: 'i-fa6-brands-sass',
        description: 'Preprocesador CSS con variables, mixins y funciones',
        level: 90,
    },
    {
        name: 'Flutter',
        icon: 'i-simple-icons-flutter',
        description: 'Framework multiplataforma para aplicaciones móviles y web',
        level: 90,
    },
];

// IconStack
const socialLinks: IconStackItem[] = [
    { icon: 'i-simple-icons-linkedin', label: 'LinkedIn', to: 'https://www.linkedin.com/in/bastiancontreraswasilkowski/' },
    { icon: 'i-simple-icons-github', label: 'GitHub', to: 'https://github.com/BFCW-Was' },
    { icon: 'i-lucide-rss', label: 'Blogs', to: '/blogs' },
];
</script>
