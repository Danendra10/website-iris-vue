<template>
  <div class="container-fluid">
    <div class="row" style="height: 100vh">
      <div
        class="
          col-lg-6 col-md-12
          pot-rel
          d-flex
          flex-column
          justify-md-center justify-sm-center
        "
      >
        <img v-for="imgs in robots"
        :key="imgs.id" :src="imgs.src" alt="" :class="imgs.class" />
      </div>

      <div
        class="
          col-lg-6 col-md-12
          d-flex
          flex-column
          justify-md-center justify-sm-center
          container-fluid
        "
        id="right-content"
      >
        <div class="container-fluid">
          <iframe
            src="https://www.youtube.com/embed/b6oTI_k6TFU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="iframe-yt"
          ></iframe>
        </div>
      </div>
    </div>
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
          src: require("../../public/Home/Robots/left/Asset4.png"),
          class: "roboBack",
          d_aos: "fade",
        },
        {
          id: 2,
          text: "roboFront",
          src: require("../../public/Home/Robots/left/Asset3.png"),
          class: "roboFront",
          d_aos: "fade-right",
        },
        {
          id: 3,
          text: "Vector1",
          src: require("../../public/Home/Robots/left/Vector.png"),
          class: "Vector1",
          d_aos: "fade",
        },
        {
          id: 4,
          text: "Vector2",
          src: require("../../public/Home/Robots/left/Vector.png"),
          class: "Vector2",
          d_aos: "fade",
        },
        {
          id: 5,
          text: "Star",
          src: require("../../public/Home/Robots/left/star.png"),
          class: "Star",
          d_aos: "fade",
        },
        {
          id: 6,
          text: "Wheel",
          src: require("../../public/Home/Robots/left/Wheel.png"),
          class: "Wheel",
          d_aos: "fade",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$lg: 1904px;
$md: 1000px;
$sm: 750px;
$xs: 550px;


.pot-rel {
  position: relative !important;
  max-width: 100%;
  .roboFront,
  .roboBack,
  .Vector1,
  .Vector2,
  .Star,
  .Wheel {
    position: absolute;
  }
  .roboBack {
    left: 141px;
    top: 10px;
    z-index: 1;
  }
  .roboFront {
    left: 326px;
    top: 2px;
    z-index: 5;
  }
  .Vector1 {
    left: 220px;
    top: 226px;
    z-index: 6;
  }
  .Vector2 {
    left: 133px;
    top: 170px;
    z-index: 3;
  }
  .Star {
    left: 452px;
    top: -100px;
    z-index: 6;
  }
  .Wheel {
    left: 40px;
    top: 180px;
    z-index: 6;
  }
}

.iframe-yt {
    width: 560px;
    height: 315px;
    position: absolute;
    top: 281px;
    border-radius: 2%;
}

#right-content {
  @media (max-width: 989px) {
    margin-top: 500px;
  }

  @media (max-width: 631px) {
    margin-top: 80px;
  }
}
</style>