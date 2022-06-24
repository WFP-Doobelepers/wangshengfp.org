<template>
    <nav class="sticky top-0 block w-full lg:bg-[#281414] bg-transparent z-20">
        <div class="flex items-center justify-center">
            <!-- Mobile toggle -->
            <div class="lg:hidden absolute top-5 right-5 z-20">
                <button @click="drawer">
                    <svg
                        class="h-8 w-8 fill-current text-white"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <!-- Navbar -->
            <div class="navbar hidden lg:block z-10">
                <ul class="flex text-sm font-quicksand text-white">
                    <NuxtLink to="/">
                        Home
                    </NuxtLink>

                    <NuxtLink to="/guides">
                        Guides
                    </NuxtLink>
                    <!--
                    <NuxtLink to="/calculator">
                        Calculator
                    </NuxtLink>

                    <div class="dropdown">
                        <NuxtLink to="/forms">
                            Forms
                            <img src="~/assets/icons/chevron-down.svg" style="height: 20px" class="inline">
                        </NuxtLink>
                        <div class="dropdown-content">
                            <NuxtLink to="/forms/ban-appeal">
                                Ban Appeal
                            </NuxtLink>
                        </div>
                    </div> -->
                </ul>
            </div>

            <!-- Dark Background Transition -->
            <transition
                enter-class="opacity-0"
                enter-active-class="ease-out transition-medium"
                enter-to-class="opacity-100"
                leave-class="opacity-100"
                leave-active-class="ease-out transition-medium"
                leave-to-class="opacity-0"
            >
                <div
                    v-show="isOpen"
                    class="z-10 fixed inset-0 transition-opacity"
                    @keydown.esc="isOpen = false"
                >
                    <div
                        class="absolute inset-0 bg-black opacity-50"
                        tabindex="0"
                        @click="isOpen = false"
                    />
                </div>
            </transition>

            <!-- Drawer Menu -->
            <aside
                class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
                :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
            >
                <div class="close">
                    <button
                        class="absolute top-0 right-0 mt-4 mr-4"
                        @click="isOpen = false"
                    >
                        <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <span
                    class="flex w-full items-center p-4 border-b"
                    @click="isOpen = false"
                />

                <ul class="divide-y font-quicksand">
                    <li>
                        <NuxtLink
                            to="/"
                            class="my-4 inline-block"
                            @click.native="isOpen = false"
                        >
                            Home
                        </NuxtLink>
                    </li>

                    <!-- <li class="mb-4">
                        <NuxtLink
                            to="/about-us"
                            class="mt-4 mb-2 inline-block"
                            @click.native="isOpen = false"
                        >
                            About Us
                        </NuxtLink>
                        <ul>
                            <li>
                                <NuxtLink
                                    to="/about-us#social-media"
                                    class="pl-3"
                                    @click.native="isOpen = false"
                                >
                                    <img src="~/assets/icons/plus.svg" style="height: 15px" class="inline"> Social Media
                                </NuxtLink>
                            </li>
                        </ul>
                    </li> -->

                    <li>
                        <NuxtLink
                            to="/guides"
                            class="my-4 inline-block"
                            @click.native="isOpen = false"
                        >
                            Guides
                        </NuxtLink>
                    </li>

                    <!-- <li>
                        <NuxtLink
                            to="/calculator"
                            class="my-4 inline-block"
                            @click.native="isOpen = false"
                        >
                            Calculator
                        </NuxtLink>
                    </li> -->

                    <!-- <li>
                        <NuxtLink
                            to="/forms"
                            class="my-4 inline-block"
                            @click.native="isOpen = false"
                        >
                            Forms
                        </NuxtLink>
                    </li> -->
                </ul>

                <div class="follow">
                    <!-- <p class="italic font-quicksand text-sm">Follow us on:</p> -->
                    <div class="social flex flex-row justify-between mt-4">
                        <a href="https://www.twitch.tv/wangshengfp/">
                            <img src="~/assets/icons/twitch.svg" style="height: 20px">
                        </a>
                        <a href="https://twitter.com/wangshengfp/">
                            <img src="~/assets/icons/twitter.svg" style="height: 20px">
                        </a>
                        <a href="https://www.youtube.com/channel/UCDOOTQsQ8V68mqOQ06JI0GQ/">
                            <img src="~/assets/icons/youtube.svg" style="height: 20px">
                        </a>
                        <a href="https://www.tiktok.com/@wangshengfparlor/">
                            <img src="~/assets/icons/tiktok.svg" style="height: 20px">
                        </a>
                        <a href="https://www.instagram.com/wangsheng.fp/">
                            <img src="~/assets/icons/instagram.svg" style="height: 20px">
                        </a>
                        <a href="https://ko-fi.com/wfp">
                            <img src="~/assets/icons/kofi.svg" style="height: 20px">
                        </a>
                        <a href="https://www.reddit.com/r/HuTaomains">
                            <img src="~/assets/icons/reddit.png" style="height: 20px">
                        </a>
                    </div>
                </div>
            </aside>
        </div>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data () {
        return {
            isOpen: false
        }
    },
    watch: {
        isOpen: {
            immediate: true,
            handler (isOpen) {
                if (process.client) {
                    if (isOpen) {
                        document.body.style.setProperty('overflow', 'hidden')
                    } else {
                        document.body.style.removeProperty('overflow')
                    }
                }
            }
        }
    },
    mounted () {
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 27 && this.isOpen) {
                this.isOpen = false
            }
        })
    },
    methods: {
        drawer () {
            this.isOpen = !this.isOpen
        }
    }
})
</script>

<style lang="postcss" scoped>
.navbar a {
    @apply text-white float-left text-lg text-center p-5 no-underline w-[200px] h-[60px]
}

.dropdown {
    @apply float-left overflow-hidden
}

.navbar a:hover, .navbar > ul > .nuxt-link-exact-active {
    @apply bg-[#452222]
}

li .nuxt-link-exact-active {
    @apply text-[#452222] font-bold
}

.dropdown-content {
    @apply hidden absolute mt-[60px] bg-gray-100 z-10
}

.dropdown-content a {
    @apply float-none text-[#281414] p-4 no-underline text-center block
}

.dropdown-content a:hover {
    @apply bg-gray-200
}

.dropdown:hover .dropdown-content {
    @apply block
}
</style>
