<template>
  <v-row>
    <v-col cols="12" class="d-flex flex-column justify-end align-end px-10">
      <h1>DIVISION OF IRIS</h1>
    </v-col>
    <v-col cols="12" class="d-flex justify-end align-end px-10"> 
      <img src="../../../public/Home/Divs/divs.png" alt="" >
    </v-col>

    <div class="container" style="background-color: #f7f6f6">
      <div class="row">
        <div
          v-for="i in divs"
          :key="i.id"
          class="
            col-lg-3 col-sm-6
            revealtoRight
            justify-content-center
            align-items-center
            d-flex
          "
          style="margin-bottom: 10px"
        >
          <a href="#">
            <div class="cards p-0">
              <div class="cards-image">
                <img
                  :src="i.src"
                  alt="..."
                  class="toSpinOnScroll"
                />
              </div>
              <div class="cards-content d-flex flex-column align-items-center">
                <h4 class="pt-2">{{ i.name }}</h4>
                <h5 style="color: #000">
                  {{ i.desc }}
                </h5>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </v-row>
</template>

<script>
export default {
  data: () => {
    return {
      divs: [
        {
          id: 1,
          src: require("../../../public/Home/Divs/Electrical.png"),
          href: "#",
          name: "Electrical",
          desc: "The Electrical Division is responsible to determine and take control on the electrical system of our robots.",
        },
        {
          id: 2,
          src: require("../../../public/Home/Divs/Mechanical.png"),
          href: "#",
          name: "Mechanical",
          desc: "The mechanic division is responsible on manufacturing robots, designing robot’s body shape and even assembling it.",
        },
        {
          id: 3,
          src: require("../../../public/Home/Divs/Programming.png"),
          href: "#",
          name: "Programming",
          desc: "The Programming Division is responsible to make a perfect robots, we need to create a complex code on it. And it's programming division turn to take part.",
        },
        {
          id: 4,
          src: require("../../../public/Home/Divs/Official.png"),
          href: "#",
          name: "Official",
          desc: "The official division is a division that do all administrative task, such as finance, sponsorship, branding and arrange the accomodation of our team during competition",
        },
      ],
    };
  },
};
</script>

<style>
.cards {
  position: relative;
  padding: 0;
  margin: 0 !important;
  border-radius: 20px;
  overflow: hidden;
  max-width: 280px;
  max-height: 340px;
  cursor: pointer;
  border: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.cards .cards-image {
  width: 100%;
  max-height: 340px;
}

.cards .cards-image img {
  width: 100%;
  max-height: 340px;
  object-fit: cover;
}

.cards .cards-content {
  position: absolute;
  bottom: -180px;
  color: #fff;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(15px);
  min-height: 140px;
  width: 100%;
  transition: bottom 0.4s ease-in;
  box-shadow: 0 -10px 10px rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.cards:hover .cards-content {
  bottom: 0px;
}

.cards:hover .cards-content h4,
.cards:hover .cards-content h5 {
  transform: translateY(10px);
  opacity: 1;
}

.cards .cards-content h4,
.cards .cards-content h5 {
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
  transition: 0.8s;
  font-weight: 500;
  opacity: 0;
  transform: translateY(-40px);
  transition-delay: 0.2s;
}

.cards .cards-content h5 {
  transition: 0.5s;
  font-weight: 200;
  font-size: 0.8rem;
  letter-spacing: 2px;
}

.cards .cards-content .social-icons {
  list-style: none;
  padding: 0;
}

.cards .cards-content .social-icons li {
  margin: 10px;
  transition: 0.5s;
  transition-delay: calc(0.15s * var(--i));
  transform: translateY(50px);
}

.cards:hover .cards-content .social-icons li {
  transform: translateY(20px);
}

.cards .cards-content .social-icons li a {
  color: #fff;
}

.cards .cards-content .social-icons li a span {
  font-size: 1.3rem;
}

@media (max-width: 991.5px) {
  .container {
    margin-top: 20px;
  }

  .container .row .col-lg-4 {
    margin: 20px 0px;
  }
}

.margin-top {
  margin-top: 100px;
}

.robots.col-md-12,
.robots.col-sm-12 {
  margin-left: 90px;
}

.black-slider {
  width: 100vh;
  height: 100vh;
  background: #000;
  transform: skewX(-45deg);
  display: block;
}
</style>