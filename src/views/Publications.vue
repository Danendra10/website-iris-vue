<template>
  <div class="container-fluid" style="height: 100%">
    <Header />
    <TeamDesc />
    <Papers/>
  </div>
</template>

<script>
import Header from "@/components/Publications/Head.vue";
import TeamDesc from "@/components/Publications/TeamDescPaper.vue";
import Papers from "@/components/Publications/Papers.vue";

export default {
  name: "Publications",
  components: {
    Header,
    TeamDesc,
    Papers,
  },
};
</script>

<style>
</style>