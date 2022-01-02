<template>
  <div class="container-fluid mt-70" style="margin-top: 5%">
    <section class="ftco-section">
      <div
        class="d-flex flex-row align-items-center iris-news-head"
        style="margin-bottom: 100px"
      >
        <h3 class="title-leader mx-5 toFadeOnScroll">IRIS NEWS</h3>
      </div>
      <div class="container">
        <div class="row toFadeOnScroll">
          <div class="col-md-12">
            <div class="featured-carousel owl-carousel">
              <div class="item">
                <div class="work">
                  <div
                    v-for="imgs in carousel"
                    :key="imgs.id"
                    class="
                      img
                      d-flex
                      align-items-center
                      justify-content-center
                      rounded
                    "
                    :style="imgs.bg"
                  >
                    <a
                      href="#"
                      class="
                        icon
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                    >
                      <span class="ion-ios-search"></span>
                    </a>
                  </div>
                  <div class="text pt-3 w-100 text-center bg1-carousel">
                    <h3>
                      <a href="#">{{ imgs.title }}</a>
                    </h3>
                    <span>Coming Soon...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  components: {},
  data: () => {
    return {
      carousel: [
        {
          id: 1,
          name: "fira-2018",
          src: "background-image: url(../../../public/Home/News/1.png)",
          title: "FIRA RoboWorldCup 2018",
        },
        {
          id: 2,
          name: "kri-2021",
          src: "background-image: url(../../../public/Home/News/2.png)",
          title: "KRI 2021",
        },
        {
          id: 3,
          name: "robocup-2021",
          src: "background-image: url(../../../public/Home/News/2.png)",
          title: "Robocup 2021",
        },
        {
          id: 4,
          name: "robocup-2021",
          src: "background-image: url(../../../public/Home/News/fira2018c3.jpg)",
          title: "",
        },
      ],
    };
  },
};
</script>

<style>

</style>