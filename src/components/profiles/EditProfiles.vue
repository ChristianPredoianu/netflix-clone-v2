<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import {
  update,
  remove,
  ref as storageRef,
  getDatabase,
  onValue,
  set,
} from 'firebase/database';
import UserProfiles from '@/components/profiles/UserProfiles.vue';
import ManageProfiles from '@/components/profiles/ManageProfiles.vue';
import ContinueBtn from '@/components/buttons/ContinueBtn.vue';
import ProfilesBtn from '@/components/buttons/ProfilesBtn.vue';

const emits = defineEmits(['change-component']);
const store = useStore();

const clickedProfile = computed(() => store.state.userProfiles.clickedProfile);
const currentUser = computed(() => store.state.userData.currentUser.id);
const userProfiles = computed(() => store.state.userProfiles);

console.log(clickedProfile.value);

const icons = ['smile', 'flushed', 'grin-tongue-wink', 'grin-tears'];

const newProfileName = ref(clickedProfile.value.name);
const newProfileIcon = ref(clickedProfile.value.icon);

const db = getDatabase();
const dbRef = storageRef(
  db,
  `users/${currentUser.value}/profiles/${clickedProfile.value.id}`
);

function newUserIcon(icon) {
  newProfileIcon.value = icon;
}

function updateProfile() {
  const newProfile = { icon: newProfileIcon.value, name: newProfileName.value };

  update(dbRef, newProfile); /* .then(() =>
    store.dispatch('SET_USER_PROFILES_FROM_DB') */

  /* componentChange(UserProfiles); */
}

/* function deleteProfile() {
  remove(dbRef);
  componentChange(UserProfiles);
} */

function componentChange(comp) {
  emits('change-component', comp);
}
</script>

<template>
  <div :class="classes.editProfileWrapper">
    <h1 :class="classes.editProfileHeading">Edit profile</h1>
    <div :class="classes.profileInfo">
      <div :class="classes.iconsWrapper">
        <font-awesome-icon
          :icon="newProfileIcon"
          :class="classes.profileIcon"
        />
      </div>
      <input
        type="text"
        placeholder="Name"
        v-model="newProfileName"
        :class="[
          newProfileName.length > 1
            ? [classes.nameInput, classes.validNameInput]
            : classes.nameInput,
        ]"
      />
    </div>

    <h2 :class="classes.avatarHeading">Choose an avatar</h2>
    <div :class="classes.newIconsWrapper">
      <font-awesome-icon
        :icon="icon"
        :class="classes.newIcon"
        v-for="icon in icons"
        :key="icon.index"
        @click="newUserIcon(icon)"
      />
    </div>

    <div :class="classes.ctaWrapper">
      <button @click="updateProfile">dsadsa</button>
      <ContinueBtn @click="updateProfile">Save Profile</ContinueBtn>
      <ContinueBtn @click="deleteProfile">Delete Profile</ContinueBtn>
      <div :class="classes.cancelBtn">
        <ProfilesBtn @click="componentChange(ManageProfiles)"
          >Cancel</ProfilesBtn
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/profiles/edit-profiles';
</style>
