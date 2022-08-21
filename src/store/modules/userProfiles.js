import { getDatabase, ref, onValue, onChildAdded } from 'firebase/database';

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
    async SET_USER_PROFILES_FROM_DB({ commit, rootState }) {
      const profilesArray = [];

      const db = getDatabase();

      const profilesRef = ref(
        db,
        `users/${rootState.userData.currentUser.id}/profiles`
      );

      onChildAdded(profilesRef, (data) => {
        const profile = {
          id: data.key,
          icon: data.val().icon,
          name: data.val().name,
        };
        profilesArray.push(profile);
      });

      commit('SET_USER_PROFILES_FROM_DB', profilesArray);
      console.log(profilesArray);
    },

    SET_CLICKED_PROFILE({ commit }, payload) {
      commit('SET_CLICKED_PROFILE', payload);
    },
  },
};
