import firebase from 'firebase/compat/app';

export default {
  state: {
    userProfiles: [],
    clickedProfile: null,
  },

  mutations: {
    SET_USER_PROFILES_FROM_DB(state, payload) {
      state.userProfiles = payload;
    },

    SET_CLICKED_PROFILE(state, payload) {
      state.clickedProfile = payload;
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
            commit('SET_USER_PROFILES_FROM_DB', profilesArray);
          });
        });
    },

    SET_CLICKED_PROFILE({ commit }, payload) {
      commit('SET_CLICKED_PROFILE', payload);
    },
  },
};
