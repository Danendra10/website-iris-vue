<template>
  <div style="background-color: #120D31;" class="px-5">
    <v-timeline 
        dense
        >
      <v-timeline-item
        v-for="n in achivements"
        :key="n.id"
        fill-dot
        class="d-flex align-center"
        :color="n.dotsColor"
        :small="n.sizing" 
      >
      <!-- note: masih perlu di perbaiki untuk ukuran dotsnya -->
        <div class="d-flex" :class="n.style">
          {{ n.title }}
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      reverse: "reverse",
      achivements: [
        {
          id: 1,
          title: "2017",
          dotsColor: "#65A7DB",
          style: "yearTitle my-4",
          sizing: "large",
        },
        {
          id: 2,
          title: "Kontes Robot Indonesia",
          dotsColor: "#65A7DB",
          style: "contestTitle my-4",
          sizing: "small",
        },
        {
          id: 3,
          title: "3rd Place in “KRSBI Regional IV”",
          dotsColor: "#65A7DB",
          style: "achivements my-4",
          sizing: "small",
        },
        {
          id: 4,
          title: "Best Robot Design in “KRSBI Regional IV”",
          dotsColor: "#65A7DB",
          style: "achivements my-4",
          sizing: "small",
        },
        {
          id: 5,
          title: "Best Robot Design on “KRSBI National”",
          dotsColor: "#65A7DB",
          style: "achivements my-4",
          sizing: "small",
        },
        {
          id: 6,
          title: "Best Inovation on “KRSBI National”",
          dotsColor: "#65A7DB",
          style: "achivements my-4",
          sizing: "small",
        },    
        {
          id: 10,
          title: "2017 Recap",
          dotsColor: "#65A7DB",
          style: "recap my-4",
          sizing: "small",
        },
        {
          id: 11,
          title: "2018",
          dotsColor: "#65A7DB",
          style: "nextYear",
          sizing: "large",
        },
      ],
    };
  },
};
</script>

<style>

.yearTitle {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 59px;
  text-align: right;

  color: #ffffff;
}

.contestTitle {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  text-align: right;

  color: #ffffff;
}

.achivements {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  text-align: right;
  font-feature-settings: "kern" off;

  color: #F6FDFC!important;
}

.recap,
.nextYear {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  text-align: right;

  color: #ffffff;
}

.theme--light.v-timeline::before {
    background: rgba(255, 255, 255, 1);
}
</style>