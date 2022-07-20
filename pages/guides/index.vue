<template>
    <div class="guide flex flex-col items-center p-2 mx-auto w-full max-w-screen-lg">
        <p class="text-white text-4xl w-full text-left mt-5 mb-1 font-righteous">
            Featured
        </p>
        <div class="w-full h-full mx-auto">
            <vueper-slides fade :slide-ratio="135/256" :autoplay="true">
                <vueper-slide
                    v-for="guide in guides.filter(guide => featured_characters.includes(guide.slug))"
                    :key="guide.slug"
                    :image="require(`~/assets${guide.path}/featured.png`)"
                >
                    <template #content>
                        <div class="flex flex-col justify-end w-[75%] h-full pl-[5%] pb-10">
                            <p class="featured-guide-title text-white font-righteous text-lg lg:text-6xl">
                                {{ guide.title }}
                            </p>
                            <p class="text-white lg:text-2xl">
                                {{ guide.author.join(', ') }}
                            </p>
                            <p class="text-white lg:text-2xl">
                                Last updated for {{ guide.last_updated_game_version }} on {{ new Date(guide.updatedAt).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' }) }}
                            </p>
                        </div>
                    </template>
                </vueper-slide>
            </vueper-slides>
        </div>

        <p class="text-white text-4xl w-full text-left mt-5 mb-1 font-righteous">
            Latest
        </p>
        <!-- Temporarily disabled
        <input
            v-model="searchQuery"
            type="search"
            placeholder="Type your search here"
            class="w-full max-w-[250px] m-3 rounded"
            @input="$fetch"
        > -->
        <div class="guides flex flex-wrap justify-center gap-3">
            <div v-for="guide in guides" :key="guide.slug" class="guide min-w-[200px] w-[45%] lg:w-[30%] pb-3">
                <NuxtLink :to="guide.path">
                    <div class="block bg-[#281414] rounded-lg">
                        <img :src="require(`~/assets${guide.path}/character_card.jpg`)" class="w-full rounded-t-lg">
                        <p class="px-2 pt-1 text-center text-white font-bold lg:text-xl">
                            {{ guide.title }}
                        </p>
                        <p class="px-2 text-center text-white">
                            {{ guide.author.join(', ') }}
                        </p>
                        <p class="px-2 pb-1 text-center text-gray-300">
                            Last updated for {{ guide.last_updated_game_version }} on {{ new Date(guide.updatedAt).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' }) }}
                        </p>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default Vue.extend({
    name: 'GuidesIndexPage',
    components: { VueperSlides, VueperSlide },
    data () {
        return {
            guides: [],
            searchQuery: '',
            featured_characters: ['shinobu', 'yelan']
        }
    },
    async fetch () {
        this.guides = await this.$content('guides')
            .sortBy('updatedAt', 'desc')
            .only([
                'title',
                'character',
                'slug',
                'author',
                'path',
                'updatedAt',
                'last_updated_game_version'
            ])
            .search(this.searchQuery)
            .fetch() as []
    }
})
</script>

<style lang="postcss">
p.featured-guide-title {
    text-shadow: 0 0 10px black
}
</style>
