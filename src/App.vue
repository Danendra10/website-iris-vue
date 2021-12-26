<template>
  <v-app>
    
    <Navbar />
    <!-- <Navigation /> -->
    
      <router-view />

    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
// import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: { 
    Navbar,
    // Navigation,
    Footer
  }
};
</script>
