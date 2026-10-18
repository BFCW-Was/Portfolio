import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
    ignores: ['**/*__test.*'],
    name: 'portfolio/strict',
    rules: {
        // JavaScript/TypeScript
        'no-debugger': 'error',
        eqeqeq: ['error', 'always'],
        'no-var': 'error',
        camelcase: 'warn',
        'no-console': 'warn',
        'prefer-const': 'warn',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        // Vue
        'vue/no-v-html': 'error',
        'vue/multi-word-component-names': 'off',
        'vue/require-default-prop': 'off',
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/attribute-hyphenation': ['error', 'never'],
        'vue/define-props-declaration': ['error', 'runtime'],
        'vue/define-emits-declaration': ['error', 'runtime'],
        'vue/no-unused-components': 'warn',
        'vue/html-self-closing': ['warn', { html: { void: 'always' } }],
        'vue/no-child-content': 'warn',
    },
});
