<template>
    <div class="flex">
        <section class="min-w-0 flex-1">
            <h1>Blogs</h1>
            <!-- Debe tener una opción de cambiar el tipo de vista (base/100% a 70% y 40%) -->
            <!-- Debe tener una opción de cambiar el tipo de letra a dislexia -->
        </section>
        <PrimitivesIconStack :items="socialLinks" />
    </div>
</template>

<script setup lang="ts">
import type { IconStackItem } from '~/components/primitives/IconStack.vue';

const socialLinks: IconStackItem[] = [
    { icon: 'i-simple-icons-linkedin', label: 'LinkedIn', to: 'https://www.linkedin.com/in/bastiancontreraswasilkowski/' },
    { icon: 'i-simple-icons-github', label: 'GitHub', to: 'https://github.com/BFCW-Was' },
    { icon: 'i-lucide-rss', label: 'Blog', to: '/blog' },
];
</script>
