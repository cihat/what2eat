import axios from "axios"
import { createPinia } from "pinia"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { useAccountStore } from "./account.store"

axios.defaults.baseURL = import.meta.env.VITE_API_URL
axios.defaults.withCredentials = true

const store = createPinia()
store.use(piniaPluginPersistedstate)

export  async function storeInit() {
  await useAccountStore().init()
}

export default function setupStore(app) {
  app.use(store)
}

export { useAccountStore, store }
