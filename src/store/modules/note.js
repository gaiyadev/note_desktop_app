const url = 'https://note-expressjs-api.herokuapp.com';
const proxyurl = "https://cors-anywhere.herokuapp.com/";
//yarn electron:serve

axios.defaults.crossDomain = true;

import axios from 'axios'

const state = {
    //loading: false,
    // message: "",
    // error: null,
    notes: null,
}

const actions = {
    addNote({ commit }, payload) {
        commit('setLoading', true);
        commit('clearError');
        axios.post(`${proxyurl}${url}/api/note/add`, {
            title: payload.title,
            body: payload.body,
        }).then(note => {
            const mess = note.data["message"];
            commit('setMessage', mess);
            console.log(note);
        }).catch(err => {
            console.log(err);
            commit('setLoading', false);
            commit('setError', false);
        })
    },
    fetchNotes({ commit }) {
        commit('setLoading', true);
        commit('clearError');
        axios.get(`${proxyurl}${url}/api/note`).then(notes => {
            const loadedNotes = notes['data']['notes'];

            commit('setNotes', loadedNotes);
        }).catch(err => {
            console.log(err);
        })
    }
}

const getters = {
    notes(state) {
        return state.notes;
    },
    loadedNotes(state) {
        return noteId => {
            return state.notes.find(note => {
                return note.id === noteId;
            });
        };
    },
}

const mutations = {
    setNotes(state, payload) {
        state.notes = payload;
    }
}

export default {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}