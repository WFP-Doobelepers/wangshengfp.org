<template>
  <div class="w-full bg-cover bg-fixed bg-wuwang min-h-screen flex flex-col">
    <NavBar />

    <div class="flex-auto">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout'
})
</script>

<style>
.nuxt-content {
  padding: 10px 10%;
  color: white;
}

.nuxt-content > * {
  scroll-margin-top: 60px;
}

.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}

.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
  }

.nuxt-content p {
  margin-bottom: 20px;
}

.icon.icon-link {
  position: absolute;
  opacity: 0%;
  height: 20px;
  width: 20px;
  margin-left: -25px;
  background-image: url('~assets/icons/link-variant.svg');
  background-repeat: no-repeat;
  margin-top: 12px;
}

h2:hover .icon.icon-link, h3:hover .icon.icon-link, h4:hover .icon.icon-link, h5:hover .icon.icon-link {
  opacity: 100;
}

@media (max-width: 1024px) {
  .nuxt-content > * {
    scroll-margin-top: 0;
  }
}
</style>
