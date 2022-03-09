<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import ManageProfiles from "@/components/profiles/ManageProfiles.vue";
import ContinueBtn from "@/components/buttons/ContinueBtn.vue";
import ProfilesBtn from "@/components/buttons/ProfilesBtn.vue";

const emits = defineEmits(["change-component"]);
const store = useStore();

const clickedProfile = computed(() => store.state.userProfiles.clickedProfile);

const icons = ["smile", "flushed", "grin-tongue-wink", "grin-tears"];

const newProfileName = ref(clickedProfile.value.name);
const newProfileIcon = ref(clickedProfile.value.icon);

function newUserIcon(icon) {
  newProfileIcon.value = icon;
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
      <ContinueBtn>Save</ContinueBtn>
      <div :class="classes.cancelBtn">
        <ProfilesBtn>Cancel</ProfilesBtn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/profiles/edit-profiles';
</style>
