<template>
    <div class="w-full min-h-screen flex flex-col flex-nowrap font-quicksand">
        <div
            class="h-screen w-screen fixed -z-10 bg-top bg-cover"
            :style="{ backgroundImage: `url(${require('~/assets/backgrounds/wuwang.jpg')})` }"
        />

        <NavBar />
        <Nuxt class="flex-auto z-10" />
        <Footer />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'DefaultLayout'
})
</script>
