<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const emit = defineEmits(["onCloseMovieTrailerOverlay"]);

const movieTrailer = computed(() => store.state.theMovieDB.movieTrailer);
console.log(movieTrailer.value);

function closeTrailerOverlay() {
  emit("onCloseMovieTrailerOverlay");
}
</script>

<template>
  <div :class="classes.modal">
    <div :class="classes.iconContainer">
      <font-awesome-icon
        icon="times"
        :class="classes.close"
        @click="closeTrailerOverlay"
      />
    </div>

    <iframe
      :class="classes.ytPlayer"
      type="text/html"
      :src="`https://www.youtube.com/embed/${movieTrailer.results[0].key}`"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
    ></iframe>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/ui/movie-modal/modal-trailer-overlay';
</style>
