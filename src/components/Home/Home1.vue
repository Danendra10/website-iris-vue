<template>
  <div style="padding: 0!important; height: 100vh">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      class="top-background"
    >
      <path
        fill="#0099ff"
        fill-opacity="1"
        d="M0,192L80,186.7C160,181,320,171,480,181.3C640,192,800,224,960,229.3C1120,235,1280,213,1360,202.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      ></path>
    </svg>
    <v-row class="d-flex justify-center align-center" style="height: 100%">
      <v-col cols="6" data-aos="fade" class="pot-rel">
        <v-img
          v-for="i in robots"
          :key="i.id"
          :src="i.src"
          :class="i.class"
          :data-aos="i.d_aos"
          data-aos-duration="3000"
          style="transform: scale"
        ></v-img>
      </v-col>

      <v-col cols="6">
        <div class="container-fluid">
          <iframe
            src="https://www.youtube.com/embed/b6oTI_k6TFU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="iframe-yt"
          ></iframe>
          <img src="assets/img/HomePage/Vector-right.png" alt="" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      robots: [
        {
          id: 1,
          text: "roboBack",
          src: require("../../../public/Home/Robots/left/Asset4.png"),
          class: "roboBack",
          d_aos: "fade",
        },
        {
          id: 2,
          text: "roboFront",
          src: require("../../../public/Home/Robots/left/Asset3.png"),
          class: "roboFront",
          d_aos: "fade-right",
        },
        {
          id: 3,
          text: "Vector1",
          src: require("../../../public/Home/Robots/left/Vector.png"),
          class: "Vector1",
          d_aos: "fade",
        },
        {
          id: 4,
          text: "Vector2",
          src: require("../../../public/Home/Robots/left/Vector.png"),
          class: "Vector2",
          d_aos: "fade",
        },
        {
          id: 5,
          text: "Star",
          src: require("../../../public/Home/Robots/left/star.png"),
          class: "Star",
          d_aos: "fade",
        },
        {
          id: 6,
          text: "Wheel",
          src: require("../../../public/Home/Robots/left/Wheel.png"),
          class: "Wheel",
          d_aos: "fade",
        },
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;0,800;0,900;1,600;1,700;1,800;1,900&display=swap");

.top-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  opacity: 0.5;
}

.bottom-background {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  opacity: 0.5;
}

.pot-rel{
    position: relative;
}
.roboFront,
.roboBack,
.Vector1,
.Vector2,
.Star,
.Wheel {
  position: absolute;
}
.roboBack {
  left: 289px;
  top: -157px;
  z-index: 1;
}
.roboFront {
  left: 434px;
  top: -205px;
  z-index: 5;
}
.Vector1 {
  left: 328px;
  top: 19px;
  z-index: 6;
}
.Vector2 {
  left: 241px;
  top: -34px;
  z-index: 3;
}
.Star {
  left: 590px;
  top: -276px;
  z-index: 6;
}
.Wheel {
  left: 148px;
  top: -37px;
  z-index: 6;
}
.iframe-yt {
  width: 560px;
  height: 315px;
  position: absolute;
  top: 281px;
  border-radius: 2%;
}
</style>