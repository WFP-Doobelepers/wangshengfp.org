<template>
  <div class="text-white whitespace-pre-wrap py-10 px-10% lg:px-30%">
    <div id="container">
      <img src="~/assets/wfp_logo.svg">
    </div>
    <h1>WANGSHENG FUNERAL PARLOR</h1>

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

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu pellentesque leo, sodales varius elit. Etiam porta ipsum ac nunc commodo euismod. Aenean placerat tincidunt vulputate. Donec rutrum quam sit amet lacus auctor, non porta ipsum ultrices. Duis lacinia enim vitae mi sodales gravida. Nam sit amet diam felis. Pellentesque elementum ac ligula et tincidunt.</p>
    <p>Cras egestas finibus libero, quis dignissim libero facilisis nec. Mauris in lacus velit. Praesent semper ullamcorper eros eu finibus. Curabitur fermentum urna ac felis scelerisque, vitae gravida dolor pharetra. Suspendisse vel facilisis leo, a fringilla magna. Curabitur porttitor ultricies porttitor. Vivamus vel sapien varius, malesuada ante sed, vestibulum nulla. Proin quis leo ac sapien sagittis luctus eget eget felis. Phasellus suscipit, nibh at lacinia tincidunt, mi lorem lobortis libero, id placerat ipsum lacus quis purus.</p>
    <p>Quisque egestas libero lectus, vel mollis odio auctor ultrices. Donec tempor, purus ut placerat venenatis, ipsum est volutpat leo, in tincidunt mi sem eu sem. Morbi consequat, mi a pulvinar feugiat, neque turpis elementum nisi, at iaculis sem sem ac urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis pulvinar dolor a orci mattis pellentesque. Duis mattis tincidunt massa, a molestie nisl feugiat eu. Nunc nec mollis urna, et pellentesque magna. Morbi interdum, odio non volutpat molestie, turpis augue porttitor dui, ac dapibus ex lectus eu erat. Phasellus convallis tempus magna, placerat cursus quam porttitor a. Cras tempus posuere lacus quis tristique. Donec finibus, nulla ac consectetur elementum, tortor nunc varius felis, vel pretium erat massa egestas lectus. Vestibulum ac enim bibendum, vehicula lectus vel, hendrerit ipsum.</p>
    <p>Cras mi turpis, aliquet vel diam sit amet, maximus elementum orci. In a arcu eget augue hendrerit facilisis et in libero. Integer sodales bibendum placerat. Donec ac enim nec eros convallis rutrum ut in dolor. Sed orci dui, condimentum non nisl id, ultricies rutrum lacus. Suspendisse a nisi sed ante faucibus vestibulum at sit amet mi. Sed maximus diam quis commodo volutpat. Nam suscipit quam sollicitudin, ullamcorper erat quis, euismod tortor. Vestibulum auctor lobortis accumsan. Duis eget tortor quis orci laoreet efficitur.</p>
    <p>In quis dui dapibus, laoreet tortor interdum, blandit ipsum. Suspendisse eu venenatis sapien. Donec id lectus et mi vehicula viverra ac eget erat. Fusce lacinia augue ac ex venenatis, quis consequat diam tempus. Nunc bibendum pellentesque massa, id lobortis velit vulputate eget. Donec et pharetra lacus. Integer facilisis posuere enim sed congue. Aliquam eget massa est. Nam metus orci, auctor eu elit pulvinar, mattis dignissim dui. Duis efficitur turpis nec eros egestas euismod. Nullam in iaculis turpis. Nam malesuada orci vel sodales ultrices. Nulla sodales cursus neque, in tempor sem sagittis in.</p>
    <p>Nullam auctor nec orci sed aliquam. Nullam luctus porttitor arcu egestas porttitor. Suspendisse ut lacus sagittis, molestie sem quis, ullamcorper elit. In sit amet erat tincidunt, tincidunt velit eget, pellentesque felis. Integer eget mauris nec turpis eleifend malesuada. Ut imperdiet sit amet nisl id pretium. Mauris blandit, nisl eget condimentum facilisis, augue nibh venenatis justo, id ultricies neque velit ut nisi. Fusce porttitor libero vitae tortor imperdiet scelerisque. Mauris quis ipsum eu neque consequat rhoncus. Morbi pellentesque imperdiet accumsan. Aliquam ut libero in nisi maximus tempor at quis augue. Nunc felis velit, varius aliquet neque eu, pretium semper odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean aliquam, massa a dictum luctus, nulla augue viverra sem, fermentum pretium diam orci ornare sapien. Nunc mauris arcu, auctor in facilisis eget, sollicitudin quis est.</p>
    <p>Morbi neque libero, auctor sagittis consequat nec, egestas vel est. Sed pharetra euismod auctor. Morbi in ex maximus, egestas nisl non, ultricies diam. Vivamus eu nunc sit amet orci ultricies lacinia. Donec sit amet eleifend ex. In nec ullamcorper libero. Ut sollicitudin, sem sed consectetur tempus, odio felis molestie sem, non ornare urna purus vitae nisl. Sed euismod consequat odio, nec cursus justo. Sed nec leo placerat, facilisis tellus at, aliquam elit. Etiam lacinia eget felis sed sodales. Praesent vitae finibus ex. Curabitur vitae odio vel dolor efficitur aliquam et suscipit nisl. In blandit lectus magna, eget sollicitudin ligula luctus quis.</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomePage'
})
</script>

<style scoped>
#container {
  display: flex;
  justify-content: center;
  width: 100%;
}

img {
  width: 80%;
  height: auto;
}

h1 {
  text-align: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 80px;
  line-height: 1;
}

@media (max-width: 1024px) {
  h1 {
    font-size: 30px;
  }

  img {
    width: 30%;
  }
}
</style>
