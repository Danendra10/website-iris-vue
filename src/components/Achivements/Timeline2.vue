<template>
  <div style="background-color: #6ddccf" class="px-5">
    <v-timeline :reverse="reverse" dense>
      <v-timeline-item
        v-for="n in achivements"
        :key="n.id"
        fill-dot
        class=" d-flex align-center small"
        :color="n.dotsColor"
        :small="n.sizing" 
      >
      <!-- note: masih perlu di perbaiki untuk ukuran dotsnya -->
        <div class="d-flex flex-row-reverse" :class="n.style">
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
          title: "2018",
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
          title: "1st Place KRSBI Regional IV",
          dotsColor: "#65A7DB",
          style: "achivements my-4",
          sizing: "small",
        },
        {
          id: 4,
          title: "Best Strategy KRSBI Regional IV",
          dotsColor: "#65A7DB",
          style: "achivements my-4",
          sizing: "small",
        },
        {
          id: 5,
          title: "2nd Place KRSBI Nasional",
          dotsColor: "#65A7DB",
          style: "achivements my-4",
          sizing: "small",
        },
        {
          id: 6,
          title: "FIRA RoboWorldCup",
          dotsColor: "#65A7DB",
          style: "contestTitle my-4",
          sizing: "small",
        },
        {
          id: 7,
          title: "1st Place Passing Challenge",
          dotsColor: "#65A7DB",
          style: "achivements my-4",
          sizing: "small",
        },
        {
          id: 8,
          title: "3rd Place Obstacle Avoidance Challenge",
          dotsColor: "#65A7DB",
          style: "achivements my-4",
          sizing: "small",
        },
        {
          id: 9,
          title: "3rd Place Localozation Challenge",
          dotsColor: "#65A7DB",
          style: "achivements my-4",
          sizing: "small",
        },
        {
          id: 10,
          title: "2018 Recap",
          dotsColor: "#151131",
          style: "recap my-4",
          sizing: "small",
        },
        {
          id: 11,
          title: "2019",
          dotsColor: "#151131",
          style: "nextYear",
          sizing: "large",
        },
      ],
    };
  },
};
</script>

<style>
.transparent {
  background-color: rgba(0, 0, 0, 0) !important;
  border-color: transparent !important;
}

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

  color: #151131;
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
</style>