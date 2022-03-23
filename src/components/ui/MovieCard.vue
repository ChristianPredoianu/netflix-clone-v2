<script setup>
import { useModal } from "@/composables/modal";
import { useMovieTrailer } from "@/composables/movieTrailer";
import { useProfileMovieList } from "@/composables/profileMovieList";
import MovieModal from "@/components/ui/movie-modal/MovieModal.vue";
import MovieTrailerOverlay from "@/components/ui/movie-modal/ModalTrailerOverlay.vue";
import Backdrop from "@/components/ui/movie-modal/Backdrop.vue";

const props = defineProps({
  movies: Object,
});

const { isMovieModalOpen, clickedMovie, openModal, closeModals } = useModal();

const {
  openMovieTrailerModal,
  closeMovieTrailerModal,
  isBackdropOpen,
} = useMovieTrailer();

const {
  addToProfileList,
  deleteFromProfileList,
  isMovieInUserList,
} = useProfileMovieList();
</script>

<template>
  <div :class="classes.movieCard" v-for="movie in props.movies" :key="movie.id">
    <img
      :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
      alt="movie poster"
    />

    <div :class="classes.movieCardIcons">
      <font-awesome-icon icon="play" @click="openMovieTrailerModal(movie)" />
      <font-awesome-icon
        icon="plus-square"
        @click="addToProfileList(movie)"
        v-if="!isMovieInUserList(movie)"
      />

      <font-awesome-icon
        icon="times-circle"
        v-else
        @click="deleteFromProfileList(movie)"
      />
      <font-awesome-icon icon="info-circle" @click="openModal(movie)" />
    </div>
  </div>

  <MovieModal
    @onCloseModals="closeModals"
    v-if="isMovieModalOpen"
    :clickedMovie="clickedMovie"
  />
  <Backdrop v-if="isBackdropOpen" @onCloseModals="closeMovieTrailerModal" />
  <MovieTrailerOverlay
    v-if="isBackdropOpen"
    @onCloseMovieTrailerOverlay="closeMovieTrailerModal"
  />
</template>

<style lang="scss" module="classes">
@use '@/sass/components/ui/movie-card';
</style>
