import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default {
  state: {
    currentUser: {
      email: null,
      id: null,
    },
  },

  mutations: {
    SET_CURRENT_USER(state) {
      const currUser = firebase.auth().currentUser;
      state.currentUser.email = currUser.email;
      state.currentUser.id = currUser.uid;
    },

    RESET_CURRENT_USER(state) {
      state.currentUser.email = null;
      state.currentUser.id = null;
    },
  },

  actions: {
    SET_CURRENT_USER({ commit }) {
      commit('SET_CURRENT_USER');
    },

    RESET_CURRENT_USER({ commit }) {
      commit('RESET_CURRENT_USER');
    },
  },
};
