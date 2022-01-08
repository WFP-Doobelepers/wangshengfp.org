<template>
    <img :src="dynamicImage" :class="imageclass">
</template>

<script>
export default {
    name: 'DynamicImage',
    props: {
        path: {
            type: String,
            required: true
        },
        imageclass: {
            type: String,
            default: ''
        }
    },
    computed: {
        dynamicImage () {
            return require(`~/assets/${this.path}`)
        }
    }
}
</script>
