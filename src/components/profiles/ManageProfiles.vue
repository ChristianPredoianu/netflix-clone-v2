<script setup>
import UserProfiles from '@/components/profiles/UserProfiles.vue';
import ProfilesBtn from '@/components/buttons/ProfilesBtn.vue';
const emits = defineEmits(['change-component']);

function backToUserProfiles() {
  emits('change-component', UserProfiles);
}
</script>

<template>
  <div :class="classes.manageProfilesWrapper">
    <h1>Manage Profiles</h1>
    <div :class="classes.profiles">
      <!-- -----------Dynamic loaded profiles goes here--------- -->
    </div>
    <div :class="classes.ctaWrapper">
      <ProfilesBtn @click="backToUserProfiles">Done</ProfilesBtn>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/profiles/manage-profiles';
</style>
