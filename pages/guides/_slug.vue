<template>
  <nuxt-content :document="guide" styles="parent-style" />
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'GuidePage',
  validate ({ $content, params }) {
    return $content('guides').where({
      $or: [
        { slug: params.slug },
        { aliases: { $contains: params.slug } }
      ]
    }).fetch().then((results) => {
      return results.length > 0
    })
  },
  async asyncData ({ $content, params }) {
    const guide = await $content('guides').where({
      $or: [
        { slug: params.slug },
        { aliases: { $contains: params.slug } }
      ]
    }).fetch()

    return { guide: Array.isArray(guide) ? guide[0] : guide }
  }
})
</script>

<style scoped>
::v-deep .nuxt-content {
  padding: 10px 30%;
  color: white;
}

::v-deep .nuxt-content h1 {
  font-weight: bold;
  font-size: 32px;
  text-align: center;
}

::v-deep .nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}

::v-deep .nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}

::v-deep .nuxt-content p {
  margin-bottom: 20px;
}

::v-deep .nuxt-content ul {
  list-style-type: disc;
}

@media (max-width: 1024px) {
  ::v-deep .nuxt-content {
    padding: 10px 10%;
  }
}
</style>
