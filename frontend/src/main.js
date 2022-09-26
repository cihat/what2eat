import antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"

import { createApp } from "vue"
import App from "./app.vue"
import { router } from "./router"
import setupStore, { storeInit } from "./store"

import DefaultLayout from './layouts/Default.vue'
import DashboardLayout from './layouts/Dashboard.vue'
// import './assets/main.css'
import './scss/app.scss';

const app = createApp(App)

app.component("layout-default", DefaultLayout)
app.component("layout-dashboard", DashboardLayout)

setupStore(app)
app.use(router)
app.use(antd)
app.mount("#app")

storeInit()
