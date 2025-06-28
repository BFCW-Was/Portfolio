import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';
// Font-Awesome Icons:
import '@fortawesome/fontawesome-free/css/all.css';
import '@mdi/font/css/materialdesignicons.css';
import { aliases, fa } from 'vuetify/iconsets/fa4';
import { mdi } from 'vuetify/iconsets/mdi';

export default defineNuxtPlugin((nuxtApp) => {
    const personalizedColors = {
        // Black
        black100: '#090508',
        black90: '#0E040A',
        black70: '#13030B',
        black50: '#18020C',
        black30: '#211C1E',
        black20: '#2B2427',
        // White
        white100: '#FEFEFE',
        white90: '#F2F2F2',
        white70: '#E1E1E1',
        white50: '#D0D0D0',
        white30: '#AEADAD',
        white20: '#8C8A8B',
        // Sepia
        sepia100: '#251E12',
        sepia90: '#312517',
        sepia70: '#4E3C27',
        sepia50: '#81694A',
        sepia30: '#B4976D',
        sepia20: '#C7B191',
        // Cyan
        cyan100: '#0D5E5C',
        cyan90: '#138583',
        cyan70: '#30ABA5',
        cyan50: '#46D5B3',
        cyan30: '#77E8CD',
        cyan20: '#9DF1DD',
        // Fire
        fire100: '#762D23',
        fire90: '#9D3C2F',
        fire70: '#A45044',
        fire50: '#B06D63',
        fire30: '#BC8A82',
        fire20: '#D0B3AE',
        // Mustard
        mustard100: '#EBBC00',
        mustard90: '#E8C70A',
        mustard70: '#E6CF01',
        mustard50: '#EFDD3E',
        mustard30: '#F4E775',
        mustard20: '#E2DBAB',
        // Burgundy
        burgundy100: '#27060F',
        burgundy90: '#42132A',
        burgundy70: '#53172F',
        burgundy50: '#7C375B',
        burgundy30: '#D792AC',
        burgundy20: '#F7C9CC',
        // Indigo
        indigo100: '#3A1B76',
        indigo90: '#472688',
        indigo70: '#53309A',
        indigo50: '#6040A0',
        indigo30: '#6B50A1',
        indigo20: '#846FB2',
    };

    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: 'dark',
            themes: {
                // ##### Light #####
                light: {
                    dark: false,
                    colors: {
                        // Principales
                        background: personalizedColors.white70,
                        surface: personalizedColors.white90,
                        primary: personalizedColors.cyan70,
                        secondary: personalizedColors.cyan90,
                        // Acciones
                        success: personalizedColors.mustard70,
                        info: personalizedColors.cyan50,
                        warning: personalizedColors.mustard90,
                        error: personalizedColors.fire100,
                        // Texto en Acciones
                        onPrimary: personalizedColors.black90,
                        onSecondary: personalizedColors.black70,
                        onBackground: personalizedColors.black90,
                        onSurface: personalizedColors.black90,
                        onError: personalizedColors.black100,
                    },
                },
                // ##### Dark #####
                dark: {
                    dark: true,
                    colors: {
                        // Principales
                        background: personalizedColors.black70,
                        surface: personalizedColors.black90,
                        primary: personalizedColors.cyan70,
                        secondary: personalizedColors.cyan90,
                        // Acciones
                        success: personalizedColors.mustard70,
                        info: personalizedColors.cyan50,
                        warning: personalizedColors.mustard90,
                        error: personalizedColors.fire100,
                        // Texto en Acciones
                        onPrimary: personalizedColors.white90,
                        onSecondary: personalizedColors.white70,
                        onBackground: personalizedColors.white90,
                        onSurface: personalizedColors.white90,
                        onError: personalizedColors.white100,
                    },
                },
                // ##### Sepia #####
                sepia: {
                    dark: true,
                    colors: {
                        // Principales
                        background: personalizedColors.sepia100,
                        surface: personalizedColors.sepia90,
                        primary: personalizedColors.sepia30,
                        secondary: personalizedColors.sepia50,
                        // Acciones
                        success: personalizedColors.mustard70,
                        info: personalizedColors.mustard100,
                        warning: personalizedColors.mustard90,
                        error: personalizedColors.fire70,
                        // Texto en Acciones
                        onPrimary: personalizedColors.white90,
                        onSecondary: personalizedColors.white70,
                        onBackground: personalizedColors.white90,
                        onSurface: personalizedColors.white90,
                        onError: personalizedColors.white100,
                    },
                }
            }
        },
        icons: {
            defaultSet: 'fa',
            aliases,
            sets: {
                fa, mdi,
            },
        },
    });
    nuxtApp.vueApp.use(vuetify);
});