<template>
  <div>
    <div class="top" style="margin-top: 70px">
      <h1 class="teamDesc">Team Description Paper</h1>
    </div>

    <div>
      <v-row style="padding: 0 60px; margin-top: 70px">
        <v-col class="top" lg="10" md="12" 
              data-aos="fade-left"
              data-aos-duration="1000">
          Download the team description paper
        </v-col>

        <v-col class="d-flex justify-end ">
          <a href="file:///../../../public/Publications/Files/Team_Description_Paper_IRIS_2021.pdf" target="_blank">
            <v-btn
              depressed
              color="#6DDCCF"
              :loading="loading4"
              :disabled="loading4"
              @click="loader = 'loading4'"
              lg="2"
              md="12"
              rounded
              Plain
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Download
            </v-btn></a
          >
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  // methods: {
  //     readFiles(){
  //         window.open("eam_Description_Paper_IRIS_2021.pdf", "_blank");
  //     }
  // },

  data() {
    return {
      loader: null,
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false,
      loading5: false,
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
}

.top .teamDesc {
  display: inline-block;
  font-size: 24px;
  color: #1cc3b2;
  padding-right: 215px;
  padding-left: 115px;
  position: relative;
  margin-bottom: 15px;
}

.top {
  max-width: 770px;
}

.teamDesc::after {
  content: "";
  display: block;
  height: 2px;
  min-width: 100px;
  background-color: #3a414e;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.teamDesc::before {
  content: "";
  display: block;
  height: 2px;
  min-width: 200px;
  background-color: #3a414e;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}

p {
  font-size: 19px;
}

.descPaper {
  font-size: 19px;
  color: #1cc3b2;
}

/* Loaders */
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>