<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

import EditProfiles from "@/components/profiles/EditProfiles.vue";
import UserProfiles from "@/components/profiles/UserProfiles.vue";
import ProfilesBtn from "@/components/buttons/ProfilesBtn.vue";

const emits = defineEmits(["change-component"]);
const store = useStore();

const userProfiles = computed(() => store.state.userProfiles.userProfiles);

function goToEditProfile(profile) {
  store.dispatch("SET_CLICKED_PROFILE", profile);
  emits("change-component", EditProfiles);
}

function componentChange() {
  emits("change-component", UserProfiles);
}
</script>

<template>
  <div :class="classes.userProfilesWrapper">
    <h1 :class="classes.profilesHeading">Manage Profiles</h1>
    <div :class="classes.profiles">
      <div
        :class="classes.profileCard"
        v-for="profile in userProfiles"
        :key="userProfiles.id"
        @click="goToEditProfile(profile)"
      >
        <font-awesome-icon :icon="profile.icon" :class="classes.profileIcon" />
        <p :class="classes.profileName">{{ profile.name }}</p>
        <font-awesome-icon icon="edit" :class="classes.editProfileIcon" />
      </div>
    </div>
    <div>
      <ProfilesBtn @click="componentChange">Back</ProfilesBtn>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/profiles/manage-profiles';
</style>
