<template>
    <section>
        <div class="flex justify-center gap-2">
            <UButton color="primary" @click="isVisibleTextos = !isVisibleTextos">{{ isVisibleTextos ? 'Ocultar' : 'Mostrar' }} Textos</UButton>
            <UButton color="primary" @click="isVisibleBotones = !isVisibleBotones">{{ isVisibleBotones ? 'Ocultar' : 'Mostrar' }} Botones</UButton>
            <UButton color="primary" @click="isVisibleImagenes = !isVisibleImagenes">{{ isVisibleImagenes ? 'Ocultar' : 'Mostrar' }} Imagenes</UButton>
            <UButton color="primary" @click="isVisibleComponentes = !isVisibleComponentes">{{ isVisibleComponentes ? 'Ocultar' : 'Mostrar' }} Componentes</UButton>
            <UButton color="primary" @click="isVisibleThemesAndStyles = !isVisibleThemesAndStyles">{{ isVisibleThemesAndStyles ? 'Ocultar' : 'Mostrar' }} Temas y Estilos</UButton>
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
                <hr class="my-5 w-full" />
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
                <hr class="my-5 w-full" />
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
            <hr class="my-5 w-full" />
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
            <hr class="my-5 w-full" />
            <!-- ClipboardTooltip.vue -->
            <PrimitivesClipboardTooltip text="Test Text" class="m-4">
                <UButton aria-label="Test Label" color="neutral" variant="subtle" icon="i-fa6-solid-flask-vial" label="Test Span" />
            </PrimitivesClipboardTooltip>
            <hr class="my-5 w-full" />
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
            <h4>Componentes del Dominio</h4>
            <hr class="my-2" />
            <div class="mx-[8%] flex flex-col items-center gap-2">
                <!-- TechStack.vue -->
                <div class="my-12">
                    <DomainTechStack :columns="6" :items="itemsTechStack" />
                </div>
                <hr class="my-5 w-full" />
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
                <hr class="my-5 w-full" />
            </div>

            <h4>Componentes Compuestos</h4>
            <hr class="my-2" />
            <div class="mx-[8%] flex flex-col items-center gap-2">
                <!-- Thumbnail.vue -->
                <CompositesThumbnail :image="usePublicAsset(fireTesting?.src)" title="TITLE" theme="THEME" year="2026" />
                <hr class="my-5 w-full" />
                <!-- Panel.vue -->
                <div class="flex flex-wrap gap-12">
                    <CompositesPanel name="Lorem ipsum" position="Lorem ipsum" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit..." :avatar="usePublicAsset(fireTesting?.src)" />
                    <CompositesPanel name="Lorem ipsum" position="Lorem ipsum" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit..." avatar="i-lucide-user" avatarType="icon" />
                </div>
                <hr class="my-5 w-full" />
                <!-- FeatureCard.vue -->
                <CompositesFeatureCard name="Título" icon="i-fa6-solid-quote-right" description="Descripción" :features="featuresForCard" />
                <hr class="my-5 w-full" />
                <!-- ProjectDescription.vue [1, 2 & 3] -->
                <CompositesProjectCard1
                    :index="1"
                    name="Name"
                    :description="['Lorem ipsum dolor sit amet, consectetur adipiscing elit...']"
                    :image="usePublicAsset(fireTesting?.src)"
                    year="2026"
                    :signage="signageItem"
                />
                <hr class="my-5 w-full" />
                <CompositesProjectCard2 :index="1" name="Name" :description="['Lorem ipsum dolor sit amet, consectetur adipiscing elit...']" :image="usePublicAsset(fireTesting?.src)" year="2026" />
                <hr class="my-5 w-full" />
                <CompositesProjectCard3 :index="1" name="Name" :description="['Lorem ipsum dolor sit amet, consectetur adipiscing elit...']" :image="usePublicAsset(fireTesting?.src)" year="2026" />
                <hr class="my-5 w-full" />
                <!-- InformationCard.vue -->
                <CompositesInformationCard title="Test Title" subtitle="Test Subtitle" footnote="Test Footnote" :color="currentColorIC">
                    <template #body>
                        <div class="text-default">
                            <p>Este es un div de ejemplo.</p>
                            <UButton size="xs" color="primary" @click="nextColorIC">Cambiar Color</UButton>
                        </div>
                    </template>
                </CompositesInformationCard>
                <hr class="my-5 w-full" />
                <!-- Timeline.vue -->
                <CompositesTimeline variant="number">
                    <CompositesTimelineStep
                        :number="1"
                        title="Title 1"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in felis sed orci facilisis tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent
                        mollis finibus diam a volutpat. Suspendisse sed tristique purus. Etiam quis tellus at justo mattis maximus at non mi. Maecenas condimentum rhoncus nulla. Mauris interdum
                        consequat enim at suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc blandit lacus in nisi cursus, eget eleifend massa
                        semper. Fusce hendrerit dolor non pharetra bibendum. Donec ut semper quam, ac scelerisque turpis. Donec vel sodales orci, eget faucibus risus. Fusce quis sodales sapien, eget
                        viverra velit. Nunc blandit quis massa faucibus sodales."
                        buttonText="See Examples"
                    />
                    <CompositesTimelineStep :number="2" title="Title 2" description="Second step" />
                    <CompositesTimelineStep :number="3" title="Title 3" description="Another step" />
                    <CompositesTimelineStep :number="4" title="Title 4" description="Last step" buttonText="Finish" />
                </CompositesTimeline>
                <hr class="my-5 w-full" />
                <CompositesTimeline variant="dot">
                    <CompositesTimelineStep
                        label="2026"
                        title="Title 1"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in felis sed orci facilisis tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent
                        mollis finibus diam a volutpat. Suspendisse sed tristique purus. Etiam quis tellus at justo mattis maximus at non mi. Maecenas condimentum rhoncus nulla. Mauris interdum
                        consequat enim at suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc blandit lacus in nisi cursus, eget eleifend massa
                        semper. Fusce hendrerit dolor non pharetra bibendum. Donec ut semper quam, ac scelerisque turpis. Donec vel sodales orci, eget faucibus risus. Fusce quis sodales sapien, eget
                        viverra velit. Nunc blandit quis massa faucibus sodales."
                        buttonText="See Examples"
                    />
                    <CompositesTimelineStep label="2025" title="Title 2" description="Second step" />
                    <CompositesTimelineStep label="2025" title="Title 3" description="Another step" />
                    <CompositesTimelineStep label="2024" title="Title 4" description="Last step" buttonText="Finish" />
                </CompositesTimeline>
                <hr class="my-5 w-full" />
                <!-- ItemSelector.vue -->
                <CompositesItemSelector v-model="selectedItem" :items="items" label="Selecciona una opción" />
                <div class="text-center">Seleccionado: {{ selectedItem }}</div>
                <hr class="my-5 w-full" />
                <!-- IconStack.vue -->
                <div class="flex flex-wrap gap-12">
                    <CompositesIconStack :floating="false" position="left" :items="socialLinks" />
                    <CompositesIconStack :floating="false" position="top" :items="socialLinks" />
                    <CompositesIconStack :floating="false" position="bottom" :items="socialLinks" />
                    <CompositesIconStack :floating="false" position="right" :items="socialLinks" />
                </div>
                <hr class="my-5 w-full" />
                <!-- PhotoFrame.vue -->
                <CompositesPhotoFrame
                    style="width: 250px"
                    :image="usePublicAsset(fireTesting?.src)"
                    :alt="fireTesting?.alt"
                    year="2026"
                    ratio="1"
                    badge="bottom-left"
                    :signage="{ variant: 'outlined', text: '2026' }"
                />
                <hr class="my-5 w-full" />
            </div>

            <h4>Componentes Primitivos</h4>
            <hr class="my-2" />
            <div class="mx-[8%] flex flex-col items-center gap-2">
                <!-- Separador.vue -->
                <PrimitivesSeparator />
                <PrimitivesSeparator :decoration="1" />
                <PrimitivesSeparator :decoration="2" />
                <PrimitivesSeparator :decoration="3" />
                <PrimitivesSeparator variant="subtle" thickness="8px" />
                <hr class="my-5 w-full" />
                <!-- IconLink.vue -->
                <div class="flex flex-wrap gap-12">
                    <PrimitivesIconLink label="GitHub" to="https://github.com" icon="i-simple-icons-github" position="top" />
                    <PrimitivesIconLink label="GitHub" to="https://github.com" icon="i-simple-icons-github" position="bottom" />
                    <PrimitivesIconLink label="GitHub" to="https://github.com" icon="i-simple-icons-github" position="left" />
                    <PrimitivesIconLink label="GitHub" to="https://github.com" icon="i-simple-icons-github" position="right" />
                </div>
                <hr class="my-5 w-full" />
                <!-- Title Card.vue -->
                <div class="flex flex-wrap gap-5">
                    <PrimitivesTitleCard title="Temporal Title" variant="top-left" />
                    <PrimitivesTitleCard title="Temporal Title" variant="top-right" />
                    <PrimitivesTitleCard title="Temporal Title" variant="bottom-left" />
                    <PrimitivesTitleCard title="Temporal Title" variant="bottom-right" />
                </div>
                <hr class="my-5 w-full" />
                <!-- Signage.vue -->
                <div class="flex flex-wrap gap-5">
                    <PrimitivesSignage variant="outlined" text="Test Texto" />
                    <PrimitivesSignage variant="gradient" text="Test Texto" />
                    <PrimitivesSignage variant="filled" text="Test Texto" />
                </div>
                <hr class="my-5 w-full" />
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
        </div>

        <!-- #################### THEME #################### -->
        <div v-if="isVisibleThemesAndStyles">
            <h1>Temas y Estilos</h1>
            <hr class="my-2" />
            <div class="animations-test">
                <h2>Animaciones</h2>
                <ul class="grid">
                    <li v-for="item in animations" :key="item.name" class="card ornamental-border">
                        <div class="stage">
                            <!-- El key cambia al repetir, lo que reinicia la animación -->
                            <div :key="item.runs" class="sample" :class="item.name">
                                <UIcon name="i-lucide-sparkles" />
                            </div>
                        </div>
                        <code>{{ item.name }}</code>
                        <p>{{ item.note }}</p>
                        <UButton size="xs" variant="outline" icon="i-lucide-rotate-ccw" @click="item.runs++">Repetir</UButton>
                    </li>
                </ul>
            </div>
            <hr class="my-5 w-full" />
            <div class="animations-test">
                <h2>Interacciones</h2>
                <ul class="grid">
                    <li class="card ornamental-border">
                        <div class="stage">
                            <div class="sample tilt-demo ornamental-tilt" v-on="tilt">
                                <UIcon name="i-lucide-sparkles" />
                            </div>
                        </div>
                        <code>useTilt + ornamental-tilt</code>
                        <p>Se inclina según la posición del puntero sobre la pieza</p>
                    </li>
                    <li class="card ornamental-border">
                        <div ref="parallaxRoot" class="stage parallax">
                            <span class="layer layer--back" />
                            <span class="layer layer--mid" />
                            <span class="layer layer--front" />
                        </div>
                        <code>useParallax</code>
                        <p>Mueve el mouse por la pantalla: cada capa se desplaza distinto</p>
                    </li>
                    <li ref="revealRoot" class="card ornamental-border">
                        <div class="stage reveals">
                            <span class="sample" data-reveal="0" data-reveal-from="up" />
                            <span class="sample" data-reveal="150" data-reveal-from="left" />
                            <span class="sample" data-reveal="300" data-reveal-from="right" />
                            <span class="sample" data-reveal="450" data-reveal-from="scale" />
                        </div>
                        <code>useReveal</code>
                        <p>Entradas up, left, right y scale con retraso escalonado</p>
                        <UButton size="xs" variant="outline" icon="i-lucide-rotate-ccw" @click="replay">Repetir</UButton>
                    </li>
                </ul>
            </div>
            <hr class="my-5 w-full" />
            <div class="ornamentals-test">
                <h2>Adornos</h2>
                <ul class="grid">
                    <li class="card ornamental-border">
                        <div class="stage">
                            <div class="sample ornamental-border">Texto</div>
                        </div>
                        <code>ornamental-border</code>
                        <p>Borde decorativo</p>
                    </li>
                    <li class="card ornamental-border">
                        <div class="stage">
                            <div class="sample ornamental-hover">Hover</div>
                        </div>
                        <code>ornamental-hover</code>
                        <p>Efecto al pasar el mouse por encima</p>
                    </li>
                    <li class="card ornamental-border">
                        <div class="stage">
                            <div class="sample ornamental-tile">Tile</div>
                        </div>
                        <code>ornamental-tile</code>
                        <p>Baldosa decorativa</p>
                    </li>
                    <li class="card ornamental-border">
                        <div class="stage">
                            <h3 class="ornamental-title">Título</h3>
                        </div>
                        <code>ornamental-title</code>
                        <p>Estilo de título decorativo</p>
                    </li>
                    <li class="card ornamental-border">
                        <div class="stage">
                            <span class="ornamental-ring" style="--ring-size: 5rem" aria-hidden="true" />
                        </div>
                        <code>ornamental-ring</code>
                        <p>Anillo (tamaño con --ring-size)</p>
                    </li>
                    <li class="card ornamental-border">
                        <div class="stage stage--relative">
                            <span class="dots-fill ornamental-dots" aria-hidden="true" />
                        </div>
                        <code>ornamental-dots</code>
                        <p>Trama de puntos que se desvanece hacia los bordes</p>
                    </li>
                    <li class="card ornamental-border">
                        <div class="stage">
                            <p class="ornamental-eyebrow">01 / Demo</p>
                        </div>
                        <code>ornamental-eyebrow</code>
                        <p>Etiqueta tipo coordenada con una línea a cada lado</p>
                    </li>
                    <li class="card ornamental-border">
                        <div class="stage">
                            <div class="sample sample--wide ornamental-noise">Ruido</div>
                        </div>
                        <code>ornamental-noise</code>
                        <p>Textura de ruido estática (--noise-opacity)</p>
                    </li>
                    <li class="card ornamental-border">
                        <div class="stage">
                            <div class="sample sample--wide ornamental-layers">Capas</div>
                        </div>
                        <code>ornamental-layers</code>
                        <p>Sombras traslúcidas apiladas; se alejan en hover</p>
                    </li>
                    <li class="card ornamental-border">
                        <div class="stage">
                            <span class="ghost ornamental-ghost">2026</span>
                        </div>
                        <code>ornamental-ghost</code>
                        <p>Texto solo con contorno (--ghost-color)</p>
                    </li>
                    <li class="card card--wide ornamental-border">
                        <div class="stage stage--auto">
                            <div class="ornamental-tabs">
                                <UTabs v-model="activeTab" :items="tabs" :content="false" size="md" variant="link" />
                            </div>
                        </div>
                        <code>ornamental-tabs</code>
                        <p>Pestañas (UTabs) con responsividad</p>
                    </li>
                </ul>
            </div>
            <hr class="my-5 w-full" />

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
                <div class="mt-4 grid gap-8 sm:grid-cols-3">
                    <UFormField label="Input Field">
                        <UInput color="primary" variant="outline" class="w-full" />
                    </UFormField>
                    <USwitch label="Toggle Switch" color="primary" />
                    <UFormField label="Slider Control">
                        <USlider color="primary" />
                    </UFormField>
                    <UCheckbox label="Checkbox" color="primary" />
                    <UFormField label="Select Field">
                        <USelect :items="['Opción 1', 'Opción 2', 'Opción 3']" placeholder="Selecciona..." class="w-full" />
                    </UFormField>
                    <UFormField label="Radio Group">
                        <URadioGroup :items="['A', 'B', 'C']" />
                    </UFormField>
                </div>
                <div class="mt-4 flex flex-wrap justify-around gap-4">
                    <UTabs variant="pill" color="primary" :items="[{ label: 'Tab Pill 1' }, { label: 'Tab Pill 2' }]" :content="false" />
                    <UTabs variant="link" color="secondary" :content="false" :items="[{ label: 'Tab Link 1' }, { label: 'Tab Link 2' }]" />
                </div>
                <div class="mt-4 flex flex-wrap items-center gap-3">
                    <UBadge color="primary" variant="solid">Solid</UBadge>
                    <UBadge color="info" variant="soft">Soft</UBadge>
                    <UBadge color="secondary" variant="outline">Outline</UBadge>
                    <UBadge color="info" variant="subtle">Subtle</UBadge>
                </div>
                <div class="mt-4 flex flex-wrap items-center gap-3">
                    <UIcon name="i-lucide-sparkles" class="size-6 text-primary" />
                    <UAvatar alt="BFCW" size="sm" />
                </div>
            </div>
            <hr class="my-5 w-full" />

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
            <hr class="my-5 w-full" />
        </div>
        <!-- ##### -->
    </section>
