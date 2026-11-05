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
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: var(--ui-radius);
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.25s ease;

    .icon {
        display: flex;
        align-items: center;
    }

    &.outlined {
        background: transparent;
        color: var(--ui-component-text);
        border: 2px solid var(--ui-component-border);
        background-image: linear-gradient(to right, var(--ui-secondary-dark), var(--ui-primary-dark));
    }

    &.gradient {
        background-image: linear-gradient(to right, var(--ui-secondary-dark), var(--ui-primary-dark));
        color: var(--ui-component-text);
    }

    &.filled {
        background-color: var(--ui-primary-dark);
        color: var(--ui-component-text);
    }

    &:hover {
        opacity: 0.5;
    }
}
</style>
