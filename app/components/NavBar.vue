<template>
    <!-- Escritorio / Tablet -->
    <nav aria-label="Navegación Principal" class="nav-box nav-floating hidden items-stretch px-1.5 min-[800px]:flex" :class="isVertical ? 'nav-vertical' : 'nav-horizontal'">
        <template v-for="(item, i) in items" :key="i">
            <div v-if="'separator' in item" class="nav-divider" aria-hidden="true" />
            <NuxtLink
                v-else
                :to="item.to"
                :aria-label="item.label"
                :aria-current="isActive(item.to) ? 'page' : undefined"
                :title="item.label"
                class="nav-item"
                :class="{ 'nav-beam': !('home' in item) }"
            >
                <span v-if="'home' in item" class="nav-home">
                    <UIcon :name="item.icon" class="nav-icon" />
                </span>
                <UIcon v-else :name="item.icon" class="nav-icon" />
            </NuxtLink>
        </template>
        <div class="nav-divider" aria-hidden="true" />
        <button
            type="button"
            class="nav-config"
            :aria-label="isVertical ? 'Cambiar a navegación horizontal' : 'Cambiar a navegación vertical'"
            :title="isVertical ? 'Cambiar a horizontal' : 'Cambiar a vertical'"
            @click="isVertical = !isVertical"
        >
            <UIcon :name="isVertical ? 'i-lucide-panel-bottom' : 'i-lucide-panel-right'" class="nav-config-icon" />
        </button>
    </nav>

    <!-- Celular -->
    <div class="min-[800px]:hidden" @keydown.esc="open = false">
        <button v-if="open" type="button" aria-label="Cerrar Menú" class="fixed inset-0 z-40 cursor-default" @click="open = false" />

        <div class="nav-floating nav-horizontal flex w-44 flex-col gap-2 min-[500px]:w-[min(20rem,calc(100dvw-2rem))]">
            <Transition name="pop">
                <div v-if="open" id="navbar-menu" class="nav-box grid max-h-[60dvh] origin-bottom grid-cols-1 gap-1 overflow-y-auto p-1.5 min-[500px]:grid-cols-2">
                    <NuxtLink
                        v-for="link in links"
                        :key="link.to"
                        :to="link.to"
                        :aria-current="isActive(link.to) ? 'page' : undefined"
                        class="nav-beam group relative flex h-11 items-center gap-3 px-3 [--beam-inset:5%]"
                    >
                        <UIcon :name="link.icon" class="nav-icon" />
                        <span class="relative text-sm leading-none text-bfcw-white-30 group-aria-[current=page]:text-bfcw-cyan-30">{{ link.label }}</span>
                    </NuxtLink>
                </div>
            </Transition>

            <nav aria-label="Navegación Principal" class="nav-box flex items-stretch self-center px-1.5">
                <NuxtLink to="/" aria-label="Inicio" :aria-current="isActive('/') ? 'page' : undefined" class="nav-item">
                    <span class="nav-home">
                        <UIcon name="i-fa6-solid-house-chimney" class="nav-icon" />
                    </span>
                </NuxtLink>
                <div class="nav-divider" aria-hidden="true" />
                <button type="button" :aria-label="open ? 'Cerrar Menú' : 'Abrir Menú'" :aria-expanded="open" aria-controls="navbar-menu" class="nav-item cursor-pointer" @click="open = !open">
                    <UIcon :name="open ? 'i-lucide-x' : 'i-lucide-layout-grid'" class="nav-icon" />
                </button>
            </nav>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();

