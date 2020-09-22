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
    }
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
    }
  },
  modules: {
  },
  getters: {
    message(state) {
      return state.message;
    },
    user(state) {
      return state.user;
    }
  }
})
