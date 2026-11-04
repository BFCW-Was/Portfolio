<template>
    <a :href="href" download class="download-button" :class="`${props.variant}`">
        <UIcon :name="icon" size="20" class="icon" />
        <span class="label">{{ label }}</span>
    </a>
</template>

<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        default: 'Download',
    },
    href: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        default: 'i-fa6-solid-circle-info',
    },
    variant: {
        type: String,
        default: 'outlined',
        validator: (v: string) => ['outlined', 'gradient', 'filled'].includes(v),
    },
});
</script>

<style lang="scss" scoped>
.download-button {
    // Light Theme
    --db-text: var(--color-bfcw-white-90);
    --db-border: var(--color-bfcw-black-20);

    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 12px;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.25s ease;

    .icon {
        display: flex;
        align-items: center;
    }

    &.outlined {
        background: transparent;
        color: var(--db-text);
        border: 2px solid var(--db-border);
        background-image: linear-gradient(to right, var(--color-bfcw-burgundy-100), var(--color-bfcw-cyan-100));
    }

    &.gradient {
        background-image: linear-gradient(to right, var(--color-bfcw-burgundy-100), var(--color-bfcw-cyan-100));
        color: var(--db-text);
    }

    &.filled {
        background-color: var(--color-bfcw-cyan-100);
        color: var(--db-text);
    }

    &:hover {
        opacity: 0.5;
    }
}

// Dark Theme
.dark .download-button {
    --db-text: var(--color-bfcw-white-90);
    --db-border: var(--color-bfcw-white-90);
}

// Sepia Theme
.theme-sepia .download-button {
    --db-text: var(--color-bfcw-white-70);
    --db-border: var(--color-bfcw-white-70);
}
</style>
