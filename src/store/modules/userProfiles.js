import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default {
  state: {
    userProfiles: [],
    maxProfilesMessage: null,
  },

  mutations: {
    SET_USER_PROFILES_FROM_DB(state, payload) {
      state.userProfiles = payload;
    },

    SET_MAX_PROFILES_MESSAGE(state, payload) {
      state.maxProfilesMessage = payload;
    },
  },

  actions: {
    SET_USER_PROFILES_FROM_DB({ commit, rootState }) {
      const profilesArray = [];
      firebase
        .database()
        .ref(`users/${rootState.userData.currentUser.id}`)
        .child('profiles')
        .on('value', (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.val();
            const id = childSnapshot.key;
            childData.id = id;

            const existingProfileIndex = profilesArray.findIndex(
              (profile) => profile.id === id
            );
            if (existingProfileIndex === -1) profilesArray.push(childData);
          });
          commit('SET_USER_PROFILES_FROM_DB', profilesArray);
        });
    },

    ADD_PROFILE({ commit, rootState, state }, payload) {
      firebase
        .database()
        .ref(`users/${rootState.userData.currentUser.id}/profiles`)
        .once('value', (snapshot) => {
          if (snapshot.numChildren() < 5) {
            firebase
              .database()
              .ref('users/' + rootState.userData.currentUser.id)
              .child('profiles')
              .push(payload);
          }
        });
    },

    RESET_MAX_PROFILES_MESSAGE({ commit }) {
      commit('SET_MAX_PROFILES_MESSAGE', null);
    },

    SET_MAX_PROFILES_MESSAGE({ commit }) {
      commit(
        'SET_MAX_PROFILES_MESSAGE',
        'You can only have a maximum of 5 profiles'
      );
    },
  },
};
