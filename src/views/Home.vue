<template>
  <div>
    <Page1 />
    <Page2 />
  </div>
</template>

<style>
</style>

<script>
// import HelloWorld from '../components/HelloWorld'
import Page1 from "@/components/Home1.vue";
import Page2 from "@/components/AboutTeam.vue";

export default {
  name: "Home",

  components: {
    Page1,
    Page2,
  },
};
</script>
