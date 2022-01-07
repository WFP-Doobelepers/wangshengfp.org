<template>
  <div class="guide">
    <nuxt-content :document="guide" />
    <a :href="`https://github.com/${$config.user}/${$config.repo}/edit/${$config.branch}/content/guides/${guide.slug}.md`" target="_blank">
      <div class="m-2 text-white">
        <img src="~/assets/icons/pencil-box-outline.svg" style="height: 20px;" class="inline">
        Edit this page on GitHub
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'GuidePage',
  validate ({ $content, params }) {
    return $content('guides').where({
      $or: [
        { guide_slug: params.slug },
        { aliases: { $contains: params.slug } }
      ]
    }).fetch().then((results) => {
      return results.length > 0
    })
  },
  async asyncData ({ $content, params }) {
    const guide = await $content('guides').where({
      $or: [
        { guide_slug: params.slug },
        { aliases: { $contains: params.slug } }
      ]
    }).fetch()

    return { guide: Array.isArray(guide) ? guide[0] : guide }
  }
})
</script>

<style lang="postcss" scoped>
::v-deep .nuxt-content {
  @apply py-2 px-[10%] lg:px-[30%] text-white;
}

::v-deep .nuxt-content > *::before {
  @apply block h-0 m-0 lg:h-[60px] lg:mt-[-60px];
  content: '';
}

::v-deep .nuxt-content h1 {
  @apply font-bold text-4xl text-center;
}

::v-deep .nuxt-content h2 {
  @apply font-bold text-3xl;
}

::v-deep .nuxt-content h3 {
  @apply font-bold text-2xl;
}

::v-deep .nuxt-content > p {
  @apply mb-5;
}

::v-deep .nuxt-content ul {
  @apply list-disc mb-5;
  & p {
    @apply mb-1;
  }
}
</style>
