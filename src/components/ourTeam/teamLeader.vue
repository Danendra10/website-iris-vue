<template>
  <div class="leader-content revealOnScroll">
    <div class="row" v-for="i in datas" :key="i.id">
      <div class="col-lg-6 col-sm-12">
        <div
          class="
            container
            justify-content-lg-end justify-content-md-center
            d-flex
            w-100
            h-100
          "
          style="margin-bottom: 100px"
        >
          <div class="flex-column">
            <div class="card" style="width: 18rem">
              <img :src="i.src" alt="" class="card-img-top" />
              <div class="card-body">
                <p class="card-text"></p>
                <a href="https://www.instagram.com/krisnapram/">
                  <img src="assets/img/Teams/insta.png" alt="" />
                </a>
              </div>
            </div>
            <div class="content-text justify-content-center">
              <h2 class="flex-column name-card justify-content-center">
                Krisna Pramudya Dharma
              </h2>
              <p>Head Chief of IRIS ITS</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          col-lg-6 col-sm-12
          content-caption
          justify-content-center
          align-items-lg-start align-items-md-center
          d-flex
          flex-column
          revealOnScroll
        "
      >
        <h3>"Learn from the basics, then you will know everything"</h3>
        <h5>~ Krisna Pramudya Dharma ~</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      datas: [
        {
          id: 1,
          name: "Firlana Baiturrochman",
          role: "Head Chief of Mechanical Division at IRIS ITS",
          src: "../../../public/OurTeam/Teams/Leader/teamLeader.png",
          accounts: 
          {
            ig: "https://www.instagram.com/firlanabaiturrochman/",
            linkedin:"https://www.linkedin.com/in/firlana-baiturrochman-7716b0196/",
            mail: "mailto:fibaroh11768910@gmail.com",
          },
          imgs:
          {
              ig: require("../../../public/OurTeam/Teams/insta.png"),
              linkedin: require("../../../public/OurTeam/Teams/linkedin.png"),
              email: require("../../../public/OurTeam/Teams/email.png")
          },
        },
      ],
    };
  },
};
</script>

<style>
</style>