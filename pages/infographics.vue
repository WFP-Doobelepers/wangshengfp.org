<template>
    <div class="p-2 mx-auto w-full max-w-screen-lg">
        <p class="text-white text-4xl w-full text-left mt-5 mb-1 font-righteous">
            Infographics
        </p>
        <div class="w-full h-full grid md:grid-cols-2 gap-2">
            <div
                v-for="infographic of infographics"
                :key="infographic.name"
            >
                <p class="px-2 pt-1 text-center text-white font-bold text-2xl">
                    {{ infographic.name }}
                </p>
                <vueper-slides
                    v-viewer
                    class="no-shadow"
                    :touchable="false"
                    :bullets-outside="true"
                    fade
                >
                    <vueper-slide
                        v-for="image of infographic.infographics"
                        :key="image"
                    >
                        <template #content>
                            <img
                                class="h-full w-full object-contain"
                                :src="`/infographics/${infographic.slug}/${image}.png`"
                            >
                        </template>
                    </vueper-slide>
                </vueper-slides>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
// @ts-ignore
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

Vue.use(VueViewer)

export default Vue.extend({
    name: 'InfographicsPage',
    components: { VueperSlides, VueperSlide },
    async asyncData ({ $content }) {
        const infographics = await $content('infographics', { deep: true }).sortBy('name').fetch()

        return { infographics }
    }
})
</script>

<style lang="postcss">
.vueperslides__bullet {
    @apply m-3;
}

.vueperslides__bullet .default {
    border: 1px solid white;
    box-shadow: none;
}

.vueperslides__bullet--active .default {
    background-color: white;
}
</style>
