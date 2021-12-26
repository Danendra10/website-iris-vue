<template>
  <v-app-bar app color="primary" dark style="z-index: 9999999">
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="../../public/logos/navbar.png"
        transition="scale-transition"
        width="40"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn href="/" text>
      <span class="mr-4">Home</span>
    </v-btn>

    <v-btn href="/publications" text>
      <span class="mr-4">Publication</span>
    </v-btn>

    <v-btn href="/achivements" text>
      <span class="mr-4">Achivement</span>
    </v-btn>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" text> Competitions </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="link in achivements"
          :key="link.text"
          router
          :href="link.links"
          target="_blank"
        >
          <v-list-item-title>
            {{ link.text }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" text> History </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="link in history"
          :key="link.text"
          router
          :to="link.links"
        >
          <v-list-item-title>
            {{ link.text }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" text> Find Out </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="link in FindOut"
          :key="link.text"
          router
          :to="link.links"
        >
          <v-list-item-title>
            {{ link.text }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
    data: () => {
    return {
      drawer: false,
      achivements: [
        { 
          text: "KRI", 
          links: "https://kontesrobotindonesia.id/index.html" 
        },
        { 
          text: "RoboCup", 
          links: "https://www.robocup.org" 
        },
        { 
          text: "FIRA RoboWorldCup", 
          links: "https://firaworldcup.org/ " 
        },
      ],
      history: [
        { 
          text: "Team", 
          links: "/comingsoon" 
        },
        { 
          text: "Robots", 
          links: "/comingsoon" 
        },
      ],
      FindOut: [
        { 
          text: "Iris Edu", 
          links: "/comingsoon" 
        },
        { 
          text: "Iris News", 
          links: "/comingsoon" 
        },
        { 
          text: "Our Team", 
          links: "/comingsoon" 
        },
        { 
          text: "Contact Us", 
          links: "/contactus"
        },
      ],
    };
  },
};
</script>

<style>
</style>