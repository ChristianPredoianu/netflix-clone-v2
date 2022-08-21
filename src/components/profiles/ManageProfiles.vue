<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import EditProfiles from '@/components/profiles/EditProfiles.vue';
import UserProfiles from '@/components/profiles/UserProfiles.vue';
import ManageProfileCard from '@/components/cards/ManageProfileCard.vue';
import ProfilesBtn from '@/components/buttons/ProfilesBtn.vue';

const emits = defineEmits(['change-component']);

const store = useStore();

const userProfiles = computed(() => store.state.userProfiles.userProfiles);

function goToEditProfile(profile) {
  store.dispatch('SET_CLICKED_PROFILE', profile);
  emits('change-component', EditProfiles);
}

function componentChange() {
  emits('change-component', UserProfiles);
}
</script>

<template>
  <div :class="classes.userProfilesWrapper">
    <h1 :class="classes.profilesHeading">Manage Profiles</h1>
    <div :class="classes.profiles">
      <ManageProfileCard
        v-for="profile in userProfiles"
        :key="profile.id"
        :profile="profile"
      />
    </div>
    <div>
      <ProfilesBtn @click="componentChange">Back</ProfilesBtn>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/profiles/manage-profiles';
</style>
