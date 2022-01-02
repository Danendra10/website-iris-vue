<template>
  <v-footer padless>
    <v-col class="text-center" lg5 md12>
      <strong>Copyright &copy; {{ new Date().getFullYear() }}</strong>
    </v-col>
    <v-col class="text-left d-flex" lg7 md12>
      <a 
      v-for="image in socialMedias" 
      :href="image.link" 
      :key="image.id"
      target="_blank"
      class="mx-1">
        <img 
        :src="image.imgLink" />
      </a>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data: () => {
    return {
      drawer: false,
      socialMedias: [
        {
          id: 1,
          text: "Youtube",
          imgLink: require("../../public/Footer/yt.png"),
          link: "https://www.youtube.com/channel/UCOmBeTiru1hFtOiGXneI_Gw",
        },
        {
          id: 2,
          text: "Instagram",
          imgLink: require("../../public/Footer/ig.png"),
          link: "https://www.instagram.com/iris.itsrobotic/",
        },
        {
          id: 3,
          text: "Linkedin",
          imgLink: require("../../public/Footer/in.png"),
          link: "https://www.linkedin.com/company/iris-its/mycompany/",
        },
        {
          id: 4,
          text: "Email",
          imgLink: require("../../public/Footer/gmail.png"),
          link: "mailto:iris.krsbi@gmail.com",
        },
      ],
    };
  },
};
</script>

<style>
</style>