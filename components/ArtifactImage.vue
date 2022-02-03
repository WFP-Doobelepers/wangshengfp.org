<template>
    <div class="artifact-image block w-1/3 mx-auto">
        <div class="inline-block relative">
            <img
                v-for="(artifact, index) in artifacts"
                :key="index"
                :src="require(`~/assets/artifacts/${artifact.set}/${getArtifactImageName(artifact.set, artifact.type)}`)"
                :class="index == 0 ? 'relaitve' : 'absolute'"
                class="inset-0 w-full"
                :style="getArtifactStyle(index, artifacts.length)"
            >
            <div
                v-for="(artifact, index) in artifacts"
                v-show="artifacts.length > 1"
                :key="index"
                class="absolute bg-white w-1 h-[45%] bottom-2/4 left-2/4 rounded-t-full"
                :style="{
                    'transform': `translate(-50%, 0) rotate(${getRotationAngle(index, artifacts.length)}deg)`,
                    'transform-origin': 'bottom'
                }"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getArtifactImageName } from '../models/artifacts'

function parseAngleToRadians (theta: number): number {
    const boundedAngle = theta <= 360 ? theta : theta - 360
    return boundedAngle * Math.PI / 180
}

export default Vue.extend({
    props: {
        artifacts: {
            type: Array,
            required: true
        }
    },
    methods: {
        getArtifactImageName,
        getArtifactStyle (i: number, N: number): Object {
            const startingAngle = i / N * 360
            const endingAngle = (i + 1) / N * 360
            const offsetAngle = N % 2 === 0 ? 45 : 0
            const radianAngle = parseAngleToRadians((startingAngle + endingAngle) / 2 + offsetAngle)
            const maskOffsetSize = 10 // px
            const maskOffsetX = maskOffsetSize * Math.sin(radianAngle)
            const maskOffsetY = -maskOffsetSize * Math.cos(radianAngle)

            return {
                'mask-image': `conic-gradient(from ${offsetAngle}deg, transparent 0deg, transparent ${startingAngle}deg, black ${startingAngle}deg, black ${endingAngle}deg, transparent ${startingAngle}deg)`,
                'mask-position': `${maskOffsetX}px ${maskOffsetY}px`
            }
        },
        getRotationAngle (i: number, N: number): number {
            const angle = i / N * 360 + (N % 2 === 0 ? 45 : 0)

            return angle <= 360 ? angle : angle - 360
        }
    }
})
</script>
