/**
=========================================================
* Vue Soft UI Dashboard - v3.0.0
=========================================================

* Product Page: https://creative-tim.com/product/vue-soft-ui-dashboard
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import "vue-toastification/dist/index.css";
import router from "./router";
import SoftUIDashboard from "./soft-ui-dashboard";
import Toast from "vue-toastification";
import store from "./store";

const options = {
  // You can set your default options here
};

const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);
appInstance.use(SoftUIDashboard);
appInstance.use(Toast, options);
appInstance.mount("#app");
