<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useSearchMovie } from '@/composables/searchMovie';
import ResponsiveNav from '@/components/navs/ResponsiveNav.vue';
import MovieCard from '@/components/ui/MovieCard.vue';
import MovieModal from '@/components/ui/movie-modal/MovieModal.vue';
import NetflixBorder from '@/components/ui/NetflixBorder.vue';
import Footer from '@/components/footer/Footer.vue';

const store = useStore();

const { searchTerm, setSearchTerm, searchMovie } = useSearchMovie();

const popularMovies = computed(
  () => store.state.theMovieDB.movieData.popular.movies
);
</script>

<template>
  <ResponsiveNav @search="setSearchTerm" />
  <main :class="classes.main">
    <div class="container">
      <div :class="classes.movieCardsGrid">
        <MovieCard
          :movies="!searchTerm ? popularMovies : searchMovie(popularMovies)"
        />
      </div>
    </div>
  </main>
  <NetflixBorder />
  <Footer />
</template>

<style lang="scss" module="classes">
@use '@/sass/views/popular';
</style>
