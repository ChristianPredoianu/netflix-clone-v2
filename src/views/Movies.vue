<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import ResponsiveNav from "@/components/navs/ResponsiveNav.vue";
import GenresFilter from "@/components/filters/GenresFilter.vue";
import MovieCard from "@/components/ui/MovieCard.vue";
import MovieModal from "@/components/ui/movie-modal/MovieModal.vue";

const store = useStore();

const moviesByGenre = computed(() => store.getters.GET_MOVIES_BY_GENRE);
</script>

<template>
  <ResponsiveNav />
  <main :class="classes.main">
    <div class="container">
      <GenresFilter />
      <div :class="classes.movieCardsGrid">
        <MovieCard :movies="moviesByGenre" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" module="classes">
@use '@/sass/views/movies';
</style>
