<template>
    <div v-if="active" class="code-display" :class="{ 'code-display--fullscreen': fullscreen }">
        <!-- Barra Superior -->
        <div class="code-display__bar flex shrink-0 items-center gap-2 px-1.5">
            <div v-if="!hideZoom" class="flex items-center" role="group" aria-label="Tamaño de letra">
                <button type="button" class="code-display__btn" title="Reducir letra" aria-label="Reducir letra" :disabled="size <= MIN_SIZE" @click="zoom(-1)">
                    <UIcon name="i-lucide-zoom-out" class="size-4" />
                </button>
                <button type="button" class="code-display__btn" :title="`Restablecer a ${DEFAULT_SIZE}px`" aria-label="Restablecer tamaño de letra" @click="size = DEFAULT_SIZE">{{ size }}px</button>
                <button type="button" class="code-display__btn" title="Aumentar letra" aria-label="Aumentar letra" :disabled="size >= MAX_SIZE" @click="zoom(1)">
                    <UIcon name="i-lucide-zoom-in" class="size-4" />
                </button>
            </div>

            <span class="code-display__name min-w-0 flex-1 truncate text-xs"> <span v-if="files.length === 1 && !hideZoom" class="me-2">|</span>{{ files.length === 1 ? active.name : '' }} </span>
            <span class="code-display__lang">{{ CODE_LANGUAGES[active.language] }}</span>

            <div class="flex items-center">
                <button v-if="!hideCopy" type="button" class="code-display__btn" :title="copied ? 'Copiado' : 'Copiar código'" :aria-label="copied ? 'Copiado' : 'Copiar código'" @click="copy">
                    <UIcon :name="copied ? 'i-lucide-check' : 'i-lucide-copy'" class="size-4" />
                </button>
                <button
                    v-if="!hideFullScreen"
                    type="button"
                    class="code-display__btn"
                    :title="fullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'"
                    :aria-label="fullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'"
                    @click="fullscreen = !fullscreen"
                >
                    <UIcon :name="fullscreen ? 'i-lucide-minimize-2' : 'i-lucide-maximize-2'" class="size-4" />
                </button>
            </div>
        </div>

        <div class="flex min-h-0 flex-1 flex-col sm:flex-row">
            <!-- Selector de Archivos (solo si hay más de uno) -->
            <div
                v-if="files.length > 1"
                class="code-display__files flex shrink-0 overflow-auto border-b border-(--cd-border) sm:w-44 sm:flex-col sm:border-r sm:border-b-0"
                role="tablist"
                aria-label="Archivos"
            >
                <button
                    v-for="(file, i) in files"
                    :key="file.name + i"
                    type="button"
                    role="tab"
                    :aria-selected="i === current"
                    class="code-display__file"
                    :class="{ 'code-display__file--active': i === current }"
                    @click="index = i"
                >
                    <UIcon name="i-lucide-file-code" class="size-4 shrink-0" />
                    <span class="truncate">{{ file.name }}</span>
                </button>
            </div>

            <!-- Código -->
            <div class="code-display__panel min-w-0 flex-1 overflow-auto" role="tabpanel" :style="{ fontSize: `${size}px`, '--gutter': `${String(lines.length).length}ch` }">
                <div class="code-display__code">
                    <template v-for="(line, i) in lines" :key="i"
                        ><span class="code-display__line"
                            ><span class="code-display__no" aria-hidden="true" @click="selectLine">{{ i + 1 }}</span
                            ><span class="code-display__text">{{ line }}</span></span
                        >{{ '\n' }}</template
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Comment, Fragment, Text, isVNode, type VNode } from 'vue';
import { CODE_LANGUAGES, isCodeLanguage, type CodeFile } from '~/composables/code_languages.ts';
import CodeDisplayFile from './CodeDisplayFile.vue';

const props = defineProps({
    hideZoom: {
        type: Boolean,
        default: false,
    },
    hideFullScreen: {
        type: Boolean,
        default: false,
    },
    hideCopy: {
        type: Boolean,
        default: false,
    },
});

const slots = useSlots();

const VOID_TAGS = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);

const decode = (html: string) =>
    html
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, '&');

const attrsOf = (props: VNode['props']) =>
    Object.entries(props ?? {})
        .filter(([key]) => key !== 'key' && key !== 'ref')
        .map(([key, value]) => (value === '' || value === true ? ` ${key}` : ` ${key}="${String(value)}"`))
        .join('');

