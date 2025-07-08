<template>
    <div class="clipboard-wrapper" @click="copyToClipboard" @mousemove="updateMousePosition">
        <slot>Copiar</slot>
        <teleport to="body">
            <div v-if="showTooltip" class="clipboard-tooltip bg-primary text-onPrimary" :style="tooltipPosition">
                ¡Copiado!
            </div>
        </teleport>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    text: {
        type: String,
        required: true,
    },
});

const mouseX = ref(0);
const mouseY = ref(0);
const showTooltip = ref(false);

const updateMousePosition = (e) => {
    mouseX.value = e.clientX;
    mouseY.value = e.clientY;
};

const copyToClipboard = async () => {
    await navigator.clipboard.writeText(props.text);
    showTooltip.value = true;
    setTimeout(() => {
        showTooltip.value = false;
    }, 1000);
};

const tooltipPosition = computed(() => ({
  top: `${mouseY.value - 30}px`,
  left: `${mouseX.value}px`,
}));
</script>

<style lang="scss" scoped>
.clipboard-wrapper {
    display: inline-block;
    cursor: pointer;
}

.clipboard-tooltip {
  position: fixed;
  transform: translateX(-50%);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.90;
  transition: opacity 0.2s ease;
}
</style>