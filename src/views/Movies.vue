<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import ResponsiveNav from "@/components/navs/ResponsiveNav.vue";
import GenresFilter from "@/components/filters/GenresFilter.vue";
import MovieCard from "@/components/ui/MovieCard.vue";
import MovieModal from "@/components/ui/movie-modal/MovieModal.vue";

const store = useStore();
const isMovieModalOpen = ref(false);
const clickedMovie = ref(null);

const moviesByGenre = computed(() => store.getters.GET_MOVIES_BY_GENRE);

function openModal(params) {
  isMovieModalOpen.value = params.isModalOpen;
  clickedMovie.value = params.clickedMovie;
}

function closeModal() {
  isMovieModalOpen.value = false;
}
</script>

<template>
  <ResponsiveNav />
  <main :class="classes.main">
    <div class="container">
      <GenresFilter />
      <div :class="classes.movieCardsGrid">
        <MovieCard @onOpenModal="openModal" />
      </div>
    </div>
  </main>
  <MovieModal
    @onCloseModal="closeModal"
    v-if="isMovieModalOpen"
    :clickedMovie="clickedMovie"
  />
</template>

<style lang="scss" module="classes">
@use '@/sass/views/movies';
</style>
