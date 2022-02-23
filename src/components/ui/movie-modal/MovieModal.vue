<script setup>
import Backdrop from '@/components/ui/movie-modal/Backdrop.vue';
import ModalOverlayVue from '@/components/ui/movie-modal/ModalOverlay.vue';
import ModalOverlay from './ModalOverlay.vue';

const emit = defineEmits(['onCloseModal']);

function closeModal() {
  emit('onCloseModal');
}

const props = defineProps({
  clickedMovie: Object,
});
</script>

<template>
  <teleport to="#backdrop-root">
    <Backdrop @onCloseModal="closeModal" />
  </teleport>
  <teleport to="#overlay-root">
    <ModalOverlay :clickedMovie="clickedMovie" />
  </teleport>
</template>

<style lang="scss" scoped></style>
