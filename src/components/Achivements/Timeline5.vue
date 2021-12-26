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
        small
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
          title: "2021",
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
          title: "Second Place on 'KRSBI Regional II'",
          dotsColor: "#65A7DB",
          style: "achivements my-4",
          sizing: "small",
        },
        {
          id: 4,
          title: "Second Place on National KRSBI",
          dotsColor: "#65A7DB",
          style: "achivements my-4",
          sizing: "small",
        },
        {
          id: 5,
          title: "Best Design on National KRSBI",
          dotsColor: "#65A7DB",
          style: "achivements my-4",
          sizing: "small",
        },
        {
          id: 6,
          title: "Robocup",
          dotsColor: "#65A7DB",
          style: "contestTitle my-4",
          sizing: "small",
        },
        {
          id: 7,
          title: "Sixth Place Technical Challenge RoboCup",
          dotsColor: "#65A7DB",
          style: "achivements my-4",
          sizing: "small",
        },
        {
          id: 8,
          title: "Seventh Place Scientific Challenge RoboCup",
          dotsColor: "#65A7DB",
          style: "achivements my-4",
          sizing: "small",
        },
        {
          id: 9,
          title: "Robocup Asia",
          dotsColor: "#65A7DB",
          style: "contestTitle my-4",
          sizing: "small",
        },
        {
          id: 10,
          title: "Second Place Video Challenge",
          dotsColor: "#65A7DB",
          style: "achivements my-4",
          sizing: "small",
        },
        {
          id: 11,
          title: "Fourth Place Scientific Challenge",
          dotsColor: "#65A7DB",
          style: "achivements my-4",
          sizing: "small",
        },
        {
          id: 12,
          title: "2019 Recap",
          dotsColor: "#65A7DB",
          style: "recap my-4",
          sizing: "small",
        },
        {
          id: 13,
          title: "2020",
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