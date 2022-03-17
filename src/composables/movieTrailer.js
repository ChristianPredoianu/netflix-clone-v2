import { ref } from 'vue';
import { useStore } from 'vuex';

export function useMovieTrailer() {
  const store = useStore();

  const isBackdropOpen = ref(false);
  const isMovieTrailerOpen = ref(false);

  function openMovieTrailerModal(movie) {
    store.dispatch('FETCH_MOVIE_TRAILER', movie.id);
    isBackdropOpen.value = true;
    isMovieTrailerOpen.value = true;
  }

  function closeMovieTrailerModal(bool) {
    isBackdropOpen.value = bool;
    isMovieTrailerOpen.value = bool;
  }

  return { openMovieTrailerModal, closeMovieTrailerModal, isBackdropOpen };
}
