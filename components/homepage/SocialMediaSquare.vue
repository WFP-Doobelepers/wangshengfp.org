<template>
    <a :href="link" :class="`group flex-grow after:block after:content-[''] after:pb-[100%] relative`" :title="title">
        <div class="flex absolute flex-col w-full h-full items-center pt-[7%] opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-[0.4s]">
            <div class="w-[50%] rounded-[50%] border-white border-[6px] border-solid">
                <img :src="require(`~/assets/${emote}`)" class="rounded-[50%]">
            </div>
            <p class="text-center leading-none font-righteous whitespace-normal pt-3 pb-3 sm:text-2xl sm:pt-2 sm:pb-2 md:text-3xl md:pt-4 md:pb-4">
                {{ name }}
            </p>
        </div>
        <img :src="require(`~/assets/${icon}`)" class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[45%] group-hover:top-[85%] group-hover:h-[18.18%] transition-all ease-in-out duration-[0.4s]">
    </a>
</template>

<script>
export default {
    name: 'SocialMediaSquare',
    props: {
        link: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        emote: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    }
}
</script>
