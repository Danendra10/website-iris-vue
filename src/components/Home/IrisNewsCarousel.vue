<template>
  <v-container fluid>
    <carousel :autoplay="true">
      <v-img
        v-for="carousel in carousel"
        :key="carousel.id"
        :src="carousel.src"
        :nav="false"
      >
      </v-img>
    </carousel>
  </v-container>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: {
    carousel,
  },
  data: () => {
    return {
      carousel: [
        {
          id: 1,
          name: "fira-2018",
          src: require("../../../public/Home/News/fira2018.jpg"),
        },
        {
          id: 2,
          name: "kri-2021",
          src: require("../../../public/Home/News/fira2018c.jpg"),
        },
        {
          id: 3,
          name: "robocup-2021",
          src: require("../../../public/Home/News/fira2018c2.jpg"),
        },
        {
          id: 4,
          name: "robocup-2021",
          src: require("../../../public/Home/News/fira2018c3.jpg"),
        },
      ],
    };
  },
};
</script>

<style>
</style>