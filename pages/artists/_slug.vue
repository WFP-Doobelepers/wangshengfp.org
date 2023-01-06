<template>
    <div class="w-full max-w-screen-lg mx-auto text-white mt-5">
        <div class="flex flex-col lg:flex-row p-2">
            <div class="lg:w-1/4 flex-shrink-0 flex flex-col items-center">
                <div class="w-full">
                    <img
                        :src="artist.profile_picture"
                        class="rounded-full w-20 h-20 mx-auto"
                    >
                </div>
                <p class="text-bold text-2xl">
                    {{ artist.name }}
                </p>

                <div class="whitespace-pre-wrap">
                    <p>{{ artist.aboutme }}</p>
                </div>

                <div class="flex flex-wrap flex-row w-full justify-center items-end py-3 gap-3">
                    <a v-if="artist.carrd" class="flex flex-col justify-center items-center" :href="artist.carrd">
                        <img src="~/assets/icons/form.svg" class="w-8">
                        Carrd
                    </a>
                    <div class="flex flex-wrap flex-col justify-center items-center">
                        <img src="~/assets/icons/discord.svg" class="w-8">
                        {{ artist.discord }}
                    </div>
                    <a v-if="artist.twitter" class="flex flex-col justify-center items-center" :href="`https://twitter.com/${artist.twitter}`">
                        <img src="~/assets/icons/twitter.svg" class="w-8">
                        {{ artist.twitter }}
                    </a>
                    <a v-if="artist.instagram" class="flex flex-col justify-center items-center" :href="`https://instagram.com/${artist.instagram}`">
                        <img src="~/assets/icons/instagram.svg" class="w-8">
                        {{ artist.instagram }}
                    </a>
                </div>
            </div>
            <div v-viewer class="grid sm:grid-cols-2 lg:grid-cols-3 gap-1 items-start">
                <img v-for="src in artist.gallery" :key="src" :src="src">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

Vue.use(VueViewer)

export default Vue.extend({
    name: 'ArtistPage',
    async asyncData ({ $content, params }) {
        const artist = await $content('artists', params.slug).fetch()

        return { artist }
    },
    head () {
        const vm: any = this
        return {
            title: vm.artist.name,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: vm.artist.aboutme ?? ''
                },
                {
                    hid: 'og:type',
                    name: 'og:type',
                    content: 'article'
                },
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: vm.artist.name
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: vm.artist.aboutme ?? ''
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: vm.artist.highlight
                },
                {
                    hid: 'og:url',
                    property: 'og:url',
                    content: `https://wangshengfp.org/artists/${vm.artist.slug}`
                }
            ]
        }
    }
})
</script>
