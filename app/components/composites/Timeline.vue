<template>
    <div class="timeline">
        <slot />
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
    variant: {
        type: String as PropType<'number' | 'dot'>,
        default: 'dot',
        validator: (v: string) => ['number', 'dot'].includes(v),
    },
});

provide('timelineVariant', toRef(props, 'variant'));
</script>

<style scoped lang="scss">
.timeline {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style: none;
}
</style>
