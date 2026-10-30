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
            <hr class="my-2" />

            <div class="mx-auto my-8 max-w-7xl px-4">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-5">
                    <section class="min-w-0 border-r-0 pr-4 xl:border-r xl:border-gray-300">
                        <h2 class="mb-4 border-b border-gray-300 pb-2 text-sm font-semibold">DEFAULT</h2>
                        <div>
                            <p class="mb-4">Parrafo con texto de prueba. Y algo de lorem ipsum para hacer que el parrafo sea mas largo. Y mi nombre Bastián Fernando Contreras Wasilkowski.</p>
                            <p class="mb-4">ÁÉÍÓÚ Ñ Ü · áéíóú ñ ü · ¿Qué? ¡Sí! «Hola» — "mundo"...</p>
                            <p class="mb-4">0123456789 · 0O oO · 1Il · @ # $ % & * + = / \ | ~ ^ _</p>
                            <p class="mb-4">😀 🚀 ❤️ 🎉 👨‍💻 ✨</p>
                            <p class="mb-4">日本語：こんにちは、世界！ひらがな カタカナ</p>
                            <p class="mb-4">Русский: Привет, мир! Ёжик, съешь ещё этих мягких французских булок.</p>
                        </div>
                    </section>

                    <section class="min-w-0 border-r-0 pr-4 xl:border-r xl:border-gray-300">
                        <h2 class="mb-4 border-b border-gray-300 pb-2 text-sm font-semibold">TITLES</h2>
                        <div class="font-title">
                            <p class="mb-4">Parrafo con texto de prueba. Y algo de lorem ipsum para hacer que el parrafo sea mas largo. Y mi nombre Bastián Fernando Contreras Wasilkowski.</p>
                            <p class="mb-4">ÁÉÍÓÚ Ñ Ü · áéíóú ñ ü · ¿Qué? ¡Sí! «Hola» — "mundo"...</p>
                            <p class="mb-4">0123456789 · 0O oO · 1Il · @ # $ % & * + = / \ | ~ ^ _</p>
                            <p class="mb-4">😀 🚀 ❤️ 🎉 👨‍💻 ✨</p>
                            <p class="mb-4">日本語：こんにちは、世界！ひらがな カタカナ</p>
                            <p class="mb-4">Русский: Привет, мир! Ёжик, съешь ещё этих мягких французских булок.</p>
                        </div>
                    </section>

                    <section class="min-w-0 border-r-0 pr-4 xl:border-r xl:border-gray-300">
                        <h2 class="mb-4 border-b border-gray-300 pb-2 text-sm font-semibold">BASE</h2>
                        <div class="font-base">
                            <p class="mb-4">Parrafo con texto de prueba. Y algo de lorem ipsum para hacer que el parrafo sea mas largo. Y mi nombre Bastián Fernando Contreras Wasilkowski.</p>
                            <p class="mb-4">ÁÉÍÓÚ Ñ Ü · áéíóú ñ ü · ¿Qué? ¡Sí! «Hola» — "mundo"...</p>
                            <p class="mb-4">0123456789 · 0O oO · 1Il · @ # $ % & * + = / \ | ~ ^ _</p>
                            <p class="mb-4">😀 🚀 ❤️ 🎉 👨‍💻 ✨</p>
                            <p class="mb-4">日本語：こんにちは、世界！ひらがな カタカナ</p>
                            <p class="mb-4">Русский: Привет, мир! Ёжик, съешь ещё этих мягких французских булок.</p>
                        </div>
                    </section>

                    <section class="min-w-0 border-r-0 pr-4 xl:border-r xl:border-gray-300">
                        <h2 class="mb-4 border-b border-gray-300 pb-2 text-sm font-semibold">DISLEXIC</h2>
                        <div class="font-dislexic">
                            <p class="mb-4">Parrafo con texto de prueba. Y algo de lorem ipsum para hacer que el parrafo sea mas largo. Y mi nombre Bastián Fernando Contreras Wasilkowski.</p>
                            <p class="mb-4">ÁÉÍÓÚ Ñ Ü · áéíóú ñ ü · ¿Qué? ¡Sí! «Hola» — "mundo"...</p>
                            <p class="mb-4">0123456789 · 0O oO · 1Il · @ # $ % & * + = / \ | ~ ^ _</p>
                            <p class="mb-4">😀 🚀 ❤️ 🎉 👨‍💻 ✨</p>
                            <p class="mb-4">日本語：こんにちは、世界！ひらがな カタカナ</p>
                            <p class="mb-4">Русский: Привет, мир! Ёжик, съешь ещё этих мягких французских булок.</p>
                        </div>
                    </section>

                    <section class="min-w-0">
                        <h2 class="mb-4 border-b border-gray-300 pb-2 text-sm font-semibold">CODE</h2>
                        <div class="font-code">
                            <p class="mb-4">Parrafo con texto de prueba. Y algo de lorem ipsum para hacer que el parrafo sea mas largo. Y mi nombre Bastián Fernando Contreras Wasilkowski.</p>
                            <p class="mb-4">ÁÉÍÓÚ Ñ Ü · áéíóú ñ ü · ¿Qué? ¡Sí! «Hola» — "mundo"...</p>
                            <p class="mb-4">0123456789 · 0O oO · 1Il · @ # $ % & * + = / \ | ~ ^ _</p>
                            <p class="mb-4">😀 🚀 ❤️ 🎉 👨‍💻 ✨</p>
                            <p class="mb-4">日本語：こんにちは、世界！ひらがな カタカナ</p>
                            <p class="mb-4">Русский: Привет, мир! Ёжик, съешь ещё этих мягких французских булок.</p>
                        </div>
                    </section>
                </div>
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
        </div>
        <!-- #################### IMÁGENES #################### -->
        <div v-if="isVisibleImagenes">
            <h1>Imagenes</h1>
            <hr class="my-2" />
            <NuxtImg :src="usePublicAsset('/images/logos/MyPortfolio.png')" alt="Logo" />
        </div>
        <!-- #################### BOTONES #################### -->
        <div v-if="isVisibleThemes">
            <h1>Temas</h1>
            <hr class="my-2" />
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
        </div>
        <!-- #################### COMPONENTES #################### -->
        <div v-if="isVisibleComponentes">
            <h1>Componentes</h1>
            <hr class="my-2" />
            <!-- InformationCard.vue -->
            <SnippetsInformationCard title="Test Title" subtitle="Test Subtitle" footnote="Test Footnote" :color="currentColorIC">
                <template #body>
                    <div class="text-default">
                        <p>Este es un div de ejemplo.</p>
                        <UButton size="xs" color="primary" @click="nextColorIC">Cambiar Color</UButton>
                    </div>
                </template>
            </SnippetsInformationCard>
            <hr class="my-5" />
            <!-- ClipboardTooltip.vue -->
            <SnippetsClipboardTooltip text="Test Text" class="m-4">
                <UButton aria-label="Test Label" color="neutral" variant="subtle" icon="i-fa6-solid-flask-vial" label="Test Span" />
            </SnippetsClipboardTooltip>
        </div>
        <!-- ##### -->
    </main>
</template>

<script setup lang="ts">
import { usePublicAsset } from '~/composables/use_public_assets';

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
const colorsIC = ['burgundy', 'sepia', 'gray', 'cyan', 'fire', 'mustard'];
const colorIndexIC = ref(0);
const currentColorIC = computed(() => colorsIC[colorIndexIC.value]);

function nextColorIC() {
    colorIndexIC.value = (colorIndexIC.value + 1) % colorsIC.length;
}

// Definición de Variables locales:
const selectedItem = ref(0);

type ItemVariant = 'normal' | 'red' | 'cyan' | 'yellow' | 'green';

interface SelectorItem {
    label: string;
    variant: ItemVariant;
}

const items: SelectorItem[] = [
    { label: 'ITEM1', variant: 'normal' },
    { label: 'ITEM2', variant: 'red' },
    { label: 'ITEM3', variant: 'cyan' },
    { label: 'ITEM4', variant: 'yellow' },
    { label: 'ITEM5', variant: 'green' },
    { label: 'ITEM6', variant: 'normal' },
    { label: 'ITEM7', variant: 'normal' },
];
</script>
