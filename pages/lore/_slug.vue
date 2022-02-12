<template>
    <div
        class="w-full flex flex-col items-center"
    >
        <div
            class="vignette-radial h-screen w-screen fixed z-[-10] bg-top bg-cover"
            :style="{ backgroundImage: `url(${require(`~/assets${article.path}/background.jpg`)})` }"
        />
        <h1 class="font-righteous m-5 text-center text-white text-2xl lg:text-5xl tracking-wider pt-5">
            {{ article.title }}
        </h1>
        <div class="m-2 max-w-screen-lg backdrop-blur-lg bg-black bg-opacity-70 flex flex-row justify-center">
            <nuxt-content :document="article" class="p-5 text-white mt-[-2rem]" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'LorePage',
    validate ({ $content, params }) {
        return $content('lore').where(
            { slug: params.slug }
        ).fetch().then((results) => {
            return results.length > 0
        })
    },
    async asyncData ({ $content, params }) {
        const article = await $content('lore', params.slug).fetch()

        return { article }
    },
    head () {
        const vm: any = this
        return {
            title: vm.article.title,
            meta: [
                {
                    hid: 'og:type',
                    name: 'og:type',
                    content: 'article'
                },
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: vm.article.title
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: require(`~/assets${vm.article.path}/preview.jpg`)
                },
                {
                    hid: 'og:url',
                    property: 'og:url',
                    content: `https://beta.wangshengfp.com/lore/${vm.article.slug}`
                }
            ]
        }
    }
})
</script>

<style lang="postcss" scoped>
::v-deep .nuxt-content h4 > a, ::v-deep .nuxt-content h5 > a {
    @apply pointer-events-none cursor-default
}

::v-deep .nuxt-content h4 {
    @apply text-2xl pb-3 pt-8
}

::v-deep .nuxt-content p {
    @apply pb-3
}

::v-deep .nuxt-content hr {
    @apply my-5
}

::v-deep .nuxt-content p a {
    @apply underline text-blue-500
}
</style>
