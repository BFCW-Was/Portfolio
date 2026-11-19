<template>
    <div v-if="isVisible" class="splash-screen" role="status" aria-live="polite">
        <div class="splash-frame">
            <span class="corner corner--tl" aria-hidden="true" />
            <span class="corner corner--tr" aria-hidden="true" />
            <span class="corner corner--bl" aria-hidden="true" />
            <span class="corner corner--br" aria-hidden="true" />
            <button v-if="allowSkip" type="button" class="splash-skip" @click="finishSplash(true)">
                {{ skipLabel }}
            </button>
            <div class="splash-center">
                <p class="splash-eyebrow">PORTFOLIO</p>
                <h1 class="main-title">Bastián Contreras Wasilkowski</h1>
                <div class="subtitle-wrapper">
                    <Transition name="subtitle-swap" mode="out-in">
                        <p :key="currentIndex" class="subtitle">
                            {{ subtitles[currentIndex] }}
                        </p>
                    </Transition>
                </div>
            </div>
            <div class="splash-progress" aria-hidden="true">
                <div class="splash-progress-fill" :style="{ animationDuration: `${totalDurationMs}ms` }" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    subtitles: {
        type: Array as PropType<string[]>,
        default: () => ['Software Architect', 'IT Consultant', 'Gaming Enthusiast', 'Problem Solver'],
    },
    intervalMs: {
        type: Number,
        default: 750,
    },
    storageKey: {
        type: String,
        default: 'seenSplash',
    },
    allowSkip: {
        type: Boolean,
        default: true,
    },
    skipLabel: {
        type: String,
        default: 'Skip',
    },
});

const emit = defineEmits({
    finished: () => true,
});

const isVisible = ref(false);
const currentIndex = ref(0);

const totalDurationMs = computed(() => {
    const count = Math.max(props.subtitles.length, 1);
    return count * props.intervalMs;
});

let splashInterval: ReturnType<typeof setInterval> | undefined;
let splashTimeout: ReturnType<typeof setTimeout> | undefined;

const finishSplash = (markAsSeen = true) => {
    clearInterval(splashInterval);
    clearTimeout(splashTimeout);

    if (markAsSeen && import.meta.client) {
        sessionStorage.setItem(props.storageKey, 'true');
    }

    isVisible.value = false;
    emit('finished');
};

onMounted(() => {
    if (sessionStorage.getItem(props.storageKey) === 'true') {
        emit('finished');
        return;
    }

    isVisible.value = true;

    splashInterval = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % props.subtitles.length;
    }, props.intervalMs);

    splashTimeout = setTimeout(() => {
        finishSplash(true);
    }, totalDurationMs.value);
});

onBeforeUnmount(() => {
    clearInterval(splashInterval);
    clearTimeout(splashTimeout);
});
</script>

<style scoped lang="scss">
.splash-screen {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: grid;
    place-items: center;
    padding: clamp(0.75rem, 2dvw, 1.25rem);
    background-color: var(--ui-bg);
    color: var(--ui-text);
    background-image:
        radial-gradient(circle at 50% 40%, color-mix(in srgb, var(--ui-primary) 14%, transparent), transparent 62%),
        linear-gradient(to right, color-mix(in srgb, var(--ui-text) 6%, transparent) 1px, transparent 1px),
        linear-gradient(to bottom, color-mix(in srgb, var(--ui-text) 6%, transparent) 1px, transparent 1px);
    background-size:
        100% 100%,
        32px 32px,
        32px 32px;

    .splash-frame {
        position: relative;
        width: 64dvw;
        min-height: 64dvh;
        border: 1px solid color-mix(in srgb, var(--ui-text) 22%, transparent);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: clamp(1.25rem, 3dvw, 2.25rem);
        box-sizing: border-box;
        background-color: color-mix(in srgb, var(--ui-bg-elevated) 88%, transparent);

        .corner {
            position: absolute;
            width: 11px;
            height: 11px;
            border-color: var(--ui-primary);
            pointer-events: none;

            &--tl {
                top: -1px;
                left: -1px;
                border-top: 2px solid;
                border-left: 2px solid;
            }

            &--tr {
                top: -1px;
                right: -1px;
                border-top: 2px solid;
                border-right: 2px solid;
            }

            &--bl {
                bottom: -1px;
                left: -1px;
                border-bottom: 2px solid;
                border-left: 2px solid;
            }

            &--br {
                bottom: -1px;
                right: -1px;
                border-bottom: 2px solid;
                border-right: 2px solid;
            }
        }

        .splash-skip {
            align-self: flex-end;
            font-size: 0.7rem;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            padding: 0.25rem 0.6rem;
            border: 1px solid color-mix(in srgb, var(--ui-text) 25%, transparent);
            background: transparent;
            color: inherit;
            cursor: pointer;
            opacity: 0.8;
            transition:
                opacity 0.15s ease,
                border-color 0.15s ease,
                color 0.15s ease;

            &:hover {
                opacity: 1;
                border-color: var(--ui-primary);
                color: var(--ui-primary);
            }
        }

        .splash-center {
            margin: auto;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;

            .splash-eyebrow {
                margin: 0;
                font-size: 0.7rem;
                letter-spacing: 0.25em;
                text-transform: uppercase;
                color: var(--ui-primary);
            }

            .main-title {
                margin: 0;
                font-size: clamp(2rem, 5dvw, 4rem);
                font-weight: 700;
                line-height: 1.08;
                letter-spacing: -0.02em;
                font-family: var(--font-titles);
            }

            .subtitle-wrapper {
                min-height: 1.75rem;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;

                .subtitle {
                    margin: 0;
                    font-size: clamp(1rem, 2.2vw, 1.25rem);
                    font-weight: 500;
                    opacity: 0.88;
                }

                .subtitle-swap-enter-active,
                .subtitle-swap-leave-active {
                    transition:
                        opacity 0.18s ease,
                        transform 0.18s ease;
                }

                .subtitle-swap-enter-from {
                    opacity: 0;
                    transform: translateY(6px);
                }

                .subtitle-swap-leave-to {
                    opacity: 0;
                    transform: translateY(-6px);
                }
            }
        }

        .splash-progress {
            width: min(220px, 75%);
            height: 2px;
            margin: 0 auto;
            background: color-mix(in srgb, var(--ui-text) 15%, transparent);
            overflow: hidden;

            .splash-progress-fill {
                width: 100%;
                height: 100%;
                background: var(--ui-primary);
                transform-origin: left center;
                animation: splash-fill linear forwards;
            }
        }
    }
}

@keyframes splash-fill {
    from {
        transform: scaleX(0);
    }
    to {
        transform: scaleX(1);
    }
}
</style>
