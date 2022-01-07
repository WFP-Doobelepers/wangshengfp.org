<template>
    <div class="error flex flex-col justify-center items-center text-white text-center">
        <p class="text-9xl">
            Error {{ error.statusCode }}
        </p>
        <p v-if="error.statusCode === 404" class="text-4xl">
            Page Under Construction 🚧
        </p>
    </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    name: 'ErrorPage',
    layout: 'error',
    props: {
        error: {
            type: String,
            required: true
        }
    }
})
</script>
