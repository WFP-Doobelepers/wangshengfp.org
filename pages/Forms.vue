<template>
  <div class="forms">
    <nuxt-content :document="doc" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FormsPage',
  async asyncData ({ $content, params }) {
    const doc = await $content(params.slugs || 'hello').fetch()

    return { doc }
  }
})
</script>

<style>

</style>
