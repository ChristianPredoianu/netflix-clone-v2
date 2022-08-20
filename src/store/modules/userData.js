import { getAuth, onAuthStateChanged } from 'firebase/auth';
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
      const auth = getAuth();

      onAuthStateChanged(auth, (user) => {
        if (user) {
          state.currentUser.email = user.email;
          state.currentUser.id = user.uid;
        }
      });
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
