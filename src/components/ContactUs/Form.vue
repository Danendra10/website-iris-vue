<template>
  <div id="app">
    <v-row class="px-10">
      <v-col
        lg="6"
        md="12"
        class="d-flex justify-content-center align-items-center"
      >
        <h2
          class="contact-us-title text-lg-start text-md-center text-sm-center"
        >
          Contact Us
        </h2>
      </v-col>

      <v-col
        lg="6"
        md="12"
        class="d-flex justify-content-end align-items-end"
      >
        <img src="../../../public/ContactUs/Group.png" width="20%" alt="" class="d-flex justify-content-end align-items-center spin"/>
      </v-col>
    </v-row>
    <v-app :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" :dark="darkTheme">
      <v-container>
        <v-row>
          <v-col lg="6" md="12">
            <v-layout wrap>
              <v-card
                elevation="4"
                light
                tag="section"
                style="border-radius: 20px; z-index: 0 !important"
              >
                <form
                  class="form-contact contact_form"
                  action="https://iris.its.ac.id/contact"
                  method="POST"
                  id="contactForm"
                >
                  <!-- <input type="hidden" name="_token" value="fuXQYafjK1Lomk5vZ2uwpkkLrm25jwKQ65qV3fzk"> -->
                  <div class="row">
                    <div class="col-6">
                      <div class="form-group">
                        <input
                          class="form-control"
                          name="name"
                          type="text"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <input
                          class="form-control"
                          name="email"
                          type="text"
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <input
                          class="form-control"
                          name="name"
                          type="text"
                          placeholder="Enter subject"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group h-100">
                        <input
                          class="form-control h-100 w-100"
                          name="name"
                          type="text"
                          placeholder="Enter message"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="
                      form-group
                      mt-3
                      d-flex
                      justify-content-end
                      align-items-center
                    "
                  >
                    <v-spacer></v-spacer>
                    <button type="button" class="button">Send Message</button>
                  </div>
                </form>
              </v-card>
            </v-layout>
          </v-col>
          <v-col lg="6" md="12">
            <div
              class="d-flex flex-sm-column flex-md-column flex-lg-row my-5"
              v-for="components in component"
              :key="components.id"
            >
              <div
                class="
                  media
                  justify-content-center
                  align-items-center
                  d-inline-flex
                  m-4
                  my-4
                "
              >
                <img :src="components.src" :alt="components.alt" />
              </div>
              <div class="media contact-info d-flex flex-row">
                <div
                  class="
                    media-body
                    text-sm-center text-md-center text-lg-start
                    justify-content-center
                    d-flex
                    flex-column
                    w-100
                    mx-4
                  "
                >
                  <a :href="components.links"><h3>{{ components.title }}</h3></a>
                  <p class="my-1">{{ components.text }}</p>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  //   data() {
  //     return {
  //       darkTheme: true,
  //       platformName: "Platform name",
  //       password: null,
  //       username: null,
  //     };
  //   },
  data: () => {
    return {
      component: [
        {
          id: 1,
          title: "Address",
          text: "Laboratorium Workshop Lantai II Sekretariat Robotika ITS",
          src: require("../../../public/ContactUs/loc.png"),
          alt: "Address",
          links: "https://goo.gl/maps/xws9Lm77WLrwNdJ27",
        },
        {
          id: 2,
          title: "Phone",
          text: "+62 822-3010-4565",
          src: require("../../../public/ContactUs/phone.png"),
          alt: "Phone",
          links: "sms:+6282230104565",
        },
        {
          id: 3,
          title: "Email",
          text: "iris.krsbi@gmail.com",
          src: require("../../../public/ContactUs/gmail.png"),
          alt: "Email",
          links: "mailto:iris.krsbi@gmail.com",
        },
        {
          id: 4,
          title: "Instagram",
          text: "@iris.itsrobotic",
          src: require("../../../public/ContactUs/insta.png"),
          alt: "Instagram",
          links: "https://www.instagram.com/iris.itsrobotic/",
        },
      ],
    };
  },
};
</script>

<style>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

p,
h1,
h2,
h3,
h4,
h5,
h6,
ul {
  margin: 0;
}

img {
  max-width: 100%;
}

ul {
  padding-left: 0;
  margin-bottom: 0;
}

a {
  text-decoration: none;
}

:focus {
  outline: none;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.inner {
  position: relative;
  width: 435px;
}

.contact-us-title {
  font-style: normal;
  font-weight: bold;
  font-size: 100px;
  line-height: 88px;
  /* identical to box height */

  color: #120d31;
}

form {
  width: 100%;
  position: relative;
  z-index: 9;
  padding: 50px 61px 66px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  -ms-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  -o-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
}

.form-holder {
  position: relative;
  margin-bottom: 21px;
}

.form-group {
  margin-bottom: 35px !important;
}

.form-control {
  border: none;
  /* border-bottom: 1px solid #e6e6e6; */
  display: block;
  width: 100%;
  height: 38px;
  background: none;
  padding: 3px 8px 0px;
  color: rgb(53, 41, 41);
  font-size: 16px;
  background: rgba(232, 225, 240, 1);
  border-radius: 10px;
}

.form-control::-webkit-input-placeholder {
  font-size: 14px;
  color: #999;
  transform: translateY(1px);
}

.form-control::-moz-placeholder {
  font-size: 14px;
  color: #999;
  transform: translateY(1px);
}

.form-control:-ms-input-placeholder {
  font-size: 14px;
  color: #999;
  transform: translateY(1px);
}

.form-control:-moz-placeholder {
  font-size: 14px;
  color: #999;
  transform: translateY(1px);
}

.form-control:focus {
  border-bottom: 1px solid #accffe;
}

.contact-us-footer-title {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 60px;

  color: #ffffff;
}

.contact-us-footer-content {
  font-family: Montserrat;
  font-style: normal;
  font-size: 20px;
  line-height: 60px;
  font-feature-settings: "kern" off;

  color: #151131;
}

.button {
  display: inline-block;
  background-color: #1cc3b2;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border-radius: 30px;
  padding: 9px 25px;
  text-transform: capitalize;
  -webkit-transition: all 0.5s ease 0s;
  -moz-transition: all 0.5s ease 0s;
  -o-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
}

.h-100 {
  height: 100% !important;
}

.w-100 {
  width: 100% !important;
}

.contact-us-title {
  font-style: normal;
  font-weight: bold;
  font-size: 100px;
  line-height: 88px;
  /* identical to box height */

  color: #120d31;
}
</style>