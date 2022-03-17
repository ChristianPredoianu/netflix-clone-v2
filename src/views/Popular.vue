<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import ResponsiveNav from "@/components/navs/ResponsiveNav.vue";
import MovieCard from "@/components/ui/MovieCard.vue";
import MovieModal from "@/components/ui/movie-modal/MovieModal.vue";

const store = useStore();

const popularMovies = computed(() => store.state.theMovieDB.movieData.popular);
</script>

<template>
  <ResponsiveNav />
  <main :class="classes.main">
    <div class="container">
      <div :class="classes.movieCardsGrid">
        <MovieCard :movies="popularMovies" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" module="classes">
@use '@/sass/views/popular';
</style>
