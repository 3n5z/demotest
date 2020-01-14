import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    user: []
}

const mutations = {
    SAVE_USER(state, user) {
        state.user = user
    }
}

const actions = {
    saveUser({ commit }, user) {
        commit("SAVE_USER", user)
    }
}

const getters = {
    user: state => state.user
}
const VuexStore = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default VuexStore