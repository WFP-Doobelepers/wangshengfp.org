<template>
    <div
        class="w-full bg-cover bg-fixed"
        :style="{ backgroundImage: `url(${backgroundURL})` }"
    >
        <NavBar />
        <img
            :src="require(`~/assets/icons/elements/${guide.element}.svg`)"
            class="fixed top-[-20%] right-[-20%] hidden lg:block"
            width="60%"
        >

        <div class="guide flex flex-row justify-center font-quicksand text-lg relative z-10">
            <aside class="flex flex-col max-w-[15%]">
                <nav class="header-navigation sticky top-16 hidden lg:block pt-8 m-2">
                    <ul>
                        <li
                            v-for="link of guide.toc"
                            :key="link.id"
                            :class="{
                                'pl-4': link.depth === 3,
                            }"
                            class="toc-list"
                            @click="tableOfContentsHeadingClick(link)"
                        >
                            <a
                                :class="link.id == currentlyActiveToc ? `text-${guide.element} text-2xl` : 'text-black'"
                                role="button"
                                class="transition-colors duration-75 mb-2 block"
                                :href="`#${link.id}`"
                            >{{ link.text }}</a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <div class="guide-content">
                <div class="header pl-3">
                    <p class="font-bold font-righteous text-white text-5xl lg:text-8xl tracking-wider pt-5">
                        {{ guide.character }}
                    </p>
                    <div>
                        <img
                            v-for="_i in Array.from(Array(guide.character_star).keys())"
                            :key="_i"
                            :src="require(`~/assets/icons/star.svg`)"
                            width="50px"
                            class="inline"
                        >
                    </div>
                    <p class="text-white text-xl">
                        {{ guide.author.join(', ') }}
                    </p>
                    <p class="text-gray-300 text-xl">
                        Last updated for {{ guide.last_updated_game_version }} on {{ new Date(guide.updatedAt).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' }) }}
                    </p>
                </div>

                <nuxt-content
                    :document="guide"
                    class="m-2 max-w-screen-lg text-white backdrop-blur-lg bg-black bg-opacity-50 p-5"
                />
                <a :href="`https://github.com/WFP-Doobelepers/WangshengFP.com/edit/main/content${guide.path}${guide.extension}`" target="_blank">
                    <div class="m-2 text-white">
                        <img src="~/assets/icons/pencil-box-outline.svg" style="height: 20px" class="inline">
                        Edit this page on GitHub
                    </div>
                </a>
            </div>
        </div>
        <Footer />
        <GuidesBottomNavBar :guide="guide" :current-header="currentHeader" />
        <!-- <div class="hidden">
            <div class="text-pyro" />
            <div class="text-hydro" />
            <div class="text-anemo" />
            <div class="text-electro" />
            <div class="text-cryo" />
            <div class="text-geo" />
        </div> -->
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'GuidePage',
    layout: 'empty',
    validate ({ $content, params }) {
        return $content('guides').where({
            $or: [
                { slug: params.slug },
                { aliases: { $contains: params.slug } }
            ]
        }).fetch().then((results) => {
            return results.length > 0
        })
    },
    async asyncData ({ $content, params }) {
        const guide = await $content('guides').where({
            $or: [
                { slug: params.slug },
                { aliases: { $contains: params.slug } }
            ]
        }).fetch()

        return { guide: Array.isArray(guide) ? guide[0] : guide }
    },
    data () {
        return {
            currentlyActiveToc: '' as null | string,
            currentHeader: '' as null | string,
            observer: null as any,
            observerOptions: {
                root: this.$refs.nuxtContent,
                threshold: 0
            } as Object
        }
    },
    computed: {
        backgroundURL () {
            return require(`~/assets${this.$data.guide.path}/background.jpg`)
        }
    },
    mounted () {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const id = entry.target.getAttribute('id')
                const text = entry.target.textContent
                if (entry.isIntersecting) {
                    this.currentlyActiveToc = id
                    this.currentHeader = text
                }
            })
        }, this.observerOptions)

        // Track all sections that have an `id` applied
        document.querySelectorAll('.nuxt-content h2[id], .nuxt-content h3[id]').forEach((section) => {
            this.observer.observe(section)
        })
    },
    beforeDestroy () {
        this.observer.disconnect()
    },
    methods: {
        tableOfContentsHeadingClick (link: any) {
            this.currentlyActiveToc = link.id
        }
    }
})
</script>

<style lang="postcss" scoped>
::v-deep .nuxt-content > *::before {
    @apply block h-0 m-0 lg:h-[60px] lg:mt-[-60px] content-['']
}

::v-deep .nuxt-content h2 {
    @apply font-bold text-3xl
}

::v-deep .nuxt-content h3 {
    @apply font-bold text-2xl
}

::v-deep .nuxt-content h4 {
    @apply font-bold text-xl
}

::v-deep .nuxt-content > p {
    @apply mb-5
}

::v-deep .nuxt-content img {
    @apply mx-auto
}

::v-deep .nuxt-content > ul {
    @apply pb-5
}

::v-deep .nuxt-content ul {
    @apply pl-5
}

::v-deep .nuxt-content ul p {
    @apply mb-1
}

::v-deep .nuxt-content ul > li {
    @apply list-disc
}

::v-deep .nuxt-content li * li {
    @apply list-[square]
}

::v-deep .nuxt-content li * li * li {
    @apply list-[circle]
}

::v-deep .nuxt-content table {
    @apply mx-auto border-collapse border-2
}

::v-deep .nuxt-content table td {
    @apply border-2 p-2
}
</style>
