<template>
    <div class="block w-1/3 mx-auto">
        <div class="inline-block relative">
            <img
                v-for="(artifact, index) in artifacts"
                :key="index"
                :src="require(`~/assets/artifacts/${artifact.set}/${getArtifactImageName(artifact.set, artifact.type)}`)"
                :class="index == 0? 'relaitve' : 'absolute'"
                class="top-0 left-0 w-full"
                :style="{
                    'mask-image': `conic-gradient(transparent 0%, transparent ${index/artifacts.length * 100}%, black ${index/artifacts.length * 100}%, black ${(index + 1)/artifacts.length * 100}%, transparent ${(index + 1)/artifacts.length * 100}%)`
                }"
            >
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getArtifactImageName } from '../models/artifacts'

export default Vue.extend({
    props: {
        artifacts: {
            type: Array,
            required: true
        }
    },
    methods: {
        getArtifactImageName
    }
})
</script>
