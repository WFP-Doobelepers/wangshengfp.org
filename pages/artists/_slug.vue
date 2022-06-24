<template>
    <div class="w-full max-w-screen-lg mx-auto text-white mt-5">
        <div class="flex flex-col lg:flex-row p-2">
            <div class="lg:w-1/4 flex-shrink-0 flex flex-col items-center">
                <div class="w-full">
                    <img
                        :src="artist.profile_picture"
                        class="rounded-full h-20 mx-auto"
                    >
                </div>
                <p class="text-bold text-2xl">
                    {{ artist.name }}
                </p>
                <nuxt-content :document="artist" />
            </div>
            <div v-viewer class="grid grid-cols-3 gap-1">
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
    }
})
</script>
