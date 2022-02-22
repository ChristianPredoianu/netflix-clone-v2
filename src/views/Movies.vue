<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import ResponsiveNav from '@/components/navs/ResponsiveNav.vue';
import store from '../store';

const movieGenres = computed(() => store.getters.GET_GENRES);
const selectedGenre = ref('popular');

const test = computed(() => store.getters.GET_MOVIES_BY_GENRE);
console.log(selectedGenre.value);
console.log(test.value);

function onChangeOption(event) {
  selectedGenre.value = event.target.value;
  store.dispatch('SET_USER_SELECTED_GENRE', selectedGenre.value);
}
</script>

<template>
  <ResponsiveNav />
  <div class="container">
    <div :class="classes.filter">
      <h1>Movies</h1>
      <select
        :class="classes.select"
        v-model="selectedGenre"
        @change="onChangeOption($event)"
      >
        <option
          v-for="movieGenre in movieGenres"
          :key="movieGenre.index"
          :value="movieGenre"
        >
          {{ movieGenre.charAt(0).toUpperCase() + movieGenre.slice(1) }}
        </option>
      </select>
    </div>
    {{ test }}
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/views/movies';
</style>
