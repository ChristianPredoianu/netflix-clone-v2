import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default {
  state: {
    signUpUserEmail: null,
    currentUser: {
      email: null,
      id: null,
    },
  },

  mutations: {
    SET_SIGN_UP_USER_EMAIL(state, payload) {
      state.signUpUserEmail = payload;
    },

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
    SET_SIGN_UP_USER_EMAIL({ commit }, payload) {
      commit('SET_SIGN_UP_USER_EMAIL', payload);
    },

    SET_CURRENT_USER({ commit }) {
      commit('SET_CURRENT_USER');
    },

    RESET_CURRENT_USER({ commit }) {
      commit('RESET_CURRENT_USER');
    },
  },
};
