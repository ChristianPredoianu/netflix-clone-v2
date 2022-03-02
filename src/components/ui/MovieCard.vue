<script setup>
const emit = defineEmits(["onOpenModal"]);
const props = defineProps({
  movies: Object,
});

function openModal(movie) {
  emit("onOpenModal", movie);
}
</script>

<template>
  <div :class="classes.movieCard" v-for="movie in props.movies" :key="movie.id">
    <img
      :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
      alt="movie poster"
      @click="openModal(movie)"
    />
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/ui/movie-card';
</style>
