<template>
  <div style="padding: 50px 100px">
    <v-row>
      <v-col class="d-flex align-center col-lg-6">
        <img src="../../../public/Achivements/divs-left.png" alt="" class="" />
      </v-col>

      <v-col class="d-flex justify-end col-lg-6">
        <img src="../../../public/Achivements/its-dll.png" alt="" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => {},
};
</script>

<style>
.top {
  max-width: 770px;
}

.top .top-img {
  display: inline-block;
  padding-right: 115px;
  position: relative;
  margin-bottom: 15px;
}

.top .top-img::before {
  content: "";
  display: block;
  height: 20px;
  min-width: 100px;
  background-color: #3a414e;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}

.top .top-img::after {
  content: "";
  display: block;
  height: 20px;
  min-width: 100px;
  background-color: #3a414e;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
</style>