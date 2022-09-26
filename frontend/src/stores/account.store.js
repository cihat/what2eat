import axios from "axios"
import { defineStore } from "pinia"
import { store } from "./"

const useAccountStore = defineStore("account", {
  state: () => ({
    user: null,
  }),
  getters: {
    isLoggedIn: state => (state.user ? true : false),
    getUser: state => state.user,
  },
  actions: {
    async init() {
      this.fetchUser()
    },
    async registerUser(user) {
      await axios.post("/account/register", {user})
    },
    async login(credentials) {
      const user = await axios.post("/account/session", credentials)

      this.user = user
    },
    async logout() {
      await axios.delete("/account/session")

      this.user = null
    },
    async fetchUser() {
      const user = await axios.get("/account")

      this.user = user.data
    },
  },
  persist: true,
})

// Need to be used outside the setup
export function useAccountStoreWithout() {
  return useAccountStore(store)
}

export { useAccountStore }
