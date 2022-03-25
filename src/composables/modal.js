import { ref } from 'vue';

export function useModal() {
  const isMovieModalOpen = ref(false),
    clickedMovie = ref(null);

  function openModal(userClickedMovie) {
    isMovieModalOpen.value = true;
    clickedMovie.value = userClickedMovie;
  }

  function closeModals() {
    isMovieModalOpen.value = false;
  }

  return { isMovieModalOpen, clickedMovie, openModal, closeModals };
}
