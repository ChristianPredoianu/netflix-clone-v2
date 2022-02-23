<script setup>
const emit = defineEmits(['onCloseModal']);

function closeModal() {
  emit('onCloseModal', false);
}
</script>

<template>
  <div :class="classes.backdrop" @click="closeModal"></div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/ui/movie-modal/backdrop';
</style>
