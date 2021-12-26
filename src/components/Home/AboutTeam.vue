<template>
  <div style="margin-top: 20%">
    <div class="d-flex justify-center">
      <div class="left-aboutteam mr-5"></div>
      <h2 class="mx-5 toFadeOnScroll">About Team</h2>
      <div class="right-aboutteam ml-5"></div>
    </div>

    <v-row>
      <v-col
      cols="6"
      lg="6"
      sm="12"
      class="left-content">
        <p>ITS' Robot with Intellegence System, or known as IRIS is Institut Teknologi Sepuluh Nopember (ITS)
                    Robotic team focusing on autonomous soccer playing robots. Since it’s development in 2014, IRIS ITS
                    has competed in the soccer robotic league since 2017 and managed to get a lot of achivements. The
                    team consist of students of Institut Teknologi Sepuluh Nopember Surabaya. To build a great team and
                    a robot that is capable of playing football, the team is divided into 4 divisions which are
                    mechanical division, electrical division, programming division, and official division.</p>
      </v-col>

      <v-col
      cols="6"
      lg="6"
      sm="12"
      class="right-content">
        <h2>What is</h2>
        <h2 class="mt-5">IRIS?</h2>
        <v-img
        v-for="pict in rightRobo"
        :key="pict.id"
        :src="pict.src"
        :class="pict.class"
        style="transform: scale(1.5)">
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: ()=>{
    return{
      rightRobo:[
        {
          id: 1,
          name: "robo",
          src: require("../../../public/Home/AboutTeam/robo.png"),
          class: "robo"
        },
        {
          id: 2,
          name: "roda",
          src: require("../../../public/Home/AboutTeam/roda.png"),
          class: "roda"
        },
        {
          id: 3,
          name: "vector",
          src: require("../../../public/Home/AboutTeam/Vector.png"),
          class: "vector"
        }
      ]
    }
  }
};
</script>

<style>
.left-aboutteam {
  width: 15%;
  height: 1px;
  border: 1px solid rgba(112, 112, 112, 1);
  background: rgba(112, 112, 112, 1);
  margin-top: 20px;
}

.right-aboutteam {
  width: 65%;
  height: 1px;
  border: 1px solid rgba(112, 112, 112, 1);
  background: rgba(112, 112, 112, 1);
  margin-top: 20px;
}

.left-content p {
  font-family: Montserrat;
  font-style: normal;
  font-weight: lighter !important;
  font-size: 20px;
  line-height: 60px;
  text-align: justify;
  margin: 0 auto;
  /* width: 800px; */
  width: auto;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
}

.right-content h2 {
  margin: 10px auto;
  font-weight: bold;
  font-family: Montserrat;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
}

.robo {
  position: absolute;
  top: 1118px;
  left: 1700px;
  z-index: 3;
}

.vector {
  position: absolute;
  top: 1400px;
  left: 1650px;
  z-index: 2;
}

.roda {
  position: absolute;
  top: 1350px;
  left: 1500px;
  z-index: 3;
}
</style>