<template>
  <nav>
    <v-app-bar
      app
      color="primary"
      dark
      style="z-index: 9999999"
      class="flex-sm-and-up"
    >
      <v-btn
        text
        @click="mobileDrawer = !mobileDrawer"
        class="px-5 hidden-md-and-up"
      >
        <i class="fas fa-bars"></i>
      </v-btn>

      <a class="d-flex align-center mx-5">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../../public/logos/navbar.png"
          transition="scale-transition"
          width="40"
        />
      </a>

      <v-spacer></v-spacer>
      <div class="hidden-md-and-down">
        <v-btn href="/" text>
          <i class="fas fa-home"></i>
          <span class="mr-4">Home</span>
        </v-btn>

        <v-btn href="/publications" text>
          <i class="fas fa-book-open"></i>
          <span class="mr-4">Publication</span>
        </v-btn>

        <v-btn href="/achivements" text>
          <i class="fas fa-medal"></i>
          <span class="mr-4">Achivement</span>
        </v-btn>

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" text>
              <i class="fas fa-trophy"></i>
              <span class="mr-4">Competitions</span>
            </v-btn>
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
            <v-btn v-bind="attrs" v-on="on" text>
              <i class="fas fa-history"></i>
              <span class="mr-4">History</span>
            </v-btn>
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
            <v-btn v-bind="attrs" v-on="on" text>
              <i class="fas fa-search"></i>
              <span class="mr-4">Find Out</span>
            </v-btn>
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
      </div>
    </v-app-bar>

    <v-navigation-drawer app v-model="mobileDrawer" class="d-flex flex-row hidden-md-and-up">
      <br />
      <br />
      <br />
      <v-list-item>
        <v-btn class="mx-2" fab small @click="mobileDrawer = !mobileDrawer" icon>
          <v-icon dark> mdi-cancel </v-icon>
        </v-btn>
      </v-list-item>
      <v-list dense nav>
        <v-list-item>
          <v-btn href="/" text>
            <span class="mr-4">Home</span>
          </v-btn>
        </v-list-item>

        <v-list-item>
          <v-btn href="/publications" text>
            <span class="mr-4">Publication</span>
          </v-btn>
        </v-list-item>

        <v-list-item>
          <v-btn href="/achivements" text>
            <span class="mr-4">Achivement</span>
          </v-btn>
        </v-list-item>

        <v-list-item>
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
        </v-list-item>

        <v-list-item>
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
        </v-list-item>

        <v-list-item>
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
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => {
    return {
      mobileDrawer: false,
      achivements: [
        {
          text: "KRI",
          links: "https://kontesrobotindonesia.id/index.html",
        },
        {
          text: "RoboCup",
          links: "https://www.robocup.org",
        },
        {
          text: "FIRA RoboWorldCup",
          links: "https://firaworldcup.org/ ",
        },
      ],
      history: [
        {
          text: "Team",
          links: "/comingsoon",
        },
        {
          text: "Robots",
          links: "/comingsoon",
        },
      ],
      FindOut: [
        {
          text: "Iris Edu",
          links: "/comingsoon",
        },
        {
          text: "Iris News",
          links: "/comingsoon",
        },
        {
          text: "Our Team",
          links: "/comingsoon",
        },
        {
          text: "Contact Us",
          links: "/contactus",
        },
      ],
    };
  },
};
</script>

<style>
</style>