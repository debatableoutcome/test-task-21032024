import { searchUsers } from "@/api/search.js";
export default {
  namespaced: true,
  state() {
    return {
      users: [],
      curUser: null,
      isLoading: false,
      errorMessage: "",
    };
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_CUR_USER(state, user) {
      state.curUser = user;
    },
    CLEAR_CUR_USER(state) {
      state.curUser = null;
    },
    CLEAR_USERS(state) {
      state.users = [];
    },
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
    SET_ERROR(state, value) {
      state.isError = !!value;
      state.errorMessage =
        typeof value === "string" ? value : "Произошла ошибка при поиске";
    },
  },
  actions: {
    async fetchUsers({ commit }, params) {
      commit("SET_LOADING", true);
      commit("SET_ERROR", false);
      try {
        const users = await searchUsers(params);
        commit("SET_USERS", users);
      } catch (error) {
        commit("SET_ERROR", true);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    setCurUser({ commit }, user) {
      console.log(user);
      commit("SET_CUR_USER", user);
    },
    clearUsers({ commit }) {
      commit("CLEAR_USERS");
    },
  },
};
