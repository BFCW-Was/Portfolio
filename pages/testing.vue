<template>
    <main>
        <div>
            <button @click='isVisibleTextos = !isVisibleTextos'>
                {{ isVisibleTextos ? 'Ocultar Textos' : 'Mostrar Textos' }}
            </button>
            <button @click='isVisibleBotones = !isVisibleBotones'>
                {{ isVisibleBotones ? 'Ocultar Botones' : 'Mostrar Botones' }}
            </button>
            <button @click='isVisibleImagenes = !isVisibleImagenes'>
                {{ isVisibleImagenes ? 'Ocultar Imagenes' : 'Mostrar Imagenes' }}
            </button>
        </div>
        <!-- #################### TEXTOS #################### -->
        <div v-if='isVisibleTextos'>
            <h4>Textos</h4>
        </div>
        <!-- #################### BOTONES #################### -->
        <div v-if='isVisibleBotones'>
            <h4>Botones</h4>
        </div>
        <!-- #################### IMÁGENES #################### -->
        <div v-if='isVisibleImagenes'>
            <h4>Imagenes</h4>
            <nuxt-img src="/images/logos/MyPortfolio.png" alt="Logo" />
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';

const isVisibleTextos = ref(false);
const isVisibleBotones = ref(false);
const isVisibleImagenes = ref(false);
</script>