<template>
    <NuxtLayout>
        <section class="flex min-h-full flex-col items-center justify-center text-center">
            <h1 class="text-6xl font-bold">{{ error.status || 500 }}</h1>
            <p class="mt-4 text-gray-500">{{ error.statusText || error.message }}</p>
            <UButton class="mt-8" to="/">Go Back Home</UButton>
        </section>
    </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';
import type { PropType } from 'vue';

defineProps({
    error: {
        type: Object as PropType<NuxtError>,
        required: true,
    },
});
</script>
