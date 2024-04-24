<template>
    <div
        class="w-full bg-[#281414] font-quicksand"
    >
        <div
            class="vignette-radial h-screen w-screen fixed bg-top bg-cover"
            :style="{ backgroundImage: `url(${require(`~/assets${faq.path}/background.jpg`)})` }"
        >
            <img
                :src="require(`~/assets/icons/elements/${faq.element}.svg`)"
                class="fixed top-[-40vh] right-[-30vh] h-[125vh] hidden lg:block mix-blend-soft-light"
                data-not-lazy
            >
        </div>

        <NavBar />

        <div class="faq relative z-10">
            <div class="header pl-4 lg:pl-0 max-w-screen-lg mx-auto">
                <h1 class="font-righteous text-white text-5xl lg:text-8xl tracking-wider pt-5">
                    {{ faq.character }} FAQ
                </h1>
                <div>
                    <img
                        v-for="_i in Array.from(Array(faq.character_star).keys())"
                        :key="_i"
                        :src="require(`~/assets/icons/star.svg`)"
                        width="50px"
                        class="inline"
                    >
                </div>
                <p class="text-white text-xl">
                    {{ faq.author.join(', ') }}
                </p>
                <p class="text-gray-300 text-xl">
                    Last updated on {{ new Date(faq.updatedAt).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' }) }}
                </p>
            </div>

            <div class="faq flex flex-row justify-center text-lg">
                <aside class="header flex-col flex-none w-[clamp(15rem,15%,20rem)] hidden lg:flex xl:pr-5">
                    <nav class="sticky top-[6rem] m-2">
                        <ul>
                            <li
                                v-for="link of faq.toc.filter(x => x.depth === 2)"
                                :key="link.id"
                                @click="tableOfContentsHeadingClick(link)"
                            >
                                <a
                                    :class="link.id == currentH2 ? `text-${faq.element} text-4xl` : 'text-white text-2xl'"
                                    role="button"
                                    class="mb-4 block float-right text-right w-full"
                                    :href="`#${link.id}`"
                                >{{ link.text }}</a>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <div class="faq-content">
                    <div class="m-2 max-w-screen-lg backdrop-blur-lg bg-black bg-opacity-70 flex flex-row justify-center">
                        <aside class="flex-col flex-none w-[20%] hidden lg:flex">
                            <nav class="sticky top-16 m-2 pt-10">
                                <ul>
                                    <li
                                        v-for="link of subheaderMapping[currentH2]"
                                        :key="link.id"
                                        @click="tableOfContentsSubHeadingClick(link)"
                                    >
                                        <a
                                            :class="link.id == currentH3 ? `text-${faq.element}` : 'text-white'"
                                            role="button"
                                            class="mb-5 block float-right text-right text-2xl w-full"
                                            :href="`#${link.id}`"
                                        >{{ link.text }}</a>
                                    </li>
                                </ul>
                            </nav>
                        </aside>

                        <div
                            class="hidden lg:flex w-5 my-10 ml-2 xl:mr-8"
                            :class="`bg-${faq.element}`"
                        />

                        <nuxt-content
                            :document="faq"
                            class="text-white p-5 -mt-6"
                        />
                    </div>

                    <a :href="`https://github.com/WFP-Doobelepers/WangshengFP.org/edit/main/content${faq.path}${faq.extension}`" target="_blank">
                        <div class="m-2 text-white">
                            <img src="~/assets/icons/pencil-box-outline.svg" style="height: 20px" class="inline">
                            Edit this page on GitHub
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <Footer />
        <GuidesBottomNavBar :guide="faq" :current-header="currentHeader" />
        <!-- <div class="hidden">
            <div class="text-pyro bg-pyro" />
            <div class="text-hydro bg-hydro" />
            <div class="text-anemo bg-anemo" />
            <div class="text-electro bg-electro" />
            <div class="text-cryo bg-cryo" />
            <div class="text-geo bg-geo" />
            <div class="text-dendro bg-dendro" />
        </div> -->
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'FAQPage',
    layout: 'empty',
    validate ({ $content, params }) {
        return $content('faq').where({
            $or: [
                { slug: params.slug },
                { aliases: { $contains: params.slug } }
            ]
        }).fetch().then((results) => {
            return results.length > 0
        })
    },
    async asyncData ({ $content, params }) {
        const faqFetch = await $content('faq').where({
            $or: [
                { slug: params.slug },
                { aliases: { $contains: params.slug } }
            ]
        }).sortBy('slug', 'asc').fetch()

        const faq: any = Array.isArray(faqFetch) ? faqFetch[0] : faqFetch

        const subheaderMapping: any = {}
        const subheaderReverseMapping: any = {}
        let currentLinkHeader
        for (const link of faq.toc) {
            if (link.depth === 2) {
                currentLinkHeader = link.id
                subheaderMapping[currentLinkHeader] = []
            } else if (link.depth === 3) {
                subheaderMapping[currentLinkHeader].push(link)
                subheaderReverseMapping[link.id] = currentLinkHeader
            }
        }

        return { faq, subheaderMapping, subheaderReverseMapping }
    },
    data () {
        return {
            currentHeader: '' as null | string,
            currentH2: '' as null | string,
            currentH3: '' as null | string,
            observer: null as any,
            observerOptions: {
                root: this.$refs.nuxtContent,
                threshold: 0
            } as Object
        }
    },
    head () {
        const vm: any = this
        return {
            title: vm.faq.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `Pre-TC FAQ for ${vm.faq.character} written by ${vm.faq.author.join(', ')}`
                },
                {
                    hid: 'og:type',
                    name: 'og:type',
                    content: 'article'
                },
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: vm.faq.title
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: `Pre-TC FAQ for ${vm.faq.character} written by ${vm.faq.author.join(', ')}`
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: require(`~/assets/avatar_icon/${vm.faq.character}.png`)
                },
                {
                    hid: 'og:url',
                    property: 'og:url',
                    content: `https://wangshengfp.org/faq/${vm.faq.slug}`
                }
            ]
        }
    },
    mounted () {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const id = entry.target.getAttribute('id')
                const text = entry.target.textContent
                if (entry.isIntersecting) {
                    if (entry.target.tagName === 'H2') {
                        this.currentH2 = id
                        this.currentHeader = text
                    } else if (entry.target.tagName === 'H3') {
                        this.currentH3 = id
                        this.currentH2 = (this as any).subheaderReverseMapping[id!]
                    }
                }
            })
        }, this.observerOptions)

        document.querySelectorAll('.nuxt-content h2[id], .nuxt-content h3[id]').forEach((section) => {
            this.observer.observe(section)
        })
    },
    beforeDestroy () {
        this.observer.disconnect()
    },
    methods: {
        tableOfContentsHeadingClick (link: any) {
            this.currentH2 = link.id
        },
        tableOfContentsSubHeadingClick (link: any) {
            this.currentH3 = link.id
            this.currentH2 = (this as any).subheaderReverseMapping[link.id]
        }
    }
})
</script>

