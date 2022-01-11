<template>
    <div class="sticky bottom-0 w-full bg-[#281414] lg:hidden">
        Bottom Navigation Bar
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
    }
})
</script>