const flatten = (nodes: unknown[]): unknown[] => nodes.flatMap((n) => (isVNode(n) && n.type === Fragment && Array.isArray(n.children) ? flatten(n.children) : [n]));

// Devuelve el texto. Descarta el <pre> exterior y los elementos de dentro se vuelven a escribir
const textOf = (node: unknown, top = true): string => {
    if (typeof node === 'string') return node;
    if (Array.isArray(node)) return node.map((n) => textOf(n, top)).join('');
    if (!isVNode(node) || node.type === Comment) return '';
    if (node.type === Text) return String(node.children ?? '');
    if (node.type === Fragment) return textOf(node.children, top);
    if (typeof node.type === 'symbol' && typeof node.children === 'string') return decode(node.children.replace(/^<pre[^>]*>/, '').replace(/<\/pre>$/, ''));
    if (typeof node.type !== 'string') return '';
    const inner = textOf(node.children, false);
    if (top && node.type === 'pre') return inner;
    const tag = node.type;
    return VOID_TAGS.has(tag) ? `<${tag}${attrsOf(node.props)}>` : `<${tag}${attrsOf(node.props)}>${inner}</${tag}>`;
};

const readFiles = (): CodeFile[] => {
    const nodes = flatten(slots.default?.() ?? []);
    const fileNodes = nodes.filter((n): n is VNode => isVNode(n) && n.type === CodeDisplayFile);

    return fileNodes.map((node) => {
        const p = node.props ?? {};
        const slot = (node.children as { default?: () => unknown[] } | null)?.default;

        return {
            name: String(p.name ?? ''),
            language: isCodeLanguage(p.language) ? p.language : 'plaintext',
            code: p.code ?? textOf(slot?.() ?? []),
        };
    });
};

const tick = ref(0);
onBeforeUpdate(() => tick.value++);
const files = computed<CodeFile[]>(() => {
    void tick.value;
    return readFiles();
});

// Valores Default
const MIN_SIZE = 10;
const DEFAULT_SIZE = 14;
const MAX_SIZE = 20;
const size = ref(DEFAULT_SIZE);
const index = ref(0);
const fullscreen = ref(false);
const copied = ref(false);

const current = computed(() => Math.min(index.value, files.value.length - 1));
const active = computed(() => files.value[current.value]);
const lines = computed(() => (active.value ? toLines(active.value.code) : []));
const zoom = (step: number) => (size.value = Math.min(MAX_SIZE, Math.max(MIN_SIZE, size.value + step)));

// Elimina lineas en blanco al inicio y final
const toLines = (code: string): string[] => {
    const rows = code.replace(/\r\n?/g, '\n').split('\n');
    while (rows.length && !rows[0]!.trim()) rows.shift();
    while (rows.length && !rows[rows.length - 1]!.trim()) rows.pop();

    const indent = Math.min(...rows.filter((r) => r.trim()).map((r) => r.match(/^[ \t]*/)![0].length));
    return Number.isFinite(indent) && indent > 0 ? rows.map((r) => r.slice(indent)) : rows;
};

// Selecciona el texto al hacer click en la linea
const selectLine = (event: MouseEvent) => {
    const text = (event.currentTarget as HTMLElement).nextElementSibling;
    const selection = window.getSelection();
    if (!text || !selection) return;

    const range = document.createRange();
    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);
};

const copy = async () => {
    const text = lines.value.join('\n');
    try {
        await navigator.clipboard.writeText(text);
    } catch {
        const area = document.createElement('textarea');
        area.value = text;
        area.style.cssText = 'position:fixed;opacity:0';
        document.body.append(area);
        area.select();
        document.execCommand('copy');
        area.remove();
    }
    copied.value = true;
    setTimeout(() => (copied.value = false), 1500);
};

// Gestión de Pantalla completa
const onKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') fullscreen.value = false;
};

const lockPage = (on: boolean) => {
    document.documentElement.style.overflow = on ? 'hidden' : '';
    if (on) {
        window.addEventListener('keydown', onKeydown);
    } else {
        window.removeEventListener('keydown', onKeydown);
    }
};

watch(fullscreen, lockPage);
watch(
    () => props.hideFullScreen,
    (hidden) => hidden && (fullscreen.value = false)
);
onBeforeUnmount(() => lockPage(false));
</script>

