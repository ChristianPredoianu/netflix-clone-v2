import { computed } from 'vue';
import { useStore } from 'vuex';
import firebase from 'firebase/compat/app';

export function useProfileMovieList() {
  const store = useStore();
  const currentUser = computed(() => store.state.userData.currentUser);
  const clickedProfile = computed(
    () => store.state.userProfiles.clickedProfile
  );

  function addToProfileList(movie) {
    const databaseRef = `users/${currentUser.value.id}`;
    const child = `profiles/${clickedProfile.value.id}/moviesList`;

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
  }

  return { addToProfileList };
}
