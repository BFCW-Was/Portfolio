<template>
    <figure class="photo-card" :data-badge="badge" :data-bordered="bordered">
        <div class="photo-frame" :style="{ aspectRatio: ratio }">
            <img v-if="image" :src="image" :alt="alt" class="photo-image" loading="lazy" decoding="async" />
        </div>
        <span v-if="year" class="photo-badge">{{ year }}</span>
    </figure>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
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
        type: String as PropType<'top-left' | 'bottom-right'>,
        default: 'bottom-right',
        validator: (v: string) => ['top-left', 'bottom-right'].includes(v),
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
</script>

<style scoped lang="scss">
.photo-card {
    position: relative;
    width: 100%;
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

    &[data-bordered='false'] .photo-frame {
        border: 0;
        border-radius: 0;
    }

    &[data-badge='bottom-right'] .photo-badge {
        right: 0;
        bottom: 0;
        translate: 1rem 50%;
    }

    &[data-badge='top-left'] .photo-badge {
        top: 0;
        left: 0;
        translate: -1rem -50%;
    }
}
</style>
