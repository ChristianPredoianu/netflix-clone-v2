<script setup>
const emits = defineEmits(['go-to-edit-profile']);

const props = defineProps({
  profile: Object,
});
</script>

<template>
  <div :class="classes.profileCard">
    <font-awesome-icon
      :icon="props.profile.icon"
      :class="classes.profileIcon"
    />
    <p :class="classes.profileName">{{ props.profile.name }}</p>
    <font-awesome-icon icon="edit" :class="classes.editProfileIcon" />
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/cards/manage-profile-card';
</style>