</template>

<script setup lang="ts">
import type { TechStackItem } from '~/components/domain/TechStack.vue';
import type { FeatureItem } from '~/components/composites/FeatureCard.vue';
import type { IconStackItem } from '~/components/composites/IconStack.vue';
import type { SelectorItem } from '~/components/composites/ItemSelector.vue';
import type { SignageItem } from '~/components/composites/PhotoFrame.vue';
import { useParallax } from '~/composables/styles/parallax.ts';
import { useReveal } from '~/composables/styles/reveal.ts';
import { useTilt } from '~/composables/styles/tilt.ts';

import { assetsManager } from '~/utils/assets_manager.ts';

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
const isVisibleThemesAndStyles = ref(false);

// Cambio de Ancho de Texto:
const textBlockWidth = ref('100%');

function changeTextBlockWidth() {
    textBlockWidth.value = textBlockWidth.value === '100%' ? '70%' : textBlockWidth.value === '70%' ? '40%' : '100%';
}

// Muestra de Tabs:
const activeTab = ref('all');
const tabs = [
    { label: 'Todas', value: 'all' },
    { label: 'Cloud', value: 'cloud' },
    { label: 'Front-End', value: 'front' },
    { label: 'Back-End', value: 'back' },
    { label: 'Base de Datos', value: 'db' },
];

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

