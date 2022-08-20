<script setup>
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import ProfilesBtn from '@/components/buttons/ProfilesBtn.vue';
import AddProfiles from '@/components/profiles/AddProfiles.vue';
import ManageProfiles from '@/components/profiles/ManageProfiles.vue';
import ProfileCard from '@/components/cards/ProfileCard.vue';

const emits = defineEmits(['change-component']);
const router = useRouter();
const store = useStore();

const userProfiles = computed(() => store.state.userProfiles.userProfiles);

function componentChange(comp) {
  emits('change-component', comp);
}

console.log(userProfiles.value);

function goToBrowseWithSelectedProfile(selectedProfile) {
  store.dispatch('SET_CLICKED_PROFILE', selectedProfile);
  router.push({ name: 'Browse' });
}
</script>

<template>
  <div :class="classes.userProfilesWrapper">
    <h1 :class="classes.profilesHeading">Who is watching?</h1>
    <div :class="classes.profiles" v-if="userProfiles">
      <ProfileCard
        v-for="profile in userProfiles"
        :key="profile.id"
        :profile="profile"
        @goToBrowse="goToBrowseWithSelectedProfile"
      />
    </div>
    <font-awesome-icon
      icon="plus-square"
      :class="classes.addIcon"
      @click="componentChange(AddProfiles)"
    />
    <p :class="classes.profileParagraph">Add a profile</p>

    <div>
      <ProfilesBtn @click="componentChange(ManageProfiles)"
        >Manage profiles</ProfilesBtn
      >
    </div>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/profiles/user-profiles';
</style>
