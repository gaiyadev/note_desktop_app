
const url = 'https://note-expressjs-api.herokuapp.com';
const proxyurl = "https://cors-anywhere.herokuapp.com/";
//yarn electron:serve

axios.defaults.crossDomain = true;

import axios from 'axios'
const state = {
    user: null,
    // loading: false,
    // message: "",
    // error: null,
    //token: null,
}

const getters = {
    user(state) {
        return state.user;
    },
    // token(state) {
    //     return state.token;
    // },
    // message(state) {
    //     return state.message;
    // },

}

const mutations = {
    setMessage(state, payload) {
        state.message = payload;
    },
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
    setToken(state, payload) {
        state.token = payload;
    },
    clearToken(state) {
        state.token = null;
    },
}

const actions = {
    userRegister({ commit }, payload) {
        commit('setLoading', true);
        commit('clearError');
        return axios.post(`${proxyurl}${url}/api/users/register`, {
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
        return axios.post(`${proxyurl}${url}/api/users/login`, {
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
}

export default {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}