// Animaciones
const animations = reactive([
    { name: 'rise', note: 'Entrada con desplazamiento', runs: 0 },
    { name: 'drop', note: 'Caída con rebote', runs: 0 },
    { name: 'spin', note: 'Giro continuo', runs: 0 },
    { name: 'float', note: 'Flotación vertical suave', runs: 0 },
    { name: 'vibration', note: 'Sacudidas laterales rápidas', runs: 0 },
    { name: 'twinkle', note: 'Tintineo con destello', runs: 0 },
    { name: 'waves', note: 'Ondas que se expanden', runs: 0 },
    { name: 'lift', note: 'Elevación', runs: 0 },
    { name: 'upscale', note: 'Crece', runs: 0 },
    { name: 'downscale', note: 'Se encoge', runs: 0 },
    { name: 'drift', note: 'Deriva vertical (parallax de scroll)', runs: 0 },
    { name: 'marquee', note: 'Desplazamiento continuo', runs: 0 },
    { name: 'blink', note: 'Parpadeo', runs: 0 },
    { name: 'grow', note: 'Crece desde su base', runs: 0 },
    { name: 'sweep', note: 'Barrido de izquierda a derecha', runs: 0 },
    { name: 'scene-in', note: 'Aparece subiendo (escena de scroll)', runs: 0 },
    { name: 'scene-lift', note: 'Sube desde abajo (escena de scroll)', runs: 0 },
    { name: 'scene-shrink', note: 'De grande a normal (escena de scroll)', runs: 0 },
    { name: 'scene-level', note: 'Se endereza desde un giro (escena de scroll)', runs: 0 },
    { name: 'settle', note: 'Parte girada y desplazada, y se alinea', runs: 0 },
]);
const tilt = useTilt();
const parallaxRoot = useTemplateRef<HTMLElement>('parallaxRoot');
useParallax(parallaxRoot);
const revealRoot = useTemplateRef<HTMLElement>('revealRoot');
const { replay } = useReveal(revealRoot);

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

