export default {
    // Allows testing on mobile
    server: {
        port: 3000,
        host: '0.0.0.0'
    },

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Wangsheng Funeral Parlor',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Righteous&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
        'nuxt-lazy-load'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/'
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {
        liveEdit: false,
        markdown: {
            remarkPlugins: [
                ['remark-autolink-headings', { behavior: 'wrap' }],
                '~/plugins/parse_table.js'
            ]
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    // https://github.com/nuxt/postcss8/issues/24
        loaders: {
            css: {
                modules: false
            }
        }
    },

    // Fallback to 404.html
    generate: {
        fallback: true,
        routes: [
            // Temporary
            '/lore/pash_dev_qna1',
            '/lore/pash_dev_qna2'
        ]
    }
}
