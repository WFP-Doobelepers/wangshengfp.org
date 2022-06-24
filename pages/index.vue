<template>
    <div class="text-white">
        <div class="text-white whitespace-pre-wrap py-10 px-[10%] lg:px-[30%]">
            <div id="container" class="flex justify-center w-full">
                <img src="~/assets/wfp_logo.svg" class="w-[30%] lg:w-4/5 h-auto">
            </div>
            <p class="text-center leading-none font-righteous text-3xl lg:text-[80px] whitespace-normal">
                WANGSHENG FUNERAL PARLOR
            </p>

            <p align="center">
                <iframe
                    src="https://discord.com/widget?id=791074691841523742&theme=dark"
                    width="95%"
                    height="500"
                    allowtransparency="true"
                    frameborder="0"
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                />
            </p>
        </div>
        <div class="bg-[#452222] w-full">
            <p class="text-center leading-none font-righteous text-3xl whitespace-normal pt-4 pb-4">
                OTHER SOCIAL MEDIA
            </p>
            <div class="max-w-5xl mx-auto grid grid-cols-3">
                <HomepageSocialMediaSquare
                    link="https://www.youtube.com/channel/UCDOOTQsQ8V68mqOQ06JI0GQ"
                    icon="icons/youtube.png"
                    emote="icons/emote/emoteflame4.png"
                    name="YOUTUBE"
                    title="Click to visit WFP's YouTube Channel!"
                    class="bg-[#ff0000]"
                />
                <HomepageSocialMediaSquare
                    link="https://www.twitch.tv/wangshengfp"
                    icon="icons/twitch.png"
                    emote="icons/emote/emoteflame6.png"
                    name="TWITCH"
                    title="Click to visit WFP's Twitch!"
                    class="bg-[#6441a5]"
                />
                <HomepageSocialMediaSquare
                    link="https://www.tiktok.com/@wangshengfparlor"
                    icon="icons/tiktok.png"
                    emote="icons/emote/emoteflame6.png"
                    name="TIKTOK"
                    title="Click to visit WFP's TikTok!"
                    class="bg-[#ed1566]"
                />
                <HomepageSocialMediaSquare
                    link="https://twitter.com/wangshengfp"
                    icon="icons/twitter.png"
                    emote="icons/emote/emoteflame8.png"
                    name="TWITTER"
                    title="Click to visit WFP's Twitter!"
                    class="bg-[#3d9be9]"
                />
                <HomepageSocialMediaSquare
                    link="https://www.instagram.com/wangsheng.fp/"
                    icon="icons/instagram.png"
                    emote="icons/emote/emoteflame8.png"
                    name="INSTAGRAM"
                    title="Click to visit WFP's Instagram!"
                    class="bg-[#ff6a48]"
                />
                <HomepageSocialMediaSquare
                    link="https://ko-fi.com/wfp"
                    icon="icons/kofi.png"
                    emote="icons/emote/emoteflame6.png"
                    name="KO-FI"
                    title="Click to visit WFP's Ko-fi!"
                    class="bg-[#052d49]"
                />
                <HomepageSocialMediaSquare
                    link="https://www.reddit.com/r/HuTaomains"
                    icon="icons/reddit.png"
                    emote="icons/emote/emoteflame6.png"
                    name="r/HuTaomains"
                    title="Click to visit r/HuTaomains!"
                    class="bg-[#0079D3] col-start-2"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'HomeIndexPage'
})
</script>