// ProjectCard:
const signageItem: SignageItem = {
    variant: 'outlined',
    text: 'label',
    position: 'top-right',
};
</script>

<style lang="scss" scoped>
@use '~/assets/scss/animations/animation_rise.scss';
@use '~/assets/scss/animations/animation_drop.scss';
@use '~/assets/scss/animations/animation_spin.scss';
@use '~/assets/scss/animations/animation_float.scss';
@use '~/assets/scss/animations/animation_vibration.scss';
@use '~/assets/scss/animations/animation_twinkle.scss';
@use '~/assets/scss/animations/animation_waves.scss';
@use '~/assets/scss/animations/animation_lift.scss';
@use '~/assets/scss/animations/animation_upscale.scss';
@use '~/assets/scss/animations/animation_downscale.scss';
@use '~/assets/scss/animations/animation_drift.scss';
@use '~/assets/scss/animations/animation_marquee.scss';
@use '~/assets/scss/animations/animation_blink.scss';
@use '~/assets/scss/animations/animation_grow.scss';
@use '~/assets/scss/animations/animation_sweep.scss';
@use '~/assets/scss/animations/animation_scene.scss';
@use '~/assets/scss/animations/animation_settle.scss';

.animations-test {
    --duration: 2s;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
        gap: 1rem;
        margin: 0;
        padding: 0;
        list-style: none;

        .card {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem;
            text-align: center;
            color: var(--ui-component-text);

            .stage {
                display: grid;
                place-items: center;
                width: 100%;
                height: 6rem;

                .sample {
                    display: grid;
                    place-items: center;
                    width: 3.5rem;
                    height: 3.5rem;
                    border-radius: var(--ui-radius);
                    background: linear-gradient(to bottom, var(--ui-primary-muted, var(--ui-primary)), var(--ui-component));
                    font-size: 1.5rem;

                    &.drop {
                        animation: drop var(--duration) ease-in-out infinite;
                    }

                    &.rise {
                        animation: rise var(--duration) ease-in-out infinite;
                    }

                    &.spin {
                        animation: spin var(--duration) ease-in-out infinite;
                    }

                    &.float {
                        animation: float var(--duration) ease-in-out infinite;
                    }

                    &.vibration {
                        animation: vibration var(--duration) ease-in-out infinite;
                    }

                    &.twinkle {
                        animation: twinkle var(--duration) ease-in-out infinite;
                    }

                    &.waves {
                        animation: waves var(--duration) ease-in-out infinite;
                    }

                    &.lift {
                        animation: lift var(--duration) ease-in-out infinite;
                    }

                    &.upscale {
                        animation: upscale var(--duration) ease-in-out infinite;
                    }

                    &.downscale {
                        animation: downscale var(--duration) ease-in-out infinite;
                    }

                    &.drift {
                        animation: drift var(--duration) ease-in-out infinite;
                    }

                    &.marquee {
                        animation: marquee var(--duration) ease-in-out infinite;
                    }

                    &.blink {
                        animation: blink var(--duration) ease-in-out infinite;
                    }

                    &.grow {
                        animation: grow var(--duration) ease-in-out infinite;
                    }

                    &.sweep {
                        animation: sweep var(--duration) ease-in-out infinite;
                    }

                    &.scene-in {
                        animation: scene-in var(--duration) ease-in-out infinite;
                    }

                    &.scene-lift {
                        animation: scene-lift var(--duration) ease-in-out infinite;
                    }

                    &.scene-shrink {
                        animation: scene-shrink var(--duration) ease-in-out infinite;
                    }

                    &.scene-level {
                        animation: scene-level var(--duration) ease-in-out infinite;
                    }

                    // En el sitio va ligada al scroll; aquí se reproduce por tiempo y necesita sus variables de partida
                    &.settle {
                        --r: -14deg;
                        --tx: 1.5rem;
                        --ty: -1rem;

                        animation: settle var(--duration) ease-in-out infinite alternate;
                    }
                }

                // Tilt: pieza más grande, con borde y ángulo mayor para que la rotación 3D se note
                .tilt-demo {
                    --tilt-angle: 18deg;

                    width: 7rem;
                    height: 4.5rem;
                    border: 2px solid var(--ui-primary);
                }

                // Reveals: cuatro piezas pequeñas en fila
                &.reveals {
                    display: flex;
                    gap: 0.5rem;
                    justify-content: center;

                    .sample {
                        width: 2.25rem;
                        height: 2.25rem;
                    }
                }

                // Parallax: tres capas concéntricas que se mueven distinto con --px / --py
                &.parallax {
                    position: relative;

                    .layer {
                        position: absolute;
                        inset: 0;
                        margin: auto;
                        border: 1px solid var(--ui-primary);
                        border-radius: 50%;

                        &--back {
                            width: 5.5rem;
                            height: 5.5rem;
                            translate: calc(var(--px, 0) * -6px) calc(var(--py, 0) * -4px);
                        }

                        &--mid {
                            width: 3.5rem;
                            height: 3.5rem;
                            translate: calc(var(--px, 0) * 10px) calc(var(--py, 0) * 7px);
                        }

                        &--front {
                            width: 1.5rem;
                            height: 1.5rem;
                            background: var(--ui-primary);
                            translate: calc(var(--px, 0) * 22px) calc(var(--py, 0) * 15px);
                        }
                    }
                }
            }

            p {
                font-size: 0.8rem;
                color: color-mix(in oklab, var(--ui-component-text) 60%, transparent);
            }
        }
    }
}

