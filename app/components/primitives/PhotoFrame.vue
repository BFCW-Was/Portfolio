<template>
    <figure class="photo-card" :data-badge="badge" :data-signage="signagePosition" :data-bordered="bordered">
        <div class="photo-frame" :style="{ aspectRatio: ratio }">
            <img v-if="image" :src="image" :alt="alt" class="photo-image" loading="lazy" decoding="async" />
        </div>
        <span v-if="year" class="photo-badge">
            {{ year }}
        </span>
        <PrimitivesSignage v-if="signage" class="photo-signage" :variant="signage.variant" :text="signage.text" />
    </figure>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue';

type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface SignageItem {
    variant: string;
    text: string;
    position?: Position;
}

const props = defineProps({
    image: {
        type: String,
        default: '',
    },
    alt: {
        type: String,
        default: '',
    },
    year: {
        type: String,
        default: '',
    },
    badge: {
        type: String as PropType<Position>,
        default: 'bottom-right',
        validator: (v: string) => ['top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(v),
    },
    signage: {
        type: Object as PropType<SignageItem>,
        default: undefined,
    },
    bordered: {
        type: Boolean,
        default: true,
    },
    ratio: {
        type: String,
        default: '2 / 3',
    },
});

const oppositePositions: Record<Position, Position> = {
    'top-left': 'bottom-right',
    'top-right': 'bottom-left',
    'bottom-left': 'top-right',
    'bottom-right': 'top-left',
};

const signagePosition = computed<Position | undefined>(() => {
    if (!props.signage) return undefined;

    const position = props.signage.position ?? 'top-right';

    if (position === props.badge) {
        return oppositePositions[position];
    }

    return position;
});
</script>

<style scoped lang="scss">
.photo-card {
    position: relative;
    width: 100%;
    min-width: 150px;
    margin: 0;

    .photo-frame {
        position: relative;
        overflow: hidden;
        border: 2px solid var(--ui-component-text);
        border-radius: 0.25rem;
        background: var(--ui-component-border);

        .photo-image {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .photo-badge {
        position: absolute;
        padding: 0.25rem 0.75rem;
        border-radius: var(--ui-radius-lg);
        background: var(--ui-primary);
        color: var(--color-bfcw-white-100);
        font-size: 0.8rem;
        font-weight: 500;
        line-height: 1.2;
    }

    // Positioning of Badge & Signage
    .photo-signage {
        position: absolute;
    }

    &[data-bordered='false'] .photo-frame {
        border: 0;
        border-radius: 0;
    }

    &[data-badge='top-left'] .photo-badge,
    &[data-signage='top-left'] .photo-signage {
        top: 0;
        left: 0;
        translate: -1rem -50%;
    }

    &[data-badge='top-right'] .photo-badge,
    &[data-signage='top-right'] .photo-signage {
        top: 0;
        right: 0;
        translate: 1rem -50%;
    }

    &[data-badge='bottom-left'] .photo-badge,
    &[data-signage='bottom-left'] .photo-signage {
        bottom: 0;
        left: 0;
        translate: -1rem 50%;
    }

    &[data-badge='bottom-right'] .photo-badge,
    &[data-signage='bottom-right'] .photo-signage {
        right: 0;
        bottom: 0;
        translate: 1rem 50%;
    }
}
</style>
