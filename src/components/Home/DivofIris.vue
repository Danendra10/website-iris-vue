<template>
  <v-row>
    <v-col cols="12" class="d-flex flex-column justify-end">
      <h1>DIVISION OF IRIS</h1>
    </v-col>
    <v-col cols="12" class="d-flex justify-end"> </v-col>

    <v-col
      cols="3"
      class="d-flex flex-column justify-center"
      v-for="items in divs"
      :key="items.id"
    >
    ini msuk gasi
    <v-app id="inspire">
      <v-hover v-slot:default="{ hover }">
        <v-card class="mx-auto" color="grey lighten-4" :href="items.href">
          <v-img :aspect-ratio="16 / 9" :src="items.src">
            <v-expand-transition>
              <div
                v-if="hover"
                class="
                  d-flex
                  transition-fast-in-fast-out
                  orange
                  darken-2
                  v-card--reveal
                  display-3
                  white--text
                "
                style="height: 100%"
              >
              <h4>{{ items.title }}</h4>
              <p> {{ items.desc }}</p>
              </div>
            </v-expand-transition>
          </v-img>
        </v-card>
      </v-hover>
    </v-app>
    </v-col>
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
          desc: "The Electrical Division is responsible to determine and take control on the electrical system of our robots."
        },
        {
          id: 2,
          src: require("../../../public/Home/Divs/Mechanical.png"),
          href: "#",
          name: "Mechanical",
          desc: "The mechanic division is responsible on manufacturing robots, designing robot’s body shape and even assembling it."
        },
        {
          id: 3,
          src: require("../../../public/Home/Divs/Programming.png"),
          href: "#",
          name: "Programming",
          desc: "The Programming Division is responsible to make a perfect robots, we need to create a complex code on it. And it's programming division turn to take part."
        },
        {
          id: 4,
          src: require("../../../public/Home/Divs/Official.png"),
          href: "#",
          name: "Official",
          desc: "The official division is a division that do all administrative task, such as finance, sponsorship, branding and arrange the accomodation of our team during competition"
        },
      ],
    };
  },
};
</script>

<style>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
}

.v-application--wrap {
    min-height: 100vh;
    justify-content: center;
}
</style>