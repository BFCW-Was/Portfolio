<template>
    <span hidden />
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { isCodeLanguage, type CodeLanguage } from '~/composables/code_languages.ts';

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    language: {
        type: String as PropType<CodeLanguage>,
        required: true,
        validator: isCodeLanguage,
    },
    code: {
        type: String,
        default: undefined,
    },
});
</script>
