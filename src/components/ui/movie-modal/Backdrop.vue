<script setup>
const emit = defineEmits(["onCloseModals"]);

function closeModals() {
  emit("onCloseModals", false);
}
</script>

<template>
  <div :class="classes.backdrop" @click="closeModals"></div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/ui/movie-modal/backdrop';
</style>
