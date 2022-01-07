<template>
    <div class="w-full bg-cover bg-fixed bg-wuwang min-h-screen flex flex-col flex-nowrap">
        <NavBar />
        <Nuxt class="flex-auto" />
        <Footer />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'DefaultLayout'
})
</script>
