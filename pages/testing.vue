<template>
    <div>
        <div>
            <button @click='isVisibleTextos = !isVisibleTextos'>
                {{ isVisibleTextos ? 'Ocultar Textos' : 'Mostrar Textos' }}
            </button>
            <button @click='isVisibleBotones = !isVisibleBotones'>
                {{ isVisibleBotones ? 'Ocultar Botones' : 'Mostrar Botones' }}
            </button>
        </div>
        <!-- #################### BOTONES #################### -->
        <div v-if='isVisibleBotones'>
            <h4>Botones</h4>
        </div>
        <!-- #################### TEXTOS #################### -->
        <div v-if='isVisibleTextos'>
            <h4>Textos</h4>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isVisibleTextos = ref(true);
const isVisibleBotones = ref(false);
</script>