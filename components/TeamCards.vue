<template>
    <div class="w-full flex flex-row justify-center">
        <img
            v-for="character of characters"
            :key="character"
            :src="require(`~/assets/character_cards/${character}.png`)"
            class="w-[25%]"
        >
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        characters: {
            type: Array,
            required: true
        }
    }
})
</script>