const items = [
    { to: '/', icon: 'i-fa6-solid-house-chimney', label: 'Inicio', home: true },
    { to: '/about', icon: 'i-lucide-book-open-text', label: 'Información' },
    { to: '/experience', icon: 'i-lucide-briefcase', label: 'Experiencia' },
    { to: '/projects', icon: 'i-lucide-folder-open', label: 'Proyectos' },
    { to: '/contact', icon: 'i-lucide-id-card', label: 'Contacto' },
    // { separator: true },
    // { to: '/under_construction', icon: 'i-lucide-construction', label: 'Prueba 501' },
    // { to: '/not_found', icon: 'i-lucide-octagon-alert', label: 'Prueba 404' },
    // { to: '/testing', icon: 'i-lucide-test-tube-diagonal', label: 'Pruebas' },
    { separator: true },
    { to: '/blogs', icon: 'i-lucide-newspaper', label: 'Blogs' },
    { to: '/games', icon: 'i-lucide-gamepad-2', label: 'Juegos' },
] as const;

const isActive = (to: string) => (to === '/' ? route.path === '/' : route.path.startsWith(to));
const isVertical = ref(false);

// Móvil
const open = ref(false);
const links = items.filter((i): i is Extract<(typeof items)[number], { to: string }> => 'to' in i);

watch(
    () => route.path,
    () => (open.value = false)
);
</script>

<style scoped lang="scss">
.nav-floating {
    --nav-icon-size: 1.4rem;
    --nav-padding: 0.35rem;
    --nav-home-size: calc(var(--nav-icon-size) * 7 / 4);
    --nav-size: calc(var(--nav-home-size) + var(--nav-padding) * 1.5);
    --nav-divider-length: calc(var(--nav-size) / 1.5);
    --nav-indicator-length: calc(var(--nav-size) * 0.75);
    --nav-indicator-thickness: 2px;
    --nav-border-width: 2px;

    position: fixed;
    z-index: 50;

    transition:
        left 250ms ease,
        right 250ms ease,
        top 250ms ease,
        bottom 250ms ease,
        transform 250ms ease;

    .nav-item {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--nav-size);

        &[aria-expanded='true'] .nav-icon {
            color: var(--ui-primary);
        }

        &[aria-current='page'] .nav-home {
            --home-from: var(--ui-primary-dark);
        }

        &:not(.nav-beam):hover {
            .nav-home {
                --home-from: var(--ui-warning);
            }
        }
    }

    .nav-divider {
        display: flex;
        align-items: center;
        justify-content: center;

        &::before {
            content: '';
            border-radius: var(--ui-radius);
            background: linear-gradient(to bottom, var(--ui-error), transparent);
        }
    }

    .nav-beam {
        &[aria-current='page'] {
            .nav-icon {
                color: var(--ui-primary);
            }

            &::before {
                content: '';
                position: absolute;
                inset: 0;
                background: linear-gradient(to bottom, color-mix(in oklab, var(--ui-primary) 50%, transparent), transparent);
                clip-path: polygon(var(--beam-inset, 20%) 0, calc(100% - var(--beam-inset, 20%)) 0, 100% 100%, 0 100%);
            }

            &::after {
                content: '';
                position: absolute;
                top: calc(var(--nav-indicator-thickness) * -1);
                left: 50%;
                width: var(--nav-indicator-length);
                height: var(--nav-indicator-thickness);
                border-radius: 0 0 var(--ui-radius-circular) var(--ui-radius-circular);
                background: var(--ui-primary);
                transform: translateX(-50%);
            }
        }

        &:hover {
            .nav-icon {
                color: var(--ui-warning);
            }

            &::before {
                content: '';
                position: absolute;
                inset: 0;
                background: linear-gradient(to bottom, color-mix(in oklab, var(--ui-warning) 40%, transparent), transparent);
                clip-path: polygon(var(--beam-inset, 20%) 0, calc(100% - var(--beam-inset, 20%)) 0, 100% 100%, 0 100%);
            }

            &::after {
                content: '';
                position: absolute;
                top: calc(var(--nav-indicator-thickness) * -1);
                left: 50%;
                width: var(--nav-indicator-length);
                height: var(--nav-indicator-thickness);
                border-radius: 0 0 var(--ui-radius-circular) var(--ui-radius-circular);
                background: var(--ui-warning);
                transform: translateX(-50%);
            }
        }
    }
}

