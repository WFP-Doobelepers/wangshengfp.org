<template>
    <div class="sticky bottom-0 w-full z-20 lg:hidden">
        <div
            class="w-full z-20 sticky overflow-auto ease-in-out transition-all duration-300"
            :class="isOpen ? '-translate-y-0' : 'translate-y-full h-0'"
        >
            <div
                v-for="header in headerMain"
                :key="header.id"
                class="text-white text-right pr-5 py-3 font-bold text-2xl"
            >
                <a :href="`#${header.id}`" @click="isOpen = false">{{ header.text }}</a>
            </div>
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

        <div class="sticky bottom-0 w-full bg-[#281414] z-30">
            <div class="p-5">
                <div class="text-white w-max inline-block">
                    Place Holder Text
                </div>
                <button class="float-right inline-block" @click="drawer">
                    <img :src="isOpen ? require('~/assets/icons/chevron-down.svg') : require('~/assets/icons/chevron-up.svg')" style="height: 30px">
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        guide: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            isOpen: false
        }
    },
    computed: {
        headerMain () {
            const vm: any = this
            return vm.guide.toc.filter((x: any) => x.depth === 2)
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
