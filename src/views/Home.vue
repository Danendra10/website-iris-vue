<template>
  <div class="container-fluid" style="height: 100%">
    <Page1 />
    <Page2 />
    <Page3 />
    <Page4 />
    <Page5   />
    <Page6   />
    <Page7 />>
  </div>
</template>

<style>
</style>

<script>
// import HelloWorld from '../components/HelloWorld'
import Page1 from "@/components/Home/Home1.vue";
import Page2 from "@/components/Home/AboutTeam.vue";
import Page3 from "@/components/Home/IrisNewsCarousel.vue";
import Page4 from "@/components/Home/WhatsIrisOn.vue";
import Page5 from "@/components/Home/DivofIris.vue";
import Page6 from "@/components/Home/ContactUs.vue";
import Page7 from '@/components/Home/maps.vue'


export default {
  name: "Home",

  components: {
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7
  },
};
</script>
