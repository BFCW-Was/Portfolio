<template>
    <div :class="['custom-card-info', colorClass]" class="bg-background">
        <!-- Header clickeable con slot -->
        <div class="card-header d-flex align-center" style="cursor: pointer;" @click="toggleExpand()">
            <v-icon class="transition-transform" :class="{ 'rotate-90': isExpanded }"> fa-solid fa-caret-right </v-icon>
            <slot name="header">
                <div class="d-flex flex-column justify-center">
                    <span class="text-subtitle-1 font-weight-bold">{{ title }}</span>
                    <span v-if="subtitle" class="text-caption">{{ subtitle }}</span>
                </div>
            </slot>
        </div>
        <!-- Contenido con transición suave -->
        <v-expand-transition>
            <div v-show="isExpanded" class="text-onBackground">
                <slot name="body" />
                <div v-if="footnote" class="footnote">
                    * {{ footnote }}
                </div>
            </div>
        </v-expand-transition>
    </div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';

// Define props
const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  footnote: { type: String, default: '' },
  expandable: { type: Boolean, default: true },
  color: {
    type: String,
    default: 'cyan',
    validator: (val) =>
      ['burgundy', 'sepia', 'white', 'cyan', 'fire', 'mustard'].includes(val),
  },
});

// Locals
const isExpanded = ref(true);

// Computed Color Class
const colorClass = computed(() =>
  props.color ? `${props.color}` : ''
);

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
    font-size: 0.875rem;
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
    
    // Nota al pie:
    .footnote {
        margin: 4px;
        margin-left: 12px;
        font-size: 0.5rem;
        color: $white-20;
    }
    
    // Clases dinámicas por color
    $colors: (
        "burgundy": $burgundy-90,
        "sepia": $sepia-90,
        "gray": $white-20,
        "cyan": $cyan-90,
        "fire": $fire-90,
        "mustard": $mustard-90
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