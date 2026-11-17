<template>
    <section class="flex flex-col items-center justify-center gap-4 p-8 text-center">
        <h1>Blogs</h1>
        <p>Identificador: {{ id }}</p>

        <UButton to="/blogs">Volver a Blogs</UButton>
    </section>
</template>

<script setup lang="ts">
const route = useRoute();
const id = computed(() => route.params.id as string);

useSeoMeta({
    title: () => `Blog ${id.value}`,
});
</script>
