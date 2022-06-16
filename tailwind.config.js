/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',

    content: [
        './src/pages/**/**.{js,ts,jsx,tsx}',
        './src/styles/**/**.{js,ts,jsx,tsx}',
        './src/content/**/**.{js,ts,jsx,tsx}',
        './src/components/**/**.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {},
        extend: {
            colors: {},
        },
        opacity: {
            96: '0.96',
            97: '0.97',
            98: '0.98',
            99: '0.99',
        },
        backgroundImage: (theme) => ({
            'hero-bg': "url('/images/hero-bg.svg')",
        }),
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/typography'),
    ],
};
