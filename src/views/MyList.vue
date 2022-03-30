<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useSearchMovie } from "@/composables/searchMovie";
import ResponsiveNav from "@/components/navs/ResponsiveNav.vue";
import MovieCard from "@/components/ui/MovieCard.vue";
import NetflixBorder from "@/components/ui/NetflixBorder.vue";
import Footer from "@/components/footer/Footer.vue";

const store = useStore();

const userMovieList = computed(() => store.state.userMovieList.userMovieList);

const { searchTerm, setSearchTerm, searchMovie } = useSearchMovie();
</script>

<template>
  <ResponsiveNav @search="setSearchTerm" />
  <main :class="classes.main">
    <div class="container">
      <h1 v-if="userMovieList.length === 0">
        You don't have any movies in your list. Add some movies to your list.
      </h1>
      <div :class="classes.movieCardsGrid">
        <MovieCard :movies="!searchTerm ? userMovieList : searchMovie(userMovieList)" />
      </div>
    </div>
  </main>
  <NetflixBorder />
  <Footer />
</template>

<style lang="scss" module="classes">
@use '@/sass/views/my-list';
</style>
