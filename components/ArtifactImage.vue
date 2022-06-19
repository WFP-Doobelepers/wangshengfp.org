<template>
    <div class="artifact-image block w-1/3 min-w-[100px] mx-auto">
        <div class="inline-block relative">
            <img
                v-for="(artifact, index) in artifacts"
                :key="index"
                :src="require(`~/assets/artifacts/${artifact.set}/${getArtifactImageName(artifact.set, artifact.type)}`)"
                :class="index == 0 ? 'relaitve' : 'absolute'"
                class="inset-0 w-full"
                :style="getArtifactStyle(index, artifacts)"
            >
            <div
                v-for="(artifact, index) in artifacts"
                v-show="artifacts.length > 1"
                :key="index"
                class="absolute bg-white w-1 h-[45%] bottom-2/4 left-2/4 rounded-t-full"
                :style="{
                    'transform': `translate(-50%, 0) rotate(${getRotationAngle(index, artifacts)}deg)`,
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
        },
        offset: {
            type: Number,
            required: false,
            default: 0
        }
    },
    methods: {
        getArtifactImageName,
        getArtifactStyle (i: number, artifacts: any[]): Object {
            const N = artifacts.map((x: any) => x.spacing ?? 1).reduce((a, b) => a + b, 0)
            const iAdjusted = i + artifacts.slice(0, i).map((x: any) => (x.spacing ?? 1) - 1).reduce((a, b) => a + b, 0)
            const startingAngle = iAdjusted / N * 360
            const endingAngle = (iAdjusted + (artifacts[i].spacing ?? 1)) / N * 360
            const radianAngle = parseAngleToRadians((startingAngle + endingAngle) / 2 + this.offset)
            let maskOffsetSize = 10 // px

            // Correction for angle shifting
            if (artifacts[i].spacing) {
                maskOffsetSize *= Math.abs(Math.cos(Math.abs(radianAngle - parseAngleToRadians(((i + 0.5) / N * 360 + this.offset)))))
            }

            const maskOffsetX = maskOffsetSize * Math.sin(radianAngle)
            const maskOffsetY = -maskOffsetSize * Math.cos(radianAngle)

            return {
                'mask-image': `conic-gradient(from ${this.offset}deg, transparent 0deg, transparent ${startingAngle}deg, black ${startingAngle}deg, black ${endingAngle}deg, transparent ${startingAngle}deg)`,
                'mask-position': `${maskOffsetX}px ${maskOffsetY}px`
            }
        },
        getRotationAngle (i: number, artifacts: any[]): number {
            const N = artifacts.map((x: any) => x.spacing ?? 1).reduce((a, b) => a + b, 0)
            i += artifacts.slice(0, i).map((x: any) => (x.spacing ?? 1) - 1).reduce((a, b) => a + b, 0)
            const angle = i / N * 360 + this.offset

            return angle <= 360 ? angle : angle - 360
        }
    }
})
</script>
