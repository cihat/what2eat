import antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"

import { createApp } from "vue"
import App from "./app.vue"
import { router } from "./router"
import setupStore, { storeInit } from "./store"
// import './assets/main.css'

const app = createApp(App)

setupStore(app)
app.use(router)
app.use(antd)
app.mount("#app")

storeInit()
