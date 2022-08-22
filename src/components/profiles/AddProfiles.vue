<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { getDatabase, ref as storageRef, set, push } from 'firebase/database';
import UserProfiles from '@/components/profiles/UserProfiles.vue';
import ContinueBtn from '@/components/buttons/ContinueBtn.vue';
import ProfilesBtn from '@/components/buttons/ProfilesBtn.vue';

const emits = defineEmits(['change-component']);
const store = useStore();

const profileName = ref('');
let inputErrorMsg = ref(null);

const currentUserId = computed(() => store.state.userData.currentUser.id);
const userProfiles = computed(() => store.state.userProfiles.userProfiles);

function validateProfileInput() {
  if (!profileName.value) {
    inputErrorMsg.value = 'Please enter a user name';
  } else if (userProfiles.value.length >= 5) {
    inputErrorMsg.value = 'You can only have a maximum of 5 Profiles.';
  } else if (checkIfProfileExists() !== -1) {
    inputErrorMsg.value = 'This profile name already exists';
  } else {
    inputErrorMsg.value = null;
  }
}

function checkIfProfileExists() {
  const existingProfileIndex = userProfiles.value.findIndex(
    (profile) => profile.name === profileName.value
  );

  return existingProfileIndex;
}

function addProfile() {
  validateProfileInput();
  if (checkIfProfileExists() === -1 && inputErrorMsg.value === null) {
    addProfileToDb();
    emits('change-component', UserProfiles);
  }
}

function addProfileToDb() {
  const profile = {
    name: profileName.value,
    icon: 'smile',
  };

  const db = getDatabase();
  const profilesRef = storageRef(db, `users/${currentUserId.value}/profiles`);

  const newProfilesRef = push(profilesRef);

  if (userProfiles.value.length < 5) {
    set(newProfilesRef, profile);
    store.dispatch('SET_USER_PROFILES_FROM_DB');
  }
}

function componentChange() {
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
        placeholder="Name"
        v-model="profileName"
        :class="[
          profileName.length > 1
            ? [classes.nameInput, classes.validNameInput]
            : classes.nameInput,
        ]"
      />
    </div>

    <p v-if="inputErrorMsg">{{ inputErrorMsg }}</p>
    <div :class="classes.ctaWrapper">
      <div :class="classes.continueBtn">
        <ContinueBtn @click="addProfile">Continue</ContinueBtn>
      </div>
      <ProfilesBtn @click="componentChange">Back</ProfilesBtn>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/profiles/add-profiles';
</style>