.ornamentals-test {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
        gap: 1.5rem;
        margin: 0;
        padding: 0;
        list-style: none;

        .card {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem;
            text-align: center;
            color: var(--ui-component-text);

            // Las tarjetas anchas ocupan toda la fila (por ejemplo, la de las pestañas)
            &--wide {
                grid-column: 1 / -1;
            }

            .stage {
                display: grid;
                place-items: center;
                width: 100%;
                height: 6rem;

                &--relative {
                    position: relative;
                }

                &--auto {
                    height: auto;
                    min-height: 6rem;
                }

                .dots-fill {
                    position: absolute;
                    inset: 0;
                }

                .sample {
                    display: grid;
                    place-items: center;
                    width: 5rem;
                    height: 3.5rem;
                    border-radius: var(--ui-radius);
                    background: linear-gradient(to bottom, var(--ui-primary-muted, var(--ui-primary)), var(--ui-component));
                    font-size: 0.9rem;

                    &--wide {
                        width: 7rem;
                        height: 4rem;
                    }
                }

                .ghost {
                    font-size: 3rem;
                    line-height: 1;
                }
            }

            p {
                font-size: 0.8rem;
                color: color-mix(in oklab, var(--ui-component-text) 60%, transparent);
            }
        }
    }
}
</style>
