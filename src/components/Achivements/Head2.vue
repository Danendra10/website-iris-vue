<template>
  <div>
    <v-row>
      <v-col lg6 md12 class="p-relative">
        <img src="../../../public/Achivements/star1.png" alt="" class="px"/>
        <img src="../../../public/Achivements/star2.png" alt="" class="pos"/>
      </v-col>

      <v-col lg6 md12>
        <h1>Achivements</h1>
        <p class="mt-5">
          IRIS have so many achievement from nationals and international
          competition througout the year since 2017
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
.px{
  padding-right: 100px;
  padding-left: 100px;
}
.pos{
  position: relative;
}
h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 8vw;
    line-height: 98px;
    letter-spacing: 10px;
    color: #120d31;
}
p {
    font-family: sans-serif !important;
    font-style: normal;
    font-weight: lighter;
    font-size: 3vw;
    line-height: 50px;
    text-align: justify;
    color: #000000;
}
/* @media(max-width: 960px){
  h1{
    font-size: 77px;
  }
  .px{
    padding-left: 339px;
    padding-right: 339px;
  }
}
@media(max-width: 579px){
  h1{
    font-size: 70px;
  }
  p{
    font-size: 22px;
  }
  .px{
    padding-left: 150px;
    padding-right: 150px;
  }
}
@media(max-width: 375px){
  h1{
    font-size: 41px;
  }
  .px{
    padding-left: 80px;
    padding-right: 0px;
  }
} */
</style>