<script setup>
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import ProfilesBtn from "@/components/buttons/ProfilesBtn.vue";
import AddProfiles from "./AddProfiles.vue";
import ManageProfiles from "./ManageProfiles.vue";

onMounted(() => store.dispatch("SET_USER_PROFILES_FROM_DB"));

const emits = defineEmits(["change-component"]),
  router = useRouter(),
  store = useStore();

const userProfiles = computed(() => store.state.userProfiles.userProfiles);

function componentChange(comp) {
  emits("change-component", comp);
}

function goToBrowseWithSelectedProfile(selectedProfile) {
  store.dispatch("SET_CLICKED_PROFILE", selectedProfile);
  router.push({ name: "Browse" });
}
</script>

<template>
  <div :class="classes.userProfilesWrapper">
    <h1 :class="classes.profilesHeading">Who is watching?</h1>
    <div :class="classes.profiles">
      <div
        :class="classes.profileCard"
        v-for="profile in userProfiles"
        :key="userProfiles.id"
        @click="goToBrowseWithSelectedProfile(profile)"
      >
        <font-awesome-icon :icon="profile.icon" :class="classes.profileIcon" />
        <p :class="classes.profileName">{{ profile.name }}</p>
      </div>
    </div>
    <font-awesome-icon
      icon="plus-square"
      :class="classes.addIcon"
      @click="componentChange(AddProfiles)"
    />
    <p :class="classes.profileParagraph">Add a profile</p>

    <div>
      <ProfilesBtn @click="componentChange(ManageProfiles)">Manage profiles</ProfilesBtn>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/profiles/user-profiles';
</style>
