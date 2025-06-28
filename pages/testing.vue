<template>
    <main>
        <div class="d-flex justify-center ga-2">
            <v-btn color="primary" @click='isVisibleTextos = !isVisibleTextos'>
                {{ isVisibleTextos ? 'Ocultar' : 'Mostrar' }} Textos
            </v-btn>
            <v-btn color="primary" @click='isVisibleBotones = !isVisibleBotones'>
                {{ isVisibleBotones ? 'Ocultar' : 'Mostrar' }} Botones
            </v-btn>
            <v-btn color="primary" @click='isVisibleImagenes = !isVisibleImagenes'>
                {{ isVisibleImagenes ? 'Ocultar' : 'Mostrar' }} Imagenes
            </v-btn>
            <v-btn color="primary" @click='isVisibleVuetify3Themes = !isVisibleVuetify3Themes'>
                {{ isVisibleVuetify3Themes ? 'Ocultar' : 'Mostrar' }} Temas
            </v-btn>
        </div>
        <!-- #################### TEXTOS #################### -->
        <div v-if='isVisibleTextos'>
            <h1>Textos</h1>
        </div>
        <!-- #################### BOTONES #################### -->
        <div v-if='isVisibleBotones'>
            <h1>Botones</h1>
        </div>
        <!-- #################### IMÁGENES #################### -->
        <div v-if='isVisibleImagenes'>
            <h1>Imagenes</h1>
            <nuxt-img src="/images/logos/MyPortfolio.png" alt="Logo" />
        </div>
        <!-- #################### BOTONES #################### -->
        <div v-if='isVisibleVuetify3Themes'>
            <h1>Temas</h1>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-card class="pa-6" title="Primary Card" subtitle="Testing the primary color" color="primary"/>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-card class="pa-6" title="Secondary Card" subtitle="Testing the secondary color" color="secondary"/>
                    </v-col>
                </v-row>
                <v-row class="justify-space-around">
                    <v-col cols="auto">
                        <v-btn color="primary">Primary Button</v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn color="secondary">Secondary Button</v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn color="success">Success Button</v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn color="info">Info Button</v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn color="warning">Warning Button</v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn color="error">Error Button</v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-alert type="success" class="mb-4">Success Alert</v-alert>
                        <v-alert type="info" class="mb-4">Info Alert</v-alert>
                        <v-alert type="warning" class="mb-4">Warning Alert</v-alert>
                        <v-alert type="error" class="mb-4">Error Alert</v-alert>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-text-field label="Input Field" color="primary" variant="outlined"/>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-switch label="Toggle Switch" color="secondary" inset/>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-slider label="Slider Control" color="info" thumbLabel/>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-checkbox label="Checkbox" color="primary"/>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';

const isVisibleTextos = ref(false);
const isVisibleBotones = ref(false);
const isVisibleImagenes = ref(false);
const isVisibleVuetify3Themes = ref(true);
</script>