<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { update, ref as storageRef, getDatabase } from "firebase/database";
import UserProfiles from "@/components/profiles/UserProfiles.vue";
import ManageProfiles from "@/components/profiles/ManageProfiles.vue";
import ContinueBtn from "@/components/buttons/ContinueBtn.vue";
import ProfilesBtn from "@/components/buttons/ProfilesBtn.vue";

const emits = defineEmits(["change-component"]),
  store = useStore();

const clickedProfile = computed(() => store.state.userProfiles.clickedProfile),
  currentUser = computed(() => store.state.userData.currentUser);

const icons = ["smile", "flushed", "grin-tongue-wink", "grin-tears"];

const newProfileName = ref(clickedProfile.value.name),
  newProfileIcon = ref(clickedProfile.value.icon);

function newUserIcon(icon) {
  newProfileIcon.value = icon;
}

function updateProfile() {
  const newProfile = { name: newProfileName.value, icon: newProfileIcon.value };
  const db = getDatabase();
  const updateRef = storageRef(
    db,
    `users/${currentUser.value.id}/profiles/${clickedProfile.value.id}`
  );

  update(updateRef, newProfile);

  componentChange(UserProfiles);
}

function deleteProfile() {
  firebase
    .database()
    .ref(`users/${currentUser.value.id}`)
    .child(`profiles/${clickedProfile.value.id}`)
    .remove();

  componentChange(UserProfiles);
}

function componentChange(comp) {
  emits("change-component", comp);
}
</script>

<template>
  <div :class="classes.editProfileWrapper">
    <h1 :class="classes.editProfileHeading">Edit profile</h1>
    <div :class="classes.profileInfo">
      <div :class="classes.iconsWrapper">
        <font-awesome-icon :icon="newProfileIcon" :class="classes.profileIcon" />
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
      <ContinueBtn @click="updateProfile">Save Profile</ContinueBtn>
      <ContinueBtn @click="deleteProfile">Delete Profile</ContinueBtn>
      <div :class="classes.cancelBtn">
        <ProfilesBtn @click="componentChange(ManageProfiles)">Cancel</ProfilesBtn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/profiles/edit-profiles';
</style>
