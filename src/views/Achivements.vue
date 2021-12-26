<template>
  <div>
      <Head/>
      <Head2/>
      <Head3/>
      <Timeline1/>
      <Timeline2/>
      <Timeline3/>
      <Timeline4/>
      <Timeline5/>
  </div>
</template>

<script>
import Head from "@/components/Achivements/Head.vue";
import Head2 from "@/components/Achivements/Head2.vue";
import Head3 from "@/components/Achivements/Head3.vue";
import Timeline1 from "@/components/Achivements/Timeline1.vue";
import Timeline2 from "@/components/Achivements/Timeline2.vue";
import Timeline3 from "@/components/Achivements/Timeline3.vue";
import Timeline4 from "@/components/Achivements/Timeline4.vue";
import Timeline5 from "@/components/Achivements/Timeline5.vue";

export default {
    name: "Achivements",
    components: {
        Head,
        Head2,
        Head3,
        Timeline1,
        Timeline2,
        Timeline3,
        Timeline4,
        Timeline5,
    }
}
</script>

<style>

</style>