<template>
    <div :class="['custom-card-info', colorClass]">
        <!-- Header -->
        <div class="card-header flex items-center" style="cursor: pointer" @click="toggleExpand()">
            <UIcon name="i-fa6-solid-caret-right" class="transition-transform" :class="{ 'rotate-90': isExpanded }" />
            <slot name="header">
                <div class="flex flex-col justify-center">
                    <span class="text-subtitle-1 font-bold">{{ title }}</span>
                    <span v-if="subtitle" class="text-caption">{{ subtitle }}</span>
                </div>
            </slot>
        </div>
        <!-- Contenido + Transición -->
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

<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        default: '',
    },
    footnote: {
        type: String,
        default: '',
    },
    expandable: {
        type: Boolean,
        default: true,
    },
    color: {
        type: String,
        default: 'variant-cyan',
        validator: (v: string) => ['variant-burgundy', 'variant-sepia', 'variant-gray', 'variant-cyan', 'variant-fire', 'variant-mustard'].includes(v),
    },
});

const isExpanded = ref(true);

const colorClass = computed(() => props.color);

function toggleExpand() {
    if (!props.expandable) return;
    isExpanded.value = !isExpanded.value;
}
</script>

<style scoped lang="scss">
.custom-card-info {
    // Light Theme
    --cc-bg: var(--color-bfcw-white-90);
    --cc-text: var(--color-bfcw-black-90);
    --cc-footnote: var(--color-bfcw-black-50);

    margin: 16px;
    padding: 8px 24px;
    border-radius: 4px;
    font-size: 0.75rem;
    gap: 8px;
    background-color: var(--cc-bg);
    color: var(--cc-text);

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

    .expand-wrapper {
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

    .footnote {
        margin: 4px;
        margin-left: 12px;
        font-size: 0.5rem;
        color: var(--cc-footnote);
    }

    $colors: (
        'variant-burgundy': var(--color-bfcw-burgundy-90),
        'variant-sepia': var(--color-bfcw-sepia-70),
        'variant-gray': var(--color-bfcw-white-20),
        'variant-cyan': var(--color-bfcw-cyan-90),
        'variant-fire': var(--color-bfcw-fire-90),
        'variant-mustard': var(--color-bfcw-mustard-90),
    );

    @each $name, $color in $colors {
        &.#{$name} {
            border: 2px solid $color;
            border-left: 12px solid $color;
            box-shadow: 2px 2px 4px 2px color-mix(in oklab, $color 15%, transparent);

            .card-header {
                color: $color;
            }
        }
    }
}

// Dark Theme
.dark .custom-card-info {
    --cc-bg: var(--color-bfcw-black-70);
    --cc-text: var(--color-bfcw-white-90);
    --cc-footnote: var(--color-bfcw-white-20);
}

// Sepia Theme
.theme-sepia .custom-card-info {
    --cc-bg: var(--color-bfcw-sepia-90);
    --cc-text: var(--color-bfcw-white-90);
    --cc-footnote: var(--color-bfcw-sepia-20);
}
</style>
