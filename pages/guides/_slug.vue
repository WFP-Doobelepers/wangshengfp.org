<template>
    <div class="guide flex flex-col justify-center items-center bg-[#323232]">
        <nuxt-content :document="guide" />
        <a :href="`https://github.com/${$config.user}/${$config.repo}/edit/${$config.branch}/content${guide.path}${guide.extension}`" target="_blank">
            <div class="m-2 text-white">
                <img src="~/assets/icons/pencil-box-outline.svg" style="height: 20px" class="inline">
                Edit this page on GitHub
            </div>
        </a>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'GuidePage',
    validate ({ $content, params }) {
        return $content('guides').where({
            $or: [
                { guide_slug: params.slug },
                { aliases: { $contains: params.slug } }
            ]
        }).fetch().then((results) => {
            return results.length > 0
        })
    },
    async asyncData ({ $content, params }) {
        const guide = await $content('guides').where({
            $or: [
                { guide_slug: params.slug },
                { aliases: { $contains: params.slug } }
            ]
        }).fetch()

        return { guide: Array.isArray(guide) ? guide[0] : guide }
    }
})
</script>

<style lang="postcss" scoped>
::v-deep .nuxt-content {
    @apply m-2 max-w-screen-lg text-white
}

::v-deep .nuxt-content > *::before {
    @apply block h-0 m-0 lg:h-[60px] lg:mt-[-60px] content-none
}

::v-deep .nuxt-content h1 {
    @apply font-bold text-4xl text-center pb-5
}

::v-deep .nuxt-content h2 {
    @apply font-bold text-3xl
}

::v-deep .nuxt-content h3 {
    @apply font-bold text-2xl
}

::v-deep .nuxt-content > p {
    @apply mb-5
}

::v-deep .nuxt-content img {
    @apply mx-auto
}

::v-deep .nuxt-content ul {
    @apply list-disc mb-5 pl-5;
}

::v-deep .nuxt-content ul p {
    @apply mb-1
}
</style>
