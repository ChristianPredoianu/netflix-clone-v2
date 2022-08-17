import { computed } from 'vue';
import { useStore } from 'vuex';
import {
  getDatabase,
  ref as storageRef,
  set,
  remove,
  query,
  push,
  orderByChild,
  equalTo,
  onValue,
} from 'firebase/database';

export function useProfileMovieList() {
  const store = useStore();

  const currentUser = computed(() => store.state.userData.currentUser);

  const clickedProfile = computed(
    () => store.state.userProfiles.clickedProfile
  );

  const userMoviesList = computed(
    () => store.state.userMovieList.userMovieList
  );

  const db = getDatabase(),
    dbRef = storageRef(
      db,
      `users/${currentUser.value.id}/profiles/${clickedProfile.value.id}/moviesList`
    );

  function addToProfileList(movie) {
    const queryMovie = query(dbRef, orderByChild('id'), equalTo(movie.id));
    const newMoviesRef = push(dbRef);

    const unsubscribe = onValue(queryMovie, (snapshot) => {
      if (snapshot.exists() === false) set(newMoviesRef, movie);
    });

    unsubscribe();
    store.dispatch('SET_USER_MOVIE_LIST_FROM_DB');
  }

  function deleteFromProfileList(movie) {
    const movieToDeleteFromList = userMoviesList.value.find(
      (mov) => mov.id === movie.id
    );

    if (movieToDeleteFromList !== undefined) {
      const movieSnapshot = query(
        dbRef,
        orderByChild('id'),
        equalTo(movieToDeleteFromList.id)
      );

      const unsubscribe = onValue(movieSnapshot, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          remove(
            storageRef(
              db,
              `users/${currentUser.value.id}/profiles/${clickedProfile.value.id}/moviesList/${childSnapshot.key}`
            )
          );
        });
      });

      unsubscribe();
      store.dispatch('SET_USER_MOVIE_LIST_FROM_DB');
    }
  }

  function isMovieInUserList(movie) {
    if (userMoviesList.value) {
      const isInMovieList = userMoviesList.value.find(
        (mov) => mov.id === movie.id
      );
      if (isInMovieList) return true;
    }
  }

  return { addToProfileList, deleteFromProfileList, isMovieInUserList };
}
