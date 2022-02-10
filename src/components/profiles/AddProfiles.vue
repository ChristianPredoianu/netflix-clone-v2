<script setup>
import UserProfiles from '@/components/profiles/UserProfiles.vue';
import ContinueBtn from '@/components/buttons/ContinueBtn.vue';
import ProfilesBtn from '@/components/buttons/ProfilesBtn.vue';

const emits = defineEmits(['change-component']);

function backToUserProfiles() {
  emits('change-component', UserProfiles);
}
</script>

<template>
  <div :class="classes.addProfilesWrapper">
    <h1 :class="classes.profileHeading">Add a profile</h1>
    <h2 :class="classes.profileSecondaryHeading">
      Add a profile for another person watching Netclone
    </h2>

    <div :class="classes.profileFormWrapper">
      <font-awesome-icon icon="smile" :class="classes.icon" />
      <input
        type="text"
        required
        placeholder="Name"
        :class="classes.profileInput"
      />
    </div>
    <div :class="classes.ctaWrapper">
      <div :class="classes.continueBtn">
        <ContinueBtn>Continue</ContinueBtn>
      </div>
      <ProfilesBtn @click="backToUserProfiles">Back</ProfilesBtn>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/profiles/add-profiles';
</style>
