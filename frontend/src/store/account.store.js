// import axios from "axios"
import { defineStore } from "pinia"
import http from "../helpers/axios/Axios"
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
      http.requestData("POST", "/account/register", {user}).catch(err => err)
    },
    async login(credentials) {
      const user = await http
        .requestData("POST", "/account/session", credentials)
        .then(res => (this.user = res.data))
        .catch(err => err)

      localStorage.setItem("user", JSON.stringify(user.data))
    },
    async logout() {
      http
        .request("DELETE", "/account/session")
        .then(res => (this.user = null))
        .catch(err => err)
    },
    async fetchUser() {
      await http
        .request("GET", "/account")
        .then(user => (this.user = user.data))
        .catch(err => err)
    },
  },
  persist: true,
})

// Need to be used outside the setup
export function useAccountStoreWithout() {
  return useAccountStore(store)
}

export { useAccountStore }
