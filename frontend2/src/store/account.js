import axios from "axios";

const mutations = {
  SET_USER: "setUser",
  SET_USERS: "setUsers",
};

const actions = {
  RESEND_VERIFICATION_EMAIL: "resendVerificationEmail",
  REGISTER_USER: "registerUser",
  LOGIN: "login",
  LOGOUT: "logout",
  FETCH_USER: "fetchUser",
  INIT: "init",
  FETCH_USERS: "fetchUsers",
};

const account = {
  namespaced: true,
  state: () => ({
    user: null,
    users: null,
  }),
  getters: {
    user: (state) => state.user,
    isLoggedIn: (state) => (state.user ? true : false),
  },
  mutations: {
    [mutations.SET_USER](state, user) {
      state.user = user;
    },
    [mutations.SET_USERS](state, users) {
      state.users = users;
    },
  },
  actions: {
    async [actions.INIT]({ dispatch }) {
      await dispatch(actions.FETCH_USER);
    },
    async [actions.REGISTER_USER](store, user) {
      return axios.post("/account/register", { user });
    },
    async [actions.LOGIN]({ commit }, credentials) {
      const user = await axios.post("/account/session", credentials);

      commit(mutations.SET_USER, user.data);
    },
    async [actions.LOGOUT]({ commit }) {
      await axios.delete("/account/session");

      commit(mutations.SET_USER, null);
    },
    async [actions.FETCH_USER]({ commit }) {
      const user = await axios.get("/account");

      commit(mutations.SET_USER, user.data);
    },
    async [actions.UPDATE_PROFILE](store, profile) {
      await axios.patch("/account/me", profile);
    },
    async [actions.RESEND_VERIFICATION_EMAIL](store, email) {
      await axios.post("/account/outgoing-verification-emails", { email });
    },
    async [actions.FETCH_USERS]({ commit }) {
      const users = await axios.get("/account/get-all-users");

      commit(mutations.SET_USERS, users.data);
    },
  },
};

export default account;
