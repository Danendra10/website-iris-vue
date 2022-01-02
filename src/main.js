import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import AOS from "aos";

// import "vuetify/dist/vuetify.css";
import "aos/dist/aos.css";

Vue.use(vuetify);

Vue.config.productionTip = false

new Vue({
  created(){
    AOS.init();
  },
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
