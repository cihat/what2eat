import antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";

import { darkModeKey, styleKey } from "@/config.js";
import { useMainStore } from "@/stores/main.js";
import { useStyleStore } from "@/stores/style.js";

import "./css/main.css";


import { createApp } from "vue";
import App from "./app.vue";
import router from "./router";
import setupStore, { store, storeInit } from "./stores";
// import './assets/main.css'

const app = createApp(App)

setupStore(app)
app.use(router)
app.use(antd)
app.mount("#app")

storeInit()

/* Init Pinia stores */
const mainStore = useMainStore(store);
const styleStore = useStyleStore(store);

/* Fetch sample data */
// mainStore.fetch("clients");
// mainStore.fetch("history");

/* App style */
styleStore.setStyle(localStorage[styleKey] ?? "basic");

/* Dark mode */
if (
  (!localStorage[darkModeKey] &&
    window.matchMedia("(prefers-color-scheme: dark)").matches) ||
  localStorage[darkModeKey] === "1"
) {
  styleStore.setDarkMode(true);
}