<style scoped lang="scss">
.code-display {
    // Light Theme
    --cd-background-color: color-mix(in oklab, var(--color-bfcw-white-90) 65%, gray);
    --cd-muted: var(--color-bfcw-cyan-100);
    --cd-font-color: var(--color-bfcw-black-100);
    --cd-icon: color-mix(in oklab, var(--cd-font-color) 80%, var(--cd-background-color));
    --cd-bar: color-mix(in oklab, var(--cd-background-color) 80%, white);
    --cd-border: color-mix(in oklab, var(--cd-background-color) 70%, black);
    --cd-hover: color-mix(in oklab, var(--cd-background-color) 80%, white);
    --cd-accent: var(--color-bfcw-cyan-30);
    --cd-accent-font-color: var(--color-bfcw-black-90);

    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 2px solid var(--cd-border);
    border-radius: 4px;
    background: var(--cd-background-color);
    color: var(--cd-font-color);
    font-family: var(--font-code);

    &--fullscreen {
        position: fixed;
        inset: 0;
        z-index: 100;
        border: 0;
        border-radius: 0;
    }

    &__bar {
        height: 2.25rem;
        border-bottom: 1px solid var(--cd-border);
        background: var(--cd-bar);
    }

    &__name {
        color: var(--cd-muted);
    }

    &__lang {
        padding: 0.125rem 0.5rem;
        border-radius: 2px;
        background: var(--cd-accent);
        color: var(--cd-accent-font-color);
        font-size: 0.6875rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        white-space: nowrap;
    }

    &__btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 1.5rem;
        height: 1.5rem;
        padding-inline: 0.25rem;
        border-radius: 2px;
        color: var(--cd-icon);
        font-size: 0.6875rem;
        cursor: pointer;
        transition:
            color 150ms,
            background-color 150ms;

        &:hover:not(:disabled) {
            background: var(--cd-hover);
            color: var(--cd-font-color);
        }

        &:focus-visible {
            outline: 2px solid var(--cd-accent);
            outline-offset: -2px;
        }

        &:disabled {
            opacity: 0.35;
            cursor: not-allowed;
        }
    }

    &__files {
        background: var(--cd-bar);
    }

    &__file {
        display: flex;
        flex-shrink: 0;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 0.75rem;
        color: var(--cd-muted);
        font-size: 0.75rem;
        text-align: left;
        white-space: nowrap;
        cursor: pointer;
        transition:
            color 150ms,
            background-color 150ms;

        &:hover {
            background: var(--cd-hover);
            color: var(--cd-font-color);
        }

        &--active {
            background: var(--cd-background-color);
            box-shadow: inset 2px 0 var(--cd-accent);
            color: var(--cd-font-color);
        }
    }

    &__panel {
        padding-block: 0.5rem;
        line-height: 1.6;
        tab-size: 4;
    }

    &__code {
        display: block;
        width: max-content;
        min-width: 100%;
        white-space: pre;
    }

    &__line {
        display: inline-block;
        min-width: 100%;

        &:hover,
        &:hover .code-display__no {
            background: var(--cd-hover);
        }
    }

    &__no {
        position: sticky;
        left: 0;
        display: inline-block;
        box-sizing: content-box;
        min-width: var(--gutter);
        padding-inline: 0.75rem 1rem;
        background: var(--cd-background-color);
        color: var(--cd-muted);
        font-variant-numeric: tabular-nums;
        text-align: right;
        cursor: pointer;
        user-select: none;
    }
}

// Dark Theme
.dark .code-display {
    --cd-background-color: color-mix(in oklab, var(--color-bfcw-black-100) 5%, black);
    --cd-font-color: var(--color-bfcw-white-90);
    --cd-accent: var(--color-bfcw-cyan-70);
    --cd-muted: var(--color-bfcw-cyan-70);
    --cd-border: color-mix(in oklab, var(--cd-background-color) 70%, white);
}

// Sepia Theme
.theme-sepia .code-display {
    --cd-background-color: color-mix(in oklab, var(--color-bfcw-sepia-100) 25%, black);
    --cd-font-color: var(--color-bfcw-sepia-20);
    --cd-muted: var(--color-bfcw-sepia-50);
    --cd-accent: var(--color-bfcw-sepia-30);
    --cd-accent-font-color: var(--color-bfcw-sepia-100);
    --cd-border: color-mix(in oklab, var(--cd-background-color) 70%, white);
}
</style>
