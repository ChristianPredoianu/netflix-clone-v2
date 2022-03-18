<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import ResponsiveNav from "@/components/navs/ResponsiveNav.vue";
import MovieCard from "@/components/ui/MovieCard.vue";

const store = useStore();
const userMovieList = computed(() => store.state.userMovieList.userMovieList);
console.log(userMovieList.value);
</script>

<template>
  <ResponsiveNav />
  <main :class="classes.main">
    <div class="container">
      <div :class="classes.movieCardsGrid">
        <MovieCard :movies="userMovieList" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" module="classes">
@use '@/sass/views/my-list';
</style>
