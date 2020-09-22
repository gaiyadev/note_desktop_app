import Vue from 'vue'
import Vuex from 'vuex'

const url = 'https://note-expressjs-api.herokuapp.com';
const proxyurl = "https://cors-anywhere.herokuapp.com/";

axios.defaults.crossDomain = true;

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    loading: false,
    error: null,
    message: "",
    token: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    },
    setMessage(state, payload) {
      state.message = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
    clearToken(state) {
      state.token = null;
    },
  },
  actions: {
    userRegister({ commit }, payload) {
      commit('setLoading', true);
      commit('clearError');
      return axios.post(proxyurl + url + '/api/users/register', {
        email: payload.email,
        password: payload.password,
      }).then(user => {
        commit('setLoading', false);
        const newUser = {
          id: user.data["user"]['_id'],
          email: user.data["user"]['email'],
        };
        commit("setUser", newUser);
        const mess = user.data["message"];
        commit('setMessage', mess);
      }).catch(err => {
        commit('setLoading', false);
        commit('setError', false);
        console.log(err.error);
      });
    },
    userLogin({ commit }, payload) {
      commit('setLoading', true);
      commit('clearError');
      return axios.post(proxyurl + url + '/api/users/login', {
        email: payload.email,
        password: payload.password,
      }).then(user => {
        commit('setLoading', false);
        const newUser = {
          id: user.data["user"]['_id'],
          email: user.data["user"]['email'],
        };
        commit("setUser", newUser);
        const mess = user.data["message"];
        commit('setMessage', mess);
        commit('setToken', user.data['token']);
      }).catch(err => {
        commit('setLoading', false);
        commit('setError', false);
        console.log(err.error);
      });
    },
    logout({ commit }) {
      commit("setUser", null);
      commit('clearToken');
    },
  },
  modules: {
  },
  getters: {
    message(state) {
      return state.message;
    },
    user(state) {
      return state.user;
    },
    token(state) {
      return state.token;
    }
  }
})
