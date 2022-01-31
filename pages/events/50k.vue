<template>
    <layout-events>
        <div class="py-10 px-[5%] bg-opacity-40 bg-black min-h-screen">
            <p class="h1 py-10">
                50K Event
            </p>

            <p class="body lg:px-[20%]">
                After reaching over 50,000 members joining the server, WFP moderators planned a large-scale event to celebrate the milestone.

                Members could join any one of the four teams to participate in fun games, both small and large in scale, and help their team win!
            </p>

            <p class="h2">
                Event Banners
            </p>
            <div id="container" class="flex flex-wrap justify-center lg:px-[20%]">
                <img src="~/assets/events/50k/banner.webp" alt="50K event banner" height="50%">
                <img src="~/assets/events/50k/bannertransparent.webp" alt="Transparent 50K event banner">
                <p class="body2">
                    Banners contributed by @Daikonyuni
                </p>
            </div>

            <p class="h2">
                The Four Teams of 50K Event
            </p>
            <p class="body2">
                Optional description
            </p>

            <section class="w-full flex flex-wrap place-content-evenly gap-10 pb-10">
                <article class="tbox bg-[#ffe9e9]">
                    <img class="thumbnail" src="~/assets/events/50k/Dawn.webp" alt="Dawn Winery">
                    <p class="h3">
                        Dawn Winery
                    </p>
                    <p class="body3">
                        Chief Winery of Mondstadt
                        <br><br>
                        The Dawn Winery is the chief winery in Mondstadt and specializes in Dandelion Wine. Owned by the Ragnvindr family for several generations, its current owner, Diluc, inherited it four years ago after the untimely passing of his father, Crepus... Pranksters joining this team most likely simp for the Batman himself, Diluc, who possesses the title of The Dark Side of Dawn.
                    </p>
                </article>
                <article class="tbox bg-[#f5e6fc]">
                    <img class="thumbnail" src="~/assets/events/50k/Wanmin.webp" alt="Wanmin Restaurant">
                    <p class="h3">
                        Wanmin Restaurant
                    </p>
                    <p class="body3">
                        A famous restaurant known in Chihu Rock
                        <br><br>
                        Some say that the goal of this restaurant is to keep everyone on earth well fed, while others believe that it strives to unify all the regional cuisines of the world. Pranksters joining this team are often those who like to eat the most, or simply just want a piece of that Xiangling ;)
                    </p>
                </article>
                <article class="tbox bg-[#c5cdda]">
                    <img class="thumbnail" src="~/assets/events/50k/Bank.webp" alt="Northland Bank">
                    <p class="h3">
                        Northland Bank
                    </p>
                    <p class="body3">
                        The Snezhnayan Bank
                        <br><br>
                        The Northland Bank is a location in Liyue Harbor, Liyue. It is a Snezhnayan bank that is allegedly controlled by the Fatui... Pranksters joining this team are presumed to be those who simp for Childe, Scaramouche, and Signora.
                    </p>
                </article>
                <article class="tbox bg-[#d2e8d0]">
                    <img class="thumbnail" src="~/assets/events/50k/Guild.webp" alt="Adventurers' Guild">
                    <p class="h3">
                        Adventurers' Guild
                    </p>
                    <p class="body3">
                        A service for the people
                        <br><br>The Adventurers' Guild is an organization that serves as an adventurer-for-hire service for the people and other organizations in all seven nations of Teyvat. Pranksters joining this team usually prefer to adventure the vast world of Teyvat, maybe even accompanying Bennett and Fischl.
                    </p>
                </article>
            </section>
        </div>
    </layout-events>
</template>

<script lang="ts">

export default {
    // page component definitions
    name: 'FifEvent',
    layout: 'events',
    data () {
        return {
            title: '50K Event',
            hover: false
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
  padding-top: 10px;
  padding-bottom: 15px;
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
  justify-items: center;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 15px;
}

.thumbnail {
  background-position: center;
  background-size: cover;
}

</style>
