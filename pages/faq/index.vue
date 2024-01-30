<template>
    <div class="guide flex flex-col items-center p-2 mx-auto w-full max-w-screen-lg">
        <p class="text-white text-4xl w-full text-left mt-5 mb-1 font-righteous pb-2">
            Pre-TC FAQs
        </p>
        <div class="guides grid grid-cols-2 lg:grid-cols-3 justify-center gap-3">
            <div v-for="faq in faqs" :key="faq.slug" class="guide w-full pb-3">
                <NuxtLink :to="faq.path">
                    <div class="block bg-[#281414] rounded-lg">
                        <img :src="require(`~/assets/avatar_icon/${faq.character}.png`)" class="w-full">
                        <p class="px-2 pt-1 text-center text-white font-bold lg:text-xl">
                            {{ faq.title }}
                        </p>
                        <p class="px-2 text-center text-white">
                            {{ faq.author.join(', ') }}
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
    name: 'FAQIndexPage',
    data () {
        return {
            faqs: [],
            searchQuery: ''
        }
    },
    async fetch () {
        this.faqs = await this.$content('faq')
            .sortBy('updatedAt', 'desc')
            .only([
                'title',
                'character',
                'slug',
                'author',
                'path',
                'updatedAt'
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
