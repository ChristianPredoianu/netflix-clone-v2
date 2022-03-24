<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useModal } from "@/composables/modal";
import { useMovieTrailer } from "@/composables/movieTrailer";
import MovieModal from "@/components/ui/movie-modal/MovieModal.vue";
import MovieTrailerOverlay from "@/components/ui/movie-modal/ModalTrailerOverlay.vue";
import Backdrop from "@/components/ui/movie-modal/Backdrop.vue";

const store = useStore();

const { isMovieModalOpen, clickedMovie, openModal, closeModals } = useModal();

const {
  openMovieTrailerModal,
  closeMovieTrailerModal,
  isBackdropOpen,
} = useMovieTrailer();

const showcaseMovie = computed(() => store.state.theMovieDB.movieData.horror[0]);
</script>

<template>
  <div :class="classes.heroContent">
    <div :class="classes.heroHeadings">
      <h1 :class="classes.heroPrimaryHeading">
        {{ showcaseMovie.original_title }}
      </h1>
      <h2 :class="classes.heroSecondaryHeading">
        {{ showcaseMovie.overview }}
      </h2>
    </div>
    <div :class="classes.heroCta">
      <button
        :class="[classes['btn'], classes['btn--play']]"
        @click="openMovieTrailerModal(showcaseMovie)"
      >
        <span :class="classes.btnSpan"><font-awesome-icon icon="play" /></span>Play
      </button>
      <button
        :class="[classes['btn'], classes['btn--info']]"
        @click="openModal(showcaseMovie)"
      >
        <span :class="classes.btnSpan"><font-awesome-icon icon="info-circle" /></span>More
        Info
      </button>
    </div>
  </div>
  <MovieModal
    @onCloseModals="closeModals"
    v-if="isMovieModalOpen"
    :clickedMovie="showcaseMovie"
  />
  <Backdrop v-if="isBackdropOpen" @onCloseModals="closeMovieTrailerModal" />
  <MovieTrailerOverlay
    v-if="isBackdropOpen"
    @onCloseMovieTrailerOverlay="closeMovieTrailerModal"
  />
</template>

<style lang="scss" module="classes">
@use '@/sass/components/hero/browse-hero-content';
</style>