// Orientación Horizontal
.nav-horizontal {
    &.nav-floating {
        left: 50%;
        bottom: calc(var(--footer-height) + 50px);
        transform: translateX(-50%);
    }

    .nav-item {
        height: auto;
    }

    .nav-divider {
        width: var(--nav-divider-length);

        &::before {
            width: var(--nav-indicator-thickness);
            height: var(--nav-divider-length);
        }
    }
}

// Orientación Vertical
.nav-vertical {
    &.nav-floating {
        left: auto;
        bottom: auto;
        top: 50%;
        right: calc(var(--footer-height) + 50px);
        transform: translateY(-50%);
        flex-direction: column;
        height: auto;
        align-items: stretch;
        padding-block: 0;
    }

    .nav-item {
        width: var(--nav-size);
        height: var(--nav-size);
    }

    .nav-divider {
        width: 100%;
        height: var(--nav-divider-length);

        &::before {
            width: var(--nav-divider-length);
            height: var(--nav-indicator-thickness);
            background: linear-gradient(to right, var(--ui-error), transparent);
        }
    }

    .nav-beam {
        &[aria-current='page'] {
            &::before {
                background: linear-gradient(to right, color-mix(in oklab, var(--ui-primary) 50%, transparent), transparent);
            }
        }
        &:hover {
            &::before {
                background: linear-gradient(to right, color-mix(in oklab, var(--ui-warning) 50%, transparent), transparent);
            }
        }

        &[aria-current='page'],
        &:hover {
            &::before {
                clip-path: polygon(0 var(--beam-inset, 20%), 0 calc(100% - var(--beam-inset, 20%)), 100% 100%, 100% 0);
            }

            &::after {
                top: 50%;
                right: auto;
                left: calc(var(--nav-indicator-thickness) * -1);
                width: var(--nav-indicator-thickness);
                height: var(--nav-indicator-length);
                transform: translateY(-50%);
            }
        }
    }

    .nav-config {
        width: var(--nav-size);
        height: var(--nav-size);
    }
}

// Elementos compartidos
.nav-config {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--nav-size);
    min-width: var(--nav-size);
    border: 0;
    border-radius: var(--ui-radius);
    background: transparent;
    cursor: pointer;
    transition:
        background 150ms ease,
        color 150ms ease;

    &:hover {
        background: color-mix(in oklab, var(--ui-secondary-elevated) 12%, transparent);

        .nav-config-icon {
            color: var(--ui-secondary-elevated);
        }
    }

    &:active {
        background: color-mix(in oklab, var(--ui-secondary-elevated) 20%, transparent);
    }
}

.nav-box {
    border: var(--nav-border-width) solid var(--ui-component-border);
    border-radius: var(--ui-radius);
    background: var(--ui-component);
    box-shadow: 0 0 12px -3px color-mix(in oklab, var(--ui-primary) 60%, transparent);
    padding-block: var(--nav-padding);
}

.nav-config-icon {
    width: calc(var(--nav-icon-size) * 0.92);
    height: calc(var(--nav-icon-size) * 0.92);
    color: var(--ui-component-text);
    opacity: 0.65;
    transition: color 150ms ease;
}

.nav-icon {
    position: relative;
    width: var(--nav-icon-size);
    height: var(--nav-icon-size);
    color: var(--ui-component-text);
    transition: color 150ms;
}

.nav-home {
    --home-from: var(--ui-error);

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--nav-home-size);
    height: var(--nav-home-size);
    border-radius: var(--ui-radius-circular);
    background: linear-gradient(to bottom, var(--home-from), var(--ui-component));
}

// Transitions
.pop-enter-active {
    transition:
        opacity 200ms ease-out,
        transform 200ms ease-out;
}

.pop-leave-active {
    transition:
        opacity 150ms ease-in,
        transform 150ms ease-in;
}

.pop-enter-from,
.pop-leave-to {
    opacity: 0;
    transform: translateY(0.5rem) scale(0.95);
}
</style>
