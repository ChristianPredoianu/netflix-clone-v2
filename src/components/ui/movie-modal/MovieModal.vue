<script setup>
import { ref } from "vue";

import Backdrop from "@/components/ui/movie-modal/Backdrop.vue";
import ModalOverlay from "@/components/ui/movie-modal/ModalOverlay.vue";
import ModalTrailerOverlay from "@/components/ui/movie-modal/ModalTrailerOverlay.vue";

const isMovieTrailerOverlayOpen = ref(false);
const emit = defineEmits(["onCloseModals"]);

function closeModals() {
  emit("onCloseModals");
}

function openMovieTrailerOverlay() {
  isMovieTrailerOverlayOpen.value = true;
}

function closeMovieTrailerOverlay() {
  isMovieTrailerOverlayOpen.value = false;
}

const props = defineProps({
  clickedMovie: Object,
});
</script>

<template>
  <teleport to="#backdrop-root">
    <Backdrop @onCloseModals="closeModals" />
  </teleport>
  <teleport to="#overlay-root">
    <ModalOverlay
      v-if="!isMovieTrailerOverlayOpen"
      :clickedMovie="clickedMovie"
      @onOpenMovieTrailerOverlay="openMovieTrailerOverlay"
    />
    <ModalTrailerOverlay v-else @onCloseMovieTrailerOverlay="closeMovieTrailerOverlay" />
  </teleport>
</template>

<style lang="scss" scoped></style>
