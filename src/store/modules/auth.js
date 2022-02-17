import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import router from '@/router';

export default {
  state: {
    email: null,
    user: null,
    error: null,
    accountMessage: null,
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
    setAccountMessage(state, payload) {
      state.accountMessage = payload;
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
        .then(() => {
          commit('setError', null);
          commit(
            'setAccountMessage',
            'Account Created. You are being redirected to sign in page'
          );
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
    signUserIn({ commit }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          commit('setError', null);
          commit('setAccountMessage', 'Logging in...');
          const currentUser = {
            email: user.user.email,
          };
          commit('setUser', currentUser);
          setTimeout(() => {
            router.push({ name: 'Browse' });
          }, 2000);
        })
        .catch((error) => {
          if (error) {
            commit('setError', error.message);
          }
        });
    },
  },
};
