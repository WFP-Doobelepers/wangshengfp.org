<template>
    <div class="w-full min-h-screen flex flex-col flex-nowrap">
        <NavBar />
        <img
            class="fixed -z-10 min-h-screen min-w-screen object-cover"
            src="~/assets/backgrounds/wuwang.jpg"
        >
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
