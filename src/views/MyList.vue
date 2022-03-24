<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useSearchMovie } from "@/composables/searchMovie";
import ResponsiveNav from "@/components/navs/ResponsiveNav.vue";
import MovieCard from "@/components/ui/MovieCard.vue";
import NetflixBorder from "@/components/ui/NetflixBorder.vue";
import Footer from "@/components/footer/Footer.vue";

const store = useStore();

const { searchTerm, setSearchTerm, searchMovie } = useSearchMovie();

const userMovieList = computed(() => store.state.userMovieList.userMovieList);
</script>

<template>
  <ResponsiveNav @search="setSearchTerm" />
  <main :class="classes.main">
    <div class="container">
      <div :class="classes.movieCardsGrid">
        <MovieCard :movies="!searchTerm ? userMovieList : searchMovie(userMovieList)" />
      </div>
    </div>
    <!--Need this div to place the footer on bottom of page if too little content -->
  </main>
  <NetflixBorder />
  <Footer />
</template>

<style lang="scss" module="classes">
@use '@/sass/views/my-list';
</style>
