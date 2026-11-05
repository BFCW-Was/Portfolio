<template>
    <div class="title-card" :data-variant="variant">
        <h5 class="title">{{ title }}</h5>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    variant: {
        type: String,
        default: 'top-left',
        validator: (v: string) => ['top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(v),
    },
});
</script>

<style scoped lang="scss">
$variants: (
    'top-left': (
        top,
        left,
    ),
    'top-right': (
        top,
        right,
    ),
    'bottom-left': (
        bottom,
        left,
    ),
    'bottom-right': (
        bottom,
        right,
    ),
);

.title-card {
    background-color: var(--ui-component);
    color: var(--ui-component-text);
    padding: 1.5rem 2.5rem;
    border-radius: 8px;
    width: fit-content;
    min-width: 200px;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    /* Borde de Esquina */
    &::after {
        content: '';
        position: absolute;
        width: 55%;
        height: 45%;
        border: 0 solid var(--ui-primary);
        pointer-events: none;
    }
}

@each $name, $pos in $variants {
    $v: nth($pos, 1);
    $h: nth($pos, 2);

    .title-card[data-variant='#{$name}'] {
        /* Degradé */
        background-image: radial-gradient(
            ellipse 100% 80% at #{$v} #{$h},
            color-mix(in oklab, var(--ui-primary) 30%, transparent) 0%,
            color-mix(in oklab, var(--ui-primary) 15%, transparent) 20%,
            color-mix(in oklab, var(--ui-primary) 5%, transparent) 40%,
            transparent 100%
        );

        &::after {
            #{$v}: 0;
            #{$h}: 0;
            border-#{$v}-width: 2px;
            border-#{$h}-width: 2px;
            border-#{$v}-#{$h}-radius: 8px;
            mask-image: radial-gradient(ellipse 100% 100% at #{$v} #{$h}, #000, transparent);
        }
    }
}

.title {
    position: relative;
    margin: 0;
}
</style>
