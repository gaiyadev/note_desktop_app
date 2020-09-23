import Vue from 'vue'
import Vuex from 'vuex'
import user from '../store/modules/user'
import note from '../store/modules/note'

// const url = 'https://note-expressjs-api.herokuapp.com';
// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// //yarn electron:serve

// axios.defaults.crossDomain = true;

// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // user: null,
    loading: false,
    error: null,
    message: "",
    token: null,
    // notes: null,
  },
  mutations: {
    // setUser(state, payload) {
    //   state.user = payload;
    // },
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
    // setNotes(state, payload) {
    //   state.notes = payload;
    // }
  },
  actions: {
    // userRegister({ commit }, payload) {
    //   commit('setLoading', true);
    //   commit('clearError');
    //   return axios.post(`${proxyurl}${url}/api/users/register`, {
    //     email: payload.email,
    //     password: payload.password,
    //   }).then(user => {
    //     commit('setLoading', false);
    //     const newUser = {
    //       id: user.data["user"]['_id'],
    //       email: user.data["user"]['email'],
    //     };
    //     commit("setUser", newUser);
    //     const mess = user.data["message"];
    //     commit('setMessage', mess);
    //   }).catch(err => {
    //     commit('setLoading', false);
    //     commit('setError', false);
    //     console.log(err.error);
    //   });
    // },
    // userLogin({ commit }, payload) {
    //   commit('setLoading', true);
    //   commit('clearError');
    //   return axios.post(`${proxyurl}${url}/api/users/login`, {
    //     email: payload.email,
    //     password: payload.password,
    //   }).then(user => {
    //     commit('setLoading', false);
    //     const newUser = {
    //       id: user.data["user"]['_id'],
    //       email: user.data["user"]['email'],
    //     };
    //     commit("setUser", newUser);
    //     const mess = user.data["message"];
    //     commit('setMessage', mess);
    //     commit('setToken', user.data['token']);
    //   }).catch(err => {
    //     commit('setLoading', false);
    //     commit('setError', false);
    //     console.log(err.error);
    //   });
    // },
    // logout({ commit }) {
    //   commit("setUser", null);
    //   commit('clearToken');
    // },
    // addNote({ commit }, payload) {
    //   commit('setLoading', true);
    //   commit('clearError');
    //   axios.post(`${proxyurl}${url}/api/note/add`, {
    //     title: payload.title,
    //     body: payload.body,
    //   }).then(note => {
    //     const mess = note.data["message"];
    //     commit('setMessage', mess);
    //     console.log(note);
    //   }).catch(err => {
    //     console.log(err);
    //     commit('setLoading', false);
    //     commit('setError', false);
    //   })
    // },
    // fetchNotes({ commit }) {
    //   commit('setLoading', true);
    //   commit('clearError');
    //   axios.get(`${proxyurl}${url}/api/note`).then(notes => {
    //     const loadedNotes = notes['data']['notes'];

    //     commit('setNotes', loadedNotes);
    //   }).catch(err => {
    //     console.log(err);
    //   })
    // }
  },
  modules: {
    user: user,
    note: note,
  },
  getters: {
    message(state) {
      return state.message;
    },
    // user(state) {
    //   return state.user;
    // },
    token(state) {
      return state.token;
    },
    // notes(state) {
    //   return state.notes;
    // },
    // loadedNotes(state) {
    //   return noteId => {
    //     return state.notes.find(note => {
    //       return note.id === noteId;
    //     });
    //   };
    // },
  },

})
