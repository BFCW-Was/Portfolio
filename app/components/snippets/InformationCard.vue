<template>
    <div :class="['custom-card-info', colorClass]" class="bg-default">
        <!-- Header clickeable con slot -->
        <div class="card-header flex items-center" style="cursor: pointer" @click="toggleExpand()">
            <UIcon name="i-fa6-solid-caret-right" class="transition-transform" :class="{ 'rotate-90': isExpanded }" />
            <slot name="header">
                <div class="flex flex-col justify-center">
                    <span class="text-subtitle-1 font-bold">{{ title }}</span>
                    <span v-if="subtitle" class="text-caption">{{ subtitle }}</span>
                </div>
            </slot>
        </div>
        <!-- Contenido con transición suave -->
        <div class="expand-wrapper" :class="{ expanded: isExpanded }" :inert="!isExpanded || undefined">
            <div class="expand-inner">
                <div class="text-default">
                    <slot name="body" />
                    <div v-if="footnote" class="footnote">* {{ footnote }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, defineProps, ref } from 'vue';

// Define props
const props = defineProps({
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },
    footnote: { type: String, default: '' },
    expandable: { type: Boolean, default: true },
    color: {
        type: String,
        default: 'cyan',
        validator: (val) => ['burgundy', 'sepia', 'gray', 'cyan', 'fire', 'mustard'].includes(val),
    },
});

// Locals
const isExpanded = ref(true);

// Computed Color Class
const colorClass = computed(() => {
    return props.color ? `${props.color}` : '';
});

// Methods
function toggleExpand() {
    if (!props.expandable) return;
    isExpanded.value = !isExpanded.value;
}
</script>

<style scoped lang="scss">
.custom-card-info {
    margin: 16px;
    padding: 8px 24px;
    border-radius: 4px;
    font-size: 0.75rem;
    gap: 8px;

    .card-header {
        padding: 10px 0px;
        user-select: none;

        .transition-transform {
            margin-right: 10px;
            transition: transform 0.5s ease;
        }

        .rotate-90 {
            transform: rotate(90deg);
        }
    }

    expand-wrapper {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        &.expanded {
            grid-template-rows: 1fr;
        }

        .expand-inner {
            overflow: hidden;
            min-height: 0;
        }
    }

    // Nota al pie:
    .footnote {
        margin: 4px;
        margin-left: 12px;
        font-size: 0.5rem;
        color: var(--color-bfcw-white-20);
    }

    // Clases dinámicas por color
    $colors: (
        'burgundy': var(--color-bfcw-burgundy-90),
        'sepia': var(--color-bfcw-sepia-90),
        'gray': var(--color-bfcw-white-20),
        'cyan': var(--color-bfcw-cyan-90),
        'fire': var(--color-bfcw-fire-90),
        'mustard': var(--color-bfcw-mustard-90),
    );

    @each $name, $color in $colors {
        &.#{$name} {
            border: 2px solid $color;
            border-left: 12px solid $color;
            box-shadow: 2px 2px 4px 2px rgba($color, 0.15);

            .card-header {
                color: $color;
            }
        }
    }
}
</style>