<style lang="postcss" scoped>
.vignette-radial:after {
    @apply content-[''] absolute inset-0;
    background: radial-gradient(circle, transparent 30%, black 100%);
}

::v-deep .nuxt-content > *::before {
    @apply block h-0 m-0 lg:h-[60px] lg:mt-[-60px] content-['']
}

::v-deep .nuxt-content h2 {
    @apply font-bold text-4xl mt-12 mb-3
}

::v-deep .nuxt-content h3 {
    @apply font-bold text-3xl mt-12 mb-3
}

::v-deep .nuxt-content h4 {
    @apply font-bold text-2xl my-2
}

::v-deep .nuxt-content h5 {
    @apply font-bold text-xl my-2
}

::v-deep .nuxt-content h6 {
    @apply font-bold
}

::v-deep .nuxt-content p > a {
    @apply underline text-blue-500
}

::v-deep .nuxt-content > p {
    @apply mb-5
}

::v-deep .nuxt-content > ul, ol {
    @apply pb-5
}

::v-deep .nuxt-content ul, ol {
    @apply pl-5
}

::v-deep .nuxt-content ul p, ol p {
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

::v-deep .nuxt-content ol > li {
    @apply list-decimal
}

::v-deep .nuxt-content .table-wrapper {
    @apply mx-auto max-w-[85vw] overflow-x-auto
}

::v-deep .nuxt-content table {
    @apply mx-auto border-collapse border-2 mb-5
}

::v-deep .nuxt-content table td {
    @apply border-2 lg:p-2 text-center
}

::v-deep .nuxt-content table img {
    @apply mx-auto
}

::v-deep .nuxt-content p > img {
    @apply mt-3 mx-auto
}

::v-deep .nuxt-content img[alt=artifact] {
    @apply w-[35%] max-w-[150px] my-0
}

::v-deep .nuxt-content img[alt=weapon] {
    @apply w-[50%] my-0
}

::v-deep .nuxt-content img[alt=character_card] {
    @apply w-[15%] inline text-center
}

::v-deep .nuxt-content img[alt=chibi] {
    @apply w-36
}

::v-deep .nuxt-content img[alt=team_character] {
    @apply inline w-1/4
}
</style>
