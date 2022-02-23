<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const emit = defineEmits(['onOpenModal']);

const moviesByGenre = computed(() => store.getters.GET_MOVIES_BY_GENRE);

function openModal(movie) {
  emit('onOpenModal', { isModalOpen: true, clickedMovie: movie });
}

console.log(moviesByGenre.value);
</script>

<template>
  <div
    :class="classes.movieCard"
    v-for="movie in moviesByGenre"
    :key="movie.id"
  >
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
