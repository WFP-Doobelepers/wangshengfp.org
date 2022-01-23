<template>
    <div class="guide flex flex-col items-center m-2">
        <p class="text-white text-4xl mt-5 mb-1">
            Guides
        </p>
        <input
            v-model="searchQuery"
            type="search"
            placeholder="Type your search here"
            class="w-full max-w-[250px] m-3 rounded"
            @input="$fetch"
        >
        <div class="guides w-full max-w-screen-lg flex flex-wrap justify-center gap-5">
            <div v-for="guide in guides" :key="guide.slug" class="guide min-w-[200px] w-[30%]">
                <NuxtLink :to="guide.path">
                    <div class="block bg-[#281414] rounded-lg">
                        <img :src="require(`~/assets${guide.path}/character_card.jpg`)" class="w-full rounded-t-lg">
                        <p class="px-2 pt-1 text-center text-white font-bold text-xl">
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

export default Vue.extend({
    name: 'GuidesIndexPage',
    data () {
        return {
            guides: [],
            searchQuery: ''
        }
    },
    async fetch () {
        this.guides = await this.$content('guides')
            .sortBy('character', 'asc')
            .only([
                'title',
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
