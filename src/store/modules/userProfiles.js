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
      /*  onValue(profilesRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data); */
      onChildAdded(profilesRef, (data) => {
        const profile = {
          id: data.key,
          icon: data.val().icon,
          name: data.val().name,
        };

        profilesArray.push(profile);
      });

      /*       snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        const id = childSnapshot.key;
        childData.id = id;

        const existingProfileIndex = profilesArray.findIndex(
          (profile) => profile.id === id
        );
        if (existingProfileIndex === -1) profilesArray.push(childData);
      }); */

      commit('SET_USER_PROFILES_FROM_DB', profilesArray);
      console.log(profilesArray);
    },

    SET_CLICKED_PROFILE({ commit }, payload) {
      commit('SET_CLICKED_PROFILE', payload);
    },
  },
};
