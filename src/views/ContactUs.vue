<template>
  <div  class="container-fluid" style="height: 100%; padding-top: 100px">
    <Header/>
    <Form />
    <Maps />
  </div>
</template>

<script>
import Header from "@/components/ContactUs/Header.vue";
import Form from "@/components/ContactUs/Form.vue";
import Maps from "@/components/ContactUs/Maps.vue";

export default {
  name: "Contact Us",
  components: {
    Header,
    Form,
    Maps,
  },
};
</script>

<style>
</style>