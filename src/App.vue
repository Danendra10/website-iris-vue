<template>
  <v-app>
    <Navbar/>

      <router-view />

    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
// import MobileNavbar from "@/components/MobileNavbar";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    // MobileNavbar,
    Footer,
  },
  data: () => {
    return {
      mobileView: true,
      showNav: false,
    };
  },
};
</script>
