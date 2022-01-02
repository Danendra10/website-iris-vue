<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title class="d-flex justify-center" >Cafe Badilico</v-card-title>
    <v-divider class="mx-4"></v-divider>
    <v-card-text  class="text-center" style="color:#000">
      Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    
  }
</script>

<style>

</style>