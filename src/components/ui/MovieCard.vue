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
    <div :class="classes.movieCardOverlay"></div>
    <img
      :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
      alt="movie poster"
    />

    <div :class="classes.movieCardIcons">
      <font-awesome-icon
        icon="play"
        :class="classes.cardIcon"
        @click="openMovieTrailerModal(movie)"
      />
      <font-awesome-icon
        icon="plus-square"
        v-if="!isMovieInUserList(movie)"
        :class="classes.cardIcon"
        @click="addToProfileList(movie)"
      />

      <font-awesome-icon
        icon="times-circle"
        :class="classes.cardIcon"
        v-else
        @click="deleteFromProfileList(movie)"
      />
      <font-awesome-icon
        icon="info-circle"
        :class="classes.cardIcon"
        @click="openModal(movie)"
      />
    </div>
  </div>

  <MovieModal
    @onCloseModals="closeModals"
    v-if="isMovieModalOpen"
    :clickedMovie="clickedMovie"
  />
  <teleport to="#backdrop-root">
    <Backdrop v-if="isBackdropOpen" @onCloseModals="closeMovieTrailerModal" />
  </teleport>
  <teleport to="#overlay-root">
    <MovieTrailerOverlay
      v-if="isBackdropOpen"
      @onCloseMovieTrailerOverlay="closeMovieTrailerModal"
    />
  </teleport>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/ui/movie-card';
</style>
