import Vue from "vue";
import App from "./App";
import router from "./router/index";
import axios from "axios";
import firebase from "firebase/app";

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/main.css";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyDctgLuvKZj1VoMucgnWjiwzm-qP-vDiVk",
  authDomain: "tutorwiz-45f0e.firebaseapp.com",
  databaseURL: "https://tutorwiz-45f0e.firebaseio.com",
  projectId: "tutorwiz-45f0e",
  storageBucket: "tutorwiz-45f0e.appspot.com",
  messagingSenderId: "841637501702",
  appId: "1:841637501702:web:339009197e67f7d98a1c87",
  measurementId: "G-EVXL297G47"
};
// initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.use(PaperDashboard);

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
