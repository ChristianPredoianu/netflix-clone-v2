<script setup>
import UserProfiles from '@/components/profiles/UserProfiles.vue';
const emits = defineEmits(['change-component']);

function backToUserProfiles() {
  emits('change-component', UserProfiles);
}
</script>

<template>
  <div>
    <h1>this is manage profiles</h1>

    <button @click="backToUserProfiles">Done</button>
  </div>
</template>

<style lang="scss" module="classes"></style>
