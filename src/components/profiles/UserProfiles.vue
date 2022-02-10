<script setup>
import ProfilesBtn from '@/components/buttons/ProfilesBtn.vue';
import AddProfiles from './AddProfiles.vue';
import ManageProfiles from './ManageProfiles.vue';

const emits = defineEmits(['change-component']);

function componentAddProfiles() {
  emits('change-component', AddProfiles);
}

function componentManageProfiles() {
  emits('change-component', ManageProfiles);
}
</script>

<template>
  <div :class="classes.userProfilesWrapper">
    <h1 :class="classes.profilesHeading">Who is watching?</h1>
    <font-awesome-icon
      icon="plus-square"
      :class="classes.addIcon"
      @click="componentAddProfiles"
    />
    <p :class="classes.profileParagraph">Add a profile</p>
    <!--!!!!!!!!!!!!!! dynamic profiles goes here!!!!!!!!!!!! -->
    <div>
      <ProfilesBtn @click="componentManageProfiles"
        >Manage profiles</ProfilesBtn
      >
    </div>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/profiles/user-profiles';
</style>
