// plugins/vuetify.ts
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: {
            background: '#FFFFFF',
            surface: '#F2F2F2',
            primary: '#1976D2',
            secondary: '#424242',
            customColor1: '#9C27B0',
          },
        },
        dark: {
          dark: true,
          colors: {
            background: '#121212',
            surface: '#1E1E1E',
            primary: '#90CAF9',
            secondary: '#EEEEEE',
            customColor1: '#CE93D8',
          },
        },
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});