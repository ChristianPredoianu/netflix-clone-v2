<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useModal } from "@/composables/modal";

import ResponsiveNav from "@/components/navs/ResponsiveNav.vue";
import GenresFilter from "@/components/filters/GenresFilter.vue";
import MovieCard from "@/components/ui/MovieCard.vue";
import MovieModal from "@/components/ui/movie-modal/MovieModal.vue";

const store = useStore();
const { isMovieModalOpen, clickedMovie, openModal, closeModals } = useModal();

const moviesByGenre = computed(() => store.getters.GET_MOVIES_BY_GENRE);
</script>

<template>
  <ResponsiveNav />
  <main :class="classes.main">
    <div class="container">
      <GenresFilter />
      <div :class="classes.movieCardsGrid">
        <MovieCard :movies="moviesByGenre" @onOpenModal="openModal" />
      </div>
    </div>
  </main>
  <MovieModal
    @onCloseModals="closeModals"
    v-if="isMovieModalOpen"
    :clickedMovie="clickedMovie"
  />
</template>

<style lang="scss" module="classes">
@use '@/sass/views/movies';
</style>
