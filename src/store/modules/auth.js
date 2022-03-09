import router from '@/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default {
  state: {
    email: null,
    user: null,
  },

  mutations: {
    UPDATE_EMAIL(state, payload) {
      state.email = payload;
    },

    SET_USER(state, payload) {
      state.user = payload;
    },
  },

  actions: {
    UPDATE_EMAIL({ commit }, payload) {
      commit('UPDATE_EMAIL', payload);
    },

    SIGN_USER_IN({ commit }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          commit('SET_ERROR', null);
          commit('SET_ACCOUNT_MESSAGE', 'Logging in...');
          const currentUser = {
            email: user.user.email,
          };
          commit('SET_USER', currentUser);
          setTimeout(() => {
            router.push({ name: 'Browse' });
          }, 2000);
        })
        .catch((error) => {
          if (error) {
            commit('SET_ERROR', error.message);
          }
        });
    },
  },
};
