<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useSearchMovie } from "@/composables/searchMovie";
import ResponsiveNav from "@/components/navs/ResponsiveNav.vue";
import GenresFilter from "@/components/filters/GenresFilter.vue";
import MovieCard from "@/components/ui/MovieCard.vue";
import MovieModal from "@/components/ui/movie-modal/MovieModal.vue";
import NetflixBorder from "@/components/ui/NetflixBorder.vue";
import Footer from "@/components/footer/Footer.vue";

const store = useStore();

const moviesByGenre = computed(() => store.getters.GET_MOVIES_BY_GENRE);

const { searchTerm, setSearchTerm, searchMovie } = useSearchMovie();
</script>

<template>
  <ResponsiveNav @search="setSearchTerm" />
  <main :class="classes.main">
    <div class="container">
      <GenresFilter />
      <div :class="classes.movieCardsGrid">
        <MovieCard :movies="!searchTerm ? moviesByGenre : searchMovie(moviesByGenre)" />
      </div>
    </div>
  </main>
  <NetflixBorder />
  <Footer />
</template>

<style lang="scss" module="classes">
@use '@/sass/views/movies';
</style>
