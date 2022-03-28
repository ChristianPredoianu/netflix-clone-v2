import { getDatabase, ref, onValue } from 'firebase/database';

export default {
  state: {
    userMovieList: [],
  },

  mutations: {
    SET_USER_MOVIE_LIST_FROM_DB(state, payload) {
      state.userMovieList = payload;
    },
  },

  actions: {
    SET_USER_MOVIE_LIST_FROM_DB({ commit, rootState }) {
      const moviesList = [];
      const db = getDatabase();
      const userMovieList = ref(
        db,
        `users/${rootState.userData.currentUser.id}/profiles/${rootState.userProfiles.clickedProfile.id}/moviesList`
      );

      onValue(userMovieList, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val();
          const id = childData.id;

          const existingProfileIndex = moviesList.findIndex(
            (profile) => profile.id === id
          );

          if (existingProfileIndex === -1) moviesList.push(childData);
        });
      });
      commit('SET_USER_MOVIE_LIST_FROM_DB', moviesList);
    },
  },
};
