<template>
    <ul ref="root" class="stats-strip">
        <li v-for="(item, index) in items" :key="item.label">
            <strong class="ornamental-ghost">{{ shown[index] }}</strong>
            <span>{{ item.label }}</span>
        </li>
    </ul>
</template>

<script setup lang="ts">
export interface StatsStripItem {
    value: string;
    label: string;
}

const props = defineProps({
    items: {
        type: Array as PropType<StatsStripItem[]>,
        required: true,
    },
    duration: {
        type: Number,
        default: 1400,
    },
});

const root = useTemplateRef<HTMLElement>('root');
const shown = ref<string[]>(props.items.map((item) => item.value));

// Separa prefijo, número y sufijo: "5+" → { '', 5, '+' }
function parse(value: string) {
    const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return null;
    const digits = match[2] ?? '0';
    return { prefix: match[1] ?? '', number: parseFloat(digits), decimals: (digits.split('.')[1] ?? '').length, suffix: match[3] ?? '' };
}

function render(progress: number) {
    shown.value = props.items.map((item) => {
        const parsed = parse(item.value);
        return parsed ? `${parsed.prefix}${(parsed.number * progress).toFixed(parsed.decimals)}${parsed.suffix}` : item.value;
    });
}

let observer: IntersectionObserver | undefined;
let frame = 0;

onMounted(() => {
    render(0);
    if (!root.value) return;
    observer = new IntersectionObserver(
        ([entry]) => {
            if (!entry?.isIntersecting) return;
            observer?.disconnect();
            const start = performance.now();
            const tick = (now: number) => {
                const progress = Math.min((now - start) / props.duration, 1);
                render(1 - Math.pow(1 - progress, 3));
                if (progress < 1) frame = requestAnimationFrame(tick);
            };
            frame = requestAnimationFrame(tick);
        },
        { threshold: 0.4 }
    );
    observer.observe(root.value);
});

onBeforeUnmount(() => {
    observer?.disconnect();
    cancelAnimationFrame(frame);
});
</script>

<style lang="scss" scoped>
.stats-strip {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
    gap: 1.5rem 1rem;
    margin: 0;
    padding: 1.5rem 0;
    border-block: 1px solid color-mix(in srgb, var(--ui-secondary) 45%, transparent);
    list-style: none;
    text-align: center;
    width: 100%;

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;

        strong {
            font-size: clamp(2.25rem, 5dvw, 3.75rem);
            font-variant-numeric: tabular-nums;
            line-height: 1;
        }

        span {
            font-size: 0.75rem;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: var(--ui-text-muted);
        }
    }
}
</style>
