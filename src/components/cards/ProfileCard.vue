<script setup>
const props = defineProps({
  profile: Object,
});

const emit = defineEmits(['goToBrowse']);

function goToBrowseHandler(profile) {
  emit('goToBrowse', profile);
}
</script>

<template>
  <div :class="classes.profileCard" @click="goToBrowseHandler(profile)">
    <font-awesome-icon :icon="profile.icon" :class="classes.profileIcon" />
    <p :class="classes.profileName">{{ profile.name }}</p>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/cards/profile-card';
</style>
