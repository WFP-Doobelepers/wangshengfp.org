// Get user, repo and branch
import { execSync } from 'child_process'
const user = execSync('git config --get remote.origin.url').toString().trim().replace('https://github.com/', '').split('/')[0]
const repo = /[^/]*$/.exec(execSync('git config --get remote.origin.url').toString().trim().replace(/.git/g, ''))[0]
const branch = execSync('git branch --show-current').toString().trim()
const base = (process.env.NODE_ENV !== 'production' || process.env.NETLIFY) ? undefined : `/${repo}/${branch}/`

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Export variables
    publicRuntimeConfig: {
        user,
        repo,
        branch
    },

    // Set the repo name with branch to be the base URL when deployed to production
    router: {
        base
    },

    // Prevent anchors from breaking
    // https://github.com/nuxt/content/issues/376
    hooks: {
        'vue-renderer:spa:templateParams' (params) {
            params.HEAD = params.HEAD.replace(`<base href="${base}">`, '')
        }
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
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
        '@nuxt/content'
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
                ['remark-autolink-headings', { behavior: 'wrap' }]
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
        routes: []
    }
}
