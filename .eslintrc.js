module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended'
    ],
    plugins: [
    ],
    rules: {
        indent: ['error', 4],
        semi: ['error', 'never'],
        'vue/html-indent': ['error', 4]
    }
}
