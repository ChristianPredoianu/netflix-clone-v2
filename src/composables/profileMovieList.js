import { computed } from 'vue';
import { useStore } from 'vuex';
import firebase from 'firebase/compat/app';

export function useProfileMovieList() {
  const store = useStore();
  const currentUser = computed(() => store.state.userData.currentUser);
  const clickedProfile = computed(
    () => store.state.userProfiles.clickedProfile
  );

  const userMoviesList = computed(
    () => store.state.userMovieList.userMovieList
  );

  const databaseRef = `users/${currentUser.value.id}`;
  const child = `profiles/${clickedProfile.value.id}/moviesList`;

  function addToProfileList(movie) {
    firebase
      .database()
      .ref(databaseRef)
      .child(child)
      .orderByChild('id')
      .equalTo(movie.id)
      .once('value', (snapshot) => {
        if (!snapshot.exists()) {
          firebase.database().ref(databaseRef).child(child).push(movie);
        }
      });
    store.dispatch('SET_USER_MOVIE_LIST_FROM_DB');
  }

  function deleteFromProfileList(movie) {
    firebase
      .database()
      .ref(databaseRef)
      .child(child)
      .orderByChild('id')
      .equalTo(movie.id)
      .once('child_added', (snapshot) => {
        snapshot.ref.remove();
      });
    store.dispatch('SET_USER_MOVIE_LIST_FROM_DB');
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
