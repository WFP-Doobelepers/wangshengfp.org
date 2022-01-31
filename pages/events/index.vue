<template>
    <layout-events>
        <div class="py-10 px-[5%] lg:px-[20%] justify-center bg-opacity-40 bg-black min-h-screen">
            <p class="h1">
                Events
            </p>

            <p class="h2">
                Upcoming Events:
            </p>
            <p class="body">
                <i>To be announced</i>
                <br>
                To get the latest announcements, join us on the WFP Discord server, or connect with us on our social media!
            </p>

            <p class="h2">
                Past Events:
            </p>
            <p class="body">
                <ul>
                    <nuxt-link to="/events/50k">
                        50K Event
                    </nuxt-link>
                </ul>
                <ul>
                    <nuxt-link to="/events/100k">
                        100K Event
                    </nuxt-link>
                </ul>
            </p>
        </div>
    </layout-events>
</template>

<script lang="ts">
export default {
    // page component definitions
    name: 'EventsPg',
    layout: 'events',
    data () {
        return {
            title: 'Events'
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
  font-weight:700;
  font-size: large;
  padding-top: 30px;
  padding-bottom: 5px;
  text-align: center;
}

.body {
  color: white;
  text-align: center;
}
</style>
