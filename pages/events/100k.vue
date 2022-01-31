<template>
    <layout-events>
        <div class="py-10 px-[5%] bg-opacity-40 bg-black min-h-screen">
            <p class="h1 py-10">
                100K Event
            </p>

            <p class="body lg:px-[20%]">
                To celebrate 100,000 members joining the server, the WFP Event Team prepared a very special milestone event for all members.
                <br><br>
                The 100K Event was divided into three parts:
                <ul>
                    <li class="list">
                        Song and Music Video Production,
                    </li><li class="list">
                        Original Character Creation with a twist, and
                    </li><li class="list">
                        Weekly Activities for non-participants - or as we call them, the Audience.
                    </li>
                </ul>
                <br>
                Members could also join in on the fun by listening to the Wednesday Radio and Weekly Interviews, discussing the OC submissions, and cheer for the four Production Teams as they witness who receive the winning title. A WFP Grammys was held to close this milestone event.
            </p>

            <p class="h2">
                Event Banners
            </p>

            <div id="container" class="flex flex-wrap justify-center lg:px-[20%]">
                <img src="~/assets/events/100k/banner-textless.webp" alt="Textless banner for 100K Event">
                <p class="body2">
                    Contributed by <a href="https://www.deviantart.com/stormspanner/art/wfp-100k-banner-textless-885456470">stormspanner</a>
                </p>
                <img src="~/assets/events/100k/wedradio.webp" alt="Wednesday Radio banner">
                <p class="body2">
                    Contributed by WFP member
                </p>
            </div>

            <p class="h2">
                The Four Teams of 100K Event
            </p>
            <p class="body2">
                Optional description
            </p>
            <section class="w-full flex flex-wrap place-content-evenly gap-10 pb-10">
                <article class="tbox bg-[#fff4c7]">
                    <img class="thumbnail" src="~/assets/events/100k/Ningguang.webp" alt="Ningguang">
                    <p class="h3">
                        Albedo's Kittens
                    </p>
                    <p class="body3">
                        In Albedo's Kittens, you're either staff, a lurker or Sero. Witness the power of staff carried by randoms and Sero. Albedo meow meow.
                    </p>
                </article>
                <article class="tbox bg-[#f9d0be]">
                    <img class="thumbnail" src="~/assets/events/100k/1000.webp" alt="Iansan">
                    <p class="h3">
                        Loaf Cult
                    </p>
                    <p class="body3">
                        Respect the Loaf or get out.
                    </p>
                </article>
                <article class="tbox bg-[#e4edef]">
                    <img class="thumbnail" src="~/assets/events/100k/Ayaka.webp" alt="Ayaka">
                    <p class="h3">
                        Resonant Waves
                    </p>
                    <p class="body3">
                        For those that live too long, the friends of days gone by and scenes from their adventures live on in their memories. Should the day ever come that we are not together, they will continue to shine like gold in our memories.
                    </p>
                </article>
                <article class="tbox bg-[#c0e0fb]">
                    <img class="thumbnail" src="~/assets/events/100k/Childe.webp" alt="Childe">
                    <p class="h3">
                        二4
                    </p>
                    <p class="body3">
                        We exist.
                    </p>
                </article>
            </section>
        </div>
    </layout-events>
</template>

<script lang="ts">

export default {
    // page component definitions
    name: 'HunEvent',
    layout: 'events',
    data () {
        return {
            title: '100K Event'
        }
    }
}
</script>

<style scoped>

.h1 {
  color: white;
  font-weight: 700;
  font-size: 2.25rem/* 36px */;
  line-height: 2.5rem/* 40px */;
  padding-top: 1.25rem/* 20px */;
  text-align: center;
}

.h2 {
  color: white;
  font-weight: bold;
  font-size: 28px;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 20px;
}

.h3 {
  color: #202020;
  text-align: center;
  font-weight: bold;
  font-size: large;
  padding-top: 15px;
}

.body {
  color: white;
  text-align: left;
}

.body2 {
  color: white;
  text-align: center;
  padding-bottom: 20px;
}

.body3 {
    color: #202020;
    text-align: center;
}

.list {
  list-style-type: square;
  list-style-position: inside;
  text-indent: 20px;
}

.tbox {
  box-sizing: border-box;
  width: 20%;
  min-width: 200px;
  height: fit-content;
  padding: 10px;
  justify-items: center;
}

.thumbnail {
  background-position: center;
  background-size: cover;
}
</style>
