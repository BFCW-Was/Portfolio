<template>
    <div class="tagged-separator">
        <span class="label">{{ label }}</span>
        <span class="rule" aria-hidden="true" />
        <template v-if="open">
            <UBadge v-for="tag in tags" :key="tag" :label="tag" color="neutral" variant="outline" class="tag" />
        </template>
        <UButton
            v-if="collapsible"
            :icon="open ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
            color="neutral"
            variant="ghost"
            size="xs"
            :aria-expanded="open"
            :aria-label="open ? 'Ocultar tecnologías' : 'Mostrar tecnologías'"
            @click="open = !open"
        />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    tags: {
        type: Array as PropType<string[]>,
        default: () => [],
    },
    collapsible: {
        type: Boolean,
        default: false,
    },
});

const open = ref(true);
</script>

<style lang="scss" scoped>
.tagged-separator {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem 0.75rem;

    .label {
        font-size: 0.75rem;
        font-variant-numeric: tabular-nums;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: var(--ui-secondary);
    }

    .rule {
        flex: 1 1 3rem;
        height: 1px;
        background: color-mix(in srgb, var(--ui-secondary) 55%, transparent);
    }

    .tag {
        --tw-ring-color: color-mix(in srgb, var(--ui-text) 25%, transparent);

        color: var(--ui-text-muted);
    }
}
</style>
