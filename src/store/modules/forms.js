import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import router from '@/router';

export default {
  state: {
    email: null,
    user: null,
    error: null,
  },

  getters: {
    getUser: (state) => state.user,
    getError: (state) => state.error,
  },

  mutations: {
    updateEmail(state, payload) {
      state.email = payload;
    },

    setUser(state, payload) {
      state.user = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
  },

  actions: {
    updateEmail({ commit }, payload) {
      commit('updateEmail', payload);
    },

    signUserUp({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          const newUser = {
            email: user.user.email,
          };
          commit('setUser', newUser);
        })
        .then(() => {
          commit('setError', null);
          setTimeout(() => {
            router.push({ name: 'SignIn' });
          }, 2000);
        })
        .catch((error) => {
          if (error) {
            commit('setError', error.message);
          }
        });
    },
    setUser({ commit }, payload) {
      commit('setUser', payload);
    },
  },
};
