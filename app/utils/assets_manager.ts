const basePathImages = '/images';
const basePathLogos = '/logos';
const basePathVideos = '/videos';
const basePathDocuments = '/documents';

export const assetsManager = [
    {
        id: 'logo-dark',
        src: `${basePathLogos}/isologo_dark.svg`,
        alt: 'Logotipo de BFCW en Modo Oscuro',
    },
    {
        id: 'logo-light',
        src: `${basePathLogos}/isologo_light.svg`,
        alt: 'Logotipo de BFCW en Modo Claro',
    },
    {
        id: 'testing-basic',
        src: `${basePathImages}/testing_basic.png`,
        alt: 'Imagen de pruebas - Color Base',
    },
    {
        id: 'testing-cyan',
        src: `${basePathImages}/testing_cyan.png`,
        alt: 'Imagen de pruebas - Color Cyan',
    },
    {
        id: 'testing-fire',
        src: `${basePathImages}/testing_fire.png`,
        alt: 'Imagen de pruebas - Color Fire',
    },
    {
        id: 'testing-mustard',
        src: `${basePathImages}/testing_mustard.png`,
        alt: 'Imagen de pruebas - Color Mustard',
    },
];
