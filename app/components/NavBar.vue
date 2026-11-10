<template>
    <!-- Escritorio / Tablet -->
    <nav aria-label="Navegación Principal" class="nav-box nav-floating hidden h-12 items-stretch px-1.5 min-[36rem]:flex">
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
    </nav>

    <!-- Celular -->
    <div class="min-[36rem]:hidden" @keydown.esc="open = false">
        <button v-if="open" type="button" aria-label="Cerrar Menú" class="fixed inset-0 z-40 cursor-default" @click="open = false" />

        <div class="nav-floating flex w-44 flex-col gap-2 min-[26rem]:w-[min(20rem,calc(100dvw-2rem))]">
            <Transition name="pop">
                <div v-if="open" id="navbar-menu" class="nav-box grid max-h-[60dvh] origin-bottom grid-cols-1 gap-1 overflow-y-auto p-1.5 min-[26rem]:grid-cols-2">
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

            <nav aria-label="Navegación Principal" class="nav-box flex h-12 items-stretch self-center px-1.5">
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
    { to: '/blog', icon: 'i-lucide-newspaper', label: 'Blogs' },
    { to: '/projects', icon: 'i-lucide-folder-open', label: 'Proyectos' },
    { to: '/contact', icon: 'i-lucide-id-card', label: 'Contacto' },
    // { to: '/404', icon: 'i-lucide-octagon-alert', label: 'Prueba 404' },
    // { to: '/testing', icon: 'i-lucide-test-tube-diagonal', label: 'Pruebas' },
    { separator: true },
    { to: '/games', icon: 'i-lucide-gamepad-2', label: 'Juegos' },
] as const;

const isActive = (to: string) => (to === '/' ? route.path === '/' : route.path.startsWith(to));

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
    position: fixed;
    left: 50%;
    z-index: 50;
    transform: translateX(-50%);
    bottom: calc(var(--footer-height) + 2.5rem);
}

.nav-box {
    border: 2px solid var(--ui-component-border);
    border-radius: var(--ui-radius);
    background: var(--ui-component);
    box-shadow: 0 0 12px -3px color-mix(in oklab, var(--ui-primary) 60%, transparent);
}

.nav-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;

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

.nav-icon {
    position: relative;
    width: 1.25rem;
    height: 1.25rem;
    color: var(--ui-component-text);
    transition: color 150ms;
}

.nav-home {
    --home-from: var(--ui-error);

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: var(--ui-radius-circular);
    background: linear-gradient(to bottom, var(--home-from), var(--ui-component));
}

.nav-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;

    &::before {
        content: '';
        width: 2px;
        height: 1.5rem;
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
            top: -2px;
            left: 50%;
            width: 2rem;
            height: 2px;
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
            top: -2px;
            left: 50%;
            width: 2rem;
            height: 2px;
            border-radius: 0 0 var(--ui-radius-circular) var(--ui-radius-circular);
            background: var(--ui-warning);
            transform: translateX(-50%);
        }
    }
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
