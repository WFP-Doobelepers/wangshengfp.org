<template>
    <div class="w-full max-w-screen-lg mx-auto text-white p-2 mt-5">
        <p class="text-4xl font-righteous">
            Artists
        </p>
        <div class="flex flex-wrap justify-center gap-3">
            <div
                v-for="artist of artists"
                :key="artist.slug"
                class="bg-[#281414] rounded-lg p-3 w-full lg:w-[32%]"
            >
                <NuxtLink :to="`/artists/${artist.slug}`" class="flex items-end gap-2 pb-2">
                    <img
                        :src="artist.profile_picture"
                        class="rounded-full w-10"
                    >
                    <p class="text-bold text-2xl">
                        {{ artist.name }}
                    </p>
                </NuxtLink>
                <div>
                    <div v-viewer class="grid grid-cols-3 gap-1">
                        <img v-for="src in artist.gallery.slice(0, 9)" :key="src" :src="src">
                    </div>
                </div>
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
    name: 'ArtistIndexPage',
    async asyncData ({ $content }) {
        const artists = await $content('artists').fetch()

        return { artists }
    }
})
</script>
