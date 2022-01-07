<template>
  <div class="guides">
    Under Construction
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'GuidesIndexPage',
  asyncData ({ params }) {
    const slug = params.slug
    return { slug }
  }
})
</script>
